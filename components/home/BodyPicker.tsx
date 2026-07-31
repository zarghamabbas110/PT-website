"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import {
  CAND, DEG, TARGET_HEIGHT, baseName, bonesFor, collectBones, dir, type J,
} from "@/lib/rig";
import type { BodyRegion } from "@/data/schema";

/* ==========================================================================
   BodyPicker — choose where it hurts, then go straight to those exercises.

   The figure walks on from the corner, settles centre, and turns slowly on the
   spot with the arms out. Moving over it lights up a body region; clicking one
   flies the camera in and opens the library filtered to that region.

   HOW A CLICK FINDS A REGION
   Not by raycasting the character mesh — a skinned mesh gives an unhelpfully
   precise answer (you hit "left forearm skin", not "the elbow") and is
   expensive to test against. Instead, invisible hit volumes are built from the
   skeleton once the model loads: a sphere at each joint, a capsule down each
   limb, boxes for the front and back of the trunk. The volumes are what the
   pointer tests against, so the regions are exactly as forgiving as they
   should be, and the whole thing costs almost nothing per frame.
   ========================================================================== */

/** Regions in the order they read down the body, with what to say about each. */
const BLURB: Record<BodyRegion, string> = {
  Cervical: "Neck movement, posture and headache",
  Shoulder: "The largest set — range, cuff and scapular control",
  Elbow: "Tennis and golfer's elbow, stiffness after a cast",
  "Wrist & Hand": "Grip, tendon glides and nerve symptoms",
  Thoracic: "The stiff upper back, ribs and breathing",
  Lumbar: "Low back pain, sciatica and the extension positions",
  Core: "Deep abdominal control, planks and bracing",
  "Pelvis & Hip": "Gluteal strength, bridges and hip range",
  Knee: "After surgery, arthritis and quadriceps work",
  "Ankle & Foot": "Sprains, calf loading, balance and the arch",
};

type Hot = {
  region: BodyRegion;
  mesh: THREE.Mesh;
};

