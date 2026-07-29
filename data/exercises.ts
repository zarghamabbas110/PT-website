import { NEUTRAL, pose } from "@/lib/figure";
import type { Exercise } from "./schema";

/* ==========================================================================
   Seed exercises.
   These six are deliberately varied — different positions, contraction types,
   equipment and body regions — so the figure engine and the filtering model
   are both properly exercised before we scale the library up.

   Every record carries evidence.status = "unreviewed": nothing here has been
   signed off by a physiotherapist yet.
   ========================================================================== */

/** Sitting upright on a chair, feet flat — the base for cervical work. */
const SEATED = pose({
  rootX: 168,
  rootY: 252,
  hipNear: 86,
  kneeNear: 84,
  ankleNear: 2,
  hipFar: 84,
  kneeFar: 84,
  ankleFar: 2,
  shoulderNear: 174,
  elbowNear: 22,
  shoulderFar: 178,
  elbowFar: 22,
});

/** Lying on the back, knees bent, feet flat — the "hook lying" start. */
const SUPINE = pose({
  rootRot: -90,
  rootX: 235,
  rootY: 300,
  hipNear: 45,
  kneeNear: 100,
  ankleNear: 45,
  hipFar: 42,
  kneeFar: 98,
  ankleFar: 45,
  shoulderNear: 178,
  elbowNear: 4,
  shoulderFar: 180,
  elbowFar: 4,
});

/** Lying on one side, hips and knees bent — the clamshell start. */
const SIDE_LYING = pose({
  rootRot: -90,
  rootX: 245,
  rootY: 300,
  hipNear: 45,
  kneeNear: 90,
  ankleNear: 40,
  hipFar: 45,
  kneeFar: 90,
  ankleFar: 40,
  shoulderNear: 150,
  elbowNear: 70,
  shoulderFar: 150,
  elbowFar: 70,
});

