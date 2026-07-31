"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import AnimatedHuman3D from "@/components/figure/AnimatedHuman3D";
import LanguageToggle from "@/components/LanguageToggle";
import { EXERCISES, hasMovement } from "@/data/exercises";
import {
  currentPatient,
  listPatients,
  patientSignIn,
  patientSignOut,
  type Assignment,
  type PatientAccount,
} from "@/lib/session";
import { useLang, useUi } from "@/lib/i18n";

/* ==========================================================================
   What the patient sees: the exercises their physiotherapist chose, in their
   own language, each with the figure actually performing the movement — and
   the dosage the physiotherapist set for them rather than the library's
   general recommendation.
   ========================================================================== */

export default function ProgrammeView() {
  const [me, setMe] = useState<PatientAccount | null>(null);
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);
  const [ready, setReady] = useState(false);

  const load = () => {
    const s = currentPatient();
    setMe(s ? (listPatients().find((p) => p.id === s.id) ?? null) : null);
  };

  useEffect(() => {
    load();
    setReady(true);
  }, []);

  if (!ready) return null;

  if (!me) {
    return (
      <main className="min-h-screen bg-cream-100 px-5 pb-24 pt-32 sm:px-8">
        <div className="mx-auto max-w-md">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-crimson-600">
            For patients
          </p>
          <h1 className="display text-4xl text-espresso-900 sm:text-5xl">
            Your exercises.
          </h1>
          <p className="mt-4 text-[1rem] leading-relaxed text-espresso-700/75">
            If your physiotherapist has given you a code, enter it here and you
            will see the exercises they chose for you — with a figure showing
            exactly how each one is done.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const s = patientSignIn(code);
              if (!s) {
                setError(true);
                return;
              }
              setError(false);
              load();
            }}
            className="mt-8 space-y-4 rounded-[26px] border border-crimson-100 bg-cream-50 p-7"
          >
            <label className="block">
              <span className="text-[0.8rem] font-bold uppercase tracking-wider text-espresso-700/70">
                Your code
              </span>
              <input
                value={code}
                onChange={(e) => {
                  setCode(e.target.value);
                  setError(false);
                }}
                placeholder="XXXX-XXXX"
                autoFocus
                className="mt-1.5 w-full rounded-2xl border border-crimson-200 bg-cream-100 px-4 py-3 text-center font-mono text-[1.15rem] tracking-widest text-espresso-900 outline-none focus:border-crimson-400"
              />
            </label>
            {error && (
              <p className="rounded-2xl border border-crimson-200 bg-crimson-50 px-4 py-3 text-[0.88rem] text-crimson-800">
                That code was not recognised. Check it with your
                physiotherapist — codes look like ABCD-1234.
              </p>
            )}
            <button className="w-full rounded-2xl bg-espresso-900 px-6 py-4 font-semibold text-cream-50 hover:bg-crimson-600">
              See my exercises
            </button>
          </form>

          <div className="mt-6 rounded-[26px] border border-dashed border-crimson-200 p-6 text-center">
            <p className="text-[0.95rem] text-espresso-800">
              No code? You can still look through everything.
            </p>
            <Link
              href="/exercises"
              className="mt-3 inline-block rounded-full bg-crimson-500 px-6 py-3 font-semibold text-cream-50 hover:bg-crimson-600"
            >
              Browse all exercises →
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return <Programme me={me} onSignOut={() => { patientSignOut(); setMe(null); }} />;
}

