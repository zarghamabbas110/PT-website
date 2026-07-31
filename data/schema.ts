import type { FigureSpec } from "@/components/figure/PhysioFigure";
import type { Bi, BiList } from "@/lib/i18n";

/* ==========================================================================
   The exercise record.

   Fields follow the specification supplied, plus the extra filter axes
   (contraction type, load type, patient position) and the "Special
   instructions" block from the reference handout.

   Patient-facing prose is bilingual (English / Urdu). Clinical taxonomy —
   muscle names, joint names, condition names — stays in English, which is how
   it is taught and documented.
   ========================================================================== */

export type BodyRegion =
  | "Cervical"
  | "Shoulder"
  | "Elbow"
  | "Wrist & Hand"
  | "Thoracic"
  | "Lumbar"
  | "Pelvis & Hip"
  | "Knee"
  | "Ankle & Foot"
  | "Core";

/**
 * The joints an exercise moves or loads, one level finer than the body region.
 * A controlled list rather than free text: it is a filter axis, so "Knee" and
 * "Tibiofemoral" cannot be allowed to mean the same thing in two records.
 */
export const JOINTS = [
  "Atlanto-occipital",
  "Atlantoaxial",
  "Cervical spine C1–C7",
  "Thoracic spine T1–T12",
  "Costovertebral",
  "Lumbar spine L1–L5",
  "Sacroiliac",
  "Sternoclavicular",
  "Acromioclavicular",
  "Scapulothoracic",
  "Glenohumeral",
  "Humeroulnar",
  "Humeroradial",
  "Radioulnar",
  "Radiocarpal",
  "Midcarpal",
  "Carpometacarpal",
  "Metacarpophalangeal",
  "Interphalangeal",
  "Hip",
  "Tibiofemoral",
  "Patellofemoral",
  "Tibiofibular",
  "Talocrural",
  "Subtalar",
  "Midtarsal",
  "Metatarsophalangeal",
] as const;

export type Joint = (typeof JOINTS)[number];

export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export type ContractionType =
  | "Isometric"
  | "Concentric"
  | "Eccentric"
  | "Isotonic"
  | "Passive";

export type LoadType =
  | "Bodyweight"
  | "Free weight"
  | "Resistance band"
  | "Machine"
  | "Assisted"
  | "No load";

export type Position =
  | "Supine"
  | "Prone"
  | "Side-lying"
  | "Sitting"
  | "Standing"
  | "Quadruped";

/** How the movement is produced — the classic AROM / AAROM / PROM ladder. */
export type MovementMode = "Passive" | "Active-assisted" | "Active" | "Resisted";

/**
 * What the exercise is *for*. This is the axis a clinician reaches for first
 * after the region — "show me the hamstring stretches", "show me the isometric
 * work for this knee" — and it is orthogonal to how the movement is produced.
 */
export type ExerciseType =
  | "Range of motion"
  | "Stretching"
  | "Strengthening"
  | "Stabilisation & motor control"
  | "Balance & proprioception"
  | "Functional & gait"
  | "Neural mobilisation"
  | "Breathing & relaxation";

export type Evidence = {
  status: "unreviewed" | "in-review" | "approved";
  /** Plain rationale. No citation is invented here. */
  rationale: string;
  reviewedBy?: string;
  reviewedOn?: string;
};

export type Exercise = {
  id: string;
  slug: string;
  name: Bi;
  bodyRegion: BodyRegion;
  /** Anatomical joints, from the controlled list in `data/exercises`. */
  joint: Joint[];
  musclesTargeted: string[];
  conditions: string[];
  purpose: Bi;
  exerciseType: ExerciseType;
  difficulty: Difficulty;
  contraction: ContractionType[];
  mode: MovementMode;
  load: LoadType;
  position: Position;
  equipment: string[];
  startingPosition: Bi;
  /**
   * Two or three lines: everything a patient needs to actually do the
   * exercise. Shown beside the animation. The full `steps`, mistakes and
   * precautions stay available but collapsed, so the reader is not buried.
   */
  quickSteps: BiList;
  steps: BiList;
  /** The pinned notes shown alongside the animation. */
  specialInstructions: BiList;
  commonMistakes: BiList;
  safetyPrecautions: BiList;
  repetitions: string;
  sets: string;
  holdTime: string;
  frequency: string;
  restBetweenSets: string;
  progressions: string[];
  regressions: string[];
  contraindications: BiList;
  evidence: Evidence;
  figure: FigureSpec;
};