export const EXERCISES: Exercise[] = [
  /* ---------------------------------------------------------------- 001 */
  {
    id: "EX-C-001",
    slug: "chin-tuck",
    name: "Chin Tuck (Cervical Retraction)",
    bodyRegion: "Cervical",
    joint: ["Atlanto-occipital", "Cervical spine C1–C7"],
    musclesTargeted: [
      "Longus colli",
      "Longus capitis",
      "Deep cervical flexors",
    ],
    conditions: [
      "Forward head posture",
      "Cervicogenic headache",
      "Non-specific neck pain",
      "Postural strain",
    ],
    purpose:
      "Restores the deep neck flexors' endurance and reverses the forward-head posture that loads the upper cervical joints.",
    difficulty: "Beginner",
    contraction: ["Isometric"],
    load: "No load",
    position: "Sitting",
    equipment: [],
    startingPosition:
      "Sit tall on a firm chair with your feet flat, shoulders relaxed and eyes level with the horizon.",
    steps: [
      "Keep your eyes looking straight ahead — the head must not nod down.",
      "Glide your chin straight backwards, as though sliding your head along a shelf, creating a gentle double chin.",
      "You should feel a light stretch at the base of the skull and a switching-on sensation at the front of the neck.",
      "Hold the retracted position, breathing normally.",
      "Release forward slowly and fully before the next repetition.",
    ],
    commonMistakes: [
      "Nodding the chin downward instead of gliding it backwards.",
      "Poking the chin forward again during the hold.",
      "Using the large surface neck muscles — visible straining in the throat.",
      "Holding the breath through the contraction.",
    ],
    safetyPrecautions: [
      "Stop immediately if you feel dizziness, light-headedness or visual disturbance.",
      "The movement should be pain-free; a mild stretch is expected, sharp pain is not.",
      "Keep the effort gentle — around 20% of maximum.",
    ],
    repetitions: "10",
    sets: "3",
    holdTime: "5 seconds",
    frequency: "Daily, or hourly at a desk",
    progressions: ["chin-tuck-supine-lift"],
    regressions: [],
    contraindications: [
      "Acute cervical fracture or instability",
      "Recent cervical spine surgery unless cleared by the surgeon",
      "Vertebrobasilar insufficiency",
      "Inflammatory arthropathy with cervical involvement in an active flare",
    ],
    evidence: {
      status: "unreviewed",
      rationale:
        "Deep cervical flexor training is a long-standing component of conservative management for mechanical neck pain and forward head posture. Specific citations to be attached at clinical review.",
    },
    figure: {
      frames: [
        {
          pose: pose({ headSlide: 17, neck: 9, head: -4 }, SEATED),
          travel: 900,
          hold: 600,
          label: "Start — head carried forward",
        },
        {
          pose: pose({ headSlide: -6, neck: -3, head: 2 }, SEATED),
          travel: 900,
          hold: 1500,
          label: "Chin glides straight back — hold 5s",
        },
      ],
      props: [{ kind: "chair" }],
      arrows: [{ at: "head", dir: 270, len: 30, label: "back" }],
    },
  },

  /* ---------------------------------------------------------------- 002 */
  {
    id: "EX-L-002",
    slug: "posterior-pelvic-tilt",
    name: "Posterior Pelvic Tilt",
    bodyRegion: "Lumbar",
    joint: ["Lumbosacral junction", "Sacroiliac", "Lumbar facets"],
    musclesTargeted: [
      "Transversus abdominis",
      "Rectus abdominis (lower fibres)",
      "Gluteus maximus",
    ],
    conditions: [
      "Non-specific low back pain",
      "Lumbar hyperlordosis",
      "Post-partum core weakness",
      "Early-stage disc-related pain",
    ],
    purpose:
      "Teaches conscious control of pelvic position and lumbar curve — the foundation skill for nearly all lumbar rehabilitation.",
    difficulty: "Beginner",
    contraction: ["Isometric", "Concentric"],
    load: "Bodyweight",
    position: "Supine",
    equipment: ["Exercise mat"],
    startingPosition:
      "Lie on your back with knees bent and feet flat, hip-width apart. Arms rest by your sides. Notice the small natural gap under your lower back.",
    steps: [
      "Breathe out gently and draw your lower abdomen inward, without gripping hard.",
      "Roll your pelvis backwards so the gap under your lower back closes and it presses lightly into the mat.",
      "Your tailbone will lift a fraction — the movement is small and controlled.",
      "Hold, continuing to breathe.",
      "Release slowly and allow the natural curve to return before repeating.",
    ],
    commonMistakes: [
      "Pushing through the feet and lifting the hips into a bridge instead.",
      "Holding the breath and bracing the whole trunk rigidly.",
      "Making the movement far too large.",
      "Squeezing the buttocks to force the tilt rather than using the abdominals.",
    ],
    safetyPrecautions: [
      "Movement should be pain-free and small in range.",
      "Stop if you get any pain, numbness or pins and needles into the leg.",
      "Keep the neck and jaw relaxed throughout.",
    ],
    repetitions: "10",
    sets: "2–3",
    holdTime: "5 seconds",
    frequency: "Once or twice daily",
    progressions: ["glute-bridge-ball-squeeze", "dead-bug"],
    regressions: [],
    contraindications: [
      "Acute lumbar fracture",
      "Cauda equina syndrome — requires emergency referral",
      "Pain that centralises or worsens with lumbar flexion",
      "Late pregnancy where supine lying is not tolerated",
    ],
    evidence: {
      status: "unreviewed",
      rationale:
        "Pelvic tilt and motor-control retraining is widely used as an entry-level intervention in low back pain rehabilitation. Specific citations to be attached at clinical review.",
    },
    figure: {
      frames: [
        {
          pose: pose({ pelvisTilt: 26, lumbar: -34, thorax: 6 }, SUPINE),
          travel: 900,
          hold: 600,
          label: "Start — natural arch under the lower back",
        },
        {
          pose: pose({ pelvisTilt: -12, lumbar: 14, thorax: -2 }, SUPINE),
          travel: 900,
          hold: 1500,
          label: "Lower back flattens to the mat — hold 5s",
        },
      ],
      props: [{ kind: "mat" }],
      arrows: [{ at: "t12", dir: 180, len: 30, label: "press down" }],
    },
  },

  /* ---------------------------------------------------------------- 003 */
  {
    id: "EX-H-003",
    slug: "glute-bridge-ball-squeeze",
    name: "Glute Bridge with Ball Squeeze",
    bodyRegion: "Pelvis & Hip",
    joint: ["Hip", "Lumbosacral junction"],
    musclesTargeted: [
      "Gluteus maximus",
      "Hamstrings",
      "Hip adductors",
      "Transversus abdominis",
    ],
    conditions: [
      "Gluteal weakness",
      "Non-specific low back pain",
      "Patellofemoral pain",
      "Post-partum pelvic floor rehabilitation",
    ],
    purpose:
      "Builds hip extensor strength while the ball adds an adductor co-contraction that helps stabilise the pelvis.",
    difficulty: "Beginner",
    contraction: ["Concentric", "Eccentric", "Isometric"],
    load: "Bodyweight",
    position: "Supine",
    equipment: ["Exercise mat", "Small soft ball (15–25 cm)"],
    startingPosition:
      "Lie on your back with knees bent, feet flat and hip-width apart. Place the soft ball between your knees. Arms rest by your sides.",
    steps: [
      "Squeeze the ball gently between your knees and hold that pressure throughout.",
      "Breathe out, tighten your lower abdomen and squeeze your buttocks.",
      "Press through your heels and lift your hips until your knees, hips and shoulders form one straight line.",
      "Hold at the top without arching your lower back.",
      "Lower one vertebra at a time until your pelvis rests back on the mat.",
    ],
    commonMistakes: [
      "Arching the lower back at the top instead of finishing with the glutes.",
      "Letting the knees drift apart and losing the ball pressure.",
      "Pushing through the toes rather than the heels.",
      "Dropping down quickly instead of lowering with control.",
    ],
    safetyPrecautions: [
      "Stop if you get cramping in the hamstrings — reduce the lift height and reset.",
      "Keep the neck relaxed; do not push the head into the mat.",
      "The lift should be driven by the buttocks, not the lower back.",
    ],
    repetitions: "10–12",
    sets: "3",
    holdTime: "3 seconds at the top",
    frequency: "Every other day",
    progressions: ["single-leg-bridge"],
    regressions: ["posterior-pelvic-tilt"],
    contraindications: [
      "Acute lumbar fracture or recent spinal surgery",
      "Acute hamstring tear",
      "Hip precautions following total hip replacement",
    ],
    evidence: {
      status: "unreviewed",
      rationale:
        "Bridging is a standard progression for hip extensor strengthening; adductor co-contraction is commonly added for pelvic stability. Specific citations to be attached at clinical review.",
    },
    figure: {
      frames: [
        {
          pose: pose({}, SUPINE),
          travel: 800,
          hold: 400,
          label: "Start — hips down, ball held",
        },
        {
          pose: pose(
            { rootY: 268, hipNear: 22, kneeNear: 78, hipFar: 20, kneeFar: 76 },
            SUPINE
          ),
          travel: 900,
          hold: 1000,
          label: "Lift to a straight line — hold 3s",
        },
      ],
      props: [{ kind: "mat" }, { kind: "ballBetweenKnees" }],
      arrows: [{ at: "hip", dir: 0, len: 40, label: "lift" }],
    },
  },

  /* ---------------------------------------------------------------- 004 */
  {
    id: "EX-H-004",
    slug: "clamshell-band",
    name: "Banded Clamshell",
    bodyRegion: "Pelvis & Hip",
    joint: ["Hip"],
    musclesTargeted: [
      "Gluteus medius",
      "Gluteus minimus",
      "Piriformis",
      "Deep hip external rotators",
    ],
    conditions: [
      "Gluteal tendinopathy",
      "Iliotibial band syndrome",
      "Patellofemoral pain",
      "Chronic ankle instability with proximal weakness",
    ],
    purpose:
      "Isolates the hip abductors and external rotators, which control pelvic drop and knee alignment during walking and running.",
    difficulty: "Intermediate",
    contraction: ["Concentric", "Eccentric"],
    load: "Resistance band",
    position: "Side-lying",
    equipment: ["Exercise mat", "Looped resistance band"],
    startingPosition:
      "Lie on your side with hips and knees bent to about 45 and 90 degrees. Stack your hips directly on top of one another. Place the looped band just above your knees. Support your head on your lower arm.",
    steps: [
      "Draw your lower abdomen in gently to stop the pelvis from rolling.",
      "Keep your feet touching throughout.",
      "Lift the top knee upward against the band, opening like a clam.",
      "Stop as soon as you feel the pelvis begin to roll backwards — that is your true range.",
      "Lower slowly against the band's resistance.",
    ],
    commonMistakes: [
      "Rolling the top hip backwards to gain more apparent range.",
      "Letting the feet separate.",
      "Moving quickly and using momentum rather than control.",
      "Using a band that is too strong, which forces compensation.",
    ],
    safetyPrecautions: [
      "Lateral hip pain during the movement may indicate tendon compression — reduce range and review.",
      "Keep the range small and honest rather than large and compensated.",
    ],
    repetitions: "12–15 each side",
    sets: "3",
    holdTime: "1–2 seconds at the top",
    frequency: "Every other day",
    progressions: ["side-plank-clamshell"],
    regressions: ["clamshell-no-band"],
    contraindications: [
      "Acute gluteal tendon tear",
      "Hip precautions following total hip replacement",
      "Acute lateral hip bursitis with marked pain on compression",
    ],
    evidence: {
      status: "unreviewed",
      rationale:
        "Clamshell variants are routinely used to target gluteus medius with comparatively low tensor fasciae latae involvement. Specific citations to be attached at clinical review.",
    },
    figure: {
      frames: [
        {
          pose: pose({}, SIDE_LYING),
          travel: 800,
          hold: 400,
          label: "Start — knees together, hips stacked",
        },
        {
          pose: pose({ hipNear: 20, kneeNear: 78 }, SIDE_LYING),
          travel: 900,
          hold: 900,
          label: "Top knee opens against the band",
        },
      ],
      props: [{ kind: "mat" }, { kind: "band" }],
      arrows: [{ at: "knee", dir: 20, len: 38, curved: true, label: "open" }],
    },
  },

  /* ---------------------------------------------------------------- 005 */
  {
    id: "EX-K-005",
    slug: "straight-leg-raise",
    name: "Straight Leg Raise",
    bodyRegion: "Knee",
    joint: ["Hip", "Knee"],
    musclesTargeted: [
      "Quadriceps (vastus medialis obliquus)",
      "Rectus femoris",
      "Iliopsoas",
    ],
    conditions: [
      "Post-operative knee rehabilitation",
      "Knee osteoarthritis",
      "Quadriceps inhibition",
      "Patellofemoral pain",
    ],
    purpose:
      "Loads the quadriceps without moving the knee joint itself, making it usable very early after injury or surgery.",
    difficulty: "Beginner",
    contraction: ["Concentric", "Eccentric", "Isometric"],
    load: "Bodyweight",
    position: "Supine",
    equipment: ["Exercise mat"],
    startingPosition:
      "Lie on your back. Bend the non-exercising knee with the foot flat. Keep the exercising leg straight along the mat.",
    steps: [
      "Tighten the thigh of the straight leg first — the kneecap should draw upward.",
      "Keeping the knee locked straight, lift the whole leg to the height of the opposite knee.",
      "Hold briefly at the top without letting the knee bend.",
      "Lower slowly and with control until the heel touches down.",
      "Let the thigh relax fully before the next repetition.",
    ],
    commonMistakes: [
      "Allowing the knee to bend during the lift — this defeats the purpose.",
      "Arching the lower back off the mat as the leg rises.",
      "Lifting far too high.",
      "Dropping the leg rather than lowering it.",
    ],
    safetyPrecautions: [
      "An extensor lag — the knee bending as you lift — means you should stay with quad sets a little longer.",
      "Keep the lower back flat; if it arches, reduce the height.",
    ],
    repetitions: "10",
    sets: "3 each leg",
    holdTime: "2–3 seconds",
    frequency: "Daily",
    progressions: ["straight-leg-raise-weighted"],
    regressions: ["quad-set"],
    contraindications: [
      "Acute hip flexor strain",
      "Post-operative restrictions on active hip flexion",
      "Unstable lumbar spine where the back cannot be kept flat",
    ],
    evidence: {
      status: "unreviewed",
      rationale:
        "Straight leg raise is a conventional early-stage quadriceps exercise where knee range is restricted or painful. Specific citations to be attached at clinical review.",
    },
    figure: {
      frames: [
        {
          pose: pose({ hipNear: 0, kneeNear: 0, ankleNear: 20 }, SUPINE),
          travel: 800,
          hold: 400,
          label: "Start — leg straight on the mat",
        },
        {
          pose: pose({ hipNear: 42, kneeNear: 0, ankleNear: 20 }, SUPINE),
          travel: 900,
          hold: 900,
          label: "Lift with the knee locked straight",
        },
      ],
      props: [{ kind: "mat" }],
      arrows: [{ at: "ankle", dir: 0, len: 40, label: "lift" }],
    },
  },

  /* ---------------------------------------------------------------- 006 */
  {
    id: "EX-K-006",
    slug: "wall-sit",
    name: "Wall Sit (Isometric)",
    bodyRegion: "Knee",
    joint: ["Knee", "Hip", "Ankle"],
    musclesTargeted: ["Quadriceps", "Gluteus maximus", "Soleus"],
    conditions: [
      "Patellofemoral pain",
      "Knee osteoarthritis",
      "Return-to-sport conditioning",
      "Quadriceps endurance deficit",
    ],
    purpose:
      "Builds quadriceps endurance under a sustained isometric load, which is often better tolerated than moving exercise in irritable knees.",
    difficulty: "Intermediate",
    contraction: ["Isometric"],
    load: "Bodyweight",
    position: "Standing",
    equipment: ["A clear wall"],
    startingPosition:
      "Stand with your back flat against a wall and walk your feet forward about two steps, hip-width apart.",
    steps: [
      "Keep your whole back in contact with the wall.",
      "Slide down until your knees bend towards 90 degrees — go only as low as stays comfortable.",
      "Check that your knees stay behind your toes and track over your second toe.",
      "Hold the position, breathing steadily throughout.",
      "Push through your heels and slide back up to standing.",
    ],
    commonMistakes: [
      "Letting the knees fall inward.",
      "Sliding the hips too low too early and losing knee alignment.",
      "Holding the breath during the isometric.",
      "Coming away from the wall at the lower back.",
    ],
    safetyPrecautions: [
      "Increasing pain at the front of the knee means the depth is too great — come up higher.",
      "Do not hold to the point of trembling or collapse.",
      "Take care if you have blood pressure concerns — sustained isometrics raise blood pressure.",
    ],
    repetitions: "3–5 holds",
    sets: "1–2",
    holdTime: "20–45 seconds",
    frequency: "Every other day",
    progressions: ["single-leg-wall-sit"],
    regressions: ["mini-squat"],
    contraindications: [
      "Uncontrolled hypertension",
      "Acute knee effusion with marked pain",
      "Weight-bearing restrictions after surgery",
    ],
    evidence: {
      status: "unreviewed",
      rationale:
        "Sustained isometric quadriceps loading is commonly used in irritable patellofemoral and tendinopathic presentations. Specific citations to be attached at clinical review.",
    },
    figure: {
      frames: [
        {
          pose: pose({ rootX: 130, rootY: 196 }, NEUTRAL),
          travel: 800,
          hold: 400,
          label: "Start — back flat against the wall",
        },
        {
          pose: pose(
            {
              rootX: 130,
              rootY: 262,
              hipNear: 82,
              kneeNear: 86,
              ankleNear: 8,
              hipFar: 80,
              kneeFar: 84,
              ankleFar: 8,
              shoulderNear: 95,
              elbowNear: 10,
              shoulderFar: 97,
              elbowFar: 10,
            },
            NEUTRAL
          ),
          travel: 1100,
          hold: 1600,
          label: "Slide down to 90° — hold",
        },
      ],
      props: [{ kind: "wall" }],
      arrows: [{ at: "pelvis", dir: 180, len: 34, label: "slide down" }],
    },
  },
];

export const BODY_REGIONS = [
  "Cervical",
  "Shoulder",
  "Thoracic",
  "Lumbar",
  "Pelvis & Hip",
  "Knee",
  "Ankle & Foot",
  "Core",
] as const;

export const CONTRACTION_TYPES = [
  "Isometric",
  "Concentric",
  "Eccentric",
  "Isotonic",
] as const;

export const LOAD_TYPES = [
  "Bodyweight",
  "Free weight",
  "Resistance band",
  "Machine",
  "Assisted",
  "No load",
] as const;

export const POSITIONS = [
  "Supine",
  "Prone",
  "Side-lying",
  "Sitting",
  "Standing",
  "Quadruped",
] as const;

export const DIFFICULTIES = ["Beginner", "Intermediate", "Advanced"] as const;

export function bySlug(slug: string): Exercise | undefined {
  return EXERCISES.find((e) => e.slug === slug);
}
