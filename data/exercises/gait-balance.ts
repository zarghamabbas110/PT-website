import { pose } from "@/lib/figure";
import type { Exercise } from "../schema";
import { PRONE, QUADRUPED, SEATED, SIDE_LYING, STAND, SUPINE, SUPINE_LONG } from "./bases";

/* ==========================================================================
   WALKING, BALANCE, BREATHING AND NERVES
   --------------------------------------------------------------------------
   The four thinnest parts of the library, filled out: the gait and transfer
   tasks people are actually trying to get back to, the balance ladder from
   feet-together to a clock reach, airway clearance and breathlessness, and
   the nerve glides for the arm and the front of the thigh.
   Drafts pending clinical review.
   ========================================================================== */

export const GAIT_BALANCE: Exercise[] = [
  {
    id: "EX-H-032",
    slug: "marching-on-the-spot",
    name: { en: "Marching on the Spot", ur: "ایک جگہ قدم اٹھانا" },
    bodyRegion: "Pelvis & Hip",
    joint: ["Hip", "Tibiofemoral", "Talocrural"],
    musclesTargeted: ["Iliopsoas", "Quadriceps femoris", "Gluteus medius", "Tibialis anterior"],
    conditions: ["Deconditioning", "Falls risk", "Return to walking", "Warm-up before exercise"],
    purpose: { en: "The safest way to practise the walking pattern, because the feet never leave the same square foot of floor.", ur: "چلنے کی مشق کا محفوظ ترین طریقہ، کیونکہ پاؤں فرش کی ایک ہی جگہ سے نہیں ہٹتے۔" },
    exerciseType: "Functional & gait",
    difficulty: "Beginner",
    contraction: ["Concentric", "Isometric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["Support within reach"],
    startingPosition: { en: "Stand tall beside a worktop with the feet hip-width apart and one hand resting on it.", ur: "میز کے پاس سیدھے کھڑے ہوں، پاؤں کولہوں کے برابر فاصلے پر اور ایک ہاتھ میز پر۔" },
    quickSteps: {
      en: [
        "Stand tall beside a worktop.",
        "Lift one knee to hip height, then the other.",
        "Keep a slow, even rhythm for one minute.",
      ],
      ur: [
        "میز کے پاس سیدھے کھڑے ہوں۔",
        "ایک گھٹنا کولہے کی اونچائی تک اٹھائیں، پھر دوسرا۔",
        "ایک منٹ تک آہستہ اور یکساں رفتار رکھیں۔",
      ],
    },
    steps: {
      en: [
        "Stand tall with the weight even on both feet.",
        "Lift one knee towards hip height, keeping the trunk upright.",
        "Place that foot down softly and lift the other.",
        "Swing the opposite arm as you would when walking.",
        "Keep the rhythm slow and even rather than fast.",
      ],
      ur: [
        "سیدھے کھڑے ہوں، دونوں پاؤں پر وزن برابر۔",
        "ایک گھٹنا کولہے کی اونچائی تک اٹھائیں، دھڑ سیدھا رکھیں۔",
        "وہ پاؤں نرمی سے نیچے رکھیں اور دوسرا اٹھائیں۔",
        "چلنے کی طرح مخالف بازو بھی جھلائیں۔",
        "رفتار تیز کے بجائے آہستہ اور یکساں رکھیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Swinging the opposite arm makes it a walking exercise rather than a leg lift.",
        "Height matters less than keeping the trunk upright.",
        "A good warm-up before anything harder.",
      ],
      ur: [
        "مخالف بازو جھلانے سے یہ ٹانگ اٹھانے کے بجائے چلنے کی ورزش بن جاتی ہے۔",
        "اونچائی سے زیادہ اہم ہے دھڑ کا سیدھا رہنا۔",
        "کسی بھی مشکل ورزش سے پہلے اچھا وارم اپ۔",
      ],
    },
    commonMistakes: {
      en: [
        "Looking down instead of ahead.",
        "Taking hurried, uneven steps.",
        "Holding the breath.",
        "Going further than the distance you planned.",
      ],
      ur: [
        "سامنے کے بجائے نیچے دیکھنا۔",
        "جلدی اور غیر برابر قدم لینا۔",
        "سانس روکنا۔",
        "طے شدہ فاصلے سے آگے چلے جانا۔",
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
    repetitions: "1 minute",
    sets: "3",
    holdTime: "—",
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
      rationale: "Marching on the spot is a standard low-risk gait and conditioning drill. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ hipNear: 0, kneeNear: 2 }, STAND), travel: 800, hold: 400, label: "Standing tall" },
        { pose: pose({ hipNear: 86, kneeNear: 88, shoulderFar: 140, elbowFar: 50 }, STAND), travel: 1000, hold: 900, label: "Lift the knee to hip height" },
      ],
    },
  },
  {
    id: "EX-A-022",
    slug: "heel-toe-walking-line",
    name: { en: "Walking a Line", ur: "لکیر پر چلنا" },
    bodyRegion: "Ankle & Foot",
    joint: ["Talocrural", "Subtalar", "Hip"],
    musclesTargeted: ["Peroneals", "Gluteus medius", "Tibialis posterior", "Foot intrinsics"],
    conditions: ["Falls risk", "Balance training", "Ankle instability", "Older adult conditioning"],
    purpose: { en: "Walking heel to toe along a line narrows the base with every step, which is the moving version of standing in tandem.", ur: "لکیر پر ایڑی سے پنجے تک چلنا ہر قدم پر بنیاد تنگ کرتا ہے، اور یہ تندم کھڑے ہونے کا متحرک انداز ہے۔" },
    exerciseType: "Balance & proprioception",
    difficulty: "Intermediate",
    contraction: ["Concentric", "Isometric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["A wall to walk beside"],
    startingPosition: { en: "Stand at one end of a clear corridor with one hand able to reach the wall.", ur: "کھلے راستے کے ایک سرے پر کھڑے ہوں، ایک ہاتھ دیوار تک پہنچ سکے۔" },
    quickSteps: {
      en: [
        "Stand beside a wall in a clear corridor.",
        "Walk forward placing each heel against the other toe.",
        "Take ten steps, turn carefully, and come back.",
      ],
      ur: [
        "کھلے راستے میں دیوار کے پاس کھڑے ہوں۔",
        "آگے چلیں اور ہر ایڑی دوسرے پنجے سے لگائیں۔",
        "دس قدم لیں، احتیاط سے مڑیں اور واپس آئیں۔",
      ],
    },
    steps: {
      en: [
        "Walk beside a wall so a hand can reach it at any moment.",
        "Place one foot directly in front of the other, heel touching toe.",
        "Look ahead at a fixed point rather than down at the feet.",
        "Take ten slow steps, pausing briefly on each.",
        "Turn around in small steps, holding the wall, then walk back.",
      ],
      ur: [
        "دیوار کے ساتھ چلیں تاکہ ہاتھ کسی بھی لمحے پہنچ سکے۔",
        "ایک پاؤں بالکل دوسرے کے سامنے رکھیں، ایڑی پنجے سے لگی ہو۔",
        "پاؤں کی طرف نیچے کے بجائے سامنے کسی نقطے پر نظر رکھیں۔",
        "دس آہستہ قدم لیں، ہر قدم پر لمحہ بھر رکیں۔",
        "دیوار پکڑ کر چھوٹے قدموں میں مڑیں، پھر واپس چلیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Stand within arm's reach of a worktop or a wall, every single time.",
        "Progress by taking a hand off, not by making the surface softer.",
        "Stop the set the moment you have to grab; that is the useful limit.",
      ],
      ur: [
        "ہر بار میز یا دیوار سے ایک بازو کے فاصلے میں کھڑے ہوں۔",
        "ترقی ہاتھ ہٹا کر کریں، سطح نرم کر کے نہیں۔",
        "پکڑنا پڑے تو فوراً سیٹ ختم کریں؛ یہی اصل حد ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Practising with nothing within reach.",
        "Looking down at the feet.",
        "Holding the breath.",
        "Moving to the next level too early.",
      ],
      ur: [
        "پہنچ میں کوئی سہارا رکھے بغیر مشق کرنا۔",
        "پاؤں کی طرف نیچے دیکھنا۔",
        "سانس روکنا۔",
        "بہت جلد اگلے مرحلے پر چلے جانا۔",
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
    restBetweenSets: "30 seconds",
    progressions: [],
    regressions: ["tandem-stance"],
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
      rationale: "Tandem walking is a standard dynamic balance progression. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: STAND, travel: 800, hold: 400, label: "Standing at the line" },
        { pose: pose({ hipNear: 16, kneeNear: 10, hipFar: -14, kneeFar: 8 }, STAND), travel: 1000, hold: 900, label: "Heel to toe, step by step" },
      ],
    },
  },
  {
    id: "EX-H-033",
    slug: "sideways-walking",
    name: { en: "Sideways Walking", ur: "پہلو کی طرف چلنا" },
    bodyRegion: "Pelvis & Hip",
    joint: ["Hip", "Tibiofemoral"],
    musclesTargeted: ["Gluteus medius", "Gluteus minimus", "Adductors", "Peroneals"],
    conditions: ["Gluteal weakness", "Falls risk", "Return to sport", "Hip instability"],
    purpose: { en: "Walking sideways loads the side of the hip in the way it is actually used — holding the pelvis level while the other foot is off the ground.", ur: "پہلو کی طرف چلنا کولہے کے پہلو پر اُسی طرح بوجھ ڈالتا ہے جیسے حقیقت میں استعمال ہوتا ہے — دوسرے پاؤں کے اٹھے ہونے پر پیڑو برابر رکھنا۔" },
    exerciseType: "Functional & gait",
    difficulty: "Beginner",
    contraction: ["Concentric", "Eccentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["Support within reach"],
    startingPosition: { en: "Stand tall beside a worktop with the feet together and one hand resting on it.", ur: "میز کے پاس سیدھے کھڑے ہوں، پاؤں ملے ہوئے اور ایک ہاتھ میز پر۔" },
    quickSteps: {
      en: [
        "Stand tall with the feet together.",
        "Step sideways with one foot, then bring the other to meet it.",
        "Take ten steps one way, then ten back.",
      ],
      ur: [
        "سیدھے کھڑے ہوں، پاؤں ملے ہوئے۔",
        "ایک پاؤں پہلو میں رکھیں، پھر دوسرا ساتھ لے آئیں۔",
        "ایک طرف دس قدم، پھر واپس دس قدم۔",
      ],
    },
    steps: {
      en: [
        "Stand tall with the feet together and the toes pointing forward.",
        "Step one foot out to the side, keeping the toes forward.",
        "Bring the other foot across to meet it, without letting the feet cross.",
        "Keep the trunk upright and the pelvis level throughout.",
        "Take ten steps in one direction, then ten back the other way.",
      ],
      ur: [
        "سیدھے کھڑے ہوں، پاؤں ملے اور پنجے سامنے کی طرف۔",
        "ایک پاؤں پہلو میں رکھیں، پنجہ سامنے ہی رہے۔",
        "دوسرا پاؤں ساتھ لے آئیں، پاؤں کراس نہ ہوں۔",
        "پوری ورزش میں دھڑ سیدھا اور پیڑو برابر رکھیں۔",
        "ایک طرف دس قدم لیں، پھر دوسری طرف دس۔",
      ],
    },
    specialInstructions: {
      en: [
        "The toes stay forward — turning them out lets the wrong muscles take over.",
        "Small steps done level beat big steps with a dropping hip.",
        "Add a band around the ankles once this is easy.",
      ],
      ur: [
        "پنجے سامنے ہی رہیں — باہر گھمانے سے غلط پٹھے کام سنبھال لیتے ہیں۔",
        "کولہا جھکا کر بڑے قدم لینے سے بہتر ہے برابر رہ کر چھوٹے قدم۔",
        "آسان ہو جائے تو ٹخنوں کے گرد بینڈ ڈال لیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Looking down instead of ahead.",
        "Taking hurried, uneven steps.",
        "Holding the breath.",
        "Going further than the distance you planned.",
      ],
      ur: [
        "سامنے کے بجائے نیچے دیکھنا۔",
        "جلدی اور غیر برابر قدم لینا۔",
        "سانس روکنا۔",
        "طے شدہ فاصلے سے آگے چلے جانا۔",
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
    repetitions: "10 steps each way",
    sets: "3",
    holdTime: "—",
    frequency: "Every other day",
    restBetweenSets: "30 seconds",
    progressions: ["band-hip-abduction-standing"],
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
      rationale: "Lateral walking is standard gluteus medius strengthening in a functional pattern. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: STAND, travel: 800, hold: 400, label: "Feet together" },
        { pose: pose({ hipRotNear: -26, hipNear: 6, kneeNear: 8 }, STAND), travel: 1000, hold: 900, label: "Step out to the side" },
      ],
    },
  },
  {
    id: "EX-K-022",
    slug: "backward-walking",
    name: { en: "Backward Walking", ur: "پیچھے کی طرف چلنا" },
    bodyRegion: "Knee",
    joint: ["Tibiofemoral", "Hip", "Talocrural"],
    musclesTargeted: ["Quadriceps femoris", "Gluteus maximus", "Hamstrings", "Soleus"],
    conditions: ["Osteoarthritis of the knee", "Falls risk", "Return to sport", "Quadriceps weakness"],
    purpose: { en: "Walking backwards loads the thigh differently and demands more of balance, without bending the knee as far as walking forwards does.", ur: "پیچھے چلنے سے ران پر مختلف انداز میں بوجھ پڑتا ہے اور توازن پر زیادہ زور آتا ہے، جبکہ گھٹنا آگے چلنے جتنا نہیں مڑتا۔" },
    exerciseType: "Functional & gait",
    difficulty: "Intermediate",
    contraction: ["Concentric", "Eccentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["A clear corridor", "Support within reach"],
    startingPosition: { en: "Stand in a clear, uncluttered corridor with a wall or rail within reach on one side.", ur: "کھلے اور صاف راستے میں کھڑے ہوں، ایک طرف دیوار یا ریلنگ پہنچ میں ہو۔" },
    quickSteps: {
      en: [
        "Check the space behind you is completely clear.",
        "Walk backwards slowly, toes touching down first.",
        "Take ten steps, then walk forwards to return.",
      ],
      ur: [
        "یقینی بنائیں کہ پیچھے کی جگہ بالکل خالی ہے۔",
        "آہستہ پیچھے چلیں، پہلے پنجے زمین پر رکھیں۔",
        "دس قدم لیں، پھر آگے چل کر واپس آئیں۔",
      ],
    },
    steps: {
      en: [
        "Check the whole path behind you first — this is the main safety point.",
        "Walk beside a wall so a hand can steady you.",
        "Step backwards placing the toes down first, then the heel.",
        "Keep the trunk upright and look ahead, not over your shoulder.",
        "Take ten steps back, then turn and walk forwards to the start.",
      ],
      ur: [
        "پہلے پیچھے کا پورا راستہ دیکھ لیں — یہی سب سے اہم حفاظتی بات ہے۔",
        "دیوار کے ساتھ چلیں تاکہ ہاتھ سہارا دے سکے۔",
        "پیچھے قدم رکھتے وقت پہلے پنجہ، پھر ایڑی رکھیں۔",
        "دھڑ سیدھا رکھیں اور سامنے دیکھیں، کندھے کے اوپر سے پیچھے نہیں۔",
        "دس قدم پیچھے لیں، پھر مڑ کر آگے چلتے ہوئے شروع پر آئیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Never do this outdoors or anywhere you have not checked.",
        "Looking over the shoulder is what causes the fall — look ahead.",
        "Useful for a knee that hurts on the way down stairs.",
      ],
      ur: [
        "یہ کبھی باہر یا ایسی جگہ نہ کریں جو دیکھی نہ ہو۔",
        "کندھے کے اوپر سے پیچھے دیکھنے سے ہی گرنے کا خطرہ ہوتا ہے — سامنے دیکھیں۔",
        "اُس گھٹنے کے لیے مفید جو سیڑھیاں اترتے وقت دُکھے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Looking down instead of ahead.",
        "Taking hurried, uneven steps.",
        "Holding the breath.",
        "Going further than the distance you planned.",
      ],
      ur: [
        "سامنے کے بجائے نیچے دیکھنا۔",
        "جلدی اور غیر برابر قدم لینا۔",
        "سانس روکنا۔",
        "طے شدہ فاصلے سے آگے چلے جانا۔",
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
    repetitions: "10 steps",
    sets: "3",
    holdTime: "—",
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
      rationale: "Retro-walking is used in knee osteoarthritis and balance programmes. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: STAND, travel: 800, hold: 400, label: "Standing, path checked" },
        { pose: pose({ hipNear: -18, kneeNear: 12, ankleNear: 22, hipFar: 10, kneeFar: 6 }, STAND), travel: 1000, hold: 900, label: "Step back, toes down first" },
      ],
    },
  },
  {
    id: "EX-H-034",
    slug: "obstacle-course-walking",
    name: { en: "Stepping Over Obstacles", ur: "رکاوٹوں کے اوپر سے گزرنا" },
    bodyRegion: "Pelvis & Hip",
    joint: ["Hip", "Tibiofemoral", "Talocrural"],
    musclesTargeted: ["Iliopsoas", "Quadriceps femoris", "Gluteus medius", "Tibialis anterior"],
    conditions: ["Falls risk", "Foot clearance in gait", "Return to walking outdoors", "Post-stroke rehabilitation"],
    purpose: { en: "Most falls happen on something ordinary — a doorstep, a cable, a raised paving slab. This practises exactly that, indoors, where it is safe to get it wrong.", ur: "زیادہ تر گرنے کے واقعات کسی معمولی چیز سے ہوتے ہیں — دہلیز، تار، اٹھی ہوئی اینٹ۔ یہ ورزش وہی مشق گھر کے اندر کراتی ہے جہاں غلطی محفوظ ہے۔" },
    exerciseType: "Functional & gait",
    difficulty: "Intermediate",
    contraction: ["Concentric", "Isometric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["Rolled towels or books", "Support within reach"],
    startingPosition: { en: "Lay three or four rolled towels across a clear path, a stride apart, beside a wall.", ur: "دیوار کے ساتھ کھلے راستے پر تین چار لپٹے تولیے، ایک قدم کے فاصلے پر رکھ دیں۔" },
    quickSteps: {
      en: [
        "Lay rolled towels across a clear path, a stride apart.",
        "Walk over them, lifting each foot clear.",
        "Turn carefully and walk back.",
      ],
      ur: [
        "کھلے راستے پر لپٹے تولیے ایک قدم کے فاصلے پر رکھیں۔",
        "اُن کے اوپر سے چلیں، ہر پاؤں اچھی طرح اٹھائیں۔",
        "احتیاط سے مڑ کر واپس چلیں۔",
      ],
    },
    steps: {
      en: [
        "Set three or four rolled towels a stride apart along a clear path.",
        "Walk beside a wall so a hand can reach it.",
        "Walk forward, lifting each foot well clear of the towel.",
        "Look ahead at the next obstacle rather than down at the one you are crossing.",
        "Turn round in small steps and walk back over them.",
      ],
      ur: [
        "کھلے راستے پر تین چار لپٹے تولیے ایک قدم کے فاصلے پر رکھیں۔",
        "دیوار کے ساتھ چلیں تاکہ ہاتھ پہنچ سکے۔",
        "آگے چلیں، ہر پاؤں تولیے سے اچھی طرح اوپر اٹھائیں۔",
        "جس رکاوٹ پر ہیں اُس کے بجائے اگلی رکاوٹ کی طرف دیکھیں۔",
        "چھوٹے قدموں میں مڑیں اور واپس اُن کے اوپر سے چلیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Looking at the obstacle you are already over is how people catch a toe.",
        "Start with something no thicker than a rolled towel.",
        "Add height only when three lengths are comfortable.",
      ],
      ur: [
        "جس رکاوٹ کو پار کر چکے ہوں اُسے دیکھنے سے ہی پنجہ اٹکتا ہے۔",
        "لپٹے تولیے سے موٹی چیز سے شروع نہ کریں۔",
        "تین چکر آرام سے ہو جائیں تو اونچائی بڑھائیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Looking down instead of ahead.",
        "Taking hurried, uneven steps.",
        "Holding the breath.",
        "Going further than the distance you planned.",
      ],
      ur: [
        "سامنے کے بجائے نیچے دیکھنا۔",
        "جلدی اور غیر برابر قدم لینا۔",
        "سانس روکنا۔",
        "طے شدہ فاصلے سے آگے چلے جانا۔",
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
    repetitions: "3 lengths",
    sets: "2",
    holdTime: "—",
    frequency: "Daily",
    restBetweenSets: "30 seconds",
    progressions: ["lateral-step-over"],
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
      rationale: "Obstacle negotiation practice is a standard falls-prevention component. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: STAND, travel: 800, hold: 400, label: "Standing at the first obstacle" },
        { pose: pose({ hipNear: 74, kneeNear: 92, ankleNear: -18, shoulderFar: 150, elbowFar: 30 }, STAND), travel: 1000, hold: 900, label: "Lift the foot well clear" },
      ],
    },
  },
  {
    id: "EX-CX-016",
    slug: "walking-with-head-turns",
    name: { en: "Walking with Head Turns", ur: "چلتے ہوئے سر گھمانا" },
    bodyRegion: "Cervical",
    joint: ["Cervical spine C1–C7", "Hip", "Talocrural"],
    musclesTargeted: ["Deep neck flexors", "Gluteus medius", "Peroneals", "Erector spinae"],
    conditions: ["Falls risk", "Dizziness with movement", "Return to walking outdoors", "Post-stroke rehabilitation"],
    purpose: { en: "Crossing a road means walking and looking both ways at once. Practising the two together is the only way to make it safe.", ur: "سڑک پار کرنے کا مطلب ہے چلتے ہوئے دونوں طرف دیکھنا۔ دونوں کی ایک ساتھ مشق ہی اسے محفوظ بناتی ہے۔" },
    exerciseType: "Functional & gait",
    difficulty: "Intermediate",
    contraction: ["Concentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["A clear corridor", "A wall to walk beside"],
    startingPosition: { en: "Stand at one end of a clear corridor with a wall within reach on one side.", ur: "کھلے راستے کے ایک سرے پر کھڑے ہوں، ایک طرف دیوار پہنچ میں ہو۔" },
    quickSteps: {
      en: [
        "Walk slowly along a corridor beside a wall.",
        "Every three steps, turn your head to one side, then the other.",
        "Keep walking in a straight line throughout.",
      ],
      ur: [
        "دیوار کے ساتھ راستے پر آہستہ چلیں۔",
        "ہر تین قدم بعد سر ایک طرف گھمائیں، پھر دوسری طرف۔",
        "پوری مشق میں سیدھی لکیر پر چلتے رہیں۔",
      ],
    },
    steps: {
      en: [
        "Walk beside a wall so a hand can reach it at any point.",
        "Walk forwards at a comfortable, steady pace.",
        "Every three steps, turn the head to look over one shoulder.",
        "Three steps later, turn it the other way.",
        "Keep walking in a straight line — the head turns, the path does not.",
      ],
      ur: [
        "دیوار کے ساتھ چلیں تاکہ ہاتھ کسی بھی وقت پہنچ سکے۔",
        "آرام دہ اور یکساں رفتار سے آگے چلیں۔",
        "ہر تین قدم بعد سر گھما کر ایک کندھے کے اوپر دیکھیں۔",
        "تین قدم بعد دوسری طرف گھمائیں۔",
        "سیدھی لکیر پر چلتے رہیں — سر گھومے، راستہ نہیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Stop and hold the wall at once if you feel dizzy.",
        "Drifting off the line is the thing to notice; it is what happens at a kerb.",
        "Build up to looking up and down as well as side to side.",
      ],
      ur: [
        "چکر آئے تو فوراً رک کر دیوار پکڑ لیں۔",
        "لکیر سے ہٹ جانا ہی دیکھنے والی بات ہے؛ فٹ پاتھ پر یہی ہوتا ہے۔",
        "بعد میں دائیں بائیں کے ساتھ اوپر نیچے دیکھنا بھی شامل کریں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Looking down instead of ahead.",
        "Taking hurried, uneven steps.",
        "Holding the breath.",
        "Going further than the distance you planned.",
      ],
      ur: [
        "سامنے کے بجائے نیچے دیکھنا۔",
        "جلدی اور غیر برابر قدم لینا۔",
        "سانس روکنا۔",
        "طے شدہ فاصلے سے آگے چلے جانا۔",
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
    repetitions: "3 lengths",
    sets: "2",
    holdTime: "—",
    frequency: "Daily",
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
      rationale: "Dual-task gait with head movement is used in vestibular and falls rehabilitation. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ head: 0 }, STAND), travel: 800, hold: 400, label: "Walking steadily" },
        { pose: pose({ hipNear: 30, kneeNear: 20, hipFar: -18, head: -4 }, STAND), travel: 1000, hold: 900, label: "Turn the head as you walk" },
      ],
    },
  },
  {
    id: "EX-H-035",
    slug: "dual-task-walking",
    name: { en: "Walking While Counting", ur: "چلتے ہوئے گنتی کرنا" },
    bodyRegion: "Pelvis & Hip",
    joint: ["Hip", "Tibiofemoral", "Talocrural"],
    musclesTargeted: ["Gluteus medius", "Quadriceps femoris", "Tibialis anterior", "Erector spinae"],
    conditions: ["Falls risk", "Older adult conditioning", "Post-stroke rehabilitation", "Parkinson's disease"],
    purpose: { en: "Walking safely while thinking about something else is the real-world skill. Someone who has to stop walking to answer a question is at high risk of falling.", ur: "کسی اور بات پر سوچتے ہوئے محفوظ چلنا اصل مہارت ہے۔ جسے جواب دینے کے لیے رکنا پڑے، اُس کے گرنے کا خطرہ زیادہ ہوتا ہے۔" },
    exerciseType: "Functional & gait",
    difficulty: "Intermediate",
    contraction: ["Concentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["A clear corridor", "Support within reach"],
    startingPosition: { en: "Stand at one end of a clear corridor with a wall within reach.", ur: "کھلے راستے کے ایک سرے پر کھڑے ہوں، دیوار پہنچ میں ہو۔" },
    quickSteps: {
      en: [
        "Walk along a clear corridor at your normal pace.",
        "At the same time, count backwards from fifty in threes.",
        "If you stop walking to think, slow the counting down.",
      ],
      ur: [
        "کھلے راستے پر اپنی عام رفتار سے چلیں۔",
        "ساتھ ہی پچاس سے تین تین کر کے الٹی گنتی کریں۔",
        "سوچنے کے لیے رکنا پڑے تو گنتی آہستہ کر دیں۔",
      ],
    },
    steps: {
      en: [
        "Walk beside a wall at your ordinary walking pace.",
        "Start counting backwards out loud from fifty, in threes.",
        "Keep both going — the walking and the counting.",
        "Notice whether your steps slow down or shorten as the counting gets harder.",
        "If you have to stop walking to think, make the counting easier and build up.",
      ],
      ur: [
        "دیوار کے ساتھ اپنی عام رفتار سے چلیں۔",
        "پچاس سے تین تین کر کے بلند آواز میں الٹی گنتی شروع کریں۔",
        "دونوں کام ساتھ جاری رکھیں — چلنا اور گننا۔",
        "دیکھیں کہ گنتی مشکل ہونے پر آپ کے قدم آہستہ یا چھوٹے تو نہیں ہو رہے۔",
        "سوچنے کے لیے رکنا پڑے تو گنتی آسان کر کے آہستہ آہستہ بڑھائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Having to stop walking in order to think is itself a falls risk — that is what this trains.",
        "Naming animals or towns works just as well as counting.",
        "Do it beside a wall until the walking stays steady.",
      ],
      ur: [
        "سوچنے کے لیے چلنا روک دینا خود گرنے کا خطرہ ہے — یہی ورزش اسی پر کام کرتی ہے۔",
        "گنتی کے بجائے جانوروں یا شہروں کے نام لینا بھی اتنا ہی مؤثر ہے۔",
        "چال مستحکم ہونے تک دیوار کے ساتھ کریں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Looking down instead of ahead.",
        "Taking hurried, uneven steps.",
        "Holding the breath.",
        "Going further than the distance you planned.",
      ],
      ur: [
        "سامنے کے بجائے نیچے دیکھنا۔",
        "جلدی اور غیر برابر قدم لینا۔",
        "سانس روکنا۔",
        "طے شدہ فاصلے سے آگے چلے جانا۔",
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
    repetitions: "3 lengths",
    sets: "2",
    holdTime: "—",
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
      rationale: "Dual-task gait training is a standard component of falls prevention. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: STAND, travel: 800, hold: 400, label: "Standing at the start" },
        { pose: pose({ hipNear: 28, kneeNear: 18, hipFar: -16, shoulderFar: 150, elbowFar: 30 }, STAND), travel: 1000, hold: 900, label: "Walk and count together" },
      ],
    },
  },
  {
    id: "EX-K-023",
    slug: "sit-to-stand-no-hands",
    name: { en: "Sit to Stand without Hands", ur: "بغیر ہاتھ کے کرسی سے اٹھنا" },
    bodyRegion: "Knee",
    joint: ["Tibiofemoral", "Hip", "Talocrural"],
    musclesTargeted: ["Quadriceps femoris", "Gluteus maximus", "Soleus", "Erector spinae"],
    conditions: ["Quadriceps weakness", "Falls risk", "Older adult conditioning", "Return to independent living"],
    purpose: { en: "Standing up without pushing off is the single best measure of leg strength in daily life, and the thing most people lose first.", ur: "بغیر سہارے کے اٹھنا روزمرہ زندگی میں ٹانگوں کی طاقت کا بہترین پیمانہ ہے، اور یہی چیز زیادہ تر لوگ سب سے پہلے کھوتے ہیں۔" },
    exerciseType: "Functional & gait",
    difficulty: "Intermediate",
    contraction: ["Concentric", "Eccentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["Firm chair"],
    startingPosition: { en: "Sit on the front half of a firm chair with the feet flat and drawn back under the knees, arms crossed over the chest.", ur: "مضبوط کرسی کے اگلے حصے پر بیٹھیں، پاؤں فرش پر گھٹنوں کے نیچے کھینچے ہوئے، بازو سینے پر باندھے۔" },
    quickSteps: {
      en: [
        "Sit forward with the feet drawn back and arms crossed.",
        "Lean forward, then stand without using your hands.",
        "Sit back down slowly.",
      ],
      ur: [
        "آگے بیٹھیں، پاؤں پیچھے کھینچے اور بازو باندھے ہوں۔",
        "آگے جھکیں، پھر ہاتھ استعمال کیے بغیر کھڑے ہوں۔",
        "آہستہ واپس بیٹھ جائیں۔",
      ],
    },
    steps: {
      en: [
        "Sit on the front half of the chair with the feet flat and pulled back under the knees.",
        "Cross the arms over the chest.",
        "Lean the trunk forward until your nose is over your toes.",
        "Push down through the heels and stand up in one movement.",
        "Sit back down slowly over three seconds, without dropping onto the chair.",
      ],
      ur: [
        "کرسی کے اگلے حصے پر بیٹھیں، پاؤں فرش پر اور گھٹنوں کے نیچے کھینچے ہوئے۔",
        "بازو سینے پر باندھ لیں۔",
        "دھڑ آگے جھکائیں یہاں تک کہ ناک پنجوں کے اوپر آ جائے۔",
        "ایڑیوں سے زور لگا کر ایک ہی حرکت میں کھڑے ہو جائیں۔",
        "تین سیکنڈ میں آہستہ واپس بیٹھیں، کرسی پر گرے بغیر۔",
      ],
    },
    specialInstructions: {
      en: [
        "'Nose over toes' is the whole technique — without the lean it is far harder.",
        "Counting how many you can do in thirty seconds tracks your progress.",
        "Use a higher chair or a cushion if you cannot manage one yet.",
      ],
      ur: [
        "'ناک پنجوں کے اوپر' ہی پورا طریقہ ہے — جھکے بغیر یہ کہیں مشکل ہے۔",
        "تیس سیکنڈ میں کتنی بار کر سکتے ہیں، اسے گننے سے ترقی کا پتا چلتا ہے۔",
        "ایک بار بھی نہ ہو سکے تو اونچی کرسی یا تکیہ استعمال کریں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Pushing off the thighs or the chair arms.",
        "Dropping back onto the chair.",
        "Keeping the feet too far forward.",
        "Holding the breath.",
      ],
      ur: [
        "رانوں یا کرسی کے ہتھوں سے دھکا لگانا۔",
        "کرسی پر دھڑام سے بیٹھ جانا۔",
        "پاؤں بہت آگے رکھنا۔",
        "سانس روکنا۔",
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
    repetitions: "5–10",
    sets: "3",
    holdTime: "—",
    frequency: "Daily",
    restBetweenSets: "30 seconds",
    progressions: [],
    regressions: ["sit-to-stand"],
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
      rationale: "Sit to stand without upper limb assistance is a standard functional strength measure. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ lumbar: 10, hipNear: 92, kneeNear: 100, shoulderNear: 140, elbowNear: 130 }, SEATED), travel: 800, hold: 400, label: "Sitting forward, arms crossed" },
        { pose: pose({ hipNear: 8, kneeNear: 8, shoulderNear: 150, elbowNear: 130, shoulderFar: 150, elbowFar: 130 }, SEATED), travel: 1000, hold: 900, label: "Stand without using the hands" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-K-024",
    slug: "step-down-control",
    name: { en: "Step Down with Control", ur: "قابو سے سیڑھی اترنا" },
    bodyRegion: "Knee",
    joint: ["Tibiofemoral", "Patellofemoral", "Hip"],
    musclesTargeted: ["Quadriceps femoris", "Gluteus medius", "Gluteus maximus", "Soleus"],
    conditions: ["Patellofemoral pain", "Post-knee-surgery rehabilitation", "Return to sport", "Difficulty descending stairs"],
    purpose: { en: "Going down a step is harder than going up, because the thigh has to pay out slowly under the whole body weight — which is exactly why stairs hurt on the way down.", ur: "سیڑھی اترنا چڑھنے سے مشکل ہے، کیونکہ ران کو پورے جسم کا وزن آہستہ چھوڑنا پڑتا ہے — اسی لیے اترتے وقت گھٹنا دُکھتا ہے۔" },
    exerciseType: "Functional & gait",
    difficulty: "Intermediate",
    contraction: ["Eccentric", "Isometric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["Low step (10–20 cm)", "Support to hold"],
    startingPosition: { en: "Stand on a low step with one foot at the edge and a hand resting on a rail or wall.", ur: "نیچی سیڑھی پر کھڑے ہوں، ایک پاؤں کنارے پر اور ایک ہاتھ ریلنگ یا دیوار پر۔" },
    quickSteps: {
      en: [
        "Stand on a low step, one foot at the edge.",
        "Lower the other foot slowly to touch the floor.",
        "Push back up and repeat.",
      ],
      ur: [
        "نیچی سیڑھی پر کھڑے ہوں، ایک پاؤں کنارے پر۔",
        "دوسرا پاؤں آہستہ نیچے لا کر فرش کو چھوئیں۔",
        "واپس اوپر آئیں اور دہرائیں۔",
      ],
    },
    steps: {
      en: [
        "Stand on the step with the working foot at the front edge.",
        "Keep the trunk upright and rest a hand lightly on a rail.",
        "Bend the standing knee slowly, lowering the other heel towards the floor.",
        "Touch the floor lightly with that heel — do not put weight on it.",
        "Push back up through the standing leg over two seconds.",
      ],
      ur: [
        "سیڑھی پر کھڑے ہوں، کام کرنے والا پاؤں اگلے کنارے پر۔",
        "دھڑ سیدھا رکھیں اور ایک ہاتھ ہلکا ریلنگ پر رکھیں۔",
        "کھڑی ٹانگ کا گھٹنا آہستہ موڑیں، دوسری ایڑی فرش کی طرف نیچے لائیں۔",
        "اُس ایڑی سے فرش کو ہلکا چھوئیں — اُس پر وزن نہ ڈالیں۔",
        "دو سیکنڈ میں کھڑی ٹانگ سے زور لگا کر واپس اوپر آئیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Watch the standing knee in a mirror — it must not fall inwards.",
        "Slower lowering is harder and more useful than a bigger step.",
        "Start with a step no higher than a house brick.",
      ],
      ur: [
        "آئینے میں کھڑی ٹانگ کے گھٹنے کو دیکھیں — وہ اندر کی طرف نہ گرے۔",
        "بڑی سیڑھی سے بہتر ہے آہستہ نیچے آنا، یہ زیادہ مشکل اور مفید ہے۔",
        "اینٹ سے اونچی سیڑھی سے شروع نہ کریں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting the standing knee fall inwards.",
        "Dropping down rather than lowering.",
        "Taking weight on the lowering foot.",
        "Leaning the trunk forward.",
      ],
      ur: [
        "کھڑی ٹانگ کے گھٹنے کا اندر کی طرف گر جانا۔",
        "آہستہ اترنے کے بجائے گر جانا۔",
        "نیچے جانے والے پاؤں پر وزن ڈال دینا۔",
        "دھڑ کو آگے جھکانا۔",
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
    holdTime: "2 seconds down",
    frequency: "Every other day",
    restBetweenSets: "30 seconds",
    progressions: [],
    regressions: ["step-up"],
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
      rationale: "Eccentric step-down is a standard measure and trainer of quadriceps control. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ hipNear: 0, kneeNear: 2 }, STAND), travel: 800, hold: 400, label: "Standing on the step" },
        { pose: pose({ hipNear: 34, kneeNear: 44, ankleNear: -16, hipFar: 26, kneeFar: 6, shoulderNear: 130, elbowNear: 40 }, STAND), travel: 1000, hold: 900, label: "Lower the other foot slowly" },
      ],
    },
  },
  {
    id: "EX-A-023",
    slug: "feet-together-stand",
    name: { en: "Standing with Feet Together", ur: "پاؤں ملا کر کھڑا ہونا" },
    bodyRegion: "Ankle & Foot",
    joint: ["Talocrural", "Subtalar", "Hip"],
    musclesTargeted: ["Peroneals", "Tibialis posterior", "Gluteus medius", "Erector spinae"],
    conditions: ["Falls risk", "Early balance training", "Post-stroke rehabilitation", "Older adult conditioning"],
    purpose: { en: "The first step on the balance ladder, and where anyone unsteady should begin — narrowing the base only slightly, with both feet still down.", ur: "توازن کی سیڑھی کا پہلا قدم، اور ہر لڑکھڑانے والے کا آغاز — بنیاد ذرا سی تنگ، دونوں پاؤں پھر بھی زمین پر۔" },
    exerciseType: "Balance & proprioception",
    difficulty: "Beginner",
    contraction: ["Isometric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["Support within reach"],
    startingPosition: { en: "Stand beside a worktop with both feet together, touching from heel to toe.", ur: "میز کے پاس کھڑے ہوں، دونوں پاؤں ایڑی سے پنجے تک ملے ہوئے۔" },
    quickSteps: {
      en: [
        "Stand with both feet touching, side by side.",
        "Let go of the support if you can.",
        "Hold 30 seconds, breathing normally.",
      ],
      ur: [
        "دونوں پاؤں ملا کر ساتھ ساتھ کھڑے ہوں۔",
        "ہو سکے تو سہارا چھوڑ دیں۔",
        "عام سانس لیتے ہوئے تیس سیکنڈ رکیں۔",
      ],
    },
    steps: {
      en: [
        "Stand within arm's reach of a worktop.",
        "Bring both feet together so they touch along their whole length.",
        "Look straight ahead at a fixed point.",
        "Take the hands off the support if you can stay steady.",
        "Hold for thirty seconds, breathing normally, then rest.",
      ],
      ur: [
        "میز سے ایک بازو کے فاصلے میں کھڑے ہوں۔",
        "دونوں پاؤں ملا لیں تاکہ پوری لمبائی میں چھوئیں۔",
        "سامنے کسی ایک نقطے پر نظر رکھیں۔",
        "مستحکم رہ سکیں تو ہاتھ سہارے سے ہٹا لیں۔",
        "عام سانس لیتے ہوئے تیس سیکنڈ رکیں، پھر آرام کریں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Stand within arm's reach of a worktop or a wall, every single time.",
        "Progress by taking a hand off, not by making the surface softer.",
        "Stop the set the moment you have to grab; that is the useful limit.",
      ],
      ur: [
        "ہر بار میز یا دیوار سے ایک بازو کے فاصلے میں کھڑے ہوں۔",
        "ترقی ہاتھ ہٹا کر کریں، سطح نرم کر کے نہیں۔",
        "پکڑنا پڑے تو فوراً سیٹ ختم کریں؛ یہی اصل حد ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Practising with nothing within reach.",
        "Looking down at the feet.",
        "Holding the breath.",
        "Moving to the next level too early.",
      ],
      ur: [
        "پہنچ میں کوئی سہارا رکھے بغیر مشق کرنا۔",
        "پاؤں کی طرف نیچے دیکھنا۔",
        "سانس روکنا۔",
        "بہت جلد اگلے مرحلے پر چلے جانا۔",
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
    repetitions: "3",
    sets: "2",
    holdTime: "30 seconds",
    frequency: "Daily",
    restBetweenSets: "30 seconds",
    progressions: ["tandem-stance"],
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
      rationale: "Narrowed base standing is the entry level of the standard balance progression. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: STAND, travel: 800, hold: 400, label: "Standing normally" },
        { pose: pose({ hipRotNear: 4, hipRotFar: 4 }, STAND), travel: 1000, hold: 900, label: "Feet together, hands off" },
      ],
    },
  },
  {
    id: "EX-A-024",
    slug: "balance-on-cushion",
    name: { en: "Standing on a Cushion", ur: "تکیے پر کھڑا ہونا" },
    bodyRegion: "Ankle & Foot",
    joint: ["Talocrural", "Subtalar", "Midtarsal"],
    musclesTargeted: ["Peroneals", "Tibialis posterior", "Foot intrinsics", "Gluteus medius"],
    conditions: ["Ankle instability", "Ankle sprain recovery", "Falls risk", "Return to sport"],
    purpose: { en: "A soft surface takes away the clear information the foot gets from a hard floor, so the ankle has to work far harder to keep you upright.", ur: "نرم سطح پاؤں کو سخت فرش سے ملنے والی صاف معلومات چھین لیتی ہے، اس لیے سیدھا رکھنے کے لیے ٹخنے کو کہیں زیادہ کام کرنا پڑتا ہے۔" },
    exerciseType: "Balance & proprioception",
    difficulty: "Intermediate",
    contraction: ["Isometric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["Firm cushion or folded towel", "Support within reach"],
    startingPosition: { en: "Place a firm cushion on the floor beside a worktop and stand on it with both feet.", ur: "میز کے پاس فرش پر مضبوط تکیہ رکھیں اور دونوں پاؤں سے اُس پر کھڑے ہوں۔" },
    quickSteps: {
      en: [
        "Stand on a firm cushion with both feet.",
        "Let go of the support once steady.",
        "Hold 30 seconds, then progress to one foot.",
      ],
      ur: [
        "مضبوط تکیے پر دونوں پاؤں سے کھڑے ہوں۔",
        "مستحکم ہونے پر سہارا چھوڑ دیں۔",
        "تیس سیکنڈ رکیں، پھر ایک پاؤں پر جائیں۔",
      ],
    },
    steps: {
      en: [
        "Put a firm cushion or folded towel on the floor next to a worktop.",
        "Step onto it with both feet, holding the worktop.",
        "Settle, then take the hands off if you can.",
        "Hold for thirty seconds, keeping the eyes forward.",
        "Progress by standing on one foot only, hands ready to grab.",
      ],
      ur: [
        "میز کے پاس فرش پر مضبوط تکیہ یا لپٹا تولیہ رکھیں۔",
        "میز پکڑ کر دونوں پاؤں سے اُس پر چڑھیں۔",
        "مستحکم ہو جائیں، پھر ہو سکے تو ہاتھ ہٹا لیں۔",
        "نظریں سامنے رکھتے ہوئے تیس سیکنڈ رکیں۔",
        "ترقی کے لیے صرف ایک پاؤں پر کھڑے ہوں، ہاتھ پکڑنے کو تیار رکھیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "A folded towel is a good first surface; a thick cushion is much harder.",
        "This is the standard progression after an ankle sprain, once eversion strength is back.",
        "Never do it on anything that can slide.",
      ],
      ur: [
        "پہلی سطح کے لیے لپٹا تولیہ اچھا ہے؛ موٹا تکیہ کہیں مشکل ہے۔",
        "ٹخنے کی موچ کے بعد باہر کی طرف طاقت واپس آنے پر یہ معیاری اگلا قدم ہے۔",
        "ایسی چیز پر ہرگز نہ کریں جو پھسل سکے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Practising with nothing within reach.",
        "Looking down at the feet.",
        "Holding the breath.",
        "Moving to the next level too early.",
      ],
      ur: [
        "پہنچ میں کوئی سہارا رکھے بغیر مشق کرنا۔",
        "پاؤں کی طرف نیچے دیکھنا۔",
        "سانس روکنا۔",
        "بہت جلد اگلے مرحلے پر چلے جانا۔",
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
    repetitions: "3",
    sets: "2",
    holdTime: "30 seconds",
    frequency: "Daily",
    restBetweenSets: "30 seconds",
    progressions: [],
    regressions: ["single-leg-balance"],
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
      rationale: "Unstable surface balance training is standard after ankle sprain and in falls programmes. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: STAND, travel: 800, hold: 400, label: "Standing on the cushion" },
        { pose: pose({ hipRotNear: 4, kneeNear: 10, kneeFar: 8 }, STAND), travel: 1000, hold: 900, label: "Hands off, hold steady" },
      ],
    },
  },
  {
    id: "EX-H-036",
    slug: "clock-reach-balance",
    name: { en: "Clock Reach", ur: "گھڑی کے رخ پر پہنچنا" },
    bodyRegion: "Pelvis & Hip",
    joint: ["Hip", "Tibiofemoral", "Talocrural"],
    musclesTargeted: ["Gluteus medius", "Gluteus maximus", "Quadriceps femoris", "Peroneals"],
    conditions: ["Falls risk", "Return to sport", "Ankle instability", "Hip weakness"],
    purpose: { en: "Reaching to different points of a clock face trains balance in every direction, not just the forward one people always practise.", ur: "گھڑی کے مختلف نمبروں کی طرف پہنچنا ہر سمت میں توازن سکھاتا ہے، صرف آگے کی طرف نہیں جس کی لوگ ہمیشہ مشق کرتے ہیں۔" },
    exerciseType: "Balance & proprioception",
    difficulty: "Advanced",
    contraction: ["Concentric", "Eccentric", "Isometric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["Support within reach"],
    startingPosition: { en: "Stand on one leg beside a worktop, imagining a clock face on the floor around you.", ur: "میز کے پاس ایک ٹانگ پر کھڑے ہوں، تصور کریں کہ فرش پر آپ کے گرد گھڑی بنی ہے۔" },
    quickSteps: {
      en: [
        "Stand on one leg with a clock face imagined on the floor.",
        "Tap the free foot towards twelve, then three, six and nine.",
        "Return to the middle between each.",
      ],
      ur: [
        "ایک ٹانگ پر کھڑے ہوں، فرش پر گھڑی کا تصور کریں۔",
        "آزاد پاؤں سے بارہ، پھر تین، چھ اور نو کو چھوئیں۔",
        "ہر بار درمیان میں واپس آئیں۔",
      ],
    },
    steps: {
      en: [
        "Stand on one leg with a soft knee, a worktop within reach.",
        "Picture a clock face on the floor with you at its centre.",
        "Reach the free foot out to tap twelve o'clock, then bring it back.",
        "Repeat to three, six and nine o'clock in turn.",
        "Keep the standing knee over the middle of the foot throughout.",
      ],
      ur: [
        "ایک ٹانگ پر کھڑے ہوں، گھٹنا ہلکا مڑا اور میز پہنچ میں ہو۔",
        "فرش پر گھڑی کا تصور کریں اور خود اُس کے درمیان ہوں۔",
        "آزاد پاؤں بڑھا کر بارہ بجے کو چھوئیں، پھر واپس لائیں۔",
        "پھر باری باری تین، چھ اور نو بجے کو چھوئیں۔",
        "پوری ورزش میں کھڑی ٹانگ کا گھٹنا پاؤں کے درمیان کی سیدھ میں رکھیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Reaching backwards to six o'clock is much the hardest — expect that.",
        "How far you can reach without wobbling is the measure to track.",
        "Master plain single leg balance for thirty seconds first.",
      ],
      ur: [
        "چھ بجے یعنی پیچھے کی طرف پہنچنا سب سے مشکل ہے — یہ متوقع ہے۔",
        "بغیر لڑکھڑائے کتنی دور پہنچ سکتے ہیں، یہی ماپنے کی بات ہے۔",
        "پہلے سادہ ایک ٹانگ توازن تیس سیکنڈ کر لیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Practising with nothing within reach.",
        "Looking down at the feet.",
        "Holding the breath.",
        "Moving to the next level too early.",
      ],
      ur: [
        "پہنچ میں کوئی سہارا رکھے بغیر مشق کرنا۔",
        "پاؤں کی طرف نیچے دیکھنا۔",
        "سانس روکنا۔",
        "بہت جلد اگلے مرحلے پر چلے جانا۔",
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
    repetitions: "4 reaches each side",
    sets: "2",
    holdTime: "1 second at each point",
    frequency: "Every other day",
    restBetweenSets: "30 seconds",
    progressions: [],
    regressions: ["single-leg-reach"],
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
      rationale: "Multidirectional reach tasks are a standard dynamic balance measure and exercise. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ hipNear: 0, kneeNear: 2 }, STAND), travel: 800, hold: 400, label: "Balanced on one leg" },
        { pose: pose({ hipNear: 48, kneeNear: 10, hipFar: 12, kneeFar: 28, lumbar: 8, shoulderNear: 130, elbowNear: 20, shoulderFar: 130, elbowFar: 20 }, STAND), travel: 1000, hold: 900, label: "Tap out to each hour in turn" },
      ],
    },
  },
  {
    id: "EX-K-025",
    slug: "sit-to-stand-eyes-closed",
    name: { en: "Sit to Stand with Eyes Closed", ur: "آنکھیں بند کر کے کرسی سے اٹھنا" },
    bodyRegion: "Knee",
    joint: ["Tibiofemoral", "Hip", "Talocrural"],
    musclesTargeted: ["Quadriceps femoris", "Gluteus maximus", "Peroneals", "Erector spinae"],
    conditions: ["Falls risk", "Proprioceptive loss", "Older adult conditioning", "Post-stroke rehabilitation"],
    purpose: { en: "Standing up in the dark, or with a hand full of shopping and your eyes elsewhere, is where people go over. This practises it safely.", ur: "اندھیرے میں یا ہاتھ میں سامان اور نظر کہیں اور ہوتے ہوئے اٹھنا — یہیں لوگ گرتے ہیں۔ یہ ورزش اسی کی محفوظ مشق ہے۔" },
    exerciseType: "Balance & proprioception",
    difficulty: "Intermediate",
    contraction: ["Concentric", "Eccentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["Firm chair against a wall"],
    startingPosition: { en: "Sit on a firm chair pushed against a wall, with the feet flat and drawn back under the knees.", ur: "دیوار سے لگی مضبوط کرسی پر بیٹھیں، پاؤں فرش پر گھٹنوں کے نیچے کھینچے ہوئے۔" },
    quickSteps: {
      en: [
        "Sit on a firm chair pushed against a wall.",
        "Close your eyes, then stand up.",
        "Sit back down slowly with the eyes still closed.",
      ],
      ur: [
        "دیوار سے لگی مضبوط کرسی پر بیٹھیں۔",
        "آنکھیں بند کریں، پھر کھڑے ہوں۔",
        "آنکھیں بند رکھتے ہوئے آہستہ واپس بیٹھیں۔",
      ],
    },
    steps: {
      en: [
        "Push the chair against a wall so it cannot slide.",
        "Sit forward with the feet flat and pulled back under the knees.",
        "Close your eyes and settle for a moment.",
        "Lean forward and stand up steadily, eyes still closed.",
        "Feel for the chair with the back of your legs, then sit down slowly.",
      ],
      ur: [
        "کرسی دیوار سے لگا دیں تاکہ پھسل نہ سکے۔",
        "آگے بیٹھیں، پاؤں فرش پر اور گھٹنوں کے نیچے کھینچے ہوئے۔",
        "آنکھیں بند کریں اور لمحہ بھر پرسکون ہو جائیں۔",
        "آگے جھک کر مستحکم انداز میں کھڑے ہوں، آنکھیں بند رہیں۔",
        "ٹانگوں کی پشت سے کرسی کو محسوس کریں، پھر آہستہ بیٹھ جائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Do this with someone nearby the first few times.",
        "Open the eyes at once if you feel yourself sway.",
        "Master sit to stand without hands, eyes open, before trying this.",
      ],
      ur: [
        "پہلی چند بار کسی کو پاس رکھیں۔",
        "جھولتا محسوس کریں تو فوراً آنکھیں کھول لیں۔",
        "یہ کرنے سے پہلے آنکھیں کھلی رکھ کر بغیر ہاتھ اٹھنا سیکھ لیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Practising with nothing within reach.",
        "Looking down at the feet.",
        "Holding the breath.",
        "Moving to the next level too early.",
      ],
      ur: [
        "پہنچ میں کوئی سہارا رکھے بغیر مشق کرنا۔",
        "پاؤں کی طرف نیچے دیکھنا۔",
        "سانس روکنا۔",
        "بہت جلد اگلے مرحلے پر چلے جانا۔",
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
    sets: "2",
    holdTime: "—",
    frequency: "Every other day",
    restBetweenSets: "30 seconds",
    progressions: [],
    regressions: ["sit-to-stand-no-hands"],
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
      rationale: "Removing vision from a functional transfer is a standard proprioceptive progression. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ lumbar: 10, hipNear: 92, kneeNear: 100 }, SEATED), travel: 800, hold: 400, label: "Sitting, eyes closed" },
        { pose: pose({ hipNear: 8, kneeNear: 8, shoulderNear: 150, elbowNear: 130, shoulderFar: 150, elbowFar: 130 }, SEATED), travel: 1000, hold: 900, label: "Stand up without looking" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-T-013",
    slug: "active-cycle-breathing",
    name: { en: "Active Cycle of Breathing", ur: "سانس کا فعال چکر" },
    bodyRegion: "Thoracic",
    joint: ["Costovertebral", "Thoracic spine T1–T12"],
    musclesTargeted: ["Diaphragm", "Intercostals", "Abdominal muscles"],
    conditions: ["Chest infection", "Bronchiectasis", "Chronic lung disease", "Post-operative chest care"],
    purpose: { en: "The standard way to clear phlegm from the chest without the exhausting, unproductive coughing that most people resort to.", ur: "سینے سے بلغم نکالنے کا معیاری طریقہ، بغیر اُس تھکا دینے والی اور بے فائدہ کھانسی کے جس کا زیادہ تر لوگ سہارا لیتے ہیں۔" },
    exerciseType: "Breathing & relaxation",
    difficulty: "Beginner",
    contraction: ["Isometric"],
    mode: "Active",
    load: "No load",
    position: "Sitting",
    equipment: ["Chair"],
    startingPosition: { en: "Sit upright and well supported, or lie on the side your physiotherapist has advised.", ur: "سیدھے اور اچھے سہارے کے ساتھ بیٹھیں، یا اُس پہلو پر لیٹیں جو فزیو تھراپسٹ نے بتایا ہو۔" },
    quickSteps: {
      en: [
        "Take four or five relaxed, gentle breaths.",
        "Then take three deep breaths, holding each for three seconds.",
        "Finish with one or two huffs, then relax again.",
      ],
      ur: [
        "چار پانچ آرام دہ اور نرم سانس لیں۔",
        "پھر تین گہری سانس لیں، ہر ایک تین سیکنڈ روکیں۔",
        "آخر میں ایک دو بار زور سے ہوا نکالیں، پھر دوبارہ آرام کریں۔",
      ],
    },
    steps: {
      en: [
        "Start with relaxed breathing: four or five gentle breaths, shoulders loose.",
        "Then three deep breaths in through the nose, holding each for three seconds at the top.",
        "Return to relaxed breathing for four or five breaths.",
        "Now huff: breathe out forcefully through an open mouth, as if steaming a mirror.",
        "Cough only if the huff has brought phlegm up to the throat, then start the cycle again.",
      ],
      ur: [
        "آرام دہ سانس سے شروع کریں: چار پانچ نرم سانس، کندھے ڈھیلے۔",
        "پھر ناک سے تین گہری سانس لیں، ہر ایک کو اوپر تین سیکنڈ روکیں۔",
        "چار پانچ سانس کے لیے دوبارہ آرام دہ سانس پر آ جائیں۔",
        "اب ہَف کریں: کھلے منہ سے زور سے ہوا نکالیں، جیسے آئینے پر بھاپ ڈال رہے ہوں۔",
        "ہَف سے بلغم گلے تک آ جائے تو ہی کھانسیں، پھر چکر دوبارہ شروع کریں۔",
      ],
    },
    specialInstructions: {
      en: [
        "A huff clears more than a cough and tires you far less.",
        "Do not cough repeatedly on an empty chest; it irritates the airway and exhausts you.",
        "Stop and rest if you feel light-headed at any point.",
      ],
      ur: [
        "ہَف کھانسی سے زیادہ صفائی کرتا ہے اور کہیں کم تھکاتا ہے۔",
        "خالی سینے پر بار بار نہ کھانسیں؛ اس سے نالی میں خرابی اور تھکن ہوتی ہے۔",
        "کسی بھی وقت سر ہلکا لگے تو رک کر آرام کریں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Coughing instead of huffing.",
        "Taking too many deep breaths in a row.",
        "Tensing the shoulders and neck.",
        "Continuing when light-headed.",
      ],
      ur: [
        "ہَف کے بجائے کھانسنا۔",
        "لگاتار بہت زیادہ گہری سانسیں لینا۔",
        "کندھے اور گردن سخت کر لینا۔",
        "سر ہلکا لگنے کے باوجود جاری رکھنا۔",
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
    repetitions: "3–4 cycles",
    sets: "1",
    holdTime: "3 seconds at the top of each deep breath",
    frequency: "2–4 times daily",
    restBetweenSets: "—",
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
      rationale: "The active cycle of breathing technique is a standard airway clearance method. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ thorax: 4 }, SEATED), travel: 800, hold: 400, label: "Sitting relaxed" },
        { pose: pose({ thorax: -6, shoulderNear: 158, elbowNear: 70, shoulderFar: 158, elbowFar: 70 }, SEATED), travel: 1000, hold: 900, label: "Deep breath, hold, then huff" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-T-014",
    slug: "thoracic-expansion-breathing",
    name: { en: "Side Rib Breathing", ur: "پسلیوں کے پہلو سے سانس لینا" },
    bodyRegion: "Thoracic",
    joint: ["Costovertebral", "Thoracic spine T1–T12"],
    musclesTargeted: ["Intercostals", "Diaphragm", "Serratus posterior"],
    conditions: ["Chest infection", "Post-operative chest care", "Rib fracture recovery", "Reduced chest expansion"],
    purpose: { en: "Directs the breath into the sides of the rib cage, which is where movement is lost first after an operation, a rib injury or a long illness.", ur: "سانس کو پسلیوں کے پہلوؤں کی طرف بھیجتی ہے، جہاں آپریشن، پسلی کی چوٹ یا لمبی بیماری کے بعد حرکت سب سے پہلے ختم ہوتی ہے۔" },
    exerciseType: "Breathing & relaxation",
    difficulty: "Beginner",
    contraction: ["Isometric"],
    mode: "Active",
    load: "No load",
    position: "Sitting",
    equipment: ["Chair"],
    startingPosition: { en: "Sit upright with your hands wrapped around the lower ribs on each side, fingers pointing forward.", ur: "سیدھے بیٹھیں، دونوں ہاتھ نچلی پسلیوں کے گرد رکھیں، انگلیاں سامنے کی طرف۔" },
    quickSteps: {
      en: [
        "Place your hands around your lower ribs.",
        "Breathe in and try to push your hands outwards.",
        "Breathe out slowly and feel the ribs come back in.",
      ],
      ur: [
        "ہاتھ نچلی پسلیوں کے گرد رکھیں۔",
        "سانس لیں اور ہاتھوں کو باہر دھکیلنے کی کوشش کریں۔",
        "آہستہ سانس چھوڑیں اور پسلیوں کو واپس اندر آتے محسوس کریں۔",
      ],
    },
    steps: {
      en: [
        "Sit upright with both hands wrapped round the lower ribs at the sides.",
        "Breathe out gently first, letting the ribs settle in.",
        "Breathe in through the nose and send the breath sideways into your hands.",
        "The hands should be pushed outwards; the shoulders should not rise.",
        "Breathe out slowly and completely, then repeat.",
      ],
      ur: [
        "سیدھے بیٹھیں، دونوں ہاتھ پہلوؤں میں نچلی پسلیوں کے گرد رکھیں۔",
        "پہلے نرمی سے سانس چھوڑیں اور پسلیاں اندر بیٹھنے دیں۔",
        "ناک سے سانس لیں اور اسے پہلوؤں کی طرف ہاتھوں میں بھیجیں۔",
        "ہاتھ باہر دھکیلے جانے چاہئیں؛ کندھے نہیں اٹھنے چاہئیں۔",
        "آہستہ اور پوری طرح سانس چھوڑیں، پھر دہرائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "The shoulders staying still is the whole test of whether it is working.",
        "Do it on one side only if that side is stiffer or has been operated on.",
        "Stop and take normal breaths if you feel dizzy.",
      ],
      ur: [
        "کندھوں کا ساکن رہنا ہی اس بات کا امتحان ہے کہ ورزش درست ہو رہی ہے۔",
        "ایک طرف زیادہ سخت ہو یا وہاں آپریشن ہوا ہو تو صرف اُسی طرف کریں۔",
        "چکر آئے تو رک کر عام سانس لیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Lifting the shoulders with each breath.",
        "Breathing in too fast.",
        "Holding the breath at the top.",
        "Doing too many in a row.",
      ],
      ur: [
        "ہر سانس کے ساتھ کندھے اٹھانا۔",
        "بہت تیز سانس لینا۔",
        "اوپر سانس روک لینا۔",
        "لگاتار بہت زیادہ کرنا۔",
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
    repetitions: "5 breaths",
    sets: "3",
    holdTime: "2 seconds at the top",
    frequency: "3–4 times daily",
    restBetweenSets: "20 seconds",
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
      rationale: "Thoracic expansion exercises are standard in post-operative and airway clearance care. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ shoulderNear: 150, elbowNear: 110, shoulderFar: 150, elbowFar: 110 }, SEATED), travel: 800, hold: 400, label: "Hands around the lower ribs" },
        { pose: pose({ shoulderNear: 146, elbowNear: 104, shoulderFar: 146, elbowFar: 104, thorax: -4 }, SEATED), travel: 1000, hold: 900, label: "Breathe out into your hands" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-T-015",
    slug: "breathing-control-recovery",
    name: { en: "Relaxed Breathing Recovery", ur: "سانس بحال کرنے کی آرام دہ ورزش" },
    bodyRegion: "Thoracic",
    joint: ["Costovertebral"],
    musclesTargeted: ["Diaphragm", "Intercostals"],
    conditions: ["Breathlessness", "Anxiety", "Chronic lung disease", "Panic"],
    purpose: { en: "The position and the breathing pattern to use the moment you run out of breath — leaning forward on your arms, which lets the diaphragm work better.", ur: "سانس پھولنے کے لمحے استعمال کرنے والی حالت اور طریقہ — بازوؤں پر آگے جھکنا، جس سے پردۂ شکم بہتر کام کرتا ہے۔" },
    exerciseType: "Breathing & relaxation",
    difficulty: "Beginner",
    contraction: ["Isometric"],
    mode: "Passive",
    load: "No load",
    position: "Sitting",
    equipment: ["Chair"],
    startingPosition: { en: "Sit leaning forward with the forearms resting on your thighs or on a table, shoulders dropped.", ur: "آگے جھک کر بیٹھیں، بازو رانوں یا میز پر رکھے اور کندھے نیچے چھوڑے ہوئے۔" },
    quickSteps: {
      en: [
        "Sit and lean forward onto your forearms.",
        "Drop your shoulders and let them go.",
        "Breathe gently in through the nose and out through the mouth.",
      ],
      ur: [
        "بیٹھ کر بازوؤں پر آگے جھکیں۔",
        "کندھے نیچے چھوڑ دیں اور ڈھیلا کر دیں۔",
        "ناک سے نرمی سے سانس لیں اور منہ سے چھوڑیں۔",
      ],
    },
    steps: {
      en: [
        "Sit down and lean forward, resting the forearms on the thighs or a table.",
        "Deliberately drop the shoulders and unclench the jaw.",
        "Breathe gently in through the nose, without trying to take a big breath.",
        "Breathe out slowly through the mouth, letting everything soften.",
        "Stay there until the breathing settles, then get up slowly.",
      ],
      ur: [
        "بیٹھ جائیں اور آگے جھکیں، بازو رانوں یا میز پر رکھیں۔",
        "جان بوجھ کر کندھے نیچے چھوڑیں اور جبڑا ڈھیلا کریں۔",
        "ناک سے نرمی سے سانس لیں، بڑی سانس لینے کی کوشش نہ کریں۔",
        "منہ سے آہستہ سانس چھوڑیں، سب کچھ ڈھیلا چھوڑ دیں۔",
        "سانس معمول پر آنے تک وہیں رہیں، پھر آہستہ اٹھیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Leaning forward on the arms is a real treatment, not just resting — it frees the diaphragm.",
        "Small gentle breaths settle breathlessness faster than big ones.",
        "Learn this position when you are well, so it is automatic when you are not.",
      ],
      ur: [
        "بازوؤں پر آگے جھکنا اصل علاج ہے، صرف آرام نہیں — اس سے پردۂ شکم آزاد ہو جاتا ہے۔",
        "چھوٹی نرم سانسیں بڑی سانسوں سے جلد سکون دیتی ہیں۔",
        "یہ حالت اُس وقت سیکھیں جب طبیعت ٹھیک ہو، تاکہ ضرورت پر خودبخود آ جائے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Trying to take big deep breaths.",
        "Tensing the neck and shoulders.",
        "Standing up too soon.",
        "Breathing fast through the mouth.",
      ],
      ur: [
        "بڑی گہری سانسیں لینے کی کوشش کرنا۔",
        "گردن اور کندھے سخت کر لینا۔",
        "بہت جلد کھڑا ہو جانا۔",
        "منہ سے تیز سانس لینا۔",
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
    repetitions: "Until the breathing settles",
    sets: "1",
    holdTime: "—",
    frequency: "Whenever breathless",
    restBetweenSets: "—",
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
      rationale: "Forward lean positioning with breathing control is standard in breathlessness management. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ lumbar: 6, thorax: 4 }, SEATED), travel: 800, hold: 400, label: "Sitting upright" },
        { pose: pose({ lumbar: 16, thorax: 12, shoulderNear: 152, elbowNear: 96, shoulderFar: 152, elbowFar: 96 }, SEATED), travel: 1000, hold: 900, label: "Lean forward onto the forearms" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-W-015",
    slug: "radial-nerve-glide",
    name: { en: "Radial Nerve Glide", ur: "ریڈیل عصب کی حرکت" },
    bodyRegion: "Wrist & Hand",
    joint: ["Radiocarpal", "Humeroradial", "Cervical spine C1–C7"],
    musclesTargeted: ["Radial nerve", "Wrist extensors", "Supinator"],
    conditions: ["Tennis elbow with nerve involvement", "Radial nerve irritation", "Wrist drop recovery", "Numbness on the back of the hand"],
    purpose: { en: "Slides the nerve that wraps round the back of the upper arm, which is often the reason a tennis elbow does not settle with tendon work alone.", ur: "اُس عصب کو سرکاتی ہے جو بازو کے پچھلے حصے کے گرد لپٹتا ہے، اور اکثر یہی وجہ ہوتی ہے کہ ٹینس ایلبو صرف ٹینڈن کی ورزش سے ٹھیک نہیں ہوتا۔" },
    exerciseType: "Neural mobilisation",
    difficulty: "Beginner",
    contraction: ["Passive"],
    mode: "Active",
    load: "No load",
    position: "Standing",
    equipment: [],
    startingPosition: { en: "Stand tall with one arm down by your side, palm facing backwards and the shoulder pressed down.", ur: "سیدھے کھڑے ہوں، ایک بازو پہلو میں نیچے، ہتھیلی پیچھے کی طرف اور کندھا نیچے دبا ہوا۔" },
    quickSteps: {
      en: [
        "Hold one arm down by your side, palm facing back.",
        "Bend the wrist and fingers down, then take the arm back.",
        "Tilt the head away, then release and repeat.",
      ],
      ur: [
        "ایک بازو پہلو میں نیچے رکھیں، ہتھیلی پیچھے کی طرف۔",
        "کلائی اور انگلیاں نیچے موڑیں، پھر بازو پیچھے لے جائیں۔",
        "سر مخالف طرف جھکائیں، پھر چھوڑ کر دہرائیں۔",
      ],
    },
    steps: {
      en: [
        "Stand tall with the arm straight down at your side and the shoulder pressed down.",
        "Turn the palm to face backwards.",
        "Bend the wrist and fingers downwards, curling them under.",
        "Take the straight arm a little way back behind you.",
        "Tilt the head away from that side for two seconds, then release everything.",
      ],
      ur: [
        "سیدھے کھڑے ہوں، بازو پہلو میں سیدھا نیچے اور کندھا نیچے دبا ہوا۔",
        "ہتھیلی پیچھے کی طرف گھمائیں۔",
        "کلائی اور انگلیاں نیچے کی طرف موڑیں، اندر کی طرف لپیٹیں۔",
        "سیدھا بازو تھوڑا پیچھے لے جائیں۔",
        "سر اُس طرف سے مخالف سمت دو سیکنڈ جھکائیں، پھر سب کچھ چھوڑ دیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "A nerve glide is not a stretch — two seconds at the end, no longer.",
        "If the symptoms increase afterwards, do fewer and go less far.",
        "The shoulder must stay pressed down or the nerve is not loaded at all.",
      ],
      ur: [
        "عصب کی حرکت کھنچاؤ نہیں — آخر میں صرف دو سیکنڈ، اس سے زیادہ نہیں۔",
        "بعد میں علامات بڑھیں تو کم بار اور کم حد تک کریں۔",
        "کندھا نیچے دبا رہے ورنہ عصب پر اثر ہی نہیں ہوتا۔",
      ],
    },
    commonMistakes: {
      en: [
        "Holding the end position too long.",
        "Letting the shoulder ride up.",
        "Pulling until the arm burns.",
        "Doing many repetitions on the first day.",
      ],
      ur: [
        "آخری حالت میں بہت دیر رکنا۔",
        "کندھے کا اوپر چڑھ جانا۔",
        "اتنا کھینچنا کہ بازو میں جلن ہو۔",
        "پہلے ہی دن بہت زیادہ بار کرنا۔",
      ],
    },
    safetyPrecautions: {
      en: [
        "Stop if you get pins and needles or numbness in the hand.",
        "Keep the effort gentle; the wrist responds badly to forcing.",
      ],
      ur: [
        "ہاتھ میں سنسناہٹ یا سُن پن ہو تو رک جائیں۔",
        "زور ہلکا رکھیں؛ کلائی پر زبردستی کرنے سے نقصان ہوتا ہے۔",
      ],
    },
    repetitions: "5–10",
    sets: "2",
    holdTime: "2 seconds",
    frequency: "2–3 times daily",
    restBetweenSets: "30 seconds",
    progressions: [],
    regressions: [],
    contraindications: {
      en: [
        "Acute wrist or hand fracture",
        "Recent wrist surgery unless cleared",
        "Suspected scaphoid injury",
      ],
      ur: [
        "کلائی یا ہاتھ کی حالیہ ٹوٹ پھوٹ",
        "کلائی کا حالیہ آپریشن، جب تک اجازت نہ ہو",
        "اسکیفائیڈ ہڈی کی مشتبہ چوٹ",
      ],
    },
    evidence: {
      status: "unreviewed",
      rationale: "Radial nerve gliding is used in radial tunnel and resistant lateral elbow pain. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ shoulderNear: 176, elbowNear: 6 }, STAND), travel: 800, hold: 400, label: "Arm down, palm back" },
        { pose: pose({ shoulderNear: 196, elbowNear: 2, shoulderRotNear: -30, head: -8 }, STAND), travel: 1000, hold: 900, label: "Take the arm back and tilt away" },
      ],
    },
  },
  {
    id: "EX-L-013",
    slug: "femoral-nerve-glide",
    name: { en: "Femoral Nerve Glide", ur: "فیمورل عصب کی حرکت" },
    bodyRegion: "Lumbar",
    joint: ["Lumbar spine L1–L5", "Hip", "Tibiofemoral"],
    musclesTargeted: ["Femoral nerve", "Quadriceps femoris", "Iliopsoas"],
    conditions: ["Front-of-thigh pain", "Upper lumbar nerve irritation", "Post-hip-surgery nerve symptoms", "Resistant quadriceps tightness"],
    purpose: { en: "For pain down the front of the thigh rather than the back — a different nerve from the sciatic, needing a different movement.", ur: "ران کے پیچھے کے بجائے سامنے کے درد کے لیے — یہ سیاٹک سے مختلف عصب ہے اور مختلف حرکت مانگتا ہے۔" },
    exerciseType: "Neural mobilisation",
    difficulty: "Intermediate",
    contraction: ["Passive"],
    mode: "Active",
    load: "Bodyweight",
    position: "Side-lying",
    equipment: ["Exercise mat"],
    startingPosition: { en: "Lie on your good side with both knees bent and the head resting on a pillow.", ur: "اچھی طرف پر لیٹ جائیں، دونوں گھٹنے مڑے اور سر تکیے پر۔" },
    quickSteps: {
      en: [
        "Lie on your good side with the knees bent.",
        "Take the top leg back and bend that knee, while tucking the chin.",
        "Release and lift the head instead, then repeat.",
      ],
      ur: [
        "اچھی طرف پر لیٹیں، گھٹنے مڑے ہوں۔",
        "اوپر والی ٹانگ پیچھے لے جا کر گھٹنا موڑیں، ساتھ ہی ٹھوڑی اندر کریں۔",
        "چھوڑ کر سر اٹھائیں، پھر دہرائیں۔",
      ],
    },
    steps: {
      en: [
        "Lie on the side that does not hurt, both knees bent.",
        "Hold the top ankle behind you and draw that heel towards the buttock.",
        "At the same time take the whole thigh backwards, behind the line of the body.",
        "Tuck the chin down to the chest for two seconds, then release the chin and lift the head.",
        "Move smoothly between the two rather than holding either.",
      ],
      ur: [
        "اُس طرف لیٹیں جو نہ دُکھتی ہو، دونوں گھٹنے مڑے۔",
        "اوپر والا ٹخنہ پیچھے سے پکڑیں اور ایڑی کولہے کی طرف کھینچیں۔",
        "ساتھ ہی پوری ران پیچھے، جسم کی لکیر سے پیچھے لے جائیں۔",
        "ٹھوڑی دو سیکنڈ سینے کی طرف نیچے کریں، پھر چھوڑ کر سر اٹھائیں۔",
        "کسی حالت میں رکنے کے بجائے دونوں کے درمیان ہموار حرکت کریں۔",
      ],
    },
    specialInstructions: {
      en: [
        "The chin and the leg work against each other; that is what slides the nerve.",
        "Never hold the end position — this is a glide, not a stretch.",
        "Stop if pain increases down the front of the thigh.",
      ],
      ur: [
        "ٹھوڑی اور ٹانگ ایک دوسرے کے مخالف کام کرتے ہیں؛ اسی سے عصب سرکتا ہے۔",
        "آخری حالت میں کبھی نہ رکیں — یہ حرکت ہے، کھنچاؤ نہیں۔",
        "ران کے سامنے درد بڑھے تو رک جائیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Holding the stretched position.",
        "Arching the low back to reach further.",
        "Doing too many on the first day.",
        "Continuing when the thigh pain worsens.",
      ],
      ur: [
        "کھنچی ہوئی حالت میں رک جانا۔",
        "زیادہ پہنچنے کے لیے کمر کو محراب بنانا۔",
        "پہلے ہی دن بہت زیادہ بار کرنا۔",
        "ران کا درد بڑھنے پر بھی جاری رکھنا۔",
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
    repetitions: "5–10 each side",
    sets: "2",
    holdTime: "2 seconds",
    frequency: "2 times daily",
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
      rationale: "Femoral nerve gliding is used for anterior thigh neural symptoms. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ hipNear: 40, kneeNear: 90, neck: 0 }, SIDE_LYING), travel: 800, hold: 400, label: "Side-lying, knees bent" },
        { pose: pose({ hipNear: -22, kneeNear: 118, neck: 16, shoulderNear: 130, elbowNear: 80 }, SIDE_LYING), travel: 1000, hold: 900, label: "Take the leg back, tuck the chin" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-S-047",
    slug: "brachial-plexus-glide",
    name: { en: "Nerve Glide for the Whole Arm", ur: "پورے بازو کے اعصاب کی حرکت" },
    bodyRegion: "Shoulder",
    joint: ["Glenohumeral", "Cervical spine C1–C7", "Radiocarpal"],
    musclesTargeted: ["Brachial plexus", "Median nerve", "Scalenes"],
    conditions: ["Thoracic outlet symptoms", "Pins and needles in the whole arm", "Post-whiplash arm symptoms", "Cervical radiculopathy recovery"],
    purpose: { en: "Moves the bundle of nerves as it passes from the neck under the collarbone, which is where symptoms in the whole arm usually come from.", ur: "اعصاب کے اُس گچھے کو حرکت دیتی ہے جو گردن سے ہنسلی کے نیچے گزرتا ہے، اور پورے بازو کی علامات عموماً وہیں سے آتی ہیں۔" },
    exerciseType: "Neural mobilisation",
    difficulty: "Beginner",
    contraction: ["Passive"],
    mode: "Active",
    load: "No load",
    position: "Sitting",
    equipment: ["Chair"],
    startingPosition: { en: "Sit tall with one arm out to the side at shoulder height, elbow straight and palm facing up.", ur: "سیدھے بیٹھیں، ایک بازو کندھے کی اونچائی پر پہلو میں، کہنی سیدھی اور ہتھیلی اوپر۔" },
    quickSteps: {
      en: [
        "Hold one arm out to the side, palm up.",
        "Bend the wrist back while tilting the head away.",
        "Release both together and repeat.",
      ],
      ur: [
        "ایک بازو پہلو میں رکھیں، ہتھیلی اوپر۔",
        "کلائی پیچھے موڑیں اور ساتھ ہی سر مخالف طرف جھکائیں۔",
        "دونوں ایک ساتھ چھوڑیں اور دہرائیں۔",
      ],
    },
    steps: {
      en: [
        "Sit tall with the shoulder pressed down and the arm out to the side at shoulder height.",
        "Turn the palm to face the ceiling, elbow straight.",
        "Bend the wrist back so the fingers point towards the floor.",
        "At the same time, tilt the head away from that arm for two seconds.",
        "Release the head and wrist together, then repeat.",
      ],
      ur: [
        "سیدھے بیٹھیں، کندھا نیچے دبا ہوا اور بازو کندھے کی اونچائی پر پہلو میں۔",
        "ہتھیلی چھت کی طرف گھمائیں، کہنی سیدھی۔",
        "کلائی پیچھے موڑیں تاکہ انگلیاں فرش کی طرف ہوں۔",
        "ساتھ ہی سر اُس بازو سے مخالف طرف دو سیکنڈ جھکائیں۔",
        "سر اور کلائی ایک ساتھ چھوڑیں، پھر دہرائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "If tingling comes on strongly, come out of it and do less next time.",
        "The shoulder must stay down; letting it lift takes all the load off the nerve.",
        "Never combine this with a long neck stretch on the same side.",
      ],
      ur: [
        "سنسناہٹ تیز ہو جائے تو نکل آئیں اور اگلی بار کم کریں۔",
        "کندھا نیچے رہے؛ اٹھ جائے تو عصب پر اثر ختم ہو جاتا ہے۔",
        "اسے کبھی اُسی طرف کے لمبے گردن کے کھنچاؤ کے ساتھ نہ ملائیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Holding the position for more than a couple of seconds.",
        "Letting the shoulder lift.",
        "Bending the elbow.",
        "Continuing when the tingling gets stronger.",
      ],
      ur: [
        "دو سیکنڈ سے زیادہ رک جانا۔",
        "کندھے کا اٹھ جانا۔",
        "کہنی موڑ لینا۔",
        "سنسناہٹ بڑھنے پر بھی جاری رکھنا۔",
      ],
    },
    safetyPrecautions: {
      en: [
        "Stop if you feel sharp or pinching pain in the shoulder.",
        "Keep the movement below the point where the shoulder hitches up.",
      ],
      ur: [
        "اگر کندھے میں تیز یا چبھنے والا درد ہو تو رک جائیں۔",
        "حرکت اُس حد سے نیچے رکھیں جہاں کندھا اوپر اُچھلنے لگے۔",
      ],
    },
    repetitions: "5–10 each side",
    sets: "2",
    holdTime: "2 seconds",
    frequency: "2 times daily",
    restBetweenSets: "30 seconds",
    progressions: [],
    regressions: [],
    contraindications: {
      en: [
        "Acute shoulder fracture or dislocation",
        "Recent shoulder surgery unless specifically cleared",
        "Active joint infection",
      ],
      ur: [
        "کندھے کی حالیہ ٹوٹ پھوٹ یا جوڑ کا اُترنا",
        "کندھے کا حالیہ آپریشن، جب تک خاص اجازت نہ ہو",
        "جوڑ میں فعال انفیکشن",
      ],
    },
    evidence: {
      status: "unreviewed",
      rationale: "Upper limb neurodynamic gliding is used in cervical radiculopathy and thoracic outlet symptoms. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ shoulderNear: 90, shoulderAbductNear: 84, elbowNear: 6 }, SEATED), travel: 800, hold: 400, label: "Arm out to the side, palm up" },
        { pose: pose({ shoulderNear: 90, shoulderAbductNear: 88, elbowNear: 2, head: -10, neck: -4 }, SEATED), travel: 1000, hold: 900, label: "Bend the wrist, tilt the head away" },
      ],
      props: [{ kind: "chair" }],
    },
  },
];
