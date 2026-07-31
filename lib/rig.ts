import * as THREE from "three";

/* ==========================================================================
   Shared rig vocabulary.

   Both the exercise figure and the landing-page body picker have to find the
   same bones in the same model, and both have to survive the model being
   swapped for a better one. The naming knowledge lives here so the two cannot
   drift apart.
   ========================================================================== */

export const DEG = Math.PI / 180;

/** Scale every model to a consistent standing height so framing is stable. */
export const TARGET_HEIGHT = 1.8;

/** The logical joints the drivers know about. */
export type J =
  | "hips" | "spineLower" | "spineUpper" | "neck" | "head"
  | "rUpper" | "rFore" | "rHand" | "lUpper" | "lFore" | "lHand"
  | "rThigh" | "rShin" | "rFoot" | "rToe"
  | "lThigh" | "lShin" | "lFoot" | "lToe";

/**
 * Candidate bone base-names per joint, best first. Standard (Mixamo) names lead
 * so a standard rig always wins; game-rip names follow as fallbacks.
 */
export const CAND: Record<J, string[]> = {
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
export const CHILD: Partial<Record<J, J>> = {
  spineLower: "spineUpper", spineUpper: "neck", neck: "head",
  rUpper: "rFore", rFore: "rHand", lUpper: "lFore", lFore: "lHand",
  rThigh: "rShin", rShin: "rFoot", rFoot: "rToe",
  lThigh: "lShin", lShin: "lFoot", lFoot: "lToe",
};

/** Strip a rig prefix ("mixamorig7:") and a numeric suffix ("_084"). */
export function baseName(name: string): string {
  return name.replace(/^mixamorig\d*[:_]?/i, "").replace(/_\d+$/, "");
}

/**
 * A pose angle as a direction in the body's own frame. 0 up, 90 forward, 180
 * down; `lateral` swings it out to the side. Up is +Y, forward is +Z.
 */
export function dir(angle: number, lateral = 0): THREE.Vector3 {
  const a = angle * DEG, l = lateral * DEG;
  return new THREE.Vector3(
    Math.sin(a) * Math.sin(l),
    Math.cos(a),
    Math.sin(a) * Math.cos(l)
  ).normalize();
}

/** Every bone in the model, indexed by its normalised base name. */
export function collectBones(root: THREE.Object3D): Map<string, THREE.Bone[]> {
  const raw = new Map<string, THREE.Bone[]>();
  root.traverse((o) => {
    if (!(o as THREE.Bone).isBone) return;
    const k = baseName(o.name);
    const list = raw.get(k);
    if (list) list.push(o as THREE.Bone);
    else raw.set(k, [o as THREE.Bone]);
  });
  return raw;
}

/**
 * All bones matching a logical joint. A model may carry several skeletons —
 * one per mesh — so this returns every copy, and callers drive them together.
 */
export function bonesFor(raw: Map<string, THREE.Bone[]>, key: J): THREE.Bone[] {
  for (const name of CAND[key]) {
    const hit = raw.get(name);
    if (hit) return hit;
  }
  return [];
}
