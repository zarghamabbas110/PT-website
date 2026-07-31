"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { currentClinician, signIn, signOut, setRole, type ClinicianSession } from "@/lib/session";

export default function ClinicianLogin() {
  const router = useRouter();
  const [session, setSession] = useState<ClinicianSession | null>(null);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setRole("clinician");
    setSession(currentClinician());
    setChecked(true);
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const s = signIn(email, code);
    if (!s) {
      setError(
        "That email and access code do not match an approved account. If your request is still with the administrator you will not be able to sign in yet."
      );
      return;
    }
    setSession(s);
    router.push("/exercises");
  };

  return (
    <main className="min-h-screen bg-cream-100 px-5 pb-24 pt-32 sm:px-8">
      <div className="mx-auto max-w-md">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-crimson-600">
          For physiotherapists
        </p>
        <h1 className="display text-4xl text-espresso-900 sm:text-5xl">
          {session ? "You are signed in." : "Sign in."}
        </h1>

        {checked && session ? (
          <div className="mt-8 rounded-[26px] border border-crimson-100 bg-cream-50 p-7">
            <p className="text-[1.02rem] text-espresso-800">
              Signed in as <strong>{session.name}</strong>
            </p>
            <p className="mt-1 text-[0.9rem] text-espresso-700/70">
              {session.email}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/exercises"
                className="rounded-full bg-espresso-900 px-6 py-3 font-semibold text-cream-50 hover:bg-crimson-600"
              >
                Open the library →
              </Link>
              <Link
                href="/clinician/patients"
                className="rounded-full bg-crimson-500 px-6 py-3 font-semibold text-cream-50 hover:bg-crimson-600"
              >
                My patients →
              </Link>
              <button
                onClick={() => {
                  signOut();
                  setSession(null);
                }}
                className="rounded-full bg-cream-100 px-6 py-3 font-semibold text-espresso-800 ring-1 ring-crimson-200 hover:ring-crimson-400"
              >
                Sign out
              </button>
            </div>
          </div>
        ) : (
          <>
            <p className="mt-4 text-[1rem] leading-relaxed text-espresso-700/75">
              Accounts are issued by hand after the administrator has checked
              your registration details. Sign in with the email you registered
              and the access code you were sent.
            </p>

            <form
              onSubmit={submit}
              className="mt-8 space-y-4 rounded-[26px] border border-crimson-100 bg-cream-50 p-7"
            >
              <Field
                label="Email"
                type="email"
                value={email}
                onChange={setEmail}
                placeholder="you@clinic.pk"
                required
              />
              <Field
                label="Access code"
                value={code}
                onChange={setCode}
                placeholder="XXXX-XXXX"
                required
              />

              {error && (
                <p className="rounded-2xl border border-crimson-200 bg-crimson-50 px-4 py-3 text-[0.88rem] leading-relaxed text-crimson-800">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="w-full rounded-2xl bg-espresso-900 px-6 py-4 font-semibold text-cream-50 transition-colors hover:bg-crimson-600"
              >
                Sign in
              </button>
            </form>

            <div className="mt-6 rounded-[26px] border border-dashed border-crimson-200 p-6 text-center">
              <p className="text-[0.95rem] text-espresso-800">
                No account yet?
              </p>
              <Link
                href="/clinician/register"
                className="mt-3 inline-block rounded-full bg-crimson-500 px-6 py-3 font-semibold text-cream-50 hover:bg-crimson-600"
              >
                Request access →
              </Link>
            </div>
          </>
        )}

        <p className="mt-8 rounded-2xl border border-amber-accent/45 bg-amber-accent/12 p-4 text-[0.82rem] leading-relaxed text-espresso-800">
          <strong>Not yet a real login.</strong> Accounts, codes and approvals
          are held in this browser only, so this page shows the flow working but
          protects nothing. A real server with a database and hashed passwords
          has to be in place before any account holds patient information or any
          payment is taken.
        </p>
      </div>
    </main>
  );
}

export function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  required,
  hint,
  textarea,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
  hint?: string;
  textarea?: boolean;
}) {
  const cls =
    "mt-1.5 w-full rounded-2xl border border-crimson-200 bg-cream-100 px-4 py-3 text-[0.98rem] text-espresso-900 outline-none transition-colors placeholder:text-espresso-700/35 focus:border-crimson-400";
  return (
    <label className="block">
      <span className="text-[0.8rem] font-bold uppercase tracking-wider text-espresso-700/70">
        {label}
        {required && <span className="text-crimson-600"> *</span>}
      </span>
      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          rows={3}
          className={cls}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          className={cls}
        />
      )}
      {hint && (
        <span className="mt-1 block text-[0.78rem] text-espresso-700/55">
          {hint}
        </span>
      )}
    </label>
  );
}
