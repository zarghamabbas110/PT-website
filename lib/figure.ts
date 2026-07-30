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

/* ==========================================================================
   Tapered outlines
   --------------------------------------------------------------------------
   A constant-width stroke reads as a stick figure. Real limbs taper — thick at
   the hip, narrow at the knee — so each bone chain is turned into a closed
   polygon whose half-width varies along its length, with rounded caps.

   Drawing order matters: every part is drawn once in the outline colour and
   then again, slightly narrower, in the skin colour. The dark layer is fully
   covered except at the edges, which yields a clean outline with no seams
   where parts overlap.
   ========================================================================== */

function unit(a: Point, b: Point): Point {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.hypot(dx, dy) || 1;
  return { x: dx / len, y: dy / len };
}

/* --------------------------------------------------------------------------
   Anatomical outlines
   --------------------------------------------------------------------------
   A bone chain of three points offset by three widths and joined with straight
   lines reads as a tube, and a stack of tubes reads as a mannequin. Real limbs
   swell and narrow continuously — deltoid, elbow, forearm belly, wrist — so
   the chain is resampled into many points, given a width *profile*, and the
   outline drawn as one smooth closed curve.
   -------------------------------------------------------------------------- */

/** Resample a polyline into `n` points spaced evenly along its length. */
export function resample(pts: Point[], n: number): Point[] {
  const segLen: number[] = [];
  let total = 0;
  for (let i = 0; i < pts.length - 1; i++) {
    const d = Math.hypot(pts[i + 1].x - pts[i].x, pts[i + 1].y - pts[i].y);
    segLen.push(d);
    total += d;
  }
  if (total === 0) return new Array(n).fill(pts[0]);

  const out: Point[] = [];
  for (let k = 0; k < n; k++) {
    let target = (k / (n - 1)) * total;
    let i = 0;
    while (i < segLen.length - 1 && target > segLen[i]) {
      target -= segLen[i];
      i++;
    }
    const t = segLen[i] === 0 ? 0 : target / segLen[i];
    out.push({
      x: pts[i].x + (pts[i + 1].x - pts[i].x) * t,
      y: pts[i].y + (pts[i + 1].y - pts[i].y) * t,
    });
  }
  return out;
}

/**
 * A width profile: pairs of [position along the limb 0–1, half-width].
 * Interpolated linearly, so a handful of landmarks describes a whole limb.
 */
export type Profile = [number, number][];

export function widthAt(profile: Profile, t: number): number {
  if (t <= profile[0][0]) return profile[0][1];
  const last = profile[profile.length - 1];
  if (t >= last[0]) return last[1];
  for (let i = 0; i < profile.length - 1; i++) {
    const [t0, w0] = profile[i];
    const [t1, w1] = profile[i + 1];
    if (t >= t0 && t <= t1) {
      const f = (t - t0) / (t1 - t0 || 1);
      return w0 + (w1 - w0) * f;
    }
  }
  return last[1];
}

/** A closed Catmull-Rom curve through the points, emitted as cubic beziers. */
export function smoothClosedPath(pts: Point[]): string {
  const n = pts.length;
  if (n < 3) return "";
  const at = (i: number) => pts[(i + n) % n];

  let d = `M ${at(0).x.toFixed(2)} ${at(0).y.toFixed(2)}`;
  for (let i = 0; i < n; i++) {
    const p0 = at(i - 1);
    const p1 = at(i);
    const p2 = at(i + 1);
    const p3 = at(i + 2);
    const c1 = { x: p1.x + (p2.x - p0.x) / 6, y: p1.y + (p2.y - p0.y) / 6 };
    const c2 = { x: p2.x - (p3.x - p1.x) / 6, y: p2.y - (p3.y - p1.y) / 6 };
    d += ` C ${c1.x.toFixed(2)} ${c1.y.toFixed(2)}, ${c2.x.toFixed(2)} ${c2.y.toFixed(2)}, ${p2.x.toFixed(2)} ${p2.y.toFixed(2)}`;
  }
  return d + " Z";
}

/**
 * The outline of one limb or the trunk: resample the bone chain, offset each
 * sample by its profile width, and close the loop with rounded ends.
 */
