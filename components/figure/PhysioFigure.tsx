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
  taperedPath,
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
  | { kind: "band" }
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
const LINE = "#5c3a25";
const EDGE = 3.2;

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
  const torso = [sk.pelvis, sk.l5, sk.t12, sk.t1];
  const torsoW = [19, 18, 19, 21];
  const neck = [sk.t1, sk.neckTop];
  const neckW = [13, 11];

  const armW = [9, 7.4, 6];
  const legW = [14, 9.6, 6];
  const footW = [6, 4.4];

  const limb = (l: Skeleton["near"], faded: boolean) => (
    <g opacity={faded ? 0.45 : 1}>
      {/* leg, then the trouser over it */}
      <Part pts={[l.hip, l.knee, l.ankle]} w={legW} />
      <Part pts={[l.ankle, l.toe]} w={footW} />
      <Part
        pts={[l.hip, l.knee, at(l.knee, l.ankle, 0.94)]}
        w={[16.5, 11.5, 8]}
        fill={TROUSER}
        edge={TROUSER_DK}
      />
    </g>
  );

  const arm = (l: Skeleton["near"], faded: boolean) => (
    <g opacity={faded ? 0.45 : 1}>
      <Part pts={[l.shoulder, l.elbow, l.hand]} w={armW} />
      {/* short sleeve, ending about halfway down the upper arm */}
      <Part
        pts={[l.shoulder, at(l.shoulder, l.elbow, 0.52)]}
        w={[12.5, 9.5]}
        fill={SHIRT}
        edge={SHIRT_DK}
      />
    </g>
  );

  return (
    <g>
      {/* far side, faded, behind the trunk */}
      {limb(sk.far, true)}
      {arm(sk.far, true)}

      {/* Equipment held between the limbs is drawn after the far side and
          before the near side, so the near knee overlaps it. That occlusion
          is what makes a ball read as being *between* the knees rather than
          floating around them. */}
      {between}

      <Part pts={torso} w={torsoW} />
      <Part pts={neck} w={neckW} />
      {/* t-shirt over the trunk, hem just below the hip */}
      <Part
        pts={[at(sk.pelvis, sk.l5, -0.35), sk.l5, sk.t12, sk.t1]}
        w={[21, 20.5, 21.5, 23]}
        fill={SHIRT}
        edge={SHIRT_DK}
      />
      {/* collar */}
      <Part pts={[at(sk.t1, sk.neckTop, 0.1), at(sk.t1, sk.neckTop, 0.34)]} w={[15, 13.5]} fill={SHIRT_DK} edge={SHIRT_DK} />

      <HeadProfile at={sk.headCentre} angle={sk.headAngle} />

      {limb(sk.near, false)}
      {arm(sk.near, false)}
      <Hand at={sk.near.hand} />
    </g>
  );
}

/* ========================================================= front (coronal) */

