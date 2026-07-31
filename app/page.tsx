import Hero from "@/components/home/Hero";
import BodyPicker from "@/components/home/BodyPicker";
import PinnedShowcase from "@/components/home/PinnedShowcase";
import Reveal from "@/components/Reveal";
import PaperCut from "@/components/home/PaperCut";
import Link from "next/link";
import { EXERCISES } from "@/data/exercises";
import ExerciseCard from "@/components/library/ExerciseCard";

export default function HomePage() {
  return (
    <main>
      <Hero />

      {/* ---------------------------------------------------- what it is */}
      <section className="relative bg-cream-100 px-5 pb-24 pt-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-crimson-600">
              Built for clinical practice
            </p>
            <h2 className="display max-w-3xl text-4xl text-espresso-900 sm:text-6xl">
              Not a list of exercises.
              <br />
              <span className="text-crimson-600">A prescribing tool.</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                n: "01",
                t: "Every clinical field, captured",
                d: "Joint, muscles targeted, conditions, contraindications, progressions and regressions — structured, not free text.",
              },
              {
                n: "02",
                t: "Filter the way you think",
                d: "By body region, contraction type, load, patient position or difficulty. Narrow a thousand exercises to the right five.",
              },
              {
                n: "03",
                t: "Animated demonstrations",
                d: "Each exercise shows the actual movement — joint by joint, with equipment and direction arrows.",
              },
            ].map((c, i) => (
              <Reveal key={c.n} delay={i * 0.12}>
                <div className="group h-full rounded-[26px] border border-crimson-100 bg-cream-50 p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(90,30,20,0.14)]">
                  <span className="display text-5xl text-crimson-200 transition-colors duration-500 group-hover:text-crimson-400">
                    {c.n}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-espresso-900">
                    {c.t}
                  </h3>
                  <p className="mt-2.5 text-[0.95rem] leading-relaxed text-espresso-700/75">
                    {c.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------- pick a region */}
      <section className="relative overflow-hidden bg-cream-50 px-5 pb-20 pt-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-crimson-600">
                Start from the body
              </p>
              <h2 className="display text-4xl text-espresso-900 sm:text-6xl">
                Show me where it hurts.
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-[1.02rem] leading-relaxed text-espresso-700/70">
                Drag to turn the figure, then click where the problem is. The
                library opens already filtered — narrow it from there by joint,
                by what the exercise is for, and by what you have to hand.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <BodyPicker className="mx-auto mt-8 flex h-[680px] w-full max-w-3xl flex-col sm:h-[760px]" />
          </Reveal>
        </div>
      </section>

      {/* -------------------------------------------- pinned scroll section */}
      <PinnedShowcase />

      {/* ------------------------------------------------- sample exercises */}
      <section className="relative bg-cream-100 px-5 pb-28 pt-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-crimson-600">
                  From the library
                </p>
                <h2 className="display max-w-xl text-4xl text-espresso-900 sm:text-5xl">
                  Six exercises to judge the quality
                </h2>
              </div>
              <Link
                href="/exercises"
                className="rounded-full bg-espresso-900 px-7 py-3.5 font-semibold text-cream-50 transition-all duration-300 hover:bg-crimson-600 hover:shadow-[0_12px_30px_rgba(207,58,38,0.35)]"
              >
                Open the library →
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {EXERCISES.map((ex, i) => (
              <Reveal key={ex.id} delay={(i % 3) * 0.1}>
                <ExerciseCard exercise={ex} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- clinician */}
      <section className="relative">
        <PaperCut layers={["#f5ebe2", "#fde5e1", "#e2503b"]} height={130} />
        <div className="bg-crimson-500 px-5 py-20 text-cream-50 sm:px-8">
          <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
            <Reveal>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-crimson-100">
                For physiotherapists
              </p>
              <h2 className="display text-4xl sm:text-5xl">
                Build a programme in minutes, hand it over as a branded PDF.
              </h2>
              <p className="mt-5 max-w-lg text-[1.05rem] leading-relaxed text-cream-100/85">
                Select exercises, set the sets and reps for that patient, and
                export a watermarked handout carrying your clinic name and
                contact details on every page.
              </p>
              <Link
                href="/for-clinicians"
                className="mt-8 inline-block rounded-full bg-cream-50 px-8 py-4 font-semibold text-crimson-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.22)]"
              >
                See the clinician plan
              </Link>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="rounded-[30px] bg-crimson-600/40 p-7 backdrop-blur-sm ring-1 ring-cream-50/20">
                <ul className="space-y-4">
                  {[
                    "Unlimited patient programmes",
                    "Your logo and contact details watermarked on every handout",
                    "Progression and regression suggested automatically",
                    "Contraindications surfaced before you prescribe",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-cream-50 text-[0.8rem] font-bold text-crimson-600">
                        ✓
                      </span>
                      <span className="text-[0.98rem] text-cream-100/90">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
