"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  addPatient,
  currentClinician,
  listPatients,
  removePatient,
  updatePatient,
  type Assignment,
  type PatientAccount,
} from "@/lib/session";
import { BODY_REGIONS, EXERCISES, hasMovement } from "@/data/exercises";
import { Field } from "./ClinicianLogin";

/* ==========================================================================
   PatientManager — hand a patient their exercises without printing anything.

   Create a login, tick the exercises, set the dosage per exercise, and the
   patient signs in with a code and sees exactly those, moving figure and all.
   ========================================================================== */

export default function PatientManager() {
  const [rows, setRows] = useState<PatientAccount[]>([]);
  const [me, setMe] = useState<string | null>(null);
  const [ready, setReady] = useState(false);
  const [openId, setOpenId] = useState<string | null>(null);
  const [adding, setAdding] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", diagnosis: "" });

  useEffect(() => {
    const c = currentClinician();
    setMe(c?.email ?? null);
    setRows(listPatients());
    setReady(true);
  }, []);

  const mine = rows.filter((r) => !me || r.clinicianEmail === me);

  const refresh = () => setRows(listPatients());

  if (!ready) return null;

  if (!me) {
    return (
      <main className="min-h-screen bg-cream-100 px-5 pb-24 pt-32 sm:px-8">
        <div className="mx-auto max-w-md text-center">
          <h1 className="display text-4xl text-espresso-900">Sign in first.</h1>
          <p className="mt-4 text-[1rem] leading-relaxed text-espresso-700/75">
            Patient programmes belong to the physiotherapist who set them, so
            this page needs you signed in.
          </p>
          <Link
            href="/clinician/login"
            className="mt-6 inline-block rounded-full bg-espresso-900 px-6 py-3 font-semibold text-cream-50 hover:bg-crimson-600"
          >
            Go to sign in
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-cream-100 px-5 pb-24 pt-32 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-crimson-600">
              For physiotherapists
            </p>
            <h1 className="display text-4xl text-espresso-900 sm:text-5xl">
              My patients
            </h1>
            <p className="mt-3 max-w-xl text-[1rem] leading-relaxed text-espresso-700/75">
              Give a patient a login and tick the exercises they are to do. They
              sign in with the code and see those exercises only — with the
              moving figure, which a printed sheet cannot show them.
            </p>
          </div>
          <button
            onClick={() => setAdding((v) => !v)}
            className="rounded-full bg-crimson-500 px-6 py-3 font-semibold text-cream-50 hover:bg-crimson-600"
          >
            {adding ? "Cancel" : "+ New patient"}
          </button>
        </div>

        {adding && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const p = addPatient(form.name, form.phone, form.diagnosis, me);
              setForm({ name: "", phone: "", diagnosis: "" });
              setAdding(false);
              refresh();
              setOpenId(p.id);
            }}
            className="mb-8 space-y-4 rounded-[26px] border border-crimson-200 bg-cream-50 p-7"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="Patient name"
                value={form.name}
                onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                required
              />
              <Field
                label="Phone"
                value={form.phone}
                onChange={(v) => setForm((f) => ({ ...f, phone: v }))}
                placeholder="+92…"
              />
            </div>
            <Field
              label="Condition"
              value={form.diagnosis}
              onChange={(v) => setForm((f) => ({ ...f, diagnosis: v }))}
              placeholder="Low back pain, post-ACL, frozen shoulder…"
            />
            <button className="rounded-2xl bg-espresso-900 px-6 py-3.5 font-semibold text-cream-50 hover:bg-crimson-600">
              Create login
            </button>
          </form>
        )}

        {mine.length === 0 && !adding && (
          <div className="rounded-[26px] border border-dashed border-crimson-200 py-20 text-center">
            <p className="text-[1.05rem] font-semibold text-espresso-900">
              No patients yet.
            </p>
            <p className="mx-auto mt-2 max-w-md text-[0.9rem] leading-relaxed text-espresso-700/60">
              Create one and you will get a code to hand over.
            </p>
          </div>
        )}

        <div className="space-y-4">
          {mine.map((p) => (
            <PatientRow
              key={p.id}
              p={p}
              open={openId === p.id}
              onToggle={() => setOpenId(openId === p.id ? null : p.id)}
              onChanged={refresh}
            />
          ))}
        </div>

        <p className="mt-10 rounded-2xl border border-amber-accent/45 bg-amber-accent/12 p-4 text-[0.82rem] leading-relaxed text-espresso-800">
          <strong>Held in this browser only.</strong> A patient can sign in with
          their code on this computer. For a code to work on the patient&rsquo;s
          own phone, the accounts have to live on a server — that is the next
          piece of work, and this screen is built so it will not have to change
          when they do.
        </p>
      </div>
    </main>
  );
}

