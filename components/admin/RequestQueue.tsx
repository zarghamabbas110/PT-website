"use client";

import { useEffect, useState } from "react";
import {
  listRequests,
  makeLoginCode,
  saveRequests,
  type AccessRequest,
} from "@/lib/session";

/* Who has asked for an account, and what the owner decides. Approving mints
   the access code the clinician then signs in with — the code is shown once
   here and kept, because it has to be read out or emailed by hand until there
   is a server that can send it. */

export default function RequestQueue() {
  const [rows, setRows] = useState<AccessRequest[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setRows(listRequests());
    setReady(true);
  }, []);

  const update = (id: string, patch: Partial<AccessRequest>) => {
    setRows((prev) => {
      const next = prev.map((r) => (r.id === id ? { ...r, ...patch } : r));
      saveRequests(next);
      return next;
    });
  };

  if (!ready) return null;

  const pending = rows.filter((r) => r.status === "pending");

  return (
    <div>
      <div className="mb-6 rounded-[26px] border border-crimson-100 bg-cream-50 p-5">
        <p className="text-[1.05rem] font-bold text-espresso-900">
          {pending.length} waiting · {rows.length} in total
        </p>
        <p className="mt-1 text-[0.88rem] leading-relaxed text-espresso-700/70">
          Confirm the registration number and that payment has arrived before
          approving. Approving produces an access code — send it to the email on
          the request.
        </p>
      </div>

      {rows.length === 0 && (
        <div className="rounded-[26px] border border-dashed border-crimson-200 py-20 text-center">
          <p className="text-[1.05rem] font-semibold text-espresso-900">
            Nobody has asked yet.
          </p>
          <p className="mx-auto mt-2 max-w-md text-[0.9rem] leading-relaxed text-espresso-700/60">
            Requests are held in this browser only, so a request sent from
            another computer will not appear here. That is what the server work
            fixes.
          </p>
        </div>
      )}

      <div className="space-y-4">
        {rows.map((r) => (
          <div
            key={r.id}
            className={`rounded-[26px] border bg-cream-50 p-6 ${
              r.status === "approved"
                ? "border-green-600/30"
                : r.status === "declined"
                  ? "border-espresso-700/20 opacity-70"
                  : "border-crimson-200"
            }`}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <div>
                <h3 className="text-[1.15rem] font-bold text-espresso-900">
                  {r.fullName}
                </h3>
                <p className="text-[0.88rem] text-espresso-700/70">
                  {r.qualification} · {r.years} years · {r.clinic}, {r.city}
                </p>
              </div>
              <span
                className={`rounded-full px-3 py-1 text-[0.72rem] font-bold uppercase tracking-wider ${
                  r.status === "approved"
                    ? "bg-green-600 text-white"
                    : r.status === "declined"
                      ? "bg-espresso-700/20 text-espresso-800"
                      : "bg-amber-accent text-espresso-900"
                }`}
              >
                {r.status}
              </span>
            </div>

            <dl className="mt-4 grid gap-x-6 gap-y-2 text-[0.88rem] sm:grid-cols-2">
              <Row k="Email" v={r.email} />
              <Row k="Phone" v={r.phone} />
              <Row k="Registration no." v={r.registration} />
              <Row k="Requested" v={new Date(r.requestedOn).toLocaleString()} />
            </dl>

            {r.note && (
              <p className="mt-3 rounded-2xl bg-cream-100 px-4 py-3 text-[0.88rem] leading-relaxed text-espresso-700/80">
                {r.note}
              </p>
            )}

            {r.loginCode && (
              <p className="mt-4 rounded-2xl border border-green-600/30 bg-green-50 px-4 py-3">
                <span className="text-[0.72rem] font-bold uppercase tracking-widest text-espresso-700/60">
                  Access code — send this to {r.email}
                </span>
                <span className="mt-1 block font-mono text-[1.3rem] font-bold tracking-widest text-espresso-900">
                  {r.loginCode}
                </span>
              </p>
            )}

            <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-crimson-100 pt-4">
              <label className="flex cursor-pointer items-center gap-2 text-[0.85rem] font-semibold text-espresso-800">
                <input
                  type="checkbox"
                  checked={Boolean(r.paymentSeen)}
                  onChange={(e) => update(r.id, { paymentSeen: e.target.checked })}
                  className="accent-crimson-500"
                />
                Payment confirmed
              </label>

              {r.status !== "approved" && (
                <button
                  onClick={() =>
                    update(r.id, {
                      status: "approved",
                      loginCode: r.loginCode ?? makeLoginCode(),
                    })
                  }
                  className="rounded-full bg-green-600 px-5 py-2 text-[0.85rem] font-bold text-white hover:bg-green-700"
                >
                  Approve &amp; make a code
                </button>
              )}
              {r.status !== "declined" && (
                <button
                  onClick={() => update(r.id, { status: "declined" })}
                  className="rounded-full bg-cream-100 px-5 py-2 text-[0.85rem] font-bold text-espresso-800 ring-1 ring-crimson-200 hover:ring-crimson-400"
                >
                  Decline
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex gap-2">
      <dt className="shrink-0 font-semibold text-espresso-700/55">{k}</dt>
      <dd className="text-espresso-900">{v}</dd>
    </div>
  );
}
