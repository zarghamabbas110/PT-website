"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import type { Pose } from "@/lib/figure";
import type { Prop } from "./PhysioFigure";

/* ==========================================================================
   Human3D — poses a rigged character from the same Pose that draws the flat
   figure.

   RIG-AGNOSTIC BY DESIGN
   Every source rigs and names its bones differently — a Mixamo export calls
   the upper arm "RightArm", a ripped game character calls it "ShoulderR". So
   the driver works in *logical* joints (upper arm, forearm, thigh…) and, at
   load time, resolves each against whatever names the model actually uses.
   Drop in a new model and it just works, as long as it has a real skeleton.

   HOW A BONE IS POSED
   Each bone is aimed — rotated so its rest direction meets a target direction
   derived from the pose angles — and then rolled about its own length so its
   bending plane faces the front of the body. Without the roll a bent elbow or
   knee twists sideways (the "zombie" look). The joint angles are lifted from
   the 2D figure engine, so elbows and knees fold the anatomical way.

   Some source models carry several skeletons (one per mesh). A logical joint
   therefore maps to *every* matching bone, and all are driven together.
   ========================================================================== */

const DEG = Math.PI / 180;
/** Scale every model to a consistent standing height so framing is stable. */
const TARGET_HEIGHT = 1.8;
/** Half-turn if the loaded model is authored facing away from the camera. */
const MODEL_FACING = 0;

/** The logical joints the driver knows how to pose. */
type J =
  | "hips" | "spineLower" | "spineUpper" | "neck" | "head"
  | "rUpper" | "rFore" | "rHand" | "lUpper" | "lFore" | "lHand"
  | "rThigh" | "rShin" | "rFoot" | "rToe"
  | "lThigh" | "lShin" | "lFoot" | "lToe";

/**
 * Candidate bone base-names per joint, best first. Standard (Mixamo) names lead
 * so a standard rig always wins; game-rip names follow as fallbacks.
 */
const CAND: Record<J, string[]> = {
  hips: ["Hips", "Hip"],
  spineLower: ["Spine", "Waist"],
  spineUpper: ["Spine2", "Spine1", "Bust", "Chest"],
  neck: ["Neck"],
  head: ["Head"],
  rUpper: ["RightArm", "ShoulderR", "UpperArmR"],
  rFore: ["RightForeArm", "ArmR", "ForearmR"],
  rHand: ["RightHand", "HandR"],
  lUpper: ["LeftArm", "ShoulderL", "UpperArmL"],
  lFore: ["LeftForeArm", "ArmL", "ForearmL"],
  lHand: ["LeftHand", "HandL"],
  rThigh: ["RightUpLeg", "LegR", "ThighR"],
  rShin: ["RightLeg", "KneeR", "ShinR", "CalfR"],
  rFoot: ["RightFoot", "FootR"],
  rToe: ["RightToeBase", "ToeR", "ToeBaseR"],
  lThigh: ["LeftUpLeg", "LegL", "ThighL"],
  lShin: ["LeftLeg", "KneeL", "ShinL", "CalfL"],
  lFoot: ["LeftFoot", "FootL"],
  lToe: ["LeftToeBase", "ToeL", "ToeBaseL"],
};

/** Which joint each bone points toward at rest (for measuring rest direction). */
const CHILD: Partial<Record<J, J>> = {
  spineLower: "spineUpper", spineUpper: "neck", neck: "head",
  rUpper: "rFore", rFore: "rHand", lUpper: "lFore", lFore: "lHand",
  rThigh: "rShin", rShin: "rFoot", rFoot: "rToe",
  lThigh: "lShin", lShin: "lFoot", lFoot: "lToe",
};

const GROUND: J[] = ["rFoot", "rToe", "lFoot", "lToe"];
const GROUND_LYING: J[] = ["head", "spineUpper", "hips", "rFoot", "lFoot", "rHand", "lHand"];

