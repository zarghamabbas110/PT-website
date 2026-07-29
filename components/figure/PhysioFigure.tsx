"use client";

import { useEffect, useId, useRef, useState } from "react";
import {
  Keyframe,
  Point,
  Skeleton,
  SEG,
  sampleSequence,
  solve,
} from "@/lib/figure";

/* ==========================================================================
   PhysioFigure — draws the skeleton produced by lib/figure.ts as clean
   medical line-art, and animates it through an exercise's keyframes.

   Equipment ("props") and movement arrows are positioned from real
   anatomical landmarks, so they follow the body as it moves.
   ========================================================================== */

export type Prop =
  | { kind: "mat" }
  | { kind: "wall" }
  | { kind: "chair" }
  | { kind: "ballBetweenKnees"; radius?: number }
  | { kind: "gymBall"; radius?: number }
  | { kind: "band" }
  | { kind: "towelUnderKnee" };

export type Arrow = {
  /** Landmark the arrow points at. */
  at: "head" | "pelvis" | "knee" | "hip" | "hand" | "ankle" | "t12";
  /** Direction in degrees: 0 = up, 90 = right. */
  dir: number;
  /** Length in SVG units. */
  len?: number;
  /** Draw as a curved rotation arrow instead of a straight one. */
  curved?: boolean;
  label?: string;
};

export type FigureSpec = {
  frames: Keyframe[];
  props?: Prop[];
  arrows?: Arrow[];
  /** Nudges the whole drawing inside the viewBox. */
  offsetX?: number;
  offsetY?: number;
  scale?: number;
};

type Props = {
  spec: FigureSpec;
  /** Pause the loop (used for the static thumbnail on library cards). */
  paused?: boolean;
  className?: string;
  showLabel?: boolean;
};

const SKIN = "#f7d9c9";
const SKIN_LINE = "#8f281c";
const LIMB_W = 17;

export default function PhysioFigure({
  spec,
  paused = false,
  className,
  showLabel = true,
}: Props) {
  // Marker ids must be unique per instance — several figures share a page.
  const uid = useId().replace(/:/g, "");
  const [ms, setMs] = useState(0);
  const raf = useRef<number | null>(null);
  const start = useRef<number | null>(null);
  const [reduced, setReduced] = useState(false);

  // Respect the visitor's reduced-motion setting: hold the mid pose instead
  // of looping. Some patients get symptoms from repetitive motion.
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

  // When paused or reduced-motion, show the working *end* of the movement
  // rather than the resting start — it is far more informative on a card.
  const total = spec.frames.reduce((s, f) => s + f.travel + f.hold, 0);
  const last = spec.frames[spec.frames.length - 1];
  const frozenAt = total - last.hold * 0.5;
  const { pose, index } = sampleSequence(
    spec.frames,
    paused || reduced ? frozenAt : ms
  );
  const sk = solve(pose);
  const label = spec.frames[index]?.label;

  const tx = spec.offsetX ?? 0;
  const ty = spec.offsetY ?? 0;
  const sc = spec.scale ?? 1;

  return (
    <svg
      viewBox="0 0 400 424"
      className={className}
      role="img"
      aria-label={label ? `Illustration: ${label}` : "Exercise illustration"}
    >
      <g transform={`translate(${tx} ${ty}) scale(${sc})`}>
        {(spec.props ?? []).map((p, i) => (
          <PropBehind key={i} prop={p} sk={sk} />
        ))}

        {/* Far-side limbs sit behind the torso and are faded for depth. */}
        <g opacity={0.42}>
          <Limb a={sk.far.shoulder} b={sk.far.elbow} c={sk.far.hand} />
          <Leg
            hip={sk.far.hip}
            knee={sk.far.knee}
            ankle={sk.far.ankle}
            toe={sk.far.toe}
          />
        </g>

        <Torso sk={sk} />

        <g>
          <Leg
            hip={sk.near.hip}
            knee={sk.near.knee}
            ankle={sk.near.ankle}
            toe={sk.near.toe}
          />
          <Limb a={sk.near.shoulder} b={sk.near.elbow} c={sk.near.hand} />
        </g>

        <Head sk={sk} />

        {(spec.props ?? []).map((p, i) => (
          <PropFront key={i} prop={p} sk={sk} />
        ))}

        {(spec.arrows ?? []).map((a, i) => (
          <MovementArrow key={i} arrow={a} sk={sk} uid={`${uid}-${i}`} />
        ))}
      </g>

      {/* The caption gets its own band beneath the drawing so it can never
          collide with the figure, whatever the pose. */}
      {showLabel && label && (
        <>
          <rect x={0} y={384} width={400} height={40} fill="#fdfbf9" opacity={0.92} />
          <text
            x={200}
            y={409}
            textAnchor="middle"
            fontSize={15}
            fontWeight={600}
            fill="#8f281c"
          >
            {label}
          </text>
        </>
      )}
    </svg>
  );
}

