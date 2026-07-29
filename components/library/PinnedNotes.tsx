"use client";

import { motion } from "framer-motion";

/* ==========================================================================
   PinnedNotes — the special instructions rendered as notes pinned to a board,
   from the reference image. Each note carries a slight, stable tilt and a pin
   head, and lifts under the cursor.
   ========================================================================== */

const TINTS = [
  { bg: "#fdeee6", pin: "#e2503b" },
  { bg: "#e8eefb", pin: "#4a63d8" },
  { bg: "#f3e9fb", pin: "#8b5cd6" },
  { bg: "#fdf3e0", pin: "#f2a03d" },
  { bg: "#e6f4f1", pin: "#14676b" },
];

/** Deterministic tilt so notes do not jump around between renders. */
const TILTS = [-2.4, 1.8, -1.2, 2.6, -2, 1.4];

export default function PinnedNotes({
  notes,
  rtl = false,
}: {
  notes: string[];
  rtl?: boolean;
}) {
  return (
    <div className="relative">
      {/* faint ruled board behind the notes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[26px] opacity-[0.5]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(90,30,20,0.06) 0 1px, transparent 1px 34px)",
        }}
      />

      <ul className="relative space-y-5 py-3">
        {notes.map((note, i) => {
          const tint = TINTS[i % TINTS.length];
          const tilt = TILTS[i % TILTS.length];

          return (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 24, rotate: tilt * 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: tilt }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                delay: i * 0.09,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ rotate: 0, y: -5, scale: 1.02 }}
              className="relative list-none rounded-[18px] bg-cream-50 p-1.5 shadow-[0_10px_28px_rgba(90,30,20,0.16)]"
              style={{ transformOrigin: "center top" }}
            >
              {/* pin head */}
              <span
                aria-hidden="true"
                className="absolute left-1/2 top-0 z-10 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-md"
                style={{
                  background: `radial-gradient(circle at 33% 30%, #ffffffcc, ${tint.pin} 62%)`,
                }}
              />
              <div
                className="rounded-[13px] px-5 py-4"
                style={{ background: tint.bg }}
                dir={rtl ? "rtl" : "ltr"}
              >
                <p
                  className={`text-[0.94rem] leading-relaxed text-espresso-800 ${
                    rtl ? "text-right" : ""
                  }`}
                  style={rtl ? { lineHeight: 2.1 } : undefined}
                >
                  {note}
                </p>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
