"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import type { Pose } from "@/lib/figure";

/* ==========================================================================
   Human3D — poses a rigged character from the same Pose that draws the flat
   figure.

   TWO THINGS ABOUT THIS PARTICULAR CHARACTER, LEARNED THE HARD WAY

   1. It is not one rigged body. The FBX→GLB conversion produced SEVEN separate
      meshes, each welded to its own private skeleton, and those skeletons share
      no bones. Posing "the" skeleton moves one mesh and leaves the other six
      behind. So a joint name (e.g. "RightForeArm") maps to *every* copy across
      every skeleton, and all copies are driven together. Miss this and your
      corrections land on bones that drive nothing you can see.

   2. Bones are aimed, not Euler-rotated. A Mixamo bone's local axes run down
      the bone, so "rotate 90° about Z" means something different for an arm
      than a thigh. Instead each bone is rotated so its rest direction meets a
      target direction, and then rolled about its own length so its bending
      plane faces the front of the body. Without that roll a bent elbow or knee
      twists sideways — the "zombie" look.

   The joint angles themselves are lifted straight from the 2D figure engine,
   which is already anatomically sound, so a bent elbow bends the human way and
   a bent knee folds backward, not forward.
   ========================================================================== */

const DEG = Math.PI / 180;

/** Joint names once the Mixamo prefix ("mixamorig7", "mixamorig:") is stripped. */
const B = {
  hips: "Hips",
  spine: "Spine",
  spine1: "Spine1",
  spine2: "Spine2",
  neck: "Neck",
  head: "Head",
  rArm: "RightArm",
  rFore: "RightForeArm",
  rHand: "RightHand",
  lArm: "LeftArm",
  lFore: "LeftForeArm",
  lHand: "LeftHand",
  rThigh: "RightUpLeg",
  rShin: "RightLeg",
  rFoot: "RightFoot",
  rToe: "RightToeBase",
  lThigh: "LeftUpLeg",
  lShin: "LeftLeg",
  lFoot: "LeftFoot",
  lToe: "LeftToeBase",
} as const;

/** Parent → child, used to measure which way each bone points at rest. */
const CHILD: Record<string, string> = {
  [B.spine]: B.spine1,
  [B.spine1]: B.spine2,
  [B.spine2]: B.neck,
  [B.neck]: B.head,
  [B.rArm]: B.rFore,
  [B.rFore]: B.rHand,
  [B.lArm]: B.lFore,
  [B.lFore]: B.lHand,
  [B.rThigh]: B.rShin,
  [B.rShin]: B.rFoot,
  [B.rFoot]: B.rToe,
  [B.lThigh]: B.lShin,
  [B.lShin]: B.lFoot,
  [B.lFoot]: B.lToe,
};

/** Bones that can touch the floor, used only to sit the body on the ground. */
const GROUND = [B.rFoot, B.rToe, B.lFoot, B.lToe];
const GROUND_LYING = [B.head, B.spine2, B.spine1, B.hips, B.rFoot, B.lFoot, B.rHand, B.lHand];

function boneKey(name: string): string {
  return name.replace(/^mixamorig\d*[:_]?/i, "");
}

/**
 * A pose angle turned into a direction in the body's own frame.
 *
 * Convention (shared with the 2D engine): 0 points straight up, 90 points
 * forward — the way the body faces — and 180 hangs straight down. `lateral`
 * swings the segment out to the side, for abduction and a little natural splay.
 * Up is +Y, forward is +Z.
 */
function dir(angle: number, lateral = 0): THREE.Vector3 {
  const a = angle * DEG;
  const l = lateral * DEG;
  return new THREE.Vector3(
    Math.sin(a) * Math.sin(l),
    Math.cos(a),
    Math.sin(a) * Math.cos(l)
  ).normalize();
}

/** Every copy of one joint, with the rest frame each copy was measured in. */
type Joint = {
  bone: THREE.Bone;
  restDir: THREE.Vector3; // toward the child, in the bone's own space
  restFwd: THREE.Vector3; // world +Z at rest, in the bone's own space
  restUp: THREE.Vector3; // world +Y at rest, in the bone's own space
};

type Rig = { joints: Map<string, Joint[]> };

const _pq = new THREE.Quaternion();
const _wq = new THREE.Quaternion();
const _v = new THREE.Vector3();

/**
 * Point a joint (all its copies) along `target`, then roll it so its front
 * faces `front`.
 *
 * `frontRef` says which rest axis counts as the bone's front: the trunk, arms
 * and legs run along Y at rest so their front is world +Z; a foot already runs
 * forward, so its "front" is the top of the foot, world +Y.
 */
