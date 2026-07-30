"use client";

import { useEffect, useId, useRef, useState } from "react";
import {
  Anchor,
  applyAnchor,
  FrontalKeyframe,
  FrontalSkeleton,
  Keyframe,
  Point,
  SEG,
  Skeleton,
  sampleFrontal,
  sampleSequence,
  solve,
  solveFrontal,
  limbOutline,
  taperedPath,
  type Profile,
} from "@/lib/figure";

/* ==========================================================================
   PhysioFigure — draws the skeletons from lib/figure.ts as a human silhouette.

   Two views:
     "side"  — sagittal. Flexion/extension, spinal curves, lying positions.
     "front" — coronal. Abduction, rotation, scapular work; most of the
               shoulder library needs this.

   Every part is drawn twice: once wide in the outline colour, then again
   narrower in the skin colour. Overlapping parts therefore never show a seam.
   ========================================================================== */

export type Prop =
  | { kind: "mat" }
  | { kind: "wall" }
  | { kind: "wallRight" }
  | { kind: "chair" }
  | { kind: "ballBetweenKnees"; radius?: number }
  | { kind: "gymBall"; radius?: number }
  | { kind: "band"; anchor?: "front" | "between" }
  | { kind: "towelUnderKnee" }
  | { kind: "stick" }
  | { kind: "dumbbells" }
  | { kind: "doorway" }
  | { kind: "tableSupport" };

export type Arrow = {
  at:
    | "head"
    | "pelvis"
    | "knee"
    | "hip"
    | "hand"
    | "ankle"
    | "t12"
    | "handR"
    | "handL"
    | "elbowR"
    | "elbowL"
    | "shoulderR"
    | "shoulderL";
  dir: number;
  len?: number;
  curved?: boolean;
  label?: string;
};

export type FigureSpec = {
  view?: "side" | "front";
  /** Hold a landmark still while the rest of the body moves — see lib/figure.ts */
  anchor?: Anchor;
  frames?: Keyframe[];
  frontFrames?: FrontalKeyframe[];
  props?: Prop[];
  arrows?: Arrow[];
  offsetX?: number;
  offsetY?: number;
  scale?: number;
};

type Props = {
  spec: FigureSpec;
  paused?: boolean;
  className?: string;
  showLabel?: boolean;
};

/* --------------------------------------------------------------- palette
   A fair-to-wheatish complexion, dark hair, and fitted clothing in neutral
   tones that sit comfortably on both the patient and clinician themes.
   Clothing is deliberately close-fitting: a baggy shirt would hide exactly
   the trunk and shoulder movement the illustration exists to show. */
const SKIN = "#f2d2b3";
const SHADE = "#dcb08a";
const HAIR = "#241a14";
const SHIRT = "#38506b";
const SHIRT_DK = "#22334a";
const TROUSER = "#5b6472";
const TROUSER_DK = "#3d4552";
const SHOE = "#2a2f38";
const SHOE_DK = "#171b21";
const LINE = "#5c3a25";
const EDGE = 3.0;

/* ------------------------------------------------------- width profiles
   Each entry is [distance along the limb 0-1, half-width]. These are what
   turn a bone chain into a body: the deltoid swells at the top of the arm,
   the forearm has a belly, the thigh narrows into the knee and the calf
   swells below it. A limb drawn at constant width is a tube. */

const ARM: Profile = [
  [0.0, 11.5],   // deltoid
  [0.1, 11.0],
  [0.3, 9.0],
  [0.46, 7.6],   // above the elbow
  [0.54, 7.8],   // elbow
  [0.66, 8.2],   // forearm belly
  [0.85, 6.0],
  [1.0, 4.6],    // wrist
];

const LEG: Profile = [
  [0.0, 16.5],   // hip
  [0.14, 15.2],
  [0.34, 12.2],
  [0.47, 9.6],   // above the knee
  [0.53, 9.4],   // knee
  [0.63, 10.6],  // calf belly
  [0.82, 6.6],
  [1.0, 5.0],    // ankle
];

const TROUSER_LEG: Profile = [
  [0.0, 18.5],
  [0.14, 17.2],
  [0.34, 14.0],
  [0.5, 11.4],
  [0.63, 12.4],
  [0.85, 9.0],
  [1.0, 8.2],
];

/** Side-on trunk: buttock, waist, ribcage, chest. */
const TRUNK_SIDE: Profile = [
  [0.0, 18.5],
  [0.2, 16.6],
  [0.42, 15.4],  // waist
  [0.66, 17.8],
  [0.86, 20.0],  // chest
  [1.0, 19.0],
];

