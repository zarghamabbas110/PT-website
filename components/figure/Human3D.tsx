"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import type { Pose } from "@/lib/figure";

/* ==========================================================================
   Human3D — drives a rigged Mixamo character from the same Pose that draws
   the flat figure.

   HOW THE RIG IS DRIVEN
   The first attempt set Euler angles on each bone and guessed which local
   axis to use. That is unreliable: a Mixamo bone's local axes point down the
   bone, so "rotate about Z" means something different for an arm than a thigh.

   Instead each bone is *aimed*. We work out the world-space direction the
   segment should point, then rotate the bone so its rest direction lines up
   with it. The pose angles already describe directions, so the mapping is
   exact rather than tuned by eye.
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
  lThigh: "LeftUpLeg",
  lShin: "LeftLeg",
  lFoot: "LeftFoot",
};

/**
 * Mixamo prefixes bones inconsistently — "mixamorig:Hips" on some exports,
 * "mixamorig7Hips" on others. Match on the part after the prefix so any
 * character loads without editing this file.
 */
function boneKey(name: string): string {
  return name.replace(/^mixamorig\d*[:_]?/i, "");
}

/**
 * A pose angle as a world direction.
 *
 * Our 2D convention: 0 points straight up, positive rotates forward, so 180
 * hangs straight down and 90 points horizontally forward. In the scene, up is
 * +Y and the direction the character faces is +Z.
 *
 * `lateral` swings the segment out to the side instead of forward, which is
 * what abduction and adduction need.
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

type Rig = {
  bones: Map<string, THREE.Bone>;
  /** Direction from each bone toward its child, in that bone's own space. */
  restDir: Map<string, THREE.Vector3>;
};

/** Rotate `bone` so it points along `targetWorld`. */
function aim(rig: Rig, name: string, targetWorld: THREE.Vector3) {
  const bone = rig.bones.get(name);
  const rest = rig.restDir.get(name);
  if (!bone || !rest || !bone.parent) return;

  // Convert the target into the parent's space, since a bone's rotation is
  // expressed relative to its parent.
  const parentWorldQ = new THREE.Quaternion();
  bone.parent.getWorldQuaternion(parentWorldQ);
  const targetLocal = targetWorld
    .clone()
    .applyQuaternion(parentWorldQ.invert())
    .normalize();

  bone.quaternion.setFromUnitVectors(rest, targetLocal);
  bone.updateMatrixWorld(true);
}

