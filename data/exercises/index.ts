import type { Exercise } from "../schema";
import { SHOULDER } from "./shoulder";
import { SPINE_LOWER_LIMB } from "./spine-lower-limb";

/* The library is assembled from per-region files so batches can be written,
   reviewed and merged independently as it grows. */
export const EXERCISES: Exercise[] = [...SHOULDER, ...SPINE_LOWER_LIMB];

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

export const DIFFICULTIES = ["Beginner", "Intermediate", "Advanced"] as const;

export function bySlug(slug: string): Exercise | undefined {
  return EXERCISES.find((e) => e.slug === slug);
}
