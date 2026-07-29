"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import type { Pose } from "@/lib/figure";

/* ==========================================================================
   Human3D — drives a rigged Mixamo character from the same Pose that draws
   the flat figure.

   HOW THE RIG IS DRIVEN
   Each bone is *aimed*: we work out the world-space direction the segment
   should point, then rotate the bone so its rest direction lines up with it.
   Setting Euler angles instead would mean guessing which local axis to use,
   and a Mixamo bone's axes run down the bone, so "rotate about Z" means
   something different for an arm than a thigh.

   WHY AIMING ALONE IS NOT ENOUGH
   Rotating one direction onto another has a free parameter: the spin about
   the bone itself. Quaternion.setFromUnitVectors picks the *shortest* such
   rotation, which is arbitrary — and the arbitrary part accumulates down a
   chain. That is what put one foot facing backwards and rolled both soles
   inwards during bridging: the feet were inheriting whatever spin the shins
   happened to be left with.

   So every bone is aimed *and* rolled. Alongside the direction we pass the
   way the bone's front should face, and the bone is spun about its own axis
   until it does. Knees then track forwards, soles stay down, and toes point
   slightly out the way a relaxed leg actually sits.
   ========================================================================== */

const DEG = Math.PI / 180;

/** Bone names, once the Mixamo prefix is stripped. */
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
};

/** Joints that decide where the floor is. Fingers are excluded — they dangle
 *  below the wrist and would lift the whole body off the ground. */
const GROUND_BONES = [
  B.hips, B.spine2, B.head,
  B.rArm, B.rFore, B.rHand, B.lArm, B.lFore, B.lHand,
  B.rThigh, B.rShin, B.rFoot, B.rToe,
  B.lThigh, B.lShin, B.lFoot, B.lToe,
];

/** The joints a lying body can actually come to rest on. */
const SUPPORT_BONES = [
  B.head, B.spine2, B.spine1, B.hips,
  B.rArm, B.lArm, B.rFoot, B.lFoot, B.rToe, B.lToe,
];

/**
 * Mixamo prefixes bones inconsistently — "mixamorig:Hips" on some exports,
 * "mixamorig7Hips" on others. Match on the part after the prefix so any
 * character loads without editing this file.
 */
function boneKey(name: string): string {
  return name.replace(/^mixamorig\d*[:_]?/i, "");
}

/**
 * A pose angle as a direction in the body's own frame.
 *
 * Our 2D convention: 0 points straight up, positive rotates forward, so 180
 * hangs straight down and 90 points horizontally forward. In the scene, up is
 * +Y and the direction the character faces is +Z.
 *
 * `lateral` swings the segment out to the side instead of forward, which is
 * what abduction, splay and toe-out need. The character's right is -X.
 */
function dir(angleDeg: number, lateral = 0): THREE.Vector3 {
  const a = angleDeg * DEG;
  const l = lateral * DEG;
  return new THREE.Vector3(
    Math.sin(a) * Math.sin(l),
    Math.cos(a),
    Math.sin(a) * Math.cos(l)
  ).normalize();
}

/**
 * Which stored rest axis stands in for "the front of this bone".
 *
 * A reference has to be roughly square to the bone or the roll is undefined.
 * For a thigh, shin, arm or spine — all of which run along Y at rest — world
 * +Z serves. A foot already points mostly along +Z, so it uses +Y instead:
 * the top of the foot.
 */
type RollRef = "fwd" | "up";

type Rig = {
  bones: Map<string, THREE.Bone>;
  /** Direction from each bone toward its child, in that bone's own space. */
  restDir: Map<string, THREE.Vector3>;
  /** World +Z at rest, expressed in each bone's own space. */
  restFwd: Map<string, THREE.Vector3>;
  /** World +Y at rest, expressed in each bone's own space. */
  restUp: Map<string, THREE.Vector3>;
};

const _parentQ = new THREE.Quaternion();
const _worldQ = new THREE.Quaternion();
const _v = new THREE.Vector3();

/**
 * Point `bone` along `targetWorld`.
 *
 * When `roll` is given the bone is then spun about that direction until its
 * front faces `roll.toward`, which removes the free parameter described at
 * the top of this file.
 */
