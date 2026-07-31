import { pose } from "@/lib/figure";
import type { Exercise } from "../schema";
import { PRONE, QUADRUPED, SEATED, SIDE_LYING, STAND, SUPINE } from "./bases";

/* ==========================================================================
   STRETCHES FOR THE MAJOR MUSCLE GROUPS
   --------------------------------------------------------------------------
   One reliable stretch for each of the muscles that actually get short:
   hamstrings, quadriceps, calf and soleus, adductors, hip flexors, the
   outer hip, the lats and pectorals, triceps and biceps, the neck muscles
   and the hand. Where a stretch is hard to get down onto the floor for,
   there is a standing or seated version of it. Drafts pending clinical
   review.
   ========================================================================== */

export const STRETCHES: Exercise[] = [
  {
    id: "EX-H-012",
    slug: "standing-hamstring-stretch",
    name: { en: "Standing Hamstring Stretch", ur: "کھڑے ہو کر ران کے پچھلے پٹھے کا کھنچاؤ" },
    bodyRegion: "Pelvis & Hip",
    joint: ["Hip", "Tibiofemoral"],
    musclesTargeted: ["Hamstrings", "Gastrocnemius"],
    conditions: ["Hamstring tightness", "Low back pain", "Reduced forward bending", "Prolonged sitting"],
    purpose: { en: "Lengthens the hamstrings without lying down, so it can be done at work, in the field or anywhere there is a step.", ur: "لیٹے بغیر ران کے پچھلے پٹھوں کو لمبا کرتی ہے، اس لیے کام کی جگہ، کھیت یا کہیں بھی جہاں تھوڑی اونچائی ہو، کی جا سکتی ہے۔" },
    exerciseType: "Stretching",
    difficulty: "Beginner",
    contraction: ["Passive"],
    mode: "Passive",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["Low step or stool"],
    startingPosition: { en: "Stand tall with one heel resting on a low step, that knee straight and the toes pointing up.", ur: "سیدھے کھڑے ہوں، ایک ایڑی نیچی سیڑھی پر رکھیں، وہ گھٹنا سیدھا اور پنجہ اوپر کی طرف۔" },
    quickSteps: {
      en: [
        "Put one heel on a low step, knee straight.",
        "Hinge forward from the hips with a flat back.",
        "Hold 30 seconds, then swap legs.",
      ],
      ur: [
        "ایک ایڑی نیچی سیڑھی پر رکھیں، گھٹنا سیدھا۔",
        "کمر سیدھی رکھتے ہوئے کولہوں سے آگے جھکیں۔",
        "تیس سیکنڈ رکیں، پھر ٹانگ بدلیں۔",
      ],
    },
    steps: {
      en: [
        "Rest one heel on a step no higher than your knee.",
        "Keep that knee completely straight and the toes pointing up.",
        "Lead with the chest and hinge forward from the hips, not the waist.",
        "Stop when you feel a pull behind the thigh, and hold there.",
        "Come up slowly and change legs.",
      ],
      ur: [
        "ایک ایڑی گھٹنے سے نیچی سیڑھی پر رکھیں۔",
        "وہ گھٹنا بالکل سیدھا اور پنجہ اوپر رکھیں۔",
        "سینہ آگے رکھتے ہوئے کولہوں سے جھکیں، کمر سے نہیں۔",
        "ران کے پیچھے کھنچاؤ محسوس ہوتے ہی رک جائیں اور وہیں رکیں۔",
        "آہستہ سیدھے ہوں اور ٹانگ بدلیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Bending forward from the waist rounds the back and stretches the wrong thing.",
        "Keep the standing knee soft, not locked.",
        "A steady pull is right; a sharp or burning line down the leg is not — that is nerve, not muscle.",
      ],
      ur: [
        "کمر سے جھکنے پر کمر گول ہو جاتی ہے اور غلط جگہ کھنچاؤ آتا ہے۔",
        "کھڑی ٹانگ کا گھٹنا ہلکا مڑا رکھیں، سختی سے سیدھا نہیں۔",
        "مسلسل کھنچاؤ درست ہے؛ ٹانگ میں تیز یا جلن والی لکیر نہیں — وہ عصب ہے، پٹھا نہیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Rounding the back instead of hinging at the hips.",
        "Bending the raised knee.",
        "Choosing a step that is too high.",
        "Bouncing into the stretch.",
      ],
      ur: [
        "کولہوں سے جھکنے کے بجائے کمر گول کرنا۔",
        "اٹھی ہوئی ٹانگ کا گھٹنا موڑ لینا۔",
        "بہت اونچی سیڑھی چننا۔",
        "کھنچاؤ میں جھٹکا دینا۔",
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
    regressions: ["hamstring-stretch-supine"],
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
      rationale: "Static hamstring stretching is routine for posterior chain tightness. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ hipNear: 0, kneeNear: 2 }, STAND), travel: 800, hold: 400, label: "Heel on the step, knee straight" },
        { pose: pose({ hipNear: 52, kneeNear: 2, lumbar: 14, thorax: 10, shoulderNear: 130, shoulderFar: 130, elbowNear: 10, elbowFar: 10 }, STAND), travel: 1000, hold: 900, label: "Hinge forward from the hips" },
      ],
    },
  },
  {
    id: "EX-K-011",
    slug: "standing-quadriceps-stretch",
    name: { en: "Standing Quadriceps Stretch", ur: "کھڑے ہو کر ران کے اگلے پٹھے کا کھنچاؤ" },
    bodyRegion: "Knee",
    joint: ["Tibiofemoral", "Hip"],
    musclesTargeted: ["Quadriceps femoris", "Rectus femoris", "Iliopsoas"],
    conditions: ["Quadriceps tightness", "Anterior knee pain", "Running strain", "Prolonged standing"],
    purpose: { en: "Lengthens the big muscle at the front of the thigh, which pulls on the kneecap when it is tight.", ur: "ران کے اگلے بڑے پٹھے کو لمبا کرتی ہے، جو سخت ہو تو گھٹنے کی ٹوپی کو کھینچتا ہے۔" },
    exerciseType: "Stretching",
    difficulty: "Beginner",
    contraction: ["Passive"],
    mode: "Passive",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["Support to hold"],
    startingPosition: { en: "Stand tall beside a wall or chair, holding on with one hand for balance.", ur: "دیوار یا کرسی کے پاس سیدھے کھڑے ہوں، توازن کے لیے ایک ہاتھ سے پکڑ لیں۔" },
    quickSteps: {
      en: [
        "Hold a wall for balance.",
        "Bend one knee and take hold of that ankle behind you.",
        "Draw the heel towards the buttock and hold 30 seconds.",
      ],
      ur: [
        "توازن کے لیے دیوار پکڑ لیں۔",
        "ایک گھٹنا موڑ کر پیچھے سے ٹخنہ پکڑیں۔",
        "ایڑی کولہے کی طرف کھینچیں اور تیس سیکنڈ رکیں۔",
      ],
    },
    steps: {
      en: [
        "Steady yourself with one hand on a wall or chair.",
        "Bend one knee and take hold of the ankle behind you.",
        "Draw the heel towards the buttock, keeping the knees side by side.",
        "Push the hip of that leg gently forward until the front of the thigh pulls.",
        "Hold, then lower the leg slowly and change sides.",
      ],
      ur: [
        "ایک ہاتھ دیوار یا کرسی پر رکھ کر خود کو سنبھالیں۔",
        "ایک گھٹنا موڑ کر پیچھے سے ٹخنہ پکڑیں۔",
        "ایڑی کولہے کی طرف کھینچیں، دونوں گھٹنے ساتھ ساتھ رکھیں۔",
        "اُس ٹانگ کا کولہا نرمی سے آگے دبائیں یہاں تک کہ ران کے اگلے حصے میں کھنچاؤ ہو۔",
        "رکیں، پھر ٹانگ آہستہ نیچے کریں اور طرف بدلیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "The knees stay together — letting the bent knee drift out loses the stretch.",
        "Tuck the tailbone under; arching the back cheats it.",
        "If you cannot reach the ankle, loop a towel around it.",
      ],
      ur: [
        "دونوں گھٹنے ملے رہیں — مڑا گھٹنا باہر ہو جائے تو کھنچاؤ ختم ہو جاتا ہے۔",
        "دُم کی ہڈی اندر کی طرف کریں؛ کمر محراب بنانے سے فائدہ نہیں رہتا۔",
        "ٹخنہ پکڑ نہ سکیں تو اُس کے گرد تولیہ ڈال لیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Arching the low back to reach further.",
        "Letting the bent knee swing outwards.",
        "Pulling hard enough to hurt the knee.",
        "Holding the breath.",
      ],
      ur: [
        "زیادہ پہنچنے کے لیے کمر کو محراب بنانا۔",
        "مڑے گھٹنے کا باہر کی طرف چلے جانا۔",
        "اتنا زور سے کھینچنا کہ گھٹنے میں درد ہو۔",
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
    repetitions: "3 each side",
    sets: "2",
    holdTime: "30 seconds",
    frequency: "Daily",
    restBetweenSets: "30 seconds",
    progressions: ["prone-quadriceps-stretch"],
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
      rationale: "Standing quadriceps stretching is standard for anterior thigh tightness. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ kneeNear: 2 }, STAND), travel: 800, hold: 400, label: "Standing tall, holding support" },
        { pose: pose({ kneeNear: 128, hipNear: -8, shoulderNear: 150, elbowNear: 60 }, STAND), travel: 1000, hold: 900, label: "Heel drawn to the buttock" },
      ],
    },
  },
  {
    id: "EX-K-012",
    slug: "prone-quadriceps-stretch",
    name: { en: "Prone Quadriceps Stretch with a Belt", ur: "اوندھے لیٹ کر پٹی سے ران کا کھنچاؤ" },
    bodyRegion: "Knee",
    joint: ["Tibiofemoral", "Hip"],
    musclesTargeted: ["Quadriceps femoris", "Rectus femoris", "Iliopsoas"],
    conditions: ["Quadriceps tightness", "Anterior knee pain", "Poor balance", "Post-immobilisation stiffness"],
    purpose: { en: "The same stretch lying face down, for anyone whose balance will not allow the standing version.", ur: "یہی کھنچاؤ اوندھے لیٹ کر، اُن لوگوں کے لیے جن کا توازن کھڑے ہو کر اجازت نہ دے۔" },
    exerciseType: "Stretching",
    difficulty: "Beginner",
    contraction: ["Passive"],
    mode: "Passive",
    load: "Bodyweight",
    position: "Prone",
    equipment: ["Exercise mat", "Belt or towel"],
    startingPosition: { en: "Lie face down with a belt or towel looped around one ankle and both ends held over your shoulder.", ur: "اوندھے لیٹ جائیں، ایک ٹخنے کے گرد پٹی یا تولیہ ڈالیں اور دونوں سرے کندھے کے اوپر سے پکڑیں۔" },
    quickSteps: {
      en: [
        "Lie face down with a belt looped round one ankle.",
        "Pull gently so the heel comes towards the buttock.",
        "Hold 30 seconds, then swap legs.",
      ],
      ur: [
        "اوندھے لیٹ جائیں، ایک ٹخنے کے گرد پٹی ڈالیں۔",
        "نرمی سے کھینچیں تاکہ ایڑی کولہے کی طرف آئے۔",
        "تیس سیکنڈ رکیں، پھر ٹانگ بدلیں۔",
      ],
    },
    steps: {
      en: [
        "Loop the belt around one ankle and bring both ends over the same shoulder.",
        "Keep the hips flat and the pelvis pressed into the floor.",
        "Pull gently on the belt so the heel travels towards the buttock.",
        "Hold where the front of the thigh pulls, without letting the hip lift.",
        "Release slowly and change sides.",
      ],
      ur: [
        "پٹی ایک ٹخنے کے گرد ڈالیں اور دونوں سرے اُسی طرف کے کندھے پر لائیں۔",
        "کولہے فرش پر سیدھے اور دبے رہیں۔",
        "پٹی نرمی سے کھینچیں تاکہ ایڑی کولہے کی طرف جائے۔",
        "جہاں ران کے اگلے حصے میں کھنچاؤ ہو وہیں رکیں، کولہا اٹھنے نہ دیں۔",
        "آہستہ چھوڑیں اور طرف بدلیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "If the hip lifts off the floor, you have pulled too far.",
        "A rolled towel under the hip makes it more comfortable.",
        "Stop if the knee itself hurts rather than the thigh.",
      ],
      ur: [
        "کولہا فرش سے اٹھ جائے تو آپ نے زیادہ کھینچ لیا ہے۔",
        "کولہے کے نیچے لپٹا تولیہ رکھنے سے آرام ملتا ہے۔",
        "ران کے بجائے خود گھٹنے میں درد ہو تو رک جائیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting the hip and pelvis lift.",
        "Pulling fast or hard.",
        "Twisting the trunk to reach the belt.",
        "Holding the breath.",
      ],
      ur: [
        "کولہے اور پیڑو کا اٹھ جانا۔",
        "تیز یا زور سے کھینچنا۔",
        "پٹی تک پہنچنے کے لیے دھڑ کو مروڑنا۔",
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
    repetitions: "3 each side",
    sets: "2",
    holdTime: "30 seconds",
    frequency: "Daily",
    restBetweenSets: "30 seconds",
    progressions: [],
    regressions: ["standing-quadriceps-stretch"],
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
      rationale: "Prone quadriceps stretching is used where standing balance is limited. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ kneeNear: 2 }, PRONE), travel: 800, hold: 400, label: "Lying face down, belt on the ankle" },
        { pose: pose({ kneeNear: 120, shoulderNear: 40, elbowNear: 80 }, PRONE), travel: 1000, hold: 900, label: "Heel drawn towards the buttock" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-A-009",
    slug: "soleus-stretch-wall",
    name: { en: "Soleus Stretch (Bent Knee Calf)", ur: "گھٹنا موڑ کر پنڈلی کے گہرے پٹھے کا کھنچاؤ" },
    bodyRegion: "Ankle & Foot",
    joint: ["Talocrural", "Subtalar"],
    musclesTargeted: ["Soleus", "Achilles tendon", "Tibialis posterior"],
    conditions: ["Achilles tendinopathy", "Limited ankle dorsiflexion", "Plantar heel pain", "Post-immobilisation stiffness"],
    purpose: { en: "Bending the back knee moves the stretch off the big calf muscle and onto the deeper one, which is the one that limits a squat and a stair.", ur: "پچھلا گھٹنا موڑنے سے کھنچاؤ بڑی پنڈلی سے ہٹ کر گہرے پٹھے پر آ جاتا ہے، اور یہی بیٹھنے اور سیڑھی چڑھنے میں رکاوٹ بنتا ہے۔" },
    exerciseType: "Stretching",
    difficulty: "Beginner",
    contraction: ["Passive"],
    mode: "Passive",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["Wall"],
    startingPosition: { en: "Stand facing a wall with both hands on it and one foot a short step behind the other.", ur: "دیوار کی طرف منہ کر کے کھڑے ہوں، دونوں ہاتھ دیوار پر اور ایک پاؤں دوسرے سے تھوڑا پیچھے۔" },
    quickSteps: {
      en: [
        "Face a wall with one foot a short step back.",
        "Bend the back knee, keeping the heel down.",
        "Hold 30 seconds, then swap legs.",
      ],
      ur: [
        "دیوار کی طرف منہ کریں، ایک پاؤں تھوڑا پیچھے۔",
        "پچھلا گھٹنا موڑیں، ایڑی زمین پر رکھیں۔",
        "تیس سیکنڈ رکیں، پھر ٹانگ بدلیں۔",
      ],
    },
    steps: {
      en: [
        "Place both hands on the wall at shoulder height.",
        "Step one foot back only a short way — much shorter than for the straight-knee calf stretch.",
        "Keep that heel flat on the floor and the toes pointing straight ahead.",
        "Bend the back knee and sink down until you feel a pull low in the calf, near the heel.",
        "Hold, then straighten up and change legs.",
      ],
      ur: [
        "دونوں ہاتھ کندھے کی اونچائی پر دیوار پر رکھیں۔",
        "ایک پاؤں صرف تھوڑا پیچھے کریں — سیدھے گھٹنے والے کھنچاؤ سے بہت کم۔",
        "اُس کی ایڑی زمین پر اور پنجہ بالکل سامنے کی طرف رکھیں۔",
        "پچھلا گھٹنا موڑ کر نیچے بیٹھیں یہاں تک کہ پنڈلی کے نچلے حصے میں، ایڑی کے قریب کھنچاؤ ہو۔",
        "رکیں، پھر سیدھے ہو کر ٹانگ بدلیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "The heel must stay down — lifting it removes the whole stretch.",
        "It is felt low, close to the heel, not high in the calf.",
        "Keep the back foot pointing forward, not turned out.",
      ],
      ur: [
        "ایڑی زمین پر رہنی چاہیے — اٹھ گئی تو کھنچاؤ ختم ہو جاتا ہے۔",
        "یہ ایڑی کے قریب نیچے محسوس ہوتا ہے، اوپر پنڈلی میں نہیں۔",
        "پچھلا پاؤں سامنے کی طرف رکھیں، باہر کی طرف مڑا ہوا نہیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting the back heel lift.",
        "Stepping too far back.",
        "Turning the back foot outwards.",
        "Keeping the back knee straight — that is the other stretch.",
      ],
      ur: [
        "پچھلی ایڑی کا اٹھ جانا۔",
        "بہت پیچھے قدم لینا۔",
        "پچھلا پاؤں باہر کی طرف موڑنا۔",
        "پچھلا گھٹنا سیدھا رکھنا — وہ دوسرا کھنچاؤ ہے۔",
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
      rationale: "Bent-knee calf stretching targets soleus and is standard in Achilles and plantar heel programmes. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ hipFar: -14, kneeFar: 4, ankleFar: -12, shoulderNear: 80, elbowNear: 20, shoulderFar: 80, elbowFar: 20 }, STAND), travel: 800, hold: 400, label: "Short step back, hands on the wall" },
        { pose: pose({ hipFar: -14, kneeFar: 26, ankleFar: -22, hipNear: 16, kneeNear: 24, shoulderNear: 80, elbowNear: 30, shoulderFar: 80, elbowFar: 30 }, STAND), travel: 1000, hold: 900, label: "Bend the back knee, heel down" },
      ],
      props: [{ kind: "wall" }],
    },
  },
  {
    id: "EX-H-013",
    slug: "butterfly-adductor-stretch",
    name: { en: "Butterfly Groin Stretch", ur: "تتلی — ران کے اندرونی پٹھوں کا کھنچاؤ" },
    bodyRegion: "Pelvis & Hip",
    joint: ["Hip"],
    musclesTargeted: ["Adductor longus", "Adductor magnus", "Gracilis", "Pectineus"],
    conditions: ["Groin strain recovery", "Adductor tightness", "Hip stiffness", "Squatting difficulty"],
    purpose: { en: "Opens the inner thigh, which is often the reason a hip will not open out and squatting feels blocked.", ur: "ران کے اندرونی حصے کو کھولتی ہے، جو اکثر کولہا نہ کھلنے اور بیٹھنے میں رکاوٹ کی وجہ ہوتا ہے۔" },
    exerciseType: "Stretching",
    difficulty: "Beginner",
    contraction: ["Passive"],
    mode: "Passive",
    load: "Bodyweight",
    position: "Sitting",
    equipment: ["Exercise mat"],
    startingPosition: { en: "Sit on the floor with the soles of both feet together and the knees dropped out to the sides.", ur: "فرش پر بیٹھیں، دونوں پاؤں کے تلوے ملا لیں اور گھٹنے دونوں طرف نیچے چھوڑ دیں۔" },
    quickSteps: {
      en: [
        "Sit with the soles of the feet together.",
        "Let the knees drop towards the floor.",
        "Hold 30 seconds, breathing out as you settle.",
      ],
      ur: [
        "پاؤں کے تلوے ملا کر بیٹھیں۔",
        "گھٹنوں کو فرش کی طرف جانے دیں۔",
        "تیس سیکنڈ رکیں، بیٹھتے ہوئے سانس چھوڑیں۔",
      ],
    },
    steps: {
      en: [
        "Sit tall with the soles of both feet together and the heels drawn in.",
        "Hold the feet with both hands and sit up out of the low back.",
        "Let the knees fall out and down towards the floor under their own weight.",
        "To go further, lean forward from the hips with a straight back.",
        "Hold, then bring the knees back up with your hands.",
      ],
      ur: [
        "سیدھے بیٹھیں، دونوں تلوے ملے ہوں اور ایڑیاں اندر کی طرف کھینچی ہوں۔",
        "دونوں ہاتھوں سے پاؤں پکڑیں اور کمر سے سیدھے ہو کر بیٹھیں۔",
        "گھٹنوں کو اپنے وزن سے باہر اور نیچے فرش کی طرف جانے دیں۔",
        "زیادہ کھنچاؤ کے لیے کمر سیدھی رکھتے ہوئے کولہوں سے آگے جھکیں۔",
        "رکیں، پھر ہاتھوں سے گھٹنے واپس اوپر لائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Do not push the knees down with the hands — let gravity do it.",
        "Sitting on the edge of a folded blanket makes it much easier.",
        "The stretch belongs in the inner thigh, not the knee.",
      ],
      ur: [
        "گھٹنے ہاتھوں سے نیچے نہ دبائیں — کشش ثقل کو کام کرنے دیں۔",
        "لپٹے کمبل کے کنارے پر بیٹھنے سے یہ کہیں آسان ہو جاتا ہے۔",
        "کھنچاؤ ران کے اندرونی حصے میں ہونا چاہیے، گھٹنے میں نہیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Bouncing the knees up and down.",
        "Rounding the back to lean forward.",
        "Forcing the knees down with the hands.",
        "Sitting slumped on the tailbone.",
      ],
      ur: [
        "گھٹنوں کو اوپر نیچے جھٹکنا۔",
        "آگے جھکنے کے لیے کمر گول کرنا۔",
        "ہاتھوں سے گھٹنے زبردستی نیچے دبانا۔",
        "دُم کی ہڈی پر جھک کر بیٹھنا۔",
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
    repetitions: "3",
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
      rationale: "Adductor stretching is standard after groin strain and for hip mobility work. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ hipNear: 86, kneeNear: 84, hipFar: 86, kneeFar: 84 }, SEATED), travel: 800, hold: 400, label: "Sitting with the soles together" },
        { pose: pose({ hipNear: 92, kneeNear: 118, hipRotNear: 55, hipFar: 92, kneeFar: 118, hipRotFar: 55, shoulderNear: 120, elbowNear: 80, shoulderFar: 120, elbowFar: 80 }, SEATED), travel: 1000, hold: 900, label: "Let the knees drop outwards" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-H-014",
    slug: "side-lunge-adductor-stretch",
    name: { en: "Standing Side Lunge Stretch", ur: "کھڑے ہو کر پہلو کی طرف جھک کر کھنچاؤ" },
    bodyRegion: "Pelvis & Hip",
    joint: ["Hip", "Tibiofemoral"],
    musclesTargeted: ["Adductor longus", "Adductor magnus", "Gracilis"],
    conditions: ["Groin strain recovery", "Adductor tightness", "Return to sport", "Hip stiffness"],
    purpose: { en: "A standing groin stretch that needs no floor — useful for anyone who cannot get down and up easily.", ur: "کھڑے ہو کر ران کے اندرونی حصے کا کھنچاؤ، جس کے لیے فرش کی ضرورت نہیں — اُن لوگوں کے لیے مفید جو آسانی سے نیچے نہیں بیٹھ سکتے۔" },
    exerciseType: "Stretching",
    difficulty: "Beginner",
    contraction: ["Passive"],
    mode: "Passive",
    load: "Bodyweight",
    position: "Standing",
    equipment: [],
    startingPosition: { en: "Stand with your feet wide apart, toes pointing forward and hands resting on the thighs.", ur: "پاؤں کھلے رکھ کر کھڑے ہوں، پنجے سامنے کی طرف اور ہاتھ رانوں پر۔" },
    quickSteps: {
      en: [
        "Stand with the feet wide apart.",
        "Bend one knee and shift your weight over it, keeping the other leg straight.",
        "Hold 30 seconds, then shift to the other side.",
      ],
      ur: [
        "پاؤں کھلے رکھ کر کھڑے ہوں۔",
        "ایک گھٹنا موڑ کر وزن اُس پر لائیں، دوسری ٹانگ سیدھی رکھیں۔",
        "تیس سیکنڈ رکیں، پھر دوسری طرف جائیں۔",
      ],
    },
    steps: {
      en: [
        "Take a wide stance with both feet flat and toes pointing forward.",
        "Bend one knee and slide your weight sideways over that foot.",
        "Keep the other leg completely straight with the heel down.",
        "Sit back slightly until the inner thigh of the straight leg pulls.",
        "Hold, then push back to the middle and change sides.",
      ],
      ur: [
        "پاؤں کھلے رکھیں، دونوں زمین پر اور پنجے سامنے کی طرف۔",
        "ایک گھٹنا موڑ کر وزن اُس پاؤں کی طرف لے جائیں۔",
        "دوسری ٹانگ بالکل سیدھی اور ایڑی زمین پر رکھیں۔",
        "تھوڑا پیچھے بیٹھیں یہاں تک کہ سیدھی ٹانگ کی اندرونی ران میں کھنچاؤ ہو۔",
        "رکیں، پھر درمیان میں واپس آئیں اور طرف بدلیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "The straight leg's heel must stay on the floor.",
        "Sit back, do not lean forward — this keeps it off the knee.",
        "Hands on the bent thigh take the weight off the low back.",
      ],
      ur: [
        "سیدھی ٹانگ کی ایڑی فرش پر رہنی چاہیے۔",
        "پیچھے بیٹھیں، آگے نہ جھکیں — اس سے گھٹنے پر بوجھ نہیں پڑتا۔",
        "ہاتھ مڑی ہوئی ران پر رکھنے سے کمر کا بوجھ کم ہوتا ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting the straight leg's heel lift.",
        "Leaning forward over the bent knee.",
        "Turning the feet outwards.",
        "Dropping too low too soon.",
      ],
      ur: [
        "سیدھی ٹانگ کی ایڑی کا اٹھ جانا۔",
        "مڑے گھٹنے کے اوپر آگے جھکنا۔",
        "پاؤں باہر کی طرف موڑنا۔",
        "بہت جلد بہت نیچے چلے جانا۔",
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
      rationale: "Standing adductor stretching is a common alternative where floor transfers are difficult. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ hipRotNear: 0, hipRotFar: 0 }, STAND), travel: 800, hold: 400, label: "Standing with the feet wide" },
        { pose: pose({ hipNear: 46, kneeNear: 56, hipRotNear: 26, hipFar: 8, kneeFar: 2, hipRotFar: 26, lumbar: 8, shoulderNear: 140, elbowNear: 40, shoulderFar: 140, elbowFar: 40 }, STAND), travel: 1000, hold: 900, label: "Shift over one bent knee" },
      ],
    },
  },
  {
    id: "EX-H-015",
    slug: "itb-standing-stretch",
    name: { en: "Standing Outer Hip Stretch", ur: "کھڑے ہو کر کولہے کے بیرونی حصے کا کھنچاؤ" },
    bodyRegion: "Pelvis & Hip",
    joint: ["Hip"],
    musclesTargeted: ["Tensor fasciae latae", "Iliotibial band", "Gluteus medius"],
    conditions: ["Lateral hip pain", "Iliotibial band syndrome", "Runner's knee", "Hip tightness"],
    purpose: { en: "Lengthens the band down the outside of the thigh, a common source of pain at the outer hip and outer knee in runners and walkers.", ur: "ران کے بیرونی حصے کی پٹی کو لمبا کرتی ہے، جو دوڑنے اور چلنے والوں میں کولہے اور گھٹنے کے باہر درد کی عام وجہ ہے۔" },
    exerciseType: "Stretching",
    difficulty: "Beginner",
    contraction: ["Passive"],
    mode: "Passive",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["Support to hold"],
    startingPosition: { en: "Stand side-on to a wall with the affected leg nearer the wall, crossed behind the other.", ur: "دیوار کے پہلو میں کھڑے ہوں، متاثرہ ٹانگ دیوار کی طرف اور دوسری کے پیچھے سے کراس کی ہوئی۔" },
    quickSteps: {
      en: [
        "Cross the affected leg behind the other.",
        "Lean your hip out away from the standing foot.",
        "Hold 30 seconds, then swap sides.",
      ],
      ur: [
        "متاثرہ ٹانگ دوسری کے پیچھے سے کراس کریں۔",
        "کولہا کھڑے پاؤں سے دور باہر کی طرف جھکائیں۔",
        "تیس سیکنڈ رکیں، پھر طرف بدلیں۔",
      ],
    },
    steps: {
      en: [
        "Stand beside a wall and rest one hand on it for balance.",
        "Cross the leg nearest the wall behind the other one.",
        "Keep both feet flat and push that hip out towards the wall.",
        "Reach the opposite arm up and over to increase the pull along the outer thigh.",
        "Hold, then come back to standing and change sides.",
      ],
      ur: [
        "دیوار کے پاس کھڑے ہوں اور توازن کے لیے ایک ہاتھ دیوار پر رکھیں۔",
        "دیوار والی ٹانگ دوسری کے پیچھے سے کراس کریں۔",
        "دونوں پاؤں زمین پر رکھیں اور وہ کولہا دیوار کی طرف باہر دبائیں۔",
        "کھنچاؤ بڑھانے کے لیے دوسرا بازو اوپر اور اُسی طرف لے جائیں۔",
        "رکیں، پھر سیدھے کھڑے ہو کر طرف بدلیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "The pull is along the outside of the thigh and hip, not in the low back.",
        "Keep both feet pointing forward.",
        "This one is often uncomfortable — it should still never be sharp.",
      ],
      ur: [
        "کھنچاؤ ران اور کولہے کے باہر کی طرف ہوتا ہے، کمر میں نہیں۔",
        "دونوں پاؤں سامنے کی طرف رکھیں۔",
        "یہ اکثر تکلیف دہ لگتا ہے — پھر بھی تیز درد نہیں ہونا چاہیے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Twisting the trunk instead of pushing the hip out.",
        "Letting the back foot turn outwards.",
        "Bending forward at the waist.",
        "Holding onto the wall so hard that the hip cannot move.",
      ],
      ur: [
        "کولہا باہر دبانے کے بجائے دھڑ کو مروڑنا۔",
        "پچھلے پاؤں کا باہر کی طرف مڑ جانا۔",
        "کمر سے آگے جھکنا۔",
        "دیوار کو اتنا زور سے پکڑنا کہ کولہا حرکت ہی نہ کر سکے۔",
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
      rationale: "Standing iliotibial band stretching is commonly prescribed for lateral hip and knee pain. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: STAND, travel: 800, hold: 400, label: "Standing, legs crossed" },
        { pose: pose({ hipRotNear: -14, hipNear: -10, kneeNear: 6, shoulderFar: 30, elbowFar: 24, shoulderAbductFar: 30, lumbar: 0, thorax: 0 }, STAND), travel: 1000, hold: 900, label: "Push the hip out and reach over" },
      ],
    },
  },
  {
    id: "EX-H-016",
    slug: "seated-figure-four-stretch",
    name: { en: "Seated Figure-Four Stretch", ur: "کرسی پر بیٹھ کر کولہے کا کھنچاؤ" },
    bodyRegion: "Pelvis & Hip",
    joint: ["Hip", "Sacroiliac"],
    musclesTargeted: ["Piriformis", "Gluteus maximus", "Deep hip rotators"],
    conditions: ["Buttock pain", "Sciatica recovery", "Hip tightness", "Desk work stiffness"],
    purpose: { en: "The buttock stretch done in a chair, so it can be taken at a desk or in a waiting room without lying down.", ur: "کرسی پر بیٹھ کر کولہے کا کھنچاؤ، جو میز پر یا انتظار گاہ میں لیٹے بغیر کیا جا سکتا ہے۔" },
    exerciseType: "Stretching",
    difficulty: "Beginner",
    contraction: ["Passive"],
    mode: "Passive",
    load: "Bodyweight",
    position: "Sitting",
    equipment: ["Chair"],
    startingPosition: { en: "Sit tall on a firm chair with both feet flat, then rest one ankle on the opposite knee.", ur: "مضبوط کرسی پر سیدھے بیٹھیں، دونوں پاؤں زمین پر، پھر ایک ٹخنہ دوسرے گھٹنے پر رکھیں۔" },
    quickSteps: {
      en: [
        "Sit tall and rest one ankle on the opposite knee.",
        "Lean forward from the hips with a flat back.",
        "Hold 30 seconds, then swap sides.",
      ],
      ur: [
        "سیدھے بیٹھیں اور ایک ٹخنہ دوسرے گھٹنے پر رکھیں۔",
        "کمر سیدھی رکھتے ہوئے کولہوں سے آگے جھکیں۔",
        "تیس سیکنڈ رکیں، پھر طرف بدلیں۔",
      ],
    },
    steps: {
      en: [
        "Sit well back in the chair with both feet flat on the floor.",
        "Rest one ankle across the opposite thigh, just above the knee.",
        "Let that knee drop out to the side.",
        "Keeping the back straight, lean forward from the hips until the buttock pulls.",
        "Hold, then sit up slowly and change sides.",
      ],
      ur: [
        "کرسی میں اچھی طرح پیچھے بیٹھیں، دونوں پاؤں فرش پر۔",
        "ایک ٹخنہ دوسری ران پر، گھٹنے سے ذرا اوپر رکھیں۔",
        "اُس گھٹنے کو پہلو کی طرف نیچے جانے دیں۔",
        "کمر سیدھی رکھتے ہوئے کولہوں سے آگے جھکیں یہاں تک کہ کولہے میں کھنچاؤ ہو۔",
        "رکیں، پھر آہستہ سیدھے بیٹھیں اور طرف بدلیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Lean from the hip, not by rounding the back.",
        "Do not press down on the crossed knee — let it settle.",
        "Ideal for taking every hour or two during a long day at a desk.",
      ],
      ur: [
        "کولہے سے جھکیں، کمر گول کر کے نہیں۔",
        "کراس کیے گھٹنے کو نہ دبائیں — اسے خود بیٹھنے دیں۔",
        "میز پر لمبے دن کے دوران ہر ایک دو گھنٹے بعد کرنا بہترین ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Rounding the back instead of hinging.",
        "Pressing hard on the crossed knee.",
        "Letting the chair tip.",
        "Holding the breath.",
      ],
      ur: [
        "جھکنے کے بجائے کمر گول کرنا۔",
        "کراس کیے گھٹنے کو زور سے دبانا۔",
        "کرسی کو ٹیڑھا ہونے دینا۔",
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
    frequency: "2–3 times daily",
    restBetweenSets: "30 seconds",
    progressions: [],
    regressions: ["piriformis-stretch"],
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
      rationale: "Seated piriformis stretching is a practical alternative to the supine version. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: SEATED, travel: 800, hold: 400, label: "Ankle across the opposite knee" },
        { pose: pose({ hipNear: 90, kneeNear: 96, hipRotNear: 44, lumbar: 12, thorax: 8, shoulderNear: 140, elbowNear: 40, shoulderFar: 140, elbowFar: 40 }, SEATED), travel: 1000, hold: 900, label: "Lean forward from the hips" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-H-017",
    slug: "standing-hip-flexor-stretch",
    name: { en: "Standing Hip Flexor Stretch", ur: "کھڑے ہو کر کولہے کے اگلے پٹھے کا کھنچاؤ" },
    bodyRegion: "Pelvis & Hip",
    joint: ["Hip", "Lumbar spine L1–L5"],
    musclesTargeted: ["Iliopsoas", "Rectus femoris", "Tensor fasciae latae"],
    conditions: ["Hip flexor tightness", "Low back pain", "Prolonged sitting", "Anterior pelvic tilt"],
    purpose: { en: "The hip flexor stretch without kneeling, for anyone who cannot get down onto the floor or has a sore knee.", ur: "گھٹنے ٹیکے بغیر کولہے کے اگلے پٹھے کا کھنچاؤ، اُن کے لیے جو فرش پر نہیں بیٹھ سکتے یا جن کا گھٹنا دُکھتا ہے۔" },
    exerciseType: "Stretching",
    difficulty: "Beginner",
    contraction: ["Passive"],
    mode: "Passive",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["Support to hold"],
    startingPosition: { en: "Stand in a long stride position with one foot well forward and the back leg straight.", ur: "لمبے قدم کی حالت میں کھڑے ہوں، ایک پاؤں کافی آگے اور پچھلی ٹانگ سیدھی۔" },
    quickSteps: {
      en: [
        "Take a long step forward with one foot.",
        "Tuck the tailbone under and push the back hip forward.",
        "Hold 30 seconds, then swap legs.",
      ],
      ur: [
        "ایک پاؤں سے لمبا قدم آگے لیں۔",
        "دُم کی ہڈی اندر کریں اور پچھلا کولہا آگے دبائیں۔",
        "تیس سیکنڈ رکیں، پھر ٹانگ بدلیں۔",
      ],
    },
    steps: {
      en: [
        "Take a long stride, front knee bent, back leg straight with the heel down.",
        "Tuck the tailbone under — this is the part that matters.",
        "Push the hip of the back leg gently forwards.",
        "Stop when the front of that hip and thigh pull, and hold.",
        "Step back together and change legs.",
      ],
      ur: [
        "لمبا قدم لیں، اگلا گھٹنا مڑا، پچھلی ٹانگ سیدھی اور ایڑی زمین پر۔",
        "دُم کی ہڈی اندر کی طرف کریں — یہی اصل بات ہے۔",
        "پچھلی ٹانگ کا کولہا نرمی سے آگے دبائیں۔",
        "اُس کولہے اور ران کے اگلے حصے میں کھنچاؤ ہوتے ہی رک جائیں اور رکیں۔",
        "پاؤں ملا کر ٹانگ بدلیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Without the tailbone tuck the back simply arches and nothing stretches.",
        "The front knee stays behind the toes.",
        "Hold a wall or chair if your balance is uncertain.",
      ],
      ur: [
        "دُم کی ہڈی اندر کیے بغیر صرف کمر محراب بنتی ہے اور کھنچاؤ نہیں ہوتا۔",
        "اگلا گھٹنا پنجوں سے پیچھے رہے۔",
        "توازن ٹھیک نہ ہو تو دیوار یا کرسی پکڑ لیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Arching the low back instead of tucking the pelvis.",
        "Letting the front knee travel past the toes.",
        "Lifting the back heel.",
        "Leaning the trunk forward.",
      ],
      ur: [
        "پیڑو اندر کرنے کے بجائے کمر کو محراب بنانا۔",
        "اگلے گھٹنے کا پنجوں سے آگے چلے جانا۔",
        "پچھلی ایڑی اٹھا لینا۔",
        "دھڑ کو آگے جھکا لینا۔",
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
    regressions: ["hip-flexor-stretch-kneeling"],
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
      rationale: "Standing hip flexor stretching is used where kneeling is not tolerated. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: STAND, travel: 800, hold: 400, label: "Standing in a long stride" },
        { pose: pose({ hipNear: 34, kneeNear: 56, hipFar: -22, kneeFar: 4, ankleFar: -14, pelvisTilt: -12, shoulderNear: 160, elbowNear: 20, shoulderFar: 160, elbowFar: 20 }, STAND), travel: 1000, hold: 900, label: "Tuck the tailbone, push the hip forward" },
      ],
    },
  },
  {
    id: "EX-L-009",
    slug: "childs-pose",
    name: { en: "Child's Pose", ur: "بچے والی حالت — کمر اور شانوں کا کھنچاؤ" },
    bodyRegion: "Lumbar",
    joint: ["Lumbar spine L1–L5", "Thoracic spine T1–T12", "Hip", "Glenohumeral"],
    musclesTargeted: ["Latissimus dorsi", "Erector spinae", "Gluteus maximus", "Thoracolumbar fascia"],
    conditions: ["Low back stiffness", "Upper back tightness", "Shoulder tightness", "General stiffness"],
    purpose: { en: "One position that opens the low back, the upper back and the shoulders at once, and is comfortable enough to stay in and breathe.", ur: "ایک ہی حالت جو کمر، اوپری کمر اور کندھوں کو ایک ساتھ کھولتی ہے، اور اتنی آرام دہ ہے کہ اس میں رک کر سانس لیا جا سکے۔" },
    exerciseType: "Stretching",
    difficulty: "Beginner",
    contraction: ["Passive"],
    mode: "Passive",
    load: "Bodyweight",
    position: "Quadruped",
    equipment: ["Exercise mat"],
    startingPosition: { en: "Kneel on all fours with your knees apart and your big toes touching behind you.", ur: "چاروں ہاتھ پاؤں پر آئیں، گھٹنے کھلے اور پیچھے دونوں انگوٹھے ملے ہوں۔" },
    quickSteps: {
      en: [
        "Kneel on all fours with the knees apart.",
        "Sit back onto your heels and reach both arms forward.",
        "Rest the forehead down and hold, breathing slowly.",
      ],
      ur: [
        "چاروں ہاتھ پاؤں پر آئیں، گھٹنے کھلے۔",
        "ایڑیوں پر پیچھے بیٹھیں اور دونوں بازو آگے بڑھائیں۔",
        "پیشانی نیچے رکھیں اور آہستہ سانس لیتے ہوئے رکیں۔",
      ],
    },
    steps: {
      en: [
        "Start on all fours with the knees wide and the big toes together.",
        "Sit the hips back towards the heels.",
        "Walk both hands forward and let the chest sink towards the floor.",
        "Rest the forehead on the mat and let the shoulders soften.",
        "Stay there and breathe out slowly, then walk the hands back to come up.",
      ],
      ur: [
        "چاروں ہاتھ پاؤں پر شروع کریں، گھٹنے کھلے اور انگوٹھے ملے۔",
        "کولہے پیچھے ایڑیوں کی طرف لے جائیں۔",
        "دونوں ہاتھ آگے بڑھائیں اور سینے کو فرش کی طرف جھکنے دیں۔",
        "پیشانی چٹائی پر رکھیں اور کندھے ڈھیلے چھوڑ دیں۔",
        "وہیں رہیں اور آہستہ سانس چھوڑیں، پھر ہاتھ واپس لا کر اٹھ جائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "A cushion between the heels and the buttocks makes it easier on the knees.",
        "Widening the knees makes room for the stomach — important in pregnancy.",
        "Breathe into the back of the ribs; that is where the release is.",
      ],
      ur: [
        "ایڑیوں اور کولہوں کے درمیان تکیہ رکھنے سے گھٹنوں پر آسانی ہوتی ہے۔",
        "گھٹنے کھلے رکھنے سے پیٹ کے لیے جگہ بنتی ہے — حمل میں یہ اہم ہے۔",
        "پسلیوں کے پچھلے حصے میں سانس لیں؛ آرام وہیں سے آتا ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Forcing the hips down onto sore knees.",
        "Holding the shoulders up around the ears.",
        "Holding the breath.",
        "Coming up quickly at the end.",
      ],
      ur: [
        "دُکھتے گھٹنوں پر کولہے زبردستی نیچے کرنا۔",
        "کندھے کانوں کے پاس اٹھائے رکھنا۔",
        "سانس روکنا۔",
        "آخر میں جلدی سے اٹھ جانا۔",
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
    repetitions: "3",
    sets: "2",
    holdTime: "30–60 seconds",
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
      rationale: "Child's pose is a widely used low-load position for lumbar and shoulder girdle stretching. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: QUADRUPED, travel: 800, hold: 400, label: "All fours, knees apart" },
        { pose: pose({ hipNear: 138, kneeNear: 130, hipFar: 138, kneeFar: 130, shoulderNear: 46, elbowNear: 6, shoulderFar: 46, elbowFar: 6, thorax: 10 }, QUADRUPED), travel: 1000, hold: 900, label: "Sit back and reach forward" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-T-008",
    slug: "latissimus-overhead-stretch",
    name: { en: "Overhead Side Bend (Lat Stretch)", ur: "بازو اوپر کر کے پہلو کا کھنچاؤ" },
    bodyRegion: "Thoracic",
    joint: ["Glenohumeral", "Thoracic spine T1–T12", "Scapulothoracic"],
    musclesTargeted: ["Latissimus dorsi", "Quadratus lumborum", "External obliques", "Teres major"],
    conditions: ["Shoulder tightness", "Reduced overhead reach", "Upper back stiffness", "Rounded posture"],
    purpose: { en: "Opens the long muscle from the arm to the low back, which when tight stops the arm reaching properly overhead.", ur: "بازو سے کمر تک جانے والے لمبے پٹھے کو کھولتی ہے، جو سخت ہو تو بازو ٹھیک سے اوپر نہیں جاتا۔" },
    exerciseType: "Stretching",
    difficulty: "Beginner",
    contraction: ["Passive"],
    mode: "Passive",
    load: "No load",
    position: "Standing",
    equipment: [],
    startingPosition: { en: "Stand tall with your feet hip-width apart and one arm reaching straight up overhead.", ur: "سیدھے کھڑے ہوں، پاؤں کولہوں کے برابر فاصلے پر اور ایک بازو سیدھا اوپر۔" },
    quickSteps: {
      en: [
        "Reach one arm straight up overhead.",
        "Bend to the opposite side, keeping the hips level.",
        "Hold 20 seconds, then swap arms.",
      ],
      ur: [
        "ایک بازو سیدھا اوپر لے جائیں۔",
        "کولہے برابر رکھتے ہوئے دوسری طرف جھکیں۔",
        "بیس سیکنڈ رکیں، پھر بازو بدلیں۔",
      ],
    },
    steps: {
      en: [
        "Stand with the feet hip-width apart and the weight even.",
        "Reach one arm straight up beside the ear.",
        "Take hold of that wrist with the other hand.",
        "Bend sideways away from the raised arm, keeping both feet planted.",
        "Hold where the side of the trunk and armpit pull, then come up and swap.",
      ],
      ur: [
        "پاؤں کولہوں کے برابر فاصلے پر رکھ کر کھڑے ہوں، وزن برابر۔",
        "ایک بازو کان کے ساتھ سیدھا اوپر لے جائیں۔",
        "دوسرے ہاتھ سے اُس کلائی کو پکڑیں۔",
        "اٹھے ہوئے بازو سے مخالف طرف جھکیں، دونوں پاؤں زمین پر رہیں۔",
        "جہاں دھڑ کے پہلو اور بغل میں کھنچاؤ ہو وہیں رکیں، پھر سیدھے ہو کر بدلیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Bend to the side only — do not lean forward or twist.",
        "Keep both feet flat and the hips facing forward.",
        "If the shoulder pinches overhead, do this seated with a lower arm position.",
      ],
      ur: [
        "صرف پہلو کی طرف جھکیں — آگے نہ جھکیں اور نہ مروڑیں۔",
        "دونوں پاؤں زمین پر اور کولہے سامنے کی طرف رکھیں۔",
        "بازو اوپر کرنے پر کندھے میں چبھن ہو تو یہ بیٹھ کر اور بازو نیچے رکھ کر کریں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Leaning forwards instead of sideways.",
        "Letting the hip swing out.",
        "Shrugging the raised shoulder up to the ear.",
        "Bouncing at the end range.",
      ],
      ur: [
        "پہلو کے بجائے آگے جھکنا۔",
        "کولہے کا باہر نکل جانا۔",
        "اٹھے ہوئے کندھے کو کان تک اُچھالنا۔",
        "آخری حد پر جھٹکا دینا۔",
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
    repetitions: "3 each side",
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
      rationale: "Overhead side bending is a standard latissimus and lateral trunk stretch. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: STAND, travel: 800, hold: 400, label: "Standing, one arm overhead" },
        { pose: pose({ shoulderNear: 10, elbowNear: 6, shoulderAbductNear: 16, shoulderFar: 30, elbowFar: 30, thorax: 0, lumbar: 0 }, STAND), travel: 1000, hold: 900, label: "Bend away to the opposite side" },
      ],
    },
  },
  {
    id: "EX-S-026",
    slug: "corner-pec-stretch",
    name: { en: "Corner Chest Stretch", ur: "کونے میں سینے کا کھنچاؤ" },
    bodyRegion: "Shoulder",
    joint: ["Glenohumeral", "Scapulothoracic", "Acromioclavicular"],
    musclesTargeted: ["Pectoralis major", "Pectoralis minor", "Anterior deltoid"],
    conditions: ["Rounded posture", "Shoulder tightness", "Desk work stiffness", "Post-mastectomy tightness"],
    purpose: { en: "Opens both sides of the chest at once against a corner, which gives a more even stretch than a single doorway edge.", ur: "کونے کے سہارے دونوں طرف سینے کو ایک ساتھ کھولتی ہے، جس سے دروازے کے ایک کنارے کی نسبت زیادہ برابر کھنچاؤ ملتا ہے۔" },
    exerciseType: "Stretching",
    difficulty: "Beginner",
    contraction: ["Passive"],
    mode: "Passive",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["Wall corner"],
    startingPosition: { en: "Stand facing into a corner with a forearm flat on each wall, elbows at about shoulder height.", ur: "کونے کی طرف منہ کر کے کھڑے ہوں، ہر دیوار پر ایک بازو رکھیں، کہنیاں تقریباً کندھے کی اونچائی پر۔" },
    quickSteps: {
      en: [
        "Face into a corner with a forearm on each wall.",
        "Step one foot forward and lean your chest in.",
        "Hold 30 seconds, then step back.",
      ],
      ur: [
        "کونے کی طرف منہ کریں، ہر دیوار پر ایک بازو رکھیں۔",
        "ایک پاؤں آگے کریں اور سینہ اندر کی طرف جھکائیں۔",
        "تیس سیکنڈ رکیں، پھر پیچھے آ جائیں۔",
      ],
    },
    steps: {
      en: [
        "Stand about a foot back from the corner, facing into it.",
        "Place a forearm flat on each wall with the elbows at shoulder height.",
        "Step one foot forward for balance.",
        "Lean the chest slowly into the corner until the front of both shoulders pulls.",
        "Hold, breathing normally, then push back out.",
      ],
      ur: [
        "کونے سے تقریباً ایک قدم پیچھے، اُس کی طرف منہ کر کے کھڑے ہوں۔",
        "ہر دیوار پر ایک بازو رکھیں، کہنیاں کندھے کی اونچائی پر۔",
        "توازن کے لیے ایک پاؤں آگے کریں۔",
        "سینہ آہستہ کونے کی طرف جھکائیں یہاں تک کہ دونوں کندھوں کے سامنے کھنچاؤ ہو۔",
        "سانس لیتے ہوئے رکیں، پھر پیچھے دھکیل کر نکل آئیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Lowering the elbows below shoulder height moves the stretch to the lower chest.",
        "Keep the chin tucked and the ribs down.",
        "Stop at once if the arm tingles — that means the nerves, not the muscle.",
      ],
      ur: [
        "کہنیاں کندھے سے نیچے کرنے پر کھنچاؤ سینے کے نچلے حصے پر آ جاتا ہے۔",
        "ٹھوڑی اندر اور پسلیاں نیچے رکھیں۔",
        "بازو میں سنسناہٹ ہو تو فوراً رک جائیں — یہ اعصاب ہیں، پٹھا نہیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Arching the low back to lean further.",
        "Pushing to the point of shoulder pain.",
        "Letting the shoulders shrug up.",
        "Bouncing in and out of the stretch.",
      ],
      ur: [
        "زیادہ جھکنے کے لیے کمر کو محراب بنانا۔",
        "کندھے میں درد کی حد تک زور لگانا۔",
        "کندھوں کا اوپر اُچھل جانا۔",
        "کھنچاؤ میں آگے پیچھے جھٹکے دینا۔",
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
    repetitions: "3",
    sets: "2",
    holdTime: "30 seconds",
    frequency: "Daily",
    restBetweenSets: "30 seconds",
    progressions: [],
    regressions: ["doorway-pec-stretch"],
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
      rationale: "Corner pectoral stretching is standard in posture and shoulder mobility programmes. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ shoulderNear: 90, elbowNear: 90, shoulderAbductNear: 60, shoulderFar: 90, elbowFar: 90, shoulderAbductFar: 60 }, STAND), travel: 800, hold: 400, label: "Forearms on the walls" },
        { pose: pose({ shoulderNear: 84, elbowNear: 92, shoulderAbductNear: 78, shoulderFar: 84, elbowFar: 92, shoulderAbductFar: 78, hipNear: 16, kneeNear: 20 }, STAND), travel: 1000, hold: 900, label: "Lean the chest into the corner" },
      ],
    },
  },
  {
    id: "EX-EL-009",
    slug: "triceps-overhead-stretch",
    name: { en: "Overhead Triceps Stretch", ur: "بازو کے پچھلے پٹھے کا کھنچاؤ" },
    bodyRegion: "Elbow",
    joint: ["Glenohumeral", "Humeroulnar"],
    musclesTargeted: ["Triceps brachii", "Latissimus dorsi", "Teres major"],
    conditions: ["Triceps tightness", "Reduced overhead reach", "Post-immobilisation stiffness", "Gym recovery"],
    purpose: { en: "Lengthens the muscle at the back of the upper arm, which limits both elbow bending and overhead reach when tight.", ur: "بازو کے پچھلے پٹھے کو لمبا کرتی ہے، جو سخت ہو تو کہنی موڑنے اور بازو اوپر لے جانے دونوں میں رکاوٹ بنتا ہے۔" },
    exerciseType: "Stretching",
    difficulty: "Beginner",
    contraction: ["Passive"],
    mode: "Passive",
    load: "No load",
    position: "Standing",
    equipment: [],
    startingPosition: { en: "Stand tall with one arm reaching overhead and that elbow bent so the hand drops behind the head.", ur: "سیدھے کھڑے ہوں، ایک بازو اوپر لے جائیں اور کہنی موڑ کر ہاتھ سر کے پیچھے چھوڑ دیں۔" },
    quickSteps: {
      en: [
        "Reach one arm overhead and bend the elbow.",
        "Use the other hand to draw that elbow gently back.",
        "Hold 20 seconds, then swap arms.",
      ],
      ur: [
        "ایک بازو اوپر لے جائیں اور کہنی موڑیں۔",
        "دوسرے ہاتھ سے اُس کہنی کو نرمی سے پیچھے کھینچیں۔",
        "بیس سیکنڈ رکیں، پھر بازو بدلیں۔",
      ],
    },
    steps: {
      en: [
        "Reach one arm straight up beside the ear.",
        "Bend the elbow so the hand drops down between the shoulder blades.",
        "Take hold of that elbow with the opposite hand.",
        "Draw the elbow gently backwards and towards the midline.",
        "Hold where the back of the arm pulls, then release and swap.",
      ],
      ur: [
        "ایک بازو کان کے ساتھ سیدھا اوپر لے جائیں۔",
        "کہنی موڑیں تاکہ ہاتھ شانوں کے درمیان نیچے آ جائے۔",
        "دوسرے ہاتھ سے اُس کہنی کو پکڑیں۔",
        "کہنی کو نرمی سے پیچھے اور درمیان کی طرف کھینچیں۔",
        "جہاں بازو کے پیچھے کھنچاؤ ہو وہیں رکیں، پھر چھوڑ کر بدلیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Keep the ribs down — arching the back is the usual cheat.",
        "The pull belongs at the back of the upper arm, not in the shoulder joint.",
        "Do it seated against a chair back if the low back arches.",
      ],
      ur: [
        "پسلیاں نیچے رکھیں — کمر کو محراب بنانا عام غلطی ہے۔",
        "کھنچاؤ بازو کے پچھلے حصے میں ہونا چاہیے، کندھے کے جوڑ میں نہیں۔",
        "کمر محراب بنے تو یہ کرسی کی پشت سے ٹیک لگا کر بیٹھ کر کریں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Arching the low back.",
        "Pulling on the wrist instead of the elbow.",
        "Forcing past shoulder pain.",
        "Letting the head push forward.",
      ],
      ur: [
        "کمر کو محراب بنانا۔",
        "کہنی کے بجائے کلائی کھینچنا۔",
        "کندھے کے درد سے آگے زبردستی کرنا۔",
        "سر کو آگے نکلنے دینا۔",
      ],
    },
    safetyPrecautions: {
      en: [
        "Stop if you feel sharp pain at the elbow or into the forearm.",
        "Build the load slowly — tendons respond to gradual increases.",
      ],
      ur: [
        "کہنی یا بازو میں تیز درد ہو تو رک جائیں۔",
        "وزن آہستہ آہستہ بڑھائیں — پٹھوں کے ٹینڈن بتدریج بہتر ہوتے ہیں۔",
      ],
    },
    repetitions: "3 each side",
    sets: "2",
    holdTime: "20 seconds",
    frequency: "Daily",
    restBetweenSets: "30 seconds",
    progressions: [],
    regressions: [],
    contraindications: {
      en: [
        "Acute elbow fracture or dislocation",
        "Recent elbow surgery unless cleared",
        "Active joint infection",
      ],
      ur: [
        "کہنی کی حالیہ ٹوٹ پھوٹ یا جوڑ کا اُترنا",
        "کہنی کا حالیہ آپریشن، جب تک اجازت نہ ہو",
        "جوڑ میں فعال انفیکشن",
      ],
    },
    evidence: {
      status: "unreviewed",
      rationale: "Overhead triceps stretching is routine after upper limb immobilisation and in general mobility work. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: STAND, travel: 800, hold: 400, label: "Arm overhead, elbow bent" },
        { pose: pose({ shoulderNear: 20, elbowNear: 140, shoulderAbductNear: 10, shoulderFar: 26, elbowFar: 96, shoulderAbductFar: -20 }, STAND), travel: 1000, hold: 900, label: "Draw the elbow gently back" },
      ],
    },
  },
  {
    id: "EX-EL-010",
    slug: "biceps-wall-stretch",
    name: { en: "Wall Biceps Stretch", ur: "دیوار کے سہارے بازو کے اگلے پٹھے کا کھنچاؤ" },
    bodyRegion: "Elbow",
    joint: ["Glenohumeral", "Humeroulnar", "Radioulnar"],
    musclesTargeted: ["Biceps brachii", "Brachialis", "Anterior deltoid", "Pectoralis major"],
    conditions: ["Biceps tightness", "Elbow stiffness", "Rounded posture", "Post-immobilisation stiffness"],
    purpose: { en: "Lengthens the front of the arm, which is rarely stretched and quietly limits how far an elbow will straighten.", ur: "بازو کے اگلے حصے کو لمبا کرتی ہے، جس کا کھنچاؤ کم ہی کیا جاتا ہے اور جو خاموشی سے کہنی کے سیدھا ہونے کو محدود کرتا ہے۔" },
    exerciseType: "Stretching",
    difficulty: "Beginner",
    contraction: ["Passive"],
    mode: "Passive",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["Wall"],
    startingPosition: { en: "Stand side-on to a wall with one arm straight out behind you, palm flat on the wall at shoulder height.", ur: "دیوار کے پہلو میں کھڑے ہوں، ایک بازو سیدھا پیچھے، ہتھیلی کندھے کی اونچائی پر دیوار سے لگی ہو۔" },
    quickSteps: {
      en: [
        "Put one palm flat on a wall behind you, arm straight.",
        "Turn your body slowly away from the wall.",
        "Hold 20 seconds, then swap arms.",
      ],
      ur: [
        "ایک ہتھیلی پیچھے دیوار پر رکھیں، بازو سیدھا۔",
        "جسم آہستہ دیوار سے مخالف سمت گھمائیں۔",
        "بیس سیکنڈ رکیں، پھر بازو بدلیں۔",
      ],
    },
    steps: {
      en: [
        "Stand with one side towards the wall and the arm straight out behind at shoulder height.",
        "Place the palm flat on the wall with the thumb pointing down.",
        "Keep the elbow completely straight.",
        "Turn the chest and body slowly away from the wall until the front of the arm pulls.",
        "Hold, then turn back and change sides.",
      ],
      ur: [
        "دیوار کی طرف ایک پہلو کر کے کھڑے ہوں، بازو کندھے کی اونچائی پر سیدھا پیچھے۔",
        "ہتھیلی دیوار پر رکھیں، انگوٹھا نیچے کی طرف۔",
        "کہنی بالکل سیدھی رکھیں۔",
        "سینہ اور جسم آہستہ دیوار سے مخالف طرف گھمائیں یہاں تک کہ بازو کے سامنے کھنچاؤ ہو۔",
        "رکیں، پھر واپس گھومیں اور طرف بدلیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Turning the thumb down is what brings the biceps into it.",
        "The elbow must stay straight or the stretch disappears.",
        "Stop and come off the wall at once if the hand tingles.",
      ],
      ur: [
        "انگوٹھا نیچے کرنے سے ہی بازو کا اگلا پٹھا کھنچتا ہے۔",
        "کہنی سیدھی رہنی چاہیے ورنہ کھنچاؤ ختم ہو جاتا ہے۔",
        "ہاتھ میں سنسناہٹ ہو تو فوراً دیوار سے ہٹ جائیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Bending the elbow.",
        "Turning too far too fast.",
        "Letting the shoulder ride up.",
        "Continuing when the hand goes numb.",
      ],
      ur: [
        "کہنی موڑ لینا۔",
        "بہت تیز اور بہت زیادہ گھومنا۔",
        "کندھے کا اوپر چڑھ جانا۔",
        "ہاتھ سُن ہونے پر بھی جاری رکھنا۔",
      ],
    },
    safetyPrecautions: {
      en: [
        "Stop if you feel sharp pain at the elbow or into the forearm.",
        "Build the load slowly — tendons respond to gradual increases.",
      ],
      ur: [
        "کہنی یا بازو میں تیز درد ہو تو رک جائیں۔",
        "وزن آہستہ آہستہ بڑھائیں — پٹھوں کے ٹینڈن بتدریج بہتر ہوتے ہیں۔",
      ],
    },
    repetitions: "3 each side",
    sets: "2",
    holdTime: "20 seconds",
    frequency: "Daily",
    restBetweenSets: "30 seconds",
    progressions: [],
    regressions: [],
    contraindications: {
      en: [
        "Acute elbow fracture or dislocation",
        "Recent elbow surgery unless cleared",
        "Active joint infection",
      ],
      ur: [
        "کہنی کی حالیہ ٹوٹ پھوٹ یا جوڑ کا اُترنا",
        "کہنی کا حالیہ آپریشن، جب تک اجازت نہ ہو",
        "جوڑ میں فعال انفیکشن",
      ],
    },
    evidence: {
      status: "unreviewed",
      rationale: "Wall biceps stretching is used for anterior arm tightness and elbow extension loss. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: STAND, travel: 800, hold: 400, label: "Palm on the wall behind" },
        { pose: pose({ shoulderNear: 214, elbowNear: 2, shoulderAbductNear: 40, shoulderRotNear: -20 }, STAND), travel: 1000, hold: 900, label: "Turn the body away" },
      ],
      props: [{ kind: "wall" }],
    },
  },
  {
    id: "EX-CX-009",
    slug: "scalene-stretch",
    name: { en: "Scalene Stretch", ur: "گردن کے اگلے پہلو کے پٹھوں کا کھنچاؤ" },
    bodyRegion: "Cervical",
    joint: ["Cervical spine C1–C7"],
    musclesTargeted: ["Anterior scalene", "Middle scalene", "Sternocleidomastoid"],
    conditions: ["Neck stiffness", "Thoracic outlet symptoms", "Breathing pattern disorder", "Postural strain"],
    purpose: { en: "Reaches the muscles at the front and side of the neck that a plain side bend misses, and that pull on the first rib when tight.", ur: "گردن کے اگلے اور پہلو والے اُن پٹھوں تک پہنچتی ہے جو سادہ جھکاؤ سے نہیں کھنچتے، اور سخت ہوں تو پہلی پسلی کو کھینچتے ہیں۔" },
    exerciseType: "Stretching",
    difficulty: "Beginner",
    contraction: ["Passive"],
    mode: "Passive",
    load: "No load",
    position: "Sitting",
    equipment: ["Chair"],
    startingPosition: { en: "Sit tall on a firm chair with one hand tucked under the buttock on the same side, to hold that shoulder down.", ur: "مضبوط کرسی پر سیدھے بیٹھیں، ایک ہاتھ اُسی طرف کے کولہے کے نیچے دبا لیں تاکہ وہ کندھا نیچے رہے۔" },
    quickSteps: {
      en: [
        "Sit on one hand to hold that shoulder down.",
        "Tilt the head away, then turn the chin up and away.",
        "Hold 20 seconds, then swap sides.",
      ],
      ur: [
        "ایک ہاتھ کے نیچے بیٹھ جائیں تاکہ وہ کندھا نیچے رہے۔",
        "سر مخالف طرف جھکائیں، پھر ٹھوڑی اوپر اور دور گھمائیں۔",
        "بیس سیکنڈ رکیں، پھر طرف بدلیں۔",
      ],
    },
    steps: {
      en: [
        "Sit tall and tuck one hand under that buttock to anchor the shoulder.",
        "Tilt the head away from that side, ear towards the opposite shoulder.",
        "Now turn the chin up and away from the anchored side.",
        "Hold where the front of the neck and collarbone pull.",
        "Come back to the middle slowly and swap sides.",
      ],
      ur: [
        "سیدھے بیٹھیں اور ایک ہاتھ اُسی طرف کے کولہے کے نیچے دبا لیں تاکہ کندھا ٹکا رہے۔",
        "سر اُس طرف سے مخالف سمت جھکائیں، کان دوسرے کندھے کی طرف۔",
        "اب ٹھوڑی اوپر اور دبے ہوئے کندھے سے دور گھمائیں۔",
        "جہاں گردن کے سامنے اور ہنسلی کے پاس کھنچاؤ ہو وہیں رکیں۔",
        "آہستہ درمیان میں واپس آئیں اور طرف بدلیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Anchoring the shoulder is what makes this work.",
        "The direction is up and away, unlike the upper trapezius stretch where the chin comes down.",
        "Stop at once if you feel dizzy or the arm tingles.",
      ],
      ur: [
        "کندھے کو ٹکانا ہی اس ورزش کو مؤثر بناتا ہے۔",
        "سمت اوپر اور دور ہے، اوپری ٹریپیزیس کے کھنچاؤ کے برعکس جہاں ٹھوڑی نیچے آتی ہے۔",
        "چکر آئے یا بازو میں سنسناہٹ ہو تو فوراً رک جائیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting the anchored shoulder lift.",
        "Pulling with the free hand.",
        "Taking the chin down instead of up.",
        "Holding the breath.",
      ],
      ur: [
        "ٹکے ہوئے کندھے کا اٹھ جانا۔",
        "دوسرے ہاتھ سے کھینچنا۔",
        "ٹھوڑی اوپر کے بجائے نیچے کرنا۔",
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
    holdTime: "20 seconds",
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
      rationale: "Scalene stretching is used for neck stiffness and in thoracic outlet management. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ neck: 0, head: 0 }, SEATED), travel: 800, hold: 400, label: "Sitting tall, shoulder anchored" },
        { pose: pose({ neck: -8, head: -10, shoulderNear: 190, elbowNear: 30 }, SEATED), travel: 1000, hold: 900, label: "Tilt away, chin up and away" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-CX-010",
    slug: "sternocleidomastoid-stretch",
    name: { en: "Front-of-Neck Stretch", ur: "گردن کے اگلے لمبے پٹھے کا کھنچاؤ" },
    bodyRegion: "Cervical",
    joint: ["Cervical spine C1–C7", "Atlanto-occipital"],
    musclesTargeted: ["Sternocleidomastoid", "Anterior scalene", "Suprahyoid muscles"],
    conditions: ["Neck stiffness", "Forward head posture", "Torticollis recovery", "Cervicogenic headache"],
    purpose: { en: "Lengthens the rope-like muscle running from behind the ear to the collarbone, which shortens with a permanently forward head.", ur: "کان کے پیچھے سے ہنسلی تک جانے والے رسی نما پٹھے کو لمبا کرتی ہے، جو سر مستقل آگے رہنے سے چھوٹا ہو جاتا ہے۔" },
    exerciseType: "Stretching",
    difficulty: "Beginner",
    contraction: ["Passive"],
    mode: "Passive",
    load: "No load",
    position: "Sitting",
    equipment: ["Chair"],
    startingPosition: { en: "Sit tall on a firm chair with the shoulders down and the chin gently tucked.", ur: "مضبوط کرسی پر سیدھے بیٹھیں، کندھے نیچے اور ٹھوڑی ہلکی اندر کی طرف۔" },
    quickSteps: {
      en: [
        "Sit tall and tuck the chin gently.",
        "Turn the head to one side, then tilt the chin up.",
        "Hold 15 seconds, then swap sides.",
      ],
      ur: [
        "سیدھے بیٹھیں اور ٹھوڑی ہلکی اندر کریں۔",
        "سر ایک طرف گھمائیں، پھر ٹھوڑی اوپر اٹھائیں۔",
        "پندرہ سیکنڈ رکیں، پھر طرف بدلیں۔",
      ],
    },
    steps: {
      en: [
        "Sit tall with both shoulders relaxed and level.",
        "Tuck the chin gently to lengthen the back of the neck first.",
        "Turn the head towards one shoulder.",
        "Keeping it turned, tilt the chin up towards the ceiling.",
        "Hold where the front and side of the neck pull, then return slowly.",
      ],
      ur: [
        "سیدھے بیٹھیں، دونوں کندھے ڈھیلے اور برابر۔",
        "پہلے ٹھوڑی ہلکی اندر کریں تاکہ گردن کا پچھلا حصہ لمبا ہو۔",
        "سر ایک کندھے کی طرف گھمائیں۔",
        "گھمائے رکھتے ہوئے ٹھوڑی چھت کی طرف اوپر اٹھائیں۔",
        "جہاں گردن کے سامنے اور پہلو میں کھنچاؤ ہو وہیں رکیں، پھر آہستہ واپس آئیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Go gently — this is a small movement with a strong effect.",
        "Stop immediately if you feel dizzy, see spots or feel sick.",
        "Never do this one with a hand pushing on the head.",
      ],
      ur: [
        "نرمی سے کریں — یہ چھوٹی حرکت ہے مگر اثر تیز ہوتا ہے۔",
        "چکر آئے، نظر میں دھبے دکھیں یا متلی ہو تو فوراً رک جائیں۔",
        "یہ ورزش کبھی سر پر ہاتھ سے دباؤ ڈال کر نہ کریں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Pushing the head back with the hand.",
        "Going too far into extension.",
        "Letting the shoulder on that side lift.",
        "Continuing despite dizziness.",
      ],
      ur: [
        "ہاتھ سے سر پیچھے دھکیلنا۔",
        "بہت زیادہ پیچھے لے جانا۔",
        "اُس طرف کے کندھے کا اٹھ جانا۔",
        "چکر آنے کے باوجود جاری رکھنا۔",
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
    holdTime: "15 seconds",
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
      rationale: "Sternocleidomastoid stretching is used in forward head posture and torticollis programmes. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ neck: 0, head: 0 }, SEATED), travel: 800, hold: 400, label: "Sitting tall, chin tucked" },
        { pose: pose({ neck: -12, head: -14 }, SEATED), travel: 1000, hold: 900, label: "Turn, then tilt the chin up" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-W-008",
    slug: "finger-flexor-stretch",
    name: { en: "Finger and Palm Stretch", ur: "انگلیوں اور ہتھیلی کا کھنچاؤ" },
    bodyRegion: "Wrist & Hand",
    joint: ["Radiocarpal", "Metacarpophalangeal", "Interphalangeal"],
    musclesTargeted: ["Flexor digitorum superficialis", "Flexor digitorum profundus", "Palmar fascia", "Lumbricals"],
    conditions: ["Trigger finger", "Dupuytren's tightness", "Post-cast stiffness", "Repetitive gripping work"],
    purpose: { en: "Opens the hand fully, which matters for anyone who grips all day — a tailor, a driver, a labourer, a surgeon.", ur: "ہاتھ کو پوری طرح کھولتی ہے، جو ہر اُس شخص کے لیے اہم ہے جو سارا دن پکڑ کر کام کرتا ہے — درزی، ڈرائیور، مزدور، سرجن۔" },
    exerciseType: "Stretching",
    difficulty: "Beginner",
    contraction: ["Passive"],
    mode: "Passive",
    load: "No load",
    position: "Sitting",
    equipment: [],
    startingPosition: { en: "Sit with one arm out in front, elbow straight and palm facing away as if signalling stop.", ur: "بیٹھ جائیں، ایک بازو سامنے، کہنی سیدھی اور ہتھیلی باہر کی طرف جیسے رکنے کا اشارہ کر رہے ہوں۔" },
    quickSteps: {
      en: [
        "Hold one arm out with the palm facing away.",
        "Use the other hand to draw the fingers back gently.",
        "Hold 20 seconds, then swap hands.",
      ],
      ur: [
        "ایک بازو سامنے رکھیں، ہتھیلی باہر کی طرف۔",
        "دوسرے ہاتھ سے انگلیاں نرمی سے پیچھے کھینچیں۔",
        "بیس سیکنڈ رکیں، پھر ہاتھ بدلیں۔",
      ],
    },
    steps: {
      en: [
        "Reach one arm out in front at shoulder height with the elbow straight.",
        "Turn the palm to face away from you, fingers pointing up.",
        "With the other hand, draw all four fingers gently back towards you.",
        "Hold where the palm and the front of the forearm pull.",
        "Release, shake the hand out, then repeat on the other side.",
      ],
      ur: [
        "ایک بازو کندھے کی اونچائی پر سامنے بڑھائیں، کہنی سیدھی۔",
        "ہتھیلی باہر کی طرف کریں، انگلیاں اوپر۔",
        "دوسرے ہاتھ سے چاروں انگلیاں نرمی سے اپنی طرف کھینچیں۔",
        "جہاں ہتھیلی اور بازو کے اگلے حصے میں کھنچاؤ ہو وہیں رکیں۔",
        "چھوڑیں، ہاتھ جھٹکیں، پھر دوسری طرف دہرائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Draw all four fingers together, not one at a time.",
        "Stretch the thumb separately by drawing it back and out.",
        "Never force a finger that has been recently splinted or operated on.",
      ],
      ur: [
        "چاروں انگلیاں ایک ساتھ کھینچیں، ایک ایک کر کے نہیں۔",
        "انگوٹھے کو الگ سے پیچھے اور باہر کی طرف کھینچ کر کھنچاؤ دیں۔",
        "حال ہی میں پٹی لگی یا آپریشن ہوئی انگلی پر کبھی زبردستی نہ کریں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Bending the elbow.",
        "Pulling one finger hard on its own.",
        "Forcing past a locked or triggering finger.",
        "Rushing between hands.",
      ],
      ur: [
        "کہنی موڑ لینا۔",
        "کسی ایک انگلی کو زور سے کھینچنا۔",
        "جام یا اٹکی ہوئی انگلی پر زبردستی کرنا۔",
        "ہاتھ بدلنے میں جلدی کرنا۔",
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
    repetitions: "3 each side",
    sets: "2",
    holdTime: "20 seconds",
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
      rationale: "Finger and palmar stretching is standard in hand therapy after immobilisation. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ shoulderNear: 90, elbowNear: 20 }, SEATED), travel: 800, hold: 400, label: "Arm out, palm facing away" },
        { pose: pose({ shoulderNear: 90, elbowNear: 4, shoulderFar: 110, elbowFar: 70 }, SEATED), travel: 1000, hold: 900, label: "Draw the fingers gently back" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-T-009",
    slug: "thoracic-side-bend-stretch",
    name: { en: "Seated Side Bend", ur: "بیٹھ کر پہلو کا کھنچاؤ" },
    bodyRegion: "Thoracic",
    joint: ["Thoracic spine T1–T12", "Costovertebral", "Lumbar spine L1–L5"],
    musclesTargeted: ["Quadratus lumborum", "External obliques", "Intercostals", "Latissimus dorsi"],
    conditions: ["Upper back stiffness", "Rib cage stiffness", "Low back pain", "Prolonged sitting"],
    purpose: { en: "Opens the side of the rib cage, which stops moving first in anyone who sits for long hours or breathes shallowly.", ur: "پسلیوں کے پہلو کو کھولتی ہے، جن کی حرکت سب سے پہلے اُن لوگوں میں رکتی ہے جو لمبے وقت بیٹھتے ہیں یا اُتھلی سانس لیتے ہیں۔" },
    exerciseType: "Stretching",
    difficulty: "Beginner",
    contraction: ["Passive", "Concentric"],
    mode: "Active",
    load: "No load",
    position: "Sitting",
    equipment: ["Chair"],
    startingPosition: { en: "Sit tall on a firm chair with both feet flat and the hands resting on the thighs.", ur: "مضبوط کرسی پر سیدھے بیٹھیں، دونوں پاؤں زمین پر اور ہاتھ رانوں پر۔" },
    quickSteps: {
      en: [
        "Sit tall with both sitting bones weighted evenly.",
        "Reach one arm over your head and bend to the other side.",
        "Hold 15 seconds, then swap sides.",
      ],
      ur: [
        "سیدھے بیٹھیں، دونوں طرف وزن برابر ہو۔",
        "ایک بازو سر کے اوپر لے جا کر دوسری طرف جھکیں۔",
        "پندرہ سیکنڈ رکیں، پھر طرف بدلیں۔",
      ],
    },
    steps: {
      en: [
        "Sit tall with both feet flat and the weight even on both sitting bones.",
        "Slide one hand down the side of the chair leg.",
        "Reach the other arm up and over your head in the same direction.",
        "Feel the ribs on the raised side open, and breathe into them.",
        "Come back to upright and repeat on the other side.",
      ],
      ur: [
        "سیدھے بیٹھیں، دونوں پاؤں زمین پر اور وزن برابر۔",
        "ایک ہاتھ کرسی کی ٹانگ کے ساتھ نیچے پھسلائیں۔",
        "دوسرا بازو سر کے اوپر سے اُسی طرف لے جائیں۔",
        "محسوس کریں کہ اٹھی ہوئی طرف کی پسلیاں کھل رہی ہیں، اور اُن میں سانس لیں۔",
        "سیدھے بیٹھ جائیں اور دوسری طرف دہرائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Both buttocks stay on the chair — do not let one lift.",
        "Bend directly sideways, without leaning forward.",
        "Breathe into the opened side; the breath does half the work.",
      ],
      ur: [
        "دونوں کولہے کرسی پر رہیں — ایک اٹھنے نہ دیں۔",
        "بالکل پہلو کی طرف جھکیں، آگے جھکے بغیر۔",
        "کھلی ہوئی طرف میں سانس لیں؛ آدھا کام سانس کرتی ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Lifting one buttock off the chair.",
        "Leaning forward instead of sideways.",
        "Rounding the low back.",
        "Bouncing at the end of the movement.",
      ],
      ur: [
        "ایک کولہا کرسی سے اٹھا لینا۔",
        "پہلو کے بجائے آگے جھکنا۔",
        "کمر کو گول کر لینا۔",
        "حرکت کے آخر میں جھٹکا دینا۔",
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
    repetitions: "5 each side",
    sets: "2",
    holdTime: "15 seconds",
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
      rationale: "Seated lateral flexion is a common desk-side thoracic mobility exercise. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: SEATED, travel: 800, hold: 400, label: "Sitting tall" },
        { pose: pose({ shoulderNear: 16, elbowNear: 20, shoulderAbductNear: 24, shoulderFar: 186, elbowFar: 10 }, SEATED), travel: 1000, hold: 900, label: "Reach over and bend to the side" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-H-018",
    slug: "seated-hamstring-stretch",
    name: { en: "Seated Hamstring Stretch", ur: "کرسی پر بیٹھ کر ران کے پچھلے پٹھے کا کھنچاؤ" },
    bodyRegion: "Pelvis & Hip",
    joint: ["Hip", "Tibiofemoral"],
    musclesTargeted: ["Hamstrings", "Gastrocnemius", "Erector spinae"],
    conditions: ["Hamstring tightness", "Low back pain", "Sciatica recovery", "Prolonged sitting"],
    purpose: { en: "The hamstring stretch from a chair, so it can be done at a desk without getting up or lying down.", ur: "کرسی سے ران کے پچھلے پٹھے کا کھنچاؤ، جو میز پر اٹھے یا لیٹے بغیر کیا جا سکتا ہے۔" },
    exerciseType: "Stretching",
    difficulty: "Beginner",
    contraction: ["Passive"],
    mode: "Passive",
    load: "Bodyweight",
    position: "Sitting",
    equipment: ["Chair"],
    startingPosition: { en: "Sit forward on a firm chair with one leg straight out in front, heel on the floor and toes pointing up.", ur: "مضبوط کرسی پر آگے کی طرف بیٹھیں، ایک ٹانگ سامنے سیدھی، ایڑی فرش پر اور پنجہ اوپر۔" },
    quickSteps: {
      en: [
        "Sit forward with one leg straight out, toes up.",
        "Hinge forward from the hips with a flat back.",
        "Hold 30 seconds, then swap legs.",
      ],
      ur: [
        "آگے کی طرف بیٹھیں، ایک ٹانگ سیدھی اور پنجہ اوپر۔",
        "کمر سیدھی رکھتے ہوئے کولہوں سے آگے جھکیں۔",
        "تیس سیکنڈ رکیں، پھر ٹانگ بدلیں۔",
      ],
    },
    steps: {
      en: [
        "Sit near the front of the chair with the other foot flat on the floor.",
        "Straighten one leg out in front with the heel down and the toes pulled up.",
        "Sit up tall first, lengthening the low back.",
        "Hinge forward from the hips, leading with the chest, until the back of the thigh pulls.",
        "Hold, then sit up slowly and change legs.",
      ],
      ur: [
        "کرسی کے اگلے حصے پر بیٹھیں، دوسرا پاؤں فرش پر رکھیں۔",
        "ایک ٹانگ سامنے سیدھی کریں، ایڑی نیچے اور پنجہ اوپر کھینچا ہوا۔",
        "پہلے سیدھے بیٹھیں اور کمر کو لمبا کریں۔",
        "سینہ آگے رکھتے ہوئے کولہوں سے جھکیں یہاں تک کہ ران کے پیچھے کھنچاؤ ہو۔",
        "رکیں، پھر آہستہ سیدھے بیٹھیں اور ٹانگ بدلیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Sit tall before leaning — most of the stretch is lost by slumping.",
        "Pulling the toes up adds the calf and the nerve; leave them relaxed if the leg tingles.",
        "Keep the chair against a wall so it cannot slide.",
      ],
      ur: [
        "جھکنے سے پہلے سیدھے بیٹھیں — جھک کر بیٹھنے سے زیادہ تر کھنچاؤ ضائع ہو جاتا ہے۔",
        "پنجہ اوپر کھینچنے سے پنڈلی اور عصب بھی شامل ہو جاتے ہیں؛ ٹانگ میں سنسناہٹ ہو تو پنجہ ڈھیلا چھوڑ دیں۔",
        "کرسی دیوار سے لگا کر رکھیں تاکہ پھسل نہ سکے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Slumping instead of hinging at the hip.",
        "Bending the straight knee.",
        "Bouncing forward.",
        "Continuing when the leg tingles.",
      ],
      ur: [
        "کولہے سے جھکنے کے بجائے جھک کر بیٹھ جانا۔",
        "سیدھی ٹانگ کا گھٹنا موڑ لینا۔",
        "آگے جھٹکے دینا۔",
        "ٹانگ میں سنسناہٹ کے باوجود جاری رکھنا۔",
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
    regressions: ["hamstring-stretch-supine"],
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
      rationale: "Seated hamstring stretching is a practical desk-side alternative to the supine version. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: SEATED, travel: 800, hold: 400, label: "One leg straight, toes up" },
        { pose: pose({ hipNear: 78, kneeNear: 6, ankleNear: -16, lumbar: 10, thorax: 8, shoulderNear: 138, elbowNear: 24, shoulderFar: 138, elbowFar: 24 }, SEATED), travel: 1000, hold: 900, label: "Hinge forward from the hips" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-A-010",
    slug: "gastrocnemius-step-stretch",
    name: { en: "Calf Stretch over a Step", ur: "سیڑھی پر پنڈلی کا کھنچاؤ" },
    bodyRegion: "Ankle & Foot",
    joint: ["Talocrural", "Subtalar"],
    musclesTargeted: ["Gastrocnemius", "Soleus", "Achilles tendon"],
    conditions: ["Calf tightness", "Achilles tendinopathy", "Plantar heel pain", "Limited ankle dorsiflexion"],
    purpose: { en: "Uses the edge of a step to reach further than a wall stretch can, for a calf that has become genuinely short.", ur: "سیڑھی کے کنارے سے دیوار والے کھنچاؤ سے زیادہ گہرا کھنچاؤ دیتی ہے، اُس پنڈلی کے لیے جو واقعی چھوٹی ہو گئی ہو۔" },
    exerciseType: "Stretching",
    difficulty: "Intermediate",
    contraction: ["Passive"],
    mode: "Passive",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["Step", "Support to hold"],
    startingPosition: { en: "Stand on the edge of a step with the balls of both feet on it and the heels hanging free, holding the rail.", ur: "سیڑھی کے کنارے پر کھڑے ہوں، دونوں پاؤں کے اگلے حصے سیڑھی پر اور ایڑیاں باہر لٹکی ہوں، ریلنگ پکڑی ہو۔" },
    quickSteps: {
      en: [
        "Stand on a step with the heels hanging over the edge.",
        "Let the heels drop below the step.",
        "Hold 30 seconds, holding the rail throughout.",
      ],
      ur: [
        "سیڑھی پر کھڑے ہوں، ایڑیاں کنارے سے باہر لٹکی ہوں۔",
        "ایڑیوں کو سیڑھی سے نیچے جانے دیں۔",
        "تیس سیکنڈ رکیں، پوری ورزش میں ریلنگ پکڑے رہیں۔",
      ],
    },
    steps: {
      en: [
        "Hold the rail firmly with both hands before you begin.",
        "Stand with the balls of both feet on the edge and the heels free.",
        "Keep the knees straight and let both heels sink slowly below the level of the step.",
        "Hold at the point where the calves pull, without bouncing.",
        "Rise back up to level to finish.",
      ],
      ur: [
        "شروع کرنے سے پہلے دونوں ہاتھوں سے ریلنگ مضبوطی سے پکڑیں۔",
        "دونوں پاؤں کے اگلے حصے کنارے پر رکھیں اور ایڑیاں باہر چھوڑ دیں۔",
        "گھٹنے سیدھے رکھیں اور دونوں ایڑیاں آہستہ سیڑھی کی سطح سے نیچے جانے دیں۔",
        "جہاں پنڈلیوں میں کھنچاؤ ہو وہیں رکیں، جھٹکا نہ دیں۔",
        "ختم کرنے کے لیے واپس سطح تک اٹھ جائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Always hold the rail — this is done at the edge of a drop.",
        "Straight knees stretch the big calf muscle; bend them to reach the deeper one.",
        "Come off it if the Achilles feels sharp rather than stretched.",
      ],
      ur: [
        "ہمیشہ ریلنگ پکڑیں — یہ کنارے پر کی جانے والی ورزش ہے۔",
        "سیدھے گھٹنے بڑی پنڈلی کو کھینچتے ہیں؛ گہرے پٹھے کے لیے گھٹنے موڑیں۔",
        "ایڑی کے پٹھے میں کھنچاؤ کے بجائے تیز درد ہو تو اتر جائیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting go of the rail.",
        "Bouncing the heels up and down.",
        "Doing it on a wet or loose step.",
        "Dropping too far on the first attempt.",
      ],
      ur: [
        "ریلنگ چھوڑ دینا۔",
        "ایڑیوں کو اوپر نیچے جھٹکنا۔",
        "گیلی یا ڈھیلی سیڑھی پر کرنا۔",
        "پہلی ہی بار بہت نیچے چلے جانا۔",
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
    regressions: ["calf-stretch-wall"],
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
      rationale: "Step-edge calf stretching is a standard progression from wall stretching. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ ankleNear: 0, ankleFar: 0 }, STAND), travel: 800, hold: 400, label: "Standing on the edge of a step" },
        { pose: pose({ ankleNear: -28, ankleFar: -28, shoulderNear: 120, elbowNear: 40, shoulderFar: 120, elbowFar: 40 }, STAND), travel: 1000, hold: 900, label: "Let the heels drop" },
      ],
    },
  },
];