export function limbOutline(
  chain: Point[],
  profile: Profile,
  samples = 26
): string {
  const spine = resample(chain, samples);

  const normals: Point[] = spine.map((_, i) => {
    const a = spine[Math.max(0, i - 1)];
    const b = spine[Math.min(spine.length - 1, i + 1)];
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const len = Math.hypot(dx, dy) || 1;
    return { x: -dy / len, y: dx / len };
  });

  const w = spine.map((_, i) => widthAt(profile, i / (spine.length - 1)));

  const left: Point[] = [];
  const right: Point[] = [];
  for (let i = 0; i < spine.length; i++) {
    left.push({
      x: spine[i].x + normals[i].x * w[i],
      y: spine[i].y + normals[i].y * w[i],
    });
    right.push({
      x: spine[i].x - normals[i].x * w[i],
      y: spine[i].y - normals[i].y * w[i],
    });
  }

  const last = spine.length - 1;

  /**
   * Round the ends by sweeping the offset vector a half turn through the
   * tangent. Interpolating between two angles instead leaves the sweep
   * direction ambiguous, and picking the wrong one reverses the winding of
   * that part of the ring — which the non-zero fill rule renders as a hole
   * sitting exactly on the joint.
   */
  const cap = (centre: Point, n: Point, t: Point, radius: number, outward: boolean) => {
    const steps = 8;
    const arc: Point[] = [];
    const sign = outward ? 1 : -1;
    for (let s = 1; s < steps; s++) {
      const a = (Math.PI * s) / steps;
      arc.push({
        x: centre.x + sign * (n.x * Math.cos(a) + t.x * Math.sin(a)) * radius,
        y: centre.y + sign * (n.y * Math.cos(a) + t.y * Math.sin(a)) * radius,
      });
    }
    return arc;
  };

  const tangent = (a: Point, b: Point): Point => {
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const len = Math.hypot(dx, dy) || 1;
    return { x: dx / len, y: dy / len };
  };

  const tEnd = tangent(spine[last - 1], spine[last]);
  const tStart = tangent(spine[1], spine[0]);

  const ring = [
    ...left,
    ...cap(spine[last], normals[last], tEnd, w[last], true),
    ...right.slice().reverse(),
    ...cap(spine[0], normals[0], tStart, w[0], false),
  ];

  return smoothClosedPath(ring);
}

/**
 * Closed outline around a bone chain, `halfWidths[i]` wide at `pts[i]`.
 * Ends are capped with semicircles. Retained for props and simple shapes.
 */
export function taperedPath(pts: Point[], halfWidths: number[]): string {
  if (pts.length < 2) return "";

  // Per-vertex normal: average the normals of the segments meeting there, so
  // the outline turns smoothly through a joint instead of pinching.
  const normals: Point[] = pts.map((_, i) => {
    const prev = i > 0 ? unit(pts[i - 1], pts[i]) : unit(pts[0], pts[1]);
    const next =
      i < pts.length - 1
        ? unit(pts[i], pts[i + 1])
        : unit(pts[pts.length - 2], pts[pts.length - 1]);
    const mx = prev.x + next.x;
    const my = prev.y + next.y;
    const len = Math.hypot(mx, my) || 1;
    // Rotate the averaged tangent by 90°.
    return { x: -(my / len), y: mx / len };
  });

  const left = pts.map((p, i) => ({
    x: p.x + normals[i].x * halfWidths[i],
    y: p.y + normals[i].y * halfWidths[i],
  }));
  const right = pts.map((p, i) => ({
    x: p.x - normals[i].x * halfWidths[i],
    y: p.y - normals[i].y * halfWidths[i],
  }));

  const last = pts.length - 1;
  let d = `M ${left[0].x} ${left[0].y}`;
  for (let i = 1; i <= last; i++) d += ` L ${left[i].x} ${left[i].y}`;
  d += ` A ${halfWidths[last]} ${halfWidths[last]} 0 0 1 ${right[last].x} ${right[last].y}`;
  for (let i = last - 1; i >= 0; i--) d += ` L ${right[i].x} ${right[i].y}`;
  d += ` A ${halfWidths[0]} ${halfWidths[0]} 0 0 1 ${left[0].x} ${left[0].y} Z`;
  return d;
}

