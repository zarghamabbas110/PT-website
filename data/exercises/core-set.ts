import { pose } from "@/lib/figure";
import type { Exercise } from "../schema";
import { PRONE, SEATED, SIDE_LYING, STAND, SUPINE } from "./bases";

/* ==========================================================================
   CORE CLINICAL SET
   --------------------------------------------------------------------------
   The exercises most often prescribed first in each region: the plain bridge,
   the figure-four, straight leg raising with a quad set, extension in lying,
   and the desk-side postural drills. Drafts pending clinical review.
   ========================================================================== */

export const CORE_SET: Exercise[] = [
  {
    id: "EX-H-008",
    slug: "glute-bridge",
    name: { en: "Glute Bridge", ur: "کولہے اٹھانا" },
    bodyRegion: "Pelvis & Hip",
    joint: ["Hip", "Lumbar spine L1–L5"],
    musclesTargeted: ["Gluteus maximus", "Hamstrings", "Transversus abdominis"],
    conditions: ["Gluteal weakness", "Low back pain", "Post-partum recovery"],
    purpose: { en: "The basic hip lift — the foundation exercise for the buttock muscles, with the back fully supported.", ur: "بنیادی کولہا اٹھانے کی ورزش — کولہے کے پٹھوں کی بنیاد، جس میں کمر کو پورا سہارا ملتا ہے۔" },
    exerciseType: "Strengthening",
    difficulty: "Beginner",
    contraction: ["Concentric", "Eccentric", "Isometric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Supine",
    equipment: ["Exercise mat"],
    startingPosition: { en: "Lie on your back with your knees bent, feet flat and hip-width apart, arms by your sides.", ur: "گھٹنے موڑ کر سیدھے لیٹ جائیں، پاؤں زمین پر اور کولہوں کے برابر فاصلے پر، بازو پہلوؤں پر۔" },
    quickSteps: {
      en: [
        "Lie on your back, knees bent, feet flat.",
        "Press through your heels and lift your hips.",
        "Hold 3 seconds, then lower slowly.",
      ],
      ur: [
        "سیدھے لیٹ جائیں، گھٹنے مڑے، پاؤں زمین پر۔",
        "ایڑیوں سے زور لگا کر کولہے اٹھائیں۔",
        "تین سیکنڈ رکیں، پھر آہستہ نیچے لائیں۔",
      ],
    },
    steps: {
      en: [
        "Set the feet hip-width apart, close enough to touch with your fingertips.",
        "Breathe out and tighten the lower abdomen.",
        "Press through the heels and lift the hips until knees, hips and shoulders line up.",
        "Hold at the top, then lower slowly, one part of the spine at a time.",
      ],
      ur: [
        "پاؤں کولہوں کے برابر فاصلے پر رکھیں، اتنے قریب کہ انگلیوں سے چھو سکیں۔",
        "سانس چھوڑیں اور پیٹ کا نچلا حصہ سخت کریں۔",
        "ایڑیوں سے زور لگا کر کولہے اٹھائیں یہاں تک کہ گھٹنے، کولہے اور کندھے ایک سیدھ میں آئیں۔",
        "اوپر رکیں، پھر ریڑھ کا ایک ایک حصہ آہستہ نیچے لائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Drive through the heels, not the toes.",
        "A straight line is the target, not maximum height.",
        "Do not arch the low back at the top.",
      ],
      ur: [
        "ایڑیوں سے زور لگائیں، پنجوں سے نہیں۔",
        "مقصد سیدھی لکیر ہے، زیادہ سے زیادہ بلندی نہیں۔",
        "اوپر پہنچ کر کمر کو محراب نہ بنائیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Arching the low back at the top.",
        "Pushing through the toes.",
        "Dropping down quickly.",
        "Letting the knees fall apart.",
      ],
      ur: [
        "اوپر پہنچ کر کمر کو محراب بنانا۔",
        "پنجوں سے زور لگانا۔",
        "یکدم نیچے گر جانا۔",
        "گھٹنوں کا الگ ہو جانا۔",
      ],
    },
    safetyPrecautions: {
      en: [
        "Stop if you feel a pinch at the front of the hip.",
        "Keep the pelvis level; do not let it roll back.",
      ],
      ur: [
        "کولہے کے اگلے حصے میں چبھن محسوس ہو تو رک جائیں۔",
        "کولہا سیدھا رکھیں؛ اسے پیچھے نہ لڑھکنے دیں۔",
      ],
    },
    repetitions: "10–12",
    sets: "3",
    holdTime: "3 seconds at the top",
    frequency: "Every other day",
    restBetweenSets: "30 seconds",
    progressions: ["bridge-single-leg"],
    regressions: [],
    contraindications: {
      en: [
        "Acute hip fracture",
        "Hip precautions after joint replacement",
        "Recent hip surgery unless cleared",
      ],
      ur: [
        "کولہے کی حالیہ ٹوٹ پھوٹ",
        "کولہے کی تبدیلی کے بعد کی پابندیاں",
        "کولہے کا حالیہ آپریشن، جب تک اجازت نہ ہو",
      ],
    },
    evidence: {
      status: "unreviewed",
      rationale: "Bridging is a standard first-line hip extensor strengthening exercise. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ rootRot: -90, hipNear: 45, kneeNear: 100, hipFar: 42, kneeFar: 98 }, SUPINE), travel: 800, hold: 400, label: "Lying with knees bent" },
        { pose: pose({ rootRot: -112, hipNear: 2, kneeNear: 100, hipFar: 2, kneeFar: 100 }, SUPINE), travel: 1000, hold: 900, label: "Lift the hips into a line" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-H-009",
    slug: "piriformis-stretch",
    name: { en: "Figure-Four Stretch", ur: "کولہے کے پچھلے پٹھے کا کھنچاؤ" },
    bodyRegion: "Pelvis & Hip",
    joint: ["Hip", "Sacroiliac"],
    musclesTargeted: ["Piriformis", "Gluteus medius", "Deep hip rotators"],
    conditions: ["Buttock pain", "Sciatica recovery", "Hip tightness", "Low back pain"],
    purpose: { en: "Opens the deep buttock muscles that, when tight, cause a deep ache and can irritate the sciatic nerve.", ur: "کولہے کے گہرے پٹھوں کو کھولتی ہے جو سخت ہوں تو گہرا درد اور سیاٹک عصب میں خرابی پیدا کرتے ہیں۔" },
    exerciseType: "Stretching",
    difficulty: "Beginner",
    contraction: ["Passive"],
    mode: "Passive",
    load: "Bodyweight",
    position: "Supine",
    equipment: ["Exercise mat"],
    startingPosition: { en: "Lie on your back with both knees bent, then cross one ankle over the opposite thigh.", ur: "دونوں گھٹنے موڑ کر سیدھے لیٹ جائیں، پھر ایک ٹخنہ دوسری ران پر رکھیں۔" },
    quickSteps: {
      en: [
        "Lie on your back, cross one ankle over the opposite thigh.",
        "Reach through and pull the supporting thigh towards your chest.",
        "Hold 30 seconds, then swap sides.",
      ],
      ur: [
        "سیدھے لیٹ جائیں، ایک ٹخنہ دوسری ران پر رکھیں۔",
        "درمیان سے ہاتھ ڈال کر نیچے والی ران سینے کی طرف کھینچیں۔",
        "تیس سیکنڈ رکیں، پھر طرف بدلیں۔",
      ],
    },
    steps: {
      en: [
        "Cross the ankle over the opposite thigh, just above the knee.",
        "Reach both hands through the gap and hold the supporting thigh.",
        "Draw that thigh towards your chest until you feel a stretch in the buttock.",
        "Hold, keeping the head down, then release slowly.",
      ],
      ur: [
        "ٹخنہ دوسری ران پر گھٹنے سے ذرا اوپر رکھیں۔",
        "دونوں ہاتھ خلا سے گزار کر نیچے والی ران پکڑیں۔",
        "اُس ران کو سینے کی طرف کھینچیں یہاں تک کہ کولہے میں کھنچاؤ ہو۔",
        "سر نیچے رکھتے ہوئے رکیں، پھر آہستہ چھوڑیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "The stretch is felt deep in the buttock of the crossed leg.",
        "Keep the crossed knee pushed gently outward.",
        "Stop if pain travels down the leg.",
      ],
      ur: [
        "کھنچاؤ اُس ٹانگ کے کولہے میں گہرا محسوس ہوتا ہے جو اوپر رکھی ہے۔",
        "اوپر والا گھٹنا نرمی سے باہر کی طرف دبائے رکھیں۔",
        "درد ٹانگ میں پھیلے تو رک جائیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Lifting the head and shoulders off the floor.",
        "Letting the crossed knee collapse inward.",
        "Pulling hard enough to hurt.",
        "Holding the breath.",
      ],
      ur: [
        "سر اور کندھے فرش سے اٹھا لینا۔",
        "اوپر والے گھٹنے کا اندر کی طرف گر جانا۔",
        "اتنا کھینچنا کہ درد ہو۔",
        "سانس روکنا۔",
      ],
    },
    safetyPrecautions: {
      en: [
        "Stop if you feel a pinch at the front of the hip.",
        "Keep the pelvis level; do not let it roll back.",
      ],
      ur: [
        "کولہے کے اگلے حصے میں چبھن محسوس ہو تو رک جائیں۔",
        "کولہا سیدھا رکھیں؛ اسے پیچھے نہ لڑھکنے دیں۔",
      ],
    },
    repetitions: "3 each side",
    sets: "2",
    holdTime: "30 seconds",
    frequency: "Daily",
    restBetweenSets: "30 seconds",
    progressions: [],
    regressions: [],
    contraindications: {
      en: [
        "Acute hip fracture",
        "Hip precautions after joint replacement",
        "Recent hip surgery unless cleared",
      ],
      ur: [
        "کولہے کی حالیہ ٹوٹ پھوٹ",
        "کولہے کی تبدیلی کے بعد کی پابندیاں",
        "کولہے کا حالیہ آپریشن، جب تک اجازت نہ ہو",
      ],
    },
    evidence: {
      status: "unreviewed",
      rationale: "Figure-four stretching is commonly used for deep gluteal tightness and posterior hip pain. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ hipNear: 45, kneeNear: 100, hipFar: 45, kneeFar: 100 }, SUPINE), travel: 800, hold: 400, label: "Ankle crossed over the thigh" },
        { pose: pose({ hipNear: 95, kneeNear: 110, hipRotNear: 40, hipFar: 75, kneeFar: 100 }, SUPINE), travel: 1000, hold: 900, label: "Draw the thigh towards the chest" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-K-007",
    slug: "straight-leg-raise-quads",
    name: { en: "Straight Leg Raise with Quad Set", ur: "ران سخت کر کے ٹانگ اٹھانا" },
    bodyRegion: "Knee",
    joint: ["Tibiofemoral", "Hip"],
    musclesTargeted: ["Quadriceps femoris", "Iliopsoas", "Rectus femoris"],
    conditions: ["Post-knee-surgery rehabilitation", "Extension lag", "Quadriceps weakness"],
    purpose: { en: "Combines tightening the thigh with lifting the leg, which is how the knee is protected while strength returns.", ur: "ران سخت کرنے اور ٹانگ اٹھانے کو ملاتی ہے، جس سے طاقت واپس آنے تک گھٹنے کی حفاظت رہتی ہے۔" },
    exerciseType: "Strengthening",
    difficulty: "Beginner",
    contraction: ["Isometric", "Concentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Supine",
    equipment: ["Exercise mat"],
    startingPosition: { en: "Lie on your back with one knee bent and the other leg straight out on the floor.", ur: "سیدھے لیٹ جائیں، ایک گھٹنا مڑا اور دوسری ٹانگ سیدھی فرش پر۔" },
    quickSteps: {
      en: [
        "Lie on your back, one knee bent, the other leg straight.",
        "Tighten the thigh, then lift the straight leg about 20 cm.",
        "Hold 3 seconds, then lower slowly.",
      ],
      ur: [
        "سیدھے لیٹ جائیں، ایک گھٹنا مڑا، دوسری ٹانگ سیدھی۔",
        "ران سخت کریں، پھر سیدھی ٹانگ تقریباً بیس سینٹی میٹر اٹھائیں۔",
        "تین سیکنڈ رکیں، پھر آہستہ نیچے لائیں۔",
      ],
    },
    steps: {
      en: [
        "Bend the other knee to protect the low back.",
        "Tighten the thigh so the knee is fully straight — this comes first.",
        "Keeping it straight, lift the leg to the height of the other knee.",
        "Hold, then lower slowly and relax fully.",
      ],
      ur: [
        "کمر کی حفاظت کے لیے دوسرا گھٹنا موڑ لیں۔",
        "ران سخت کریں تاکہ گھٹنا پوری طرح سیدھا ہو — یہ پہلے کریں۔",
        "سیدھا رکھتے ہوئے ٹانگ دوسرے گھٹنے کی اونچائی تک اٹھائیں۔",
        "رکیں، پھر آہستہ نیچے لائیں اور پوری طرح ڈھیلا چھوڑیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Tighten the thigh before lifting — the order matters.",
        "If the knee sags as you lift, lower the leg and start again.",
        "Stop if the low back arches.",
      ],
      ur: [
        "اٹھانے سے پہلے ران سخت کریں — ترتیب اہم ہے۔",
        "اٹھاتے وقت گھٹنا جھکے تو ٹانگ نیچے کر کے دوبارہ شروع کریں۔",
        "کمر محراب بنے تو رک جائیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting the knee bend during the lift.",
        "Lifting too high.",
        "Arching the low back.",
        "Rushing the lowering.",
      ],
      ur: [
        "اٹھاتے وقت گھٹنے کا مڑ جانا۔",
        "بہت اونچا اٹھانا۔",
        "کمر کو محراب بنانا۔",
        "نیچے لانے میں جلدی کرنا۔",
      ],
    },
    safetyPrecautions: {
      en: [
        "Stop if the knee swells or gives way.",
        "Keep the kneecap tracking over the middle of the foot.",
      ],
      ur: [
        "گھٹنا سوج جائے یا جواب دے تو رک جائیں۔",
        "گھٹنے کی ٹوپی پاؤں کے درمیان کی سیدھ میں رکھیں۔",
      ],
    },
    repetitions: "10",
    sets: "3",
    holdTime: "3 seconds",
    frequency: "Daily",
    restBetweenSets: "30 seconds",
    progressions: [],
    regressions: [],
    contraindications: {
      en: [
        "Acute knee fracture or locked knee",
        "Recent knee surgery unless cleared",
        "Large tense joint effusion",
      ],
      ur: [
        "گھٹنے کی حالیہ ٹوٹ پھوٹ یا گھٹنے کا جام ہو جانا",
        "گھٹنے کا حالیہ آپریشن، جب تک اجازت نہ ہو",
        "جوڑ میں زیادہ پانی بھر جانا",
      ],
    },
    evidence: {
      status: "unreviewed",
      rationale: "Straight leg raising with a quadriceps set is standard early rehabilitation after knee surgery. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ hipNear: 0, kneeNear: 2, hipFar: 45, kneeFar: 100 }, SUPINE), travel: 800, hold: 400, label: "Leg straight on the floor" },
        { pose: pose({ hipNear: 36, kneeNear: 2, hipFar: 45, kneeFar: 100 }, SUPINE), travel: 1000, hold: 900, label: "Tighten the thigh and lift" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-K-008",
    slug: "clamshell-progression",
    name: { en: "Clamshell with Hip Lift", ur: "کولہا اٹھا کر کلیم شیل" },
    bodyRegion: "Knee",
    joint: ["Hip", "Tibiofemoral"],
    musclesTargeted: ["Gluteus medius", "Gluteus minimus", "Deep hip rotators"],
    conditions: ["Gluteal weakness", "Knee pain", "Hip instability", "Return to sport"],
    purpose: { en: "A harder clamshell where the whole hip lifts, loading the side of the hip much more strongly.", ur: "مشکل کلیم شیل جس میں پورا کولہا اٹھتا ہے اور کولہے کے پہلو پر زیادہ بوجھ پڑتا ہے۔" },
    exerciseType: "Strengthening",
    difficulty: "Advanced",
    contraction: ["Concentric", "Isometric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Side-lying",
    equipment: ["Exercise mat"],
    startingPosition: { en: "Lie on your side with your hips and knees bent, propped up on the lower forearm.", ur: "پہلو پر لیٹ جائیں، کولہے اور گھٹنے مڑے ہوں، نیچے والے بازو پر ٹیک لگائیں۔" },
    quickSteps: {
      en: [
        "Lie on your side propped on your forearm, knees bent.",
        "Lift the hips off the floor, then open the top knee.",
        "Hold 3 seconds, then lower with control.",
      ],
      ur: [
        "بازو پر ٹیک لگا کر پہلو پر لیٹیں، گھٹنے مڑے۔",
        "کولہے فرش سے اٹھائیں، پھر اوپر والا گھٹنا کھولیں۔",
        "تین سیکنڈ رکیں، پھر قابو سے نیچے لائیں۔",
      ],
    },
    steps: {
      en: [
        "Prop up on the lower forearm with the elbow under the shoulder.",
        "Lift the hips so the body makes a straight line.",
        "Holding that, rotate the top knee open.",
        "Hold, then close the knee and lower the hips slowly.",
      ],
      ur: [
        "نیچے والے بازو پر ٹیک لگائیں، کہنی کندھے کے نیچے۔",
        "کولہے اٹھائیں تاکہ جسم سیدھی لکیر بنے۔",
        "اسی حالت میں اوپر والا گھٹنا کھولیں۔",
        "رکیں، پھر گھٹنا بند کریں اور کولہے آہستہ نیچے لائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Master the plain clamshell and the side plank first.",
        "The feet stay together throughout.",
        "Stop if the hips drop or roll back.",
      ],
      ur: [
        "پہلے سادہ کلیم شیل اور سائیڈ پلانک سیکھیں۔",
        "پوری ورزش میں پاؤں ملے رہیں۔",
        "کولہے جھکیں یا پیچھے لڑھکیں تو رک جائیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting the hips sag.",
        "Rolling backwards.",
        "Separating the feet.",
        "Rushing between repetitions.",
      ],
      ur: [
        "کولہوں کا جھک جانا۔",
        "پیچھے لڑھک جانا۔",
        "پاؤں الگ کر لینا۔",
        "دو بار کے درمیان جلدی کرنا۔",
      ],
    },
    safetyPrecautions: {
      en: [
        "Stop if the knee swells or gives way.",
        "Keep the kneecap tracking over the middle of the foot.",
      ],
      ur: [
        "گھٹنا سوج جائے یا جواب دے تو رک جائیں۔",
        "گھٹنے کی ٹوپی پاؤں کے درمیان کی سیدھ میں رکھیں۔",
      ],
    },
    repetitions: "8–10 each side",
    sets: "3",
    holdTime: "3 seconds",
    frequency: "Every other day",
    restBetweenSets: "45 seconds",
    progressions: [],
    regressions: ["clamshell-band"],
    contraindications: {
      en: [
        "Acute knee fracture or locked knee",
        "Recent knee surgery unless cleared",
        "Large tense joint effusion",
      ],
      ur: [
        "گھٹنے کی حالیہ ٹوٹ پھوٹ یا گھٹنے کا جام ہو جانا",
        "گھٹنے کا حالیہ آپریشن، جب تک اجازت نہ ہو",
        "جوڑ میں زیادہ پانی بھر جانا",
      ],
    },
    evidence: {
      status: "unreviewed",
      rationale: "Loaded clamshell variants progress gluteus medius demand. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ hipNear: 40, kneeNear: 90, shoulderNear: 120, elbowNear: 90 }, SIDE_LYING), travel: 800, hold: 400, label: "Propped on the forearm" },
        { pose: pose({ hipNear: 40, kneeNear: 90, hipRotNear: 40, hipFar: 8, shoulderNear: 120, elbowNear: 90 }, SIDE_LYING), travel: 1000, hold: 900, label: "Lift the hips and open the knee" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-L-004",
    slug: "prone-press-up",
    name: { en: "Prone Press Up", ur: "اوندھے لیٹ کر اوپری جسم اٹھانا" },
    bodyRegion: "Lumbar",
    joint: ["Lumbar spine L1–L5"],
    musclesTargeted: ["Erector spinae", "Multifidus"],
    conditions: ["Disc-related low back pain", "Centralising leg pain", "Lumbar stiffness"],
    purpose: { en: "Extends the low back in lying, which for some people draws pain out of the leg and back towards the spine.", ur: "لیٹ کر کمر کو پیچھے موڑتی ہے، جس سے بعض لوگوں میں ٹانگ کا درد واپس کمر کی طرف آ جاتا ہے۔" },
    exerciseType: "Range of motion",
    difficulty: "Beginner",
    contraction: ["Passive", "Concentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Prone",
    equipment: ["Exercise mat"],
    startingPosition: { en: "Lie face down with your hands flat under your shoulders, as if about to push up.", ur: "اوندھے لیٹ جائیں، ہاتھ کندھوں کے نیچے فرش پر رکھیں، جیسے اوپر اٹھنے والے ہوں۔" },
    quickSteps: {
      en: [
        "Lie face down, hands under your shoulders.",
        "Press the upper body up, keeping the hips down on the floor.",
        "Hold 2 seconds, then lower slowly.",
      ],
      ur: [
        "اوندھے لیٹ جائیں، ہاتھ کندھوں کے نیچے۔",
        "اوپری جسم اوپر اٹھائیں، کولہے فرش پر ہی رکھیں۔",
        "دو سیکنڈ رکیں، پھر آہستہ نیچے لائیں۔",
      ],
    },
    steps: {
      en: [
        "Lie face down and relax for a moment first.",
        "Press up on the hands, straightening the arms as far as is comfortable.",
        "Keep the hips and thighs in contact with the floor.",
        "Hold briefly at the top, then lower all the way down.",
      ],
      ur: [
        "پہلے اوندھے لیٹ کر لمحہ بھر ڈھیلا چھوڑیں۔",
        "ہاتھوں پر زور لگا کر اوپر اٹھیں، آرام کی حد تک بازو سیدھے کریں۔",
        "کولہے اور رانیں فرش سے لگی رکھیں۔",
        "اوپر تھوڑا رکیں، پھر پوری طرح نیچے لائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "The hips must stay down — this is the whole point.",
        "If leg pain moves up towards the back, that is a good sign; keep going.",
        "If leg pain travels further down, stop and tell your physiotherapist.",
      ],
      ur: [
        "کولہے نیچے ہی رہیں — یہی اصل بات ہے۔",
        "ٹانگ کا درد اوپر کمر کی طرف آئے تو یہ اچھی علامت ہے؛ جاری رکھیں۔",
        "درد ٹانگ میں مزید نیچے جائے تو رک جائیں اور فزیو تھراپسٹ کو بتائیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Lifting the hips off the floor.",
        "Pressing up too fast.",
        "Holding the breath.",
        "Continuing when leg pain worsens.",
      ],
      ur: [
        "کولہے فرش سے اٹھا لینا۔",
        "بہت تیزی سے اوپر اٹھنا۔",
        "سانس روکنا۔",
        "ٹانگ کا درد بڑھنے کے باوجود جاری رکھنا۔",
      ],
    },
    safetyPrecautions: {
      en: [
        "Stop if pain spreads down the leg or into the foot.",
        "Keep the movement slow and controlled; never bounce.",
      ],
      ur: [
        "اگر درد ٹانگ یا پاؤں کی طرف پھیلے تو رک جائیں۔",
        "حرکت آہستہ اور قابو میں رکھیں؛ جھٹکا نہ دیں۔",
      ],
    },
    repetitions: "10",
    sets: "3",
    holdTime: "2 seconds",
    frequency: "Every 2–3 hours in an acute episode",
    restBetweenSets: "30 seconds",
    progressions: [],
    regressions: [],
    contraindications: {
      en: [
        "Acute lumbar fracture or recent spinal surgery",
        "Cauda equina symptoms — this is an emergency",
        "Progressive neurological loss",
      ],
      ur: [
        "کمر کی ہڈی کا حالیہ ٹوٹنا یا ریڑھ کا حالیہ آپریشن",
        "کاؤڈا ایکوینا کی علامات — یہ ہنگامی حالت ہے",
        "بڑھتی ہوئی اعصابی کمزوری",
      ],
    },
    evidence: {
      status: "unreviewed",
      rationale: "Extension-in-lying is a directional preference exercise used where symptoms centralise. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ lumbar: 0, shoulderNear: 150, elbowNear: 110, shoulderFar: 150, elbowFar: 110 }, PRONE), travel: 800, hold: 400, label: "Lying face down, hands under shoulders" },
        { pose: pose({ lumbar: -42, thorax: -14, shoulderNear: 150, elbowNear: 24, shoulderFar: 150, elbowFar: 24 }, PRONE), travel: 1000, hold: 900, label: "Press the chest up, hips down" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-L-005",
    slug: "lumbar-rotation-supine",
    name: { en: "Supine Lower Trunk Rotation", ur: "لیٹ کر گھٹنے ایک طرف جھکانا" },
    bodyRegion: "Lumbar",
    joint: ["Lumbar spine L1–L5", "Sacroiliac"],
    musclesTargeted: ["Obliques", "Erector spinae", "Quadratus lumborum"],
    conditions: ["Lumbar stiffness", "Low back pain", "Muscle spasm"],
    purpose: { en: "Gently rotates the low back, which eases the muscle tightness that builds up after a painful episode.", ur: "کمر کو نرمی سے گھماتی ہے، جس سے درد کے بعد بننے والی پٹھوں کی سختی کم ہوتی ہے۔" },
    exerciseType: "Range of motion",
    difficulty: "Beginner",
    contraction: ["Passive"],
    mode: "Passive",
    load: "Bodyweight",
    position: "Supine",
    equipment: ["Exercise mat"],
    startingPosition: { en: "Lie on your back with your knees bent together, feet flat, and arms out to the sides.", ur: "سیدھے لیٹ جائیں، گھٹنے ملے اور مڑے ہوں، پاؤں زمین پر اور بازو اطراف میں پھیلے۔" },
    quickSteps: {
      en: [
        "Lie on your back with knees bent together, arms out to the sides.",
        "Let both knees roll slowly to one side.",
        "Hold 10 seconds, return, then roll to the other side.",
      ],
      ur: [
        "گھٹنے ملا کر لیٹ جائیں، بازو اطراف میں۔",
        "دونوں گھٹنے آہستہ ایک طرف جھکنے دیں۔",
        "دس سیکنڈ رکیں، واپس آئیں، پھر دوسری طرف۔",
      ],
    },
    steps: {
      en: [
        "Keep the knees and feet together throughout.",
        "Let both knees roll to one side under control.",
        "Keep both shoulders in contact with the floor.",
        "Hold, then bring the knees back through the middle.",
      ],
      ur: [
        "پوری ورزش میں گھٹنے اور پاؤں ملے رہیں۔",
        "دونوں گھٹنے قابو سے ایک طرف جھکنے دیں۔",
        "دونوں کندھے فرش سے لگے رہیں۔",
        "رکیں، پھر گھٹنے درمیان سے واپس لائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Both shoulders staying down is what creates the rotation.",
        "Let gravity do the work — do not force the knees down.",
        "A gentle pull across the low back is normal.",
      ],
      ur: [
        "دونوں کندھوں کا نیچے رہنا ہی گھماؤ پیدا کرتا ہے۔",
        "کشش ثقل کو کام کرنے دیں — گھٹنوں کو زبردستی نیچے نہ کریں۔",
        "کمر کے آر پار ہلکا کھنچاؤ معمول ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting the opposite shoulder lift.",
        "Forcing the knees to the floor.",
        "Letting the knees separate.",
        "Moving quickly.",
      ],
      ur: [
        "مخالف کندھے کا اٹھ جانا۔",
        "گھٹنوں کو زبردستی فرش تک لے جانا۔",
        "گھٹنوں کا الگ ہو جانا۔",
        "تیزی سے حرکت کرنا۔",
      ],
    },
    safetyPrecautions: {
      en: [
        "Stop if pain spreads down the leg or into the foot.",
        "Keep the movement slow and controlled; never bounce.",
      ],
      ur: [
        "اگر درد ٹانگ یا پاؤں کی طرف پھیلے تو رک جائیں۔",
        "حرکت آہستہ اور قابو میں رکھیں؛ جھٹکا نہ دیں۔",
      ],
    },
    repetitions: "8 each side",
    sets: "2",
    holdTime: "10 seconds",
    frequency: "2–3 times daily",
    restBetweenSets: "30 seconds",
    progressions: [],
    regressions: [],
    contraindications: {
      en: [
        "Acute lumbar fracture or recent spinal surgery",
        "Cauda equina symptoms — this is an emergency",
        "Progressive neurological loss",
      ],
      ur: [
        "کمر کی ہڈی کا حالیہ ٹوٹنا یا ریڑھ کا حالیہ آپریشن",
        "کاؤڈا ایکوینا کی علامات — یہ ہنگامی حالت ہے",
        "بڑھتی ہوئی اعصابی کمزوری",
      ],
    },
    evidence: {
      status: "unreviewed",
      rationale: "Lower trunk rotation in lying is a standard gentle mobilisation for lumbar stiffness. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ hipNear: 45, kneeNear: 100, hipFar: 45, kneeFar: 100 }, SUPINE), travel: 800, hold: 400, label: "Knees bent together" },
        { pose: pose({ hipNear: 45, kneeNear: 100, hipRotNear: 30, hipFar: 45, kneeFar: 100, hipRotFar: 30 }, SUPINE), travel: 1000, hold: 900, label: "Roll both knees to one side" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-CX-006",
    slug: "levator-scapulae-stretch",
    name: { en: "Levator Scapulae Stretch", ur: "گردن کے پچھلے پہلو کا کھنچاؤ" },
    bodyRegion: "Cervical",
    joint: ["Cervical spine C1–C7", "Scapulothoracic"],
    musclesTargeted: ["Levator scapulae"],
    conditions: ["Neck stiffness", "Tension headache", "Desk work stiffness", "Shoulder tension"],
    purpose: { en: "Stretches the muscle running from the neck to the shoulder blade, a common source of one-sided neck ache.", ur: "گردن سے شانے کی ہڈی تک جانے والے پٹھے کو کھینچتی ہے، جو ایک طرف کی گردن درد کی عام وجہ ہے۔" },
    exerciseType: "Stretching",
    difficulty: "Beginner",
    contraction: ["Passive"],
    mode: "Passive",
    load: "No load",
    position: "Sitting",
    equipment: ["Chair"],
    startingPosition: { en: "Sit tall holding the chair edge with the hand on the side to be stretched.", ur: "سیدھے بیٹھیں، جس طرف کھنچاؤ کرنا ہے اُس ہاتھ سے کرسی کا کنارہ پکڑیں۔" },
    quickSteps: {
      en: [
        "Sit tall, holding the chair with one hand.",
        "Turn your head 45 degrees away, then look down into your armpit.",
        "Hold 30 seconds, then swap sides.",
      ],
      ur: [
        "سیدھے بیٹھیں، ایک ہاتھ سے کرسی پکڑیں۔",
        "سر پینتالیس درجے دوسری طرف گھمائیں، پھر بغل کی طرف نیچے دیکھیں۔",
        "تیس سیکنڈ رکیں، پھر طرف بدلیں۔",
      ],
    },
    steps: {
      en: [
        "Anchor the hand on that side under the chair.",
        "Turn the head about 45 degrees away from that side.",
        "Then drop the chin down towards the opposite armpit.",
        "Add a very gentle pull with the free hand and hold.",
      ],
      ur: [
        "اُس طرف کا ہاتھ کرسی کے نیچے جما لیں۔",
        "سر تقریباً پینتالیس درجے دوسری طرف گھمائیں۔",
        "پھر ٹھوڑی مخالف بغل کی طرف نیچے کریں۔",
        "خالی ہاتھ سے بہت ہلکا کھینچیں اور رکیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "The 45-degree turn is what separates this from a plain neck stretch.",
        "Anchoring the hand keeps the shoulder blade down.",
        "Very gentle pressure only.",
      ],
      ur: [
        "پینتالیس درجے کا گھماؤ ہی اسے عام گردن کے کھنچاؤ سے الگ کرتا ہے۔",
        "ہاتھ جمانے سے شانے کی ہڈی نیچے رہتی ہے۔",
        "صرف بہت ہلکا دباؤ۔",
      ],
    },
    commonMistakes: {
      en: [
        "Forgetting to turn the head first.",
        "Letting the anchored shoulder lift.",
        "Pulling hard.",
        "Holding the breath.",
      ],
      ur: [
        "پہلے سر گھمانا بھول جانا۔",
        "جمے ہوئے کندھے کا اٹھ جانا۔",
        "زور سے کھینچنا۔",
        "سانس روکنا۔",
      ],
    },
    safetyPrecautions: {
      en: [
        "Stop at once if you feel dizzy or your vision changes.",
        "A mild stretch is expected; sharp pain is not.",
      ],
      ur: [
        "چکر آئے یا نظر میں تبدیلی ہو تو فوراً رک جائیں۔",
        "ہلکا کھنچاؤ متوقع ہے؛ تیز درد نہیں۔",
      ],
    },
    repetitions: "3 each side",
    sets: "2",
    holdTime: "30 seconds",
    frequency: "2–3 times daily",
    restBetweenSets: "30 seconds",
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
      rationale: "Levator scapulae stretching is commonly used for one-sided posterolateral neck tension. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ neck: 0 }, SEATED), travel: 800, hold: 400, label: "Sit tall, holding the chair" },
        { pose: pose({ neck: 8, head: 6 }, SEATED), travel: 1000, hold: 900, label: "Turn away, then look down" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-T-004",
    slug: "scapular-retraction-seated",
    name: { en: "Seated Shoulder Blade Squeeze", ur: "بیٹھ کر شانے دبانا" },
    bodyRegion: "Thoracic",
    joint: ["Scapulothoracic", "Thoracic spine T1–T12"],
    musclesTargeted: ["Middle trapezius", "Rhomboids", "Lower trapezius"],
    conditions: ["Postural rounding", "Desk work stiffness", "Neck and shoulder tension"],
    purpose: { en: "A simple desk exercise that pulls the shoulders back and undoes an hour of rounding.", ur: "میز پر کرنے والی سادہ ورزش جو کندھوں کو پیچھے کھینچ کر ایک گھنٹے کے جھکاؤ کا اثر ختم کرتی ہے۔" },
    exerciseType: "Strengthening",
    difficulty: "Beginner",
    contraction: ["Isometric", "Concentric"],
    mode: "Active",
    load: "No load",
    position: "Sitting",
    equipment: ["Chair"],
    startingPosition: { en: "Sit tall on a firm chair with your arms relaxed and your feet flat on the floor.", ur: "مضبوط کرسی پر سیدھے بیٹھیں، بازو ڈھیلے اور پاؤں زمین پر۔" },
    quickSteps: {
      en: [
        "Sit tall with your arms relaxed.",
        "Draw the shoulder blades gently together and down.",
        "Hold 5 seconds, then release.",
      ],
      ur: [
        "سیدھے بیٹھیں، بازو ڈھیلے۔",
        "شانے کی ہڈیاں نرمی سے ملائیں اور نیچے کریں۔",
        "پانچ سیکنڈ رکیں، پھر چھوڑ دیں۔",
      ],
    },
    steps: {
      en: [
        "Sit tall with the weight even on both sitting bones.",
        "Draw the shoulder blades towards each other.",
        "At the same time draw them gently downward.",
        "Hold, breathing normally, then release fully.",
      ],
      ur: [
        "سیدھے بیٹھیں، دونوں طرف وزن برابر ہو۔",
        "شانے کی ہڈیاں ایک دوسرے کی طرف کھینچیں۔",
        "ساتھ ہی انہیں نرمی سے نیچے کریں۔",
        "رکیں، سانس لیتے رہیں، پھر پوری طرح چھوڑ دیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Down as well as together — squeezing alone shrugs the shoulders.",
        "Effort is about three out of ten.",
        "Ideal to repeat every hour at a desk.",
      ],
      ur: [
        "ملانے کے ساتھ نیچے بھی کریں — صرف دبانے سے کندھے اُچھل جاتے ہیں۔",
        "زور دس میں سے تقریباً تین ہو۔",
        "میز پر ہر گھنٹے دہرانا بہترین ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Shrugging the shoulders up.",
        "Arching the low back.",
        "Squeezing too hard.",
        "Holding the breath.",
      ],
      ur: [
        "کندھے اوپر اُچھالنا۔",
        "کمر کو محراب بنانا۔",
        "بہت زور سے دبانا۔",
        "سانس روکنا۔",
      ],
    },
    safetyPrecautions: {
      en: [
        "Move within a comfortable range — this should never be forced.",
        "Stop if you feel pain spreading around the ribs.",
      ],
      ur: [
        "آرام دہ حد کے اندر حرکت کریں — زبردستی بالکل نہ کریں۔",
        "پسلیوں کے گرد درد پھیلے تو رک جائیں۔",
      ],
    },
    repetitions: "10",
    sets: "3",
    holdTime: "5 seconds",
    frequency: "Daily, or hourly at a desk",
    restBetweenSets: "30 seconds",
    progressions: [],
    regressions: [],
    contraindications: {
      en: [
        "Acute vertebral fracture",
        "Recent spinal surgery unless cleared",
        "Unstable osteoporosis",
      ],
      ur: [
        "ریڑھ کے مہرے کا حالیہ ٹوٹنا",
        "ریڑھ کا حالیہ آپریشن، جب تک اجازت نہ ہو",
        "غیر مستحکم آسٹیوپوروسس",
      ],
    },
    evidence: {
      status: "unreviewed",
      rationale: "Scapular retraction exercises are widely used in postural retraining programmes. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ shoulderNear: 174, shoulderFar: 174 }, SEATED), travel: 800, hold: 400, label: "Sitting tall, arms relaxed" },
        { pose: pose({ shoulderNear: 180, shoulderFar: 180 }, SEATED), travel: 1000, hold: 900, label: "Squeeze the shoulder blades" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-A-008",
    slug: "toe-walking",
    name: { en: "Toe and Heel Walking", ur: "پنجوں اور ایڑیوں پر چلنا" },
    bodyRegion: "Ankle & Foot",
    joint: ["Talocrural", "Metatarsophalangeal"],
    musclesTargeted: ["Gastrocnemius", "Soleus", "Tibialis anterior"],
    conditions: ["Ankle weakness", "Balance training", "Foot drop recovery", "Return to walking"],
    purpose: { en: "Trains both sides of the lower leg while walking, which carries straight over into normal gait.", ur: "چلتے ہوئے پنڈلی کے دونوں طرف کے پٹھوں کو مضبوط کرتی ہے، جس کا اثر سیدھا عام چال پر پڑتا ہے۔" },
    exerciseType: "Strengthening",
    difficulty: "Intermediate",
    contraction: ["Concentric", "Isometric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["Clear space", "Support nearby"],
    startingPosition: { en: "Stand tall at one end of a clear space with a wall or rail within reach.", ur: "کھلی جگہ کے ایک سرے پر سیدھے کھڑے ہوں، دیوار یا ریلنگ پہنچ میں ہو۔" },
    quickSteps: {
      en: [
        "Walk 10 steps up on your toes.",
        "Turn around and walk 10 steps on your heels, toes lifted.",
        "Rest, then repeat.",
      ],
      ur: [
        "پنجوں پر دس قدم چلیں۔",
        "مڑ کر ایڑیوں پر دس قدم چلیں، پنجے اوپر اٹھے ہوں۔",
        "آرام کریں، پھر دہرائیں۔",
      ],
    },
    steps: {
      en: [
        "Rise up onto the toes and walk forward slowly.",
        "Keep the steps small and controlled.",
        "Then walk back on the heels with the toes lifted clear of the floor.",
        "Stay near a wall or rail in case you need it.",
      ],
      ur: [
        "پنجوں پر اٹھ کر آہستہ آگے چلیں۔",
        "قدم چھوٹے اور قابو میں رکھیں۔",
        "پھر ایڑیوں پر واپس چلیں، پنجے فرش سے اوپر اٹھے ہوں۔",
        "دیوار یا ریلنگ کے قریب رہیں تاکہ ضرورت پر سہارا ملے۔",
      ],
    },
    specialInstructions: {
      en: [
        "Heel walking is usually the harder of the two.",
        "Keep the steps short — this is control, not speed.",
        "Stop if the calf cramps.",
      ],
      ur: [
        "ایڑیوں پر چلنا عموماً زیادہ مشکل ہوتا ہے۔",
        "قدم چھوٹے رکھیں — یہ قابو کی ورزش ہے، رفتار کی نہیں۔",
        "پنڈلی میں کھچاؤ ہو تو رک جائیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Taking long strides.",
        "Letting the heels drop during toe walking.",
        "Rushing.",
        "Practising away from any support.",
      ],
      ur: [
        "لمبے قدم لینا۔",
        "پنجوں پر چلتے وقت ایڑیوں کا گر جانا۔",
        "جلدی کرنا۔",
        "سہارے سے دور مشق کرنا۔",
      ],
    },
    safetyPrecautions: {
      en: [
        "Stop if the ankle feels unstable or gives way.",
        "Progress slowly if you have had a recent sprain.",
      ],
      ur: [
        "ٹخنہ ڈھیلا لگے یا جواب دے تو رک جائیں۔",
        "حالیہ موچ آئی ہو تو آہستہ آگے بڑھیں۔",
      ],
    },
    repetitions: "10 steps each way",
    sets: "3",
    holdTime: "—",
    frequency: "Daily",
    restBetweenSets: "45 seconds",
    progressions: [],
    regressions: [],
    contraindications: {
      en: [
        "Acute ankle or foot fracture",
        "Suspected Achilles rupture",
        "Recent ankle surgery unless cleared",
      ],
      ur: [
        "ٹخنے یا پاؤں کی حالیہ ٹوٹ پھوٹ",
        "ایڑی کے پٹھے کے پھٹنے کا شبہ",
        "ٹخنے کا حالیہ آپریشن، جب تک اجازت نہ ہو",
      ],
    },
    evidence: {
      status: "unreviewed",
      rationale: "Toe and heel walking is a simple functional strengthening and gait retraining drill. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ ankleNear: 30, ankleFar: 30 }, STAND), travel: 800, hold: 400, label: "Walking up on the toes" },
        { pose: pose({ ankleNear: -24, ankleFar: -24 }, STAND), travel: 1000, hold: 900, label: "Walking on the heels" },
      ],
    },
  },
];
