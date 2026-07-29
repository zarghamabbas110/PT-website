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
  joint: string[];
  musclesTargeted: string[];
  conditions: string[];
  purpose: Bi;
  difficulty: Difficulty;
  contraction: ContractionType[];
  mode: MovementMode;
  load: LoadType;
  position: Position;
  equipment: string[];
  startingPosition: Bi;
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