function Programme({
  me,
  onSignOut,
}: {
  me: PatientAccount;
  onSignOut: () => void;
}) {
  const { t, dir } = useLang();
  const rtl = dir === "rtl";

  return (
    <main className="min-h-screen bg-cream-100 px-5 pb-24 pt-32 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-crimson-600">
              Your programme
            </p>
            <h1 className="display text-4xl text-espresso-900 sm:text-5xl">
              {me.name}
            </h1>
            {me.diagnosis && (
              <p className="mt-2 text-[0.98rem] text-espresso-700/70">
                {me.diagnosis}
              </p>
            )}
          </div>
          <div className="flex items-center gap-3">
            <LanguageToggle />
            <button
              onClick={onSignOut}
              className="rounded-full bg-cream-50 px-5 py-2.5 text-[0.85rem] font-semibold text-espresso-800 ring-1 ring-crimson-200 hover:ring-crimson-400"
            >
              Sign out
            </button>
          </div>
        </div>

        {me.items.length === 0 ? (
          <div className="rounded-[26px] border border-dashed border-crimson-200 py-20 text-center">
            <p className="text-[1.05rem] font-semibold text-espresso-900">
              Your physiotherapist has not added any exercises yet.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {me.items.map((it, i) => (
              <ProgrammeItem key={it.slug} item={it} n={i + 1} rtl={rtl} t={t} dir={dir} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

function ProgrammeItem({
  item,
  n,
  rtl,
  t,
  dir,
}: {
  item: Assignment;
  n: number;
  rtl: boolean;
  t: (b: { en: string; ur: string }) => string;
  dir: string;
}) {
  const ui = useUi();
  const ex = EXERCISES.find((e) => e.slug === item.slug);
  const { tl } = useLang();
  if (!ex) return null;

  const moves = hasMovement(ex);

  return (
    <div className="grid gap-6 rounded-[26px] border border-crimson-100 bg-cream-50 p-6 md:grid-cols-[minmax(0,320px)_1fr]">
      <div className="overflow-hidden rounded-[20px] bg-gradient-to-b from-crimson-50 to-cream-100">
        {moves ? (
          <AnimatedHuman3D spec={ex.figure} className="w-full" />
        ) : (
          <NoAnimation />
        )}
      </div>

      <div dir={dir} className={rtl ? "text-right" : ""}>
        <p className="text-[0.7rem] font-bold uppercase tracking-widest text-crimson-600">
          {n}. {ex.bodyRegion}
        </p>
        <h2 className="mt-1 text-[1.25rem] font-bold leading-snug text-espresso-900">
          {t(ex.name)}
        </h2>

        <div className={`mt-3 flex flex-wrap gap-2 ${rtl ? "justify-end" : ""}`} dir="ltr">
          {[
            [ui("sets"), item.sets || ex.sets],
            [ui("reps"), item.reps || ex.repetitions],
            [ui("hold"), item.hold || ex.holdTime],
            [ui("frequency"), item.frequency || ex.frequency],
          ].map(([k, v]) => (
            <span
              key={k}
              className="rounded-full bg-crimson-50 px-3 py-1.5 text-[0.78rem] font-semibold text-crimson-800"
            >
              {k}: {v}
            </span>
          ))}
        </div>

        {item.note && (
          <p className="mt-3 rounded-2xl border border-amber-accent/45 bg-amber-accent/12 px-4 py-3 text-[0.9rem] leading-relaxed text-espresso-800">
            <strong>From your physiotherapist:</strong> {item.note}
          </p>
        )}

        <ol className="mt-4 space-y-2.5">
          {tl(ex.quickSteps).map((s, i) => (
            <li
              key={i}
              className={`flex gap-3 ${rtl ? "flex-row-reverse" : ""}`}
            >
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-crimson-500 text-[0.72rem] font-bold text-cream-50">
                {i + 1}
              </span>
              <span
                className={`text-[0.96rem] text-espresso-800 ${rtl ? "leading-[2]" : "leading-relaxed"}`}
              >
                {s}
              </span>
            </li>
          ))}
        </ol>

        <Link
          href={`/exercises/${ex.slug}`}
          className="mt-4 inline-block text-[0.88rem] font-semibold text-crimson-700 hover:underline"
        >
          Full instructions →
        </Link>
      </div>
    </div>
  );
}

/** Shown in place of the figure when the movement cannot be drawn yet. */
export function NoAnimation() {
  return (
    <div className="grid h-full min-h-[240px] place-items-center p-6 text-center">
      <div>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="mx-auto" aria-hidden>
          <circle cx="12" cy="12" r="9" stroke="#cf3a26" strokeWidth="1.6" opacity="0.5" />
          <path d="M12 7.5v5m0 3.2v.2" stroke="#cf3a26" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        <p className="mt-3 text-[0.9rem] font-semibold text-espresso-800">
          Animation not available yet
        </p>
        <p className="mx-auto mt-1 max-w-[16rem] text-[0.82rem] leading-relaxed text-espresso-700/65">
          This movement is one the figure cannot show correctly yet. The written
          instructions below are complete.
        </p>
      </div>
    </div>
  );
}
