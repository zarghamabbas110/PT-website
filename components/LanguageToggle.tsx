"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";

/**
 * English / Urdu switch. Kept deliberately prominent — for many patients the
 * Urdu version is the only one they can act on.
 */
export default function LanguageToggle({ dark = false }: { dark?: boolean }) {
  const { lang, setLang } = useLang();

  return (
    <div
      role="group"
      aria-label="Language"
      className={`relative inline-flex items-center rounded-full p-1 ${
        dark ? "bg-cream-50/15 ring-1 ring-cream-50/25" : "bg-crimson-50 ring-1 ring-crimson-200"
      }`}
    >
      {(["en", "ur"] as const).map((code) => {
        const active = lang === code;
        return (
          <button
            key={code}
            onClick={() => setLang(code)}
            aria-pressed={active}
            className={`relative z-10 rounded-full px-3.5 py-1.5 text-[0.82rem] font-bold transition-colors duration-300 ${
              active
                ? "text-cream-50"
                : dark
                  ? "text-cream-50/70 hover:text-cream-50"
                  : "text-crimson-700/70 hover:text-crimson-700"
            }`}
          >
            {active && (
              <motion.span
                layoutId="lang-pill"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                className="absolute inset-0 -z-10 rounded-full bg-crimson-500"
              />
            )}
            {code === "en" ? "EN" : "اردو"}
          </button>
        );
      })}
    </div>
  );
}
