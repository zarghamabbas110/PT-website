import PhysioFigure from "@/components/figure/PhysioFigure";
import { EXERCISES } from "@/data/exercises";

/**
 * Internal calibration page — renders every figure large, on a grid, with the
 * viewBox outlined so poses can be checked and tuned. Not linked from the
 * site; delete before launch.
 */
export default function FiguresPage() {
  return (
    <main className="min-h-screen bg-cream-100 px-6 pb-20 pt-28">
      <h1 className="display mb-8 text-3xl">Figure calibration</h1>
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
        {EXERCISES.map((ex) => (
          <div key={ex.id} className="rounded-2xl bg-cream-50 p-3 ring-1 ring-crimson-200">
            <p className="mb-1 text-sm font-bold">{ex.name}</p>
            <div className="relative aspect-square bg-[repeating-linear-gradient(0deg,#0001_0_1px,transparent_1px_40px),repeating-linear-gradient(90deg,#0001_0_1px,transparent_1px_40px)]">
              <PhysioFigure spec={ex.figure} className="h-full w-full" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