export default function BodyPicker({ className }: { className?: string }) {
  const mount = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState<BodyRegion | null>(null);
  const [chosen, setChosen] = useState<BodyRegion | null>(null);
  const [ready, setReady] = useState(false);

  // The scene reads these every frame; state alone would go stale in the loop.
  const hoverRef = useRef<BodyRegion | null>(null);
  hoverRef.current = hover;

  useEffect(() => {
    const host = mount.current;
    if (!host) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
    scene.add(new THREE.HemisphereLight(0xffffff, 0x60605a, 2.0));
    const key = new THREE.DirectionalLight(0xffffff, 2.1);
    key.position.set(2.5, 4.5, 3.5);
    key.castShadow = true;
    key.shadow.mapSize.set(2048, 2048);
    key.shadow.radius = 3;
    key.shadow.bias = -0.0008;
    {
      const c = key.shadow.camera;
      c.near = 0.5; c.far = 14;
      c.left = -2; c.right = 2; c.top = 2.4; c.bottom = -0.4;
      c.updateProjectionMatrix();
    }
    scene.add(key);
    const fill = new THREE.DirectionalLight(0xffffff, 0.7);
    fill.position.set(-3, 2, -2);
    scene.add(fill);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(Math.max(window.devicePixelRatio, 2), 3));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    host.appendChild(renderer.domElement);
    renderer.domElement.style.touchAction = "manipulation";

    const shadowFloor = new THREE.Mesh(
      new THREE.PlaneGeometry(12, 12),
      new THREE.ShadowMaterial({ opacity: 0.2 })
    );
    shadowFloor.rotation.x = -Math.PI / 2;
    shadowFloor.receiveShadow = true;
    scene.add(shadowFloor);

    const size = () => {
      const w = host.clientWidth || 400, h = host.clientHeight || 560;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    size();
    const resize = new ResizeObserver(size);
    resize.observe(host);

    /* The figure lives inside a group that spins; the group lives inside one
       that walks it on from the corner. Keeping the two apart means the entry
       animation cannot disturb the turn, or the hit volumes. */
    const spin = new THREE.Group();
    const stage = new THREE.Group();
    stage.add(spin);
    scene.add(stage);

    const hots: Hot[] = [];
    const hotFor = (r: BodyRegion) => hots.filter((h) => h.region === r);
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    let pointerInside = false;

    let raf = 0;
    let disposed = false;
    /** 0 → 1 as the figure walks on. */
    let entry = 0;
    /** Where the camera is heading; the target moves when a region is picked. */
    const camAt = new THREE.Vector3(0, 1.0, 3.7);
    const camLook = new THREE.Vector3(0, 0.95, 0);
    const wantAt = camAt.clone();
    const wantLook = camLook.clone();
    let spinning = true;
    const debugFreeze =
      typeof window !== "undefined" &&
      new URLSearchParams(window.location.search).get("hit") === "1";

    new GLTFLoader().load("/models/human.glb", (gltf) => {
      if (disposed) return;
      const model = gltf.scene;
      spin.add(model);
      scene.updateMatrixWorld(true);

      model.traverse((o) => {
        (o as THREE.Mesh).frustumCulled = false;
        if ((o as THREE.Mesh).isMesh) {
          (o as THREE.Mesh).castShadow = true;
          (o as THREE.Mesh).receiveShadow = true;
        }
      });

      const raw = collectBones(model);
      const first = (k: J) => bonesFor(raw, k)[0] ?? null;

      /* --- T-pose ------------------------------------------------------ */
      // The avatar loads in an A-pose. Swinging the upper arms out to
      // horizontal makes every region reachable by the pointer without the
      // arms overlapping the trunk.
      const armOut = (k: J, sign: number) => {
        const bone = first(k);
        const childKey: J = k === "rUpper" ? "rFore" : "lFore";
        const child = first(childKey);
        if (!bone || !child || !bone.parent) return;
        const restDir = child
          .getWorldPosition(new THREE.Vector3())
          .sub(bone.getWorldPosition(new THREE.Vector3()))
          .normalize();
        const target = dir(90, sign * 90);
        const inv = bone.parent.getWorldQuaternion(new THREE.Quaternion()).invert();
        const q = new THREE.Quaternion().setFromUnitVectors(
          restDir.clone().applyQuaternion(bone.parent.getWorldQuaternion(new THREE.Quaternion()).invert()).normalize(),
          target.clone().applyQuaternion(inv).normalize()
        );
        bone.quaternion.premultiply(q);
        bone.updateMatrixWorld(true);
      };
      armOut("rUpper", -1);
      armOut("lUpper", 1);
      scene.updateMatrixWorld(true);

      /* --- scale and stand on the floor --------------------------------- */
      const box = new THREE.Box3().setFromObject(model);
      const h = box.max.y - box.min.y || 1;
      model.scale.setScalar(TARGET_HEIGHT / h);
      scene.updateMatrixWorld(true);
      const box2 = new THREE.Box3().setFromObject(model);
      model.position.y -= box2.min.y;
      scene.updateMatrixWorld(true);

      /* --- hit volumes -------------------------------------------------- */
      // ?hit=1 paints them, which is the only sane way to check that a region
      // covers the part of the body it claims to.
      const debug =
        typeof window !== "undefined" &&
        new URLSearchParams(window.location.search).get("hit") === "1";
      const TINT: Record<BodyRegion, number> = {
        Cervical: 0xff3b30, Shoulder: 0xff9500, Elbow: 0xffcc00,
        "Wrist & Hand": 0x34c759, Thoracic: 0x00c7be, Lumbar: 0x30b0c7,
        Core: 0x007aff, "Pelvis & Hip": 0x5856d6, Knee: 0xaf52de,
        "Ankle & Foot": 0xff2d55,
      };
      const matFor = (r: BodyRegion) =>
        debug
          ? new THREE.MeshBasicMaterial({
              color: TINT[r], transparent: true, opacity: 0.45, depthTest: false,
            })
          : new THREE.MeshBasicMaterial({ visible: false });
      const wp = (k: J) => {
        const b = first(k);
        return b ? b.getWorldPosition(new THREE.Vector3()) : null;
      };
      const local = (v: THREE.Vector3) => spin.worldToLocal(v.clone());

      const add = (region: BodyRegion, mesh: THREE.Mesh) => {
        mesh.userData.region = region;
        spin.add(mesh);
        hots.push({ region, mesh });
      };
      /** A ball at a joint, in the spin group's own space. */
      const ball = (region: BodyRegion, at: THREE.Vector3 | null, r: number) => {
        if (!at) return;
        const m = new THREE.Mesh(new THREE.SphereGeometry(r, 12, 10), matFor(region));
        m.position.copy(local(at));
        add(region, m);
      };
      /** A sleeve down a limb, between two joints. */
      const sleeve = (region: BodyRegion, a: THREE.Vector3 | null, b: THREE.Vector3 | null, r: number) => {
        if (!a || !b) return;
        const la = local(a), lb = local(b);
        const len = la.distanceTo(lb) || 0.01;
        const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, len, 10), matFor(region));
        m.position.copy(la).lerp(lb, 0.5);
        m.quaternion.setFromUnitVectors(
          new THREE.Vector3(0, 1, 0),
          lb.clone().sub(la).normalize()
        );
        add(region, m);
      };
      /** A slab across the trunk — `z` picks the front or the back of it. */
      const slab = (
        region: BodyRegion, a: THREE.Vector3 | null, b: THREE.Vector3 | null,
        z: number, w: number, d: number
      ) => {
        if (!a || !b) return;
        const la = local(a), lb = local(b);
        const m = new THREE.Mesh(
          new THREE.BoxGeometry(w, Math.max(la.distanceTo(lb), 0.12), d),
          matFor(region)
        );
        m.position.copy(la).lerp(lb, 0.5);
        m.position.z += z;
        add(region, m);
      };

      const neck = wp("neck"), head = wp("head");
      const spineU = wp("spineUpper"), spineL = wp("spineLower"), hips = wp("hips");
      /** A point a fraction of the way from a to b. */
      const at = (a: THREE.Vector3 | null, b: THREE.Vector3 | null, f: number) =>
        a && b ? a.clone().lerp(b, f) : null;

      ball("Cervical", neck, 0.12);
      ball("Cervical", head, 0.15);

      // Along each arm rather than between its joints. Splitting at the elbow
      // itself gives a shoulder region that runs half the arm span and a hand
      // region that reaches back to the chest; splitting by distance along the
      // whole limb gives each of the three the share of it a person expects.
      for (const side of [["rUpper", "rFore", "rHand"], ["lUpper", "lFore", "lHand"]] as J[][]) {
        const sh = wp(side[0]), el = wp(side[1]), ha = wp(side[2]);
        ball("Shoulder", sh, 0.12);
        sleeve("Shoulder", sh, at(sh, ha, 0.42), 0.085);
        sleeve("Elbow", at(sh, ha, 0.42), at(sh, ha, 0.62), 0.095);
        ball("Elbow", el, 0.085);
        sleeve("Wrist & Hand", at(sh, ha, 0.62), ha, 0.075);
        ball("Wrist & Hand", ha, 0.1);
      }

      // The trunk is split front from back as well as top from bottom: the
      // abdomen and the low back sit at the same height and are different
      // regions, so the answer depends on which way the figure is turned.
      const waist = at(hips, spineU, 0.55);
      slab("Thoracic", waist, neck, 0.075, 0.36, 0.16);
      slab("Thoracic", waist, neck, -0.075, 0.36, 0.16);
      slab("Core", hips, waist, 0.085, 0.32, 0.15);
      slab("Lumbar", hips, waist, -0.085, 0.32, 0.15);
      ball("Pelvis & Hip", hips, 0.16);

      // And the same along each leg: hip, knee, then everything below it.
      for (const side of [["rThigh", "rShin", "rFoot", "rToe"], ["lThigh", "lShin", "lFoot", "lToe"]] as J[][]) {
        const hip = wp(side[0]), kn = wp(side[1]), an = wp(side[2]), to = wp(side[3]);
        sleeve("Pelvis & Hip", hip, at(hip, an, 0.4), 0.11);
        sleeve("Knee", at(hip, an, 0.4), at(hip, an, 0.62), 0.115);
        ball("Knee", kn, 0.11);
        sleeve("Ankle & Foot", at(hip, an, 0.62), an, 0.095);
        ball("Ankle & Foot", an, 0.1);
        ball("Ankle & Foot", to, 0.1);
      }

      setReady(true);
    });

    /* --- the highlight ------------------------------------------------- */
    // A soft ring that sits on whichever region is under the pointer. Tinting
    // the character itself is not an option: it is one skinned mesh with one
    // material, so there is no per-region surface to colour.
    const ringGeo = new THREE.TorusGeometry(0.19, 0.022, 10, 32);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xd8552f, transparent: true, opacity: 0.9, depthTest: false,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.renderOrder = 10;
    ring.visible = false;
    scene.add(ring);

    // Turning it by hand matters: the low back is on the side you cannot see,
    // and an arm is only pointable during the half of the turn it is side-on.
    let dragging = false;
    let dragged = false;
    let lastX = 0;

    const onDown = (e: PointerEvent) => {
      dragging = true;
      dragged = false;
      lastX = e.clientX;
      renderer.domElement.setPointerCapture(e.pointerId);
    };
    const onUp = (e: PointerEvent) => {
      dragging = false;
      if (renderer.domElement.hasPointerCapture(e.pointerId)) {
        renderer.domElement.releasePointerCapture(e.pointerId);
      }
    };
    const onMove = (e: PointerEvent) => {
      const r = renderer.domElement.getBoundingClientRect();
      pointer.x = ((e.clientX - r.left) / r.width) * 2 - 1;
      pointer.y = -((e.clientY - r.top) / r.height) * 2 + 1;
      pointerInside = true;
      if (dragging) {
        const dx = e.clientX - lastX;
        lastX = e.clientX;
        if (Math.abs(dx) > 0) dragged = true;
        spin.rotation.y += dx * 0.011;
      }
    };
    const onLeave = () => { pointerInside = false; dragging = false; };
    const onClick = () => {
      // A drag that happened to end on a region is not a choice.
      if (dragged) return;
      const r = hoverRef.current;
      if (!r) return;
      setChosen(r);
      spinning = false;
      const hit = hotFor(r)[0];
      if (hit) {
        const at = hit.mesh.getWorldPosition(new THREE.Vector3());
        wantLook.copy(at);
        // Come in along the line from the body's axis out through the region,
        // so the camera ends up looking straight at it rather than past it.
        const out = at.clone().setY(0);
        if (out.lengthSq() < 1e-4) out.set(0, 0, 1);
        out.normalize();
        wantAt.copy(at).addScaledVector(out, 1.15).add(new THREE.Vector3(0, 0.16, 0));
      }
      // A full navigation rather than a client-side push: the library is a
      // different page with its own heavy content, and leaving this way drops
      // the WebGL context instead of carrying it along.
      window.setTimeout(() => {
        window.location.assign(`/exercises?region=${encodeURIComponent(r)}`);
      }, 780);
    };
    renderer.domElement.addEventListener("pointerdown", onDown);
    renderer.domElement.addEventListener("pointerup", onUp);
    renderer.domElement.addEventListener("pointermove", onMove);
    renderer.domElement.addEventListener("pointerleave", onLeave);
    renderer.domElement.addEventListener("click", onClick);

    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      // Walk on from the left, rising as it comes.
      entry = Math.min(entry + dt / 1.1, 1);
      const e = 1 - Math.pow(1 - entry, 3);
      stage.position.set(-1.9 * (1 - e), -0.35 * (1 - e), -1.2 * (1 - e));
      stage.scale.setScalar(0.55 + 0.45 * e);

      // Full speed when nobody is looking; a crawl once the pointer is over it;
      // and a dead stop the moment a region lights up, because a target that
      // keeps moving out from under the cursor cannot be clicked.
      if (spinning && !dragging && !debugFreeze) {
        const rate = !pointerInside ? 0.62 : hoverRef.current ? 0 : 0.18;
        spin.rotation.y += dt * rate;
      }

      let found: BodyRegion | null = null;
      if (pointerInside && hots.length && entry > 0.85 && spinning) {
        raycaster.setFromCamera(pointer, camera);
        const hit = raycaster.intersectObjects(hots.map((h) => h.mesh), false)[0];
        if (hit) {
          found = hit.object.userData.region as BodyRegion;
          ring.position.copy(hit.object.getWorldPosition(new THREE.Vector3()));
          ring.quaternion.copy(camera.quaternion);
          const s = hit.object.userData.region === "Pelvis & Hip" ? 1.1 : 0.85;
          ring.scale.setScalar(s);
          ring.visible = true;
        }
      }
      if (!found && spinning) ring.visible = false;
      if (found !== hoverRef.current) setHover(found);
      renderer.domElement.style.cursor = found ? "pointer" : "default";

      camAt.lerp(wantAt, 1 - Math.pow(0.001, dt));
      camLook.lerp(wantLook, 1 - Math.pow(0.001, dt));
      camera.position.copy(camAt);
      camera.lookAt(camLook);

      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      resize.disconnect();
      renderer.domElement.removeEventListener("pointerdown", onDown);
      renderer.domElement.removeEventListener("pointerup", onUp);
      renderer.domElement.removeEventListener("pointermove", onMove);
      renderer.domElement.removeEventListener("pointerleave", onLeave);
      renderer.domElement.removeEventListener("click", onClick);
      renderer.dispose();
      host.replaceChildren();
    };
  }, []);

  const label = chosen ?? hover;

  return (
    <div className={className}>
      <div className="relative flex-1">
        <div ref={mount} className="h-full w-full" aria-hidden />
      </div>

      {/* The same choice, as plain links. The 3D figure is the nice way in;
          this is the way in that works with a keyboard, a screen reader, or no
          WebGL at all — and it sits below the figure rather than over it, so
          it never covers the legs. */}
      <div
        className={`mx-auto mt-2 w-full max-w-xl rounded-3xl border border-crimson-100 bg-cream-50 p-4 transition-opacity duration-500 ${
          ready ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="text-center text-[0.78rem] font-bold uppercase tracking-[0.18em] text-crimson-600">
          {label ?? "Point to where it hurts"}
        </p>
        <p className="mx-auto mt-1 min-h-[2.4em] max-w-sm text-center text-[0.92rem] leading-snug text-espresso-700/75">
          {label
            ? BLURB[label]
            : "Drag to turn the figure, click a region, and the library opens filtered to it."}
        </p>
        <div className="mt-3 flex flex-wrap justify-center gap-1.5">
          {(Object.keys(BLURB) as BodyRegion[]).map((r) => (
            <a
              key={r}
              href={`/exercises?region=${encodeURIComponent(r)}`}
              onMouseEnter={() => setHover(r)}
              onMouseLeave={() => setHover(null)}
              className={`rounded-full px-3 py-1.5 text-[0.78rem] font-semibold transition-all ${
                label === r
                  ? "bg-crimson-500 text-cream-50"
                  : "bg-cream-100 text-espresso-700/75 ring-1 ring-crimson-100 hover:ring-crimson-300"
              }`}
            >
              {r}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
