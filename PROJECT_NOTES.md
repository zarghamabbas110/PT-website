# PhysioFlow — project notes

Working memory for this build. Read this first after a context compaction;
it records what was decided and why, so the reasoning does not have to be
rediscovered.

## What this is

A bilingual (English / Urdu) physiotherapy exercise library for Pakistan
first, then international. Two audiences from one codebase: patients and
physiotherapists. Owner is a practising physiotherapist and reviews the
clinical content himself.

Repo: `zarghamabbas110/PT-website`, branch `claude/website-project-3zxsbo`.
**The repo is currently public** — make it private before launching paid
clinician accounts.

## Stack

Next.js 16 (App Router) · Tailwind v4 · Framer Motion · three.js.
Run with `start-website.bat` (double-click) or `npm run dev`.
On Windows PowerShell use `npm.cmd`, not `npm` — script execution is blocked.

## Decisions already made — do not relitigate

| Topic | Decision |
|---|---|
| Design language | Layered "paper-cut" flowing shapes, from the user's red reference |
| Palette | Patients: **Deep Teal & Sand**. Clinicians: **Charcoal & Ice**. One toggle switches theme *and* detail level. |
| Text containment | Images may break out of their box; **text never does** |
| Patient detail | Two or three lines, nothing more. Everything else collapsed. |
| Clinician detail | Full record: steps, mistakes, safety, contraindications, taxonomy |
| Urdu register | Everyday spoken Urdu including English loanwords ("شولڈر بلیڈ", "تکلیف والا بازو"), **not** formal book Urdu |
| Special instructions | Pinned sticky notes, below the fold |
| Female character | **Not wanted.** Adam only. |
| Hoodie | **Cannot be removed** — no torso mesh underneath. Staying. |
| Clinical review | The owner does it. `evidence.status` moves off `unreviewed` as he signs each off. |
| Animation scaling | Never hand-draw per exercise. One rig, joint angles per exercise. |

## Architecture

- `lib/figure.ts` — the joint model. `Pose` = joint angles; `solve()` does
  forward kinematics. Angle convention: **0 points up, positive rotates
  forward**, so 180 hangs straight down. This is the single source of truth
  for movement and both renderers consume it.
- `components/figure/PhysioFigure.tsx` — flat SVG renderer (2D fallback).
- `components/figure/Human3D.tsx` — the 3D renderer, now the main one.
- `data/schema.ts` — the exercise record.
- `data/exercises/` — one file per region, assembled in `index.ts`.
- `lib/i18n.tsx` — language *and* audience context; audience sets the theme class.

## The 3D character

Mixamo "Adam" (`Ch08_nonPBR.fbx`, 83 MB), free for commercial use.
Source FBX lives in the repo's **GitHub release tagged `models`**, not in git.

Conversion (`app/convert`, delete before launch):
FBXLoader reads the skeleton but leaves every texture with an empty source.
The PNGs *are* embedded — they were extracted by scanning the FBX binary for
PNG signatures and walking chunks to `IEND`. Ten maps at 4K, reattached by
material (`Ch08_body` skin, `Ch08_body1` hoodie/pants/sneakers, `Ch08_hair`
hair/beard/eyelashes with alpha cut-out), downscaled to 1024, re-exported.
83 MB FBX → **18.5 MB GLB** at `public/models/adam.glb` (committed).

### Rig gotchas, all hard-won

1. **Aim bones, never set Euler angles.** Mixamo bone axes run down the bone,
   so "rotate about Z" means different things per limb. `aim()` rotates a bone
   so its rest direction meets a target direction.
2. **Aim targets are in the body's frame**, then rotated by the root
   quaternion. Aiming at raw world directions silently cancels the root
   rotation — the character stands back up however far you lay him down.
3. **`rootRot: -90` is supine.** `root.rotateX(rootRot)`; the opposite sign
   lays him face down.
4. **Re-ground every frame.** Standing: offset by the lowest bone. Lying:
   seat the pelvis at ~0.17 (the lowest bone is then a heel or shoulder and
   drags the body off the mat).
5. **Bone prefixes vary** — `mixamorig:Hips` vs `mixamorig7Hips`. `boneKey()`
   strips it, so any Mixamo character loads unchanged.
6. Cameras must reframe for lying poses.

## State

- 19 exercises: 13 shoulder + 6 spine/lower limb. All `unreviewed`.
- 3D rig calibrated for standing, seated and supine. Review at `/human3d`.
- Flat SVG figure still drives the library cards and detail pages.

## Next

1. Owner reviews `/human3d`, then switch exercise pages from SVG to 3D.
2. Shoulder 13 → 50, then elbow and wrist.
3. Bilingual animation captions — `Keyframe.label` is still English-only.
4. Finish the Urdu register pass on the deeper fields (steps, mistakes,
   contraindications); quick guides are already done.
5. Phase 3: clinician accounts, branded watermarked PDF export, subscriptions.
