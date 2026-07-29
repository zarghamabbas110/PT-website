/* ==========================================================================
   figure.ts — the anatomical figure engine
   --------------------------------------------------------------------------
   Rather than hand-draw an illustration for every exercise, we describe the
   body once as a jointed skeleton and describe each *exercise* as a short
   sequence of poses. The engine solves joint positions with forward
   kinematics, so we can also attach equipment (a ball between the knees, a
   belt, a gym ball) and movement arrows to real anatomical landmarks.

   This is what makes a library of 1,000+ exercises tractable: a new exercise
   is a handful of numbers, not a new drawing.

   ANGLE CONVENTION
   Angles are in degrees. 0 points straight up the screen; positive rotates
   *forward*, i.e. towards the direction the figure faces (+x, to the right).
   So a thigh hanging straight down is 180, and a limb pointing forwards
   horizontally is 90.
   ========================================================================== */

export type Point = { x: number; y: number };

/** Joint angles describing a single instant of a movement. */
export type Pose = {
  /** Position of the pelvis in SVG units. */
  rootX: number;
  rootY: number;
  /** Whole-body rotation — 0 upright, 90 lying on the back, -90 face down. */
  rootRot: number;

  /** Positive = anterior pelvic tilt (pubic bone drops, lower back arches). */
  pelvisTilt: number;
  /** Positive = lumbar flexion (flattening/rounding the lower back). */
  lumbar: number;
  /** Positive = thoracic flexion (rounding the upper back). */
  thorax: number;
  /** Positive = cervical flexion (chin towards chest). */
  neck: number;
  /** Positive = the head nods forward on top of the neck. */
  head: number;
  /** Chin-tuck retraction: slides the skull backwards over the neck. */
  headSlide: number;

  /** Near-side limb (drawn in front, fully opaque). */
  shoulderNear: number;
  elbowNear: number;
  hipNear: number;
  kneeNear: number;
  ankleNear: number;

  /** Far-side limb (drawn behind, slightly faded for depth). */
  shoulderFar: number;
  elbowFar: number;
  hipFar: number;
  kneeFar: number;
  ankleFar: number;
};

/** A comfortable upright standing pose, used as the base for every exercise. */
export const NEUTRAL: Pose = {
  rootX: 200,
  rootY: 240,
  rootRot: 0,
  pelvisTilt: 0,
  lumbar: 0,
  thorax: 0,
  neck: 0,
  head: 0,
  headSlide: 0,
  shoulderNear: 178,
  elbowNear: 6,
  hipNear: 0,
  kneeNear: 2,
  ankleNear: 0,
  shoulderFar: 182,
  elbowFar: 6,
  hipFar: 0,
  kneeFar: 2,
  ankleFar: 0,
};

/** Segment lengths, roughly proportional to adult anatomy. */
export const SEG = {
  pelvis: 26,
  lumbar: 50,
  thorax: 58,
  neck: 22,
  headR: 21,
  upperArm: 54,
  foreArm: 50,
  thigh: 76,
  shin: 72,
  foot: 30,
  hipOffset: 15,
};

const RAD = Math.PI / 180;

/** Step `len` from `p` in the direction `deg` (0 = up, positive = forward). */
function step(p: Point, deg: number, len: number): Point {
  return {
    x: p.x + Math.sin(deg * RAD) * len,
    y: p.y - Math.cos(deg * RAD) * len,
  };
}

export type Skeleton = {
  pelvis: Point;
  hip: Point;
  l5: Point;
  t12: Point;
  t1: Point;
  shoulder: Point;
  neckTop: Point;
  headCentre: Point;
  headAngle: number;
  near: LimbPoints;
  far: LimbPoints;
};

type LimbPoints = {
  shoulder: Point;
  elbow: Point;
  hand: Point;
  hip: Point;
  knee: Point;
  ankle: Point;
  toe: Point;
};

/**
 * Forward kinematics: turn a Pose into concrete SVG coordinates for every
 * landmark. Everything downstream (bones, equipment, arrows) reads from this.
 */
