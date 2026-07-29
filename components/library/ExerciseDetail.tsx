"use client";

import Link from "next/link";
import PhysioFigure from "@/components/figure/PhysioFigure";
import PinnedNotes from "./PinnedNotes";
import Collapsible from "./Collapsible";
import LanguageToggle from "@/components/LanguageToggle";
import Reveal from "@/components/Reveal";
import { useLang, useUi } from "@/lib/i18n";
import type { Exercise } from "@/data/schema";

/* ==========================================================================
   ExerciseDetail — one format, used by every exercise.

     name → animation, with the two or three lines that matter beside it
     → dosage → everything else collapsed → pinned notes below

   The full step list, mistakes, precautions and contraindications are all
   present but closed by default: a patient reading twenty bullet points
   remembers none of them.
   ========================================================================== */

export default function ExerciseDetail({
  exercise: ex,
  related,
}: {
  exercise: Exercise;
  related: Exercise[];
}) {
  const { t, tl, lang, dir } = useLang();
  const ui = useUi();
  const rtl = dir === "rtl";

  return (
    <main className="min-h-screen bg-cream-100 pb-24 pt-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/exercises"
            className="inline-flex items-center gap-2 text-[0.92rem] font-semibold text-crimson-700 hover:text-crimson-800"
          >
            ← {ui("backToLibrary")}
          </Link>
          <LanguageToggle />
        </div>

        {/* ------------------------------------------- name, before anything */}
        <div className="mb-8 border-b border-crimson-100 pb-7">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-crimson-600">
            {ex.id} · {ex.bodyRegion} · {ex.mode}
          </p>
          <h1
            className={`display mt-2 text-espresso-900 ${
              rtl
                ? "pb-2 text-right text-3xl leading-[2.2] sm:text-4xl"
                : "text-4xl leading-tight sm:text-5xl"
            }`}
            dir={dir}
          >
            {t(ex.name)}
          </h1>
        </div>

        {/* ----------------------------- animation + the lines that matter */}
        <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="overflow-hidden rounded-[30px] border border-crimson-100 bg-cream-50 shadow-[0_20px_50px_rgba(90,30,20,0.1)]">
              <div className="bg-gradient-to-b from-crimson-50 to-cream-50 p-3">
                <PhysioFigure spec={ex.figure} className="w-full" />
              </div>
              <div className="grid grid-cols-2 gap-px bg-crimson-100 sm:grid-cols-4">
                <Stat label={ui("sets")} value={ex.sets} />
                <Stat label={ui("reps")} value={ex.repetitions} />
                <Stat label={ui("hold")} value={ex.holdTime} />
                <Stat label={ui("frequency")} value={ex.frequency} />
              </div>
            </div>

            <button className="mt-4 w-full rounded-2xl bg-espresso-900 px-6 py-4 font-semibold text-cream-50 transition-colors hover:bg-crimson-600">
              {ui("downloadPdf")}
            </button>
            <p className="mt-2 text-center text-[0.74rem] text-espresso-700/50">
              Branded, watermarked PDF export — Phase 3
            </p>
          </div>

          <div>
            {/* the short version: this is what the patient reads */}
            <div className="rounded-[26px] border border-crimson-200 bg-cream-50 p-7">
              <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-crimson-700">
                {ui("howToDoIt")}
              </h2>
              <ol className="space-y-3.5" dir={dir}>
                {tl(ex.quickSteps).map((s, i) => (
                  <li
                    key={i}
                    className={`flex gap-3.5 ${rtl ? "flex-row-reverse text-right" : ""}`}
                  >
                    <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-crimson-500 text-[0.78rem] font-bold text-cream-50">
                      {i + 1}
                    </span>
                    <span
                      className={`text-[1.02rem] text-espresso-800 ${
                        rtl ? "leading-[2.1]" : "leading-relaxed"
                      }`}
                    >
                      {s}
                    </span>
                  </li>
                ))}
              </ol>

              <p
                className={`mt-5 border-t border-crimson-100 pt-4 text-[0.9rem] text-espresso-700/70 ${
                  rtl ? "text-right leading-[2]" : "leading-relaxed"
                }`}
                dir={dir}
              >
                <strong className="text-espresso-900">
                  {ui("startingPosition")}:
                </strong>{" "}
                {t(ex.startingPosition)}
              </p>
            </div>

            {ex.evidence.status === "unreviewed" && (
              <div className="mt-4 rounded-2xl border border-amber-accent/45 bg-amber-accent/12 px-4 py-3">
                <p className="text-[0.85rem] font-semibold text-espresso-800">
                  ⚠ {ui("awaitingReview")}
                </p>
              </div>
            )}

            {/* everything else, closed until wanted */}
            <div className="mt-4 space-y-3">
              <Collapsible title={ui("fullSteps")} count={tl(ex.steps).length}>
                <ol className="space-y-3" dir={dir}>
                  {tl(ex.steps).map((s, i) => (
                    <li
                      key={i}
                      className={`flex gap-3 ${rtl ? "flex-row-reverse text-right" : ""}`}
                    >
                      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-crimson-100 text-[0.7rem] font-bold text-crimson-700">
                        {i + 1}
                      </span>
                      <span
                        className={`text-[0.94rem] text-espresso-700/85 ${
                          rtl ? "leading-[2.1]" : "leading-relaxed"
                        }`}
                      >
                        {s}
                      </span>
                    </li>
                  ))}
                </ol>
              </Collapsible>

              <Collapsible
                title={ui("commonMistakes")}
                count={tl(ex.commonMistakes).length}
              >
                <Bullets items={tl(ex.commonMistakes)} marker="✕" rtl={rtl} tone="crimson" />
              </Collapsible>

              <Collapsible
                title={ui("safety")}
                count={tl(ex.safetyPrecautions).length}
                tone="warn"
              >
                <Bullets items={tl(ex.safetyPrecautions)} marker="!" rtl={rtl} tone="amber" />
              </Collapsible>

              <Collapsible
                title={ui("contraindications")}
                count={tl(ex.contraindications).length}
                tone="danger"
              >
                <Bullets items={tl(ex.contraindications)} marker="⊘" rtl={rtl} tone="crimson" />
              </Collapsible>

              <Collapsible title={ui("clinicalDetail")}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Tags label={ui("joint")} items={ex.joint} />
                  <Tags label={ui("muscles")} items={ex.musclesTargeted} />
                  <Tags label={ui("conditions")} items={ex.conditions} />
                  <Tags label="Contraction" items={ex.contraction} />
                  <Tags label="Position / load" items={[ex.position, ex.load]} />
                  <Tags
                    label={ui("equipment")}
                    items={ex.equipment.length ? ex.equipment : [ui("none")]}
                  />
                </div>
              </Collapsible>
            </div>
          </div>
        </div>

        {/* ---------------------------------------- pinned notes, below now */}
        <section className="mt-16">
          <Reveal>
            <h2 className="mb-2 text-sm font-bold uppercase tracking-widest text-espresso-900">
              {ui("specialInstructions")}
            </h2>
            <p className="mb-6 max-w-xl text-[0.9rem] text-espresso-700/60">
              Worth knowing, but not needed to get started.
            </p>
          </Reveal>
          <div className="grid gap-x-8 md:grid-cols-2">
            <PinnedNotes notes={tl(ex.specialInstructions)} rtl={rtl} />
          </div>
        </section>

        {/* --------------------------------------------------- progressions */}
        {related.length > 0 && (
          <Reveal>
            <section className="mt-16">
              <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-espresso-900">
                {ui("progressTo")} / {ui("regressTo")}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((r) => (
                  <Link
                    key={r.id}
                    href={`/exercises/${r.slug}`}
                    className="group flex items-center gap-4 rounded-[22px] border border-crimson-100 bg-cream-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(90,30,20,0.14)]"
                  >
                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-crimson-50">
                      <PhysioFigure spec={r.figure} paused className="h-full w-full" showLabel={false} />
                    </div>
                    <div dir={dir} className={rtl ? "text-right" : ""}>
                      <p className="text-[0.68rem] font-bold uppercase tracking-widest text-crimson-600">
                        {ex.progressions.includes(r.slug)
                          ? ui("progressTo")
                          : ui("regressTo")}
                      </p>
                      <p className="text-[0.94rem] font-semibold leading-snug text-espresso-900 group-hover:text-crimson-700">
                        {t(r.name)}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </Reveal>
        )}

        {lang === "ur" && (
          <p className="mt-12 rounded-2xl border border-amber-accent/40 bg-amber-accent/10 p-4 text-[0.82rem] leading-[2] text-espresso-800">
            <strong>اردو ترجمہ:</strong> یہ ترجمہ مریضوں کے لیے تیار کیا گیا ہے
            اور ابھی کسی مقامی فزیوتھراپسٹ کی نظرِ ثانی سے نہیں گزرا۔
          </p>
        )}
      </div>
    </main>
  );
}

/* ------------------------------------------------------------- fragments */

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-cream-50 px-3 py-3.5 text-center">
      <p className="text-[0.62rem] font-bold uppercase tracking-widest text-espresso-700/50">
        {label}
      </p>
      <p className="mt-0.5 text-[0.88rem] font-semibold text-espresso-900">
        {value}
      </p>
    </div>
  );
}

