"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Scroll-reveal wrapper: content rises and fades into place the first time it
 * enters the viewport. Framer Motion respects prefers-reduced-motion, so
 * visitors who ask for less movement simply see the content appear.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 34,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