/* --------------------------------------------------------------- one patient */

function PatientRow({
  p,
  open,
  onToggle,
  onChanged,
}: {
  p: PatientAccount;
  open: boolean;
  onToggle: () => void;
  onChanged: () => void;
}) {
  return (
    <div className="rounded-[26px] border border-crimson-100 bg-cream-50 p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h3 className="text-[1.15rem] font-bold text-espresso-900">{p.name}</h3>
          <p className="text-[0.88rem] text-espresso-700/70">
            {p.diagnosis || "No condition noted"}
            {p.phone && ` · ${p.phone}`}
          </p>
          <p className="mt-2 text-[0.85rem] font-semibold text-crimson-700">
            {p.items.length} exercise{p.items.length === 1 ? "" : "s"} assigned
          </p>
        </div>
        <div className="text-right">
          <p className="text-[0.66rem] font-bold uppercase tracking-widest text-espresso-700/55">
            Their code
          </p>
          <p className="font-mono text-[1.2rem] font-bold tracking-widest text-espresso-900">
            {p.code}
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-3 border-t border-crimson-100 pt-4">
        <button
          onClick={onToggle}
          className="rounded-full bg-espresso-900 px-5 py-2 text-[0.85rem] font-semibold text-cream-50 hover:bg-crimson-600"
        >
          {open ? "Done" : "Choose exercises"}
        </button>
        <button
          onClick={() => {
            if (confirm(`Delete ${p.name} and their programme?`)) {
              removePatient(p.id);
              onChanged();
            }
          }}
          className="rounded-full bg-cream-100 px-5 py-2 text-[0.85rem] font-semibold text-espresso-800 ring-1 ring-crimson-200 hover:ring-crimson-400"
        >
          Delete
        </button>
      </div>

      {open && <Picker p={p} onChanged={onChanged} />}
    </div>
  );
}

/* ------------------------------------------------------------- the picker */