/** Strip a rig prefix ("mixamorig7:") and a numeric suffix ("_084"). */
function baseName(name: string): string {
  return name.replace(/^mixamorig\d*[:_]?/i, "").replace(/_\d+$/, "");
}

/**
 * A pose angle as a direction in the body's own frame. 0 up, 90 forward, 180
 * down; `lateral` swings it out to the side. Up is +Y, forward is +Z.
 */
function dir(angle: number, lateral = 0): THREE.Vector3 {
  const a = angle * DEG, l = lateral * DEG;
  return new THREE.Vector3(
    Math.sin(a) * Math.sin(l),
    Math.cos(a),
    Math.sin(a) * Math.cos(l)
  ).normalize();
}

type Joint = {
  bone: THREE.Bone;
  restDir: THREE.Vector3;
  restFwd: THREE.Vector3;
  restUp: THREE.Vector3;
};
type Rig = { joints: Map<J, Joint[]> };

const _pq = new THREE.Quaternion();
const _wq = new THREE.Quaternion();
const _v = new THREE.Vector3();

/** Point a joint (all its copies) along `target`, then roll its front to `front`. */
function aim(rig: Rig, key: J, target: THREE.Vector3, front?: THREE.Vector3, frontRef: "fwd" | "up" = "fwd") {
  const joints = rig.joints.get(key);
  if (!joints) return;
  const axis = target.clone().normalize();
  for (const j of joints) {
    if (!j.bone.parent) continue;
    j.bone.parent.getWorldQuaternion(_pq);
    const invParent = _pq.clone().invert();
    const targetLocal = axis.clone().applyQuaternion(invParent).normalize();
    j.bone.quaternion.setFromUnitVectors(j.restDir, targetLocal);
    j.bone.updateMatrixWorld(true);
    if (!front) continue;
    const ref = frontRef === "up" ? j.restUp : j.restFwd;
    j.bone.getWorldQuaternion(_wq);
    const have = ref.clone().applyQuaternion(_wq);
    const flat = (v: THREE.Vector3) => v.clone().addScaledVector(axis, -v.dot(axis));
    const from = flat(have), to = flat(front);
    if (from.lengthSq() < 1e-6 || to.lengthSq() < 1e-6) continue;
    from.normalize(); to.normalize();
    let ang = Math.acos(THREE.MathUtils.clamp(from.dot(to), -1, 1));
    if (from.clone().cross(to).dot(axis) < 0) ang = -ang;
    const twist = new THREE.Quaternion().setFromAxisAngle(axis, ang);
    j.bone.quaternion.copy(invParent.clone().multiply(twist).multiply(_wq));
    j.bone.updateMatrixWorld(true);
  }
}

export type View3D = "front" | "side" | "threeQuarter";

const LEG_SPLAY = 6;
const TOE_OUT = 12;
const ARM_SPLAY = 7;
/**
 * The ankle sits above and behind the toes, so a foot flat on the floor has its
 * bone pointing forward AND downward. Aiming it horizontally leaves the toe up
 * in the air — a dorsiflexed look. This tips it down so the sole lies flat.
 */
const FOOT_PITCH = 24;

