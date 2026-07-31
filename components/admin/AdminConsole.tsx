"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ReviewConsole from "./ReviewConsole";
import RequestQueue from "./RequestQueue";

/* ==========================================================================
   The owner's back room. Two jobs: work through the exercise library signing
   each one off, and decide who gets an account.

   THE LOCK ON THIS DOOR IS NOT A LOCK. The passphrase below is in the page's
   own JavaScript, which anyone can read. It exists to stop a patient wandering
   in, not to stop anybody who is trying. Nothing behind it is private yet —
   the exercises are public and the account requests never leave this browser.
   The moment either of those stops being true this has to become a real
   server-side login.
   ========================================================================== */

const PASS = "physioflow";
const UNLOCKED = "physioflow.adminUnlocked";

type Tab = "review" | "requests";

export default function AdminConsole() {
  const [unlocked, setUnlocked] = useState(false);
  const [ready, setReady] = useState(false);
  const [entry, setEntry] = useState("");
  const [wrong, setWrong] = useState(false);
  const [tab, setTab] = useState<Tab>("review");

  useEffect(() => {
    setUnlocked(sessionStorage.getItem(UNLOCKED) === "1");
    setReady(true);
  }, []);

  if (!ready) return null;

  if (!unlocked) {
    return (
      <main className="grid min-h-screen place-items-center bg-espresso-900 px-5">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (entry.trim().toLowerCase() === PASS) {
              sessionStorage.setItem(UNLOCKED, "1");
              setUnlocked(true);
            } else setWrong(true);
          }}
          className="w-full max-w-sm rounded-[28px] bg-cream-50 p-8"
        >
          <h1 className="display text-3xl text-espresso-900">Admin</h1>
          <p className="mt-2 text-[0.9rem] leading-relaxed text-espresso-700/70">
            For the owner of the library.
          </p>
          <input
            type="password"
            value={entry}
            onChange={(e) => {
              setEntry(e.target.value);
              setWrong(false);
            }}
            placeholder="Passphrase"
            autoFocus
            className="mt-5 w-full rounded-2xl border border-crimson-200 bg-cream-100 px-4 py-3 text-espresso-900 outline-none focus:border-crimson-400"
          />
          {wrong && (
            <p className="mt-2 text-[0.85rem] text-crimson-700">
              Not that one.
            </p>
          )}
          <button className="mt-4 w-full rounded-2xl bg-espresso-900 px-6 py-3.5 font-semibold text-cream-50 hover:bg-crimson-600">
            Open
          </button>
          <p className="mt-4 text-[0.75rem] leading-relaxed text-espresso-700/55">
            The passphrase is in this page&rsquo;s own code, so treat this as a
            door that is closed, not locked.
          </p>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-cream-100 pb-24 pt-28">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-crimson-600">
              Owner only
            </p>
            <h1 className="display text-4xl text-espresso-900 sm:text-5xl">
              Admin
            </h1>
          </div>
          <Link
            href="/patient"
            className="text-[0.9rem] font-semibold text-crimson-700 hover:text-crimson-800"
          >
            ← Back to the site
          </Link>
        </div>

        <div className="mb-8 flex gap-2">
          {(
            [
              ["review", "Exercise review"],
              ["requests", "Account requests"],
            ] as [Tab, string][]
          ).map(([k, label]) => (
            <button
              key={k}
              onClick={() => setTab(k)}
              className={`rounded-full px-5 py-2.5 text-[0.9rem] font-semibold transition-all ${
                tab === k
                  ? "bg-crimson-500 text-cream-50 shadow-[0_6px_16px_rgba(207,58,38,0.32)]"
                  : "bg-cream-50 text-espresso-700/75 ring-1 ring-crimson-100 hover:ring-crimson-300"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {tab === "review" ? <ReviewConsole /> : <RequestQueue />}
      </div>
    </main>
  );
}