function Picker({ p, onChanged }: { p: PatientAccount; onChanged: () => void }) {
  const [q, setQ] = useState("");
  const [region, setRegion] = useState("All");

  const chosen = useMemo(
    () => new Map(p.items.map((i) => [i.slug, i])),
    [p.items]
  );

  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return EXERCISES.filter((e) => {
      if (region !== "All" && e.bodyRegion !== region) return false;
      if (!needle) return true;
      return (
        e.name.en.toLowerCase().includes(needle) ||
        e.musclesTargeted.join(" ").toLowerCase().includes(needle) ||
        e.conditions.join(" ").toLowerCase().includes(needle)
      );
    }).slice(0, 60);
  }, [q, region]);

  const setItems = (items: Assignment[]) => {
    updatePatient(p.id, { items });
    onChanged();
  };

  const toggle = (slug: string) => {
    if (chosen.has(slug)) {
      setItems(p.items.filter((i) => i.slug !== slug));
    } else {
      setItems([
        ...p.items,
        { slug, sets: "", reps: "", hold: "", frequency: "", note: "" },
      ]);
    }
  };

  const edit = (slug: string, patch: Partial<Assignment>) =>
    setItems(p.items.map((i) => (i.slug === slug ? { ...i, ...patch } : i)));

  return (
    <div className="mt-5 border-t border-crimson-100 pt-5">
      {/* ------------------------------------------------- already assigned */}
      {p.items.length > 0 && (
        <div className="mb-6 space-y-3">
          <h4 className="text-[0.8rem] font-bold uppercase tracking-widest text-espresso-700/60">
            This patient&rsquo;s programme
          </h4>
          {p.items.map((it) => {
            const ex = EXERCISES.find((e) => e.slug === it.slug);
            if (!ex) return null;
            return (
              <div
                key={it.slug}
                className="rounded-2xl border border-crimson-200 bg-cream-100 p-4"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="font-semibold text-espresso-900">{ex.name.en}</p>
                  <button
                    onClick={() => toggle(it.slug)}
                    className="text-[0.82rem] font-semibold text-crimson-700 hover:underline"
                  >
                    remove
                  </button>
                </div>
                <div className="mt-3 grid gap-2 sm:grid-cols-4">
                  {(
                    [
                      ["sets", "Sets", ex.sets],
                      ["reps", "Reps", ex.repetitions],
                      ["hold", "Hold", ex.holdTime],
                      ["frequency", "How often", ex.frequency],
                    ] as [keyof Assignment, string, string][]
                  ).map(([k, label, fallback]) => (
                    <label key={k} className="block">
                      <span className="text-[0.66rem] font-bold uppercase tracking-wider text-espresso-700/55">
                        {label}
                      </span>
                      <input
                        value={it[k] as string}
                        onChange={(e) => edit(it.slug, { [k]: e.target.value })}
                        placeholder={fallback}
                        className="mt-1 w-full rounded-xl border border-crimson-200 bg-cream-50 px-3 py-2 text-[0.88rem] text-espresso-900 outline-none focus:border-crimson-400"
                      />
                    </label>
                  ))}
                </div>
                <input
                  value={it.note}
                  onChange={(e) => edit(it.slug, { note: e.target.value })}
                  placeholder="A note for this patient — optional"
                  className="mt-2 w-full rounded-xl border border-crimson-200 bg-cream-50 px-3 py-2 text-[0.88rem] text-espresso-900 outline-none focus:border-crimson-400"
                />
              </div>
            );
          })}
        </div>
      )}

      {/* ------------------------------------------------------ the library */}
      <h4 className="mb-3 text-[0.8rem] font-bold uppercase tracking-widest text-espresso-700/60">
        Add from the library
      </h4>
      <div className="mb-3 flex flex-wrap gap-2">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search by name, muscle or condition…"
          className="min-w-[220px] flex-1 rounded-full border border-crimson-200 bg-cream-100 px-4 py-2.5 text-[0.9rem] text-espresso-900 outline-none focus:border-crimson-400"
        />
        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="rounded-full border border-crimson-200 bg-cream-100 px-4 py-2.5 text-[0.9rem] font-semibold text-espresso-800 outline-none"
        >
          <option value="All">All regions</option>
          {BODY_REGIONS.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      <div className="max-h-80 space-y-1.5 overflow-y-auto rounded-2xl border border-crimson-100 bg-cream-100 p-3">
        {results.map((ex) => {
          const on = chosen.has(ex.slug);
          return (
            <button
              key={ex.slug}
              onClick={() => toggle(ex.slug)}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left transition-colors ${
                on ? "bg-crimson-500 text-cream-50" : "hover:bg-cream-50"
              }`}
            >
              <span
                className={`grid h-5 w-5 shrink-0 place-items-center rounded-md text-[0.7rem] font-bold ${
                  on ? "bg-cream-50 text-crimson-600" : "ring-1 ring-crimson-300"
                }`}
              >
                {on ? "✓" : ""}
              </span>
              <span className="flex-1 text-[0.9rem] font-medium">
                {ex.name.en}
              </span>
              <span
                className={`text-[0.72rem] ${on ? "text-cream-100/80" : "text-espresso-700/50"}`}
              >
                {ex.bodyRegion}
                {!hasMovement(ex) && " · no animation yet"}
              </span>
            </button>
          );
        })}
        {results.length === 0 && (
          <p className="py-6 text-center text-[0.9rem] text-espresso-700/60">
            Nothing matches that.
          </p>
        )}
      </div>
    </div>
  );
}
