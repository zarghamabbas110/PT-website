import Link from "next/link";
import Reveal from "@/components/Reveal";
import PaperCut from "@/components/home/PaperCut";

export const metadata = {
  title: "For Clinicians — PhysioFlow",
  description:
    "Prescribing tools, branded patient handouts and the full clinical library for physiotherapists.",
};

const TIERS = [
  {
    name: "Founding Clinician",
    price: "Free",
    note: "First 100 physiotherapists, permanently",
    features: [
      "Full exercise library",
      "Unlimited patient programmes",
      "Branded PDF handouts",
      "Progression and regression chains",
      "Direct input into what gets built next",
    ],
    highlight: true,
  },
  {
    name: "Practice",
    price: "Monthly",
    note: "Price to be set before launch",
    features: [
      "Everything in Founding Clinician",
      "Your clinic logo on every handout",
      "Multiple clinician seats",
      "Patient programme history",
      "Priority support",
    ],
    highlight: false,
  },
];

export default function ForCliniciansPage() {
  return (
    <main className="bg-cream-100">
      <section className="relative overflow-hidden bg-espresso-900 px-5 pb-24 pt-36 sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-crimson-400">
              For physiotherapists
            </p>
            <h1 className="display text-5xl leading-[0.95] text-cream-50 sm:text-7xl">
              Prescribe faster.
              <br />
              <span className="text-crimson-400">Hand over something better.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-[1.08rem] leading-relaxed text-cream-200/70">
              Build a programme from the library, set the dosage for that
              patient, and export a handout carrying your clinic&apos;s name and
              contact details on every page.
            </p>
          </Reveal>
        </div>
      </section>

      <PaperCut layers={["#33201b", "#fbf6f1"]} height={100} />

      <section className="px-5 pb-24 pt-10 sm:px-8">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {TIERS.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.12}>
              <div
                className={`h-full rounded-[30px] p-8 ${
                  tier.highlight
                    ? "bg-crimson-500 text-cream-50 shadow-[0_24px_70px_rgba(207,58,38,0.32)]"
                    : "border border-crimson-100 bg-cream-50 text-espresso-900"
                }`}
              >
                <h2 className="display text-2xl">{tier.name}</h2>
                <p
                  className={`display mt-3 text-5xl ${
                    tier.highlight ? "text-cream-50" : "text-crimson-600"
                  }`}
                >
                  {tier.price}
                </p>
                <p
                  className={`mt-1.5 text-[0.85rem] ${
                    tier.highlight ? "text-cream-100/75" : "text-espresso-700/60"
                  }`}
                >
                  {tier.note}
                </p>

                <ul className="mt-7 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full text-[0.7rem] font-bold ${
                          tier.highlight
                            ? "bg-cream-50 text-crimson-600"
                            : "bg-crimson-100 text-crimson-700"
                        }`}
                      >
                        ✓
                      </span>
                      <span
                        className={`text-[0.94rem] ${
                          tier.highlight
                            ? "text-cream-100/90"
                            : "text-espresso-700/80"
                        }`}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`mt-8 w-full rounded-2xl px-6 py-4 font-semibold transition-transform hover:-translate-y-0.5 ${
                    tier.highlight
                      ? "bg-cream-50 text-crimson-700"
                      : "bg-espresso-900 text-cream-50"
                  }`}
                >
                  Register interest
                </button>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mx-auto mt-10 max-w-5xl rounded-[26px] border border-amber-accent/40 bg-amber-accent/10 p-6">
            <p className="text-[0.9rem] leading-relaxed text-espresso-800">
              <strong>Not yet live.</strong> Accounts, payments and PDF export
              are Phase 3 of the build. This page sets out the intended model so
              the structure can be designed around it now — nothing here takes
              payment or stores personal data yet.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 text-center">
          <Link
            href="/exercises"
            className="rounded-full bg-espresso-900 px-8 py-4 font-semibold text-cream-50 transition-colors hover:bg-crimson-600"
          >
            Browse the library →
          </Link>
        </div>
      </section>
    </main>
  );
}
