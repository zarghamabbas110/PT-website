import type { FigureSpec } from "@/components/figure/PhysioFigure";

/* ==========================================================================
   The exercise record.
   Fields follow the specification you supplied, plus the extra filter axes
   you described (contraction type, load type, patient position).
   ========================================================================== */

export type BodyRegion =
  | "Cervical"
  | "Shoulder"
  | "Thoracic"
  | "Lumbar"
  | "Pelvis & Hip"
  | "Knee"
  | "Ankle & Foot"
  | "Core";

export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

/** How the muscle works during the exercise. */
export type ContractionType =
  | "Isometric"
  | "Concentric"
  | "Eccentric"
  | "Isotonic";

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

/**
 * Provenance for the clinical guidance shown to patients.
 * `status` is deliberately explicit: nothing should reach patients while it
 * is still `unreviewed`.
 */
export type Evidence = {
  status: "unreviewed" | "in-review" | "approved";
  /** Free-text summary of the rationale. No citation is invented here. */
  rationale: string;
  reviewedBy?: string;
  reviewedOn?: string;
};

export type Exercise = {
  id: string;
  slug: string;
  name: string;
  bodyRegion: BodyRegion;
  joint: string[];
  musclesTargeted: string[];
  conditions: string[];
  purpose: string;
  difficulty: Difficulty;
  contraction: ContractionType[];
  load: LoadType;
  position: Position;
  equipment: string[];
  startingPosition: string;
  steps: string[];
  commonMistakes: string[];
  safetyPrecautions: string[];
  repetitions: string;
  sets: string;
  holdTime: string;
  frequency: string;
  /** Slugs of harder variations. */
  progressions: string[];
  /** Slugs of easier variations. */
  regressions: string[];
  contraindications: string[];
  evidence: Evidence;
  figure: FigureSpec;
};