export type View3D = "front" | "side" | "threeQuarter";

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

  useEffect(() => {
    const host = mount.current;
    if (!host) return;

    const width = host.clientWidth || 400;
    const height = host.clientHeight || 520;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 100);

    // The camera is what replaces a second hand-drawn figure: abduction wants
    // a front view, flexion a side view, and that is now one number.
    const CAMS: Record<View3D, [number, number, number]> = {
      front: [0, 1.0, 4.6],
      side: [4.6, 1.0, 0],
      threeQuarter: [3.2, 1.2, 3.2],
    };
    camera.position.set(...CAMS[view]);
    camera.lookAt(0, 0.9, 0);

    // A lying body occupies a completely different volume from a standing one,
    // so the camera has to reframe or the character drifts to a corner.
    const lying = Math.abs(pose.rootRot) > 45;
    if (lying) {
      const t = new THREE.Vector3(0, 0.3, -0.75);
      if (view === "front") camera.position.set(0, 3.0, 2.6);
      else if (view === "side") camera.position.set(4.2, 1.1, -0.75);
      else camera.position.set(3.0, 2.2, 1.6);
      camera.lookAt(t);
    }

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

    let raf = 0;
    let disposed = false;

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

      // Record each bone's rest direction toward its child. Everything else is
      // expressed relative to this, so the rig's own conventions do not leak
      // into the exercise data.
      const restDir = new Map<string, THREE.Vector3>();
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
        [B.lThigh]: B.lShin,
        [B.lShin]: B.lFoot,
      };
      for (const [parent, child] of Object.entries(CHILD)) {
        const c = bones.get(child);
        if (c) restDir.set(parent, c.position.clone().normalize());
      }
      // The head has no useful child joint; treat it as continuing the neck.
      const headBone = bones.get(B.head);
      if (headBone) restDir.set(B.head, new THREE.Vector3(0, 1, 0));

      const rig: Rig = { bones, restDir };
      const hips = bones.get(B.hips);

      const tick = () => {
        const p = poseRef.current;

        // Whole-body orientation. rootRot of -90 means lying on the back, and
        // rotating the root is far more stable than bending the spine to fake it.
        root.rotation.set(0, 0, 0);
        root.position.set(0, 0, 0);
        // rootRot -90 means supine. Rotating +90 about X would lay him face
        // down; -90 puts him on his back with the head toward -Z, which is
        // what every lying exercise in the library assumes.
        root.rotateX(p.rootRot * DEG);
        root.updateMatrixWorld(true);

        // Every aim target must be expressed in the *body's* frame, then
        // rotated into the world by the root. Aiming straight at world
        // directions silently cancels the root rotation — the character
        // stands back up however far you lay him down.
        const rootQ = new THREE.Quaternion();
        root.getWorldQuaternion(rootQ);
        const d = (angle: number, lateral = 0) =>
          dir(angle, lateral).applyQuaternion(rootQ);

        // --- spine -----------------------------------------------------
        // Our four-point chain is spread across Mixamo's three spine bones.
        const lumbarA = p.pelvisTilt + p.lumbar;
        const thoraxA = lumbarA + p.thorax;
        aim(rig, B.spine, d(p.pelvisTilt * 0.6));
        aim(rig, B.spine1, d(lumbarA * 0.7));
        aim(rig, B.spine2, d(thoraxA * 0.5));
        aim(rig, B.neck, d(thoraxA + p.neck));
        aim(rig, B.head, d(thoraxA + p.neck + p.head));

        // --- arms ------------------------------------------------------
        // shoulderNear: 180 hangs at the side, 90 is horizontal forward, 0 is
        // straight overhead. The far limb is the character's left.
        const rUpper = p.shoulderNear;
        const lUpper = p.shoulderFar;
        aim(rig, B.rArm, d(rUpper, -8));
        aim(rig, B.lArm, d(lUpper, 8));
        aim(rig, B.rFore, d(rUpper - p.elbowNear, -8));
        aim(rig, B.lFore, d(lUpper - p.elbowFar, 8));

        // --- legs ------------------------------------------------------
        const rThighA = 180 - p.hipNear;
        const lThighA = 180 - p.hipFar;
        aim(rig, B.rThigh, d(rThighA, -4));
        aim(rig, B.lThigh, d(lThighA, 4));
        aim(rig, B.rShin, d(rThighA + p.kneeNear, -4));
        aim(rig, B.lShin, d(lThighA + p.kneeFar, 4));

        // --- ground it -------------------------------------------------
        // The model is re-seated every frame. Grounding once at load uses the
        // T-pose bounds, so the moment a hip or knee bends the character
        // floats or sinks — which is what the feet were doing.
        if (hips) {
          root.updateMatrixWorld(true);
          const v = new THREE.Vector3();

          if (Math.abs(p.rootRot) > 45) {
            // Lying down. The lowest bone is now a heel or a shoulder, so
            // seating on it drags the body off the mat at an angle. Rest the
            // pelvis at roughly trunk half-thickness instead.
            hips.getWorldPosition(v);
            root.position.y += 0.17 - v.y;
          } else {
            let lowest = Infinity;
            bones.forEach((b) => {
              b.getWorldPosition(v);
              if (v.y < lowest) lowest = v.y;
            });
            // Ankle bones sit a little above the sole.
            if (Number.isFinite(lowest)) root.position.y -= lowest - 0.09;
          }
        }

        renderer.render(scene, camera);
        raf = requestAnimationFrame(tick);
      };
      tick();
    });

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      renderer.dispose();
      if (renderer.domElement.parentNode === host) {
        host.removeChild(renderer.domElement);
      }
    };
  }, [view, pose.rootRot]);

  return <div ref={mount} className={className} />;
}
