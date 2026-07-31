import { pose } from "@/lib/figure";
import type { Exercise } from "../schema";
import { SEATED, SIDE_LYING, STAND, SUPINE, SUPINE_LONG } from "./bases";

/* ==========================================================================
   ANKLE, FOOT AND TRUNK CONTROL
   --------------------------------------------------------------------------
   Ankle range and loading, balance retraining, intrinsic foot work, and the
   trunk control exercises that sit alongside them. Drafts pending review.
   ========================================================================== */

export const ANKLE_FOOT: Exercise[] = [
  {
    id: "EX-A-001",
    slug: "ankle-pumps",
    name: { en: "Ankle Pumps", ur: "ٹخنہ اوپر نیچے کرنا" },
    bodyRegion: "Ankle & Foot",
    joint: ["Talocrural"],
    musclesTargeted: ["Gastrocnemius", "Soleus", "Tibialis anterior"],
    conditions: ["Post-surgery swelling", "Ankle stiffness", "Prolonged bed rest", "Circulation"],
    purpose: { en: "Keeps the ankle moving and helps swelling drain away when you cannot yet walk on it.", ur: "ٹخنے کو حرکت میں رکھتی ہے اور سوجن کم کرنے میں مدد دیتی ہے جب ابھی چلنا ممکن نہ ہو۔" },
    exerciseType: "Range of motion",
    difficulty: "Beginner",
    contraction: ["Concentric"],
    mode: "Active",
    load: "No load",
    position: "Supine",
    equipment: ["Exercise mat"],
    startingPosition: { en: "Lie or sit with the leg supported and the foot free to move.", ur: "لیٹ یا بیٹھ جائیں، ٹانگ ٹکی ہو اور پاؤں آزاد ہو۔" },
    quickSteps: {
      en: [
        "Lie or sit with the leg out straight.",
        "Point the foot down, then pull it up towards you.",
        "Repeat slowly and steadily.",
      ],
      ur: [
        "ٹانگ سیدھی رکھ کر لیٹیں یا بیٹھیں۔",
        "پاؤں نیچے کریں، پھر اپنی طرف اوپر کھینچیں۔",
        "آہستہ اور مستقل دہرائیں۔",
      ],
    },
    steps: {
      en: [
        "Support the leg so the ankle can move freely.",
        "Point the toes away from you as far as is comfortable.",
        "Then pull the toes up towards your face.",
        "Move through the full range each time.",
      ],
      ur: [
        "ٹانگ کو سہارا دیں تاکہ ٹخنہ آزادی سے حرکت کر سکے۔",
        "پنجے آرام کی حد تک اپنے سے دور کریں۔",
        "پھر پنجے اپنے چہرے کی طرف کھینچیں۔",
        "ہر بار پوری حرکت کریں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Do these often through the day, especially after surgery.",
        "Move through the whole range rather than fast and small.",
        "Helpful for reducing swelling and stiffness.",
      ],
      ur: [
        "دن میں بار بار کریں، خاص کر آپریشن کے بعد۔",
        "تیز اور چھوٹی حرکت کے بجائے پوری حرکت کریں۔",
        "سوجن اور اکڑن کم کرنے میں مفید ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Moving only a small amount.",
        "Rushing.",
        "Only pointing, never pulling up.",
        "Tensing the whole leg.",
      ],
      ur: [
        "بہت تھوڑی حرکت کرنا۔",
        "جلدی کرنا۔",
        "صرف نیچے کرنا، اوپر نہ کھینچنا۔",
        "پوری ٹانگ سخت کر لینا۔",
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
    repetitions: "20",
    sets: "3",
    holdTime: "1 second each end",
    frequency: "Hourly when resting",
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
      rationale: "Ankle pumping is standard for oedema management and early mobility after lower limb injury or surgery. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ ankleNear: -20, kneeNear: 2 }, SUPINE_LONG), travel: 800, hold: 400, label: "Toes pulled up" },
        { pose: pose({ ankleNear: 30, kneeNear: 2 }, SUPINE_LONG), travel: 1000, hold: 900, label: "Toes pointed down" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-A-002",
    slug: "calf-stretch-wall",
    name: { en: "Standing Calf Stretch", ur: "دیوار کے سہارے پنڈلی کا کھنچاؤ" },
    bodyRegion: "Ankle & Foot",
    joint: ["Talocrural"],
    musclesTargeted: ["Gastrocnemius", "Soleus", "Achilles tendon"],
    conditions: ["Calf tightness", "Achilles tendinopathy", "Plantar fasciitis", "Ankle stiffness"],
    purpose: { en: "Lengthens the calf and Achilles, which if tight change how you walk and strain the heel.", ur: "پنڈلی اور ایڑی کے پٹھے کو لمبا کرتی ہے، جو سخت ہوں تو چال بدل دیتے اور ایڑی پر زور ڈالتے ہیں۔" },
    exerciseType: "Stretching",
    difficulty: "Beginner",
    contraction: ["Passive"],
    mode: "Passive",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["Wall"],
    startingPosition: { en: "Stand facing a wall with both hands on it, one foot forward and the other straight back.", ur: "دیوار کے سامنے کھڑے ہوں، دونوں ہاتھ دیوار پر، ایک پاؤں آگے اور دوسرا سیدھا پیچھے۔" },
    quickSteps: {
      en: [
        "Stand facing a wall, hands on it, one foot back.",
        "Keep the back knee straight and the heel down.",
        "Lean forward until you feel the calf stretch; hold 30 seconds.",
      ],
      ur: [
        "دیوار کے سامنے کھڑے ہوں، ہاتھ دیوار پر، ایک پاؤں پیچھے۔",
        "پچھلا گھٹنا سیدھا اور ایڑی زمین پر رکھیں۔",
        "آگے جھکیں یہاں تک کہ پنڈلی میں کھنچاؤ ہو؛ تیس سیکنڈ رکیں۔",
      ],
    },
    steps: {
      en: [
        "Place both hands on the wall at shoulder height.",
        "Step one foot well back, toes pointing forward.",
        "Keep the back knee straight and the back heel flat on the floor.",
        "Lean the hips towards the wall until you feel a calf stretch.",
      ],
      ur: [
        "دونوں ہاتھ کندھے کی اونچائی پر دیوار پر رکھیں۔",
        "ایک پاؤں اچھا خاصا پیچھے کریں، پنجہ سامنے۔",
        "پچھلا گھٹنا سیدھا اور ایڑی زمین پر رکھیں۔",
        "کولہے دیوار کی طرف جھکائیں یہاں تک کہ پنڈلی میں کھنچاؤ ہو۔",
      ],
    },
    specialInstructions: {
      en: [
        "The back heel must stay flat — if it lifts, the stretch is lost.",
        "Keep the back toes pointing straight forward.",
        "Bending the back knee shifts the stretch lower, to the soleus.",
      ],
      ur: [
        "پچھلی ایڑی زمین پر رہے — اٹھ جائے تو کھنچاؤ ختم۔",
        "پچھلا پنجہ بالکل سامنے رکھیں۔",
        "پچھلا گھٹنا موڑنے سے کھنچاؤ نیچے سولئیس تک آتا ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting the back heel lift.",
        "Turning the back foot outward.",
        "Bouncing.",
        "Arching the low back instead of moving the hips.",
      ],
      ur: [
        "پچھلی ایڑی کا اٹھ جانا۔",
        "پچھلا پاؤں باہر گھمانا۔",
        "جھٹکا دینا۔",
        "کولہے لے جانے کے بجائے کمر کو محراب بنانا۔",
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
    repetitions: "3 each side",
    sets: "2",
    holdTime: "30 seconds",
    frequency: "Daily",
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
      rationale: "Calf stretching is a routine component of management for calf tightness, Achilles complaints and plantar heel pain. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ shoulderNear: 90, elbowNear: 30, shoulderFar: 90, elbowFar: 30, hipNear: 0, kneeNear: 4 }, STAND), travel: 800, hold: 400, label: "Hands on the wall, one foot back" },
        { pose: pose({ shoulderNear: 78, elbowNear: 16, shoulderFar: 78, elbowFar: 16, hipNear: 16, kneeNear: 26, hipFar: -14, kneeFar: 2, ankleFar: -16 }, STAND), travel: 1000, hold: 900, label: "Lean in, back heel down" },
      ],
      props: [{ kind: "wall" }],
    },
  },
  {
    id: "EX-A-003",
    slug: "heel-raises",
    name: { en: "Heel Raises", ur: "ایڑیاں اٹھانا" },
    bodyRegion: "Ankle & Foot",
    joint: ["Talocrural", "Subtalar"],
    musclesTargeted: ["Gastrocnemius", "Soleus", "Tibialis posterior"],
    conditions: ["Calf weakness", "Achilles tendinopathy", "Ankle sprain recovery", "Poor push-off"],
    purpose: { en: "Rebuilds the calf strength that pushes you off the ground with every step.", ur: "پنڈلی کی وہ طاقت بحال کرتی ہے جو ہر قدم پر جسم کو زمین سے اٹھاتی ہے۔" },
    exerciseType: "Strengthening",
    difficulty: "Beginner",
    contraction: ["Concentric", "Eccentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["Support to hold"],
    startingPosition: { en: "Stand tall with your feet hip-width apart, holding a support lightly for balance.", ur: "سیدھے کھڑے ہوں، پاؤں کولہوں کے برابر فاصلے پر، توازن کے لیے سہارا ہلکا پکڑیں۔" },
    quickSteps: {
      en: [
        "Stand tall, feet hip-width apart.",
        "Rise up onto your toes as high as you can.",
        "Lower slowly, all the way down.",
      ],
      ur: [
        "سیدھے کھڑے ہوں، پاؤں کولہوں کے برابر۔",
        "جتنا ہو سکے پنجوں پر اوپر اٹھیں۔",
        "آہستہ پوری طرح نیچے آئیں۔",
      ],
    },
    steps: {
      en: [
        "Stand with the weight even on both feet.",
        "Rise up onto the balls of the feet.",
        "Keep the ankles straight — do not roll outward.",
        "Lower slowly under control until the heels touch down.",
      ],
      ur: [
        "دونوں پاؤں پر وزن برابر رکھیں۔",
        "پنجوں کے گدوں پر اوپر اٹھیں۔",
        "ٹخنے سیدھے رکھیں — باہر نہ لڑھکیں۔",
        "قابو سے آہستہ نیچے آئیں یہاں تک کہ ایڑیاں لگ جائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Use the support for balance only, not to pull yourself up.",
        "The slow lowering is where the strength is built.",
        "Progress to one leg when two legs feel easy.",
      ],
      ur: [
        "سہارا صرف توازن کے لیے ہو، اوپر کھینچنے کے لیے نہیں۔",
        "طاقت آہستہ نیچے آنے سے بنتی ہے۔",
        "دونوں ٹانگیں آسان لگیں تو ایک ٹانگ پر جائیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Rolling out onto the little toe side.",
        "Dropping down quickly.",
        "Pulling up on the support.",
        "Not going all the way up.",
      ],
      ur: [
        "چھنگلی کی طرف باہر لڑھکنا۔",
        "تیزی سے نیچے گرنا۔",
        "سہارے سے اوپر کھینچنا۔",
        "پوری طرح اوپر نہ جانا۔",
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
    repetitions: "12–15",
    sets: "3",
    holdTime: "2 seconds at the top",
    frequency: "Every other day",
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
      rationale: "Heel raises are a standard progressive loading exercise for the calf and Achilles. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ ankleNear: 0, ankleFar: 0 }, STAND), travel: 800, hold: 400, label: "Standing flat" },
        { pose: pose({ ankleNear: 34, ankleFar: 34 }, STAND), travel: 1000, hold: 900, label: "Rise onto the toes" },
      ],
    },
  },
  {
    id: "EX-A-004",
    slug: "single-leg-balance",
    name: { en: "Single Leg Balance", ur: "ایک ٹانگ پر توازن" },
    bodyRegion: "Ankle & Foot",
    joint: ["Talocrural", "Subtalar", "Tibiofemoral"],
    musclesTargeted: ["Peroneals", "Tibialis posterior", "Gluteus medius"],
    conditions: ["Ankle sprain recovery", "Poor balance", "Falls prevention", "Proprioceptive deficit"],
    purpose: { en: "Retrains the ankle's sense of position, which is lost after a sprain and is what stops it giving way again.", ur: "ٹخنے کی وہ حس دوبارہ سکھاتی ہے جو موچ کے بعد کھو جاتی ہے اور جس سے ٹخنہ دوبارہ نہیں مڑتا۔" },
    exerciseType: "Balance & proprioception",
    difficulty: "Beginner",
    contraction: ["Isometric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["Support within reach"],
    startingPosition: { en: "Stand near a wall or chair with a support within reach, weight on both feet.", ur: "دیوار یا کرسی کے قریب کھڑے ہوں، سہارا پہنچ میں ہو، وزن دونوں پاؤں پر۔" },
    quickSteps: {
      en: [
        "Stand near a support, weight on both feet.",
        "Lift one foot and balance on the other.",
        "Hold 30 seconds, then swap.",
      ],
      ur: [
        "سہارے کے قریب کھڑے ہوں، وزن دونوں پاؤں پر۔",
        "ایک پاؤں اٹھا کر دوسرے پر توازن رکھیں۔",
        "تیس سیکنڈ رکیں، پھر بدلیں۔",
      ],
    },
    steps: {
      en: [
        "Stand with a support within reach but do not hold it.",
        "Shift your weight onto one leg.",
        "Lift the other foot just clear of the floor.",
        "Hold, looking straight ahead, then change legs.",
      ],
      ur: [
        "سہارا پہنچ میں رکھیں مگر پکڑیں نہیں۔",
        "وزن ایک ٹانگ پر منتقل کریں۔",
        "دوسرا پاؤں فرش سے ذرا اوپر اٹھائیں۔",
        "سامنے دیکھتے ہوئے رکیں، پھر ٹانگ بدلیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Keep the standing knee soft, not locked.",
        "Look at a fixed point ahead to help.",
        "Progress by closing the eyes, but only near a support.",
      ],
      ur: [
        "کھڑی ٹانگ کا گھٹنا ہلکا مڑا رکھیں، لاک نہ کریں۔",
        "مدد کے لیے سامنے ایک نقطے پر نظر جمائیں۔",
        "آنکھیں بند کر کے مشکل بنائیں، مگر صرف سہارے کے قریب۔",
      ],
    },
    commonMistakes: {
      en: [
        "Locking the standing knee.",
        "Holding the support the whole time.",
        "Looking down at the feet.",
        "Letting the arch of the foot collapse.",
      ],
      ur: [
        "کھڑی ٹانگ کا گھٹنا لاک کرنا۔",
        "پوری دیر سہارا پکڑے رہنا۔",
        "پاؤں کی طرف نیچے دیکھنا۔",
        "پاؤں کا محراب بیٹھ جانے دینا۔",
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
    repetitions: "3 each side",
    sets: "2",
    holdTime: "30 seconds",
    frequency: "Daily",
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
      rationale: "Balance and proprioceptive retraining is well established after ankle sprain and in falls prevention. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ hipNear: 0, kneeNear: 4 }, STAND), travel: 800, hold: 400, label: "Standing on both feet" },
        { pose: pose({ hipNear: 30, kneeNear: 70 }, STAND), travel: 1000, hold: 900, label: "Balance on one leg" },
      ],
    },
  },
  {
    id: "EX-A-005",
    slug: "toe-curls-towel",
    name: { en: "Towel Toe Curls", ur: "تولیہ انگلیوں سے کھینچنا" },
    bodyRegion: "Ankle & Foot",
    joint: ["Metatarsophalangeal"],
    musclesTargeted: ["Flexor digitorum brevis", "Intrinsic foot muscles", "Abductor hallucis"],
    conditions: ["Plantar fasciitis", "Flat foot", "Foot cramp", "Toe weakness"],
    purpose: { en: "Strengthens the small muscles inside the foot that support the arch and take load off the heel.", ur: "پاؤں کے اندر کے چھوٹے پٹھوں کو مضبوط کرتی ہے جو محراب سنبھالتے اور ایڑی سے بوجھ ہٹاتے ہیں۔" },
    exerciseType: "Strengthening",
    difficulty: "Beginner",
    contraction: ["Concentric"],
    mode: "Active",
    load: "No load",
    position: "Sitting",
    equipment: ["Small towel", "Chair"],
    startingPosition: { en: "Sit on a chair with a towel spread flat on the floor under your bare foot.", ur: "کرسی پر بیٹھیں، ننگے پاؤں کے نیچے فرش پر تولیہ بچھا ہو۔" },
    quickSteps: {
      en: [
        "Sit with a towel flat under your bare foot.",
        "Scrunch the towel towards you using only your toes.",
        "Push it back out and repeat.",
      ],
      ur: [
        "ننگے پاؤں کے نیچے تولیہ بچھا کر بیٹھیں۔",
        "صرف انگلیوں سے تولیہ اپنی طرف سمیٹیں۔",
        "واپس پھیلائیں اور دہرائیں۔",
      ],
    },
    steps: {
      en: [
        "Sit tall with the foot flat on the towel.",
        "Keep the heel on the floor throughout.",
        "Curl the toes to draw the towel towards you.",
        "Release and spread the toes, then repeat.",
      ],
      ur: [
        "سیدھے بیٹھیں، پاؤں تولیے پر سیدھا رکھیں۔",
        "پوری حرکت میں ایڑی فرش پر رہے۔",
        "انگلیوں سے تولیہ اپنی طرف کھینچیں۔",
        "چھوڑیں اور انگلیاں پھیلائیں، پھر دہرائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "The heel stays down — only the toes work.",
        "Spreading the toes on the release is part of the exercise.",
        "Good for plantar heel pain alongside calf stretching.",
      ],
      ur: [
        "ایڑی نیچے رہے — صرف انگلیاں کام کریں۔",
        "چھوڑتے وقت انگلیاں پھیلانا بھی ورزش کا حصہ ہے۔",
        "ایڑی کے درد میں پنڈلی کے کھنچاؤ کے ساتھ مفید ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Lifting the heel to help.",
        "Curling the whole foot instead of the toes.",
        "Rushing.",
        "Skipping the spread on the way back.",
      ],
      ur: [
        "مدد کے لیے ایڑی اٹھا لینا۔",
        "انگلیوں کے بجائے پورا پاؤں موڑنا۔",
        "جلدی کرنا۔",
        "واپسی پر انگلیاں نہ پھیلانا۔",
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
    repetitions: "10 pulls",
    sets: "3",
    holdTime: "2 seconds each",
    frequency: "Daily",
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
      rationale: "Intrinsic foot strengthening is commonly used alongside stretching for plantar heel pain. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ ankleNear: 0 }, SEATED), travel: 800, hold: 400, label: "Foot flat on the towel" },
        { pose: pose({ ankleNear: 14 }, SEATED), travel: 1000, hold: 900, label: "Curl the toes to draw it in" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-CO-002",
    slug: "dead-bug",
    name: { en: "Dead Bug", ur: "ڈیڈ بگ — ہاتھ اور ٹانگ نیچے لانا" },
    bodyRegion: "Core",
    joint: ["Lumbar spine L1–L5", "Hip", "Glenohumeral"],
    musclesTargeted: ["Transversus abdominis", "Rectus abdominis", "Obliques"],
    conditions: ["Core weakness", "Low back pain", "Poor trunk control", "Post-partum recovery"],
    purpose: { en: "Teaches the trunk to stay braced while the arms and legs move, which is what protects the back in daily life.", ur: "دھڑ کو مضبوط رکھتے ہوئے ہاتھ پاؤں حرکت دینا سکھاتی ہے، جو روزمرہ زندگی میں کمر کی حفاظت کرتا ہے۔" },
    exerciseType: "Stabilisation & motor control",
    difficulty: "Intermediate",
    contraction: ["Isometric", "Concentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Supine",
    equipment: ["Exercise mat"],
    startingPosition: { en: "Lie on your back with your arms pointing at the ceiling and your hips and knees bent to 90 degrees.", ur: "سیدھے لیٹ جائیں، بازو چھت کی طرف اور کولہے و گھٹنے نوے درجے مڑے ہوں۔" },
    quickSteps: {
      en: [
        "Lie on your back, arms up, knees bent over your hips.",
        "Lower one arm overhead and the opposite leg towards the floor.",
        "Return slowly, then swap sides.",
      ],
      ur: [
        "سیدھے لیٹ جائیں، بازو اوپر، گھٹنے کولہوں کے اوپر مڑے۔",
        "ایک بازو سر کی طرف اور مخالف ٹانگ فرش کی طرف نیچے کریں۔",
        "آہستہ واپس آئیں، پھر طرف بدلیں۔",
      ],
    },
    steps: {
      en: [
        "Flatten the low back gently against the floor and keep it there.",
        "Lower one arm back overhead while the opposite leg reaches away.",
        "Go only as far as you can without the back arching.",
        "Return slowly to the start and change sides.",
      ],
      ur: [
        "کمر کو نرمی سے فرش سے لگائیں اور وہیں رکھیں۔",
        "ایک بازو سر کی طرف نیچے کریں اور مخالف ٹانگ دور بڑھائیں۔",
        "صرف اُتنا جائیں جہاں تک کمر نہ اٹھے۔",
        "آہستہ شروع کی حالت میں آئیں اور طرف بدلیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "The moment the low back lifts off the floor, you have gone too far.",
        "Breathe out as you lower — holding the breath defeats it.",
        "Small range done well beats large range done badly.",
      ],
      ur: [
        "جس لمحے کمر فرش سے اٹھے، سمجھیں حد سے آگے چلے گئے۔",
        "نیچے کرتے وقت سانس چھوڑیں — سانس روکنا مقصد ختم کرتا ہے۔",
        "کم حرکت درست انداز میں زیادہ حرکت غلط سے بہتر ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting the low back arch off the floor.",
        "Holding the breath.",
        "Moving the arm and leg at different speeds.",
        "Going too fast.",
      ],
      ur: [
        "کمر کا فرش سے اٹھ جانا۔",
        "سانس روکنا۔",
        "بازو اور ٹانگ کو مختلف رفتار سے حرکت دینا۔",
        "بہت تیز کرنا۔",
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
    repetitions: "8–10 each side",
    sets: "3",
    holdTime: "2 seconds",
    frequency: "Every other day",
    restBetweenSets: "45 seconds",
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
      rationale: "Dead bug is a widely used motor control exercise for the lumbar spine and abdominal wall. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ hipNear: 90, kneeNear: 90, hipFar: 90, kneeFar: 90, shoulderNear: 90, shoulderFar: 90, elbowNear: 4, elbowFar: 4 }, SUPINE), travel: 800, hold: 400, label: "Arms up, knees over the hips" },
        { pose: pose({ hipNear: 90, kneeNear: 90, hipFar: 20, kneeFar: 20, shoulderNear: 20, shoulderFar: 90, elbowNear: 4, elbowFar: 4 }, SUPINE), travel: 1000, hold: 900, label: "Lower opposite arm and leg" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-CO-003",
    slug: "side-plank-knees",
    name: { en: "Side Plank on Knees", ur: "سائیڈ پلانک (گھٹنوں پر)" },
    bodyRegion: "Core",
    joint: ["Lumbar spine L1–L5", "Hip", "Scapulothoracic"],
    musclesTargeted: ["Obliques", "Quadratus lumborum", "Gluteus medius"],
    conditions: ["Core weakness", "Low back pain", "Lateral trunk weakness"],
    purpose: { en: "Builds the side of the trunk, which stops the body sagging sideways when you carry a bag or stand on one leg.", ur: "دھڑ کے پہلو کو مضبوط کرتی ہے تاکہ تھیلا اٹھاتے یا ایک ٹانگ پر کھڑے ہوتے وقت جسم ایک طرف نہ جھکے۔" },
    exerciseType: "Stabilisation & motor control",
    difficulty: "Intermediate",
    contraction: ["Isometric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Side-lying",
    equipment: ["Exercise mat"],
    startingPosition: { en: "Lie on your side propped on your forearm, knees bent behind you and hips stacked.", ur: "پہلو پر لیٹ جائیں، بازو پر ٹیک لگائیں، گھٹنے پیچھے مڑے اور کولہے اوپر تلے ہوں۔" },
    quickSteps: {
      en: [
        "Lie on your side, propped on your forearm, knees bent.",
        "Lift the hips so the body makes a straight line from head to knees.",
        "Hold 15 seconds, then lower slowly.",
      ],
      ur: [
        "پہلو پر لیٹ جائیں، بازو پر ٹیک، گھٹنے مڑے۔",
        "کولہے اٹھائیں تاکہ سر سے گھٹنوں تک سیدھی لکیر بنے۔",
        "پندرہ سیکنڈ رکیں، پھر آہستہ نیچے کریں۔",
      ],
    },
    steps: {
      en: [
        "Place the elbow directly under the shoulder.",
        "Stack the hips one above the other.",
        "Lift the hips until head, shoulders, hips and knees are in line.",
        "Hold, breathing normally, then lower with control.",
      ],
      ur: [
        "کہنی بالکل کندھے کے نیچے رکھیں۔",
        "کولہے ایک دوسرے کے اوپر رکھیں۔",
        "کولہے اٹھائیں یہاں تک کہ سر، کندھے، کولہے اور گھٹنے ایک سیدھ میں آ جائیں۔",
        "رکیں، سانس لیتے رہیں، پھر قابو سے نیچے لائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "The hips must not sag or rotate forward.",
        "Keep the top shoulder stacked over the bottom one.",
        "Build the hold time before progressing to straight legs.",
      ],
      ur: [
        "کولہے نہ جھکیں نہ آگے گھومیں۔",
        "اوپر والا کندھا نیچے والے کے اوپر رہے۔",
        "سیدھی ٹانگوں پر جانے سے پہلے وقت بڑھائیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting the hips drop.",
        "Rolling forward onto the stomach.",
        "Propping on the hand instead of the forearm.",
        "Holding the breath.",
      ],
      ur: [
        "کولہوں کا گر جانا۔",
        "آگے پیٹ کی طرف لڑھک جانا۔",
        "بازو کے بجائے ہتھیلی پر ٹیک لگانا۔",
        "سانس روکنا۔",
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
    repetitions: "5 each side",
    sets: "3",
    holdTime: "15 seconds",
    frequency: "Every other day",
    restBetweenSets: "45 seconds",
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
      rationale: "Side plank variants are widely used to train lateral trunk endurance with graded load. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ hipNear: 40, kneeNear: 90, hipFar: 40, kneeFar: 90, shoulderNear: 90, shoulderAbductNear: -90, elbowNear: 90, shoulderFar: 150, elbowFar: 10 }, SIDE_LYING), travel: 800, hold: 400, label: "Lying on the side, propped up" },
        { pose: pose({ hipNear: 8, kneeNear: 90, hipFar: 8, kneeFar: 90, shoulderNear: 90, shoulderAbductNear: -90, elbowNear: 90, shoulderFar: 150, elbowFar: 10 }, SIDE_LYING), travel: 1000, hold: 900, label: "Lift the hips into a straight line" },
      ],
      props: [{ kind: "mat" }],
    },
  },
];
