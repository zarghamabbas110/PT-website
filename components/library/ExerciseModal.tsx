"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PhysioFigure from "@/components/figure/PhysioFigure";
import type { Exercise } from "@/data/schema";

/**
 * The full clinical record, popping out of the card and settling into place.
 * Everything in the agreed schema is shown here.
 */
export default function ExerciseModal({
  exercise,
  open,
  onClose,
}: {
  exercise: Exercise;
  open: boolean;
  onClose: () => void;
}) {
  // Close on Escape, and stop the page behind from scrolling.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0 bg-espresso-900/55 backdrop-blur-md"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={exercise.name}
            initial={{ opacity: 0, y: 60, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
            className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-t-[34px] bg-cream-100 shadow-[0_-10px_60px_rgba(0,0,0,0.3)] sm:rounded-[34px]"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="sticky left-full top-4 z-10 mr-4 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-espresso-900 text-cream-50 transition-transform hover:scale-110"
            >
              ✕
            </button>

            <div className="grid gap-8 px-6 pb-10 sm:px-10 lg:grid-cols-[0.9fr_1.1fr]">
              {/* -------------------------------------------- animation --- */}
              <div className="lg:sticky lg:top-6 lg:self-start">
                <div className="rounded-[28px] bg-gradient-to-b from-crimson-50 to-cream-50 p-3 ring-1 ring-crimson-100">
                  <PhysioFigure spec={exercise.figure} className="w-full" />
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2.5">
                  <Stat label="Sets" value={exercise.sets} />
                  <Stat label="Reps" value={exercise.repetitions} />
                  <Stat label="Hold" value={exercise.holdTime} />
                  <Stat label="Frequency" value={exercise.frequency} />
                </div>

                <button className="mt-4 w-full rounded-2xl bg-espresso-900 px-5 py-3.5 font-semibold text-cream-50 transition-colors hover:bg-crimson-600">
                  Download as branded PDF
                </button>
                <p className="mt-2 text-center text-[0.72rem] text-espresso-700/50">
                  PDF export is planned for Phase 3
                </p>
              </div>

              {/* ------------------------------------------ clinical data - */}
              <div className="pt-2">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-crimson-600">
                  {exercise.id} · {exercise.bodyRegion}
                </p>
                <h2 className="display mt-2 text-3xl leading-tight text-espresso-900 sm:text-4xl">
                  {exercise.name}
                </h2>
                <p className="mt-3 text-[1rem] leading-relaxed text-espresso-700/80">
                  {exercise.purpose}
                </p>

                {exercise.evidence.status === "unreviewed" && (
                  <div className="mt-5 rounded-2xl border border-amber-accent/45 bg-amber-accent/12 p-4">
                    <p className="text-[0.85rem] leading-relaxed text-espresso-800">
                      <strong>Awaiting clinical review.</strong>{" "}
                      {exercise.evidence.rationale}
                    </p>
                  </div>
                )}

                <TagRow label="Joint" items={exercise.joint} />
                <TagRow label="Muscles targeted" items={exercise.musclesTargeted} />
                <TagRow label="Indicated conditions" items={exercise.conditions} />
                <TagRow label="Contraction" items={exercise.contraction} />
                <TagRow
                  label="Equipment"
                  items={exercise.equipment.length ? exercise.equipment : ["None"]}
                />

                <Block title="Starting position">
                  <p className="text-[0.95rem] leading-relaxed text-espresso-700/85">
                    {exercise.startingPosition}
                  </p>
                </Block>

                <Block title="Step-by-step">
                  <ol className="space-y-2.5">
                    {exercise.steps.map((s, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-crimson-500 text-[0.72rem] font-bold text-cream-50">
                          {i + 1}
                        </span>
                        <span className="text-[0.95rem] leading-relaxed text-espresso-700/85">
                          {s}
                        </span>
                      </li>
                    ))}
                  </ol>
                </Block>

                <Block title="Common mistakes">
                  <List items={exercise.commonMistakes} marker="✕" tone="crimson" />
                </Block>

                <Block title="Safety precautions">
                  <List items={exercise.safetyPrecautions} marker="!" tone="amber" />
                </Block>

                <div className="mt-6 rounded-2xl border border-crimson-200 bg-crimson-50/60 p-5">
                  <h4 className="mb-2.5 text-sm font-bold uppercase tracking-widest text-crimson-700">
                    Contraindications
                  </h4>
                  <List items={exercise.contraindications} marker="⊘" tone="crimson" />
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <RelatedBox
                    title="Progress to"
                    slugs={exercise.progressions}
                    empty="Top of this chain"
                  />
                  <RelatedBox
                    title="Regress to"
                    slugs={exercise.regressions}
                    empty="Entry-level exercise"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

/* ------------------------------------------------------------- fragments */

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-cream-50 p-3 ring-1 ring-crimson-100">
      <p className="text-[0.65rem] font-bold uppercase tracking-widest text-espresso-700/50">
        {label}
      </p>
      <p className="mt-0.5 text-[0.92rem] font-semibold text-espresso-900">
        {value}
      </p>
    </div>
  );
}

function TagRow({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="mt-5">
      <p className="mb-2 text-[0.68rem] font-bold uppercase tracking-widest text-espresso-700/50">
        {label}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {items.map((t) => (
          <span
            key={t}
            className="rounded-full bg-cream-50 px-3 py-1.5 text-[0.8rem] font-medium text-espresso-800 ring-1 ring-crimson-100"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-7">
      <h4 className="mb-3 text-sm font-bold uppercase tracking-widest text-espresso-900">
        {title}
      </h4>
      {children}
    </div>
  );
}

function List({
  items,
  marker,
  tone,
}: {
  items: string[];
  marker: string;
  tone: "crimson" | "amber";
}) {
  const colour =
    tone === "crimson"
      ? "bg-crimson-100 text-crimson-700"
      : "bg-amber-accent/25 text-espresso-800";
  return (
    <ul className="space-y-2.5">
      {items.map((s, i) => (
        <li key={i} className="flex gap-3">
          <span
            className={`mt-0.5 grid h-5.5 w-5.5 shrink-0 place-items-center rounded-full text-[0.7rem] font-bold ${colour}`}
            style={{ height: 22, width: 22 }}
          >
            {marker}
          </span>
          <span className="text-[0.93rem] leading-relaxed text-espresso-700/85">
            {s}
          </span>
        </li>
      ))}
    </ul>
  );
}

function RelatedBox({
  title,
  slugs,
  empty,
}: {
  title: string;
  slugs: string[];
  empty: string;
}) {
  return (
    <div className="rounded-2xl bg-cream-50 p-4 ring-1 ring-crimson-100">
      <p className="text-[0.65rem] font-bold uppercase tracking-widest text-espresso-700/50">
        {title}
      </p>
      {slugs.length ? (
        <ul className="mt-2 space-y-1">
          {slugs.map((s) => (
            <li key={s} className="text-[0.88rem] font-medium text-crimson-700">
              {s.replace(/-/g, " ")}
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-2 text-[0.88rem] text-espresso-700/50">{empty}</p>
      )}
    </div>
  );
}
