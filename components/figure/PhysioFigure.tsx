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

const SKIN = "#f8dccd";
const SHADE = "#efc3ad";
const LINE = "#8f281c";
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

  const farArm = [sk.far.shoulder, sk.far.elbow, sk.far.hand];
  const nearArm = [sk.near.shoulder, sk.near.elbow, sk.near.hand];
  const armW = [9, 7.4, 6];

  const farLeg = [sk.far.hip, sk.far.knee, sk.far.ankle];
  const nearLeg = [sk.near.hip, sk.near.knee, sk.near.ankle];
  const legW = [14, 9.6, 6];

  const farFoot = [sk.far.ankle, sk.far.toe];
  const nearFoot = [sk.near.ankle, sk.near.toe];
  const footW = [6, 4.4];

  return (
    <g>
      {/* far side, faded, behind the trunk */}
      <g opacity={0.45}>
        <Part pts={farLeg} w={legW} />
        <Part pts={farFoot} w={footW} />
        <Part pts={farArm} w={armW} />
      </g>

      {/* Equipment held between the limbs is drawn after the far side and
          before the near side, so the near knee overlaps it. That occlusion
          is what makes a ball read as being *between* the knees rather than
          floating around them. */}
      {between}

      <Part pts={torso} w={torsoW} />
      <Part pts={neck} w={neckW} />
      <HeadProfile at={sk.headCentre} angle={sk.headAngle} />

      <Part pts={nearLeg} w={legW} />
      <Part pts={nearFoot} w={footW} />
      <Part pts={nearArm} w={armW} />
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
      <Part pts={[fk.hipR, fk.kneeR, fk.ankleR]} w={legW} />
      <Part pts={[fk.hipL, fk.kneeL, fk.ankleL]} w={legW} />
      <Foot at={fk.ankleR} dir={-1} />
      <Foot at={fk.ankleL} dir={1} />

      <Part pts={pelvisBand} w={pelvisW} />
      <Part pts={trunk} w={trunkW} />
      <Part pts={shoulders} w={shoulderW} />
      <Part pts={neck} w={neckW} />

      <Part pts={[fk.shoulderR, fk.elbowR, fk.handR]} w={armW} />
      <Part pts={[fk.shoulderL, fk.elbowL, fk.handL]} w={armW} />
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
function Part({ pts, w }: { pts: Point[]; w: number[] }) {
  const outer = taperedPath(
    pts,
    w.map((n) => n + EDGE)
  );
  const inner = taperedPath(pts, w);
  return (
    <g>
      <path d={outer} fill={LINE} />
      {pts.map((p, i) => (
        <circle key={`o${i}`} cx={p.x} cy={p.y} r={w[i] + EDGE} fill={LINE} />
      ))}
      <path d={inner} fill={SKIN} />
      {pts.map((p, i) => (
        <circle key={`i${i}`} cx={p.x} cy={p.y} r={w[i]} fill={SKIN} />
      ))}
    </g>
  );
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
 * Head in profile. Deliberately a soft, rounded face — brow, a gentle nose
 * curve and a real chin — rather than the wedge-shaped nose of the first pass.
 */
function HeadProfile({ at, angle }: { at: Point; angle: number }) {
  const d = `M -3 -21
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
    <g transform={`translate(${at.x} ${at.y}) rotate(${angle})`}>
      <path d={d} fill={LINE} stroke={LINE} strokeWidth={EDGE * 2} strokeLinejoin="round" />
      <path d={d} fill={SKIN} />
      {/* ear and eye give the profile its read */}
      <path
        d="M -7 -1 C -4 -3 -1.5 -1 -2 2 C -2.5 4.6 -5 5 -7 3.4"
        fill="none"
        stroke={SHADE}
        strokeWidth={2.2}
        strokeLinecap="round"
      />
      <circle cx={8.5} cy={-6} r={2.1} fill={LINE} />
    </g>
  );
}

/** Head seen from the front: an oval with a jaw, eyes and a soft nose line. */
function HeadFront({ at, angle }: { at: Point; angle: number }) {
  const d = `M 0 -22
    C 12 -22 18.5 -14 18.5 -3
    C 18.5 6 14 15 7 19.6
    C 4.4 21.4 -4.4 21.4 -7 19.6
    C -14 15 -18.5 6 -18.5 -3
    C -18.5 -14 -12 -22 0 -22 Z`;

  return (
    <g transform={`translate(${at.x} ${at.y}) rotate(${angle})`}>
      <path d={d} fill={LINE} stroke={LINE} strokeWidth={EDGE * 2} strokeLinejoin="round" />
      <path d={d} fill={SKIN} />
      <circle cx={-6.6} cy={-4} r={2.1} fill={LINE} />
      <circle cx={6.6} cy={-4} r={2.1} fill={LINE} />
      <path
        d="M 0 -1 L 0 5"
        stroke={SHADE}
        strokeWidth={2.2}
        strokeLinecap="round"
      />
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