function aim(
  rig: Rig,
  name: string,
  targetWorld: THREE.Vector3,
  roll?: { toward: THREE.Vector3; ref: RollRef }
) {
  const bone = rig.bones.get(name);
  const rest = rig.restDir.get(name);
  if (!bone || !rest || !bone.parent) return;

  // A bone's rotation is relative to its parent, so the target moves there too.
  bone.parent.getWorldQuaternion(_parentQ);
  const invParent = _parentQ.clone().invert();

  const axis = targetWorld.clone().normalize();
  const targetLocal = axis.clone().applyQuaternion(invParent).normalize();
  bone.quaternion.setFromUnitVectors(rest, targetLocal);
  bone.updateMatrixWorld(true);

  if (!roll) return;

  const restRef = (roll.ref === "up" ? rig.restUp : rig.restFwd).get(name);
  if (!restRef) return;

  // Compare where the bone's front actually points with where it should,
  // both flattened into the plane square to the bone. Whatever angle is left
  // between them is the unwanted spin.
  bone.getWorldQuaternion(_worldQ);
  const have = restRef.clone().applyQuaternion(_worldQ);
  const flatten = (v: THREE.Vector3) =>
    v.clone().addScaledVector(axis, -v.dot(axis));

  const from = flatten(have);
  const to = flatten(roll.toward);
  if (from.lengthSq() < 1e-6 || to.lengthSq() < 1e-6) return;
  from.normalize();
  to.normalize();

  let angle = Math.acos(THREE.MathUtils.clamp(from.dot(to), -1, 1));
  if (from.cross(to).dot(axis) < 0) angle = -angle;

  const twist = new THREE.Quaternion().setFromAxisAngle(axis, angle);
  bone.quaternion.copy(invParent.multiply(twist).multiply(_worldQ));
  bone.updateMatrixWorld(true);
}

export type View3D = "front" | "side" | "threeQuarter";

/** Legs sit a little apart, and a relaxed foot turns out rather than straight
 *  ahead. Squaring them both to the midline is one of the things that makes a
 *  posed figure look like a mannequin. */