/** Front-on trunk: hips, waist, ribcage, chest. */
const TRUNK_FRONT: Profile = [
  [0.0, 21.0],
  [0.18, 18.6],
  [0.36, 17.2],  // waist
  [0.62, 22.5],
  [0.86, 25.5],  // chest
  [1.0, 23.0],
];

const SHIRT_SIDE: Profile = TRUNK_SIDE.map(([t, w]) => [t, w + 2.4]) as Profile;
const SHIRT_FRONT: Profile = TRUNK_FRONT.map(([t, w]) => [t, w + 2.6]) as Profile;

const NECK: Profile = [
  [0.0, 13.5],
  [0.5, 11.0],
  [1.0, 10.4],
];

const FOOT: Profile = [
  [0.0, 6.0],
  [1.0, 4.0],
];

export default function PhysioFigure({
  spec,
  paused = false,
  className,
  showLabel = true,
}: Props) {
  const uid = useId().replace(/:/g, "");
  const [ms, setMs] = useState(0);
  const raf = useRef<number | null>(null);
  const start = useRef<number | null>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (paused || reduced) return;
    const tick = (now: number) => {
      if (start.current === null) start.current = now;
      setMs(now - start.current);
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current !== null) cancelAnimationFrame(raf.current);
      start.current = null;
    };
  }, [paused, reduced]);

  const isFront = spec.view === "front";
  const frames = isFront ? spec.frontFrames! : spec.frames!;

  // Frozen thumbnails show the working end of the movement, not the rest
  // position — far more informative on a card.
  const total = frames.reduce((s, f) => s + f.travel + f.hold, 0);
  const lastHold = frames[frames.length - 1].hold;
  const at = paused || reduced ? total - lastHold * 0.5 : ms;

  const sideSample = !isFront ? sampleSequence(spec.frames!, at) : null;
  const frontSample = isFront ? sampleFrontal(spec.frontFrames!, at) : null;

  const label = isFront
    ? spec.frontFrames![frontSample!.index]?.label
    : spec.frames![sideSample!.index]?.label;

  const sk = sideSample ? applyAnchor(solve(sideSample.pose), spec.anchor) : null;
  const fk = frontSample ? solveFrontal(frontSample.pose) : null;

  return (
    <svg
      viewBox="0 0 400 424"
      className={className}
      role="img"
      aria-label={label ? `Illustration: ${label}` : "Exercise illustration"}
    >
      <g
        transform={`translate(${spec.offsetX ?? 0} ${spec.offsetY ?? 0}) scale(${
          spec.scale ?? 1
        })`}
      >
        {(spec.props ?? []).map((p, i) => (
          <PropBehind key={i} prop={p} sk={sk} fk={fk} />
        ))}

        {sk && (
          <SideBody
            sk={sk}
            between={(spec.props ?? [])
              .filter((p) => p.kind === "ballBetweenKnees")
              .map((p, i) => (
                <PropBetween key={i} prop={p} sk={sk} />
              ))}
          />
        )}
        {fk && <FrontBody fk={fk} />}

        {(spec.props ?? []).map((p, i) => (
          <PropFront key={i} prop={p} sk={sk} fk={fk} />
        ))}

        {(spec.arrows ?? []).map((a, i) => (
          <MovementArrow key={i} arrow={a} sk={sk} fk={fk} uid={`${uid}-${i}`} />
        ))}
      </g>

      {showLabel && label && (
        <>
          <rect x={0} y={384} width={400} height={40} fill="#fdfbf9" opacity={0.94} />
          <text
            x={200}
            y={409}
            textAnchor="middle"
            fontSize={15}
            fontWeight={600}
            fill={LINE}
          >
            {label}
          </text>
        </>
      )}
    </svg>
  );
}

/* ======================================================== side (sagittal) */

