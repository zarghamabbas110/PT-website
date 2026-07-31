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

/** Finger chains, for closing the hand around a wand or a band. */
const FINGERS = ["Index", "Middle", "Ring", "Pinky"];
/** How far each knuckle curls, from the base joint outwards, in degrees. */
const CURL = [58, 72, 66];
const THUMB_CURL = [26, 34, 30];

const GROUND: J[] = ["rFoot", "rToe", "lFoot", "lToe"];
const GROUND_LYING: J[] = ["head", "spineUpper", "hips", "rFoot", "lFoot", "rHand", "lHand"];
/** How far past a contact bone the body actually reaches, in metres. */
const REACH: Partial<Record<J, number>> = { rHand: 0.05, lHand: 0.05 };

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
    key.castShadow = true;
    key.shadow.mapSize.set(2048, 2048);
    key.shadow.radius = 3;
    key.shadow.bias = -0.0008;
    {
      const c = key.shadow.camera;
      c.near = 0.5; c.far = 14;
      c.left = -2.2; c.right = 2.2; c.top = 2.2; c.bottom = -2.2;
      c.updateProjectionMatrix();
    }
    scene.add(key);
    const fill = new THREE.DirectionalLight(0xffffff, 0.7);
    fill.position.set(-3, 2, -2);
    scene.add(fill);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
    renderer.setSize(width, height);
    // Draw at least twice the CSS size. On an ordinary (non-retina) screen the
    // default 1x render is what makes the figure look soft and low-grade.
    renderer.setPixelRatio(Math.min(Math.max(window.devicePixelRatio, 2), 3));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    host.appendChild(renderer.domElement);

    // A soft contact shadow on an invisible floor. Without it the figure and
    // its equipment look pasted onto the background rather than standing on it.
    const shadowFloor = new THREE.Mesh(
      new THREE.PlaneGeometry(12, 12),
      new THREE.ShadowMaterial({ opacity: 0.22 })
    );
    shadowFloor.rotation.x = -Math.PI / 2;
    shadowFloor.receiveShadow = true;
    scene.add(shadowFloor);

    const resize = new ResizeObserver(() => {
      const w = host.clientWidth || width, h = host.clientHeight || height;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    });
    resize.observe(host);

    /** Which way the camera sits relative to the body, per view. */
    const VIEW_DIR: Record<View3D, THREE.Vector3> = {
      front: new THREE.Vector3(0, 0.1, 1).normalize(),
      side: new THREE.Vector3(1, 0.1, 0).normalize(),
      threeQuarter: new THREE.Vector3(0.75, 0.16, 0.75).normalize(),
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
      const restBox = new THREE.Box3().setFromObject(gltf.scene);
      const h0 = restBox.max.y - restBox.min.y;
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
        if ((o as THREE.Mesh).isMesh) {
          (o as THREE.Mesh).castShadow = true;
          (o as THREE.Mesh).receiveShadow = true;
        }
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

      /* --- gripping -------------------------------------------------------
         A wand or a band has to be held, not passed through an open hand. Each
         knuckle is curled about its own hinge — the axis square to the bone and
         to the palm — starting from the pose the hand was modelled in, so the
         hand closes the way a hand closes. */
      type Knuckle = {
        bone: THREE.Bone; child: THREE.Bone; hand: THREE.Bone;
        restQ: THREE.Quaternion; axis: THREE.Vector3; deg: number; sign: number;
      };
      const knuckles: Knuckle[] = [];
      for (const side of ["Left", "Right"]) {
        const hands = raw.get(`${side}Hand`);
        if (!hands) continue;
        for (const finger of [...FINGERS, "Thumb"]) {
          const curl = finger === "Thumb" ? THUMB_CURL : CURL;
          for (let i = 1; i <= 3; i++) {
            const bones = raw.get(`${side}Hand${finger}${i}`);
            const kids = raw.get(`${side}Hand${finger}${i + 1}`);
            if (!bones || !kids) continue;
            bones.forEach((bone, n) => {
              const kid = kids[n] ?? kids[0];
              const restDir = kid.position.clone().normalize();
              bone.getWorldQuaternion(_wq);
              const restUp = new THREE.Vector3(0, 1, 0).applyQuaternion(_wq.clone().invert());
              const axis = new THREE.Vector3().crossVectors(restDir, restUp);
              if (axis.lengthSq() < 1e-6) return;
              knuckles.push({
                bone, child: kid, hand: hands[n] ?? hands[0],
                restQ: bone.quaternion.clone(),
                axis: axis.normalize(),
                deg: curl[i - 1],
                sign: 1,
              });
            });
          }
        }
      }
      const _grip = new THREE.Quaternion();

      // Left and right hands are mirrored, so the same hinge axis closes one
      // hand and opens the other. Rather than assume, each finger is curled
      // both ways and keeps whichever brings its *tip* towards the wrist —
      // which is what closing a hand does, on either side. The test has to use
      // the fingertip: the next knuckle along barely moves, so measuring that
      // cannot tell the two directions apart.
      {
        const tip = new THREE.Vector3();
        const wrist = new THREE.Vector3();
        const chains = new Map<string, Knuckle[]>();
        for (const k of knuckles) {
          const id = k.bone.name.replace(/[123](_\d+)?$/, "");
          (chains.get(id) ?? chains.set(id, []).get(id)!).push(k);
        }
        chains.forEach((chain) => {
          const hand = chain[0].hand;
          const last = chain[chain.length - 1];
          hand.getWorldPosition(wrist);
          let best = 1, bestDist = Infinity;
          for (const sign of [1, -1]) {
            for (const k of chain) {
              _grip.setFromAxisAngle(k.axis, k.deg * sign * DEG);
              k.bone.quaternion.copy(k.restQ).multiply(_grip);
            }
            hand.updateMatrixWorld(true);
            const dist = last.child.getWorldPosition(tip).distanceTo(wrist);
            if (dist < bestDist) { bestDist = dist; best = sign; }
          }
          for (const k of chain) {
            k.sign = best;
            k.bone.quaternion.copy(k.restQ);
          }
          hand.updateMatrixWorld(true);
        });
      }
      const setGrip = (amount: number) => {
        for (const k of knuckles) {
          _grip.setFromAxisAngle(k.axis, k.deg * k.sign * amount * DEG);
          k.bone.quaternion.copy(k.restQ).multiply(_grip);
        }
      };
      /** Closed when the exercise puts something in the hands. */
      let gripAmount = 0;

      /**
       * Point the camera at whatever the figure and its equipment actually
       * occupy, and stand far enough back to fit it.
       *
       * Fixed camera positions cannot work here: standing, seated and lying
       * bodies fill completely different volumes, and adding a chair or a mat
       * changes it again. Guessing distances is what cut the chair off and left
       * a lying figure adrift in empty space.
       *
       * A skinned mesh's bounding box does not follow its pose, so the extent is
       * measured from the posed bones and padded for flesh, then merged with the
       * props' own boxes.
       */
      const fitBox = new THREE.Box3();
      const frameCamera = (v: View3D) => {
        fitBox.makeEmpty();
        rig.joints.forEach((list) => {
          list[0]?.bone.getWorldPosition(_v);
          fitBox.expandByPoint(_v);
        });
        if (fitBox.isEmpty()) return;
        fitBox.expandByScalar(0.14); // flesh, hair and shoes beyond the joints

        // Keep the body in the middle of the shot. Centring on the union with
        // the equipment instead pushes the figure off to one side, because a
        // long mat or a wall is far bigger than the person on it.
        const centre = fitBox.getCenter(new THREE.Vector3());
        // Walls and door frames are scenery: they are far larger than the
        // person, and letting them drive the framing shrinks the figure to a
        // speck. They are drawn but not fitted to.
        for (const child of propGroup.children) {
          if (child.userData.noFrame) continue;
          fitBox.union(new THREE.Box3().setFromObject(child));
        }
        let radius = 0;
        for (const cx of [fitBox.min.x, fitBox.max.x])
          for (const cy of [fitBox.min.y, fitBox.max.y])
            for (const cz of [fitBox.min.z, fitBox.max.z])
              radius = Math.max(radius, centre.distanceTo(_v.set(cx, cy, cz)));
        const vFov = camera.fov * DEG;
        const hFov = 2 * Math.atan(Math.tan(vFov / 2) * camera.aspect);
        // 1.06 leaves a little air around the subject rather than cropping it.
        const dist = (radius / Math.sin(Math.min(vFov, hFov) / 2)) * 1.06;

        camera.position.copy(centre).addScaledVector(VIEW_DIR[v], dist);
        camera.lookAt(centre);
      };

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
      /** Where a held object sits: the knuckles, not the wrist joint. */
      const gripPoint = (side: "Left" | "Right") => {
        const knuckle = raw.get(`${side}HandMiddle1`)?.[0] ?? raw.get(`${side}Hand`)?.[0];
        return knuckle ? knuckle.getWorldPosition(new THREE.Vector3()) : null;
      };

      /** The direction the chest faces, in world space, kept fresh each frame. */
      const bodyFront = new THREE.Vector3(0, 0, 1);
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
        m.castShadow = true; m.receiveShadow = true;
        propGroup.add(m);
        return m;
      };
      const boxMesh = (mat: THREE.Material, w: number, h: number, d: number) => {
        const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
        m.castShadow = true; m.receiveShadow = true;
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
        // Anything held in the hands closes them.
        const held = (propsRef.current ?? []).some(
          (q) => q.kind === "stick" || q.kind === "dumbbells" ||
                 (q.kind === "band" && q.anchor !== "front")
        );
        gripAmount = held ? 1 : 0;
        for (const prop of propsRef.current ?? []) {
        switch (prop.kind) {
          case "mat": {
            // The mat's top surface must sit at the floor line, not above it.
            // Any higher and its near edge draws over the shoes and shoulders
            // instead of lying under them.
            const m = boxMesh(mats.mat, 0.78, 0.035, 2.1);
            // Like the wall, the mat is floor covering rather than subject: it
            // is longer than the person, so fitting the camera to it shrinks
            // them. It is drawn, and may run off the edge of the shot.
            m.userData.noFrame = true;
            dynamic.push(() => {
              // Centre it under whoever is on it. A fixed position was set for
              // someone lying on their back, whose head and feet run one way
              // along the floor; face down or on all fours they run the other,
              // and the mat ended up alongside the body instead of beneath it.
              const head = wp("head");
              const rf = wp("rFoot"), lf = wp("lFoot");
              if (!head || !rf || !lf) { m.position.set(0, -0.0175, -0.55); return; }
              const feet = rf.clone().add(lf).multiplyScalar(0.5);
              m.position.set(
                (head.x + feet.x) / 2,
                -0.0175,
                (head.z + feet.z) / 2
              );
            });
            break;
          }
          case "chair": {
            // The seat has to clear the buttocks. The hip *joint* sits well
            // inside the flesh, so a seat level with it cuts through the body —
            // it belongs a hand's width below, with the figure resting on top.
            const seat = boxMesh(mats.chair, 0.42, 0.05, 0.44);
            const back = boxMesh(mats.chair, 0.42, 0.46, 0.045);
            const legs = [0, 1, 2, 3].map(() => boxMesh(mats.chair, 0.045, 1, 0.045));
            dynamic.push(() => {
              const h = wp("hips");
              const hipY = h ? h.y : 0.5;
              const hipZ = h ? h.z : 0;
              const topY = hipY - 0.13;
              const seatZ = hipZ - 0.04;
              seat.position.set(0, topY - 0.025, seatZ);
              back.position.set(0, topY + 0.23, seatZ - 0.2);
              legs.forEach((leg, i) => {
                const sx = i < 2 ? -0.17 : 0.17;
                const sz = i % 2 === 0 ? -0.17 : 0.17;
                const legTop = topY - 0.05;
                leg.scale.y = Math.max(legTop, 0.05);
                leg.position.set(sx, Math.max(legTop, 0.05) / 2, seatZ + sz);
              });
            });
            break;
          }
          case "wall":
          case "wallRight": {
            // A solid slab in front of the figure hides the figure. This is a
            // single-sided panel turned away from the viewer, so you see
            // through it from the front and the person stays visible, while it
            // still reads as a wall from any other angle.
            const w = new THREE.Mesh(
              new THREE.PlaneGeometry(1.8, 2.4),
              new THREE.MeshStandardMaterial({
                color: 0xe7e2d6, roughness: 1, side: THREE.FrontSide,
              })
            );
            w.rotation.y = Math.PI;
            w.position.set(0, 1.2, 0.62);
            w.receiveShadow = true;
            w.userData.noFrame = true;
            propGroup.add(w);
            break;
          }
          case "ballBetweenKnees":
          case "gymBall": {
            const gym = prop.kind === "gymBall";
            const ball = new THREE.Mesh(new THREE.SphereGeometry(1, 28, 22), mats.ball);
            ball.castShadow = true; ball.receiveShadow = true;
            propGroup.add(ball);
            dynamic.push(() => {
              const a = wp("rShin"), b = wp("lShin");
              if (!a || !b) return;
              // Sit it between the thighs a little above the knees, which is
              // where a squeeze ball actually rests. Centred on the knee joints
              // it reads as a lump growing out of the knee.
              const kneeMid = a.clone().add(b).multiplyScalar(0.5);
              const hR = wp("rThigh"), hL = wp("lThigh");
              if (hR && hL) {
                const hipMid = hR.clone().add(hL).multiplyScalar(0.5);
                kneeMid.lerp(hipMid, 0.22);
              }
              ball.position.copy(kneeMid);
              // Size it to the gap it actually sits in. A ball wider than the
              // knees are apart bulges out past them and hides the joints —
              // which is exactly what a fixed radius did.
              // Size it to the gap between the knee *surfaces*, not the joint
              // centres — those sit deep inside the leg, so a ball matched to
              // them swallows both knees, which is what it was doing.
              const KNEE_HALF_WIDTH = 0.055;
              const gap = a.distanceTo(b);
              const free = gap / 2 - KNEE_HALF_WIDTH;
              const r = gym ? 0.3 : Math.min(prop.radius ?? 0.09, Math.max(free, 0.03));
              ball.scale.setScalar(r);
            });
            break;
          }
          case "stick": {
            const wand = cyl(mats.wand, 0.02, 1);
            dynamic.push(() => {
              const a = gripPoint("Right"), b = gripPoint("Left");
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
              const a = gripPoint("Right"), b = gripPoint("Left");
              if (a) dR.position.copy(a);
              if (b) dL.position.copy(b);
            });
            break;
          }
          case "band": {
            // Two ways a band is actually used. Held BETWEEN the hands, it is
            // pulled apart — that is rotation and pull-apart work. Anchored in
            // FRONT, it is pulled towards you — that is a row. A band running
            // away to both sides, as this drew before, is neither.
            const anchored = prop.anchor === "front";
            if (anchored) {
              const bR = cyl(mats.band, 0.016, 1);
              const bL = cyl(mats.band, 0.016, 1);
              dynamic.push(() => {
                const a = wp("rHand"), b = wp("lHand");
                const s = wp("spineUpper");
                const y = s ? s.y : 1.2;
                if (a) spanCyl(bR, a, new THREE.Vector3(-0.16, y, 1.15));
                if (b) spanCyl(bL, b, new THREE.Vector3(0.16, y, 1.15));
              });
            } else {
              // A band held in both hands passes IN FRONT of the body, so it is
              // drawn as a curve bowed forwards. A straight line between the
              // hands runs through the stomach and disappears behind the torso.
              const tube = new THREE.Mesh(undefined, mats.band);
              tube.castShadow = true;
              propGroup.add(tube);
              const curve = new THREE.QuadraticBezierCurve3(
                new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()
              );
              dynamic.push(() => {
                const a = gripPoint("Right"), b = gripPoint("Left");
                if (!a || !b) return;
                curve.v0.copy(a);
                curve.v2.copy(b);
                curve.v1.copy(a).add(b).multiplyScalar(0.5)
                  .addScaledVector(bodyFront, 0.26);
                tube.geometry?.dispose();
                tube.geometry = new THREE.TubeGeometry(curve, 20, 0.016, 10, false);
              });
            }
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
              post.userData.noFrame = true;
            }
            const top = boxMesh(mats.wall, 1.62, 0.12, 0.12);
            top.position.set(0, 2.25, 0.15);
            top.userData.noFrame = true;
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

        // A foot planted on the floor is set by the floor, not by the body. In a
        // bridge the trunk is tilted right up, and carrying the feet round with
        // it turned them over — soles up, shoes upside down. A planted foot
        // points along the ground away from the head, sole down, whatever the
        // rest of the body is doing.
        // Only a body on its back: face down with a bent knee is all-fours,
        // where the shin lies along the floor and the foot follows it.
        const supine = p.rootRot < -45 && Math.abs(p.roll ?? 0) < 30;
        if (supine) {
          const caudal = d(180);
          caudal.y = 0;
          if (caudal.lengthSq() > 1e-4) {
            caudal.normalize();
            const worldUp = new THREE.Vector3(0, 1, 0);
            // Only a bent knee has its foot on the floor; a straight leg is
            // being raised, as in a straight leg raise.
            if (p.kneeNear > 40) aim(rig, "rFoot", caudal, worldUp, "up");
            if (p.kneeFar > 40) aim(rig, "lFoot", caudal, worldUp, "up");
          }
        }

        setGrip(gripAmount);
        root.updateMatrixWorld(true);
      };

      const tick = () => {
        const p = poseRef.current;
        const lying = Math.abs(p.rootRot) > 45;
        const contacts = lying ? GROUND_LYING : GROUND;

        /** Where each ground contact reaches, lowest first. */
        const touchPoints = () => {
          const pts: THREE.Vector3[] = [];
          for (const k of contacts) {
            const b = first(k);
            if (!b) continue;
            const w = b.getWorldPosition(new THREE.Vector3());
            // The hand bone is the wrist. With the palm planted — all fours, a
            // plank, a press up — the fingers reach well below it, so the
            // wrist has to be held that much clear or the hand sinks in.
            w.y -= REACH[k] ?? 0;
            pts.push(w);
          }
          return pts.sort((a, b) => a.y - b.y);
        };

        /** Drop so the lowest contact rests on the floor. */
        const settleDown = () => {
          const pts = touchPoints();
          if (!pts.length) return;
          // Joint centres sit inside the flesh, so the body is lifted until the
          // skin — not the bone — meets the floor. A lying body needs more of a
          // margin than a standing one: the trunk is thick, an ankle is not.
          root.position.y -= pts[0].y - (lying ? 0.055 : 0.04);
          root.updateMatrixWorld(true);
        };

        poseBody(p, 0);
        settleDown();

        // A body propped on its forearms is not lying flat: it rests on two
        // contacts — forearms and toes in a plank, forearm and feet in a side
        // plank — and everything between them is held clear of the floor.
        // Dropping the single lowest point onto the floor leaves the rest of
        // the body hovering, so find the smallest tilt about the floor that
        // brings a second contact down, and rest on both. On someone genuinely
        // lying flat the second contact is already down and this is a no-op.
        if (lying) {
          const pts = touchPoints();
          const p0 = pts[0];
          let settle = 0;
          for (let i = 1; i < pts.length; i++) {
            const dz = pts[i].z - p0.z, dy = pts[i].y - p0.y;
            // Nearly above the pivot: no rotation brings it down sensibly.
            if (Math.abs(dz) < 0.08 || dy < 0.02) continue;
            let t = Math.atan2(dy, dz);
            if (t > Math.PI / 2) t -= Math.PI;
            if (t < -Math.PI / 2) t += Math.PI;
            // The smallest tilt wins: any larger one would have driven another
            // contact through the floor on the way.
            if (settle === 0 || Math.abs(t) < Math.abs(settle)) settle = t;
          }
          const LIMIT = 22 * DEG;
          settle = Math.max(-LIMIT, Math.min(LIMIT, settle));
          if (Math.abs(settle) > 0.5 * DEG) {
            poseBody(p, settle);
            settleDown();
          }
        }

        bodyFront.set(0, 0, 1).applyQuaternion(root.getWorldQuaternion(_wq));
        updateProps();
        frameCamera(viewRef.current);

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
