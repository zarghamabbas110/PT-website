"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import PhysioFigure from "@/components/figure/PhysioFigure";
import { EXERCISES } from "@/data/exercises";
import PaperCut from "./PaperCut";

/* ==========================================================================
   PinnedShowcase — the effect you described: the figure stays fixed in place
   while the text panels scroll past it, each one taking its turn.

   Implemented with a tall scroll track plus a sticky viewport, so it needs no
   scroll-hijacking library and degrades gracefully on small screens.
   ========================================================================== */

const STOPS = [
  {
    slug: "chin-tuck",
    kicker: "Cervical",
    title: "The movement is shown, not described",
    body: "A chin tuck fails when the patient nods instead of retracting. The animation makes the difference unmistakable — the skull glides backwards over the neck, and the arrow shows exactly where.",
  },
  {
    slug: "posterior-pelvic-tilt",
    kicker: "Lumbar",
    title: "Small movements still read clearly",
    body: "Pelvic tilt is only a few degrees of real motion. The spine is drawn as a curve through actual landmarks, so the lumbar arch visibly flattens against the mat instead of being left to the imagination.",
  },
  {
    slug: "clamshell-band",
    kicker: "Pelvis & Hip",
    title: "Equipment follows the body",
    body: "The band, the ball, the mat, the wall — every prop is anchored to a joint, so it moves with the patient rather than sitting behind them as decoration.",
  },
];

const SPAN = 1 / STOPS.length;

export default function PinnedShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section className="relative bg-espresso-900">
      <PaperCut layers={["#fbf6f1", "#f5ebe2", "#241512"]} height={110} />

      <div
        ref={ref}
        className="relative"
        style={{ height: `${STOPS.length * 100}vh` }}
      >
        <div className="sticky top-0 flex h-screen items-center overflow-hidden px-5 sm:px-8">
          <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-2">
            {/* ------------------------------------- the pinned figure --- */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-6 rounded-[40px] bg-crimson-500/12 blur-2xl" />
              <div className="relative mx-auto aspect-square max-w-[440px] rounded-[36px] bg-cream-50 p-4 shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
                {STOPS.map((stop, i) => (
                  <FigureSlide
                    key={stop.slug}
                    slug={stop.slug}
                    index={i}
                    progress={scrollYProgress}
                  />
                ))}
              </div>
            </div>

            {/* -------------------------------------- scrolling panels ---- */}
            <div className="relative order-1 h-[330px] lg:order-2">
              {STOPS.map((stop, i) => (
                <TextSlide
                  key={stop.slug}
                  stop={stop}
                  index={i}
                  progress={scrollYProgress}
                />
              ))}

              <div className="absolute -left-5 top-1 hidden h-32 w-[3px] overflow-hidden rounded-full bg-cream-50/12 lg:block">
                <motion.div
                  style={{ scaleY: scrollYProgress }}
                  className="h-full w-full origin-top rounded-full bg-crimson-400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <PaperCut layers={["#241512", "#33201b", "#fbf6f1"]} height={110} />
    </section>
  );
}

/* Each slide owns its own hooks, which keeps the rules of hooks satisfied. */

/**
 * Scroll progress input ranges MUST stay inside [0, 1].
 *
 * Framer offloads scroll-linked style transforms to the Web Animations API
 * using a scroll timeline, and it derives WAAPI keyframe offsets directly from
 * this input range. A value outside [0, 1] becomes a negative or >1 offset,
 * which throws "Offsets must be monotonically non-decreasing" and takes the
 * whole page down. Clamping keeps the visual result identical and safe.
 */
const clamp01 = (n: number) => Math.min(1, Math.max(0, n));

function slideStops(index: number) {
  const start = index * SPAN;
  // Each slide finishes fading out before the next begins fading in, so two
  // panels are never legible at once.
  return {
    in0: clamp01(start + SPAN * 0.02),
    in1: clamp01(start + SPAN * 0.2),
    out0: clamp01(start + SPAN * 0.72),
    out1: clamp01(start + SPAN * 0.92),
  };
}

function useSlideOpacity(progress: MotionValue<number>, index: number) {
  const s = slideStops(index);
  return useTransform(
    progress,
    [s.in0, s.in1, s.out0, s.out1],
    [0, 1, 1, 0]
  );
}

function FigureSlide({
  slug,
  index,
  progress,
}: {
  slug: string;
  index: number;
  progress: MotionValue<number>;
}) {
  const s = slideStops(index);
  const opacity = useSlideOpacity(progress, index);
  const scale = useTransform(progress, [s.in0, s.in1], [0.9, 1]);
  const ex = EXERCISES.find((e) => e.slug === slug)!;

  return (
    <motion.div style={{ opacity, scale }} className="absolute inset-4">
      <PhysioFigure spec={ex.figure} className="h-full w-full" />
    </motion.div>
  );
}

function TextSlide({
  stop,
  index,
  progress,
}: {
  stop: (typeof STOPS)[number];
  index: number;
  progress: MotionValue<number>;
}) {
  const s = slideStops(index);
  const opacity = useSlideOpacity(progress, index);
  const y = useTransform(progress, [s.in0, s.in1, s.out1], [50, 0, -50]);

  return (
    <motion.div style={{ opacity, y }} className="absolute inset-0">
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-crimson-400">
        {stop.kicker}
      </p>
      <h3 className="display text-3xl leading-tight text-cream-50 sm:text-5xl">
        {stop.title}
      </h3>
      <p className="mt-5 max-w-md text-[1.02rem] leading-relaxed text-cream-200/70">
        {stop.body}
      </p>
    </motion.div>
  );
}
