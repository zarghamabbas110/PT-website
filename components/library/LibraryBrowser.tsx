"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ExerciseCard from "./ExerciseCard";
import {
  BODY_REGIONS,
  CONTRACTION_TYPES,
  DIFFICULTIES,
  EXERCISES,
  LOAD_TYPES,
  POSITIONS,
} from "@/data/exercises";

/* ==========================================================================
   LibraryBrowser — the filtering model you described: several independent
   axes, any combination, narrowing as you go.

   Filters are held in component state for now. When the library moves to a
   database this becomes a query, and the URL will carry the filter state so
   clinicians can bookmark and share a filtered view.
   ========================================================================== */

type Axis = {
  key: string;
  label: string;
  options: readonly string[];
};

const AXES: Axis[] = [
  { key: "bodyRegion", label: "Body region", options: BODY_REGIONS },
  { key: "contraction", label: "Contraction", options: CONTRACTION_TYPES },
  { key: "load", label: "Load", options: LOAD_TYPES },
  { key: "position", label: "Position", options: POSITIONS },
  { key: "difficulty", label: "Difficulty", options: DIFFICULTIES },
];

export default function LibraryBrowser() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<Record<string, string[]>>({});
  const [openAxis, setOpenAxis] = useState<string | null>("bodyRegion");

  const toggle = (axis: string, value: string) => {
    setActive((prev) => {
      const current = prev[axis] ?? [];
      const next = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...prev, [axis]: next };
    });
  };

  const activeCount = Object.values(active).reduce((n, v) => n + v.length, 0);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();

    return EXERCISES.filter((ex) => {
      // Free-text search across the fields a clinician would actually type.
      if (q) {
        const haystack = [
          ex.name,
          ex.purpose,
          ex.bodyRegion,
          ...ex.musclesTargeted,
          ...ex.conditions,
          ...ex.joint,
        ]
          .join(" ")
          .toLowerCase();
        if (!haystack.includes(q)) return false;
      }

      // Every axis with selections must match at least one of them (AND across
      // axes, OR within an axis) — the way clinicians narrow in practice.
      for (const axis of AXES) {
        const selected = active[axis.key] ?? [];
        if (!selected.length) continue;

        const field = ex[axis.key as keyof typeof ex];
        const values = Array.isArray(field) ? field : [field];
        if (!selected.some((s) => (values as string[]).includes(s))) {
          return false;
        }
      }
      return true;
    });
  }, [query, active]);

  return (
    <div className="mx-auto max-w-7xl">
      {/* ------------------------------------------------------ heading */}
      <div className="mb-10">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-crimson-600">
          Exercise library
        </p>
        <h1 className="display max-w-2xl text-5xl text-espresso-900 sm:text-6xl">
          Narrow it down the way you think.
        </h1>
        <p className="mt-4 max-w-xl text-[1.02rem] leading-relaxed text-espresso-700/70">
          Combine any of the axes below. Within an axis the filters widen your
          results; across axes they narrow them.
        </p>
      </div>

      {/* ------------------------------------------------------- search */}
      <div className="sticky top-20 z-30 -mx-2 mb-6 rounded-[26px] bg-cream-100/90 px-2 py-3 backdrop-blur-xl">
        <div className="flex items-center gap-3 rounded-full border border-crimson-200 bg-cream-50 px-5 py-3.5 shadow-[0_6px_24px_rgba(90,30,20,0.07)] focus-within:border-crimson-400">
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" className="shrink-0">
            <circle cx="11" cy="11" r="7" stroke="#cf3a26" strokeWidth="2.4" />
            <path d="m20 20-3.5-3.5" stroke="#cf3a26" strokeWidth="2.4" strokeLinecap="round" />
          </svg>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name, muscle, joint or condition…"
            aria-label="Search exercises"
            className="w-full bg-transparent text-[0.98rem] text-espresso-900 outline-none placeholder:text-espresso-700/40"
          />
          {(query || activeCount > 0) && (
            <button
              onClick={() => {
                setQuery("");
                setActive({});
              }}
              className="shrink-0 rounded-full bg-crimson-50 px-3 py-1.5 text-[0.78rem] font-semibold text-crimson-700 hover:bg-crimson-100"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* ------------------------------------------------------- filters */}
      <div className="mb-8 space-y-2">
        {AXES.map((axis) => {
          const selected = active[axis.key] ?? [];
          const isOpen = openAxis === axis.key;

          return (
            <div
              key={axis.key}
              className="overflow-hidden rounded-[22px] border border-crimson-100 bg-cream-50"
            >
              <button
                onClick={() => setOpenAxis(isOpen ? null : axis.key)}
                className="flex w-full items-center justify-between px-5 py-3.5 text-left"
                aria-expanded={isOpen}
              >
                <span className="flex items-center gap-2.5">
                  <span className="text-[0.95rem] font-bold text-espresso-900">
                    {axis.label}
                  </span>
                  {selected.length > 0 && (
                    <span className="rounded-full bg-crimson-500 px-2 py-0.5 text-[0.68rem] font-bold text-cream-50">
                      {selected.length}
                    </span>
                  )}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-crimson-600"
                >
                  ▾
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="flex flex-wrap gap-2 px-5 pb-4">
                      {axis.options.map((opt) => {
                        const on = selected.includes(opt);
                        return (
                          <button
                            key={opt}
                            onClick={() => toggle(axis.key, opt)}
                            aria-pressed={on}
                            className={`rounded-full px-4 py-2 text-[0.85rem] font-semibold transition-all duration-200 ${
                              on
                                ? "bg-crimson-500 text-cream-50 shadow-[0_6px_16px_rgba(207,58,38,0.32)]"
                                : "bg-cream-100 text-espresso-700/75 ring-1 ring-crimson-100 hover:ring-crimson-300"
                            }`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* ------------------------------------------------------- results */}
      <p className="mb-6 text-[0.9rem] font-semibold text-espresso-700/60">
        {results.length} {results.length === 1 ? "exercise" : "exercises"}
        {activeCount > 0 && ` · ${activeCount} filters active`}
      </p>

      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {results.map((ex) => (
            <motion.div
              key={ex.id}
              layout
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <ExerciseCard exercise={ex} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {results.length === 0 && (
        <div className="rounded-[26px] border border-dashed border-crimson-200 py-20 text-center">
          <p className="text-[1.05rem] font-semibold text-espresso-900">
            Nothing matches that combination.
          </p>
          <p className="mt-1.5 text-[0.92rem] text-espresso-700/60">
            Try removing a filter — the library is still small.
          </p>
        </div>
      )}
    </div>
  );
}
