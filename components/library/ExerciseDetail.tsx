"use client";

import Link from "next/link";
import PhysioFigure from "@/components/figure/PhysioFigure";
import PinnedNotes from "./PinnedNotes";
import LanguageToggle from "@/components/LanguageToggle";
import Reveal from "@/components/Reveal";
import { useLang, useUi } from "@/lib/i18n";
import type { Exercise } from "@/data/schema";

/* ==========================================================================
   ExerciseDetail — the single format every exercise follows:

     • a large animated demonstration on one side, held in view while you read
     • the special instructions pinned beside it as notes on a board
     • the full clinical record beneath

   Switching to Urdu swaps the patient-facing prose and flips it to
   right-to-left. Clinical taxonomy stays in English.
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
  const urduText = rtl ? "text-right leading-[2.1]" : "";

  return (
    <main className="min-h-screen bg-cream-100 pb-24 pt-28">
      {/* ------------------------------------------------------ top bar */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/exercises"
            className="inline-flex items-center gap-2 text-[0.92rem] font-semibold text-crimson-700 hover:text-crimson-800"
          >
            ← {ui("backToLibrary")}
          </Link>
          <LanguageToggle />
        </div>
      </div>

      {/* ---------------------------------- animation + pinned instructions */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr]">
          {/* left: the demonstration, sticky so it stays visible while reading */}
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

          {/* right: title, then the pinned notes */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-crimson-600">
              {ex.id} · {ex.bodyRegion} · {ex.mode}
            </p>
            {/* Nastaliq stacks its glyphs diagonally and needs far more
                leading than Latin type, or the strokes collide. */}
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
            <p
              className={`mt-4 text-[1.02rem] leading-relaxed text-espresso-700/80 ${urduText}`}
              dir={dir}
            >
              {t(ex.purpose)}
            </p>

            {ex.evidence.status === "unreviewed" && (
              <div className="mt-5 rounded-2xl border border-amber-accent/45 bg-amber-accent/12 px-4 py-3">
                <p className="text-[0.85rem] font-semibold text-espresso-800">
                  ⚠ {ui("awaitingReview")}
                </p>
                <p className="mt-1 text-[0.82rem] leading-relaxed text-espresso-700/75">
                  {ex.evidence.rationale}
                </p>
              </div>
            )}

            <h2 className="mt-9 mb-1 text-sm font-bold uppercase tracking-widest text-espresso-900">
              {ui("specialInstructions")}
            </h2>
            <PinnedNotes notes={tl(ex.specialInstructions)} rtl={rtl} />
          </div>
        </div>
      </section>

      {/* -------------------------------------------------- clinical record */}
      <section className="mx-auto mt-20 max-w-7xl px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <Panel title={ui("startingPosition")}>
              <p
                className={`text-[0.96rem] leading-relaxed text-espresso-700/85 ${urduText}`}
                dir={dir}
              >
                {t(ex.startingPosition)}
              </p>
            </Panel>

            <Panel title={ui("steps")} className="mt-6">
              <ol className="space-y-3" dir={dir}>
                {tl(ex.steps).map((s, i) => (
                  <li
                    key={i}
                    className={`flex gap-3 ${rtl ? "flex-row-reverse text-right" : ""}`}
                  >
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-crimson-500 text-[0.72rem] font-bold text-cream-50">
                      {i + 1}
                    </span>
                    <span
                      className={`text-[0.96rem] text-espresso-700/85 ${
                        rtl ? "leading-[2.1]" : "leading-relaxed"
                      }`}
                    >
                      {s}
                    </span>
                  </li>
                ))}
              </ol>
            </Panel>
          </Reveal>

          <Reveal delay={0.1}>
            <Panel title={ui("commonMistakes")}>
              <Bullets items={tl(ex.commonMistakes)} marker="✕" rtl={rtl} tone="crimson" />
            </Panel>

            <Panel title={ui("safety")} className="mt-6">
              <Bullets items={tl(ex.safetyPrecautions)} marker="!" rtl={rtl} tone="amber" />
            </Panel>

            <div className="mt-6 rounded-[24px] border border-crimson-200 bg-crimson-50/70 p-6">
              <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-crimson-700">
                {ui("contraindications")}
              </h3>
              <Bullets items={tl(ex.contraindications)} marker="⊘" rtl={rtl} tone="crimson" />
            </div>
          </Reveal>
        </div>

        {/* ------------------------------------------------ clinical detail */}
        <Reveal>
          <div className="mt-10 grid gap-4 rounded-[26px] border border-crimson-100 bg-cream-50 p-7 sm:grid-cols-2 lg:grid-cols-3">
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
        </Reveal>

        {/* --------------------------------------------------- progressions */}
        {related.length > 0 && (
          <Reveal>
            <div className="mt-10">
              <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-espresso-900">
                {ui("progressTo")} / {ui("regressTo")}
              </h3>
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
                      <p className="text-[0.7rem] font-bold uppercase tracking-widest text-crimson-600">
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
            </div>
          </Reveal>
        )}

        {lang === "ur" && (
          <p className="mt-10 rounded-2xl border border-amber-accent/40 bg-amber-accent/10 p-4 text-[0.82rem] leading-relaxed text-espresso-800">
            <strong>اردو ترجمہ:</strong> یہ ترجمہ مریضوں کے لیے تیار کیا گیا ہے
            اور ابھی کسی مقامی فزیوتھراپسٹ کی نظرِ ثانی سے نہیں گزرا۔ استعمال سے
            پہلے تصدیق ضروری ہے۔
          </p>
        )}
      </section>
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

function Panel({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[24px] border border-crimson-100 bg-cream-50 p-6 sm:p-7 ${className}`}
    >
      <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-espresso-900">
        {title}
      </h3>
      {children}
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
        <li
          key={i}
          className={`flex gap-3 ${rtl ? "flex-row-reverse text-right" : ""}`}
        >
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