export default function Human3D({
  pose, view = "front", className, props,
}: { pose: Pose; view?: View3D; className?: string; props?: Prop[] }) {
  const mount = useRef<HTMLDivElement>(null);
  const poseRef = useRef(pose);
  poseRef.current = pose;
  const viewRef = useRef(view);
  viewRef.current = view;
  const propsRef = useRef(props);
  propsRef.current = props;

  useEffect(() => {
    const host = mount.current;
    if (!host) return;
    const width = host.clientWidth || 400;
    const height = host.clientHeight || 520;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 100);
    scene.add(new THREE.HemisphereLight(0xffffff, 0x60605a, 2.0));
    const key = new THREE.DirectionalLight(0xffffff, 2.0);
    key.position.set(2.5, 4.5, 3.5);
    scene.add(key);
    const fill = new THREE.DirectionalLight(0xffffff, 0.7);
    fill.position.set(-3, 2, -2);
    scene.add(fill);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    host.appendChild(renderer.domElement);

    const resize = new ResizeObserver(() => {
      const w = host.clientWidth || width, h = host.clientHeight || height;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    });
    resize.observe(host);

    const place = (v: View3D, mode: "stand" | "lying" | "seated") => {
      if (mode === "lying") {
        // Pulled back and centred over the reclining body so the whole figure
        // and its mat/ball are in frame.
        const look = new THREE.Vector3(0, 0.15, -0.55);
        if (v === "front") camera.position.set(0, 3.7, 3.2);
        else if (v === "side") camera.position.set(5.6, 1.5, -0.55);
        else camera.position.set(3.9, 2.6, 2.4);
        camera.lookAt(look);
      } else if (mode === "seated") {
        const look = new THREE.Vector3(0, 0.6, 0);
        if (v === "front") camera.position.set(0, 0.75, 3.9);
        else if (v === "side") camera.position.set(3.9, 0.75, 0);
        else camera.position.set(2.8, 1.0, 2.8);
        camera.lookAt(look);
      } else {
        if (v === "front") camera.position.set(0, 0.9, 5.6);
        else if (v === "side") camera.position.set(5.6, 0.9, 0);
        else camera.position.set(3.9, 1.2, 3.9);
        camera.lookAt(0, 0.8, 0);
      }
    };

    let raf = 0;
    let disposed = false;
    host.dataset.ready = "0";

    new GLTFLoader().load("/models/human.glb", (gltf) => {
      if (disposed) return;
      const root = new THREE.Group();
      root.add(gltf.scene);
      scene.add(root);

      gltf.scene.rotation.y = MODEL_FACING;
      scene.updateMatrixWorld(true);
      // Normalise height so the camera framing holds for any source model.
      const box = new THREE.Box3().setFromObject(gltf.scene);
      const h0 = box.max.y - box.min.y;
      gltf.scene.scale.setScalar(TARGET_HEIGHT / (h0 || 1));
      scene.updateMatrixWorld(true);

      // Collect every bone by its base name; a rig can carry several skeletons.
      const raw = new Map<string, THREE.Bone[]>();
      gltf.scene.traverse((o) => {
        if ((o as THREE.Bone).isBone) {
          const k = baseName(o.name);
          (raw.get(k) ?? raw.set(k, []).get(k)!).push(o as THREE.Bone);
        }
        (o as THREE.Mesh).frustumCulled = false;
      });

      // Resolve each logical joint to the first candidate name present.
      const resolved = new Map<J, string>();
      (Object.keys(CAND) as J[]).forEach((keyName) => {
        for (const cand of CAND[keyName]) {
          if (raw.has(cand)) { resolved.set(keyName, cand); break; }
        }
      });

      scene.updateMatrixWorld(true);
      const joints = new Map<J, Joint[]>();
      resolved.forEach((boneName, keyName) => {
        const childKey = CHILD[keyName];
        const childName = childKey ? resolved.get(childKey) : undefined;
        const childBones = childName ? raw.get(childName) : undefined;
        const list: Joint[] = (raw.get(boneName) ?? []).map((bone, i) => {
          const child = childBones ? childBones[i] ?? childBones[0] : undefined;
          // Rest direction toward the child, in the bone's own space.
          let restDir = new THREE.Vector3(0, 1, 0);
          if (child) {
            const cw = new THREE.Vector3(), bw = new THREE.Vector3();
            child.getWorldPosition(cw); bone.getWorldPosition(bw);
            bone.getWorldQuaternion(_wq);
            restDir = cw.sub(bw).applyQuaternion(_wq.clone().invert()).normalize();
          }
          bone.getWorldQuaternion(_wq);
          const inv = _wq.clone().invert();
          return {
            bone, restDir,
            restFwd: new THREE.Vector3(0, 0, 1).applyQuaternion(inv),
            restUp: new THREE.Vector3(0, 1, 0).applyQuaternion(inv),
          };
        });
        joints.set(keyName, list);
      });

      const rig: Rig = { joints };
      const first = (k: J) => rig.joints.get(k)?.[0]?.bone;

      const X_AXIS = new THREE.Vector3(1, 0, 0);
      const wp = (k: J) => {
        const b = first(k);
        if (!b) return null;
        return b.getWorldPosition(new THREE.Vector3());
      };

      // --- equipment ---------------------------------------------------
      // Draw the props the exercise calls for. Some sit in the world (mat,
      // chair, wall); some follow the body every frame (ball between the knees,
      // wand in the hands, band, dumbbells). Kept simple and readable — real
      // objects, not detailed models — so they place the movement in context.
      const propGroup = new THREE.Group();
      scene.add(propGroup);
      const M = (color: number, opts: THREE.MeshStandardMaterialParameters = {}) =>
        new THREE.MeshStandardMaterial({ color, roughness: 0.85, ...opts });
      const mats = {
        mat: M(0x2e6b79, { roughness: 0.95 }),
        chair: M(0x6b4a2f),
        wall: M(0xe7e2d6, { roughness: 1 }),
        ball: M(0xd98a3d),
        wand: M(0xcaa06a),
        band: M(0x39794a),
        metal: M(0x2b2f36, { metalness: 0.6, roughness: 0.4 }),
      };
      const dynamic: (() => void)[] = [];

      const cyl = (mat: THREE.Material, r: number, len: number) => {
        const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, len, 16), mat);
        propGroup.add(m);
        return m;
      };
      const boxMesh = (mat: THREE.Material, w: number, h: number, d: number) => {
        const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
        propGroup.add(m);
        return m;
      };
      // Lay a cylinder between two world points (for wands and bands).
      const spanCyl = (m: THREE.Mesh, a: THREE.Vector3, b: THREE.Vector3) => {
        const mid = a.clone().add(b).multiplyScalar(0.5);
        const dir = b.clone().sub(a);
        const len = dir.length() || 0.001;
        m.position.copy(mid);
        m.scale.set(1, len, 1);
        m.quaternion.setFromUnitVectors(
          new THREE.Vector3(0, 1, 0),
          dir.normalize()
        );
      };

      let propsKey = "__init__";
      const rebuildProps = () => {
        propGroup.clear();
        dynamic.length = 0;
        for (const prop of propsRef.current ?? []) {
        switch (prop.kind) {
          case "mat": {
            const m = boxMesh(mats.mat, 0.95, 0.04, 2.3);
            m.position.set(0, 0.02, -0.55);
            break;
          }
          case "chair": {
            const seat = boxMesh(mats.chair, 0.5, 0.06, 0.5);
            const back = boxMesh(mats.chair, 0.5, 0.5, 0.05);
            dynamic.push(() => {
              const h = wp("hips");
              const seatY = h ? h.y - 0.06 : 0.44;
              seat.position.set(0, seatY, -0.02);
              back.position.set(0, seatY + 0.28, -0.26);
            });
            break;
          }
          case "wall":
          case "wallRight": {
            const w = boxMesh(mats.wall, 1.6, 2.4, 0.08);
            // Crawl faces the wall (front, +Z); a back-to-wall sit uses behind.
            w.position.set(0, 1.2, 0.62);
            break;
          }
          case "ballBetweenKnees":
          case "gymBall": {
            const r = (prop.kind === "gymBall" ? 0.32 : prop.radius ?? 0.12);
            const ball = new THREE.Mesh(new THREE.SphereGeometry(r, 24, 20), mats.ball);
            propGroup.add(ball);
            dynamic.push(() => {
              const a = wp("rShin"), b = wp("lShin");
              if (a && b) ball.position.copy(a.clone().add(b).multiplyScalar(0.5));
            });
            break;
          }
          case "stick": {
            const wand = cyl(mats.wand, 0.02, 1);
            dynamic.push(() => {
              const a = wp("rHand"), b = wp("lHand");
              if (a && b) {
                // Extend a little past each hand so it reads as a held bar.
                const d = b.clone().sub(a).normalize().multiplyScalar(0.12);
                spanCyl(wand, a.clone().sub(d), b.clone().add(d));
              }
            });
            break;
          }
          case "dumbbells": {
            const mk = () => {
              const g = new THREE.Group();
              const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.14, 10), mats.metal);
              bar.rotation.z = Math.PI / 2;
              const e1 = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 0.05, 12), mats.metal);
              e1.rotation.z = Math.PI / 2; e1.position.x = 0.07;
              const e2 = e1.clone(); e2.position.x = -0.07;
              g.add(bar, e1, e2); propGroup.add(g); return g;
            };
            const dR = mk(), dL = mk();
            dynamic.push(() => {
              const a = wp("rHand"), b = wp("lHand");
              if (a) dR.position.copy(a);
              if (b) dL.position.copy(b);
            });
            break;
          }
          case "band": {
            // A band from each hand to an anchor out to the side at chest height.
            const bR = cyl(mats.band, 0.018, 1);
            const bL = cyl(mats.band, 0.018, 1);
            dynamic.push(() => {
              const a = wp("rHand"), b = wp("lHand");
              const anchorR = new THREE.Vector3(-0.9, 1.1, 0.1);
              const anchorL = new THREE.Vector3(0.9, 1.1, 0.1);
              if (a) spanCyl(bR, a, anchorR);
              if (b) spanCyl(bL, b, anchorL);
            });
            break;
          }
          case "tableSupport": {
            const t = boxMesh(mats.chair, 0.6, 0.04, 0.4);
            const legMat = mats.chair;
            t.position.set(0.35, 0.74, 0.15);
            for (const sx of [-0.25, 0.25]) for (const sz of [-0.15, 0.15]) {
              const leg = boxMesh(legMat, 0.04, 0.74, 0.04);
              leg.position.set(0.35 + sx, 0.37, 0.15 + sz);
            }
            break;
          }
          case "doorway": {
            for (const sx of [-0.75, 0.75]) {
              const post = boxMesh(mats.wall, 0.12, 2.3, 0.12);
              post.position.set(sx, 1.15, 0.15);
            }
            const top = boxMesh(mats.wall, 1.62, 0.12, 0.12);
            top.position.set(0, 2.25, 0.15);
            break;
          }
          case "towelUnderKnee": {
            const t = boxMesh(mats.mat, 0.24, 0.08, 0.24);
            dynamic.push(() => {
              const k = wp("rShin");
              if (k) t.position.set(k.x, 0.04, k.z);
            });
            break;
          }
        }
        }
      };
      // Rebuild the equipment only when the prop list actually changes, then
      // reposition the body-tracking pieces every frame.
      const updateProps = () => {
        const k = JSON.stringify(propsRef.current ?? []);
        if (k !== propsKey) { propsKey = k; rebuildProps(); }
        dynamic.forEach((f) => f());
      };

      // Pose every bone from the current Pose, with an extra `settle` rotation
      // about world-X. Split out so a lying body can be posed twice: once to see
      // where it lands, then again tilted so it rests on its ground contacts.
      const poseBody = (p: Pose, settle: number) => {
        root.rotation.set(0, 0, 0);
        root.position.set(0, 0, 0);
        root.rotateX(p.rootRot * DEG);
        root.rotateY((p.roll ?? 0) * DEG);
        if (settle) root.rotateOnWorldAxis(X_AXIS, settle);
        root.updateMatrixWorld(true);

        const rootQ = root.getWorldQuaternion(new THREE.Quaternion());
        const d = (angle: number, lateral = 0) => dir(angle, lateral).applyQuaternion(rootQ);
        const front = d(90);

        const lumbarA = p.pelvisTilt + p.lumbar;
        const thoraxA = lumbarA + p.thorax;
        aim(rig, "spineLower", d(lumbarA * 0.7), front);
        aim(rig, "spineUpper", d(thoraxA * 0.6), front);
        aim(rig, "neck", d(thoraxA + p.neck), front);
        // The head rides the neck: it is a leaf bone with no child to give it a
        // reliable axis, and aiming it directly threw it back.

        // Arms roll so the thumb stays up (palm facing inward), which reads as
        // natural in every raise. Rolling their front toward the body-front
        // instead pronates the hand — thumb rolling down — as the arm lifts.
        // Abduction widens the arm's lateral swing, carrying it out to the side
        // (the frontal plane) instead of forward.
        const armUp = new THREE.Vector3(0, 1, 0);
        const rArmLat = -ARM_SPLAY - (p.shoulderAbductNear ?? 0);
        const lArmLat = ARM_SPLAY + (p.shoulderAbductFar ?? 0);
        // Rotation swings only the forearm out (external) or across (internal),
        // leaving the upper arm where it is — the shoulder's rotation DOF.
        const rForeLat = rArmLat - (p.shoulderRotNear ?? 0);
        const lForeLat = lArmLat + (p.shoulderRotFar ?? 0);
        aim(rig, "rUpper", d(p.shoulderNear, rArmLat), armUp);
        aim(rig, "lUpper", d(p.shoulderFar, lArmLat), armUp);
        aim(rig, "rFore", d(p.shoulderNear - p.elbowNear, rForeLat), armUp);
        aim(rig, "lFore", d(p.shoulderFar - p.elbowFar, lForeLat), armUp);

        const rThigh = 180 - p.hipNear, lThigh = 180 - p.hipFar;
        const rShin = rThigh + p.kneeNear, lShin = lThigh + p.kneeFar;
        const rFootA = rShin - 90 + p.ankleNear + FOOT_PITCH;
        const lFootA = lShin - 90 + p.ankleFar + FOOT_PITCH;
        const rLat = -LEG_SPLAY - (p.hipRotNear ?? 0);
        const lLat = LEG_SPLAY + (p.hipRotFar ?? 0);
        aim(rig, "rThigh", d(rThigh, rLat), front);
        aim(rig, "lThigh", d(lThigh, lLat), front);
        aim(rig, "rShin", d(rShin, rLat), front);
        aim(rig, "lShin", d(lShin, lLat), front);
        // Foot aimed by direction only; it inherits the shin's forward frame,
        // which keeps the sole down. An independent world-up roll flipped it.
        aim(rig, "rFoot", d(rFootA, -TOE_OUT));
        aim(rig, "lFoot", d(lFootA, TOE_OUT));
        root.updateMatrixWorld(true);
      };

      const tick = () => {
        const p = poseRef.current;
        const lying = Math.abs(p.rootRot) > 45;
        // Seated: upright but hips deeply flexed (a chair beneath). Framed lower.
        const seated = !lying && p.hipNear > 55;
        place(viewRef.current, lying ? "lying" : seated ? "seated" : "stand");

        poseBody(p, 0);

        // Sit on the floor: drop so the lowest contact rests on it.
        const contacts = lying ? GROUND_LYING : GROUND;
        let low = Infinity;
        for (const k of contacts) {
          const b = first(k);
          if (!b) continue;
          b.getWorldPosition(_v);
          if (_v.y < low) low = _v.y;
        }
        if (Number.isFinite(low)) root.position.y -= low - (lying ? 0.05 : 0.04);

        root.updateMatrixWorld(true);
        updateProps();

        renderer.render(scene, camera);
        host.dataset.ready = "1";
        raf = requestAnimationFrame(tick);
      };
      tick();
    });

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      resize.disconnect();
      renderer.dispose();
      if (renderer.domElement.parentNode === host) host.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mount} className={className} />;
}
