"use client";

import { useEffect, useState } from "react";
import Human3D, { type View3D } from "@/components/figure/Human3D";
import { EXERCISES } from "@/data/exercises";
import { sampleSequence } from "@/lib/figure";

/**
 * Calibration and review page for the 3D character. Pick an exercise, watch it
 * from any angle, freeze it, and toggle the hoodie.
 */
export default function Human3DPage() {
  const list = EXERCISES.filter((e) => e.figure.frames);
  const [slug, setSlug] = useState("active-shoulder-flexion");
  const [view, setView] = useState<View3D>("side");
  const [playing, setPlaying] = useState(true);
  const [ms, setMs] = useState(0);

  useEffect(() => {
    if (!playing) return;
    let raf = 0;
    const t0 = performance.now() - ms;
    const tick = (now: number) => {
      setMs(now - t0);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing]);

  const ex = list.find((e) => e.slug === slug) ?? list[0];
  const frames = ex.figure.frames!;
  // Freezing "somewhere in the loop" usually lands on the start position,
  // which is the least informative frame. This lands on the working end.
  const total = frames.reduce((s2, f) => s2 + f.travel + f.hold, 0);
  const endAt = total - frames[frames.length - 1].hold / 2;
  const { pose, index } = sampleSequence(frames, playing ? ms : endAt);
  const label = ex.figure.frames![index]?.label;

  return (
    <main className="min-h-screen bg-cream-100 px-5 pb-24 pt-28 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-crimson-600">
          3D character — calibration
        </p>
        <h1 className="display text-4xl text-espresso-900 sm:text-5xl">
          Adam, driven by the exercise library
        </h1>

        <div className="mt-7 flex flex-wrap gap-2">
          {list.map((e) => (
            <button
              key={e.slug}
              onClick={() => setSlug(e.slug)}
              className={`rounded-full px-4 py-2 text-[0.85rem] font-semibold transition-all ${
                e.slug === slug
                  ? "bg-crimson-500 text-cream-50"
                  : "bg-cream-50 text-espresso-700/75 ring-1 ring-crimson-100 hover:ring-crimson-300"
              }`}
            >
              {e.name.en}
            </button>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          {(["front", "side", "threeQuarter"] as View3D[]).map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className={`rounded-full px-4 py-2 text-[0.82rem] font-bold transition-all ${
                v === view
                  ? "bg-espresso-900 text-cream-50"
                  : "bg-cream-50 text-espresso-700/70 ring-1 ring-crimson-100"
              }`}
            >
              {v === "threeQuarter" ? "3/4 view" : `${v} view`}
            </button>
          ))}
          <span className="mx-2 h-6 w-px bg-crimson-200" />
          <button
            onClick={() => setPlaying((v) => !v)}
            className="rounded-full bg-cream-50 px-4 py-2 text-[0.82rem] font-bold text-espresso-700/70 ring-1 ring-crimson-100"
          >
            {playing ? "Hold end pose" : "Play"}
          </button>
        </div>

        <div className="mt-6 overflow-hidden rounded-[26px] border border-crimson-100 bg-gradient-to-b from-crimson-50 to-cream-50">
          <Human3D
            pose={pose}
            view={view}
            className="h-[560px] w-full"
          />
          <p className="border-t border-crimson-100 bg-cream-50 py-3.5 text-center text-[0.95rem] font-semibold text-espresso-800">
            {label ?? ex.name.en}
          </p>
        </div>
      </div>
    </main>
  );
}