/** Joint angles describing a single instant of a movement. */
export type Pose = {
  /** Position of the pelvis in SVG units. */
  rootX: number;
  rootY: number;
  /** Whole-body rotation — 0 upright, 90 lying on the back, -90 face down. */
  rootRot: number;
  /**
   * Roll about the body's own head-to-toe axis, degrees. 3D only — a flat
   * side drawing cannot tell lying-on-back from lying-on-side, so the 2D
   * engine ignores it. Needed to put someone on their side for a clamshell.
   */
  roll: number;

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
  /**
   * Hip rotation of the near leg about the thigh, degrees, positive turns the
   * knee outward. 3D only — this is what opens a clamshell. Ignored in 2D.
   */
  hipRotNear: number;
  /**
   * Shoulder abduction of the near arm, degrees: how far the arm swings out to
   * the side (the frontal plane) rather than forward. 0 = forward/flexion
   * plane, 90 = straight out to the side. 3D only; the flat side view can't
   * show it, so the 2D engine ignores it.
   */
  shoulderAbductNear: number;
  /**
   * Shoulder rotation of the near arm, degrees: with the elbow bent, positive
   * swings the forearm outward (external rotation) while the upper arm stays
   * put; negative swings it across the body (internal rotation). 3D only.
   */
  shoulderRotNear: number;

  /** Far-side limb (drawn behind, slightly faded for depth). */
  shoulderFar: number;
  elbowFar: number;
  hipFar: number;
  kneeFar: number;
  ankleFar: number;
  hipRotFar: number;
  /** Shoulder abduction of the far arm; see shoulderAbductNear. 3D only. */
  shoulderAbductFar: number;
  /** Shoulder rotation of the far arm; see shoulderRotNear. 3D only. */
  shoulderRotFar: number;

  /**
   * Offsets the far-side limbs, turning a flat side-on view into a slight
   * three-quarter one. Without this the two knees sit exactly on top of one
   * another, so a ball "between the knees" has nothing to sit between.
   */
  farDX: number;
  farDY: number;
};

/** A comfortable upright standing pose, used as the base for every exercise. */
export const NEUTRAL: Pose = {
  rootX: 200,
  rootY: 240,
  rootRot: 0,
  roll: 0,
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
  hipRotNear: 0,
  shoulderAbductNear: 0,
  shoulderRotNear: 0,
  shoulderFar: 182,
  elbowFar: 6,
  hipFar: 0,
  kneeFar: 2,
  ankleFar: 0,
  hipRotFar: 0,
  shoulderAbductFar: 0,
  shoulderRotFar: 0,
  farDX: 0,
  farDY: 0,
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

  const shift = (p: Point): Point => ({
    x: p.x + pose.farDX,
    y: p.y + pose.farDY,
  });

  const far = limb(
    pose.shoulderFar,
    pose.elbowFar,
    pose.hipFar,
    pose.kneeFar,
    pose.ankleFar
  );

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
    far: {
      shoulder: shift(far.shoulder),
      elbow: shift(far.elbow),
      hand: shift(far.hand),
      hip: shift(far.hip),
      knee: shift(far.knee),
      ankle: shift(far.ankle),
      toe: shift(far.toe),
    },
  };
}

/**
 * Anchoring.
 *
 * The kinematic chain is built outward from the pelvis, so raising the pelvis
 * raises the entire trunk with it. That is wrong for a bridge: the upper back
 * and shoulders stay on the mat while only the pelvis and lower back lift.
 *
 * Anchoring fixes this. Solve normally, then translate the whole skeleton so
 * that a chosen landmark lands back on a fixed point. Anchor the upper trunk
 * and the shoulders stay put while the hips travel.
 */
export type Anchor = { joint: "t1" | "pelvis" | "headCentre"; x: number; y: number };

