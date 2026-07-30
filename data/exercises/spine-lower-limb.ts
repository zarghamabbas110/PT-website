import { NEUTRAL, pose } from "@/lib/figure";
import type { Exercise } from "../schema";

/* ==========================================================================
   Spine and lower limb — the original seed set, carried over to the bilingual
   schema. These sit alongside the upper limb work while that library grows.
   ========================================================================== */

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

export const SPINE_LOWER_LIMB: Exercise[] = [
  {
    id: "EX-C-001",
    slug: "chin-tuck",
    name: { en: "Chin Tuck (Cervical Retraction)", ur: "ٹھوڑی پیچھے کھینچنا" },
    bodyRegion: "Cervical",
    joint: ["Atlanto-occipital", "Cervical spine C1–C7"],
    musclesTargeted: ["Longus colli", "Longus capitis", "Deep cervical flexors"],
    conditions: [
      "Forward head posture",
      "Cervicogenic headache",
      "Non-specific neck pain",
      "Postural strain",
    ],
    purpose: {
      en: "Restores endurance in the deep neck flexors and reverses the forward-head posture that overloads the upper neck joints.",
      ur: "گردن کے گہرے پٹھوں کی برداشت بحال کرتی ہے اور سر آگے جھکنے کی عادت کو درست کرتی ہے جو گردن کے اوپری جوڑوں پر بوجھ ڈالتی ہے۔",
    },
    difficulty: "Beginner",
    contraction: ["Isometric"],
    mode: "Active",
    load: "No load",
    position: "Sitting",
    equipment: [],
    startingPosition: {
      en: "Sit tall on a firm chair with your feet flat, shoulders relaxed and eyes level with the horizon.",
      ur: "مضبوط کرسی پر سیدھے بیٹھیں، پاؤں زمین پر، کندھے ڈھیلے اور نظریں سامنے۔",
    },
    quickSteps: {
      en: [
        "Sit tall, eyes level, looking straight ahead.",
        "Glide your chin straight backwards to make a gentle double chin.",
        "Hold 5 seconds, then release forward slowly.",
      ],
      ur: [
        "سیدھے بیٹھیں اور نظریں بالکل سامنے رکھیں۔",
        "ٹھوڑی کو سیدھا پیچھے کھینچیں، جیسے ہلکی سی ڈبل چن بن رہی ہو۔",
        "سر نیچے نہ جھکائیں۔ پانچ سیکنڈ رکیں، پھر چھوڑ دیں۔",
      ],
    },
    steps: {
      en: [
        "Keep your eyes looking straight ahead — the head must not nod down.",
        "Glide your chin straight backwards, as though sliding your head along a shelf.",
        "You should feel a light stretch at the base of the skull.",
        "Hold the retracted position, breathing normally.",
        "Release forward slowly and fully before the next repetition.",
      ],
      ur: [
        "نظریں سیدھی سامنے رکھیں — سر نیچے نہیں جھکنا چاہیے۔",
        "ٹھوڑی کو سیدھا پیچھے کھسکائیں، جیسے سر کسی شیلف پر پھسل رہا ہو۔",
        "کھوپڑی کی جڑ میں ہلکا کھنچاؤ محسوس ہونا چاہیے۔",
        "اس حالت میں رکیں اور سانس معمول کے مطابق لیتے رہیں۔",
        "اگلی بار سے پہلے آہستہ اور مکمل طور پر آگے چھوڑ دیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "This is a glide, not a nod. The chin moves backwards, not downwards.",
        "Keep the effort gentle — about two out of ten.",
        "Ideal to repeat every hour if you work at a desk.",
        "Stop at once if you feel dizzy.",
      ],
      ur: [
        "یہ کھسکانا ہے، سر ہلانا نہیں۔ ٹھوڑی پیچھے جاتی ہے، نیچے نہیں۔",
        "زور ہلکا رکھیں — دس میں سے تقریباً دو۔",
        "اگر آپ میز پر کام کرتے ہیں تو ہر گھنٹے دہرانا بہترین ہے۔",
        "اگر چکر آئے تو فوراً رک جائیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Nodding the chin downward instead of gliding it backwards.",
        "Poking the chin forward again during the hold.",
        "Straining the large surface neck muscles.",
        "Holding the breath.",
      ],
      ur: [
        "ٹھوڑی کو پیچھے کھسکانے کے بجائے نیچے جھکانا۔",
        "رکنے کے دوران ٹھوڑی دوبارہ آگے نکال لینا۔",
        "گردن کے بڑے اوپری پٹھوں پر زور ڈالنا۔",
        "سانس روک لینا۔",
      ],
    },
    safetyPrecautions: {
      en: [
        "Stop immediately if you feel dizziness or visual disturbance.",
        "A mild stretch is expected; sharp pain is not.",
      ],
      ur: [
        "چکر یا نظر میں گڑبڑ محسوس ہو تو فوراً رک جائیں۔",
        "ہلکا کھنچاؤ متوقع ہے؛ تیز درد نہیں۔",
      ],
    },
    repetitions: "10",
    sets: "3",
    holdTime: "5 seconds",
    frequency: "Daily, or hourly at a desk",
    restBetweenSets: "20 seconds",
    progressions: [],
    regressions: [],
    contraindications: {
      en: [
        "Acute cervical fracture or instability",
        "Recent cervical spine surgery unless cleared",
        "Vertebrobasilar insufficiency",
      ],
      ur: [
        "گردن کی ہڈی کا حالیہ ٹوٹنا یا عدم استحکام",
        "گردن کی ریڑھ کا حالیہ آپریشن، جب تک اجازت نہ ہو",
        "ورٹیبروبیسیلر خون کی روانی کی کمی",
      ],
    },
    evidence: {
      status: "unreviewed",
      rationale:
        "Deep cervical flexor training is long established in conservative management of mechanical neck pain. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      // Zoomed to the head, neck and upper trunk. A chin tuck is only a few
      // centimetres of real travel; at full-body scale it is invisible, and
      // exaggerating it turns it into the wrong movement.
      scale: 1.7,
      offsetX: -86,
      offsetY: -38,
      frames: [
        {
          // Poking-chin posture: head translated forward, upper neck extended
          // so the chin lifts. This is the fault the exercise corrects.
          pose: pose({ headSlide: 12, neck: 5, head: -6 }, SEATED),
          travel: 900,
          hold: 600,
          label: "Start — chin poking forward",
        },
        {
          // A true chin tuck is retraction PLUS upper cervical flexion: the
          // skull glides back and the chin drops slightly. Retraction alone,
          // with the chin left level, is a different movement.
          pose: pose({ headSlide: -4, neck: -1, head: 5 }, SEATED),
          travel: 900,
          hold: 1500,
          label: "Chin glides back and slightly down",
        },
      ],
      props: [{ kind: "chair" }],
      arrows: [{ at: "head", dir: 262, len: 26, label: "back" }],
    },
  },

  {
    id: "EX-L-002",
    slug: "posterior-pelvic-tilt",
    name: { en: "Posterior Pelvic Tilt", ur: "کولہے کو پیچھے جھکانا" },
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
    ],
    purpose: {
      en: "Teaches conscious control of pelvic position and the lumbar curve — the foundation skill for nearly all back rehabilitation.",
      ur: "کولہے کی پوزیشن اور کمر کے خم پر شعوری قابو سکھاتی ہے — یہ کمر کی تقریباً ہر بحالی ورزش کی بنیاد ہے۔",
    },
    difficulty: "Beginner",
    contraction: ["Isometric", "Concentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Supine",
    equipment: ["Exercise mat"],
    startingPosition: {
      en: "Lie on your back with knees bent and feet flat, hip-width apart. Notice the small natural gap under your lower back.",
      ur: "گھٹنے موڑ کر سیدھے لیٹ جائیں، پاؤں زمین پر اور کولہوں کے برابر فاصلے پر۔ کمر کے نیچے قدرتی خالی جگہ محسوس کریں۔",
    },
    quickSteps: {
      en: [
        "Lie on your back with knees bent and feet flat.",
        "Breathe out, tighten your lower tummy and press your lower back into the floor.",
        "Hold 5 seconds, then relax completely.",
      ],
      ur: [
        "گھٹنے موڑ کر سیدھے لیٹ جائیں، پاؤں زمین پر رکھیں۔",
        "سانس چھوڑتے ہوئے پیٹ کو اندر کھینچیں اور کمر کو زمین سے لگائیں۔",
        "پانچ سیکنڈ رکیں، پھر بالکل ڈھیلا چھوڑ دیں۔",
      ],
    },
    steps: {
      en: [
        "Breathe out gently and draw your lower abdomen inward.",
        "Roll your pelvis backwards so the gap under your lower back closes.",
        "Your tailbone will lift a fraction — the movement is small.",
        "Hold, continuing to breathe.",
        "Release slowly and let the natural curve return.",
      ],
      ur: [
        "آہستہ سانس چھوڑیں اور پیٹ کے نچلے حصے کو اندر کھینچیں۔",
        "کولہے کو پیچھے گھمائیں تاکہ کمر کے نیچے کی خالی جگہ بند ہو جائے۔",
        "دم کی ہڈی ذرا سی اٹھے گی — حرکت چھوٹی ہے۔",
        "رکیں اور سانس لیتے رہیں۔",
        "آہستہ چھوڑیں اور قدرتی خم واپس آنے دیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "This is a very small movement. Big is wrong.",
        "Do not push through your feet and lift into a bridge.",
        "Keep breathing throughout — no bracing or breath-holding.",
        "Place a hand under your lower back to feel the gap closing.",
      ],
      ur: [
        "یہ بہت چھوٹی حرکت ہے۔ بڑی حرکت غلط ہے۔",
        "پاؤں سے دھکا دے کر کولہے اوپر نہ اٹھائیں۔",
        "پوری ورزش میں سانس لیتے رہیں — سانس نہ روکیں۔",
        "خالی جگہ بند ہوتے محسوس کرنے کے لیے کمر کے نیچے ہاتھ رکھیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Lifting the hips into a bridge instead.",
        "Holding the breath and bracing rigidly.",
        "Making the movement far too large.",
        "Squeezing the buttocks instead of using the abdominals.",
      ],
      ur: [
        "اس کے بجائے کولہے اٹھا کر پل بنا لینا۔",
        "سانس روک کر پورا جسم اکڑا لینا۔",
        "حرکت بہت بڑی کر دینا۔",
        "پیٹ کے پٹھوں کے بجائے کولہے کے پٹھے دبانا۔",
      ],
    },
    safetyPrecautions: {
      en: [
        "Movement should be pain-free and small.",
        "Stop for any pain, numbness or pins and needles into the leg.",
      ],
      ur: [
        "حرکت بے درد اور چھوٹی ہونی چاہیے۔",
        "ٹانگ میں درد، سُن پن یا سوئیاں چبھنے پر رک جائیں۔",
      ],
    },
    repetitions: "10",
    sets: "2–3",
    holdTime: "5 seconds",
    frequency: "Once or twice daily",
    restBetweenSets: "30 seconds",
    progressions: ["glute-bridge-ball-squeeze"],
    regressions: [],
    contraindications: {
      en: [
        "Acute lumbar fracture",
        "Cauda equina syndrome — requires emergency referral",
        "Late pregnancy where lying on the back is not tolerated",
      ],
      ur: [
        "کمر کی ہڈی کا حالیہ ٹوٹنا",
        "کاؤڈا ایکوینا سنڈروم — فوری طبی امداد ضروری",
        "حمل کے آخری مہینے جن میں سیدھا لیٹنا مشکل ہو",
      ],
    },
    evidence: {
      status: "unreviewed",
      rationale:
        "Pelvic tilt and motor-control retraining is a widely used entry-level intervention in low back pain. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
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

  {
    id: "EX-H-003",
    slug: "glute-bridge-ball-squeeze",
    name: {
      en: "Glute Bridge with Ball Squeeze",
      ur: "گیند دبا کر کولہے اٹھانا",
    },
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
      "Post-partum rehabilitation",
    ],
    purpose: {
      en: "Builds hip extensor strength, while the ball adds an inner-thigh squeeze that helps steady the pelvis.",
      ur: "کولہے کے پٹھوں کی طاقت بڑھاتی ہے، اور گیند دبانے سے رانوں کے اندرونی پٹھے بھی کام کرتے ہیں جو کولہے کو مستحکم رکھتے ہیں۔",
    },
    difficulty: "Beginner",
    contraction: ["Concentric", "Eccentric", "Isometric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Supine",
    equipment: ["Exercise mat", "Small soft ball (15–25 cm)"],
    startingPosition: {
      en: "Lie on your back with knees bent and feet flat, hip-width apart. Place the soft ball between your knees.",
      ur: "گھٹنے موڑ کر سیدھے لیٹ جائیں، پاؤں زمین پر اور کولہوں کے برابر فاصلے پر۔ نرم گیند گھٹنوں کے درمیان رکھیں۔",
    },
    quickSteps: {
      en: [
        "Lie on your back, knees bent, soft ball squeezed between your knees.",
        "Press through your heels and lift only your hips — shoulders stay on the floor.",
        "Hold 3 seconds, then lower slowly.",
      ],
      ur: [
        "سیدھے لیٹ جائیں، گھٹنے مڑے ہوں اور نرم گیند گھٹنوں کے بیچ دبی ہو۔",
        "ایڑیوں سے زور لگا کر صرف کولہے اوپر اٹھائیں — کندھے زمین پر ہی رہیں۔",
        "تین سیکنڈ رکیں، پھر آرام سے نیچے لے آئیں۔",
      ],
    },
    steps: {
      en: [
        "Squeeze the ball gently and keep that pressure throughout.",
        "Breathe out, tighten your lower abdomen and squeeze your buttocks.",
        "Press through your heels and lift your hips until knees, hips and shoulders form a straight line.",
        "Hold at the top without arching your lower back.",
        "Lower slowly, one part of the spine at a time.",
      ],
      ur: [
        "گیند کو ہلکا دبائیں اور یہ دباؤ پوری ورزش میں برقرار رکھیں۔",
        "سانس چھوڑیں، پیٹ کا نچلا حصہ سخت کریں اور کولہے کے پٹھے دبائیں۔",
        "ایڑیوں سے دباؤ ڈالیں اور کولہے اٹھائیں یہاں تک کہ گھٹنے، کولہے اور کندھے ایک سیدھ میں آ جائیں۔",
        "اوپر رکیں مگر کمر کو محراب کی طرح نہ موڑیں۔",
        "آہستہ آہستہ، ریڑھ کی ہڈی کا ایک ایک حصہ نیچے لائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Drive through the heels, not the toes.",
        "Do not chase height — a straight line is the target, not maximum lift.",
        "If the ball drops, the inner thighs have switched off. Reset.",
        "Hamstring cramp means you are lifting too high or too fast.",
      ],
      ur: [
        "ایڑیوں سے زور لگائیں، پنجوں سے نہیں۔",
        "زیادہ اونچائی کی کوشش نہ کریں — مقصد سیدھی لکیر ہے، زیادہ سے زیادہ بلندی نہیں۔",
        "اگر گیند گر جائے تو رانوں کے اندرونی پٹھے بند ہو گئے۔ دوبارہ شروع کریں۔",
        "ران کے پچھلے پٹھوں میں کھنچاؤ کا مطلب ہے آپ بہت اونچا یا بہت تیز اٹھا رہے ہیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Arching the lower back at the top.",
        "Letting the knees drift apart.",
        "Pushing through the toes.",
        "Dropping down quickly instead of lowering.",
      ],
      ur: [
        "اوپر پہنچ کر کمر کو محراب کی طرح موڑنا۔",
        "گھٹنوں کو الگ ہو جانے دینا۔",
        "پنجوں سے زور لگانا۔",
        "آہستہ نیچے لانے کے بجائے یکدم گر جانا۔",
      ],
    },
    safetyPrecautions: {
      en: [
        "Stop if the hamstrings cramp; reduce the lift height.",
        "Keep the neck relaxed — do not push the head into the mat.",
      ],
      ur: [
        "ران کے پچھلے پٹھوں میں کھچاؤ ہو تو رک جائیں؛ بلندی کم کریں۔",
        "گردن ڈھیلی رکھیں — سر کو زمین پر نہ دبائیں۔",
      ],
    },
    repetitions: "10–12",
    sets: "3",
    holdTime: "3 seconds at the top",
    frequency: "Every other day",
    restBetweenSets: "45 seconds",
    progressions: [],
    regressions: ["posterior-pelvic-tilt"],
    contraindications: {
      en: [
        "Acute lumbar fracture or recent spinal surgery",
        "Acute hamstring tear",
        "Hip precautions after total hip replacement",
      ],
      ur: [
        "کمر کی ہڈی کا حالیہ ٹوٹنا یا ریڑھ کا حالیہ آپریشن",
        "ران کے پچھلے پٹھے کا حالیہ پھٹنا",
        "کولہے کی تبدیلی کے آپریشن کے بعد کی پابندیاں",
      ],
    },
    evidence: {
      status: "unreviewed",
      rationale:
        "Bridging is a standard progression for hip extensor strengthening; adductor co-contraction is commonly added for pelvic stability. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      // The upper back and shoulders never leave the mat in a bridge. Anchoring
      // T1 keeps them planted while the pelvis and lumbar spine travel upward,
      // which is the movement the patient actually has to produce.
      anchor: { joint: "t1", x: 101, y: 300 },
      frames: [
        {
          pose: pose({ farDX: 9, farDY: 7 }, SUPINE),
          travel: 800,
          hold: 400,
          label: "Start — hips down, ball squeezed",
        },
        {
          pose: pose(
            {
              pelvisTilt: -16,
              lumbar: -6,
              thorax: 22,
              hipNear: 16,
              kneeNear: 86,
              ankleNear: 60,
              hipFar: 14,
              kneeFar: 84,
              ankleFar: 60,
              farDX: 9,
              farDY: 7,
            },
            SUPINE
          ),
          travel: 900,
          hold: 1000,
          label: "Hips lift — shoulders stay down — hold 3s",
        },
      ],
      props: [{ kind: "mat" }, { kind: "ballBetweenKnees" }],
      arrows: [{ at: "hip", dir: 0, len: 38, label: "hips only" }],
    },
  },

  {
    id: "EX-H-004",
    slug: "clamshell-band",
    name: { en: "Banded Clamshell", ur: "بینڈ کے ساتھ گھٹنا کھولنا" },
    bodyRegion: "Pelvis & Hip",
    joint: ["Hip"],
    musclesTargeted: [
      "Gluteus medius",
      "Gluteus minimus",
      "Deep hip external rotators",
    ],
    conditions: [
      "Gluteal tendinopathy",
      "Iliotibial band syndrome",
      "Patellofemoral pain",
    ],
    purpose: {
      en: "Isolates the side-hip muscles that stop the pelvis dropping and the knee collapsing inward when you walk or run.",
      ur: "کولہے کے پہلو والے پٹھوں کو الگ کر کے مضبوط کرتی ہے جو چلتے یا دوڑتے وقت کولہے کو جھکنے اور گھٹنے کو اندر مڑنے سے روکتے ہیں۔",
    },
    difficulty: "Intermediate",
    contraction: ["Concentric", "Eccentric"],
    mode: "Resisted",
    load: "Resistance band",
    position: "Side-lying",
    equipment: ["Exercise mat", "Looped resistance band"],
    startingPosition: {
      en: "Lie on your side with hips and knees bent, hips stacked directly on top of one another. Place the band just above your knees.",
      ur: "پہلو کے بل لیٹیں، کولہے اور گھٹنے مڑے ہوئے اور کولہے بالکل ایک دوسرے کے اوپر۔ بینڈ گھٹنوں سے ذرا اوپر رکھیں۔",
    },
    quickSteps: {
      en: [
        "Lie on your side, knees bent, hips stacked, band above the knees.",
        "Keeping your feet together, rotate the top knee open like a clam.",
        "Stop before the hip rolls back. Lower slowly.",
      ],
      ur: [
        "پہلو کے بل لیٹ جائیں، گھٹنے مڑے ہوں اور بینڈ گھٹنوں سے اوپر ہو۔",
        "پاؤں آپس میں جوڑے رکھیں اور اوپر والا گھٹنا سیپ کی طرح کھولیں۔",
        "جیسے ہی کولہا پیچھے گھومنے لگے رک جائیں، پھر آرام سے نیچے لائیں۔",
      ],
    },
    steps: {
      en: [
        "Draw your lower abdomen in gently to stop the pelvis rolling.",
        "Keep your feet touching throughout.",
        "Lift the top knee against the band, opening like a clam.",
        "Stop the moment the pelvis begins to roll backwards.",
        "Lower slowly against the band's resistance.",
      ],
      ur: [
        "پیٹ کا نچلا حصہ ہلکا اندر کھینچیں تاکہ کولہا نہ گھومے۔",
        "پاؤں پوری ورزش میں آپس میں جڑے رہیں۔",
        "اوپر والا گھٹنا بینڈ کے خلاف اٹھائیں، جیسے سیپ کھلتی ہے۔",
        "جیسے ہی کولہا پیچھے گھومنے لگے، رک جائیں۔",
        "بینڈ کی مزاحمت کے خلاف آہستہ نیچے لائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Small and honest beats large and compensated.",
        "Place a hand on your top hip — if it rolls back, you have gone too far.",
        "You should feel this on the outside of the hip, not in the back.",
        "A band that is too strong will force you to cheat.",
      ],
      ur: [
        "چھوٹی اور درست حرکت بڑی اور غلط حرکت سے بہتر ہے۔",
        "اوپر والے کولہے پر ہاتھ رکھیں — اگر وہ پیچھے گھومے تو آپ حد سے آگے چلے گئے۔",
        "یہ کولہے کے باہر کی طرف محسوس ہونی چاہیے، کمر میں نہیں۔",
        "بہت سخت بینڈ آپ کو غلط طریقہ اپنانے پر مجبور کر دے گا۔",
      ],
    },
    commonMistakes: {
      en: [
        "Rolling the top hip backwards to gain range.",
        "Letting the feet separate.",
        "Moving quickly with momentum.",
        "Using too strong a band.",
      ],
      ur: [
        "زیادہ حرکت کے لیے اوپر والا کولہا پیچھے گھمانا۔",
        "پاؤں الگ ہو جانے دینا۔",
        "جھٹکے کے ساتھ تیزی سے حرکت کرنا۔",
        "بہت سخت بینڈ استعمال کرنا۔",
      ],
    },
    safetyPrecautions: {
      en: [
        "Pain on the outside of the hip may mean tendon compression — reduce range and review.",
        "Keep the range small and controlled.",
      ],
      ur: [
        "کولہے کے باہر درد کا مطلب پٹھے پر دباؤ ہو سکتا ہے — حرکت کم کریں اور مشورہ لیں۔",
        "حرکت چھوٹی اور قابو میں رکھیں۔",
      ],
    },
    repetitions: "12–15 each side",
    sets: "3",
    holdTime: "1–2 seconds",
    frequency: "Every other day",
    restBetweenSets: "45 seconds",
    progressions: [],
    regressions: [],
    contraindications: {
      en: [
        "Acute gluteal tendon tear",
        "Hip precautions after total hip replacement",
        "Acute lateral hip bursitis with marked pain on pressure",
      ],
      ur: [
        "کولہے کے پٹھے کا حالیہ پھٹنا",
        "کولہے کی تبدیلی کے آپریشن کے بعد کی پابندیاں",
        "کولہے کے پہلو کی شدید سوزش جس میں دباؤ سے تیز درد ہو",
      ],
    },
    evidence: {
      status: "unreviewed",
      rationale:
        "Clamshell variants are routinely used to target gluteus medius with comparatively low tensor fasciae latae involvement. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        {
          pose: pose({ farDX: 12, farDY: 10 }, SIDE_LYING),
          travel: 800,
          hold: 400,
          label: "Start — knees together, hips stacked",
        },
        {
          // Knee flexion is held constant and the ankle compensates, so the
          // top leg rotates about the hip instead of straightening — which is
          // what a clamshell actually is.
          pose: pose(
            { hipNear: 74, kneeNear: 90, ankleNear: 8, farDX: 12, farDY: 10 },
            SIDE_LYING
          ),
          travel: 900,
          hold: 900,
          label: "Top knee rotates open — feet stay together",
        },
      ],
      props: [{ kind: "mat" }, { kind: "band" }],
      arrows: [{ at: "knee", dir: 20, len: 34, curved: true, label: "open" }],
    },
  },

  {
    id: "EX-K-005",
    slug: "straight-leg-raise",
    name: { en: "Straight Leg Raise", ur: "سیدھی ٹانگ اٹھانا" },
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
    ],
    purpose: {
      en: "Loads the thigh muscle without bending the knee at all, which makes it usable very early after injury or surgery.",
      ur: "گھٹنا موڑے بغیر ران کے پٹھے پر زور ڈالتی ہے، اس لیے چوٹ یا آپریشن کے فوراً بعد بھی کی جا سکتی ہے۔",
    },
    difficulty: "Beginner",
    contraction: ["Concentric", "Eccentric", "Isometric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Supine",
    equipment: ["Exercise mat"],
    startingPosition: {
      en: "Lie on your back. Bend the other knee with the foot flat. Keep the exercising leg straight along the mat.",
      ur: "سیدھے لیٹ جائیں۔ دوسری ٹانگ کا گھٹنا موڑ کر پاؤں زمین پر رکھیں۔ ورزش والی ٹانگ زمین پر سیدھی رکھیں۔",
    },
    quickSteps: {
      en: [
        "Lie on your back, one knee bent, the exercising leg straight.",
        "Tighten the thigh, then lift the straight leg to the height of the other knee.",
        "Hold 2 seconds, then lower slowly.",
      ],
      ur: [
        "سیدھے لیٹ جائیں، ایک گھٹنا مڑا ہوا اور دوسری ٹانگ بالکل سیدھی۔",
        "پہلے ران سخت کریں، پھر سیدھی ٹانگ کو دوسرے گھٹنے کی اونچائی تک اٹھائیں۔",
        "دو سیکنڈ رکیں، پھر آرام سے نیچے لے آئیں۔",
      ],
    },
    steps: {
      en: [
        "Tighten the thigh of the straight leg first — the kneecap should draw upward.",
        "Keeping the knee locked, lift the leg to the height of the opposite knee.",
        "Hold briefly without letting the knee bend.",
        "Lower slowly until the heel touches down.",
        "Let the thigh relax fully before the next repetition.",
      ],
      ur: [
        "پہلے سیدھی ٹانگ کی ران سخت کریں — گھٹنے کی ٹوپی اوپر کھنچنی چاہیے۔",
        "گھٹنا بالکل سیدھا رکھتے ہوئے ٹانگ کو دوسرے گھٹنے کی بلندی تک اٹھائیں۔",
        "گھٹنا مڑنے دیے بغیر تھوڑی دیر رکیں۔",
        "آہستہ نیچے لائیں یہاں تک کہ ایڑی زمین کو چھو لے۔",
        "اگلی بار سے پہلے ران کو مکمل ڈھیلا چھوڑ دیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Tighten the thigh before the leg leaves the floor, not after.",
        "If the knee bends as you lift, go back to simple thigh tightening for now.",
        "Do not lift too high — the opposite knee's height is enough.",
        "Keep the lower back flat throughout.",
      ],
      ur: [
        "ٹانگ اٹھانے سے پہلے ران سخت کریں، بعد میں نہیں۔",
        "اگر اٹھاتے وقت گھٹنا مڑ جائے تو فی الحال صرف ران سخت کرنے کی ورزش کریں۔",
        "بہت اونچا نہ اٹھائیں — دوسرے گھٹنے کی بلندی کافی ہے۔",
        "پوری ورزش میں کمر زمین سے لگی رہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting the knee bend during the lift.",
        "Arching the lower back off the mat.",
        "Lifting far too high.",
        "Dropping the leg rather than lowering it.",
      ],
      ur: [
        "اٹھاتے وقت گھٹنا مڑ جانے دینا۔",
        "کمر کو زمین سے اٹھا لینا۔",
        "بہت زیادہ اونچا اٹھانا۔",
        "ٹانگ کو آہستہ نیچے لانے کے بجائے گرا دینا۔",
      ],
    },
    safetyPrecautions: {
      en: [
        "If the knee bends as you lift, stay with thigh tightening a little longer.",
        "Keep the lower back flat; if it arches, reduce the height.",
      ],
      ur: [
        "اگر اٹھاتے وقت گھٹنا مڑے تو کچھ عرصہ صرف ران سخت کرنے کی ورزش جاری رکھیں۔",
        "کمر زمین سے لگی رہے؛ اگر اٹھے تو بلندی کم کریں۔",
      ],
    },
    repetitions: "10",
    sets: "3 each leg",
    holdTime: "2–3 seconds",
    frequency: "Daily",
    restBetweenSets: "30 seconds",
    progressions: [],
    regressions: [],
    contraindications: {
      en: [
        "Acute hip flexor strain",
        "Post-operative restrictions on active hip flexion",
        "Unstable lumbar spine where the back cannot be kept flat",
      ],
      ur: [
        "کولہے کے اگلے پٹھے کا حالیہ کھنچاؤ",
        "آپریشن کے بعد کولہا خود موڑنے پر پابندی",
        "کمر کی عدم استحکام جس میں کمر زمین سے نہ لگ سکے",
      ],
    },
    evidence: {
      status: "unreviewed",
      rationale:
        "Straight leg raise is a conventional early-stage quadriceps exercise where knee range is restricted or painful. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
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
      arrows: [{ at: "ankle", dir: 0, len: 36, label: "lift" }],
    },
  },

  {
    id: "EX-K-006",
    slug: "wall-sit",
    name: { en: "Wall Sit (Isometric)", ur: "دیوار کے سہارے بیٹھنا" },
    bodyRegion: "Knee",
    joint: ["Knee", "Hip", "Ankle"],
    musclesTargeted: ["Quadriceps", "Gluteus maximus", "Soleus"],
    conditions: [
      "Patellofemoral pain",
      "Knee osteoarthritis",
      "Quadriceps endurance deficit",
    ],
    purpose: {
      en: "Builds thigh endurance under a steady hold, which an irritable knee often tolerates better than moving exercise.",
      ur: "مسلسل دباؤ کے تحت ران کی برداشت بڑھاتی ہے، جسے حساس گھٹنا اکثر حرکت والی ورزش سے بہتر برداشت کرتا ہے۔",
    },
    difficulty: "Intermediate",
    contraction: ["Isometric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["A clear wall"],
    startingPosition: {
      en: "Stand with your back flat against a wall and walk your feet forward about two steps, hip-width apart.",
      ur: "کمر دیوار سے لگا کر کھڑے ہوں اور پاؤں تقریباً دو قدم آگے لے جائیں، کولہوں کے برابر فاصلے پر۔",
    },
    quickSteps: {
      en: [
        "Stand with your back flat on a wall, feet two steps forward.",
        "Slide down until your knees bend towards 90°, keeping knees behind your toes.",
        "Hold, breathing steadily, then push up through your heels.",
      ],
      ur: [
        "کمر دیوار سے لگا کر کھڑے ہوں اور پاؤں دو قدم آگے کر لیں۔",
        "نیچے کھسکتے جائیں یہاں تک کہ گھٹنے تقریباً نوے ڈگری پر مڑ جائیں۔",
        "سانس چلتی رہے۔ رکیں، پھر ایڑیوں سے زور لگا کر اوپر آ جائیں۔",
      ],
    },
    steps: {
      en: [
        "Keep your whole back in contact with the wall.",
        "Slide down until your knees bend towards 90 degrees.",
        "Check the knees stay behind the toes and track over the second toe.",
        "Hold the position, breathing steadily.",
        "Push through your heels and slide back up.",
      ],
      ur: [
        "پوری کمر دیوار سے لگی رہے۔",
        "نیچے کھسکیں یہاں تک کہ گھٹنے تقریباً 90 درجے پر مڑ جائیں۔",
        "دیکھیں کہ گھٹنے پنجوں سے پیچھے رہیں اور دوسری انگلی کی سیدھ میں ہوں۔",
        "اس حالت میں رکیں اور سانس لیتے رہیں۔",
        "ایڑیوں سے زور لگا کر واپس اوپر آ جائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Go only as low as stays comfortable — depth is not the goal.",
        "Increasing pain at the front of the knee means come up higher.",
        "Never hold to the point of trembling or collapse.",
        "Breathe steadily — do not hold your breath.",
      ],
      ur: [
        "صرف اتنا نیچے جائیں جتنا آرام دہ ہو — گہرائی مقصد نہیں۔",
        "گھٹنے کے سامنے درد بڑھے تو تھوڑا اوپر آ جائیں۔",
        "کبھی اس حد تک نہ رکیں کہ ٹانگیں کانپنے لگیں۔",
        "سانس معمول کے مطابق لیتے رہیں — سانس نہ روکیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting the knees fall inward.",
        "Sliding too low too early.",
        "Holding the breath.",
        "Coming away from the wall at the lower back.",
      ],
      ur: [
        "گھٹنوں کو اندر کی طرف مڑنے دینا۔",
        "بہت جلد بہت نیچے چلے جانا۔",
        "سانس روک لینا۔",
        "کمر کا دیوار سے ہٹ جانا۔",
      ],
    },
    safetyPrecautions: {
      en: [
        "Take care if you have blood pressure concerns — sustained holds raise blood pressure.",
        "Do not hold to failure.",
      ],
      ur: [
        "اگر بلڈ پریشر کا مسئلہ ہو تو احتیاط کریں — دیر تک رکنے سے بلڈ پریشر بڑھتا ہے۔",
        "تھکن کی انتہا تک نہ رکیں۔",
      ],
    },
    repetitions: "3–5 holds",
    sets: "1–2",
    holdTime: "20–45 seconds",
    frequency: "Every other day",
    restBetweenSets: "60 seconds",
    progressions: [],
    regressions: [],
    contraindications: {
      en: [
        "Uncontrolled hypertension",
        "Acute knee effusion with marked pain",
        "Weight-bearing restrictions after surgery",
      ],
      ur: [
        "بے قابو بلند فشارِ خون",
        "گھٹنے میں حالیہ پانی بھر جانا اور تیز درد",
        "آپریشن کے بعد وزن ڈالنے پر پابندی",
      ],
    },
    evidence: {
      status: "unreviewed",
      rationale:
        "Sustained isometric quadriceps loading is commonly used in irritable patellofemoral and tendinopathic presentations. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
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
      arrows: [{ at: "pelvis", dir: 180, len: 30, label: "slide down" }],
    },
  },
];
