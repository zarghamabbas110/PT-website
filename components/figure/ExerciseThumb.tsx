"use client";

import { useEffect, useRef, useState } from "react";
import Human3D from "./Human3D";
import type { FigureSpec } from "./PhysioFigure";
import { sampleSequence } from "@/lib/figure";

/* ==========================================================================
   ExerciseThumb — the 3D character on a library card.

   A card cannot simply mount the live 3D figure and leave it there. A browser
   allows only about sixteen WebGL contexts at once, and scrolling a filtered
   library past a few hundred cards would blow through that; past the limit the
   oldest canvases are killed and the grid fills with blank squares.

   So the figure is mounted only while the card is actually on screen and
   unmounted the moment it scrolls away, which bounds the number of live
   canvases to roughly what fits in a window. It holds a still frame until the
   pointer arrives, and plays the movement while hovered.

   `scripts/thumbs.cjs` renders a still per exercise into `public/thumbs`,
   which would be cheaper again. It is not wired in here: a lazily-loaded
   `<img>` below the fold is never fetched, so its `onError` never fires and a
   missing still leaves the card showing nothing at all rather than falling
   back. Wire it in only once the stills are actually committed.
   ========================================================================== */

/** The frame that reads best as a single picture: the end of the movement. */
const POSTER_AT = 100000;

export default function ExerciseThumb({
  spec,
  live,
  className,
}: {
  /** Kept for when pre-rendered stills are wired back in. */
  slug?: string;
  spec: FigureSpec;
  /** True while the card is hovered — plays the movement rather than holding. */
  live?: boolean;
  className?: string;
}) {
  const host = useRef<HTMLDivElement>(null);
  const [onScreen, setOnScreen] = useState(false);

  useEffect(() => {
    const el = host.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => setOnScreen(e.isIntersecting),
      // A margin either side, so a card is ready by the time it is looked at
      // and is released shortly after it leaves.
      { rootMargin: "220px 0px" }
    );
    io.observe(el);
    // The observer can attach before the grid has been laid out, in which case
    // its first callback says "not visible" and the top row stays blank until
    // something scrolls. Check once more after a frame, when the card has a
    // size to measure.
    const raf = requestAnimationFrame(() => {
      const r = el.getBoundingClientRect();
      if (r.height > 0 && r.top < window.innerHeight + 220 && r.bottom > -220) {
        setOnScreen(true);
      }
    });
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, []);

  return (
    <div ref={host} className={className}>
      {onScreen && spec.frames ? (
        <Figure spec={spec} playing={Boolean(live)} />
      ) : (
        <Placeholder />
      )}
    </div>
  );
}

function Figure({ spec, playing }: { spec: FigureSpec; playing: boolean }) {
  const [ms, setMs] = useState(POSTER_AT);

  useEffect(() => {
    if (!playing) {
      setMs(POSTER_AT);
      return;
    }
    // A card-sized figure does not need sixty frames a second; twenty is
    // indistinguishable at this size and leaves the grid responsive.
    const t0 = performance.now();
    const id = setInterval(() => setMs(performance.now() - t0), 50);
    return () => clearInterval(id);
  }, [playing]);

  const { pose } = sampleSequence(spec.frames!, ms);
  return (
    <Human3D
      pose={pose}
      view={spec.view === "front" ? "front" : "side"}
      props={spec.props}
      className="h-full w-full"
    />
  );
}

function Placeholder() {
  return (
    <div className="grid h-full w-full place-items-center bg-gradient-to-b from-crimson-50 to-cream-100">
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="5" r="2.6" stroke="#cf3a26" strokeWidth="1.5" opacity="0.45" />
        <path
          d="M12 8v6m0 0-3 5m3-5 3 5M7.5 10.5h9"
          stroke="#cf3a26"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.45"
        />
      </svg>
    </div>
  );
}