function SideBody({
  sk,
  between,
}: {
  sk: Skeleton;
  between?: React.ReactNode;
}) {
  // The trunk runs pelvis → L5 → T12 → T1 and carries the waist/chest profile,
  // so the silhouette narrows at the waist the way a body does.
  const trunk = [sk.pelvis, sk.l5, sk.t12, sk.t1];

  const leg = (l: Skeleton["near"]) => [l.hip, l.knee, l.ankle];
  const arm = (l: Skeleton["near"]) => [l.shoulder, l.elbow, l.hand];

  const side = (l: Skeleton["near"], faded: boolean) => (
    <g opacity={faded ? 0.42 : 1}>
      <Shape chain={leg(l)} profile={LEG} />
      <Shape chain={[l.ankle, l.toe]} profile={FOOT} fill={SHOE} edge={SHOE_DK} samples={10} />
      <Shape
        chain={[at(l.hip, l.knee, -0.12), l.knee, l.ankle]}
        profile={TROUSER_LEG}
        fill={TROUSER}
        edge={TROUSER_DK}
      />
    </g>
  );

  const sleeve = (l: Skeleton["near"], faded: boolean) => (
    <g opacity={faded ? 0.42 : 1}>
      <Shape chain={arm(l)} profile={ARM} />
      <Shape
        chain={[l.shoulder, at(l.shoulder, l.elbow, 0.5)]}
        profile={[
          [0, 13.5],
          [0.6, 11.4],
          [1, 10.2],
        ]}
        fill={SHIRT}
        edge={SHIRT_DK}
        samples={14}
      />
    </g>
  );

  return (
    <g>
      {side(sk.far, true)}
      {sleeve(sk.far, true)}

      {/* Equipment held between the limbs is drawn after the far side and
          before the near side, so the near knee overlaps it. That occlusion
          is what makes a ball read as being *between* the knees. */}
      {between}

      <Shape chain={trunk} profile={TRUNK_SIDE} />
      <Shape chain={[sk.t1, sk.neckTop]} profile={NECK} samples={10} />
      <HeadProfile at={sk.headCentre} angle={sk.headAngle} />

      {/* the shirt sits over the trunk, hem carried below the waistband so no
          strip of skin or trouser edge shows at the hip */}
      <Shape
        chain={[at(sk.pelvis, sk.l5, -0.5), sk.l5, sk.t12, sk.t1]}
        profile={SHIRT_SIDE}
        fill={SHIRT}
        edge={SHIRT_DK}
      />

      {side(sk.near, false)}
      {sleeve(sk.near, false)}
      <Hand at={sk.near.hand} from={sk.near.elbow} />
    </g>
  );
}

/* ========================================================= front (coronal) */

function FrontBody({ fk }: { fk: FrontalSkeleton }) {
  const trunk = [{ x: fk.pelvis.x, y: fk.pelvis.y + 14 }, fk.chest, fk.neckBase];
  const legR = [fk.hipR, fk.kneeR, fk.ankleR];
  const legL = [fk.hipL, fk.kneeL, fk.ankleL];
  const armR = [fk.shoulderR, fk.elbowR, fk.handR];
  const armL = [fk.shoulderL, fk.elbowL, fk.handL];

  // Trapezius: the slope from neck to shoulder. Without it the shoulders read
  // as a bar bolted across the top of a rectangle.
  const trapR = [fk.neckBase, fk.shoulderR];
  const trapL = [fk.neckBase, fk.shoulderL];
  const trap: Profile = [
    [0, 15],
    [0.5, 13],
    [1, 12],
  ];

  return (
    <g>
      <Foot at={fk.ankleR} dir={-1} />
      <Foot at={fk.ankleL} dir={1} />
      <Shape chain={legR} profile={LEG} />
      <Shape chain={legL} profile={LEG} />

      <Shape chain={trunk} profile={TRUNK_FRONT} />
      <Shape chain={trapR} profile={trap} samples={10} />
      <Shape chain={trapL} profile={trap} samples={10} />
      <Shape
        chain={[fk.neckBase, { x: fk.headCentre.x, y: fk.headCentre.y + 13 }]}
        profile={NECK}
        samples={10}
      />

      <Shape chain={armR} profile={ARM} />
      <Shape chain={armL} profile={ARM} />

      {/* trousers: a waistband spanning the hips first, otherwise the gap
          between the two legs shows through as a pale notch at the crotch */}
      {/* Shorts drawn as one explicit shape. Two overlapping bars left a pale
          wedge at the crotch, because the gap between the leg cylinders is
          real geometry — it has to be closed deliberately, not covered over. */}
      <Shorts fk={fk} />
      <Shape chain={legR} profile={TROUSER_LEG} fill={TROUSER} edge={TROUSER_DK} />
      <Shape chain={legL} profile={TROUSER_LEG} fill={TROUSER} edge={TROUSER_DK} />

      {/* shirt: body, then the two short sleeves */}
      <Shape
        chain={[{ x: fk.pelvis.x, y: fk.pelvis.y + 4 }, fk.chest, fk.neckBase]}
        profile={SHIRT_FRONT}
        fill={SHIRT}
        edge={SHIRT_DK}
      />
      <Shape chain={trapR} profile={[[0, 16], [1, 13.5]]} fill={SHIRT} edge={SHIRT_DK} samples={10} />
      <Shape chain={trapL} profile={[[0, 16], [1, 13.5]]} fill={SHIRT} edge={SHIRT_DK} samples={10} />
      <Shape
        chain={[fk.shoulderR, at(fk.shoulderR, fk.elbowR, 0.5)]}
        profile={[[0, 14.5], [0.6, 12.4], [1, 11.2]]}
        fill={SHIRT}
        edge={SHIRT_DK}
        samples={14}
      />
      <Shape
        chain={[fk.shoulderL, at(fk.shoulderL, fk.elbowL, 0.5)]}
        profile={[[0, 14.5], [0.6, 12.4], [1, 11.2]]}
        fill={SHIRT}
        edge={SHIRT_DK}
        samples={14}
      />
      {/* a shallow neckline, not a filled ellipse sitting on the throat */}
      <path
        d={`M ${fk.neckBase.x - 12} ${fk.neckBase.y - 1}
            Q ${fk.neckBase.x} ${fk.neckBase.y + 10} ${fk.neckBase.x + 12} ${fk.neckBase.y - 1}`}
        fill="none"
        stroke={SHIRT_DK}
        strokeWidth={3.4}
        strokeLinecap="round"
      />

      <Hand at={fk.handR} from={fk.elbowR} />
      <Hand at={fk.handL} from={fk.elbowL} />
      <HeadFront at={fk.headCentre} angle={fk.headAngle} />
    </g>
  );
}

