"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import PaperCut from "./home/PaperCut";

export default function SiteFooter() {
  const pathname = usePathname();
  // The front door is a single screen with two choices on it — a footer would
  // add a third way out of a question that should be answered.
  if (pathname === "/") return null;

  return (
    <footer className="relative">
      <PaperCut layers={["#ad2d1d", "#cf3a26", "#241512"]} height={110} />

      <div className="bg-espresso-900 px-5 pb-10 pt-4 text-cream-200 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <span className="display text-2xl text-cream-50">
              Physio<span className="text-crimson-400">Flow</span>
            </span>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream-300/70">
              A clinically structured exercise library for physiotherapists and
              the people they treat.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-bold uppercase tracking-widest text-cream-50">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-cream-300/70">
              <li>
                <Link href="/exercises" className="hover:text-crimson-300">
                  Exercise library
                </Link>
              </li>
              <li>
                <Link href="/for-clinicians" className="hover:text-crimson-300">
                  For clinicians
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-bold uppercase tracking-widest text-cream-50">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-cream-300/70">
              <li>
                <Link href="/patient#about" className="hover:text-crimson-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/patient#contact" className="hover:text-crimson-300">
                  Contact
                </Link>
              </li>
              <li>hello@physioflow.pk</li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-cream-300/15 pt-6">
          <p className="mb-3 text-xs leading-relaxed text-cream-300/50">
            <strong className="text-cream-300/80">Medical disclaimer.</strong>{" "}
            The exercises on this site are general educational information and
            are not a substitute for individual assessment, diagnosis or
            treatment. Consult a qualified physiotherapist or doctor before
            beginning any exercise programme.
          </p>
          <p className="text-xs text-cream-300/40">
            © {new Date().getFullYear()} PhysioFlow.
          </p>
        </div>
      </div>
    </footer>
  );
}
