"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import type { Pose } from "@/lib/figure";

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
  pose, view = "front", className,
}: { pose: Pose; view?: View3D; className?: string }) {
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

    const place = (v: View3D, lying: boolean) => {
      if (lying) {
        const look = new THREE.Vector3(0, 0.25, -0.55);
        if (v === "front") camera.position.set(0, 3.1, 2.4);
        else if (v === "side") camera.position.set(4.4, 1.2, -0.55);
        else camera.position.set(3.1, 2.2, 1.9);
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

        aim(rig, "rUpper", d(p.shoulderNear, -ARM_SPLAY), front);
        aim(rig, "lUpper", d(p.shoulderFar, ARM_SPLAY), front);
        aim(rig, "rFore", d(p.shoulderNear - p.elbowNear, -ARM_SPLAY), front);
        aim(rig, "lFore", d(p.shoulderFar - p.elbowFar, ARM_SPLAY), front);

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
        place(viewRef.current, lying);

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