function FrontBody({ fk }: { fk: FrontalSkeleton }) {
  // The trunk tapers from a narrow waist to a broad chest. Its lower end is
  // deliberately kept above the hip line: a wide rounded cap down there reads
  // as a pale blob between the legs. A separate pelvis band bridges the hips.
  const trunk = [{ x: fk.pelvis.x, y: fk.pelvis.y - 6 }, fk.chest, fk.neckBase];
  const trunkW = [20, 27, 24];
  const pelvisBand = [fk.hipR, fk.hipL];
  const pelvisW = [16, 16];

  // Narrow enough that the arms cover its ends, otherwise the caps show as
  // bumps sitting on top of the shoulders.
  const shoulders = [fk.shoulderR, fk.shoulderL];
  const shoulderW = [12.5, 12.5];
  const neck = [fk.neckBase, { x: fk.headCentre.x, y: fk.headCentre.y + 14 }];
  const neckW = [13, 12];

  const armW = [10, 7.6, 6];
  const legW = [15, 10, 6.5];

  return (
    <g>
      {/* legs, then trousers over them */}
      <Part pts={[fk.hipR, fk.kneeR, fk.ankleR]} w={legW} />
      <Part pts={[fk.hipL, fk.kneeL, fk.ankleL]} w={legW} />
      <Foot at={fk.ankleR} dir={-1} />
      <Foot at={fk.ankleL} dir={1} />
      <Part
        pts={[fk.hipR, fk.kneeR, at(fk.kneeR, fk.ankleR, 0.94)]}
        w={[17.5, 12, 8.5]}
        fill={TROUSER}
        edge={TROUSER_DK}
      />
      <Part
        pts={[fk.hipL, fk.kneeL, at(fk.kneeL, fk.ankleL, 0.94)]}
        w={[17.5, 12, 8.5]}
        fill={TROUSER}
        edge={TROUSER_DK}
      />

      <Part pts={pelvisBand} w={pelvisW} />
      <Part pts={trunk} w={trunkW} />
      <Part pts={shoulders} w={shoulderW} />
      <Part pts={neck} w={neckW} />

      <Part pts={[fk.shoulderR, fk.elbowR, fk.handR]} w={armW} />
      <Part pts={[fk.shoulderL, fk.elbowL, fk.handL]} w={armW} />

      {/* t-shirt: body, then the two short sleeves */}
      <Part
        pts={[{ x: fk.pelvis.x, y: fk.pelvis.y + 6 }, fk.chest, fk.neckBase]}
        w={[22, 29, 25.5]}
        fill={SHIRT}
        edge={SHIRT_DK}
      />
      <Part pts={shoulders} w={[15, 15]} fill={SHIRT} edge={SHIRT_DK} />
      <Part
        pts={[fk.shoulderR, at(fk.shoulderR, fk.elbowR, 0.52)]}
        w={[13.5, 10.5]}
        fill={SHIRT}
        edge={SHIRT_DK}
      />
      <Part
        pts={[fk.shoulderL, at(fk.shoulderL, fk.elbowL, 0.52)]}
        w={[13.5, 10.5]}
        fill={SHIRT}
        edge={SHIRT_DK}
      />
      {/* neckline */}
      <ellipse
        cx={fk.neckBase.x}
        cy={fk.neckBase.y + 4}
        rx={15}
        ry={7}
        fill={SHIRT_DK}
      />

      <Hand at={fk.handR} />
      <Hand at={fk.handL} />

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
function Part({
  pts,
  w,
  fill = SKIN,
  edge = LINE,
}: {
  pts: Point[];
  w: number[];
  fill?: string;
  edge?: string;
}) {
  const outer = taperedPath(
    pts,
    w.map((n) => n + EDGE)
  );
  const inner = taperedPath(pts, w);
  return (
    <g>
      <path d={outer} fill={edge} />
      {pts.map((p, i) => (
        <circle key={`o${i}`} cx={p.x} cy={p.y} r={w[i] + EDGE} fill={edge} />
      ))}
      <path d={inner} fill={fill} />
      {pts.map((p, i) => (
        <circle key={`i${i}`} cx={p.x} cy={p.y} r={w[i]} fill={fill} />
      ))}
    </g>
  );
}

/** Point a fraction of the way from a to b — used to end a sleeve or hem. */
function at(a: Point, b: Point, t: number): Point {
  return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t };
}

function Hand({ at }: { at: Point }) {
  return (
    <g>
      <circle cx={at.x} cy={at.y} r={8.4} fill={LINE} />
      <circle cx={at.x} cy={at.y} r={8.4 - EDGE} fill={SKIN} />
    </g>
  );
}

function Foot({ at, dir }: { at: Point; dir: number }) {
  const toe = { x: at.x + dir * 4, y: at.y + 13 };
  return <Part pts={[at, toe]} w={[7, 9]} />;
}

/**
 * Head in profile — a man in his thirties: short dark hair, defined brow,
 * straight nose and close-trimmed beard. Kept simple enough to stay legible
 * at thumbnail size, and the jaw line is what makes a chin tuck readable.
 */
function HeadProfile({ at: c, angle }: { at: Point; angle: number }) {
  const face = `M -3 -21
    C 8 -21.5 16 -15 16.5 -6.5
    C 16.7 -4 18.2 -3.2 18.6 -1.6
    C 19.2 0.6 18.6 2.4 16.8 3.4
    C 15.8 4 15.4 4.6 15.4 6
    C 15.4 8 14.6 9 13.2 9.6
    C 14 11.4 13.4 13.6 11.4 15.2
    C 8.6 17.6 3.8 19.2 -2.4 19.2
    C -13 19.2 -20 12 -20 -1
    C -20 -13 -13 -20.6 -3 -21 Z`;

  return (
    <g transform={`translate(${c.x} ${c.y}) rotate(${angle})`}>
      <path d={face} fill={LINE} stroke={LINE} strokeWidth={EDGE * 2} strokeLinejoin="round" />
      <path d={face} fill={SKIN} />

      {/* close-trimmed beard along the jaw */}
      <path
        d="M -14 8 C -12 15 -6 19 -2.4 19.2 C 4 19.2 9 17.4 11.6 15
           C 13.4 13.4 14 11.4 13.2 9.6 C 11 12 6 13.6 0 13.4
           C -6 13.2 -11 11.4 -14 8 Z"
        fill={HAIR}
        opacity={0.72}
      />

      {/* hair: covers the crown and back of the skull */}
      <path
        d="M -3 -21.6 C 8.4 -22 16.8 -15 17 -6.8
           C 14.6 -10.6 9 -13.2 1 -13 C -7 -12.8 -14 -10 -18.6 -5.4
           C -19.6 -14.4 -12.6 -21.2 -3 -21.6 Z"
        fill={HAIR}
      />
      <path
        d="M -18.8 -5.6 C -20.4 2 -20 8.2 -17.4 12.4
           C -20.6 6 -21 -1.4 -19.6 -7.4 Z"
        fill={HAIR}
      />

      {/* brow, eye and ear */}
      <path d="M 6.5 -8.6 L 13.6 -7.2" stroke={HAIR} strokeWidth={2.6} strokeLinecap="round" />
      <circle cx={10.4} cy={-3.4} r={2} fill={LINE} />
      <path
        d="M -7 -1 C -4 -3 -1.5 -1 -2 2 C -2.5 4.6 -5 5 -7 3.4"
        fill="none"
        stroke={SHADE}
        strokeWidth={2.2}
        strokeLinecap="round"
      />
    </g>
  );
}

/** Head seen from the front: same person, facing the viewer. */
function HeadFront({ at: c, angle }: { at: Point; angle: number }) {
  const face = `M 0 -22
    C 12 -22 18.5 -14 18.5 -3
    C 18.5 6 14 15 7 19.6
    C 4.4 21.4 -4.4 21.4 -7 19.6
    C -14 15 -18.5 6 -18.5 -3
    C -18.5 -14 -12 -22 0 -22 Z`;

  return (
    <g transform={`translate(${c.x} ${c.y}) rotate(${angle})`}>
      <path d={face} fill={LINE} stroke={LINE} strokeWidth={EDGE * 2} strokeLinejoin="round" />
      <path d={face} fill={SKIN} />

      {/* beard framing the jaw */}
      <path
        d="M -16.5 4 C -15.5 12 -10 18.4 -7 19.6 C -4.4 21.4 4.4 21.4 7 19.6
           C 10 18.4 15.5 12 16.5 4 C 13.5 11 8 14.6 0 14.6
           C -8 14.6 -13.5 11 -16.5 4 Z"
        fill={HAIR}
        opacity={0.68}
      />

      {/* hair with a short fringe */}
      <path
        d="M 0 -22.6 C 12.4 -22.6 19 -14 19 -3.4
           C 17.2 -8.4 14.4 -11.6 11 -12.2 C 7 -9.6 -7 -9.6 -11 -12.2
           C -14.4 -11.6 -17.2 -8.4 -19 -3.4 C -19 -14 -12.4 -22.6 0 -22.6 Z"
        fill={HAIR}
      />

      {/* brows, eyes, nose, mouth */}
      <path d="M -11 -7 L -3.4 -8" stroke={HAIR} strokeWidth={2.5} strokeLinecap="round" />
      <path d="M 11 -7 L 3.4 -8" stroke={HAIR} strokeWidth={2.5} strokeLinecap="round" />
      <circle cx={-6.8} cy={-2.6} r={2} fill={LINE} />
      <circle cx={6.8} cy={-2.6} r={2} fill={LINE} />
      <path d="M 0 -1 L 0 4.6" stroke={SHADE} strokeWidth={2.2} strokeLinecap="round" />
      <path d="M -4 9 Q 0 11 4 9" fill="none" stroke={SHADE} strokeWidth={2.2} strokeLinecap="round" />
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
