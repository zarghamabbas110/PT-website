# PhysioFlow — project memory

A bilingual (English / Urdu) physiotherapy exercise library. Owner is a
practising physiotherapist in Pakistan, not a programmer: explain in plain
terms, and judge the anatomy as a clinician would before showing anything.

Repo `zarghamabbas110/PT-website`. All work goes on branch
`claude/website-project-3zxsbo`. Never push elsewhere. Do not open a PR
unless asked.

## Before any paid launch — carried forward, still open

- **The repo is PUBLIC.** It must be made private before clinician accounts
  and payments exist, because those bring personal data and card details.
- **The 3D avatar's licence is unconfirmed.** It is a Ready Player Me male
  avatar (`public/models/human.glb`). Confirm the licence before charging
  anyone, or replace the model — see "swapping the character" below.
- **All 300 exercises carry `evidence.status: "unreviewed"`.** The clinical
  content is a draft awaiting the owner's own review. No citations are
  invented; each `rationale` ends "Citations to be attached at clinical
  review."
- Animation captions (`Keyframe.label`) are still English-only.

## The shape of the site

    /                  the front door: intro, and two ways in
    /patient           the marketing/landing page (hero, body picker,
                       four sample exercises, About, Contact)
    /exercises         the library
    /clinician/login   sign in with email + access code
    /clinician/register  request an account, for the owner to approve
    /admin             owner only — exercise review console, account queue

`SiteHeader` and `SiteFooter` return `null` on `/` so the front door offers
only its two choices.

**Never put the whole library on a page that is not the library.** The old
landing page rendered all 300 `ExerciseCard`s. Clicking "Home" then took
**3.3 seconds**, which reads as a dead button — and was reported as one.

## Accounts, and what they are not

`lib/session.ts` holds roles, access requests, approvals and the owner's
review verdicts **in localStorage**. None of it is security, and every screen
says so out loud. A request sent from one computer cannot be seen from
another. Replacing it means a database, hashed passwords and signed sessions;
the data shapes are already close to the tables they will become.

The `/admin` passphrase is in the client bundle. It closes a door; it does
not lock one.

## Stack

Next.js 16 (App Router, Turbopack), React 19, Tailwind v4, three.js 0.185,
Framer Motion. `npx next build` then `npx next start -p <port>` for a
production check; the dev server is unreliable here after a rebuild.

## The exercise library — 300 exercises

`data/schema.ts` holds the record shape and the controlled vocabularies.
`data/exercises/index.ts` assembles ~25 per-region files into `EXERCISES`.

Nine filter axes, in the order a clinician narrows:

    Body region → Joint → Exercise type → Muscle work (contraction)
    → Movement (AROM/AAROM/PROM/resisted) → Load → Equipment
    → Position → Difficulty

Two of these need care:

- **`joint`** is a controlled list (`JOINTS` in `data/schema.ts`), not free
  text. It became a filter, so "Knee" and "Tibiofemoral" cannot both mean
  the knee. Anything new must use a name already on that list.
- **`exerciseType`** is what the exercise is *for* and is **not derivable**
  from the other fields — a wall sit and a deep neck flexor hold are both
  isometric and both active, but one is strengthening and one is motor
  control. It has to be stated per exercise.

**Equipment** is derived, not stored (`equipmentNeed()` in
`data/exercises/index.ts`) — simply whether `equipment` is empty.

### How exercises are written

Records are generated from compact Python specs in
`/tmp/claude-0/-home-user-PT-website/<session>/scratchpad/gen/`. That
scratchpad is session-scoped and will be gone in a new session — the
generated `.ts` files in the repo are the source of truth from then on.
Editing a record by hand is fine; just do not expect a regenerate to
preserve it.

`renumber.py` restamps every `id` after generation. Ids collided before this
existed because Cervical and Core both numbered themselves "C". Region
prefixes are now distinct (CX, S, EL, W, T, L, H, K, A, CO).

Every record is fully bilingual: name, purpose, starting position, quick
steps, full steps, special instructions, common mistakes. Clinical taxonomy
(muscle, joint, condition names) stays English — that is how it is taught.

## The 3D figure

`lib/rig.ts` holds the bone-naming knowledge shared by both 3D components,
so they cannot drift apart. It is **rig-agnostic**: logical joints
(`rUpper`, `rThigh`…) resolve at load time against candidate bone names, so
a new model drops in with no code change, as long as it has a real skeleton.

`components/figure/Human3D.tsx` poses the character from the same `Pose` the
flat SVG figure uses. Hard-won details, do not undo them:

- Each bone is **aimed** and then **rolled** about its own axis. Without the
  roll, bent elbows and knees twist sideways — the owner called it "a
  zombie".
- A model may carry several skeletons; every copy of a joint is driven.
- `FOOT_PITCH = 24` tips the foot down so the sole lies flat. Aiming it
  horizontally leaves the toes in the air.
- A **planted foot** in a supine pose is set by the floor, not the body
  (`p.rootRot < -45`). Without this a bridge turns the shoes upside down.
  The test is `< -45`, not `abs() > 45`: face down with a bent knee is
  all-fours, where the foot must follow the shin.
- The body **settles onto two contacts**, not one. A plank dropped onto its
  single lowest point floated a hand's width above the mat.
- `REACH` holds the hand 5 cm clear because the hand bone is the wrist and
  the fingers reach past it.
- The mat centres under whoever is on it and is `noFrame` (excluded from
  camera fitting) — it is longer than the person and was shrinking them.