export function applyAnchor(sk: Skeleton, anchor?: Anchor): Skeleton {
  if (!anchor) return sk;

  const current = sk[anchor.joint];
  const dx = anchor.x - current.x;
  const dy = anchor.y - current.y;
  if (dx === 0 && dy === 0) return sk;

  const m = (p: Point): Point => ({ x: p.x + dx, y: p.y + dy });
  const mLimb = (l: Skeleton["near"]): Skeleton["near"] => ({
    shoulder: m(l.shoulder),
    elbow: m(l.elbow),
    hand: m(l.hand),
    hip: m(l.hip),
    knee: m(l.knee),
    ankle: m(l.ankle),
    toe: m(l.toe),
  });

  return {
    ...sk,
    pelvis: m(sk.pelvis),
    hip: m(sk.hip),
    l5: m(sk.l5),
    t12: m(sk.t12),
    t1: m(sk.t1),
    shoulder: m(sk.shoulder),
    neckTop: m(sk.neckTop),
    headCentre: m(sk.headCentre),
    near: mLimb(sk.near),
    far: mLimb(sk.far),
  };
}

/* ------------------------------------------------------------ animation */

/* ==========================================================================
   FRONTAL (front-on) VIEW
   --------------------------------------------------------------------------
   The sagittal skeleton above cannot show movements that happen across the
   body: shoulder abduction, internal/external rotation, scaption, scapular
   retraction. Those are most of a shoulder library, so the engine carries a
   second, front-facing solver.

   Frontal angle convention, per arm: 0 = hanging at the side, 90 = out
   horizontally, 180 = straight overhead. Angles are mirrored automatically
   for the left arm so the same number means the same movement on both sides.
   ========================================================================== */

export type FrontalPose = {
  rootX: number;
  rootY: number;

  /** Trunk lean towards the viewer's right, in degrees. */
  trunkLean: number;
  /** Positive = trunk side-bends to the figure's right. */
  trunkSideBend: number;
  /** Positive tips the head to the figure's right. */
  headTilt: number;

  /** Shoulder elevation (shrug) in SVG units, per side. */
  shrugR: number;
  shrugL: number;
  /** Scapular protraction/retraction: negative narrows the shoulders. */
  scapulaR: number;
  scapulaL: number;

  /** Arm elevation: 0 at side, 90 horizontal, 180 overhead. */
  abductR: number;
  abductL: number;
  /** Elbow flexion in degrees. */
  elbowR: number;
  elbowL: number;
  /**
   * Rotation of the forearm about the upper arm's axis, used for internal and
   * external rotation. Drawn as foreshortening plus a rotation cue.
   */
  rotateR: number;
  rotateL: number;

  /** Leg stance width and knee bend. */
  stance: number;
  kneeBend: number;
};

export const FRONT_NEUTRAL: FrontalPose = {
  rootX: 200,
  rootY: 214,
  trunkLean: 0,
  trunkSideBend: 0,
  headTilt: 0,
  shrugR: 0,
  shrugL: 0,
  scapulaR: 0,
  scapulaL: 0,
  abductR: 6,
  abductL: 6,
  elbowR: 4,
  elbowL: 4,
  rotateR: 0,
  rotateL: 0,
  stance: 20,
  kneeBend: 3,
};

export const FSEG = {
  pelvisToChest: 82,
  chestToShoulder: 26,
  shoulderHalf: 40,
  hipHalf: 21,
  neck: 20,
  headR: 22,
  upperArm: 60,
  foreArm: 54,
  thigh: 82,
  shin: 78,
};

export type FrontalSkeleton = {
  pelvis: Point;
  chest: Point;
  neckBase: Point;
  headCentre: Point;
  headAngle: number;
  hipR: Point;
  hipL: Point;
  shoulderR: Point;
  shoulderL: Point;
  elbowR: Point;
  elbowL: Point;
  handR: Point;
  handL: Point;
  kneeR: Point;
  kneeL: Point;
  ankleR: Point;
  ankleL: Point;
};

