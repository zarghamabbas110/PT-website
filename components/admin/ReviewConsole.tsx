"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import AnimatedHuman3D from "@/components/figure/AnimatedHuman3D";
import { BODY_REGIONS, EXERCISES } from "@/data/exercises";
import { listVerdicts, saveVerdicts, type Verdict } from "@/lib/session";
import type { Exercise } from "@/data/schema";

/* ==========================================================================
   ReviewConsole — sign the library off in one sitting.

   Every exercise, in order, with the movement actually playing and the few
   lines that matter beside it. Two questions per exercise, because they fail
   independently: is the *writing* right, and is the *figure* doing the right
   thing. A note box catches the "yes but" that a tick cannot.

   The whole library on one page would be three hundred live 3D canvases, and a
   browser gives you about sixteen — so it pages. The verdicts persist as you
   go, and the export button produces a file listing everything marked wrong,
   which is what turns this review into a work list.
   ========================================================================== */

const PER_PAGE = 6;

export default function ReviewConsole() {
  const [verdicts, setVerdicts] = useState<Record<string, Verdict>>({});
  const [region, setRegion] = useState<string>("All");
  const [outstanding, setOutstanding] = useState(false);
  const [page, setPage] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setVerdicts(listVerdicts());
    setReady(true);
  }, []);

  const set = (slug: string, patch: Partial<Verdict>) => {
    setVerdicts((prev) => {
      const next = { ...prev, [slug]: { ...prev[slug], ...patch } };
      saveVerdicts(next);
      return next;
    });
  };

  const list = useMemo(() => {
    return EXERCISES.filter((e) => {
      if (region !== "All" && e.bodyRegion !== region) return false;
      if (outstanding) {
        const v = verdicts[e.slug];
        if (v?.content && v?.movement) return false;
      }
      return true;
    });
    // `verdicts` is deliberately not a dependency when the outstanding filter is
    // off: re-sorting the page under the owner's cursor as he ticks would be
    // maddening. With it on he has asked for exactly that behaviour.
  }, [region, outstanding, outstanding ? verdicts : null]);

  const pages = Math.max(1, Math.ceil(list.length / PER_PAGE));
  const current = Math.min(page, pages - 1);
  const slice = list.slice(current * PER_PAGE, current * PER_PAGE + PER_PAGE);

  const done = EXERCISES.filter(
    (e) => verdicts[e.slug]?.content && verdicts[e.slug]?.movement
  ).length;
  const problems = EXERCISES.filter(
    (e) => verdicts[e.slug]?.content === "no" || verdicts[e.slug]?.movement === "no"
  );

  if (!ready) return null;

  return (
    <div>
      {/* --------------------------------------------------------- progress */}
      <div className="sticky top-20 z-30 mb-6 rounded-[26px] border border-crimson-100 bg-cream-50/95 p-5 backdrop-blur-xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-[1.05rem] font-bold text-espresso-900">
              {done} of {EXERCISES.length} signed off
              {problems.length > 0 && (
                <span className="ml-2 rounded-full bg-crimson-500 px-2.5 py-0.5 text-[0.72rem] font-bold text-cream-50">
                  {problems.length} marked wrong
                </span>
              )}
            </p>
            <div className="mt-2 h-2 w-64 overflow-hidden rounded-full bg-crimson-100">
              <div
                className="h-full rounded-full bg-crimson-500 transition-all duration-500"
                style={{ width: `${(done / EXERCISES.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => exportReport(verdicts)}
              className="rounded-full bg-espresso-900 px-5 py-2.5 text-[0.85rem] font-semibold text-cream-50 hover:bg-crimson-600"
            >
              Export my review
            </button>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <select
            value={region}
            onChange={(e) => {
              setRegion(e.target.value);
              setPage(0);
            }}
            className="rounded-full border border-crimson-200 bg-cream-100 px-4 py-2 text-[0.85rem] font-semibold text-espresso-800 outline-none"
          >
            <option value="All">All regions ({EXERCISES.length})</option>
            {BODY_REGIONS.map((r) => (
              <option key={r} value={r}>
                {r} ({EXERCISES.filter((e) => e.bodyRegion === r).length})
              </option>
            ))}
          </select>

          <label className="flex cursor-pointer items-center gap-2 rounded-full bg-cream-100 px-4 py-2 text-[0.85rem] font-semibold text-espresso-800 ring-1 ring-crimson-100">
            <input
              type="checkbox"
              checked={outstanding}
              onChange={(e) => {
                setOutstanding(e.target.checked);
                setPage(0);
              }}
              className="accent-crimson-500"
            />
            Still to do only
          </label>

          <span className="ml-auto text-[0.85rem] text-espresso-700/60">
            Page {current + 1} of {pages} · {list.length} shown
          </span>
        </div>
      </div>

      {/* ----------------------------------------------------------- the list */}
      <div className="space-y-5">
        {slice.map((ex) => (
          <ReviewRow
            key={ex.id}
            ex={ex}
            verdict={verdicts[ex.slug] ?? {}}
            onSet={(p) => set(ex.slug, p)}
          />
        ))}
        {slice.length === 0 && (
          <p className="rounded-[26px] border border-dashed border-crimson-200 py-20 text-center text-[1.05rem] font-semibold text-espresso-900">
            Nothing left in that filter. That is the good outcome.
          </p>
        )}
      </div>

      {/* ------------------------------------------------------------- pager */}
      <div className="mt-8 flex items-center justify-center gap-3">
        <button
          disabled={current === 0}
          onClick={() => {
            setPage(current - 1);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="rounded-full bg-cream-50 px-6 py-3 font-semibold text-espresso-800 ring-1 ring-crimson-200 disabled:opacity-40 enabled:hover:ring-crimson-400"
        >
          ← Previous
        </button>
        <button
          disabled={current >= pages - 1}
          onClick={() => {
            setPage(current + 1);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="rounded-full bg-espresso-900 px-6 py-3 font-semibold text-cream-50 disabled:opacity-40 enabled:hover:bg-crimson-600"
        >
          Next {PER_PAGE} →
        </button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ a row */

function ReviewRow({
  ex,
  verdict,
  onSet,
}: {
  ex: Exercise;
  verdict: Verdict;
  onSet: (p: Partial<Verdict>) => void;
}) {
  const [noteOpen, setNoteOpen] = useState(Boolean(verdict.note));
  const flagged = verdict.content === "no" || verdict.movement === "no";
  const settled = verdict.content && verdict.movement;

  return (
    <div
      className={`grid gap-6 rounded-[26px] border bg-cream-50 p-5 transition-colors md:grid-cols-[300px_1fr] ${
        flagged
          ? "border-crimson-400 bg-crimson-50/40"
          : settled
            ? "border-green-600/30 bg-green-50/30"
            : "border-crimson-100"
      }`}
    >
      {/* the movement, actually moving */}
      <div className="overflow-hidden rounded-[20px] bg-gradient-to-b from-crimson-50 to-cream-100">
        <AnimatedHuman3D spec={ex.figure} className="w-full" />
      </div>

      <div>
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="text-[0.7rem] font-bold uppercase tracking-widest text-crimson-600">
            {ex.id}
          </span>
          <h3 className="text-[1.15rem] font-bold leading-snug text-espresso-900">
            {ex.name.en}
          </h3>
          <Link
            href={`/exercises/${ex.slug}`}
            target="_blank"
            className="text-[0.8rem] font-semibold text-crimson-700 hover:underline"
          >
            open full page ↗
          </Link>
        </div>

        <p className="mt-1.5 text-[0.92rem] leading-relaxed text-espresso-700/80">
          {ex.purpose.en}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {[
            ex.bodyRegion,
            ...ex.joint,
            ex.exerciseType,
            ...ex.contraction,
            ex.mode,
            ex.load,
            ex.position,
            ex.difficulty,
            ex.equipment.length ? ex.equipment.join(", ") : "No equipment",
          ].map((c, i) => (
            <span
              key={`${c}-${i}`}
              className="rounded-full bg-cream-100 px-2.5 py-1 text-[0.72rem] font-semibold text-espresso-700/80 ring-1 ring-crimson-100"
            >
              {c}
            </span>
          ))}
        </div>

        <ol className="mt-3 space-y-1">
          {ex.quickSteps.en.map((s, i) => (
            <li key={i} className="text-[0.88rem] leading-snug text-espresso-700/75">
              <span className="font-bold text-crimson-600">{i + 1}.</span> {s}
            </li>
          ))}
        </ol>

        <p className="mt-2 text-[0.82rem] text-espresso-700/60">
          {ex.sets} × {ex.repetitions} · hold {ex.holdTime} · {ex.frequency}
        </p>

        {/* --------------------------------------------------- the verdict */}
        <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-crimson-100 pt-4">
          <YesNo
            label="Details correct?"
            value={verdict.content}
            onChange={(v) => onSet({ content: v })}
          />
          <YesNo
            label="Movement correct?"
            value={verdict.movement}
            onChange={(v) => onSet({ movement: v })}
          />
          <button
            onClick={() => setNoteOpen((v) => !v)}
            className="text-[0.82rem] font-semibold text-crimson-700 hover:underline"
          >
            {verdict.note ? "edit note" : noteOpen ? "hide note" : "+ add a note"}
          </button>
        </div>

        {noteOpen && (
          <textarea
            value={verdict.note ?? ""}
            onChange={(e) => onSet({ note: e.target.value })}
            rows={2}
            placeholder="What is wrong with it?"
            className="mt-3 w-full rounded-2xl border border-crimson-200 bg-cream-100 px-4 py-3 text-[0.9rem] text-espresso-900 outline-none focus:border-crimson-400"
          />
        )}
      </div>
    </div>
  );
}

function YesNo({
  label,
  value,
  onChange,
}: {
  label: string;
  value?: "yes" | "no";
  onChange: (v: "yes" | "no") => void;
}) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="text-[0.84rem] font-bold text-espresso-800">{label}</span>
      {(["yes", "no"] as const).map((v) => (
        <button
          key={v}
          onClick={() => onChange(v)}
          aria-pressed={value === v}
          className={`rounded-full px-4 py-1.5 text-[0.82rem] font-bold capitalize transition-all ${
            value === v
              ? v === "yes"
                ? "bg-green-600 text-white"
                : "bg-crimson-500 text-cream-50"
              : "bg-cream-100 text-espresso-700/70 ring-1 ring-crimson-100 hover:ring-crimson-300"
          }`}
        >
          {v}
        </button>
      ))}
    </div>
  );
}

/* --------------------------------------------------------------- export */

/** A plain-text work list of everything marked wrong, ready to hand back. */
function exportReport(verdicts: Record<string, Verdict>) {
  const lines: string[] = [
    "PhysioFlow — clinical review",
    `Exported ${new Date().toLocaleString()}`,
    "",
  ];

  const bad = EXERCISES.filter(
    (e) => verdicts[e.slug]?.content === "no" || verdicts[e.slug]?.movement === "no"
  );
  const ok = EXERCISES.filter(
    (e) => verdicts[e.slug]?.content === "yes" && verdicts[e.slug]?.movement === "yes"
  );
  const untouched = EXERCISES.filter((e) => !verdicts[e.slug]);

  lines.push(`APPROVED: ${ok.length}`);
  lines.push(`NEEDS WORK: ${bad.length}`);
  lines.push(`NOT YET LOOKED AT: ${untouched.length}`);
  lines.push("", "=".repeat(60), "NEEDS WORK", "=".repeat(60), "");

  for (const e of bad) {
    const v = verdicts[e.slug];
    lines.push(`${e.id}  ${e.name.en}  [${e.bodyRegion}]`);
    lines.push(`  slug: ${e.slug}`);
    if (v.content === "no") lines.push("  ✗ details wrong");
    if (v.movement === "no") lines.push("  ✗ movement wrong");
    if (v.note) lines.push(`  note: ${v.note}`);
    lines.push("");
  }

  lines.push("=".repeat(60), "APPROVED", "=".repeat(60), "");
  for (const e of ok) lines.push(`${e.id}  ${e.name.en}`);

  const blob = new Blob([lines.join("\n")], { type: "text/plain" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `physioflow-review-${new Date().toISOString().slice(0, 10)}.txt`;
  a.click();
  URL.revokeObjectURL(a.href);
}
