import Link from "next/link";
import EntryGate from "@/components/home/EntryGate";

export const metadata = {
  title: "PhysioFlow — Clinical Exercise Library",
  description:
    "A bilingual clinical exercise library. Patients follow a clear, animated programme; physiotherapists prescribe from 300 structured exercises.",
};

/**
 * The front door. Two ways in and nothing else to read — a patient looking for
 * their exercises and a physiotherapist looking for a prescribing tool want
 * completely different things from this site, and asking once is kinder than
 * making both of them wade through the other's material.
 */
export default function GatePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-crimson-500">
      {/* the same carved paper field as the rest of the site, kept low so no
          line of type is ever crossed by an edge */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <svg
          viewBox="0 0 1200 900"
          preserveAspectRatio="xMidYMid slice"
          className="h-full w-full"
        >
          <path
            className="paper-edge"
            fill="#cf3a26"
            d="M-40,560 C180,470 340,690 560,614 C780,538 900,706 1240,596 L1240,960 L-40,960 Z"
          />
          <path
            className="paper-edge"
            fill="#f5ebe2"
            d="M-40,716 C200,632 360,842 600,770 C840,698 980,856 1240,760 L1240,960 L-40,960 Z"
          />
          <path
            className="paper-edge"
            fill="#fbf6f1"
            d="M-40,842 C220,772 380,946 640,880 C900,814 1020,942 1240,864 L1240,960 L-40,960 Z"
          />
        </svg>
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-5 py-16 sm:px-8">
        <Link href="/" className="mb-8 flex items-center gap-2.5">
          <span className="grid h-11 w-11 place-items-center rounded-[15px] bg-cream-50 text-crimson-600">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 14c3.5 0 3.5-6 7-6s3.5 8 7 8 2-4 2-4"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="display text-[1.7rem] text-cream-50">
            Physio<span className="text-espresso-900">Flow</span>
          </span>
        </Link>

        <h1 className="display max-w-3xl text-center text-[2.6rem] leading-[1.02] text-cream-50 sm:text-6xl">
          Movement, made{" "}
          <span className="text-amber-accent">understandable.</span>
        </h1>

        <p className="mt-6 max-w-xl text-center text-[1.05rem] leading-relaxed text-cream-50/90">
          Three hundred physiotherapy exercises, each one animated on a real
          three-dimensional body and written in both English and Urdu — the
          clinical detail a physiotherapist needs, and the plain words a patient
          deserves.
        </p>

        <p className="mt-9 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-cream-50/70">
          Who is visiting today?
        </p>

        <EntryGate />

        <p className="mt-10 max-w-lg text-center text-[0.78rem] leading-relaxed text-cream-50/60">
          The exercises here are general educational information and are not a
          substitute for individual assessment, diagnosis or treatment.
        </p>
      </div>
    </main>
  );
}
