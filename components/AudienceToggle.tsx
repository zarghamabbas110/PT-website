"use client";

import { motion } from "framer-motion";
import { useLang, useUi } from "@/lib/i18n";

/**
 * Patient / Clinician switch. Changes both the palette and how much detail the
 * page shows, so it is deliberately prominent rather than tucked away.
 */
export default function AudienceToggle() {
  const { audience, setAudience } = useLang();
  const ui = useUi();

  const options = [
    { id: "client" as const, label: ui("patientView") },
    { id: "clinician" as const, label: ui("clinicianView") },
  ];

  return (
    <div
      role="group"
      aria-label="View mode"
      className="relative inline-flex items-center rounded-full bg-crimson-50 p-1 ring-1 ring-crimson-200"
    >
      {options.map((o) => {
        const active = audience === o.id;
        return (
          <button
            key={o.id}
            onClick={() => setAudience(o.id)}
            aria-pressed={active}
            className={`relative z-10 rounded-full px-4 py-1.5 text-[0.82rem] font-bold transition-colors duration-300 ${
              active ? "text-cream-50" : "text-crimson-700/70 hover:text-crimson-700"
            }`}
          >
            {active && (
              <motion.span
                layoutId="audience-pill"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                className="absolute inset-0 -z-10 rounded-full bg-crimson-500"
              />
            )}
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
