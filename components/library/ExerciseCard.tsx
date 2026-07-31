"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import PhysioFigure from "@/components/figure/PhysioFigure";
import { useLang } from "@/lib/i18n";
import type { Exercise } from "@/data/schema";

/**
 * A library card. The figure animates on hover; the whole card links to the
 * full protocol page, which every exercise shares.
 */
export default function ExerciseCard({ exercise }: { exercise: Exercise }) {
  const [hover, setHover] = useState(false);
  const { t, dir } = useLang();
  const rtl = dir === "rtl";

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      className="h-full"
    >
      <Link
        href={`/exercises/${exercise.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-[26px] border border-crimson-100 bg-cream-50 transition-shadow duration-500 hover:shadow-[0_24px_60px_rgba(90,30,20,0.16)]"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-b from-crimson-50 to-cream-100">
          <PhysioFigure
            spec={exercise.figure}
            paused={!hover}
            className="h-full w-full"
          />

          <span className="absolute left-4 top-4 rounded-full bg-espresso-900/85 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-widest text-cream-50 backdrop-blur-sm">
            {exercise.bodyRegion}
          </span>

          {exercise.evidence.status === "unreviewed" && (
            <span className="absolute right-4 top-4 rounded-full bg-amber-accent px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-espresso-900">
              Draft
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col p-6" dir={dir}>
          <h3
            className={`text-lg font-bold leading-snug text-espresso-900 transition-colors duration-300 group-hover:text-crimson-600 ${
              rtl ? "text-right" : ""
            }`}
          >
            {t(exercise.name)}
          </h3>
          <p
            className={`mt-2 line-clamp-2 text-[0.9rem] text-espresso-700/70 ${
              rtl ? "text-right leading-[2]" : "leading-relaxed"
            }`}
          >
            {t(exercise.purpose)}
          </p>

          <div className={`mt-4 flex flex-wrap gap-1.5 ${rtl ? "justify-end" : ""}`}>
            <Chip>{exercise.exerciseType}</Chip>
            <Chip>{exercise.difficulty}</Chip>
            <Chip>{exercise.mode}</Chip>
            <Chip>{exercise.position}</Chip>
          </div>

          <div className="mt-auto flex items-center justify-between border-t border-crimson-100 pt-4 text-[0.82rem] text-espresso-700/60">
            <span dir="ltr">
              {exercise.sets} × {exercise.repetitions}
            </span>
            <span className="font-semibold text-crimson-600 transition-transform duration-300 group-hover:translate-x-1">
              Full protocol →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-crimson-50 px-2.5 py-1 text-[0.72rem] font-semibold text-crimson-700">
      {children}
    </span>
  );
}
