/* ==========================================================================
   /palettes — colour options to choose from.

   Each option is shown applied to real pieces of the site (hero, card, chips,
   buttons, pinned note) rather than as bare swatches, because a palette that
   looks good as five squares can still fall apart in use.

   Once one is picked, its values move into the tokens in app/globals.css and
   this page is deleted.
   ========================================================================== */

type Palette = {
  id: string;
  name: string;
  mood: string;
  deep: string;
  primary: string;
  primarySoft: string;
  accent: string;
  surface: string;
  surfaceAlt: string;
  ink: string;
  onDeep: string;
};

const PALETTES: Palette[] = [
  {
    id: "A",
    name: "Deep Teal & Sand",
    mood: "Calm, clinical, trustworthy. The safest choice for a health brand — reads as competence rather than energy.",
    deep: "#0b3b3f",
    primary: "#0f766e",
    primarySoft: "#d8efe9",
    accent: "#e8a33d",
    surface: "#fbf8f3",
    surfaceAlt: "#f2ece1",
    ink: "#152a2c",
    onDeep: "#f4efe6",
  },
  {
    id: "B",
    name: "Midnight & Mint",
    mood: "Modern and sporty. Feels like a performance app — good if you want to attract younger patients and athletes.",
    deep: "#101a2e",
    primary: "#1e40af",
    primarySoft: "#dde6fb",
    accent: "#34d99b",
    surface: "#f7f9fc",
    surfaceAlt: "#e9eef7",
    ink: "#111827",
    onDeep: "#eaf1fb",
  },
  {
    id: "C",
    name: "Forest & Copper",
    mood: "Natural and premium. Warm without being loud — suits a private clinic that wants to feel established.",
    deep: "#17301f",
    primary: "#2f6b45",
    primarySoft: "#dbeddf",
    accent: "#c1743a",
    surface: "#faf8f4",
    surfaceAlt: "#eee9df",
    ink: "#1b2b20",
    onDeep: "#f0eee6",
  },
  {
    id: "D",
    name: "Plum & Blush",
    mood: "Closest to the purple reference you liked. Distinctive and friendly; least like a typical medical site.",
    deep: "#241436",
    primary: "#6d34c4",
    primarySoft: "#e9defb",
    accent: "#f0b429",
    surface: "#faf7fd",
    surfaceAlt: "#efe7f8",
    ink: "#1e1229",
    onDeep: "#f2ebfa",
  },
  {
    id: "E",
    name: "Charcoal & Ice",
    mood: "Clean and technical. Lets the exercise illustrations carry all the colour — the most neutral of the five.",
    deep: "#1c1f24",
    primary: "#0e7490",
    primarySoft: "#d6eef4",
    accent: "#f97362",
    surface: "#f8f9fa",
    surfaceAlt: "#eceef1",
    ink: "#15181c",
    onDeep: "#eef1f4",
  },
];

export const metadata = { title: "Colour options — PhysioFlow" };

export default function PalettesPage() {
  return (
    <main className="min-h-screen bg-cream-100 px-5 pb-24 pt-28 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-crimson-600">
          Choose a direction
        </p>
        <h1 className="display max-w-2xl text-4xl text-espresso-900 sm:text-5xl">
          Five colour options
        </h1>
        <p className="mt-4 max-w-2xl text-[1.02rem] leading-relaxed text-espresso-700/75">
          Each is shown applied to the actual pieces of the site. The layout,
          the animations and the exercise illustrations stay exactly as they
          are — only the colour changes. Tell me a letter and I will apply it
          everywhere.
        </p>

        <div className="mt-12 space-y-10">
          {PALETTES.map((p) => (
            <Sample key={p.id} p={p} />
          ))}
        </div>
      </div>
    </main>
  );
}