/* ------------------------------------------------------------ primitives */

/**
 * One body part: dark outline underneath, skin fill on top.
 *
 * A filled disc is stamped at every vertex as well as drawing the tapered
 * band. The band's end caps are arcs, and an arc that sweeps the wrong way
 * leaves a zero-winding region that renders as a hole; the discs make joints
 * and caps solid regardless.
 */
/**
 * One body part, drawn as a single smooth anatomical outline.
 *
 * Every shape is stroked wide in the outline colour and then filled narrower
 * in its own colour. The dark layer is completely covered except at the edge,
 * so parts that overlap — an arm across a chest — never show a seam.
 */
function Shape({
  chain,
  profile,
  fill = SKIN,
  edge = LINE,
  samples = 26,
}: {
  chain: Point[];
  profile: Profile;
  fill?: string;
  edge?: string;
  samples?: number;
}) {
  const d = limbOutline(chain, profile, samples);
  return (
    <g>
      <path d={d} fill={edge} stroke={edge} strokeWidth={EDGE * 2} strokeLinejoin="round" />
      <path d={d} fill={fill} />
    </g>
  );
}

/** Point a fraction of the way from a to b — used to end a sleeve or hem. */
function at(a: Point, b: Point, t: number): Point {
  return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t };
}

/**
 * The seat of the trousers: across both hips, down the outside of each thigh,
 * and up into a short crotch notch. One shape, so nothing can show through.
 */
function Shorts({ fk }: { fk: FrontalSkeleton }) {
  const yTop = fk.hipR.y - 12;
  const yHem = fk.hipR.y + 40;
  const xR = fk.hipR.x - 18.5;
  const xL = fk.hipL.x + 18.5;
  const inR = fk.pelvis.x - 3;
  const inL = fk.pelvis.x + 3;
  const yCrotch = fk.pelvis.y + 24;

  const d = `M ${xR} ${yTop}
    Q ${fk.pelvis.x} ${yTop - 9} ${xL} ${yTop}
    L ${xL} ${yHem}
    L ${inL + 12} ${yHem}
    Q ${inL} ${yCrotch + 6} ${inL} ${yCrotch}
    L ${inR} ${yCrotch}
    Q ${inR} ${yCrotch + 6} ${inR - 12} ${yHem}
    L ${xR} ${yHem} Z`;

  return (
    <g>
      <path d={d} fill={TROUSER_DK} stroke={TROUSER_DK} strokeWidth={EDGE * 2} strokeLinejoin="round" />
      <path d={d} fill={TROUSER} />
    </g>
  );
}

/** A hand: a short tapered mitt carrying on from the wrist, not a disc. */
function Hand({ at: wrist, from }: { at: Point; from: Point }) {
  const dx = wrist.x - from.x;
  const dy = wrist.y - from.y;
  const len = Math.hypot(dx, dy) || 1;
  const tip = { x: wrist.x + (dx / len) * 15, y: wrist.y + (dy / len) * 15 };
  return (
    <Shape
      chain={[wrist, tip]}
      profile={[
        [0, 5.4],
        [0.45, 6.2],
        [1, 4.4],
      ]}
      samples={10}
    />
  );
}

