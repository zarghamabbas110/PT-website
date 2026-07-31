"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const LINKS = [
  { href: "/patient", label: "Home" },
  { href: "/exercises", label: "Exercise Library" },
  { href: "/for-clinicians", label: "For Clinicians" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // The patient hero is a solid crimson field, so at the top of that page the
  // header has to invert to stay legible. Every other page starts on cream.
  const onDarkHero = pathname === "/patient" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The front door carries its own mark and two choices; a nav bar over it
  // would offer a way past the question it is asking.
  if (pathname === "/") return null;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream-100/85 shadow-[0_2px_20px_rgba(90,30,20,0.08)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/patient" className="group flex items-center gap-2.5">
          <motion.span
            whileHover={{ rotate: -10, scale: 1.08 }}
            transition={{ type: "spring", stiffness: 400, damping: 14 }}
            className={`grid h-9 w-9 place-items-center rounded-[13px] transition-colors duration-500 ${
              onDarkHero
                ? "bg-cream-50 text-crimson-600"
                : "bg-crimson-500 text-cream-50 shadow-[0_4px_14px_rgba(207,58,38,0.35)]"
            }`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 14c3.5 0 3.5-6 7-6s3.5 8 7 8 2-4 2-4"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
            </svg>
          </motion.span>
          <span
            className={`display text-[1.35rem] transition-colors duration-500 ${
              onDarkHero ? "text-cream-50" : "text-espresso-900"
            }`}
          >
            Physio
            <span className={onDarkHero ? "text-espresso-900" : "text-crimson-600"}>
              Flow
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`group relative text-[0.95rem] font-medium transition-colors duration-500 ${
                onDarkHero ? "text-cream-50" : "text-espresso-800"
              }`}
            >
              {l.label}
              <span
                className={`absolute -bottom-1 left-0 h-[2px] w-0 rounded-full transition-all duration-300 group-hover:w-full ${
                  onDarkHero ? "bg-cream-50" : "bg-crimson-500"
                }`}
              />
            </Link>
          ))}
          <Link
            href="/clinician/login"
            className={`rounded-full px-5 py-2.5 text-[0.9rem] font-semibold transition-all duration-500 ${
              onDarkHero
                ? "bg-cream-50 text-crimson-700 hover:bg-espresso-900 hover:text-cream-50"
                : "bg-espresso-900 text-cream-50 hover:bg-crimson-600 hover:shadow-[0_8px_24px_rgba(207,58,38,0.35)]"
            }`}
          >
            Clinician login
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="grid h-10 w-10 place-items-center md:hidden"
        >
          <span className="space-y-[5px]">
            <span
              className={`block h-[2px] w-6 transition-transform duration-300 ${
                onDarkHero ? "bg-cream-50" : "bg-espresso-900"
              } ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-6 transition-opacity duration-200 ${
                onDarkHero ? "bg-cream-50" : "bg-espresso-900"
              } ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-[2px] w-6 transition-transform duration-300 ${
                onDarkHero ? "bg-cream-50" : "bg-espresso-900"
              } ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-cream-100/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 pb-5">
              {LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 font-medium text-espresso-800 hover:bg-crimson-50"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
