"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

/* ==========================================================================
   Bilingual support — English baseline, Urdu on demand.

   Urdu is right-to-left, so switching language flips text direction as well
   as content. Only patient-facing text is translated; anatomical and clinical
   taxonomy (muscle names, joint names) stays in English, which is how it is
   taught and recorded in Pakistani clinical practice.
   ========================================================================== */

export type Lang = "en" | "ur";

/** A string that exists in both languages. */
export type Bi = { en: string; ur: string };
export type BiList = { en: string[]; ur: string[] };

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  /** Pick the active language out of a bilingual field. */
  t: (v: Bi) => string;
  tl: (v: BiList) => string[];
  dir: "ltr" | "rtl";
};

const LanguageContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "physioflow.lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // Restore the visitor's previous choice.
  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "ur" || saved === "en") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    window.localStorage.setItem(STORAGE_KEY, l);
  };

  const value = useMemo<Ctx>(
    () => ({
      lang,
      setLang,
      t: (v) => (lang === "ur" ? v.ur : v.en),
      tl: (v) => (lang === "ur" ? v.ur : v.en),
      dir: lang === "ur" ? "rtl" : "ltr",
    }),
    [lang]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLang(): Ctx {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside a LanguageProvider");
  return ctx;
}

/* -------------------------------------------------------- interface chrome */

const UI = {
  language: { en: "Language", ur: "زبان" },
  english: { en: "English", ur: "انگریزی" },
  urdu: { en: "اردو", ur: "اردو" },
  startingPosition: { en: "Starting position", ur: "ابتدائی پوزیشن" },
  steps: { en: "How to perform", ur: "طریقہ کار" },
  howToDoIt: { en: "How to do it", ur: "کیسے کریں" },
  fullSteps: { en: "Full step-by-step detail", ur: "مکمل تفصیلی طریقہ" },
  clinicalDetail: { en: "Clinical detail", ur: "طبی تفصیل" },
  specialInstructions: { en: "Special instructions", ur: "خصوصی ہدایات" },
  commonMistakes: { en: "Common mistakes", ur: "عام غلطیاں" },
  safety: { en: "Safety precautions", ur: "احتیاطی تدابیر" },
  contraindications: { en: "Contraindications", ur: "ممنوعات" },
  purpose: { en: "Purpose", ur: "مقصد" },
  sets: { en: "Sets", ur: "سیٹ" },
  reps: { en: "Repetitions", ur: "دہرائی" },
  hold: { en: "Hold", ur: "دورانیہ" },
  frequency: { en: "Frequency", ur: "تعدد" },
  muscles: { en: "Muscles targeted", ur: "ہدف عضلات" },
  joint: { en: "Joint", ur: "جوڑ" },
  equipment: { en: "Equipment", ur: "سامان" },
  conditions: { en: "Indicated conditions", ur: "متعلقہ حالات" },
  progressTo: { en: "Progress to", ur: "اگلا مرحلہ" },
  regressTo: { en: "Regress to", ur: "آسان متبادل" },
  downloadPdf: { en: "Download as PDF", ur: "پی ڈی ایف ڈاؤن لوڈ کریں" },
  backToLibrary: { en: "Back to library", ur: "لائبریری پر واپس" },
  awaitingReview: {
    en: "Awaiting clinical review",
    ur: "طبی جائزہ زیرِ التوا",
  },
  none: { en: "None", ur: "کوئی نہیں" },
} as const;

export type UiKey = keyof typeof UI;

/** Interface label lookup in the active language. */
export function useUi() {
  const { lang } = useLang();
  return (key: UiKey) => UI[key][lang];
}