- Arms roll toward world-up so the **thumb stays up**. Rolling toward
  body-front pronates the hand as the arm lifts; the owner spotted this.

Bases live in `data/exercises/bases.ts`: STAND, SEATED, SUPINE, SUPINE_LONG,
PRONE, SIDE_LYING, QUADRUPED.

### Movements outside the sagittal plane — read this before writing a record

The pose model originally had no way to say "turn", "bend sideways", "look
over your shoulder", "drop both knees to one side", "turn the palm over" or
"bend the wrist". Records that needed those were written with whichever
existing field looked closest, and came out either doing the wrong movement
or standing perfectly still. The owner caught it region by region.

The channels now exist (`lib/figure.ts`, driven in `Human3D.tsx`):

| channel | movement |
|---|---|
| `twist` | chest turns on the pelvis; carries the arms round |
| `sideBend` | trunk bends sideways |
| `neckRot` / `neckSide` | head turns / ear to shoulder |
| `pelvisRot` | **both** legs travel together — knee drops, lower trunk rotation |
| `hipAbductNear/Far` | leg lifts away from the midline |
| `foreRotNear/Far` | palm turns up or down |
| `wristNear/Far` | wrist bends (only applied when non-zero) |

Two traps:

- **`hipRot` mirrors the legs; `pelvisRot` does not.** Setting `hipRotNear`
  and `hipRotFar` to the same number pulls the knees *apart*. A knee drop
  needs `pelvisRot`.
- **`lateral` and `side` are different axes.** `lateral` turns about the
  body's long axis and does nothing to a limb pointing straight up or down.
  `side` tips in the frontal plane. Side-bending and abducting a hanging limb
  need `side`.

Spine angles are scaled down by the rig (0.7 lumbar, 0.6 thorax), so ±10
is invisible. A back extension wants 30 or more.

### Props that are furniture, not held

- **`gymBall` takes `under: "pelvis" | "trunk" | "feet"`.** Without it the
  ball was placed like a squeeze ball, between the knees — which is what the
  owner saw on a seated pelvic tilt.
- **`under: "trunk"` makes the ball a support surface.** The ball sits on the
  floor and the *body is lifted onto it* (`restOnBall`), and the two-contact
  ground settle is skipped. Placing the ball against a body still lying on
  the mat put the ball on his back.
- **A chair does not rise with the person standing out of it**, and ends up
  behind them: seat height is clamped, and the chair slides back as the hip
  extends. Otherwise a sit-to-stand walks through its own chair.

### Card stills

`components/figure/ExerciseThumb.tsx` shows a pre-rendered still on library
cards and swaps to the live figure only on hover — a browser gives you about
sixteen WebGL contexts and a filtered grid wants far more. Regenerate after
any animation change:

    npx next build && npx next start -p 4400 &
    node scripts/thumbs.cjs 4400

It skips slugs already present, so delete the ones you want redone.

## The landing-page body picker

`components/home/BodyPicker.tsx`. The figure walks on, settles, turns in a
T-pose; hovering lights a region, clicking flies the camera in and opens
`/exercises?region=…`.

- Regions are **invisible hit volumes built from the skeleton**, not a
  raycast against the mesh. A skinned mesh answers "left forearm skin", not
  "the elbow".
- Volumes are split **by fraction along each limb**, not at its joints.
  Splitting at the elbow gave a shoulder region covering half the arm span.
- The trunk is split **front from back** as well as top from bottom, because
  the abdomen and the low back sit at the same height. That is why dragging
  to turn the figure exists.
- The turn **stops dead once a region lights up**. A drifting target cannot
  be clicked.
- Navigation is `window.location.assign`, deliberately — `router.push` from
  inside the render loop silently did nothing.
- **`?hit=1` paints the hit volumes and freezes the turn.** This is the only
  sane way to check a region covers what it claims. Use it before believing
  any change here.

## Verifying 3D work — do this, do not eyeball it

Playwright with headless Chromium is installed and works:

    node script.mjs   # chromium at /opt/pw-browsers/chromium
    args: ['--proxy-bypass-list=<-loopback>',
           '--use-gl=swiftshader', '--enable-unsafe-swiftshader']

`/human3d` is a review page with a `window.__setShot(slug, view, frame)` hook
for screenshotting any exercise, frame and camera angle. `/figures-debug`
shows every flat figure on a grid. Both are internal; delete before launch.

Screenshot a change and look at it before showing the owner. Several rounds
were wasted showing work that was visibly wrong.

## Working style that has held up

- The owner reviews as a physiotherapist and catches real anatomical faults
  (inverted feet, pinched elbows, a bridge lifting the whole trunk, a thumb
  pointing the wrong way). Take those literally — they have always been
  right.
- Say plainly what was not done and why. Do not imply verification that did
  not happen.
- `git checkout -- <dir>` has bitten this project once: it reverted
  uncommitted work in neighbouring files. Check `git status` first.

## Not started

- Phase 3: clinician accounts, watermarked PDF export, subscriptions.
- Replacing the character. The owner is unhappy with the current avatar and
  wants to return to it once the library is further along. Because
  `lib/rig.ts` is shared, a clean rigged GLB dropped at
  `public/models/human.glb` should work in both the exercise figure and the
  picker with no code change. Sketchfab glTF exports routinely collapse the
  rig to one joint; Mixamo, game rips and Ready Player Me survive. Check
  `skins` and joint count before wiring anything in.
