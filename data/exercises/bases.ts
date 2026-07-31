import { NEUTRAL, pose } from "@/lib/figure";

/* ==========================================================================
   Shared starting positions.

   Every exercise is a short list of joint angles laid over one of these, so a
   new exercise is a handful of numbers rather than a new drawing. Keeping the
   bases in one place also means a correction to, say, how someone sits reaches
   every seated exercise at once.
   ========================================================================== */

/** Standing tall, arms relaxed at the sides. */
export const STAND = pose({}, NEUTRAL);

/** Sitting on a firm chair, feet flat, hands resting on the thighs. */
export const SEATED = pose({
  hipNear: 86,
  kneeNear: 84,
  ankleNear: 2,
  hipFar: 84,
  kneeFar: 84,
  ankleFar: 2,
  shoulderNear: 174,
  elbowNear: 22,
  shoulderFar: 178,
  elbowFar: 22,
});

/** Lying on the back, knees bent, feet flat — the hook-lying position. */
export const SUPINE = pose({
  rootRot: -90,
  hipNear: 45,
  kneeNear: 100,
  ankleNear: 45,
  hipFar: 42,
  kneeFar: 98,
  ankleFar: 45,
  shoulderNear: 178,
  elbowNear: 4,
  shoulderFar: 180,
  elbowFar: 4,
});

/** Lying on the back with both legs out straight. */
export const SUPINE_LONG = pose({
  rootRot: -90,
  hipNear: 0,
  kneeNear: 2,
  ankleNear: 10,
  hipFar: 0,
  kneeFar: 2,
  ankleFar: 10,
  shoulderNear: 178,
  elbowNear: 4,
  shoulderFar: 180,
  elbowFar: 4,
});

/** Face down, forehead resting, arms by the sides. */
export const PRONE = pose({
  rootRot: 90,
  hipNear: 0,
  kneeNear: 2,
  ankleNear: 0,
  hipFar: 0,
  kneeFar: 2,
  ankleFar: 0,
  shoulderNear: 176,
  elbowNear: 6,
  shoulderFar: 178,
  elbowFar: 6,
});

/** Lying on one side, hips and knees bent, hips stacked. */
export const SIDE_LYING = pose({
  rootRot: -90,
  roll: 90,
  hipNear: 40,
  kneeNear: 90,
  ankleNear: 40,
  hipFar: 40,
  kneeFar: 90,
  ankleFar: 40,
  shoulderNear: 150,
  elbowNear: 70,
  shoulderFar: 150,
  elbowFar: 70,
});
