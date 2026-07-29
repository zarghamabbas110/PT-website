"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import type { Pose } from "@/lib/figure";

/* ==========================================================================
   Human3D — proof that the existing joint model can drive a real rigged human.

   Nothing about the exercise data changes. The same Pose that the flat SVG
   figure consumes is mapped onto the bones of a rigged glTF character, so a
   photoreal model can be swapped in later without touching a single exercise.

   The rig here uses Mixamo's standard skeleton (mixamorig:*). Every character
   Mixamo produces shares those bone names, so a realistic male and female
   downloaded from there drop straight in with no code changes.
   ========================================================================== */

const DEG = Math.PI / 180;

/** Which bone each of our joints drives, and about which axis. */
type BoneRule = {
  bone: string;
  axis: "x" | "y" | "z";
  /** Degrees applied when the joint value is zero (Mixamo rests in a T-pose). */
  rest: number;
  /** Multiplier applied to the joint value. */
  scale: number;
};

/**
 * Mixamo rests arms out sideways in a T-pose, so "arm at the side" is already
 * a large rotation. `rest` carries that offset and `scale` maps our degrees on
 * top of it.
 */
const MAP: Partial<Record<keyof Pose, BoneRule>> = {
  shoulderNear: { bone: "RightArm", axis: "z", rest: 78, scale: -0.42 },
  elbowNear: { bone: "RightForeArm", axis: "y", rest: 0, scale: 0.9 },
  shoulderFar: { bone: "LeftArm", axis: "z", rest: -78, scale: 0.42 },
  elbowFar: { bone: "LeftForeArm", axis: "y", rest: 0, scale: -0.9 },
  hipNear: { bone: "RightUpLeg", axis: "x", rest: 0, scale: -0.9 },
  kneeNear: { bone: "RightLeg", axis: "x", rest: 0, scale: 0.9 },
  hipFar: { bone: "LeftUpLeg", axis: "x", rest: 0, scale: -0.9 },
  kneeFar: { bone: "LeftLeg", axis: "x", rest: 0, scale: 0.9 },
  lumbar: { bone: "Spine", axis: "x", rest: 0, scale: 0.4 },
  thorax: { bone: "Spine1", axis: "x", rest: 0, scale: 0.4 },
  neck: { bone: "Neck", axis: "x", rest: 0, scale: 0.5 },
  head: { bone: "Head", axis: "x", rest: 0, scale: 0.5 },
};

/**
 * Mixamo prefixes bones inconsistently — "mixamorig:Hips" on some exports,
 * "mixamorig7Hips" on others. Match on the part after the prefix so any
 * character loads without editing this file.
 */
function boneKey(name: string): string {
  return name.replace(/^mixamorig\d*[:_]?/i, "");
}

export default function Human3D({
  pose,
  view = "front",
  className,
}: {
  pose: Pose;
  view?: "front" | "side";
  className?: string;
}) {
  const mount = useRef<HTMLDivElement>(null);
  const poseRef = useRef(pose);
  poseRef.current = pose;

  useEffect(() => {
    const host = mount.current;
    if (!host) return;

    const width = host.clientWidth || 400;
    const height = host.clientHeight || 480;

    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(32, width / height, 0.1, 100);
    // The camera is what solves the plane problem: abduction needs a front
    // view, flexion a side view, and here that is one number rather than a
    // second hand-drawn figure.
    if (view === "front") camera.position.set(0, 1.05, 4.6);
    else camera.position.set(4.6, 1.05, 0);
    camera.lookAt(0, 0.95, 0);

    scene.add(new THREE.HemisphereLight(0xffffff, 0x555560, 2.2));
    const key = new THREE.DirectionalLight(0xffffff, 1.6);
    key.position.set(2.5, 4, 3);
    scene.add(key);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    host.appendChild(renderer.domElement);

    const bones = new Map<string, THREE.Bone>();
    let raf = 0;
    let disposed = false;

    new GLTFLoader().load("/models/adam.glb", (gltf) => {
      if (disposed) return;
      gltf.scene.traverse((o) => {
        if ((o as THREE.Bone).isBone) bones.set(boneKey(o.name), o as THREE.Bone);
      });

      // Drop the model so its feet sit on the origin, and face the camera.
      const box = new THREE.Box3().setFromObject(gltf.scene);
      gltf.scene.position.y -= box.min.y;
      scene.add(gltf.scene);

      const tick = () => {
        const p = poseRef.current;
        for (const [joint, rule] of Object.entries(MAP)) {
          const bone = bones.get(rule.bone);
          if (!bone) continue;
          const value = p[joint as keyof Pose] as number;
          bone.rotation[rule.axis] = (rule.rest + value * rule.scale) * DEG;
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
  }, [view]);

  return <div ref={mount} className={className} />;
}