/* ------------------------------------------------------------- body parts */

function Torso({ sk }: { sk: Skeleton }) {
  // The spine is drawn as a smooth curve through pelvis → L5 → T12 → T1,
  // so lumbar flattening and arching are genuinely visible.
  const d = `M ${sk.pelvis.x} ${sk.pelvis.y}
             Q ${sk.l5.x} ${sk.l5.y} ${sk.t12.x} ${sk.t12.y}
             T ${sk.t1.x} ${sk.t1.y}`;
  return (
    <g>
      {/* Pelvis block — the landmark for tilt exercises */}
      <g
        transform={`translate(${sk.pelvis.x} ${sk.pelvis.y}) rotate(${angleOf(
          sk.pelvis,
          sk.l5
        )})`}
      >
        <rect
          x={-17}
          y={-14}
          width={34}
          height={30}
          rx={11}
          fill={SKIN}
          stroke={SKIN_LINE}
          strokeWidth={3}
        />
      </g>

      <path
        d={d}
        fill="none"
        stroke={SKIN}
        strokeWidth={36}
        strokeLinecap="round"
      />
      <path
        d={d}
        fill="none"
        stroke={SKIN_LINE}
        strokeWidth={3}
        strokeLinecap="round"
        opacity={0.55}
      />
      <circle cx={sk.t1.x} cy={sk.t1.y} r={11} fill={SKIN} stroke={SKIN_LINE} strokeWidth={3} />
    </g>
  );
}

function Head({ sk }: { sk: Skeleton }) {
  return (
    <g
      transform={`translate(${sk.headCentre.x} ${sk.headCentre.y}) rotate(${sk.headAngle})`}
    >
      {/* A soft profile rather than a plain circle: the brow, nose and chin
          make the direction of gaze — and so a chin tuck — legible. */}
      <path
        fill={SKIN}
        stroke={SKIN_LINE}
        strokeWidth={3}
        strokeLinejoin="round"
        d={`M -4 -21
            C 12 -22, 22 -13, 21 -2
            C 20.5 2, 24 4, 23 6.5
            C 22.3 8.3, 19 8, 18 9
            C 17.6 13, 14 17, 8 19
            C -4 23, -21 15, -21 -1
            C -21 -13, -14 -20, -4 -21 Z`}
      />
      <circle cx={11} cy={-4} r={2.3} fill={SKIN_LINE} />
    </g>
  );
}

