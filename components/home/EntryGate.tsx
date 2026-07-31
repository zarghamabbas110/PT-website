"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { setRole } from "@/lib/session";

/* The two doors. Remembering the choice is what lets the header show a patient
   "Exercises" and a clinician "My programmes" without asking again. */

const DOORS = [
  {
    role: "patient" as const,
    href: "/patient",
    title: "I am a patient",
    sub: "or looking after someone",
    body: "See the exercises your physiotherapist has described, with a moving figure showing exactly what to do — in English or Urdu.",
    cta: "Show me the exercises",
  },
  {
    role: "clinician" as const,
    href: "/clinician/login",
    title: "I am a physiotherapist",
    sub: "clinic or hospital practice",
    body: "The full clinical record for every exercise — contraindications, progressions, dosage — and patient handouts carrying your own clinic name.",
    cta: "Sign in or request access",
  },
];

export default function EntryGate() {
  return (
    <div className="mt-5 grid w-full max-w-3xl gap-5 sm:grid-cols-2">
      {DOORS.map((d, i) => (
        <motion.div
          key={d.role}
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            href={d.href}
            onClick={() => setRole(d.role)}
            className="group flex h-full flex-col rounded-[28px] bg-cream-50 p-7 shadow-[0_20px_60px_rgba(90,30,20,0.28)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_70px_rgba(90,30,20,0.36)]"
          >
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-crimson-600">
              {d.sub}
            </p>
            <h2 className="display mt-1.5 text-[1.75rem] leading-tight text-espresso-900">
              {d.title}
            </h2>
            <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-espresso-700/75">
              {d.body}
            </p>
            <span className="mt-6 inline-flex items-center gap-1.5 font-semibold text-crimson-600">
              {d.cta}
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