function Foot({ at, dir }: { at: Point; dir: number }) {
  const toe = { x: at.x + dir * 7, y: at.y + 15 };
  return (
    <Shape
      chain={[at, toe]}
      profile={[
        [0, 7],
        [0.6, 8],
        [1, 6.5],
      ]}
      fill={SHOE}
      edge={SHOE_DK}
      samples={10}
    />
  );
}

/**
 * Head in profile. Built from the landmarks that actually make a face read as
 * human: forehead, brow ridge, nose bridge and tip, philtrum, lips, chin, and
 * the angle of the jaw running back to the ear. A circle with a dot on it
 * never reads as a person however well the body is drawn.
 */
function HeadProfile({ at: c, angle }: { at: Point; angle: number }) {
  const K = 1.18;
  const face = `M -2.5 -22
    C 6.5 -22.4 13.5 -18 16 -11.5
    C 17.2 -8.4 17.4 -5.6 17.2 -3.4
    C 17.1 -2.2 17.6 -1.6 18.4 -0.6
    C 20.2 1.6 21.2 3.4 20.4 4.6
    C 19.8 5.5 18.4 5.6 17.2 5.4
    C 16.6 5.3 16.3 5.8 16.3 6.6
    C 16.3 8.2 15.6 9.4 14.2 10
    C 13.6 10.3 13.5 10.8 13.8 11.6
    C 14.5 13.4 13.9 15.6 12.2 17.2
    C 10 19.2 6.6 20.4 2.6 20.6
    C -1.6 20.8 -5.4 19.8 -8.6 17.6
    C -13.8 14 -17.6 8 -18.4 1
    C -19.2 -6 -16.6 -13.4 -11.6 -17.8
    C -9 -20.1 -5.9 -21.8 -2.5 -22 Z`;

  return (
    <g transform={`translate(${c.x} ${c.y}) rotate(${angle}) scale(${K})`}>
      <path d={face} fill={LINE} stroke={LINE} strokeWidth={EDGE * 2} strokeLinejoin="round" />
      <path d={face} fill={SKIN} />

      {/* close-trimmed beard following the jaw */}
      <path
        d="M -15.5 6 C -13.6 12 -9.4 16.4 -5 18.8
           C -1.4 20.6 3.4 20.8 7 19.4 C 10 18.2 12.4 16 13.4 13.6
           C 13.9 12.4 13.9 11.6 13.6 11
           C 11.6 13.6 7.4 15.2 2.4 15.2
           C -4.6 15.2 -11.4 12 -15.5 6 Z"
        fill={HAIR}
        opacity={0.4}
      />

      {/* hair: crown, temple and a short taper at the nape */}
      <path
        d="M -2.5 -22.6 C 7 -23 14.2 -18.2 16.5 -11.2
           C 14 -14.6 9.4 -16.6 3.4 -16.6
           C -4.6 -16.6 -12.4 -13.4 -17.4 -7.2
           C -17.8 -13.4 -14.6 -19 -9 -21.2
           C -6.9 -22 -4.7 -22.5 -2.5 -22.6 Z"
        fill={HAIR}
      />
      <path
        d="M -17.5 -7.4 C -18.8 -2.6 -18.8 2.6 -17.4 7
           C -19.4 2 -19.6 -3.4 -18.6 -7.8 Z"
        fill={HAIR}
      />

      {/* brow, eye, ear */}
      <path d="M 7.4 -10.4 L 14.4 -8.4" stroke={HAIR} strokeWidth={2.6} strokeLinecap="round" />
      <path d="M 9.4 -5.4 C 11.4 -6.8 13.6 -6.4 14.6 -4.8" fill="none" stroke={LINE} strokeWidth={1.6} strokeLinecap="round" />
      <circle cx={11.8} cy={-4.6} r={1.9} fill={LINE} />
      <path d="M 13.6 8.2 C 12 9 10.2 9 8.8 8.4" fill="none" stroke={SHADE} strokeWidth={1.8} strokeLinecap="round" />
      <path
        d="M -7.4 -2.2 C -4 -4.4 -1 -2 -1.6 1.4 C -2.2 4.4 -5 5 -7.4 3.2"
        fill="none"
        stroke={SHADE}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </g>
  );
}

/**
 * Head from the front: wide cranium, cheekbones, a jaw that tapers to a chin.
 * The taper is what stops it reading as a ball.
 */