function Limb({ a, b, c }: { a: Point; b: Point; c: Point }) {
  return (
    <g>
      <polyline
        points={`${a.x},${a.y} ${b.x},${b.y} ${c.x},${c.y}`}
        fill="none"
        stroke={SKIN_LINE}
        strokeWidth={LIMB_W + 4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points={`${a.x},${a.y} ${b.x},${b.y} ${c.x},${c.y}`}
        fill="none"
        stroke={SKIN}
        strokeWidth={LIMB_W}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
}

function Leg({
  hip,
  knee,
  ankle,
  toe,
}: {
  hip: Point;
  knee: Point;
  ankle: Point;
  toe: Point;
}) {
  const pts = `${hip.x},${hip.y} ${knee.x},${knee.y} ${ankle.x},${ankle.y} ${toe.x},${toe.y}`;
  return (
    <g>
      <polyline
        points={pts}
        fill="none"
        stroke={SKIN_LINE}
        strokeWidth={LIMB_W + 8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points={pts}
        fill="none"
        stroke={SKIN}
        strokeWidth={LIMB_W + 4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
}

/* -------------------------------------------------------------- equipment */

function PropBehind({ prop, sk }: { prop: Prop; sk: Skeleton }) {
  switch (prop.kind) {
    case "mat":
      return (
        <g>
          <rect
            x={20}
            y={332}
            width={360}
            height={13}
            rx={6.5}
            fill="#14676b"
            opacity={0.16}
          />
          <rect x={20} y={332} width={360} height={5} rx={2.5} fill="#14676b" opacity={0.3} />
        </g>
      );
    case "wall":
      // Positioned to meet the back of a figure standing at rootX ≈ 130.
      return (
        <g>
          <rect x={92} y={26} width={14} height={330} rx={5} fill="#14676b" opacity={0.18} />
          <line x1={106} y1={26} x2={106} y2={356} stroke="#14676b" strokeWidth={3.5} opacity={0.42} />
          <line x1={40} y1={356} x2={370} y2={356} stroke="#14676b" strokeWidth={3.5} opacity={0.28} />
        </g>
      );
    case "chair":
      // The figure faces +x, so the backrest sits behind it on the left.
      return (
        <g
          stroke="#14676b"
          strokeWidth={6}
          fill="none"
          opacity={0.42}
          strokeLinecap="round"
        >
          <path d="M 112 272 L 244 272" />
          <path d="M 126 272 L 126 348 M 232 272 L 232 348" />
          <path d="M 116 272 L 116 150" />
          <path d="M 116 168 L 150 168" />
        </g>
      );
    case "gymBall":
      return (
        <circle
          cx={sk.near.knee.x + 10}
          cy={sk.near.knee.y + 16}
          r={prop.radius ?? 58}
          fill="#14676b"
          opacity={0.14}
          stroke="#14676b"
          strokeWidth={3}
        />
      );
    default:
      return null;
  }
}

function PropFront({ prop, sk }: { prop: Prop; sk: Skeleton }) {
  switch (prop.kind) {
    case "ballBetweenKnees": {
      // Sits at the midpoint of the two knees, so it tracks the movement.
      const cx = (sk.near.knee.x + sk.far.knee.x) / 2;
      const cy = (sk.near.knee.y + sk.far.knee.y) / 2;
      const r = prop.radius ?? 21;
      return (
        <g>
          <circle cx={cx} cy={cy} r={r} fill="#f2a03d" stroke="#8f281c" strokeWidth={3} />
          <path
            d={`M ${cx - r * 0.55} ${cy - r * 0.35} Q ${cx} ${cy - r * 0.9} ${
              cx + r * 0.55
            } ${cy - r * 0.35}`}
            fill="none"
            stroke="#fff"
            strokeWidth={2.5}
            opacity={0.8}
          />
        </g>
      );
    }
    case "band": {
      const a = sk.near.knee;
      const b = sk.far.knee;
      return (
        <g>
          <path
            d={`M ${a.x} ${a.y} Q ${(a.x + b.x) / 2} ${(a.y + b.y) / 2 - 16} ${b.x} ${b.y}`}
            fill="none"
            stroke="#cf3a26"
            strokeWidth={9}
            strokeLinecap="round"
            opacity={0.85}
          />
          <path
            d={`M ${a.x} ${a.y} Q ${(a.x + b.x) / 2} ${(a.y + b.y) / 2 - 16} ${b.x} ${b.y}`}
            fill="none"
            stroke="#f7a89b"
            strokeWidth={3}
            strokeLinecap="round"
          />
        </g>
      );
    }
    case "towelUnderKnee":
      return (
        <ellipse
          cx={sk.near.knee.x}
          cy={sk.near.knee.y + 18}
          rx={26}
          ry={11}
          fill="#f2a03d"
          opacity={0.6}
          stroke="#8f281c"
          strokeWidth={2.5}
        />
      );
    default:
      return null;
  }
}

/* ----------------------------------------------------------- movement cue */

function MovementArrow({
  arrow,
  sk,
  uid,
}: {
  arrow: Arrow;
  sk: Skeleton;
  uid: string;
}) {
  const anchor: Record<Arrow["at"], Point> = {
    head: sk.headCentre,
    pelvis: sk.pelvis,
    knee: sk.near.knee,
    hip: sk.near.hip,
    hand: sk.near.hand,
    ankle: sk.near.ankle,
    t12: sk.t12,
  };
  const p = anchor[arrow.at];
  const len = arrow.len ?? 46;
  const rad = (arrow.dir * Math.PI) / 180;
  const gap = 32;

  const sx = p.x + Math.sin(rad) * gap;
  const sy = p.y - Math.cos(rad) * gap;
  const ex = p.x + Math.sin(rad) * (gap + len);
  const ey = p.y - Math.cos(rad) * (gap + len);

  // markerUnits="userSpaceOnUse" is essential: the default scales the head by
  // the stroke width, which makes a 5px stroke produce a huge arrowhead.
  const markerId = `ah-${uid}`;

  return (
    <g>
      <defs>
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

/* ------------------------------------------------------------------ utils */

function angleOf(a: Point, b: Point): number {
  return (Math.atan2(b.y - a.y, b.x - a.x) * 180) / Math.PI + 90;
}
