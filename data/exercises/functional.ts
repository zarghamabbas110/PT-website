import { pose } from "@/lib/figure";
import type { Exercise } from "../schema";
import { SEATED, STAND, SUPINE } from "./bases";

/* ==========================================================================
   FUNCTIONAL AND POSTURAL WORK
   --------------------------------------------------------------------------
   The exercises that map most directly onto daily life — getting out of a
   chair, controlling the pelvis while upright, and the postural drills people
   can do at a desk. Drafts pending clinical review.
   ========================================================================== */

export const FUNCTIONAL: Exercise[] = [
  {
    id: "EX-H-005",
    slug: "sit-to-stand",
    name: { en: "Sit to Stand", ur: "کرسی سے اٹھنا اور بیٹھنا" },
    bodyRegion: "Pelvis & Hip",
    joint: ["Hip", "Knee"],
    musclesTargeted: ["Quadriceps femoris", "Gluteus maximus", "Hamstrings"],
    conditions: ["Lower limb weakness", "Knee osteoarthritis", "Falls prevention", "Post-surgery rehabilitation"],
    purpose: { en: "Trains the single most useful movement there is — getting out of a chair without using your hands.", ur: "سب سے کارآمد حرکت سکھاتی ہے — بغیر ہاتھوں کے سہارے کرسی سے اٹھنا۔" },
    difficulty: "Beginner",
    contraction: ["Concentric", "Eccentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Sitting",
    equipment: ["Firm chair"],
    startingPosition: { en: "Sit on a firm chair with your feet flat and slightly back, hands folded across your chest.", ur: "مضبوط کرسی پر بیٹھیں، پاؤں زمین پر اور ذرا پیچھے، ہاتھ سینے پر بندھے ہوں۔" },
    quickSteps: {
      en: [
        "Sit with your feet flat and slightly back.",
        "Lean forward, then stand up without using your hands.",
        "Sit back down slowly under control.",
      ],
      ur: [
        "پاؤں زمین پر اور ذرا پیچھے رکھ کر بیٹھیں۔",
        "آگے جھکیں، پھر ہاتھوں کے بغیر کھڑے ہوں۔",
        "قابو سے آہستہ واپس بیٹھیں۔",
      ],
    },
    steps: {
      en: [
        "Slide the feet back so they are under the knees.",
        "Fold the arms across the chest.",
        "Lean the trunk forward — nose over toes — then push up through the heels.",
        "Stand tall, then lower slowly back to the chair.",
      ],
      ur: [
        "پاؤں پیچھے کھسکائیں تاکہ گھٹنوں کے نیچے آ جائیں۔",
        "بازو سینے پر باندھ لیں۔",
        "دھڑ آگے جھکائیں — ناک پنجوں کے اوپر — پھر ایڑیوں سے زور لگا کر اٹھیں۔",
        "سیدھے کھڑے ہوں، پھر آہستہ واپس بیٹھیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Leaning forward first is what makes it possible without hands.",
        "The slow sit down builds as much strength as standing up.",
        "Use a higher chair if it is too hard, not your hands.",
      ],
      ur: [
        "پہلے آگے جھکنا ہی ہاتھوں کے بغیر اٹھنا ممکن بناتا ہے۔",
        "آہستہ بیٹھنا اٹھنے جتنی ہی طاقت بناتا ہے۔",
        "مشکل ہو تو اونچی کرسی لیں، ہاتھ نہ لگائیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Pushing off the thighs or armrests.",
        "Dropping down into the chair.",
        "Keeping the trunk upright instead of leaning forward.",
        "Letting the knees fall inward.",
      ],
      ur: [
        "رانوں یا کرسی کے ہتھوں سے دھکا لگانا۔",
        "کرسی پر یکدم گر جانا۔",
        "آگے جھکنے کے بجائے دھڑ سیدھا رکھنا۔",
        "گھٹنوں کا اندر کی طرف گر جانا۔",
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
    repetitions: "10",
    sets: "3",
    holdTime: "1 second standing",
    frequency: "Daily",
    restBetweenSets: "45 seconds",
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
      rationale: "Sit to stand is a core functional strengthening and falls prevention exercise. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ hipNear: 86, kneeNear: 84, hipFar: 84, kneeFar: 84, shoulderNear: 140, elbowNear: 120, shoulderFar: 140, elbowFar: 120 }, SEATED), travel: 800, hold: 400, label: "Sitting, arms folded" },
        { pose: pose({ hipNear: 4, kneeNear: 4, hipFar: 4, kneeFar: 4, shoulderNear: 140, elbowNear: 120, shoulderFar: 140, elbowFar: 120 }, SEATED), travel: 1000, hold: 900, label: "Stand up without using the hands" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-H-006",
    slug: "hamstring-stretch-supine",
    name: { en: "Supine Hamstring Stretch", ur: "لیٹ کر ران کے پچھلے پٹھے کا کھنچاؤ" },
    bodyRegion: "Pelvis & Hip",
    joint: ["Hip", "Knee"],
    musclesTargeted: ["Hamstrings"],
    conditions: ["Hamstring tightness", "Low back pain", "Sciatica recovery", "Reduced forward bend"],
    purpose: { en: "Lengthens the back of the thigh, which if tight pulls on the pelvis and stiffens the low back.", ur: "ران کے پچھلے پٹھے کو لمبا کرتی ہے، جو سخت ہو تو کولہے کو کھینچ کر کمر اکڑا دیتا ہے۔" },
    difficulty: "Beginner",
    contraction: ["Passive"],
    mode: "Passive",
    load: "Bodyweight",
    position: "Supine",
    equipment: ["Exercise mat", "Belt or towel"],
    startingPosition: { en: "Lie on your back with one knee bent and the other leg straight, a belt looped around that foot.", ur: "سیدھے لیٹ جائیں، ایک گھٹنا مڑا اور دوسری ٹانگ سیدھی، اُس پاؤں میں پٹی ڈالی ہو۔" },
    quickSteps: {
      en: [
        "Lie on your back, belt around one foot.",
        "Raise that straight leg until you feel a stretch behind the thigh.",
        "Hold 30 seconds, then lower slowly.",
      ],
      ur: [
        "سیدھے لیٹ جائیں، ایک پاؤں میں پٹی ڈالیں۔",
        "وہ سیدھی ٹانگ اٹھائیں یہاں تک کہ ران کے پیچھے کھنچاؤ ہو۔",
        "تیس سیکنڈ رکیں، پھر آہستہ نیچے کریں۔",
      ],
    },
    steps: {
      en: [
        "Loop a belt or towel around the sole of the foot.",
        "Keep the other knee bent with the foot flat.",
        "Raise the straight leg using the belt, not by pulling with the neck.",
        "Hold at a comfortable stretch, then lower slowly.",
      ],
      ur: [
        "پٹی یا تولیہ پاؤں کے تلوے کے گرد ڈالیں۔",
        "دوسرا گھٹنا مڑا اور پاؤں زمین پر رکھیں۔",
        "پٹی کی مدد سے سیدھی ٹانگ اٹھائیں، گردن سے زور نہ لگائیں۔",
        "آرام دہ کھنچاؤ پر رکیں، پھر آہستہ نیچے کریں۔",
      ],
    },
    specialInstructions: {
      en: [
        "The lifted knee stays straight — a bent knee removes the stretch.",
        "Keep the head and shoulders down on the floor.",
        "Stop if pain travels into the calf or foot.",
      ],
      ur: [
        "اٹھائی ہوئی ٹانگ کا گھٹنا سیدھا رہے — مڑنے سے کھنچاؤ ختم۔",
        "سر اور کندھے فرش پر رکھیں۔",
        "درد پنڈلی یا پاؤں تک جائے تو رک جائیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Bending the raised knee.",
        "Lifting the head and shoulders.",
        "Letting the other leg straighten.",
        "Pulling hard enough to hurt.",
      ],
      ur: [
        "اٹھائی ٹانگ کا گھٹنا موڑنا۔",
        "سر اور کندھے اٹھا لینا۔",
        "دوسری ٹانگ کا سیدھا ہو جانا۔",
        "اتنا کھینچنا کہ درد ہو۔",
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
      rationale: "Supine hamstring stretching with a strap is a standard flexibility exercise. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ hipNear: 10, kneeNear: 6, hipFar: 45, kneeFar: 100 }, SUPINE), travel: 800, hold: 400, label: "One leg straight on the floor" },
        { pose: pose({ hipNear: 75, kneeNear: 4, hipFar: 45, kneeFar: 100, shoulderNear: 110, elbowNear: 50 }, SUPINE), travel: 1000, hold: 900, label: "Raise it with the belt" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-K-005",
    slug: "wall-squat-hold",
    name: { en: "Wall Squat Hold", ur: "دیوار کے سہارے بیٹھنے کی مشق" },
    bodyRegion: "Knee",
    joint: ["Knee", "Hip"],
    musclesTargeted: ["Quadriceps femoris", "Gluteus maximus"],
    conditions: ["Knee osteoarthritis", "Quadriceps weakness", "Patellofemoral pain"],
    purpose: { en: "Builds thigh endurance in a supported position, which is gentler on the knee than free squatting.", ur: "سہارے کے ساتھ ران کی برداشت بناتی ہے، جو آزاد اسکواٹ سے گھٹنے پر کم بوجھ ڈالتی ہے۔" },
    difficulty: "Intermediate",
    contraction: ["Isometric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["Wall"],
    startingPosition: { en: "Stand with your back flat against a wall and your feet about a foot's length forward.", ur: "کمر دیوار سے لگا کر کھڑے ہوں، پاؤں تقریباً ایک قدم آگے ہوں۔" },
    quickSteps: {
      en: [
        "Stand with your back against a wall, feet forward.",
        "Slide down until the knees are bent about 45 degrees.",
        "Hold, then slide back up slowly.",
      ],
      ur: [
        "کمر دیوار سے لگا کر کھڑے ہوں، پاؤں آگے۔",
        "نیچے سرکیں یہاں تک کہ گھٹنے تقریباً پینتالیس درجے مڑ جائیں۔",
        "رکیں، پھر آہستہ اوپر سرکیں۔",
      ],
    },
    steps: {
      en: [
        "Keep the whole back in contact with the wall.",
        "Slide down only as far as is comfortable.",
        "Keep the knees behind the toes and tracking over the feet.",
        "Hold, breathing normally, then slide back up.",
      ],
      ur: [
        "پوری کمر دیوار سے لگی رہے۔",
        "صرف آرام کی حد تک نیچے سرکیں۔",
        "گھٹنے پنجوں سے پیچھے اور پاؤں کی سیدھ میں رکھیں۔",
        "رکیں، سانس لیتے رہیں، پھر واپس اوپر سرکیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Start shallow — 30 degrees is plenty at first.",
        "Do not go to 90 degrees if the knee is painful.",
        "Stop the hold when the thigh burn becomes sharp pain.",
      ],
      ur: [
        "کم گہرائی سے شروع کریں — پہلے تیس درجے کافی ہیں۔",
        "گھٹنے میں درد ہو تو نوے درجے تک نہ جائیں۔",
        "ران کی جلن تیز درد بن جائے تو رک جائیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Sliding down too far, too soon.",
        "Letting the knees fall inward.",
        "Holding the breath.",
        "Letting the low back arch off the wall.",
      ],
      ur: [
        "بہت جلد بہت نیچے سرکنا۔",
        "گھٹنوں کا اندر کی طرف گرنا۔",
        "سانس روکنا۔",
        "کمر کا دیوار سے ہٹ جانا۔",
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
    repetitions: "5",
    sets: "3",
    holdTime: "20 seconds",
    frequency: "Every other day",
    restBetweenSets: "45 seconds",
    progressions: ["wall-sit"],
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
      rationale: "Wall squat isometrics are commonly used for quadriceps endurance with controlled joint load. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ hipNear: 10, kneeNear: 10, hipFar: 10, kneeFar: 10 }, STAND), travel: 800, hold: 400, label: "Standing against the wall" },
        { pose: pose({ hipNear: 48, kneeNear: 50, hipFar: 48, kneeFar: 50 }, STAND), travel: 1000, hold: 900, label: "Slide down and hold" },
      ],
      props: [{ kind: "wall" }],
    },
  },
  {
    id: "EX-K-006",
    slug: "hamstring-curl-standing",
    name: { en: "Standing Hamstring Curl", ur: "کھڑے ہو کر گھٹنا موڑنا" },
    bodyRegion: "Knee",
    joint: ["Knee"],
    musclesTargeted: ["Hamstrings", "Gastrocnemius"],
    conditions: ["Hamstring weakness", "Post-surgery rehabilitation", "Knee instability"],
    purpose: { en: "Strengthens the back of the thigh, which balances the front and steadies the knee.", ur: "ران کے پچھلے پٹھے کو مضبوط کرتی ہے، جو اگلے پٹھے کو متوازن کر کے گھٹنے کو مستحکم رکھتا ہے۔" },
    difficulty: "Beginner",
    contraction: ["Concentric", "Eccentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["Support to hold"],
    startingPosition: { en: "Stand tall holding a chair or wall, with your weight on one leg.", ur: "کرسی یا دیوار پکڑ کر سیدھے کھڑے ہوں، وزن ایک ٹانگ پر۔" },
    quickSteps: {
      en: [
        "Stand tall holding a support.",
        "Bend one knee to bring the heel towards your bottom.",
        "Lower slowly, keeping the thighs in line.",
      ],
      ur: [
        "سہارا پکڑ کر سیدھے کھڑے ہوں۔",
        "ایک گھٹنا موڑ کر ایڑی کولہے کی طرف لائیں۔",
        "آہستہ نیچے کریں، رانیں ایک سیدھ میں رکھیں۔",
      ],
    },
    steps: {
      en: [
        "Stand tall with the hips level.",
        "Bend the knee, bringing the heel up behind you.",
        "Keep the thigh in line with the standing leg — do not swing it back.",
        "Lower slowly until the foot returns to the floor.",
      ],
      ur: [
        "سیدھے کھڑے ہوں، کولہے برابر رکھیں۔",
        "گھٹنا موڑیں اور ایڑی پیچھے اوپر لائیں۔",
        "ران کو کھڑی ٹانگ کی سیدھ میں رکھیں — پیچھے نہ جھلائیں۔",
        "آہستہ نیچے کریں یہاں تک کہ پاؤں فرش پر آ جائے۔",
      ],
    },
    specialInstructions: {
      en: [
        "Only the knee bends; the hip and thigh stay still.",
        "Do not arch the low back to lift higher.",
        "The slow lowering builds the strength.",
      ],
      ur: [
        "صرف گھٹنا مڑے؛ کولہا اور ران ساکن رہیں۔",
        "زیادہ اوپر لانے کے لیے کمر کو محراب نہ بنائیں۔",
        "طاقت آہستہ نیچے لانے سے بنتی ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Swinging the thigh backwards.",
        "Arching the low back.",
        "Dropping the foot quickly.",
        "Leaning heavily on the support.",
      ],
      ur: [
        "ران کو پیچھے جھلانا۔",
        "کمر کو محراب بنانا۔",
        "پاؤں تیزی سے گرا دینا۔",
        "سہارے پر زیادہ جھک جانا۔",
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
    repetitions: "12–15 each side",
    sets: "3",
    holdTime: "2 seconds at the top",
    frequency: "Every other day",
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
      rationale: "Standing hamstring curls are a simple bodyweight option for knee flexor strengthening. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ kneeNear: 4 }, STAND), travel: 800, hold: 400, label: "Standing tall" },
        { pose: pose({ kneeNear: 95 }, STAND), travel: 1000, hold: 900, label: "Bend the knee, heel up behind" },
      ],
    },
  },
  {
    id: "EX-L-003",
    slug: "pelvic-tilt-standing",
    name: { en: "Standing Pelvic Tilt", ur: "کھڑے ہو کر کولہا جھکانا" },
    bodyRegion: "Lumbar",
    joint: ["Lumbar spine L1–L5", "Sacroiliac"],
    musclesTargeted: ["Transversus abdominis", "Gluteus maximus", "Rectus abdominis"],
    conditions: ["Low back pain", "Lumbar hyperlordosis", "Postural strain"],
    purpose: { en: "Teaches control of the pelvis while upright, which is where back pain usually happens.", ur: "کھڑے ہو کر کولہے پر قابو سکھاتی ہے، اور کمر درد عام طور پر اسی حالت میں ہوتی ہے۔" },
    difficulty: "Beginner",
    contraction: ["Concentric", "Isometric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Standing",
    equipment: [],
    startingPosition: { en: "Stand with your back against a wall, feet a short step forward and knees slightly bent.", ur: "کمر دیوار سے لگا کر کھڑے ہوں، پاؤں ایک قدم آگے اور گھٹنے ہلکے مڑے۔" },
    quickSteps: {
      en: [
        "Stand with your back against a wall, knees slightly bent.",
        "Flatten the low back against the wall by tucking the tailbone.",
        "Hold 5 seconds, then release.",
      ],
      ur: [
        "کمر دیوار سے لگا کر کھڑے ہوں، گھٹنے ہلکے مڑے۔",
        "دُم کی ہڈی اندر کر کے کمر دیوار سے لگائیں۔",
        "پانچ سیکنڈ رکیں، پھر چھوڑ دیں۔",
      ],
    },
    steps: {
      en: [
        "Feel the gap between your low back and the wall.",
        "Tighten the lower abdomen and tuck the tailbone under.",
        "Flatten the low back so the gap closes.",
        "Hold, breathing normally, then release to the start.",
      ],
      ur: [
        "کمر اور دیوار کے بیچ خلا محسوس کریں۔",
        "پیٹ کا نچلا حصہ سخت کریں اور دُم کی ہڈی اندر کریں۔",
        "کمر سیدھی کریں تاکہ خلا بند ہو جائے۔",
        "رکیں، سانس لیتے رہیں، پھر شروع کی حالت میں آئیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "The movement is small and comes from the pelvis, not the legs.",
        "Keep breathing — this is not a breath hold.",
        "Once learned, use it before lifting anything.",
      ],
      ur: [
        "حرکت تھوڑی ہے اور کولہے سے آتی ہے، ٹانگوں سے نہیں۔",
        "سانس لیتے رہیں — یہ سانس روکنے کی ورزش نہیں۔",
        "سیکھنے کے بعد کوئی چیز اٹھانے سے پہلے یہ کریں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Pushing through the legs instead of tilting the pelvis.",
        "Holding the breath.",
        "Squeezing the buttocks hard.",
        "Moving the whole trunk.",
      ],
      ur: [
        "کولہا جھکانے کے بجائے ٹانگوں سے زور لگانا۔",
        "سانس روکنا۔",
        "کولہے کے پٹھے زور سے دبانا۔",
        "پورا دھڑ حرکت دینا۔",
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
    holdTime: "5 seconds",
    frequency: "Daily",
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
      rationale: "Standing pelvic tilting is used to teach lumbopelvic control in a functional position. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ pelvisTilt: 10, lumbar: -6, kneeNear: 12, kneeFar: 12 }, STAND), travel: 800, hold: 400, label: "Standing with a small back arch" },
        { pose: pose({ pelvisTilt: -14, lumbar: 10, kneeNear: 12, kneeFar: 12 }, STAND), travel: 1000, hold: 900, label: "Flatten the back against the wall" },
      ],
      props: [{ kind: "wall" }],
    },
  },
  {
    id: "EX-A-006",
    slug: "ankle-inversion-eversion",
    name: { en: "Ankle In and Out", ur: "ٹخنہ اندر باہر گھمانا" },
    bodyRegion: "Ankle & Foot",
    joint: ["Subtalar", "Talocrural"],
    musclesTargeted: ["Peroneus longus", "Peroneus brevis", "Tibialis posterior"],
    conditions: ["Ankle sprain recovery", "Ankle instability", "Post-immobilisation"],
    purpose: { en: "Restores the side-to-side ankle movement that lets the foot adapt to uneven ground.", ur: "ٹخنے کی دائیں بائیں حرکت بحال کرتی ہے جس سے پاؤں ناہموار زمین پر سنبھل سکتا ہے۔" },
    difficulty: "Beginner",
    contraction: ["Concentric"],
    mode: "Active",
    load: "No load",
    position: "Sitting",
    equipment: ["Chair"],
    startingPosition: { en: "Sit with the leg supported and the foot free, ankle in a neutral position.", ur: "بیٹھ جائیں، ٹانگ ٹکی ہو اور پاؤں آزاد، ٹخنہ سیدھی حالت میں۔" },
    quickSteps: {
      en: [
        "Sit with the foot free to move.",
        "Turn the sole inward, then outward.",
        "Move slowly through the full range.",
      ],
      ur: [
        "پاؤں آزاد رکھ کر بیٹھیں۔",
        "تلوا اندر کی طرف گھمائیں، پھر باہر کی طرف۔",
        "پوری حرکت آہستہ کریں۔",
      ],
    },
    steps: {
      en: [
        "Keep the knee still so the movement is at the ankle.",
        "Turn the sole of the foot inward, towards the other leg.",
        "Then turn it outward, away from the other leg.",
        "Move slowly and evenly in both directions.",
      ],
      ur: [
        "گھٹنا ساکن رکھیں تاکہ حرکت ٹخنے سے ہو۔",
        "پاؤں کا تلوا اندر، دوسری ٹانگ کی طرف گھمائیں۔",
        "پھر باہر، دوسری ٹانگ سے دور گھمائیں۔",
        "دونوں طرف آہستہ اور برابر حرکت دیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "The movement is at the ankle, not the hip.",
        "Outward turning is usually the weaker direction after a sprain.",
        "Stop short of any sharp pain.",
      ],
      ur: [
        "حرکت ٹخنے سے ہو، کولہے سے نہیں۔",
        "موچ کے بعد باہر کی طرف حرکت عموماً کمزور ہوتی ہے۔",
        "تیز درد سے پہلے رک جائیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Rotating the whole leg.",
        "Moving only inward.",
        "Going too fast.",
        "Forcing into pain.",
      ],
      ur: [
        "پوری ٹانگ گھمانا۔",
        "صرف اندر کی طرف حرکت دینا۔",
        "بہت تیز کرنا۔",
        "درد تک زبردستی کرنا۔",
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
    repetitions: "10 each way",
    sets: "3",
    holdTime: "2 seconds each end",
    frequency: "2–3 times daily",
    restBetweenSets: "30 seconds",
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
      rationale: "Inversion and eversion range work is standard after ankle sprain and immobilisation. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ ankleNear: 0, hipRotNear: -14 }, SEATED), travel: 800, hold: 400, label: "Sole turned inward" },
        { pose: pose({ ankleNear: 0, hipRotNear: 16 }, SEATED), travel: 1000, hold: 900, label: "Sole turned outward" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-CO-004",
    slug: "abdominal-bracing",
    name: { en: "Abdominal Bracing", ur: "پیٹ کو سخت کرنا" },
    bodyRegion: "Core",
    joint: ["Lumbar spine L1–L5"],
    musclesTargeted: ["Transversus abdominis", "Internal oblique", "Multifidus"],
    conditions: ["Low back pain", "Core weakness", "Post-partum recovery", "Poor lifting technique"],
    purpose: { en: "Teaches the deep abdominal muscles to switch on, which is the base every other core exercise builds on.", ur: "پیٹ کے گہرے پٹھوں کو چلنا سکھاتی ہے، جو باقی ہر کور ورزش کی بنیاد ہے۔" },
    difficulty: "Beginner",
    contraction: ["Isometric"],
    mode: "Active",
    load: "No load",
    position: "Supine",
    equipment: ["Exercise mat"],
    startingPosition: { en: "Lie on your back with your knees bent, feet flat, and one hand resting on your lower abdomen.", ur: "گھٹنے موڑ کر سیدھے لیٹ جائیں، پاؤں زمین پر اور ایک ہاتھ پیٹ کے نچلے حصے پر۔" },
    quickSteps: {
      en: [
        "Lie on your back with knees bent, hand on your lower tummy.",
        "Gently tighten the muscles under your hand, as if bracing for a light push.",
        "Hold 10 seconds while breathing normally.",
      ],
      ur: [
        "گھٹنے موڑ کر لیٹ جائیں، ہاتھ پیٹ کے نچلے حصے پر۔",
        "ہاتھ کے نیچے کے پٹھے ہلکا سخت کریں، جیسے ہلکے دھکے کے لیے تیار ہوں۔",
        "دس سیکنڈ رکیں اور سانس معمول کے مطابق لیتے رہیں۔",
      ],
    },
    steps: {
      en: [
        "Rest one hand below the navel to feel the muscle.",
        "Tighten gently to about two out of ten effort.",
        "The low back should not press down or arch up.",
        "Hold while breathing normally, then release fully.",
      ],
      ur: [
        "ناف کے نیچے ایک ہاتھ رکھیں تاکہ پٹھا محسوس ہو۔",
        "دس میں سے تقریباً دو کے زور سے ہلکا سخت کریں۔",
        "کمر نہ نیچے دبے نہ اوپر اٹھے۔",
        "سانس لیتے ہوئے رکیں، پھر پوری طرح ڈھیلا کریں۔",
      ],
    },
    specialInstructions: {
      en: [
        "This is gentle — hard bracing uses the wrong muscles.",
        "If you cannot talk while holding, you are squeezing too hard.",
        "The low back stays exactly where it started.",
      ],
      ur: [
        "یہ ہلکی ورزش ہے — زور سے سختی غلط پٹھے استعمال کرتی ہے۔",
        "اگر رکتے ہوئے بول نہ سکیں تو بہت زور لگا رہے ہیں۔",
        "کمر بالکل اپنی جگہ رہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Squeezing as hard as possible.",
        "Holding the breath.",
        "Flattening or arching the low back.",
        "Sucking the stomach in sharply.",
      ],
      ur: [
        "پوری طاقت سے دبانا۔",
        "سانس روکنا۔",
        "کمر کو دبانا یا محراب بنانا۔",
        "پیٹ کو اچانک اندر کھینچنا۔",
      ],
    },
    safetyPrecautions: {
      en: [
        "Keep breathing throughout — holding the breath defeats the purpose.",
        "Stop if your low back arches away from its set position.",
      ],
      ur: [
        "پوری ورزش میں سانس لیتے رہیں — سانس روکنا مقصد ختم کر دیتا ہے۔",
        "اگر کمر اپنی جگہ سے اُٹھنے لگے تو رک جائیں۔",
      ],
    },
    repetitions: "10",
    sets: "3",
    holdTime: "10 seconds",
    frequency: "Daily",
    restBetweenSets: "30 seconds",
    progressions: [],
    regressions: [],
    contraindications: {
      en: [
        "Recent abdominal surgery unless cleared",
        "Uncontrolled hernia",
        "Late pregnancy without clearance",
      ],
      ur: [
        "پیٹ کا حالیہ آپریشن، جب تک اجازت نہ ہو",
        "بغیر قابو ہرنیا",
        "حمل کے آخری مہینے، بغیر اجازت",
      ],
    },
    evidence: {
      status: "unreviewed",
      rationale: "Low-level abdominal bracing is a standard first step in motor control programmes for low back pain. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ lumbar: 0 }, SUPINE), travel: 800, hold: 400, label: "Lying with the hand on the tummy" },
        { pose: pose({ lumbar: 2 }, SUPINE), travel: 1000, hold: 900, label: "Gently brace and hold" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-T-003",
    slug: "thoracic-foam-roll",
    name: { en: "Upper Back Extension over a Rolled Towel", ur: "لپٹے تولیے پر اوپری کمر کھولنا" },
    bodyRegion: "Thoracic",
    joint: ["Thoracic spine T1–T12", "Costovertebral"],
    musclesTargeted: ["Thoracic erector spinae", "Intercostals"],
    conditions: ["Thoracic stiffness", "Postural rounding", "Desk work stiffness"],
    purpose: { en: "Opens the stiff mid-back over a support, which restores the extension lost to hours of sitting.", ur: "سہارے پر اوپری کمر کو کھولتی ہے اور گھنٹوں بیٹھنے سے کھوئی ہوئی حرکت بحال کرتی ہے۔" },
    difficulty: "Beginner",
    contraction: ["Passive"],
    mode: "Passive",
    load: "Bodyweight",
    position: "Supine",
    equipment: ["Exercise mat", "Rolled towel"],
    startingPosition: { en: "Lie on your back with a firmly rolled towel across your mid-back and your knees bent.", ur: "سیدھے لیٹ جائیں، مضبوطی سے لپٹا تولیہ درمیانی کمر کے نیچے آڑا ہو اور گھٹنے مڑے ہوں۔" },
    quickSteps: {
      en: [
        "Lie back over a rolled towel placed across your mid-back.",
        "Support your head with your hands and let the upper back drape backwards.",
        "Hold 20 seconds, breathing out slowly.",
      ],
      ur: [
        "درمیانی کمر کے نیچے لپٹا تولیہ رکھ کر لیٹ جائیں۔",
        "ہاتھوں سے سر سنبھالیں اور اوپری کمر کو پیچھے جھکنے دیں۔",
        "بیس سیکنڈ رکیں، آہستہ سانس چھوڑتے ہوئے۔",
      ],
    },
    steps: {
      en: [
        "Place the rolled towel across the back, not along it.",
        "Bend the knees and keep the feet flat.",
        "Clasp the hands behind the head to support the neck.",
        "Let the upper back drape back over the towel and breathe out.",
      ],
      ur: [
        "تولیہ کمر پر آڑا رکھیں، لمبائی میں نہیں۔",
        "گھٹنے موڑیں اور پاؤں زمین پر رکھیں۔",
        "سر کے پیچھے ہاتھ باندھ کر گردن کو سہارا دیں۔",
        "اوپری کمر تولیے پر پیچھے جھکنے دیں اور سانس چھوڑیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Always support the head — the neck must not hang.",
        "Move the towel up or down to reach different levels.",
        "Breathing out is what lets the ribs open.",
      ],
      ur: [
        "سر کو ہمیشہ سہارا دیں — گردن لٹکنی نہیں چاہیے۔",
        "مختلف حصوں کے لیے تولیہ اوپر نیچے کریں۔",
        "سانس چھوڑنے سے ہی پسلیاں کھلتی ہیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting the head hang unsupported.",
        "Placing the towel on the low back.",
        "Arching from the lower back.",
        "Holding the breath.",
      ],
      ur: [
        "سر کو بغیر سہارے لٹکانا۔",
        "تولیہ نچلی کمر پر رکھنا۔",
        "نچلی کمر سے محراب بنانا۔",
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
    repetitions: "3",
    sets: "2",
    holdTime: "20 seconds",
    frequency: "Daily",
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
      rationale: "Thoracic extension over a support is commonly used for postural thoracic stiffness. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ thorax: 0, shoulderNear: 150, elbowNear: 110, shoulderFar: 150, elbowFar: 110 }, SUPINE), travel: 800, hold: 400, label: "Lying over the rolled towel" },
        { pose: pose({ thorax: -16, shoulderNear: 150, elbowNear: 110, shoulderFar: 150, elbowFar: 110 }, SUPINE), travel: 1000, hold: 900, label: "Let the upper back drape back" },
      ],
      props: [{ kind: "mat" }, { kind: "towelUnderKnee" }],
    },
  },
  {
    id: "EX-CX-005",
    slug: "chin-tuck-standing",
    name: { en: "Standing Chin Tuck against a Wall", ur: "دیوار کے ساتھ ٹھوڑی پیچھے کرنا" },
    bodyRegion: "Cervical",
    joint: ["Cervical spine C1–C7"],
    musclesTargeted: ["Deep cervical flexors", "Longus colli"],
    conditions: ["Forward head posture", "Neck pain", "Desk work stiffness"],
    purpose: { en: "Practises the chin tuck upright against a wall, which gives clear feedback on where the head actually sits.", ur: "دیوار کے ساتھ کھڑے ہو کر ٹھوڑی پیچھے کرنا سکھاتی ہے، جس سے سر کی اصل حالت کا پتہ چلتا ہے۔" },
    difficulty: "Beginner",
    contraction: ["Isometric"],
    mode: "Active",
    load: "No load",
    position: "Standing",
    equipment: ["Wall"],
    startingPosition: { en: "Stand with your back and head against a wall, feet a short step forward.", ur: "کمر اور سر دیوار سے لگا کر کھڑے ہوں، پاؤں ایک قدم آگے۔" },
    quickSteps: {
      en: [
        "Stand with your back and head touching a wall.",
        "Glide the chin straight back to press the head into the wall.",
        "Hold 5 seconds, then release.",
      ],
      ur: [
        "کمر اور سر دیوار سے لگا کر کھڑے ہوں۔",
        "ٹھوڑی سیدھی پیچھے کھسکائیں تاکہ سر دیوار سے دبے۔",
        "پانچ سیکنڈ رکیں، پھر چھوڑ دیں۔",
      ],
    },
    steps: {
      en: [
        "Stand tall with the shoulders and back of the head touching the wall.",
        "Keep the eyes level and looking straight ahead.",
        "Glide the chin backwards, pressing the head gently into the wall.",
        "Hold, then release forward slowly.",
      ],
      ur: [
        "سیدھے کھڑے ہوں، کندھے اور سر کا پچھلا حصہ دیوار سے لگے۔",
        "نظریں سیدھی سامنے رکھیں۔",
        "ٹھوڑی پیچھے کھسکائیں اور سر نرمی سے دیوار پر دبائیں۔",
        "رکیں، پھر آہستہ آگے چھوڑیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "The eyes stay level — this is a glide, not a nod.",
        "If the head cannot reach the wall, that itself is useful information.",
        "Press gently; this is not a strength test.",
      ],
      ur: [
        "نظریں سیدھی رہیں — یہ کھسکانا ہے، سر ہلانا نہیں۔",
        "اگر سر دیوار تک نہ پہنچے تو یہ خود ایک اہم بات ہے۔",
        "نرمی سے دبائیں؛ یہ طاقت کا امتحان نہیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Nodding the chin down.",
        "Lifting the chin to reach the wall.",
        "Pressing hard.",
        "Holding the breath.",
      ],
      ur: [
        "ٹھوڑی نیچے جھکانا۔",
        "دیوار تک پہنچنے کے لیے ٹھوڑی اٹھانا۔",
        "زور سے دبانا۔",
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
    repetitions: "10",
    sets: "3",
    holdTime: "5 seconds",
    frequency: "Daily, or hourly at a desk",
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
      rationale: "Wall-based chin retraction gives proprioceptive feedback during postural retraining. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ headSlide: 10, neck: 4 }, STAND), travel: 800, hold: 400, label: "Standing with the chin poking forward" },
        { pose: pose({ headSlide: -4, neck: -1, head: 4 }, STAND), travel: 1000, hold: 900, label: "Glide the chin back to the wall" },
      ],
      props: [{ kind: "wall" }],
    },
  },
];