function HeadFront({ at: c, angle }: { at: Point; angle: number }) {
  const K = 1.18; // head scale — it was reading too small against the torso
  const face = `M 0 -23
    C 10 -23 16.6 -17.4 17.4 -8
    C 17.8 -3.6 17.4 0.4 16.4 4.4
    C 15.4 8.4 13.2 12.6 10.2 15.8
    C 7.6 18.6 4 20.8 0 21.2
    C -4 20.8 -7.6 18.6 -10.2 15.8
    C -13.2 12.6 -15.4 8.4 -16.4 4.4
    C -17.4 0.4 -17.8 -3.6 -17.4 -8
    C -16.6 -17.4 -10 -23 0 -23 Z`;

  return (
    <g transform={`translate(${c.x} ${c.y}) rotate(${angle}) scale(${K})`}>
      <path d={face} fill={LINE} stroke={LINE} strokeWidth={EDGE * 2} strokeLinejoin="round" />
      <path d={face} fill={SKIN} />

      {/* ears */}
      <ellipse cx={-17} cy={-1} rx={2.6} ry={4.4} fill={SKIN} stroke={LINE} strokeWidth={2} />
      <ellipse cx={17} cy={-1} rx={2.6} ry={4.4} fill={SKIN} stroke={LINE} strokeWidth={2} />

      {/* beard along the jaw */}
      <path
        d="M -15.6 4.6 C -14.6 9 -12.6 13 -10.2 15.8
           C -7.6 18.6 -4 20.8 0 21.2 C 4 20.8 7.6 18.6 10.2 15.8
           C 12.6 13 14.6 9 15.6 4.6
           C 13.4 10.4 7.6 13.8 0 13.8
           C -7.6 13.8 -13.4 10.4 -15.6 4.6 Z"
        fill={HAIR}
        opacity={0.38}
      />

      {/* hair with a short fringe */}
      <path
        d="M 0 -23.6 C 10.4 -23.6 17.2 -17.6 17.8 -7.6
           C 16.6 -12.4 14.4 -15 11.4 -15.8
           C 8 -12.8 -8 -12.8 -11.4 -15.8
           C -14.4 -15 -16.6 -12.4 -17.8 -7.6
           C -17.2 -17.6 -10.4 -23.6 0 -23.6 Z"
        fill={HAIR}
      />

      {/* brows, eyes, nose, mouth */}
      <path d="M -12 -8.4 L -4 -9.4" stroke={HAIR} strokeWidth={2.5} strokeLinecap="round" />
      <path d="M 12 -8.4 L 4 -9.4" stroke={HAIR} strokeWidth={2.5} strokeLinecap="round" />
      <path d="M -10.6 -4 C -9 -5.6 -6 -5.6 -4.4 -4" fill="none" stroke={LINE} strokeWidth={1.5} strokeLinecap="round" />
      <path d="M 10.6 -4 C 9 -5.6 6 -5.6 4.4 -4" fill="none" stroke={LINE} strokeWidth={1.5} strokeLinecap="round" />
      <circle cx={-7.4} cy={-3.2} r={1.9} fill={LINE} />
      <circle cx={7.4} cy={-3.2} r={1.9} fill={LINE} />
      <path d="M -1.6 -0.4 C -2.2 3 -1.4 4.4 0 4.6 C 1.4 4.4 2.2 3 1.6 -0.4" fill="none" stroke={SHADE} strokeWidth={1.8} strokeLinecap="round" />
      <path d="M -4.4 9.4 C -2 11 2 11 4.4 9.4" fill="none" stroke={SHADE} strokeWidth={2} strokeLinecap="round" />
    </g>
  );
}

/* -------------------------------------------------------------- equipment */

/** A hatched masonry band, so a wall reads as a surface rather than a line. */
function WallBand({ x, facing }: { x: number; facing: "left" | "right" }) {
  const inner = facing === "left" ? x + 52 : x;
  return (
    <g>
      <rect x={x} y={18} width={52} height={344} fill="#14676b" opacity={0.13} />
      {Array.from({ length: 9 }).map((_, i) => (
        <line
          key={i}
          x1={x}
          y1={30 + i * 38}
          x2={x + 52}
          y2={30 + i * 38}
          stroke="#14676b"
          strokeWidth={2}
          opacity={0.28}
        />
      ))}
      <line x1={inner} y1={18} x2={inner} y2={362} stroke="#14676b" strokeWidth={5} opacity={0.55} />
      <line x1={30} y1={362} x2={372} y2={362} stroke="#14676b" strokeWidth={4} opacity={0.32} />
    </g>
  );
}