function aim(
  rig: Rig,
  name: string,
  target: THREE.Vector3,
  front?: THREE.Vector3,
  frontRef: "fwd" | "up" = "fwd"
) {
  const joints = rig.joints.get(name);
  if (!joints) return;
  const axis = target.clone().normalize();

  for (const j of joints) {
    if (!j.bone.parent) continue;
    j.bone.parent.getWorldQuaternion(_pq);
    const invParent = _pq.clone().invert();

    // 1. Aim: rotate so the bone's rest direction meets the target.
    const targetLocal = axis.clone().applyQuaternion(invParent).normalize();
    j.bone.quaternion.setFromUnitVectors(j.restDir, targetLocal);
    j.bone.updateMatrixWorld(true);

    if (!front) continue;

    // 2. Roll: spin about the bone's length until its front faces `front`.
    const ref = frontRef === "up" ? j.restUp : j.restFwd;
    j.bone.getWorldQuaternion(_wq);
    const have = ref.clone().applyQuaternion(_wq);
    const flat = (v: THREE.Vector3) => v.clone().addScaledVector(axis, -v.dot(axis));
    const from = flat(have);
    const to = flat(front);
    if (from.lengthSq() < 1e-6 || to.lengthSq() < 1e-6) continue;
    from.normalize();
    to.normalize();
    let ang = Math.acos(THREE.MathUtils.clamp(from.dot(to), -1, 1));
    if (from.clone().cross(to).dot(axis) < 0) ang = -ang;
    const twist = new THREE.Quaternion().setFromAxisAngle(axis, ang);
    j.bone.quaternion.copy(invParent.clone().multiply(twist).multiply(_wq));
    j.bone.updateMatrixWorld(true);
  }
}

export type View3D = "front" | "side" | "threeQuarter";

/** A relaxed body is never perfectly square: legs and feet splay out a little. */
const LEG_SPLAY = 6;
const TOE_OUT = 12;
const ARM_SPLAY = 7;

/** Half-turn if the model is authored facing away from the camera, else 0. */
const MODEL_FACING = Math.PI;

