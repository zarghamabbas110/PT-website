import type { Exercise } from "../schema";
export { JOINTS } from "../schema";
import { SHOULDER } from "./shoulder";
import { SHOULDER_B } from "./shoulder-b";
import { SHOULDER_C } from "./shoulder-c";
import { ELBOW } from "./elbow";
import { WRIST_HAND } from "./wrist-hand";
import { NECK_BACK } from "./neck-back";
import { HIP_KNEE } from "./hip-knee";
import { ANKLE_FOOT } from "./ankle-foot";
import { FUNCTIONAL } from "./functional";
import { PROGRESSIONS } from "./progressions";
import { CORE_SET } from "./core-set";
import { TRUNK_SET } from "./trunk-set";
import { SPINE_LOWER_LIMB } from "./spine-lower-limb";
import { STRETCHES } from "./stretches";
import { ISOMETRICS } from "./isometrics";
import { RESISTED } from "./resisted";
import { RANGE_OF_MOTION } from "./range-of-motion";
import { CONTROL_BALANCE } from "./control-balance";
import { ADVANCED_SET } from "./advanced-set";
import { GAIT_BALANCE } from "./gait-balance";
import { POST_OPERATIVE } from "./post-operative";
import { POPULATIONS } from "./populations";
import { EQUIPMENT } from "./equipment";
import { REGION_DEPTH } from "./region-depth";
import { FINAL_SET } from "./final-set";

/* The library is assembled from per-region files so batches can be written,
   reviewed and merged independently as it grows. */
export const EXERCISES: Exercise[] = [
  ...SHOULDER,
  ...SHOULDER_B,
  ...SHOULDER_C,
  ...ELBOW,
  ...WRIST_HAND,
  ...NECK_BACK,
  ...HIP_KNEE,
  ...ANKLE_FOOT,
  ...FUNCTIONAL,
  ...PROGRESSIONS,
  ...CORE_SET,
  ...TRUNK_SET,
  ...SPINE_LOWER_LIMB,
  ...STRETCHES,
  ...ISOMETRICS,
  ...RESISTED,
  ...RANGE_OF_MOTION,
  ...CONTROL_BALANCE,
  ...ADVANCED_SET,
  ...GAIT_BALANCE,
  ...POST_OPERATIVE,
  ...POPULATIONS,
  ...EQUIPMENT,
  ...REGION_DEPTH,
  ...FINAL_SET,
];

export const BODY_REGIONS = [
  "Cervical",
  "Shoulder",
  "Elbow",
  "Wrist & Hand",
  "Thoracic",
  "Lumbar",
  "Pelvis & Hip",
  "Knee",
  "Ankle & Foot",
  "Core",
] as const;

export const CONTRACTION_TYPES = [
  "Isometric",
  "Concentric",
  "Eccentric",
  "Isotonic",
  "Passive",
] as const;

export const MOVEMENT_MODES = [
  "Passive",
  "Active-assisted",
  "Active",
  "Resisted",
] as const;

export const LOAD_TYPES = [
  "Bodyweight",
  "Free weight",
  "Resistance band",
  "Machine",
  "Assisted",
  "No load",
] as const;

export const POSITIONS = [
  "Supine",
  "Prone",
  "Side-lying",
  "Sitting",
  "Standing",
  "Quadruped",
] as const;

export const EXERCISE_TYPES = [
  "Range of motion",
  "Stretching",
  "Strengthening",
  "Stabilisation & motor control",
  "Balance & proprioception",
  "Functional & gait",
  "Neural mobilisation",
  "Breathing & relaxation",
] as const;

/** Derived, not stored: "can I do this with nothing to hand?" */
export const EQUIPMENT_NEEDS = ["No equipment", "Equipment needed"] as const;

export function equipmentNeed(ex: Exercise): string {
  return ex.equipment.length ? "Equipment needed" : "No equipment";
}

export const DIFFICULTIES = ["Beginner", "Intermediate", "Advanced"] as const;

export function bySlug(slug: string): Exercise | undefined {
  return EXERCISES.find((e) => e.slug === slug);
}

/* The joint angles a figure can move. Position and the far-side offsets are
   left out: shifting the whole body across the frame is not a movement. */
const MOVING_KEYS = [
  "rootRot", "roll", "pelvisTilt", "lumbar", "thorax", "neck", "head", "headSlide",
  "shoulderNear", "elbowNear", "hipNear", "kneeNear", "ankleNear",
  "hipRotNear", "shoulderAbductNear", "shoulderRotNear",
  "shoulderFar", "elbowFar", "hipFar", "kneeFar", "ankleFar",
  "hipRotFar", "shoulderAbductFar", "shoulderRotFar",
  "twist", "sideBend", "neckRot", "neckSide", "pelvisRot",
  "hipAbductNear", "hipAbductFar", "foreRotNear", "foreRotFar",
  "wristNear", "wristFar",
] as const;

/**
 * Does this exercise's figure actually move?
 *
 * Some movements the rig genuinely cannot show yet — a finger tendon glide has
 * no fingers to glide, ankle inversion has no subtalar joint. Those exercises
 * stay in the library in full; what changes is that the page says so plainly
 * instead of presenting a figure standing still as if it were the exercise.
 *
 * The test is the total travel across every joint over the whole sequence.
 * Fifteen degrees is about the point below which nothing is visible at the
 * size the figure is drawn.
 */
export function hasMovement(ex: Exercise): boolean {
  const frames = ex.figure.frames;
  if (!frames || frames.length < 2) return false;
  let total = 0;
  for (const k of MOVING_KEYS) {
    let lo = Infinity;
    let hi = -Infinity;
    for (const f of frames) {
      const v = (f.pose as unknown as Record<string, number>)[k] ?? 0;
      if (v < lo) lo = v;
      if (v > hi) hi = v;
    }
    total += hi - lo;
  }
  return total >= 15;
}
