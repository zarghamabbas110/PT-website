"use client";

import Link from "next/link";
import { useState } from "react";
import { addRequest } from "@/lib/session";
import { Field } from "./ClinicianLogin";

/* What the owner needs in front of him before he issues an account: enough to
   tell a registered physiotherapist from anyone else, and enough to contact
   them. Nothing here is a payment detail — that step belongs to a payment
   provider, never to this form. */

const EMPTY = {
  fullName: "",
  email: "",
  phone: "",
  clinic: "",
  city: "",
  registration: "",
  qualification: "",
  years: "",
  note: "",
};

export default function ClinicianRegister() {
  const [f, setF] = useState(EMPTY);
  const [sent, setSent] = useState<string | null>(null);
  const set = (k: keyof typeof EMPTY) => (v: string) => setF((p) => ({ ...p, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const row = addRequest(f);
    setSent(row.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (sent) {
    return (
      <main className="min-h-screen bg-cream-100 px-5 pb-24 pt-32 sm:px-8">
        <div className="mx-auto max-w-lg text-center">
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-crimson-500 text-3xl text-cream-50">
            ✓
          </span>
          <h1 className="display mt-6 text-4xl text-espresso-900">
            Your request is in.
          </h1>
          <p className="mt-4 text-[1.02rem] leading-relaxed text-espresso-700/80">
            Reference <strong className="text-espresso-900">{sent}</strong>. The
            administrator checks each registration by hand. Once your details
            and payment are confirmed you will be sent an access code for the
            email you gave.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/clinician/login"
              className="rounded-full bg-espresso-900 px-6 py-3 font-semibold text-cream-50 hover:bg-crimson-600"
            >
              Back to sign in
            </Link>
            <Link
              href="/patient"
              className="rounded-full bg-cream-50 px-6 py-3 font-semibold text-espresso-800 ring-1 ring-crimson-200 hover:ring-crimson-400"
            >
              Look around meanwhile
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-cream-100 px-5 pb-24 pt-32 sm:px-8">
      <div className="mx-auto max-w-xl">
        <Link
          href="/clinician/login"
          className="text-[0.9rem] font-semibold text-crimson-700 hover:text-crimson-800"
        >
          ← Back to sign in
        </Link>
        <p className="mt-6 mb-3 text-xs font-bold uppercase tracking-[0.2em] text-crimson-600">
          For physiotherapists
        </p>
        <h1 className="display text-4xl text-espresso-900 sm:text-5xl">
          Request an account.
        </h1>
        <p className="mt-4 text-[1rem] leading-relaxed text-espresso-700/75">
          Accounts are issued by hand. Fill this in, and once your registration
          and payment are confirmed you will receive an access code by email.
        </p>

        <form
          onSubmit={submit}
          className="mt-8 space-y-4 rounded-[26px] border border-crimson-100 bg-cream-50 p-7"
        >
          <Field label="Full name" value={f.fullName} onChange={set("fullName")} required />
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Email" type="email" value={f.email} onChange={set("email")} required />
            <Field label="Phone" value={f.phone} onChange={set("phone")} placeholder="+92…" required />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Clinic or hospital" value={f.clinic} onChange={set("clinic")} required />
            <Field label="City" value={f.city} onChange={set("city")} required />
          </div>
          <Field
            label="Registration number"
            value={f.registration}
            onChange={set("registration")}
            hint="Your licence or council registration number"
            required
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              label="Qualification"
              value={f.qualification}
              onChange={set("qualification")}
              placeholder="DPT, MSPT…"
              required
            />
            <Field
              label="Years in practice"
              value={f.years}
              onChange={set("years")}
              type="number"
              required
            />
          </div>
          <Field
            label="Anything else"
            value={f.note}
            onChange={set("note")}
            textarea
            hint="Optional — how you intend to use the library"
          />

          <button
            type="submit"
            className="w-full rounded-2xl bg-espresso-900 px-6 py-4 font-semibold text-cream-50 transition-colors hover:bg-crimson-600"
          >
            Send for approval
          </button>
          <p className="text-center text-[0.78rem] text-espresso-700/55">
            No payment is taken on this form.
          </p>
        </form>

        <p className="mt-8 rounded-2xl border border-amber-accent/45 bg-amber-accent/12 p-4 text-[0.82rem] leading-relaxed text-espresso-800">
          <strong>Where this goes for now.</strong> The request is stored in
          this browser, so it reaches the administrator only if he opens the
          admin page on the same machine. Sending it to a real inbox or database
          needs a server, which is the next piece of work — and it must be in
          place before this form is shown to anyone outside.
        </p>
      </div>
    </main>
  );
}
