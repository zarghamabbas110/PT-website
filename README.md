# PhysioFlow

A clinical exercise library for physiotherapists and their patients. Built with
Next.js, Tailwind CSS and Framer Motion.

This repository currently holds a **design and architecture prototype** — the
visual language, the exercise data model and the animated figure engine are
real and working. The library contains six seed exercises, none of which have
been through clinical review.

## Running it

```bash
npm install
npm run dev        # http://localhost:3000
```

`npm run build` produces the production build.

## Pages

| Route             | What it is                                            |
|-------------------|-------------------------------------------------------|
| `/`               | Home — hero, pinned scroll showcase, sample exercises |
| `/exercises`      | The library, with multi-axis filtering and search      |
| `/for-clinicians` | The intended subscription model                       |
| `/figures-debug`  | Internal: every figure on a grid, for calibration      |

`/figures-debug` is a development aid and should be deleted before launch.

## How the animated figures work

There is no hand-drawn artwork. `lib/figure.ts` models the body as a jointed
skeleton and solves joint positions with forward kinematics;
`components/figure/PhysioFigure.tsx` draws the result and interpolates between
poses.

An exercise's animation is therefore just a short list of joint angles:

```ts
figure: {
  frames: [
    { pose: pose({ hipNear: 45 }, SUPINE), travel: 800, hold: 400, label: "Start" },
    { pose: pose({ hipNear: 22 }, SUPINE), travel: 900, hold: 1000, label: "Lift" },
  ],
  props:  [{ kind: "mat" }, { kind: "ballBetweenKnees" }],
  arrows: [{ at: "hip", dir: 0, len: 40, label: "lift" }],
}
```

This is what makes a library of 1,000+ exercises tractable — a new exercise is
a handful of numbers rather than a new illustration. Equipment and movement
arrows attach to anatomical landmarks, so they follow the body as it moves.

Angle convention: 0 points up the screen, positive rotates towards the
direction the figure faces. A thigh hanging straight down is 180.

### Known limitation

The figure is drawn in the sagittal (side-on) view. Movements defined by
rotation in other planes — a clamshell, hip abduction, shoulder rotation —
read less clearly. A front/oblique camera is the fix and is not yet built.

## The exercise data model

`data/schema.ts` defines the record. It follows the agreed field list — body
region, joint, muscles targeted, conditions, purpose, difficulty, equipment,
starting position, steps, common mistakes, safety precautions, reps, sets, hold
time, frequency, progressions, regressions, contraindications and evidence —
plus the extra filter axes: contraction type, load type and patient position.

### Clinical review gate

Every record carries an `evidence.status` of `unreviewed`, `in-review` or
`approved`. Everything currently in the library is `unreviewed` and is shown
with a "Draft" badge in the UI.

**No citations have been invented.** The `rationale` field states the general
basis for the exercise; real references are to be attached at clinical review
by a qualified physiotherapist. Nothing should reach patients before that.

## Build phases

1. **Design and data model** — this prototype. ✅
2. **Content** — grow the library, in reviewed batches.
3. **Accounts, PDF export, payments** — clinician logins, branded watermarked
   handouts, subscriptions. Not started; involves storing personal data, so it
   needs a privacy policy and a payment provider before any code is written.
4. **Mobile app** — the data layer is kept separate from the UI so a React
   Native client can reuse the same API.

## Medical disclaimer

The exercise content is general educational information, not a substitute for
individual assessment, diagnosis or treatment.
