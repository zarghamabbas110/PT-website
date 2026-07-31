"use client";

/* ==========================================================================
   session.ts — who is using the site, held in the browser.

   IMPORTANT, AND DELIBERATE: none of this is security. Everything here lives
   in the visitor's own browser, so a determined person can grant themselves a
   clinician account with the developer console. That is acceptable for now
   because the site holds no personal data and takes no payments — it exists so
   the *flow* is real and reviewable.

   Before a single rupee is charged this must be replaced by a real server:
   accounts in a database, passwords hashed, sessions signed, and the approval
   queue readable only by the owner. The shape of the data below is kept
   deliberately close to what those tables will hold, so the swap is a rewrite
   of this one file plus the API calls, not of the screens.
   ========================================================================== */

export type Role = "patient" | "clinician";

export type AccessRequest = {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  clinic: string;
  city: string;
  registration: string;
  qualification: string;
  years: string;
  note: string;
  requestedOn: string;
  status: "pending" | "approved" | "declined";
  /** Filled in by the owner when approving; shown once, then remembered. */
  loginCode?: string;
  paymentSeen?: boolean;
};

const ROLE_KEY = "physioflow.role";
const REQ_KEY = "physioflow.accessRequests";
const AUTH_KEY = "physioflow.clinician";
const VERDICT_KEY = "physioflow.reviewVerdicts";

const can = () => typeof window !== "undefined";

/* ------------------------------------------------------------------ role */

export function setRole(role: Role) {
  if (can()) localStorage.setItem(ROLE_KEY, role);
}

export function getRole(): Role | null {
  if (!can()) return null;
  const v = localStorage.getItem(ROLE_KEY);
  return v === "patient" || v === "clinician" ? v : null;
}

/* -------------------------------------------------------- access requests */

export function listRequests(): AccessRequest[] {
  if (!can()) return [];
  try {
    return JSON.parse(localStorage.getItem(REQ_KEY) ?? "[]") as AccessRequest[];
  } catch {
    return [];
  }
}

export function saveRequests(rows: AccessRequest[]) {
  if (can()) localStorage.setItem(REQ_KEY, JSON.stringify(rows));
}

export function addRequest(
  r: Omit<AccessRequest, "id" | "requestedOn" | "status">
): AccessRequest {
  const row: AccessRequest = {
    ...r,
    id: `REQ-${Date.now().toString(36).toUpperCase()}`,
    requestedOn: new Date().toISOString(),
    status: "pending",
  };
  saveRequests([...listRequests(), row]);
  return row;
}

/** A short, readable code the owner hands to an approved clinician. */
export function makeLoginCode(): string {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let out = "";
  for (let i = 0; i < 8; i++) {
    out += alphabet[Math.floor(Math.random() * alphabet.length)];
    if (i === 3) out += "-";
  }
  return out;
}

/* ------------------------------------------------------------ signed in */

export type ClinicianSession = { email: string; name: string; since: string };

export function signIn(email: string, code: string): ClinicianSession | null {
  const row = listRequests().find(
    (r) =>
      r.email.trim().toLowerCase() === email.trim().toLowerCase() &&
      r.status === "approved" &&
      r.loginCode &&
      r.loginCode.replace(/\s/g, "").toUpperCase() ===
        code.replace(/\s/g, "").toUpperCase()
  );
  if (!row) return null;
  const s: ClinicianSession = {
    email: row.email,
    name: row.fullName,
    since: new Date().toISOString(),
  };
  if (can()) localStorage.setItem(AUTH_KEY, JSON.stringify(s));
  return s;
}

export function currentClinician(): ClinicianSession | null {
  if (!can()) return null;
  try {
    const raw = localStorage.getItem(AUTH_KEY);
    return raw ? (JSON.parse(raw) as ClinicianSession) : null;
  } catch {
    return null;
  }
}

export function signOut() {
  if (can()) localStorage.removeItem(AUTH_KEY);
}

/* ------------------------------------------------- the owner's review pass */

export type Verdict = {
  /** Is the written content right? */
  content?: "yes" | "no";
  /** Is the figure showing the right movement? */
  movement?: "yes" | "no";
  note?: string;
};

export function listVerdicts(): Record<string, Verdict> {
  if (!can()) return {};
  try {
    return JSON.parse(localStorage.getItem(VERDICT_KEY) ?? "{}");
  } catch {
    return {};
  }
}

export function saveVerdicts(v: Record<string, Verdict>) {
  if (can()) localStorage.setItem(VERDICT_KEY, JSON.stringify(v));
}
