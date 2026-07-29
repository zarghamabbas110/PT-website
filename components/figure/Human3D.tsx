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
  shoulderNear: { bone: "mixamorig:RightArm", axis: "z", rest: -75, scale: 0.5 },
  elbowNear: { bone: "mixamorig:RightForeArm", axis: "y", rest: 0, scale: -1 },
  shoulderFar: { bone: "mixamorig:LeftArm", axis: "z", rest: 75, scale: -0.5 },
  elbowFar: { bone: "mixamorig:LeftForeArm", axis: "y", rest: 0, scale: 1 },
  hipNear: { bone: "mixamorig:RightUpLeg", axis: "x", rest: 0, scale: -1 },
  kneeNear: { bone: "mixamorig:RightLeg", axis: "x", rest: 0, scale: 1 },
  hipFar: { bone: "mixamorig:LeftUpLeg", axis: "x", rest: 0, scale: -1 },
  kneeFar: { bone: "mixamorig:LeftLeg", axis: "x", rest: 0, scale: 1 },
  lumbar: { bone: "mixamorig:Spine", axis: "x", rest: 0, scale: 0.5 },
  thorax: { bone: "mixamorig:Spine1", axis: "x", rest: 0, scale: 0.5 },
  neck: { bone: "mixamorig:Neck", axis: "x", rest: 0, scale: 0.6 },
  head: { bone: "mixamorig:Head", axis: "x", rest: 0, scale: 0.6 },
};

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
    if (view === "front") camera.position.set(0, 1.0, 4.4);
    else camera.position.set(4.4, 1.0, 0);
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

    new GLTFLoader().load("/models/test-human.glb", (gltf) => {
      if (disposed) return;
      gltf.scene.traverse((o) => {
        if ((o as THREE.Bone).isBone) bones.set(o.name, o as THREE.Bone);
      });
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
