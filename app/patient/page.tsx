import Hero from "@/components/home/Hero";
import BodyPicker from "@/components/home/BodyPicker";
import PinnedShowcase from "@/components/home/PinnedShowcase";
import Reveal from "@/components/Reveal";
import PaperCut from "@/components/home/PaperCut";
import Link from "next/link";
import { EXERCISES } from "@/data/exercises";
import ExerciseCard from "@/components/library/ExerciseCard";

export const metadata = {
  title: "PhysioFlow — exercises explained clearly",
  description:
    "Find the exercises for your problem, watch the movement on a three-dimensional figure, and read the instructions in English or Urdu.",
};

/* A handful of the most commonly prescribed exercises in the library — enough
   to judge the quality, not so many that the page becomes the library. The
   library itself is one click away and is where browsing belongs. */
const SAMPLE_SLUGS = [
  "cat-camel",
  "pendulum-codman",
  "knee-to-chest",
  "glute-bridge-ball-squeeze",
];

const SAMPLES = SAMPLE_SLUGS.map((s) => EXERCISES.find((e) => e.slug === s)).filter(
  (e): e is NonNullable<typeof e> => Boolean(e)
);

export default function PatientHome() {
  return (
    <main>
      <Hero />

      {/* ---------------------------------------------------- what it is */}
      <section className="relative bg-cream-100 px-5 pb-24 pt-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-crimson-600">
              Why this is different
            </p>
            <h2 className="display max-w-3xl text-4xl text-espresso-900 sm:text-6xl">
              A photograph shows a position.
              <br />
              <span className="text-crimson-600">This shows the movement.</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                n: "01",
                t: "You watch it, not read it",
                d: "Every exercise plays on a real three-dimensional body, so you can see the position, the direction and how far to go before you try it yourself.",
              },
              {
                n: "02",
                t: "In your own language",
                d: "Every instruction, every common mistake and every safety note is written in both English and Urdu — not machine translated, written out.",
              },
              {
                n: "03",
                t: "Written by a physiotherapist",
                d: "Each exercise carries its purpose, the muscles it works, what to be careful of, and when it should not be done at all.",
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

      {/* ------------------------------------------------- pick a region
          The words sit beside the figure, not above it: with the heading on
          top the figure was pushed below the fold on a laptop and read as a
          decoration rather than as the thing you are meant to touch. */}
      <section className="relative overflow-hidden bg-cream-50 px-5 pb-20 pt-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="lg:pr-6">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-crimson-600">
                Start from the body
              </p>
              <h2 className="display text-4xl text-espresso-900 sm:text-5xl">
                Show me where it hurts.
              </h2>
              <p className="mt-4 max-w-md text-[1.02rem] leading-relaxed text-espresso-700/70">
                Turn the figure with a drag, then click the part that is giving
                you trouble. The library opens already narrowed to that region —
                and you can carry on narrowing by joint, by what the exercise is
                for, and by whether you have any equipment to hand.
              </p>
              <ol className="mt-6 space-y-2.5">
                {[
                  "Drag left or right to turn the body around",
                  "Hover to light up a region, click to choose it",
                  "Or use the buttons underneath if you prefer",
                ].map((s, i) => (
                  <li key={s} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-crimson-500 text-[0.72rem] font-bold text-cream-50">
                      {i + 1}
                    </span>
                    <span className="text-[0.94rem] leading-relaxed text-espresso-700/80">
                      {s}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <BodyPicker className="mx-auto flex h-[500px] w-full max-w-lg flex-col sm:h-[560px]" />
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
                  Four of the most commonly prescribed
                </h2>
                <p className="mt-3 max-w-lg text-[1rem] leading-relaxed text-espresso-700/70">
                  There are three hundred more, sorted nine different ways.
                </p>
              </div>
              <Link
                href="/exercises"
                className="rounded-full bg-espresso-900 px-7 py-3.5 font-semibold text-cream-50 transition-all duration-300 hover:bg-crimson-600 hover:shadow-[0_12px_30px_rgba(207,58,38,0.35)]"
              >
                Open the library →
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SAMPLES.map((ex, i) => (
              <Reveal key={ex.id} delay={(i % 4) * 0.09}>
                <ExerciseCard exercise={ex} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ about */}
      <section id="about" className="relative scroll-mt-24 bg-cream-50 px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.9fr]">
          <Reveal>
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-crimson-600">
                About PhysioFlow
              </p>
              <h2 className="display max-w-xl text-4xl text-espresso-900 sm:text-5xl">
                Built in a clinic, not in a boardroom.
              </h2>
              <div className="mt-6 space-y-4 text-[1.02rem] leading-relaxed text-espresso-700/80">
                <p>
                  Most exercise handouts are a photocopy of a photocopy: a
                  stick drawing, a line of English, and a patient who goes home
                  and does something else entirely. The exercise was not wrong.
                  The explanation was.
                </p>
                <p>
                  PhysioFlow was started by a practising physiotherapist in
                  Pakistan for exactly that reason. Every exercise is animated
                  on a three-dimensional body rather than drawn, so the patient
                  sees the movement and not just a position — and every word of
                  it exists in Urdu as well as English.
                </p>
                <p>
                  For the clinician, the same record carries what a handout
                  never has room for: the joints involved, the muscles worked,
                  the contraction type, the dosage, the progressions and
                  regressions, and the contraindications that matter before you
                  prescribe.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="rounded-[30px] border border-crimson-100 bg-cream-100 p-8">
              <h3 className="text-sm font-bold uppercase tracking-widest text-espresso-900">
                Where the library stands
              </h3>
              <dl className="mt-6 space-y-5">
                {[
                  ["300", "exercises, fully bilingual"],
                  ["10", "body regions, 27 named joints"],
                  ["9", "ways to narrow the list"],
                  ["100%", "animated on the 3D figure"],
                ].map(([n, l]) => (
                  <div key={l} className="flex items-baseline gap-4">
                    <dt className="display w-20 shrink-0 text-4xl text-crimson-500">
                      {n}
                    </dt>
                    <dd className="text-[0.96rem] leading-snug text-espresso-700/80">
                      {l}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-7 rounded-2xl border border-amber-accent/45 bg-amber-accent/12 p-4 text-[0.85rem] leading-relaxed text-espresso-800">
                <strong>Under clinical review.</strong> The library is complete
                but every exercise is still marked as a draft while it is read
                through and signed off. Nothing here replaces the assessment of
                your own physiotherapist.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------- contact */}
      <section
        id="contact"
        className="relative scroll-mt-24 bg-cream-100 px-5 py-24 sm:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-crimson-600">
                Get in touch
              </p>
              <h2 className="display text-4xl text-espresso-900 sm:text-5xl">
                Questions, corrections, or a clinic that wants in?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-[1.02rem] leading-relaxed text-espresso-700/70">
                If you are a physiotherapist who has spotted something wrong in
                an exercise, please say so — that feedback is worth more than
                anything else on this page.
              </p>
            </div>
          </Reveal>

          <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-3">
            {[
              {
                t: "Email",
                v: "hello@physioflow.pk",
                d: "The fastest way to reach us",
                href: "mailto:hello@physioflow.pk",
              },
              {
                t: "WhatsApp",
                v: "+92 300 0000000",
                d: "Messages only, replies within a day",
                href: null,
              },
              {
                t: "Clinic",
                v: "Lahore, Pakistan",
                d: "Full address to be added",
                href: null,
              },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 0.1}>
                <div className="h-full rounded-[26px] border border-crimson-100 bg-cream-50 p-6 text-center">
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-crimson-600">
                    {c.t}
                  </p>
                  {c.href ? (
                    <a
                      href={c.href}
                      className="mt-2 block text-[1.05rem] font-semibold text-espresso-900 hover:text-crimson-600"
                    >
                      {c.v}
                    </a>
                  ) : (
                    <p className="mt-2 text-[1.05rem] font-semibold text-espresso-900">
                      {c.v}
                    </p>
                  )}
                  <p className="mt-1.5 text-[0.85rem] text-espresso-700/60">
                    {c.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <p className="mx-auto mt-8 max-w-2xl rounded-2xl border border-dashed border-crimson-200 p-4 text-center text-[0.85rem] leading-relaxed text-espresso-700/60">
              These contact details are placeholders — send me the real clinic
              name, address, phone number and email and they will go in
              everywhere at once.
            </p>
          </Reveal>
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