export default function Human3D({
  pose,
  view = "front",
  className,
}: {
  pose: Pose;
  view?: View3D;
  className?: string;
}) {
  const mount = useRef<HTMLDivElement>(null);
  const poseRef = useRef(pose);
  poseRef.current = pose;
  const viewRef = useRef(view);
  viewRef.current = view;

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

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      preserveDrawingBuffer: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    host.appendChild(renderer.domElement);

    const resize = new ResizeObserver(() => {
      const w = host.clientWidth || width;
      const h = host.clientHeight || height;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    });
    resize.observe(host);

    // The camera does the job a second hand-drawn view used to: a front view
    // for abduction, a side view for flexion. A lying body fills a different
    // volume, so its framing is separate.
    const place = (v: View3D, lying: boolean) => {
      if (lying) {
        const look = new THREE.Vector3(0, 0.25, -0.55);
        if (v === "front") camera.position.set(0, 3.1, 2.4);
        else if (v === "side") camera.position.set(4.4, 1.2, -0.55);
        else camera.position.set(3.1, 2.2, 1.9);
        camera.lookAt(look);
      } else {
        // Framed to show the whole standing body, feet included, with a little
        // headroom. The subject is ~1.8 units tall standing on y=0.
        if (v === "front") camera.position.set(0, 0.95, 5.4);
        else if (v === "side") camera.position.set(5.4, 0.95, 0);
        else camera.position.set(3.8, 1.25, 3.8);
        camera.lookAt(0, 0.85, 0);
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

      // Some source models are authored facing away from +Z. We want the chest
      // toward +Z so "front" in the pose data means the front of the body.
      gltf.scene.rotation.y = MODEL_FACING;

      // Gather every bone of every skeleton, grouped by name. See the note at
      // the top: this character carries seven of them.
      const raw = new Map<string, THREE.Bone[]>();
      gltf.scene.traverse((o) => {
        if ((o as THREE.Bone).isBone) {
          const k = boneKey(o.name);
          (raw.get(k) ?? raw.set(k, []).get(k)!).push(o as THREE.Bone);
        }
        // Skinned meshes are culled against a bounding sphere fixed at load; a
        // deep pose can push the body outside it and blank the frame. Off.
        (o as THREE.Mesh).frustumCulled = false;
      });

      scene.updateMatrixWorld(true);
      const joints = new Map<string, Joint[]>();
      raw.forEach((copies, name) => {
        const childName = CHILD[name];
        const list: Joint[] = copies.map((bone, i) => {
          const childCopies = childName ? raw.get(childName) : undefined;
          const child = childCopies ? childCopies[i] ?? childCopies[0] : undefined;
          const restDir = child
            ? child.position.clone().normalize()
            : new THREE.Vector3(0, 1, 0); // head: continue the neck
          bone.getWorldQuaternion(_wq);
          const inv = _wq.clone().invert();
          return {
            bone,
            restDir,
            restFwd: new THREE.Vector3(0, 0, 1).applyQuaternion(inv),
            restUp: new THREE.Vector3(0, 1, 0).applyQuaternion(inv),
          };
        });
        joints.set(name, list);
      });
      const rig: Rig = { joints };
      const first = (n: string) => rig.joints.get(n)?.[0]?.bone;

      const tick = () => {
        const p = poseRef.current;
        const lying = Math.abs(p.rootRot) > 45;
        place(viewRef.current, lying);

        // Whole-body orientation. rootRot -90 lays him on his back.
        root.rotation.set(0, 0, 0);
        root.position.set(0, 0, 0);
        root.rotateX(p.rootRot * DEG);
        root.updateMatrixWorld(true);

        const rootQ = new THREE.Quaternion();
        root.getWorldQuaternion(rootQ);
        // Direction from a body-frame angle, carried into the world.
        const d = (angle: number, lateral = 0) =>
          dir(angle, lateral).applyQuaternion(rootQ);

        const front = d(90); // the way the chest faces
        const up = d(0); // head-to-ceiling

        // --- spine (gentle; our 4-point chain spread over 3 Mixamo bones) ---
        const lumbarA = p.pelvisTilt + p.lumbar;
        const thoraxA = lumbarA + p.thorax;
        aim(rig, B.spine, d(p.pelvisTilt * 0.6), front);
        aim(rig, B.spine1, d(lumbarA * 0.7), front);
        aim(rig, B.spine2, d(thoraxA * 0.5), front);
        aim(rig, B.neck, d(thoraxA + p.neck), front);
        aim(rig, B.head, d(thoraxA + p.neck + p.head), front);

        // --- arms (angles straight from the flat engine) ---
        // shoulder 180 hangs at the side, 90 is forward, 0 is overhead.
        // Elbow flexion reduces the forearm angle, swinging the hand forward —
        // the human direction, never backward.
        aim(rig, B.rArm, d(p.shoulderNear, -ARM_SPLAY), front);
        aim(rig, B.lArm, d(p.shoulderFar, ARM_SPLAY), front);
        aim(rig, B.rFore, d(p.shoulderNear - p.elbowNear, -ARM_SPLAY), front);
        aim(rig, B.lFore, d(p.shoulderFar - p.elbowFar, ARM_SPLAY), front);

        // --- legs ---
        // Thigh 180 hangs down, hip flexion lifts it forward. Knee flexion adds
        // to the shin angle, folding it backward. Foot is square to the shin.
        const rThigh = 180 - p.hipNear;
        const lThigh = 180 - p.hipFar;
        const rShin = rThigh + p.kneeNear;
        const lShin = lThigh + p.kneeFar;
        const rFootA = rShin - 90 + p.ankleNear;
        const lFootA = lShin - 90 + p.ankleFar;
        aim(rig, B.rThigh, d(rThigh, -LEG_SPLAY), front);
        aim(rig, B.lThigh, d(lThigh, LEG_SPLAY), front);
        aim(rig, B.rShin, d(rShin, -LEG_SPLAY), front);
        aim(rig, B.lShin, d(lShin, LEG_SPLAY), front);
        // The foot's "front" is its top; aligning that with body-up keeps the
        // sole flat on the floor.
        aim(rig, B.rFoot, d(rFootA, -TOE_OUT), up, "up");
        aim(rig, B.lFoot, d(lFootA, TOE_OUT), up, "up");

        // --- sit it on the floor ---
        root.updateMatrixWorld(true);
        const contacts = lying ? GROUND_LYING : GROUND;
        let low = Infinity;
        for (const n of contacts) {
          const b = first(n);
          if (!b) continue;
          b.getWorldPosition(_v);
          if (_v.y < low) low = _v.y;
        }
        // Bone centres sit inside the flesh, so the sole/back is a little below
        // the lowest joint. A small constant offset drops him onto the floor.
        if (Number.isFinite(low)) root.position.y -= low - (lying ? 0.06 : 0.08);

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