function Sample({ p }: { p: Palette }) {
  return (
    <section className="overflow-hidden rounded-[30px] border border-crimson-100 bg-cream-50 shadow-[0_10px_40px_rgba(90,30,20,0.07)]">
      {/* label strip */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-crimson-100 px-7 py-5">
        <div>
          <h2 className="text-xl font-bold text-espresso-900">
            Option {p.id} — {p.name}
          </h2>
          <p className="mt-1 max-w-2xl text-[0.9rem] leading-relaxed text-espresso-700/70">
            {p.mood}
          </p>
        </div>
        <div className="flex gap-1.5">
          {[p.deep, p.primary, p.primarySoft, p.accent, p.surface].map((c) => (
            <span
              key={c}
              title={c}
              className="h-9 w-9 rounded-lg ring-1 ring-black/10"
              style={{ background: c }}
            />
          ))}
        </div>
      </div>

      {/* hero band */}
      <div className="relative px-7 py-10" style={{ background: p.primary }}>
        <svg
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
          className="absolute inset-x-0 bottom-0 h-14 w-full"
          aria-hidden="true"
        >
          <path
            d="M0,104 C90,74 200,138 320,116 C440,94 540,148 680,124 C820,100 930,142 1050,116 C1130,98 1175,110 1200,104 L1200,200 L0,200 Z"
            fill={p.surfaceAlt}
          />
          <path
            d="M0,140 C110,116 210,168 340,148 C470,128 560,172 700,152 C840,132 940,168 1060,146 C1130,133 1170,142 1200,138 L1200,200 L0,200 Z"
            fill={p.surface}
          />
        </svg>

        <div className="relative max-w-lg">
          <span
            className="inline-block rounded-full px-3 py-1.5 text-[0.66rem] font-bold uppercase tracking-[0.18em]"
            style={{ background: "rgba(255,255,255,0.16)", color: p.onDeep }}
          >
            Clinical exercise library
          </span>
          <h3
            className="display mt-4 text-4xl leading-[0.98]"
            style={{ color: p.onDeep }}
          >
            Movement, made{" "}
            <span style={{ color: p.accent }}>understandable.</span>
          </h3>
          <div className="mt-6 flex flex-wrap gap-3">
            <span
              className="rounded-full px-6 py-3 text-[0.9rem] font-semibold"
              style={{ background: p.deep, color: p.onDeep }}
            >
              Browse exercises →
            </span>
            <span
              className="rounded-full px-6 py-3 text-[0.9rem] font-semibold ring-1"
              style={{
                color: p.onDeep,
                background: "rgba(255,255,255,0.14)",
                boxShadow: `inset 0 0 0 1px rgba(255,255,255,0.3)`,
              }}
            >
              For clinicians
            </span>
          </div>
        </div>
      </div>

      {/* content band */}
      <div className="grid gap-6 px-7 py-8 md:grid-cols-[1.1fr_0.9fr]" style={{ background: p.surface }}>
        <div
          className="rounded-[22px] p-6"
          style={{ background: "#fff", boxShadow: "0 8px 26px rgba(0,0,0,0.07)" }}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <p
                className="text-[0.66rem] font-bold uppercase tracking-widest"
                style={{ color: p.primary }}
              >
                EX-S-010 · Shoulder
              </p>
              <h4 className="mt-1 text-lg font-bold" style={{ color: p.ink }}>
                Resisted External Rotation
              </h4>
            </div>
            <span
              className="shrink-0 rounded-full px-3 py-1 text-[0.66rem] font-bold uppercase"
              style={{ background: p.accent, color: p.deep }}
            >
              Draft
            </span>
          </div>

          <p className="mt-3 text-[0.9rem] leading-relaxed" style={{ color: `${p.ink}b0` }}>
            Strengthens the small muscles at the back of the shoulder that hold
            the ball centred in the socket.
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {["Resisted", "Standing", "Concentric"].map((c) => (
              <span
                key={c}
                className="rounded-full px-2.5 py-1 text-[0.72rem] font-semibold"
                style={{ background: p.primarySoft, color: p.primary }}
              >
                {c}
              </span>
            ))}
          </div>

          <div
            className="mt-5 flex items-center justify-between border-t pt-4 text-[0.8rem]"
            style={{ borderColor: `${p.ink}18`, color: `${p.ink}90` }}
          >
            <span>3 × 12–15</span>
            <span className="font-semibold" style={{ color: p.primary }}>
              Full protocol →
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <div
            className="relative rounded-[18px] p-1.5"
            style={{ background: "#fff", boxShadow: "0 8px 22px rgba(0,0,0,0.08)", transform: "rotate(-1.4deg)" }}
          >
            <span
              className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{ background: p.accent }}
            />
            <div className="rounded-[13px] px-4 py-3" style={{ background: p.primarySoft }}>
              <p className="text-[0.86rem] leading-relaxed" style={{ color: p.ink }}>
                Keep the elbow pinned to your side throughout.
              </p>
            </div>
          </div>

          <div
            className="rounded-[18px] px-5 py-4"
            style={{ background: p.deep }}
          >
            <p className="text-[0.7rem] font-bold uppercase tracking-widest" style={{ color: p.accent }}>
              Gluteus maximus
            </p>
            <p className="mt-0.5 text-[0.92rem] font-semibold" style={{ color: p.onDeep }}>
              Concentric · Eccentric
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