function Bullets({
  items,
  marker,
  rtl,
  tone,
}: {
  items: string[];
  marker: string;
  rtl: boolean;
  tone: "crimson" | "amber";
}) {
  const colour =
    tone === "crimson"
      ? "bg-crimson-100 text-crimson-700"
      : "bg-amber-accent/25 text-espresso-800";
  return (
    <ul className="space-y-3" dir={rtl ? "rtl" : "ltr"}>
      {items.map((s, i) => (
        <li key={i} className={`flex gap-3 ${rtl ? "flex-row-reverse text-right" : ""}`}>
          <span
            className={`mt-0.5 grid shrink-0 place-items-center rounded-full text-[0.7rem] font-bold ${colour}`}
            style={{ height: 22, width: 22 }}
          >
            {marker}
          </span>
          <span
            className={`text-[0.94rem] text-espresso-700/85 ${
              rtl ? "leading-[2.1]" : "leading-relaxed"
            }`}
          >
            {s}
          </span>
        </li>
      ))}
    </ul>
  );
}

function Tags({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <p className="mb-2 text-[0.66rem] font-bold uppercase tracking-widest text-espresso-700/50">
        {label}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {items.map((t) => (
          <span
            key={t}
            className="rounded-full bg-cream-100 px-3 py-1.5 text-[0.78rem] font-medium text-espresso-800 ring-1 ring-crimson-100"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
