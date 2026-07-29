"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * A closed-by-default section. The detail a patient rarely needs — the full
 * step list, mistakes, precautions, contraindications — lives in these, so the
 * page opens with only what is needed to actually do the exercise.
 */
export default function Collapsible({
  title,
  count,
  tone = "plain",
  defaultOpen = false,
  children,
}: {
  title: string;
  count?: number;
  tone?: "plain" | "warn" | "danger";
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);

  const skin =
    tone === "danger"
      ? "border-crimson-200 bg-crimson-50/60"
      : tone === "warn"
        ? "border-amber-accent/40 bg-amber-accent/8"
        : "border-crimson-100 bg-cream-50";

  return (
    <div className={`overflow-hidden rounded-[22px] border ${skin}`}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
      >
        <span className="flex items-center gap-2.5">
          <span className="text-[0.94rem] font-bold text-espresso-900">
            {title}
          </span>
          {typeof count === "number" && (
            <span className="rounded-full bg-crimson-100 px-2 py-0.5 text-[0.68rem] font-bold text-crimson-700">
              {count}
            </span>
          )}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 text-crimson-600"
          aria-hidden="true"
        >
          ▾
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="px-6 pb-6">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
