"use client";

import { useEffect, useState } from "react";
import Human3D from "@/components/figure/Human3D";
import { EXERCISES } from "@/data/exercises";
import { sampleSequence } from "@/lib/figure";

/**
 * Proof of concept: the same exercise data driving a rigged 3D human instead
 * of the flat SVG figure. The character here is a placeholder from the
 * three.js sample set — the point is the pipeline, not the model.
 */
export default function Human3DPage() {
  const withSideFrames = EXERCISES.filter((e) => e.figure.frames);
  const [slug, setSlug] = useState(withSideFrames[0].slug);
  const [ms, setMs] = useState(0);

  useEffect(() => {
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      setMs(now - t0);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const ex = withSideFrames.find((e) => e.slug === slug)!;
  const { pose } = sampleSequence(ex.figure.frames!, ms);

  return (
    <main className="min-h-screen bg-cream-100 px-5 pb-24 pt-28 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-crimson-600">
          Proof of concept
        </p>
        <h1 className="display text-4xl text-espresso-900 sm:text-5xl">
          The same exercise data, driving a real 3D human
        </h1>
        <p className="mt-4 max-w-2xl text-[1.02rem] leading-relaxed text-espresso-700/75">
          Nothing in the exercise library changed. The joint angles that draw
          the flat figure are being applied to the bones of a rigged character.
          Swap the model file and this becomes a photoreal person — the
          exercises, the movements and the camera all carry over.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {withSideFrames.map((e) => (
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

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <Figure title="Front view">
            <Human3D pose={pose} view="front" className="h-[460px] w-full" />
          </Figure>
          <Figure title="Side view — same pose, camera moved">
            <Human3D pose={pose} view="side" className="h-[460px] w-full" />
          </Figure>
        </div>

        <p className="mt-8 rounded-2xl border border-amber-accent/40 bg-amber-accent/10 p-5 text-[0.9rem] leading-relaxed text-espresso-800">
          <strong>The character is a placeholder</strong> from the three.js
          sample models, used only to prove the rig mapping works. It shares
          Mixamo&apos;s standard skeleton, which means a realistic male and
          female downloaded from Mixamo will load with no code changes.
          The joint mapping is still rough — arms and spine need calibrating.
        </p>
      </div>
    </main>
  );
}

function Figure({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-[26px] border border-crimson-100 bg-gradient-to-b from-crimson-50 to-cream-50">
      {children}
      <p className="border-t border-crimson-100 bg-cream-50 py-3 text-center text-[0.85rem] font-semibold text-espresso-800">
        {title}
      </p>
    </div>
  );
}