const LEG_SPLAY = 8;
const TOE_OUT = 11;
const ARM_SPLAY = 8;
/** Ankle to toe-base runs downhill even with the sole flat on the floor. */
const FOOT_DROP = 15;

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

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    host.appendChild(renderer.domElement);

    // The stage switches between one wide canvas and three narrow ones, so the
    // renderer has to follow its container or the character shrinks into a
    // corner of a stretched viewport.
    const resize = new ResizeObserver(() => {
      const w = host.clientWidth || width;
      const h = host.clientHeight || height;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    });
    resize.observe(host);

    let raf = 0;
    let disposed = false;

    // The camera is what replaces a second hand-drawn figure: abduction wants
    // a front view, flexion a side view, and that is now one number. A lying
    // body fills a completely different volume from a standing one, so the
    // framing has to follow the pose or the character drifts into a corner.
    const place = (v: View3D, lying: boolean) => {
      if (lying) {
        const look = new THREE.Vector3(0, 0.3, -0.55);
        if (v === "front") camera.position.set(0, 3.1, 2.4);
        else if (v === "side") camera.position.set(4.4, 1.1, -0.55);
        else camera.position.set(3.2, 2.2, 1.8);
        camera.lookAt(look);
      } else {
        if (v === "front") camera.position.set(0, 1.0, 4.6);
        else if (v === "side") camera.position.set(4.6, 1.0, 0);
        else camera.position.set(3.2, 1.2, 3.2);
        camera.lookAt(0, 0.9, 0);
      }
    };

    new GLTFLoader().load("/models/adam.glb", (gltf) => {
      if (disposed) return;

      const root = new THREE.Group();
      root.add(gltf.scene);
      scene.add(root);

      // NOTE: the hoodie cannot be hidden. This character has no torso mesh
      // beneath it — the body mesh is only head, hands and feet — so removing
      // the hoodie leaves a floating head and forearms.
      const bones = new Map<string, THREE.Bone>();
      gltf.scene.traverse((o) => {
        if ((o as THREE.Bone).isBone) bones.set(boneKey(o.name), o as THREE.Bone);
      });

      // Record, for every bone, where it points at rest and which way its front
      // faces. Everything else is expressed relative to these, so the rig's own
      // conventions never leak into the exercise data.
      const restDir = new Map<string, THREE.Vector3>();
      const restFwd = new Map<string, THREE.Vector3>();
      const restUp = new Map<string, THREE.Vector3>();
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
      for (const [parent, child] of Object.entries(CHILD)) {
        const c = bones.get(child);
        if (c) restDir.set(parent, c.position.clone().normalize());
      }
      // The head has no useful child joint; treat it as continuing the neck.
      if (bones.get(B.head)) restDir.set(B.head, new THREE.Vector3(0, 1, 0));

      scene.updateMatrixWorld(true);
      bones.forEach((bone, name2) => {
        bone.getWorldQuaternion(_worldQ);
        const inv = _worldQ.clone().invert();
        restFwd.set(name2, new THREE.Vector3(0, 0, 1).applyQuaternion(inv));
        restUp.set(name2, new THREE.Vector3(0, 1, 0).applyQuaternion(inv));
      });

      const rig: Rig = { bones, restDir, restFwd, restUp };

      /**
       * Where a lying body would come to rest.
       *
       * Posing about the hips leaves the trunk hanging in mid-air: in a bridge
       * the shoulders have to be on the mat and the pelvis lifted, which is a
       * rotation nothing in the pose describes. Rather than hand-tune a number
       * per exercise, work out what the body would actually rest on — the lower
       * convex hull of its contact joints — and level that against the floor.
       */
      const settleAngle = () => {
        let pts: { z: number; y: number }[] = [];
        for (const n of SUPPORT_BONES) {
          const b = bones.get(n);
          if (!b) continue;
          b.getWorldPosition(_v);
          pts.push({ z: _v.z, y: _v.y });
        }
        if (pts.length < 2) return 0;

        pts.sort((a, b) => a.z - b.z);

        // Left and right pairs — the two feet, the two shoulders — sit at almost
        // the same point along the body, and a hull edge between them is nearly
        // vertical. Levelling against one would spin the body on its head, so
        // collapse each cluster to its lowest point first.
        const flat: typeof pts = [];
        for (const p of pts) {
          const last = flat[flat.length - 1];
          if (last && p.z - last.z < 0.02) {
            if (p.y < last.y) last.y = p.y;
          } else {
            flat.push({ ...p });
          }
        }
        if (flat.length < 2) return 0;
        pts = flat;

        const hull: typeof pts = [];
        for (const p of pts) {
          while (hull.length >= 2) {
            const a = hull[hull.length - 2];
            const b = hull[hull.length - 1];
            const cross =
              (b.z - a.z) * (p.y - a.y) - (b.y - a.y) * (p.z - a.z);
            if (cross <= 0) hull.pop();
            else break;
          }
          hull.push(p);
        }
        if (hull.length < 2) return 0;

        // The body tips onto whichever hull edge lies under its weight, and the
        // pelvis is close enough to the centre of mass for this purpose.
        const hipBone = bones.get(B.hips);
        let cz = hull[0].z;
        if (hipBone) {
          hipBone.getWorldPosition(_v);
          cz = _v.z;
        }
        let e = 0;
        for (let i = 0; i < hull.length - 1; i++) {
          if (cz >= hull[i].z) e = i;
        }
        const a = hull[e];
        const b = hull[e + 1];
        // A body never settles by more than a modest tilt. Anything larger means
        // the support points degenerated, and obeying it throws the figure out
        // of shot — so cap it rather than trust it.
        const raw = Math.atan2(b.y - a.y, b.z - a.z);
        return THREE.MathUtils.clamp(raw, -45 * DEG, 45 * DEG);
      };

      const applyPose = (settle: number) => {
        const p = poseRef.current;

        // Whole-body orientation. rootRot of -90 means lying on the back, and
        // rotating the root is far more stable than bending the spine to fake
        // it. Rotating +90 about X would lay him face down. `roll` then turns
        // supine into side-lying about the body's own long axis, which stays
        // local Y whatever rootRot did.
        root.rotation.set(0, 0, 0);
        root.position.set(0, 0, 0);
        root.rotateX(p.rootRot * DEG);
        root.rotateY((p.roll ?? 0) * DEG);
        // Settling is a correction in world space, so it has to sit outside the
        // pose's own rotations rather than compose with them.
        if (settle) root.rotateOnWorldAxis(new THREE.Vector3(1, 0, 0), settle);
        root.updateMatrixWorld(true);

        // Every aim target is expressed in the *body's* frame and then rotated
        // into the world. Aiming straight at world directions silently cancels
        // the root rotation — the character stands back up however far you lay
        // him down.
        const rootQ = new THREE.Quaternion();
        root.getWorldQuaternion(rootQ);
        const d = (angle: number, lateral = 0) =>
          dir(angle, lateral).applyQuaternion(rootQ);

        // The body's front, and the fronts of each leg. These are what stop
        // limbs spinning about their own axis: the kneecap, the tibial crest
        // and the top of the foot all face the same way down one leg.
        const front = d(90);
        const frontR = d(90, -TOE_OUT);
        const frontL = d(90, TOE_OUT);

        // --- spine -----------------------------------------------------
        // Our four-point chain is spread across Mixamo's three spine bones.
        const lumbarA = p.pelvisTilt + p.lumbar;
        const thoraxA = lumbarA + p.thorax;
        const fwd = { toward: front, ref: "fwd" as const };
        aim(rig, B.spine, d(p.pelvisTilt * 0.6), fwd);
        aim(rig, B.spine1, d(lumbarA * 0.7), fwd);
        aim(rig, B.spine2, d(thoraxA * 0.5), fwd);
        aim(rig, B.neck, d(thoraxA + p.neck), fwd);
        aim(rig, B.head, d(thoraxA + p.neck + p.head), fwd);

        // --- arms ------------------------------------------------------
        // shoulderNear: 180 hangs at the side, 90 is horizontal forward, 0 is
        // straight overhead. The far limb is the character's left.
        const rUpper = p.shoulderNear;
        const lUpper = p.shoulderFar;
        aim(rig, B.rArm, d(rUpper, -ARM_SPLAY), fwd);
        aim(rig, B.lArm, d(lUpper, ARM_SPLAY), fwd);
        aim(rig, B.rFore, d(rUpper - p.elbowNear, -ARM_SPLAY), fwd);
        aim(rig, B.lFore, d(lUpper - p.elbowFar, ARM_SPLAY), fwd);

        // --- legs ------------------------------------------------------
        // Hip flexion lifts the thigh forward from straight down; knee flexion
        // swings the shin back behind it; the ankle then sets the foot, which
        // is measured square to the shin exactly as the flat figure measures it.
        const rThighA = 180 - p.hipNear;
        const lThighA = 180 - p.hipFar;
        const rShinA = rThighA + p.kneeNear;
        const lShinA = lThighA + p.kneeFar;
        const rFootA = rShinA - 90 + p.ankleNear + FOOT_DROP;
        const lFootA = lShinA - 90 + p.ankleFar + FOOT_DROP;

        const rollR = { toward: frontR, ref: "fwd" as const };
        const rollL = { toward: frontL, ref: "fwd" as const };
        aim(rig, B.rThigh, d(rThighA, -LEG_SPLAY), rollR);
        aim(rig, B.lThigh, d(lThighA, LEG_SPLAY), rollL);
        aim(rig, B.rShin, d(rShinA, -LEG_SPLAY), rollR);
        aim(rig, B.lShin, d(lShinA, LEG_SPLAY), rollL);
        // The foot uses the top of the foot as its front reference, since the
        // foot itself already runs forward.
        aim(rig, B.rFoot, d(rFootA, -TOE_OUT), { toward: frontR, ref: "up" });
        aim(rig, B.lFoot, d(lFootA, TOE_OUT), { toward: frontL, ref: "up" });

        root.updateMatrixWorld(true);
      };

      const tick = () => {
        const p = poseRef.current;
        const lying = Math.abs(p.rootRot) > 45;
        place(viewRef.current, lying);

        // Pose once to find out what the body would rest on, then re-pose with
        // that levelling applied. Two passes, because the resting angle depends
        // on the pose and the pose depends on the resting angle.
        applyPose(0);
        applyPose(lying ? settleAngle() : 0);

        // --- ground it -------------------------------------------------
        // Re-seated every frame. Grounding once at load uses the T-pose bounds,
        // so the moment a hip or knee bends the character floats or sinks.
        let lowest = Infinity;
        for (const nm of GROUND_BONES) {
          const b = bones.get(nm);
          if (!b) continue;
          b.getWorldPosition(_v);
          if (_v.y < lowest) lowest = _v.y;
        }
        // Joint centres sit inside the body, so the lowest one is never quite
        // on the floor: an ankle rides above the sole, a shoulder above the mat.
        if (Number.isFinite(lowest)) {
          root.position.y -= lowest - (lying ? 0.07 : 0.09);
        }

        renderer.render(scene, camera);
        raf = requestAnimationFrame(tick);
      };
      tick();
    });

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      resize.disconnect();
      renderer.dispose();
      if (renderer.domElement.parentNode === host) {
        host.removeChild(renderer.domElement);
      }
    };
    // Built once. The pose, the view and the framing are all read from refs
    // inside the loop, so changing them never reloads the 19 MB character.
  }, []);

  return <div ref={mount} className={className} />;
}