export function solveFrontal(p: FrontalPose): FrontalSkeleton {
  const lean = p.trunkLean + p.trunkSideBend;
  const pelvis: Point = { x: p.rootX, y: p.rootY };

  const chest = step(pelvis, lean, FSEG.pelvisToChest);
  const neckBase = step(chest, lean + p.trunkSideBend * 0.3, FSEG.chestToShoulder);
  const headCentre = step(
    neckBase,
    lean + p.headTilt,
    FSEG.neck + FSEG.headR * 0.55
  );

  // "R" is the figure's right, drawn on the viewer's left (negative x).
  const shoulderR: Point = {
    x: neckBase.x - (FSEG.shoulderHalf + p.scapulaR),
    y: neckBase.y + 6 - p.shrugR,
  };
  const shoulderL: Point = {
    x: neckBase.x + (FSEG.shoulderHalf + p.scapulaL),
    y: neckBase.y + 6 - p.shrugL,
  };

  const hipR: Point = { x: pelvis.x - FSEG.hipHalf, y: pelvis.y + 4 };
  const hipL: Point = { x: pelvis.x + FSEG.hipHalf, y: pelvis.y + 4 };

  // Rotation foreshortens the forearm: a fully internally rotated forearm
  // points at the viewer and so appears shorter.
  const foreLen = (rot: number) =>
    FSEG.foreArm * (0.62 + 0.38 * Math.cos(rot * RAD));

  const arm = (
    shoulder: Point,
    abduct: number,
    elbow: number,
    rot: number,
    sign: number
  ) => {
    // 0 = straight down, 180 = straight overhead, swinging away from midline.
    const upperAngle = sign * (180 - abduct);
    const elbowPt = step(shoulder, upperAngle, FSEG.upperArm);
    const foreAngle = upperAngle - sign * elbow;
    const handPt = step(elbowPt, foreAngle, foreLen(rot));
    return { elbowPt, handPt };
  };

  const right = arm(shoulderR, p.abductR, p.elbowR, p.rotateR, -1);
  const left = arm(shoulderL, p.abductL, p.elbowL, p.rotateL, 1);

  const leg = (hip: Point, sign: number) => {
    const thighAngle = sign * (180 - p.stance * 0.25);
    const knee = step(hip, thighAngle, FSEG.thigh);
    const shinAngle = thighAngle + sign * -p.kneeBend;
    const ankle = step(knee, shinAngle, FSEG.shin);
    return { knee, ankle };
  };

  const legR = leg(hipR, -1);
  const legL = leg(hipL, 1);

  return {
    pelvis,
    chest,
    neckBase,
    headCentre,
    headAngle: lean + p.headTilt,
    hipR,
    hipL,
    shoulderR,
    shoulderL,
    elbowR: right.elbowPt,
    elbowL: left.elbowPt,
    handR: right.handPt,
    handL: left.handPt,
    kneeR: legR.knee,
    kneeL: legL.knee,
    ankleR: legR.ankle,
    ankleL: legL.ankle,
  };
}

export function lerpFrontal(
  a: FrontalPose,
  b: FrontalPose,
  tRaw: number
): FrontalPose {
  const t = easeInOut(Math.min(1, Math.max(0, tRaw)));
  const out = {} as FrontalPose;
  (Object.keys(a) as (keyof FrontalPose)[]).forEach((k) => {
    out[k] = a[k] + (b[k] - a[k]) * t;
  });
  return out;
}

export function frontPose(
  overrides: Partial<FrontalPose>,
  base: FrontalPose = FRONT_NEUTRAL
): FrontalPose {
  return { ...base, ...overrides };
}

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

/* ------------------------------------------- frontal keyframes & sampling */

export type FrontalKeyframe = {
  pose: FrontalPose;
  travel: number;
  hold: number;
  label?: string;
};

export function sampleFrontal(
  frames: FrontalKeyframe[],
  ms: number
): { pose: FrontalPose; index: number } {
  const total = frames.reduce((sum, f) => sum + f.travel + f.hold, 0);
  if (total <= 0) return { pose: frames[0].pose, index: 0 };

  let t = ((ms % total) + total) % total;

  for (let i = 0; i < frames.length; i++) {
    const frame = frames[i];
    const prev = frames[(i - 1 + frames.length) % frames.length];

    if (t < frame.travel) {
      return {
        pose: lerpFrontal(prev.pose, frame.pose, t / frame.travel),
        index: i,
      };
    }
    t -= frame.travel;
    if (t < frame.hold) return { pose: frame.pose, index: i };
    t -= frame.hold;
  }
  return { pose: frames[frames.length - 1].pose, index: frames.length - 1 };
}