export function solve(pose: Pose): Skeleton {
  const root: Point = { x: pose.rootX, y: pose.rootY };

  // --- Spine chain. Each angle is relative to the segment below it. -------
  const pelvisAngle = pose.rootRot + pose.pelvisTilt;
  const l5 = step(root, pelvisAngle, SEG.pelvis);

  const lumbarAngle = pelvisAngle + pose.lumbar;
  const t12 = step(l5, lumbarAngle, SEG.lumbar);

  const thoraxAngle = lumbarAngle + pose.thorax;
  const t1 = step(t12, thoraxAngle, SEG.thorax);

  const neckAngle = thoraxAngle + pose.neck;
  const neckTop = step(t1, neckAngle, SEG.neck);

  const headAngle = neckAngle + pose.head;
  // headSlide shifts the skull horizontally relative to its own axis — this
  // is what makes a chin tuck read correctly (retraction, not just nodding).
  const headBase = step(neckTop, headAngle, SEG.headR * 0.72);
  const headCentre = step(headBase, headAngle + 90, pose.headSlide);

  // --- Limb roots --------------------------------------------------------
  const shoulder = t1;
  const hip = step(root, pose.rootRot + 180, 2);

  const limb = (
    sh: number,
    el: number,
    hp: number,
    kn: number,
    an: number
  ): LimbPoints => {
    // Arms: 180 hangs straight down; elbow flexion swings the forearm forward.
    const upperArmAngle = pose.rootRot + sh;
    const elbow = step(shoulder, upperArmAngle, SEG.upperArm);
    const foreArmAngle = upperArmAngle - el;
    const hand = step(elbow, foreArmAngle, SEG.foreArm);

    // Legs: hip flexion lifts the thigh forwards from straight-down (180).
    const thighAngle = pose.rootRot + 180 - hp;
    const knee = step(hip, thighAngle, SEG.thigh);
    const shinAngle = thighAngle + kn;
    const ankle = step(knee, shinAngle, SEG.shin);
    const footAngle = shinAngle - 90 + an;
    const toe = step(ankle, footAngle, SEG.foot);

    return { shoulder, elbow, hand, hip, knee, ankle, toe };
  };

  return {
    pelvis: root,
    hip,
    l5,
    t12,
    t1,
    shoulder,
    neckTop,
    headCentre,
    headAngle,
    near: limb(
      pose.shoulderNear,
      pose.elbowNear,
      pose.hipNear,
      pose.kneeNear,
      pose.ankleNear
    ),
    far: limb(
      pose.shoulderFar,
      pose.elbowFar,
      pose.hipFar,
      pose.kneeFar,
      pose.ankleFar
    ),
  };
}

/* ------------------------------------------------------------ animation */

/** Smooth in-and-out easing so movements start and stop gently. */
function easeInOut(t: number): number {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

export function lerpPose(a: Pose, b: Pose, tRaw: number): Pose {
  const t = easeInOut(Math.min(1, Math.max(0, tRaw)));
  const out = {} as Pose;
  (Object.keys(a) as (keyof Pose)[]).forEach((k) => {
    out[k] = a[k] + (b[k] - a[k]) * t;
  });
  return out;
}

/** One step of a movement: a pose, plus how long to hold it. */
export type Keyframe = {
  pose: Pose;
  /** Milliseconds spent travelling *into* this pose. */
  travel: number;
  /** Milliseconds spent held at this pose (e.g. an isometric hold). */
  hold: number;
  /** Optional caption shown while this phase plays. */
  label?: string;
};

/**
 * Work out which pose to show at time `ms` through a looping sequence.
 * Returns the interpolated pose and the index of the phase in progress.
 */
export function sampleSequence(
  frames: Keyframe[],
  ms: number
): { pose: Pose; index: number } {
  const total = frames.reduce((sum, f) => sum + f.travel + f.hold, 0);
  if (total <= 0) return { pose: frames[0].pose, index: 0 };

  let t = ((ms % total) + total) % total;

  for (let i = 0; i < frames.length; i++) {
    const frame = frames[i];
    const prev = frames[(i - 1 + frames.length) % frames.length];

    if (t < frame.travel) {
      return {
        pose: lerpPose(prev.pose, frame.pose, t / frame.travel),
        index: i,
      };
    }
    t -= frame.travel;

    if (t < frame.hold) {
      return { pose: frame.pose, index: i };
    }
    t -= frame.hold;
  }

  return { pose: frames[frames.length - 1].pose, index: frames.length - 1 };
}

/** Build a pose by overriding only the joints that change. */
export function pose(overrides: Partial<Pose>, base: Pose = NEUTRAL): Pose {
  return { ...base, ...overrides };
}
