"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import PaperCut from "./PaperCut";
import PhysioFigure from "@/components/figure/PhysioFigure";
import { EXERCISES } from "@/data/exercises";

/* The bridge exercise makes the best hero demo — large, legible movement. */
const HERO_FIGURE = EXERCISES.find((e) => e.slug === "glute-bridge-ball-squeeze")!;

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax: the layers drift at different rates, which is what gives the
  // reference art its sense of depth.
  const yBack = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yFigure = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div ref={ref} className="relative overflow-hidden bg-crimson-500">
      {/* Soft cream shapes carved out of the crimson field */}
      <motion.div style={{ y: yBack }} className="pointer-events-none absolute inset-0">
        <svg
          viewBox="0 0 1200 900"
          preserveAspectRatio="xMidYMid slice"
          className="h-full w-full"
          aria-hidden="true"
        >
          {/* The layers are kept low in the frame so the headline and body copy
              always sit on the solid crimson field — a wave crossing the text
              destroys legibility. */}
          <path
            className="paper-edge"
            fill="#cf3a26"
            d="M-40,560 C180,470 340,690 560,614 C780,538 900,706 1240,596 L1240,960 L-40,960 Z"
          />
          <path
            className="paper-edge"
            fill="#f5ebe2"
            d="M-40,716 C200,632 360,842 600,770 C840,698 980,856 1240,760 L1240,960 L-40,960 Z"
          />
          <path
            className="paper-edge"
            fill="#fbf6f1"
            d="M-40,842 C220,772 380,946 640,880 C900,814 1020,942 1240,864 L1240,960 L-40,960 Z"
          />
        </svg>
      </motion.div>

      <motion.div
        style={{ opacity: fade }}
        className="relative mx-auto grid min-h-[92vh] max-w-7xl items-center gap-8 px-5 pb-24 pt-32 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]"
      >
        {/* ------------------------------------------------------- copy */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-5 inline-flex items-center gap-2 rounded-full bg-cream-50/15 px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-cream-50 ring-1 ring-cream-50/25 backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-amber-accent" />
            Clinical exercise library
          </motion.p>

          <h1 className="display text-[3.1rem] leading-[0.94] text-cream-50 sm:text-[4.6rem] lg:text-[5.2rem]">
            {["Movement,", "made"].map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 44 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.1 + i * 0.11,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="block"
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0, y: 44 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="block text-espresso-900"
            >
              understandable.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-7 max-w-lg text-[1.1rem] leading-relaxed text-cream-50"
          >
            Every exercise animated joint by joint, with the clinical detail a
            physiotherapist needs and the clarity a patient deserves.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.62 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Link
              href="/exercises"
              className="group rounded-full bg-espresso-900 px-8 py-4 font-semibold text-cream-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(36,21,18,0.45)]"
            >
              Browse exercises
              <span className="ml-1.5 inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
            <Link
              href="/for-clinicians"
              className="rounded-full bg-cream-50/15 px-8 py-4 font-semibold text-cream-50 ring-1 ring-cream-50/35 backdrop-blur-sm transition-all duration-300 hover:bg-cream-50/25"
            >
              For clinicians
            </Link>
          </motion.div>
        </div>

        {/* ---------------------------------------- figure breaking out ---- */}
        <motion.div
          style={{ y: yFigure }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="relative mx-auto max-w-[440px]">
            {/* The card the figure "breaks out" of, as in your references */}
            <div className="absolute inset-x-4 bottom-6 top-10 rounded-[36px] bg-cream-50 shadow-[0_30px_80px_rgba(90,30,20,0.28)]" />
            <div className="relative">
              <PhysioFigure
                spec={HERO_FIGURE.figure}
                className="w-full drop-shadow-[0_16px_30px_rgba(90,30,20,0.22)]"
                showLabel={false}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 1 }}
              className="absolute -right-1 top-6 rounded-2xl bg-espresso-900 px-4 py-3 text-cream-50 shadow-xl sm:-right-4"
            >
              <p className="text-[0.65rem] font-bold uppercase tracking-widest text-crimson-300">
                Gluteus maximus
              </p>
              <p className="text-sm font-semibold">Concentric · Eccentric</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 1.15 }}
              className="absolute -left-1 bottom-16 rounded-2xl bg-amber-accent px-4 py-3 text-espresso-900 shadow-xl sm:-left-4"
            >
              <p className="text-[0.65rem] font-bold uppercase tracking-widest">
                Hold
              </p>
              <p className="text-sm font-semibold">3 sec · 3 × 12</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <PaperCut
        layers={["#f5ebe2", "#fbf6f1"]}
        height={90}
        className="relative -mb-px"
      />
    </div>
  );
}
