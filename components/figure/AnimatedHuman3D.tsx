"use client";

import { useEffect, useState } from "react";
import Human3D, { type View3D } from "./Human3D";
import PhysioFigure, { type FigureSpec } from "./PhysioFigure";
import { sampleSequence } from "@/lib/figure";

/**
 * The animated 3D character playing an exercise's pose sequence in a loop —
 * the moving figure shown on the exercise pages. Falls back to the flat drawing
 * when a spec has no 3D keyframes yet.
 */
export default function AnimatedHuman3D({
  spec,
  className,
  showLabel = true,
}: {
  spec: FigureSpec;
  className?: string;
  showLabel?: boolean;
}) {
  const frames = spec.frames;
  const [ms, setMs] = useState(0);

  useEffect(() => {
    if (!frames) return;
    let raf = 0;
    const t0 = performance.now();
    const loop = (now: number) => {
      setMs(now - t0);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [frames]);

  if (!frames) return <PhysioFigure spec={spec} className={className} />;

  const view: View3D = spec.view === "front" ? "front" : "side";
  const { pose, index } = sampleSequence(frames, ms);
  const label = frames[index]?.label;

  return (
    <div className={className}>
      <Human3D pose={pose} view={view} props={spec.props} className="h-[420px] w-full sm:h-[460px]" />
      {showLabel && label && (
        <p className="px-4 pb-1 pt-2 text-center text-[0.9rem] font-semibold text-espresso-800">
          {label}
        </p>
      )}
    </div>
  );
}