function PropBehind({
  prop,
  sk,
  fk,
}: {
  prop: Prop;
  sk: Skeleton | null;
  fk: FrontalSkeleton | null;
}) {
  switch (prop.kind) {
    case "mat":
      return (
        <g>
          <rect x={18} y={332} width={364} height={14} rx={7} fill="#14676b" opacity={0.16} />
          <rect x={18} y={332} width={364} height={5} rx={2.5} fill="#14676b" opacity={0.3} />
        </g>
      );
    case "wall":
      return <WallBand x={54} facing="left" />;

    // The mirrored wall matters: which side the wall is on is what tells the
    // reader whether the figure is facing it (flexion) or side-on (abduction).
    case "wallRight":
      return <WallBand x={294} facing="right" />;
    case "doorway":
      return (
        <g stroke="#14676b" strokeWidth={7} fill="none" opacity={0.3} strokeLinecap="round">
          <path d="M 70 30 L 70 372" />
          <path d="M 330 30 L 330 372" />
          <path d="M 70 34 L 330 34" />
        </g>
      );
    case "chair":
      return (
        <g stroke="#14676b" strokeWidth={6} fill="none" opacity={0.42} strokeLinecap="round">
          <path d="M 112 272 L 244 272" />
          <path d="M 126 272 L 126 348 M 232 272 L 232 348" />
          <path d="M 116 272 L 116 150" />
          <path d="M 116 168 L 150 168" />
        </g>
      );
    case "tableSupport":
      return (
        <g stroke="#14676b" strokeWidth={6} fill="none" opacity={0.4} strokeLinecap="round">
          <path d="M 40 262 L 210 262" />
          <path d="M 56 262 L 56 356 M 194 262 L 194 356" />
        </g>
      );
    case "gymBall":
      return sk ? (
        <circle
          cx={sk.near.knee.x + 10}
          cy={sk.near.knee.y + 16}
          r={prop.radius ?? 58}
          fill="#14676b"
          opacity={0.14}
          stroke="#14676b"
          strokeWidth={3}
        />
      ) : null;
    default:
      return null;
  }
}

/**
 * Equipment that physically sits between the two legs. Drawn after the far
 * limb and before the near one so the near knee overlaps it — that occlusion
 * is what communicates "between" rather than "near".
 */
function PropBetween({ prop, sk }: { prop: Prop; sk: Skeleton }) {
  if (prop.kind !== "ballBetweenKnees") return null;

  const cx = (sk.near.knee.x + sk.far.knee.x) / 2;
  const cy = (sk.near.knee.y + sk.far.knee.y) / 2;
  const r = prop.radius ?? 23;

  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill="#f2a03d" stroke={LINE} strokeWidth={3} />
      {/* squash lines: the ball is being compressed by the knees */}
      <path
        d={`M ${cx - r * 0.5} ${cy - r * 0.42} Q ${cx} ${cy - r * 0.86} ${cx + r * 0.5} ${cy - r * 0.42}`}
        fill="none"
        stroke="#fff"
        strokeWidth={2.6}
        opacity={0.75}
      />
      <path
        d={`M ${cx - r * 0.5} ${cy + r * 0.42} Q ${cx} ${cy + r * 0.86} ${cx + r * 0.5} ${cy + r * 0.42}`}
        fill="none"
        stroke="#fff"
        strokeWidth={2.6}
        opacity={0.4}
      />
    </g>
  );
}

