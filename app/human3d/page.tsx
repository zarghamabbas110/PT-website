"use client";

import { useEffect, useState } from "react";
import Human3D, { type View3D } from "@/components/figure/Human3D";
import { EXERCISES } from "@/data/exercises";
import { sampleSequence } from "@/lib/figure";

const VIEWS: View3D[] = ["front", "side", "threeQuarter"];
const VIEW_LABEL: Record<View3D, string> = {
  front: "front view",
  side: "side view",
  threeQuarter: "3/4 view",
};

/**
 * Calibration and review page for the 3D character.
 *
 * The animation is deliberately not the default. A movement that loops is very
 * hard to fault-check — you need to hold one position and look at it. So this
 * opens frozen on a keyframe, with every keyframe of the exercise listed, and
 * all three camera angles side by side.
 */
export default function Human3DPage() {
  const list = EXERCISES.filter((e) => e.figure.frames);
  const [slug, setSlug] = useState("active-shoulder-flexion");
  const [view, setView] = useState<View3D>("side");
  const [allViews, setAllViews] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [frame, setFrame] = useState(-1); // -1 = last (the working position)
  const [ms, setMs] = useState(0);

  useEffect(() => {
    if (!playing) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      setMs(now - t0);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [playing]);

  const ex = list.find((e) => e.slug === slug) ?? list[0];
  const frames = ex.figure.frames!;
  const idx = frame < 0 ? frames.length - 1 : Math.min(frame, frames.length - 1);

  // Freezing at an arbitrary time lands mid-transition. Settling on the middle
  // of a keyframe's hold gives the position the exercise actually teaches.
  let at = 0;
  for (let i = 0; i < idx; i++) at += frames[i].travel + frames[i].hold;
  at += frames[idx].travel + frames[idx].hold / 2;

  const sampled = sampleSequence(frames, playing ? ms : at);
  const pose = sampled.pose;
  const label = frames[playing ? sampled.index : idx]?.label;

  // Hook for the screenshot harness, so a review sweep can drive this page
  // without clicking. Harmless in the browser; this page never ships to users.
  useEffect(() => {
    (window as unknown as Record<string, unknown>).__catalog = list.map((e) => ({
      slug: e.slug,
      name: e.name.en,
      region: e.bodyRegion,
      position: e.position,
      labels: e.figure.frames!.map((f) => f.label ?? ""),
    }));
    (window as unknown as Record<string, unknown>).__setShot = (
      s: string,
      v: View3D,
      f = -1
    ) => {
      setPlaying(false);
      setSlug(s);
      setView(v);
      setAllViews(false);
      setFrame(f);
    };
  }, []);

  const shown = allViews ? VIEWS : [view];

  return (
    <main className="min-h-screen bg-cream-100 px-5 pb-24 pt-28 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-crimson-600">
          3D character — calibration
        </p>
        <h1 className="display text-4xl text-espresso-900 sm:text-5xl">
          Adam, driven by the exercise library
        </h1>
        <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-espresso-700/80">
          Pick an exercise, then step through its positions. Each position is
          held still so it can be checked properly — press Play only to see how
          the movement flows.
        </p>

        <div className="mt-7 flex flex-wrap gap-2">
          {list.map((e) => (
            <button
              key={e.slug}
              onClick={() => {
                setSlug(e.slug);
                setFrame(-1);
              }}
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

        {/* positions within the chosen exercise */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="text-[0.78rem] font-bold uppercase tracking-wider text-espresso-700/50">
            position
          </span>
          {frames.map((f, i) => (
            <button
              key={i}
              onClick={() => {
                setFrame(i);
                setPlaying(false);
              }}
              className={`rounded-full px-3.5 py-1.5 text-[0.8rem] font-semibold transition-all ${
                !playing && i === idx
                  ? "bg-espresso-900 text-cream-50"
                  : "bg-cream-50 text-espresso-700/70 ring-1 ring-crimson-100"
              }`}
            >
              {i + 1}. {f.label ?? `step ${i + 1}`}
            </button>
          ))}
          <button
            onClick={() => setPlaying((v) => !v)}
            className="rounded-full bg-crimson-100 px-4 py-1.5 text-[0.8rem] font-bold text-crimson-700"
          >
            {playing ? "Freeze" : "Play"}
          </button>
        </div>

        {/* camera */}
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="text-[0.78rem] font-bold uppercase tracking-wider text-espresso-700/50">
            camera
          </span>
          <button
            onClick={() => setAllViews(true)}
            className={`rounded-full px-4 py-1.5 text-[0.8rem] font-bold transition-all ${
              allViews
                ? "bg-espresso-900 text-cream-50"
                : "bg-cream-50 text-espresso-700/70 ring-1 ring-crimson-100"
            }`}
          >
            all three
          </button>
          {VIEWS.map((v) => (
            <button
              key={v}
              onClick={() => {
                setAllViews(false);
                setView(v);
              }}
              className={`rounded-full px-4 py-1.5 text-[0.8rem] font-bold transition-all ${
                !allViews && v === view
                  ? "bg-espresso-900 text-cream-50"
                  : "bg-cream-50 text-espresso-700/70 ring-1 ring-crimson-100"
              }`}
            >
              {VIEW_LABEL[v]}
            </button>
          ))}
        </div>

        <div
          id="stage"
          className={`mt-6 grid gap-3 ${
            allViews ? "sm:grid-cols-3" : "grid-cols-1"
          }`}
        >
          {shown.map((v) => (
            <div
              // Keying on the view itself would tear down the canvas and reload
              // the 19 MB character every time the camera changes. The renderer
              // reads the view live, so one stable slot is all that is needed.
              key={allViews ? v : "single"}
              className="overflow-hidden rounded-[22px] border border-crimson-100 bg-gradient-to-b from-crimson-50 to-cream-50"
            >
              <Human3D
                pose={pose}
                view={v}
                className={allViews ? "h-[420px] w-full" : "h-[560px] w-full"}
              />
              <p className="border-t border-crimson-100 bg-cream-50 py-2.5 text-center text-[0.8rem] font-bold uppercase tracking-wider text-espresso-700/60">
                {VIEW_LABEL[v]}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-4 text-center text-[1.05rem] font-semibold text-espresso-800">
          {label ?? ex.name.en}
        </p>
      </div>
    </main>
  );
}
