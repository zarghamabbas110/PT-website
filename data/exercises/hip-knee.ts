import { pose } from "@/lib/figure";
import type { Exercise } from "../schema";
import { PRONE, SIDE_LYING, STAND, SUPINE_LONG } from "./bases";

/* ==========================================================================
   HIP AND KNEE
   --------------------------------------------------------------------------
   Gluteal strengthening, hip flexor length, and the knee ladder from early
   isometrics through range work to loaded step ups. Drafts pending review.
   ========================================================================== */

export const HIP_KNEE: Exercise[] = [
  {
    id: "EX-H-001",
    slug: "side-lying-hip-abduction",
    name: { en: "Side-Lying Hip Abduction", ur: "پہلو کے بل لیٹ کر ٹانگ اٹھانا" },
    bodyRegion: "Pelvis & Hip",
    joint: ["Hip"],
    musclesTargeted: ["Gluteus medius", "Gluteus minimus", "Tensor fasciae latae"],
    conditions: ["Gluteal weakness", "Hip pain", "Knee pain", "Poor single-leg balance"],
    purpose: { en: "Strengthens the side of the hip, which stops the pelvis dropping when you stand on one leg or walk.", ur: "کولہے کے پہلو کے پٹھوں کو مضبوط کرتی ہے تاکہ ایک ٹانگ پر کھڑے ہوتے یا چلتے وقت کولہا نہ جھکے۔" },
    difficulty: "Beginner",
    contraction: ["Concentric", "Eccentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Side-lying",
    equipment: ["Exercise mat"],
    startingPosition: { en: "Lie on one side with the hips stacked, the bottom knee bent for balance and the top leg straight.", ur: "ایک پہلو پر لیٹ جائیں، کولہے اوپر تلے ہوں، نچلا گھٹنا توازن کے لیے مڑا اور اوپر والی ٹانگ سیدھی۔" },
    quickSteps: {
      en: [
        "Lie on your side, hips stacked, top leg straight.",
        "Lift the top leg upward, keeping it in line with the body.",
        "Hold 2 seconds, then lower slowly.",
      ],
      ur: [
        "پہلو پر لیٹ جائیں، کولہے اوپر تلے، اوپر والی ٹانگ سیدھی۔",
        "اوپر والی ٹانگ اٹھائیں، جسم کی سیدھ میں رکھیں۔",
        "دو سیکنڈ رکیں، پھر آہستہ نیچے کریں۔",
      ],
    },
    steps: {
      en: [
        "Stack the hips exactly on top of one another.",
        "Keep the top leg straight with the toes facing forward.",
        "Lift the leg upward, slightly behind the line of the body.",
        "Hold briefly at the top, then lower under control.",
      ],
      ur: [
        "کولہوں کو بالکل اوپر تلے رکھیں۔",
        "اوپر والی ٹانگ سیدھی اور پنجہ سامنے رکھیں۔",
        "ٹانگ اوپر اٹھائیں، جسم کی لکیر سے ذرا پیچھے۔",
        "اوپر تھوڑا رکیں، پھر قابو سے نیچے لائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "The hips must not roll backwards — this is the commonest fault.",
        "Do not let the toes turn up towards the ceiling.",
        "Height is not the point; the position is.",
      ],
      ur: [
        "کولہے پیچھے نہ لڑھکیں — یہ سب سے عام غلطی ہے۔",
        "پنجہ چھت کی طرف نہ مڑے۔",
        "اونچائی اہم نہیں، درست حالت اہم ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Rolling the hips backwards.",
        "Turning the toes upward.",
        "Lifting too high and using the back.",
        "Swinging the leg with momentum.",
      ],
      ur: [
        "کولہے پیچھے لڑھکانا۔",
        "پنجہ اوپر گھمانا۔",
        "بہت اوپر اٹھا کر کمر استعمال کرنا۔",
        "جھٹکے سے ٹانگ جھلانا۔",
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
    repetitions: "12–15 each side",
    sets: "3",
    holdTime: "2 seconds at the top",
    frequency: "Every other day",
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
      rationale: "Side-lying hip abduction is a standard gluteus medius strengthening exercise. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ hipNear: 0, kneeNear: 4, hipFar: 40, kneeFar: 90 }, SIDE_LYING), travel: 800, hold: 400, label: "Lying on the side, top leg straight" },
        { pose: pose({ hipNear: 0, kneeNear: 4, hipRotNear: 42, hipFar: 40, kneeFar: 90 }, SIDE_LYING), travel: 1000, hold: 900, label: "Lift the top leg upward" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-H-002",
    slug: "prone-hip-extension",
    name: { en: "Prone Hip Extension", ur: "اوندھے لیٹ کر ٹانگ اٹھانا" },
    bodyRegion: "Pelvis & Hip",
    joint: ["Hip"],
    musclesTargeted: ["Gluteus maximus", "Hamstrings", "Erector spinae"],
    conditions: ["Gluteal weakness", "Low back pain", "Poor push-off in walking"],
    purpose: { en: "Strengthens the buttock muscle that drives you forward with every step and up every stair.", ur: "کولہے کے اُس پٹھے کو مضبوط کرتی ہے جو ہر قدم اور ہر سیڑھی پر جسم کو آگے دھکیلتا ہے۔" },
    difficulty: "Beginner",
    contraction: ["Concentric", "Eccentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Prone",
    equipment: ["Exercise mat"],
    startingPosition: { en: "Lie face down with your forehead resting on your hands and both legs straight.", ur: "اوندھے لیٹ جائیں، ماتھا ہاتھوں پر ٹکا ہو اور دونوں ٹانگیں سیدھی۔" },
    quickSteps: {
      en: [
        "Lie face down, legs straight.",
        "Lift one straight leg a little off the floor.",
        "Hold 3 seconds, then lower slowly and swap.",
      ],
      ur: [
        "اوندھے لیٹ جائیں، ٹانگیں سیدھی۔",
        "ایک سیدھی ٹانگ فرش سے تھوڑا اوپر اٹھائیں۔",
        "تین سیکنڈ رکیں، آہستہ نیچے کریں، پھر بدلیں۔",
      ],
    },
    steps: {
      en: [
        "Tighten the lower abdomen gently first, so the back stays still.",
        "Squeeze the buttock and lift the straight leg.",
        "Lift only until the pelvis begins to tip — no higher.",
        "Hold, then lower slowly and repeat on the other side.",
      ],
      ur: [
        "پہلے پیٹ کا نچلا حصہ ہلکا سخت کریں تاکہ کمر ساکن رہے۔",
        "کولہے کا پٹھا دبائیں اور سیدھی ٹانگ اٹھائیں۔",
        "صرف اُس حد تک اٹھائیں جہاں کولہا ٹیڑھا ہونے لگے۔",
        "رکیں، پھر آہستہ نیچے کریں اور دوسری طرف دہرائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "The lift is small — 10 to 15 centimetres is plenty.",
        "The buttock should work harder than the low back.",
        "If the back arches, you have lifted too high.",
      ],
      ur: [
        "اٹھان تھوڑی ہے — دس پندرہ سینٹی میٹر کافی ہے۔",
        "کولہے کا پٹھا کمر سے زیادہ کام کرے۔",
        "کمر محراب بنے تو مطلب بہت اوپر اٹھا لیا۔",
      ],
    },
    commonMistakes: {
      en: [
        "Arching the low back to lift higher.",
        "Bending the knee.",
        "Rotating the pelvis.",
        "Holding the breath.",
      ],
      ur: [
        "زیادہ اونچا اٹھانے کے لیے کمر کو محراب بنانا۔",
        "گھٹنا موڑ لینا۔",
        "کولہے کو گھما لینا۔",
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
    repetitions: "10 each side",
    sets: "3",
    holdTime: "3 seconds",
    frequency: "Every other day",
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
      rationale: "Prone hip extension is commonly used for gluteus maximus strengthening with low spinal load. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ hipNear: 0, kneeNear: 2 }, PRONE), travel: 800, hold: 400, label: "Lying face down, legs straight" },
        { pose: pose({ hipNear: -18, kneeNear: 2 }, PRONE), travel: 1000, hold: 900, label: "Lift one straight leg" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-H-003",
    slug: "hip-flexor-stretch-kneeling",
    name: { en: "Kneeling Hip Flexor Stretch", ur: "گھٹنے کے بل کولہے کا کھنچاؤ" },
    bodyRegion: "Pelvis & Hip",
    joint: ["Hip"],
    musclesTargeted: ["Iliopsoas", "Rectus femoris", "Tensor fasciae latae"],
    conditions: ["Hip flexor tightness", "Low back pain", "Prolonged sitting", "Anterior pelvic tilt"],
    purpose: { en: "Lengthens the muscles at the front of the hip that shorten from sitting and pull the low back into an arch.", ur: "کولہے کے اگلے پٹھوں کو لمبا کرتی ہے جو زیادہ بیٹھنے سے چھوٹے ہو کر کمر کو محراب بنا دیتے ہیں۔" },
    difficulty: "Beginner",
    contraction: ["Passive"],
    mode: "Passive",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["Exercise mat", "Cushion for the knee"],
    startingPosition: { en: "Kneel on one knee with the other foot flat in front, both knees at about 90 degrees.", ur: "ایک گھٹنے کے بل بیٹھیں، دوسرا پاؤں سامنے زمین پر، دونوں گھٹنے تقریباً نوے درجے۔" },
    quickSteps: {
      en: [
        "Kneel on one knee, other foot flat in front.",
        "Tuck your tailbone under, then shift gently forward.",
        "Hold 30 seconds, then swap sides.",
      ],
      ur: [
        "ایک گھٹنے کے بل بیٹھیں، دوسرا پاؤں سامنے زمین پر۔",
        "دُم کی ہڈی اندر کریں، پھر نرمی سے آگے جھکیں۔",
        "تیس سیکنڈ رکیں، پھر طرف بدلیں۔",
      ],
    },
    steps: {
      en: [
        "Pad the kneeling knee with a cushion.",
        "Tuck the tailbone under to flatten the low back — do this first.",
        "Shift the weight gently forward over the front foot.",
        "Hold, keeping the trunk upright, then release.",
      ],
      ur: [
        "گھٹنے کے نیچے تکیہ رکھیں۔",
        "پہلے دُم کی ہڈی اندر کریں تاکہ کمر سیدھی ہو جائے۔",
        "وزن نرمی سے سامنے والے پاؤں پر منتقل کریں۔",
        "دھڑ سیدھا رکھتے ہوئے رکیں، پھر چھوڑ دیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "The tailbone tuck is what makes the stretch work — without it you just arch the back.",
        "Keep the trunk upright, not leaning forward.",
        "The stretch should be felt at the front of the hip, not the knee.",
      ],
      ur: [
        "دُم کی ہڈی اندر کرنا ہی اصل ہے — ورنہ صرف کمر محراب بنے گی۔",
        "دھڑ سیدھا رکھیں، آگے نہ جھکیں۔",
        "کھنچاؤ کولہے کے سامنے محسوس ہو، گھٹنے میں نہیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Arching the low back instead of tucking the tailbone.",
        "Leaning the trunk forward.",
        "Pushing until the front knee goes past the toes.",
        "Bouncing.",
      ],
      ur: [
        "دُم کی ہڈی اندر کرنے کے بجائے کمر محراب بنانا۔",
        "دھڑ آگے جھکانا۔",
        "اتنا زور کہ اگلا گھٹنا پنجے سے آگے نکل جائے۔",
        "جھٹکا دینا۔",
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
      rationale: "Kneeling hip flexor stretching is standard for anterior hip tightness associated with prolonged sitting. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ hipNear: 90, kneeNear: 90, hipFar: 10, kneeFar: 90 }, STAND), travel: 800, hold: 400, label: "Half-kneeling position" },
        { pose: pose({ hipNear: 86, kneeNear: 92, hipFar: -16, kneeFar: 96, pelvisTilt: -12 }, STAND), travel: 1000, hold: 900, label: "Tuck the tailbone and shift forward" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-H-004",
    slug: "standing-hip-abduction",
    name: { en: "Standing Hip Abduction", ur: "کھڑے ہو کر ٹانگ ایک طرف اٹھانا" },
    bodyRegion: "Pelvis & Hip",
    joint: ["Hip"],
    musclesTargeted: ["Gluteus medius", "Gluteus minimus"],
    conditions: ["Gluteal weakness", "Balance training", "Hip pain", "Post-hip-replacement rehabilitation"],
    purpose: { en: "Strengthens the side of the hip while standing, which is closer to how you actually use it.", ur: "کھڑے ہو کر کولہے کے پہلو کو مضبوط کرتی ہے، جو اصل استعمال کے زیادہ قریب ہے۔" },
    difficulty: "Beginner",
    contraction: ["Concentric", "Eccentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["Chair or wall for support"],
    startingPosition: { en: "Stand tall holding a chair back or wall for balance, with your weight on one leg.", ur: "کرسی کی پشت یا دیوار پکڑ کر سیدھے کھڑے ہوں، وزن ایک ٹانگ پر ہو۔" },
    quickSteps: {
      en: [
        "Stand tall, holding a support for balance.",
        "Lift one straight leg out to the side.",
        "Hold 2 seconds, then lower slowly.",
      ],
      ur: [
        "سہارا پکڑ کر سیدھے کھڑے ہوں۔",
        "ایک سیدھی ٹانگ ایک طرف اٹھائیں۔",
        "دو سیکنڈ رکیں، پھر آہستہ نیچے کریں۔",
      ],
    },
    steps: {
      en: [
        "Stand tall with the hips level and facing forward.",
        "Take one straight leg out to the side.",
        "Keep the toes pointing forward, not turned out.",
        "Hold briefly, then lower under control.",
      ],
      ur: [
        "سیدھے کھڑے ہوں، کولہے برابر اور سامنے کی طرف۔",
        "ایک سیدھی ٹانگ ایک طرف لے جائیں۔",
        "پنجہ سامنے رکھیں، باہر کی طرف نہ گھمائیں۔",
        "تھوڑا رکیں، پھر قابو سے نیچے لائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Do not lean the body to the opposite side.",
        "The lift is small — about 20 to 30 degrees.",
        "Keep the standing knee soft, not locked.",
      ],
      ur: [
        "جسم کو مخالف طرف نہ جھکائیں۔",
        "اٹھان تھوڑی ہے — تقریباً بیس تیس درجے۔",
        "کھڑی ٹانگ کا گھٹنا ہلکا مڑا رکھیں، لاک نہ کریں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Leaning the trunk away from the moving leg.",
        "Turning the toes outward.",
        "Swinging the leg.",
        "Gripping the support too hard.",
      ],
      ur: [
        "حرکت کرنے والی ٹانگ سے دور دھڑ جھکانا۔",
        "پنجہ باہر گھمانا۔",
        "ٹانگ جھلانا۔",
        "سہارے کو بہت زور سے پکڑنا۔",
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
    repetitions: "12–15 each side",
    sets: "3",
    holdTime: "2 seconds",
    frequency: "Every other day",
    restBetweenSets: "30 seconds",
    progressions: [],
    regressions: ["side-lying-hip-abduction"],
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
      rationale: "Standing hip abduction is commonly used as a functional progression of side-lying work. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ hipNear: 0, kneeNear: 2 }, STAND), travel: 800, hold: 400, label: "Standing tall with support" },
        { pose: pose({ hipNear: 0, kneeNear: 2, hipRotNear: 26 }, STAND), travel: 1000, hold: 900, label: "Lift the leg out to the side" },
      ],
    },
  },
  {
    id: "EX-K-001",
    slug: "quad-setting",
    name: { en: "Quadriceps Setting", ur: "ران کے پٹھے کو سخت کرنا" },
    bodyRegion: "Knee",
    joint: ["Knee", "Patellofemoral"],
    musclesTargeted: ["Quadriceps femoris", "Vastus medialis obliquus"],
    conditions: ["Post-knee-surgery rehabilitation", "Knee swelling", "Quadriceps inhibition", "Post-immobilisation"],
    purpose: { en: "Wakes up the thigh muscle after injury or surgery, when the knee is too sore to move much.", ur: "چوٹ یا آپریشن کے بعد ران کے پٹھے کو بیدار کرتی ہے، جب گھٹنا زیادہ حرکت کے قابل نہ ہو۔" },
    difficulty: "Beginner",
    contraction: ["Isometric"],
    mode: "Active",
    load: "No load",
    position: "Supine",
    equipment: ["Exercise mat", "Small rolled towel"],
    startingPosition: { en: "Lie or sit with the leg out straight and a small rolled towel under the knee.", ur: "لیٹ یا بیٹھ جائیں، ٹانگ سیدھی ہو اور گھٹنے کے نیچے چھوٹا لپٹا تولیہ رکھیں۔" },
    quickSteps: {
      en: [
        "Lie with the leg straight, a rolled towel under the knee.",
        "Press the knee down into the towel, tightening the thigh.",
        "Hold 5 seconds, then relax fully.",
      ],
      ur: [
        "ٹانگ سیدھی رکھ کر لیٹیں، گھٹنے کے نیچے لپٹا تولیہ ہو۔",
        "گھٹنے کو تولیے پر دبائیں اور ران سخت کریں۔",
        "پانچ سیکنڈ رکیں، پھر پوری طرح ڈھیلا چھوڑیں۔",
      ],
    },
    steps: {
      en: [
        "Place a small rolled towel under the knee.",
        "Tighten the thigh muscle so the knee presses down.",
        "You should see the kneecap slide slightly upward.",
        "Hold, breathing normally, then relax completely.",
      ],
      ur: [
        "گھٹنے کے نیچے چھوٹا لپٹا تولیہ رکھیں۔",
        "ران کا پٹھا سخت کریں تاکہ گھٹنا نیچے دبے۔",
        "گھٹنے کی ٹوپی ذرا اوپر کھسکتی نظر آنی چاہیے۔",
        "رکیں، سانس لیتے رہیں، پھر پوری طرح ڈھیلا کریں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Watch the kneecap — if it does not move, the muscle is not working.",
        "This is safe very early after surgery.",
        "Full relaxation between repetitions matters.",
      ],
      ur: [
        "گھٹنے کی ٹوپی دیکھیں — نہ ہلے تو پٹھا کام نہیں کر رہا۔",
        "آپریشن کے فوراً بعد بھی یہ محفوظ ہے۔",
        "ہر بار کے درمیان پوری طرح ڈھیلا چھوڑنا اہم ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Holding the breath.",
        "Lifting the whole leg instead of pressing down.",
        "Not relaxing between repetitions.",
        "Tensing the buttock instead of the thigh.",
      ],
      ur: [
        "سانس روکنا۔",
        "دبانے کے بجائے پوری ٹانگ اٹھا لینا۔",
        "دو بار کے بیچ ڈھیلا نہ چھوڑنا۔",
        "ران کے بجائے کولہے کا پٹھا سخت کرنا۔",
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
    holdTime: "5 seconds",
    frequency: "3–4 times daily",
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
      rationale: "Quadriceps setting is a standard early exercise following knee surgery or injury. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ kneeNear: 8, hipNear: 0 }, SUPINE_LONG), travel: 800, hold: 400, label: "Leg straight, towel under the knee" },
        { pose: pose({ kneeNear: 2, hipNear: 0 }, SUPINE_LONG), travel: 1000, hold: 900, label: "Press down and tighten the thigh" },
      ],
      props: [{ kind: "mat" }, { kind: "towelUnderKnee" }],
    },
  },
  {
    id: "EX-K-002",
    slug: "heel-slides",
    name: { en: "Heel Slides", ur: "ایڑی کھسکا کر گھٹنا موڑنا" },
    bodyRegion: "Knee",
    joint: ["Knee"],
    musclesTargeted: ["Hamstrings", "Quadriceps femoris"],
    conditions: ["Post-knee-surgery rehabilitation", "Knee stiffness", "Post-immobilisation"],
    purpose: { en: "Restores the bend in the knee gently, using the floor to take the weight of the leg.", ur: "گھٹنے کا خم نرمی سے بحال کرتی ہے، ٹانگ کا وزن فرش پر رہتا ہے۔" },
    difficulty: "Beginner",
    contraction: ["Concentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Supine",
    equipment: ["Exercise mat"],
    startingPosition: { en: "Lie on your back with both legs straight and your heels resting on the floor.", ur: "سیدھے لیٹ جائیں، دونوں ٹانگیں سیدھی اور ایڑیاں فرش پر۔" },
    quickSteps: {
      en: [
        "Lie on your back with the leg straight.",
        "Slide the heel towards your bottom, bending the knee.",
        "Slide it back out slowly and repeat.",
      ],
      ur: [
        "سیدھے لیٹ جائیں، ٹانگ سیدھی۔",
        "ایڑی کولہے کی طرف کھسکائیں، گھٹنا مڑے گا۔",
        "آہستہ واپس سیدھا کریں اور دہرائیں۔",
      ],
    },
    steps: {
      en: [
        "Keep the heel in contact with the floor throughout.",
        "Slide it towards your bottom as far as is comfortable.",
        "Hold at the bend for a moment.",
        "Slide back out until the leg is fully straight.",
      ],
      ur: [
        "پوری حرکت میں ایڑی فرش سے لگی رہے۔",
        "آرام کی حد تک کولہے کی طرف کھسکائیں۔",
        "مڑی حالت میں لمحہ بھر رکیں۔",
        "واپس کھسکائیں یہاں تک کہ ٹانگ پوری سیدھی ہو۔",
      ],
    },
    specialInstructions: {
      en: [
        "Getting the knee fully straight matters as much as bending it.",
        "A plastic bag under the heel helps it slide.",
        "Work into stretch, not into sharp pain.",
      ],
      ur: [
        "گھٹنا پوری طرح سیدھا کرنا موڑنے جتنا ہی اہم ہے۔",
        "ایڑی کے نیچے پلاسٹک شاپر رکھنے سے پھسلنا آسان ہوتا ہے۔",
        "کھنچاؤ تک جائیں، تیز درد تک نہیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Lifting the heel off the floor.",
        "Stopping short of full straightening.",
        "Forcing the bend.",
        "Twisting the leg while sliding.",
      ],
      ur: [
        "ایڑی فرش سے اٹھا لینا۔",
        "پوری طرح سیدھا نہ کرنا۔",
        "خم کو زبردستی بڑھانا۔",
        "کھسکاتے وقت ٹانگ گھما لینا۔",
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
    repetitions: "10–15",
    sets: "3",
    holdTime: "2 seconds at the bend",
    frequency: "3–4 times daily",
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
      rationale: "Heel slides are a standard early knee range-of-motion exercise. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ kneeNear: 2, hipNear: 0 }, SUPINE_LONG), travel: 800, hold: 400, label: "Leg straight on the floor" },
        { pose: pose({ kneeNear: 95, hipNear: 40 }, SUPINE_LONG), travel: 1000, hold: 900, label: "Slide the heel up, bending the knee" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-K-003",
    slug: "terminal-knee-extension",
    name: { en: "Terminal Knee Extension with Band", ur: "بینڈ کے ساتھ گھٹنا سیدھا کرنا" },
    bodyRegion: "Knee",
    joint: ["Knee", "Patellofemoral"],
    musclesTargeted: ["Quadriceps femoris", "Vastus medialis obliquus"],
    conditions: ["Post-knee-surgery rehabilitation", "Extension lag", "Patellofemoral pain"],
    purpose: { en: "Trains the last few degrees of straightening, which is the part most often lost and most needed for walking.", ur: "گھٹنا سیدھا کرنے کے آخری چند درجے سکھاتی ہے، جو اکثر کھو جاتے ہیں اور چلنے کے لیے سب سے ضروری ہیں۔" },
    difficulty: "Intermediate",
    contraction: ["Concentric", "Isometric"],
    mode: "Resisted",
    load: "Resistance band",
    position: "Standing",
    equipment: ["Resistance band"],
    startingPosition: { en: "Stand with a band looped behind the knee, anchored in front, with a slight bend in the knee.", ur: "کھڑے ہوں، بینڈ گھٹنے کے پیچھے لگا ہو اور سامنے بندھا ہو، گھٹنا ہلکا مڑا ہو۔" },
    quickSteps: {
      en: [
        "Stand with a band behind the knee, pulling it forward.",
        "Straighten the knee fully against the band.",
        "Hold 3 seconds, then let it bend slowly.",
      ],
      ur: [
        "بینڈ گھٹنے کے پیچھے لگا کر کھڑے ہوں جو اسے آگے کھینچے۔",
        "بینڈ کے خلاف گھٹنا پوری طرح سیدھا کریں۔",
        "تین سیکنڈ رکیں، پھر آہستہ مڑنے دیں۔",
      ],
    },
    steps: {
      en: [
        "Loop the band behind the knee, anchored to something in front.",
        "Start with the knee slightly bent.",
        "Straighten the knee fully, squeezing the thigh.",
        "Hold, then let the knee bend slowly back.",
      ],
      ur: [
        "بینڈ گھٹنے کے پیچھے لگائیں، سامنے کسی چیز سے باندھیں۔",
        "گھٹنا ہلکا مڑا رکھ کر شروع کریں۔",
        "گھٹنا پوری طرح سیدھا کریں اور ران دبائیں۔",
        "رکیں، پھر گھٹنا آہستہ مڑنے دیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "The heel stays on the floor throughout.",
        "The movement is small — only the last part of straightening.",
        "Squeeze the thigh hard at the end.",
      ],
      ur: [
        "پوری حرکت میں ایڑی فرش پر رہے۔",
        "حرکت تھوڑی ہے — صرف سیدھا کرنے کا آخری حصہ۔",
        "آخر میں ران کو زور سے دبائیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Lifting the heel.",
        "Bending the hip instead of the knee.",
        "Letting the band pull the knee back fast.",
        "Using a band that is too strong.",
      ],
      ur: [
        "ایڑی اٹھا لینا۔",
        "گھٹنے کے بجائے کولہا موڑنا۔",
        "بینڈ کو تیزی سے گھٹنا پیچھے کھینچنے دینا۔",
        "بہت سخت بینڈ استعمال کرنا۔",
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
    repetitions: "12–15",
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
      rationale: "Terminal knee extension is widely used to address extension lag after knee injury or surgery. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ kneeNear: 24, hipNear: 6, kneeFar: 4 }, STAND), travel: 800, hold: 400, label: "Knee slightly bent" },
        { pose: pose({ kneeNear: 2, hipNear: 0, kneeFar: 4 }, STAND), travel: 1000, hold: 900, label: "Straighten fully against the band" },
      ],
      props: [{ kind: "band", anchor: "front" }],
    },
  },
  {
    id: "EX-K-004",
    slug: "step-up",
    name: { en: "Step Up", ur: "سیڑھی پر چڑھنے کی مشق" },
    bodyRegion: "Knee",
    joint: ["Knee", "Hip"],
    musclesTargeted: ["Quadriceps femoris", "Gluteus maximus", "Gluteus medius"],
    conditions: ["Knee osteoarthritis", "Post-surgery strengthening", "Stair difficulty", "Quadriceps weakness"],
    purpose: { en: "Builds the strength and control needed to climb stairs without pushing off the handrail.", ur: "سیڑھیاں چڑھنے کی طاقت اور قابو بناتی ہے تاکہ ریلنگ کے سہارے کی ضرورت نہ رہے۔" },
    difficulty: "Intermediate",
    contraction: ["Concentric", "Eccentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["Low step (10–20 cm)", "Support to hold"],
    startingPosition: { en: "Stand facing a low step with one foot flat on it and a support within reach.", ur: "نیچی سیڑھی کے سامنے کھڑے ہوں، ایک پاؤں اس پر ہو اور سہارا قریب ہو۔" },
    quickSteps: {
      en: [
        "Stand facing a low step, one foot on it.",
        "Push through that foot to step up, keeping the knee over the middle of the foot.",
        "Step down slowly under control.",
      ],
      ur: [
        "نیچی سیڑھی کے سامنے کھڑے ہوں، ایک پاؤں اس پر۔",
        "اسی پاؤں سے زور لگا کر اوپر چڑھیں، گھٹنا پاؤں کے درمیان کی سیدھ میں رکھیں۔",
        "قابو سے آہستہ نیچے اتریں۔",
      ],
    },
    steps: {
      en: [
        "Place the whole foot on the step, not just the toes.",
        "Push through the heel of the stepping foot to rise.",
        "Keep the knee tracking over the middle of the foot.",
        "Step down slowly — the lowering builds the most strength.",
      ],
      ur: [
        "پورا پاؤں سیڑھی پر رکھیں، صرف پنجہ نہیں۔",
        "چڑھتے وقت اُسی پاؤں کی ایڑی سے زور لگائیں۔",
        "گھٹنا پاؤں کے درمیان کی سیدھ میں رکھیں۔",
        "آہستہ نیچے اتریں — نیچے آنا سب سے زیادہ طاقت بناتا ہے۔",
      ],
    },
    specialInstructions: {
      en: [
        "Do not push off the back foot — the front leg does the work.",
        "The knee must not fall inward.",
        "Start with a low step and build height slowly.",
      ],
      ur: [
        "پچھلے پاؤں سے دھکا نہ لگائیں — کام اگلی ٹانگ کرے۔",
        "گھٹنا اندر کی طرف نہ گرے۔",
        "نیچی سیڑھی سے شروع کریں اور اونچائی آہستہ بڑھائیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Pushing off the trailing foot.",
        "Letting the knee collapse inward.",
        "Dropping down quickly instead of lowering.",
        "Using a step that is too high.",
      ],
      ur: [
        "پچھلے پاؤں سے دھکا لگانا۔",
        "گھٹنے کا اندر کی طرف گر جانا۔",
        "آہستہ اترنے کے بجائے یکدم گرنا۔",
        "بہت اونچی سیڑھی استعمال کرنا۔",
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
    repetitions: "10 each side",
    sets: "3",
    holdTime: "1 second at the top",
    frequency: "Every other day",
    restBetweenSets: "45 seconds",
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
      rationale: "Step ups are a functional strengthening exercise widely used in knee and hip rehabilitation. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ hipNear: 50, kneeNear: 60, hipFar: 0, kneeFar: 4 }, STAND), travel: 800, hold: 400, label: "One foot on the step" },
        { pose: pose({ hipNear: 4, kneeNear: 6, hipFar: 10, kneeFar: 40 }, STAND), travel: 1000, hold: 900, label: "Push up through that leg" },
      ],
    },
  },
];