function PropFront({
  prop,
  sk,
  fk,
}: {
  prop: Prop;
  sk: Skeleton | null;
  fk: FrontalSkeleton | null;
}) {
  switch (prop.kind) {
    case "band": {
      // Between the hands in the front view, between the knees side-on.
      const a = fk ? fk.handR : sk!.near.knee;
      const b = fk ? fk.handL : sk!.far.knee;
      const sag = fk ? 18 : -16;
      const d = `M ${a.x} ${a.y} Q ${(a.x + b.x) / 2} ${
        (a.y + b.y) / 2 + sag
      } ${b.x} ${b.y}`;
      return (
        <g>
          <path d={d} fill="none" stroke="#cf3a26" strokeWidth={9} strokeLinecap="round" opacity={0.85} />
          <path d={d} fill="none" stroke="#f7a89b" strokeWidth={3} strokeLinecap="round" />
        </g>
      );
    }
    case "stick": {
      if (!fk) return null;
      return (
        <g>
          <line
            x1={fk.handR.x}
            y1={fk.handR.y}
            x2={fk.handL.x}
            y2={fk.handL.y}
            stroke={LINE}
            strokeWidth={11}
            strokeLinecap="round"
          />
          <line
            x1={fk.handR.x}
            y1={fk.handR.y}
            x2={fk.handL.x}
            y2={fk.handL.y}
            stroke="#f2a03d"
            strokeWidth={6}
            strokeLinecap="round"
          />
        </g>
      );
    }
    case "dumbbells": {
      if (!fk) return null;
      return (
        <g fill="#33201b">
          {[fk.handR, fk.handL].map((h, i) => (
            <g key={i}>
              <rect x={h.x - 12} y={h.y - 4.5} width={24} height={9} rx={3} />
              <rect x={h.x - 15} y={h.y - 9} width={7} height={18} rx={2.5} />
              <rect x={h.x + 8} y={h.y - 9} width={7} height={18} rx={2.5} />
            </g>
          ))}
        </g>
      );
    }
    case "towelUnderKnee":
      return sk ? (
        <ellipse
          cx={sk.near.knee.x}
          cy={sk.near.knee.y + 18}
          rx={26}
          ry={11}
          fill="#f2a03d"
          opacity={0.6}
          stroke={LINE}
          strokeWidth={2.5}
        />
      ) : null;
    default:
      return null;
  }
}

/* ----------------------------------------------------------- movement cue */

function MovementArrow({
  arrow,
  sk,
  fk,
  uid,
}: {
  arrow: Arrow;
  sk: Skeleton | null;
  fk: FrontalSkeleton | null;
  uid: string;
}) {
  const p = anchorPoint(arrow.at, sk, fk);
  if (!p) return null;

  const len = arrow.len ?? 44;
  const rad = (arrow.dir * Math.PI) / 180;
  const gap = 30;
  const sx = p.x + Math.sin(rad) * gap;
  const sy = p.y - Math.cos(rad) * gap;
  const ex = p.x + Math.sin(rad) * (gap + len);
  const ey = p.y - Math.cos(rad) * (gap + len);
  const markerId = `ah-${uid}`;

  return (
    <g>
      <defs>
        {/* userSpaceOnUse stops the head scaling with the stroke width */}
        <marker
          id={markerId}
          markerUnits="userSpaceOnUse"
          markerWidth={16}
          markerHeight={16}
          refX={12}
          refY={8}
          orient="auto"
        >
          <path d="M 2 2.5 L 13 8 L 2 13.5 z" fill="#cf3a26" />
        </marker>
      </defs>

      {arrow.curved ? (
        <path
          d={`M ${sx} ${sy} A ${len * 1.4} ${len * 1.4} 0 0 1 ${ex} ${ey}`}
          fill="none"
          stroke="#cf3a26"
          strokeWidth={4}
          strokeLinecap="round"
          markerEnd={`url(#${markerId})`}
        />
      ) : (
        <line
          x1={sx}
          y1={sy}
          x2={ex}
          y2={ey}
          stroke="#cf3a26"
          strokeWidth={4}
          strokeLinecap="round"
          markerEnd={`url(#${markerId})`}
        />
      )}

      {arrow.label && (
        <text
          x={ex + Math.sin(rad) * 16}
          y={ey - Math.cos(rad) * 16 + 4}
          textAnchor="middle"
          fontSize={12.5}
          fontWeight={700}
          fill="#cf3a26"
          stroke="#fdfbf9"
          strokeWidth={3.5}
          paintOrder="stroke"
        >
          {arrow.label}
        </text>
      )}
    </g>
  );
}

function anchorPoint(
  at: Arrow["at"],
  sk: Skeleton | null,
  fk: FrontalSkeleton | null
): Point | null {
  if (fk) {
    switch (at) {
      case "handR": return fk.handR;
      case "handL": return fk.handL;
      case "elbowR": return fk.elbowR;
      case "elbowL": return fk.elbowL;
      case "shoulderR": return fk.shoulderR;
      case "shoulderL": return fk.shoulderL;
      case "head": return fk.headCentre;
      case "pelvis": return fk.pelvis;
      default: return fk.chest;
    }
  }
  if (!sk) return null;
  switch (at) {
    case "head": return sk.headCentre;
    case "pelvis": return sk.pelvis;
    case "knee": return sk.near.knee;
    case "hip": return sk.near.hip;
    case "hand": return sk.near.hand;
    case "ankle": return sk.near.ankle;
    case "t12": return sk.t12;
    default: return sk.t12;
  }
}

export { SEG };
