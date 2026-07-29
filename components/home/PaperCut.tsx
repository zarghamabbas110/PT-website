"use client";

/* ==========================================================================
   PaperCut — the organic layered dividers that give the site the "torn paper"
   depth of your red reference. Each divider is a stack of soft irregular
   curves, every layer casting a shadow onto the one below.

   `flip` turns the shape upside down so a section can be closed as well as
   opened; `tone` switches between the crimson and cream stacks.
   ========================================================================== */

type Props = {
  /** Colours of the stacked layers, back to front. */
  layers: string[];
  flip?: boolean;
  className?: string;
  height?: number;
};

/* Three hand-tuned irregular edges. Reusing them at different offsets and
   opacities is what reads as "torn paper" rather than a plain wave. */
const EDGES = [
  "M0,52 C110,8 190,96 300,66 C410,36 520,102 640,74 C760,46 880,96 1000,62 C1090,36 1150,58 1200,44 L1200,200 L0,200 Z",
  "M0,78 C130,42 210,118 340,92 C470,66 560,124 700,98 C840,72 940,120 1060,88 C1130,68 1170,84 1200,74 L1200,200 L0,200 Z",
  "M0,104 C90,74 200,138 320,116 C440,94 540,148 680,124 C820,100 930,142 1050,116 C1130,98 1175,110 1200,104 L1200,200 L0,200 Z",
];

export default function PaperCut({
  layers,
  flip = false,
  className = "",
  height = 120,
}: Props) {
  return (
    <div
      className={`relative w-full ${className}`}
      style={{ height }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        style={flip ? { transform: "scaleY(-1)" } : undefined}
      >
        {layers.map((fill, i) => (
          <path
            key={i}
            d={EDGES[i % EDGES.length]}
            fill={fill}
            className={i === layers.length - 1 ? "paper-edge" : "paper-edge-soft"}
            transform={`translate(0 ${i * 14})`}
          />
        ))}
      </svg>
    </div>
  );
}

/**
 * A large soft blob used behind content — the "valleys" in the reference art
 * where text and product photography sit.
 */
export function PaperBlob({
  className = "",
  fill = "#e2503b",
  opacity = 1,
}: {
  className?: string;
  fill?: string;
  opacity?: number;
}) {
  return (
    <svg
      viewBox="0 0 600 400"
      className={`absolute ${className}`}
      aria-hidden="true"
      style={{ opacity }}
    >
      <path
        className="paper-edge"
        fill={fill}
        d="M62,132 C92,52 214,18 300,44 C386,70 428,10 500,36 C572,62 596,150 566,232 C536,314 430,378 330,368 C230,358 168,392 106,348 C44,304 32,212 62,132 Z"
      />
    </svg>
  );
}
