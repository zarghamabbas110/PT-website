import { pose } from "@/lib/figure";
import type { Exercise } from "../schema";
import { QUADRUPED, SEATED, STAND } from "./bases";

/* ==========================================================================
   THREE THAT DID NOT FIT ANYWHERE ELSE
   --------------------------------------------------------------------------
   The intrinsic foot muscles, eccentric hamstring loading, and the diagonal
   shoulder pattern — each the best-supported exercise for its problem, and
   each belonging to no single category cleanly.
   Drafts pending clinical review.
   ========================================================================== */

export const ADVANCED_SET: Exercise[] = [
  {
    id: "EX-A-021",
    slug: "short-foot-exercise",
    name: { en: "Short Foot Exercise", ur: "پاؤں کی محراب اٹھانا" },
    bodyRegion: "Ankle & Foot",
    joint: ["Midtarsal", "Metatarsophalangeal", "Subtalar"],
    musclesTargeted: ["Abductor hallucis", "Flexor digitorum brevis", "Quadratus plantae", "Tibialis posterior"],
    conditions: ["Flat foot", "Plantar heel pain", "Ankle instability", "Bunion progression"],
    purpose: { en: "Trains the small muscles inside the foot to hold up the arch, which is what stops the whole foot collapsing inwards with every step.", ur: "پاؤں کے اندر کے چھوٹے پٹھوں کو محراب تھامنا سکھاتی ہے، اور یہی چیز ہر قدم پر پورے پاؤں کو اندر گرنے سے روکتی ہے۔" },
    exerciseType: "Stabilisation & motor control",
    difficulty: "Intermediate",
    contraction: ["Isometric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Sitting",
    equipment: ["Chair"],
    startingPosition: { en: "Sit tall with both feet flat on the floor, the toes relaxed and the weight even across each foot.", ur: "سیدھے بیٹھیں، دونوں پاؤں فرش پر، انگلیاں ڈھیلی اور ہر پاؤں پر وزن برابر۔" },
    quickSteps: {
      en: [
        "Sit with the foot flat and the toes relaxed.",
        "Draw the ball of the foot back towards the heel to raise the arch.",
        "Hold 5 seconds without curling the toes.",
      ],
      ur: [
        "پاؤں فرش پر رکھ کر بیٹھیں، انگلیاں ڈھیلی۔",
        "پاؤں کا اگلا حصہ ایڑی کی طرف پیچھے کھینچیں تاکہ محراب اٹھے۔",
        "انگلیاں موڑے بغیر پانچ سیکنڈ رکیں۔",
      ],
    },
    steps: {
      en: [
        "Sit with the foot flat and find the three points of contact: the heel, the base of the big toe and the base of the little toe.",
        "Keep all three pressed down and the toes completely flat and relaxed.",
        "Now draw the ball of the foot gently back towards the heel, shortening the foot.",
        "The arch will lift a few millimetres — that is all it should do.",
        "Hold for five seconds while breathing normally, then release.",
      ],
      ur: [
        "پاؤں فرش پر رکھ کر بیٹھیں اور تین نقطے تلاش کریں: ایڑی، انگوٹھے کی جڑ اور چھوٹی انگلی کی جڑ۔",
        "تینوں دبے رہیں اور انگلیاں بالکل سیدھی اور ڈھیلی رہیں۔",
        "اب پاؤں کا اگلا حصہ نرمی سے ایڑی کی طرف کھینچیں، پاؤں کو چھوٹا کریں۔",
        "محراب چند ملی میٹر اٹھے گی — بس اتنا ہی ہونا چاہیے۔",
        "عام سانس لیتے ہوئے پانچ سیکنڈ رکیں، پھر چھوڑ دیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Curling the toes is the wrong exercise — the toes must stay flat.",
        "Almost nobody gets this on the first attempt; give it a week of daily practice.",
        "Once you can do it sitting, try it standing, then on one leg.",
      ],
      ur: [
        "انگلیاں موڑنا غلط ورزش ہے — انگلیاں سیدھی رہنی چاہئیں۔",
        "پہلی کوشش میں یہ تقریباً کسی سے نہیں ہوتی؛ ایک ہفتہ روزانہ مشق دیں۔",
        "بیٹھ کر آ جائے تو کھڑے ہو کر کریں، پھر ایک ٹانگ پر۔",
      ],
    },
    commonMistakes: {
      en: [
        "Curling or gripping with the toes.",
        "Lifting the heel or the ball of the foot.",
        "Squeezing hard instead of lifting gently.",
        "Holding the breath.",
      ],
      ur: [
        "انگلیاں موڑنا یا اُن سے پکڑنا۔",
        "ایڑی یا پاؤں کا اگلا حصہ اٹھا لینا۔",
        "نرمی سے اٹھانے کے بجائے زور سے دبانا۔",
        "سانس روکنا۔",
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
    repetitions: "10 each side",
    sets: "3",
    holdTime: "5 seconds",
    frequency: "Daily",
    restBetweenSets: "20 seconds",
    progressions: ["single-leg-balance"],
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
      rationale: "Short foot training is used for intrinsic foot muscle strengthening and arch support. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ ankleNear: 2 }, SEATED), travel: 800, hold: 400, label: "Foot flat, toes relaxed" },
        { pose: pose({ ankleNear: 6 }, SEATED), travel: 1000, hold: 900, label: "Draw the foot short and lift the arch" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-K-021",
    slug: "nordic-hamstring-lower",
    name: { en: "Kneeling Hamstring Lower", ur: "گھٹنوں پر ران کے پچھلے پٹھے کی ایکسنٹرک ورزش" },
    bodyRegion: "Knee",
    joint: ["Tibiofemoral", "Hip"],
    musclesTargeted: ["Hamstrings", "Gluteus maximus", "Erector spinae"],
    conditions: ["Hamstring strain prevention", "Return to sport", "Recurrent hamstring injury", "Sprinting demands"],
    purpose: { en: "Lowering the body forward from kneeling loads the hamstring while it lengthens, which is the strongest known way to reduce repeat hamstring tears.", ur: "گھٹنوں کے بل جسم کو آگے جھکاتے ہوئے ران کا پچھلا پٹھا لمبا ہوتے ہوئے بوجھ اٹھاتا ہے، اور یہ ران کے پٹھے کے دوبارہ پھٹنے کو کم کرنے کا سب سے مؤثر معلوم طریقہ ہے۔" },
    exerciseType: "Strengthening",
    difficulty: "Advanced",
    contraction: ["Eccentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Quadruped",
    equipment: ["Exercise mat", "A partner or fixed support for the ankles"],
    startingPosition: { en: "Kneel upright on a mat with the ankles held firmly down by a partner or hooked under a fixed support.", ur: "چٹائی پر سیدھے گھٹنوں کے بل بیٹھیں، ٹخنے کسی ساتھی سے مضبوطی سے پکڑوائیں یا کسی ثابت سہارے کے نیچے پھنسائیں۔" },
    quickSteps: {
      en: [
        "Kneel upright with the ankles held down firmly.",
        "Lower your body forward as slowly as you can, keeping the hips straight.",
        "Catch yourself on your hands and push back up.",
      ],
      ur: [
        "سیدھے گھٹنوں کے بل بیٹھیں، ٹخنے مضبوطی سے دبے ہوں۔",
        "جسم جتنا آہستہ ہو سکے آگے جھکائیں، کولہے سیدھے رکھیں۔",
        "ہاتھوں پر خود کو سنبھالیں اور دھکیل کر واپس اوپر آئیں۔",
      ],
    },
    steps: {
      en: [
        "Kneel upright on a padded surface with the ankles held down securely.",
        "Cross the arms over the chest and keep the body in a straight line from knees to head.",
        "Lower yourself forward as slowly as you possibly can — resist the whole way.",
        "The hips must not bend; the whole body falls as one piece.",
        "Catch yourself with the hands, then push back up to the start.",
      ],
      ur: [
        "گدے دار سطح پر سیدھے گھٹنوں کے بل بیٹھیں، ٹخنے مضبوطی سے دبے ہوں۔",
        "بازو سینے پر باندھیں اور جسم گھٹنوں سے سر تک سیدھی لکیر میں رکھیں۔",
        "خود کو جتنا آہستہ ممکن ہو آگے جھکائیں — پورے راستے مزاحمت کریں۔",
        "کولہے نہ مڑیں؛ پورا جسم ایک ٹکڑے کی طرح گرے۔",
        "ہاتھوں سے خود کو سنبھالیں، پھر دھکیل کر شروع والی حالت میں آئیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "This causes real muscle soreness for two or three days the first few times — start with two or three repetitions only.",
        "The hips bending is the commonest fault and it removes most of the benefit.",
        "Not for an acutely strained hamstring; this is prevention and late-stage work.",
      ],
      ur: [
        "پہلی چند بار اس سے دو تین دن تک اصل پٹھوں کا درد ہوتا ہے — صرف دو تین بار سے شروع کریں۔",
        "کولہوں کا مڑ جانا سب سے عام غلطی ہے اور اس سے زیادہ تر فائدہ ختم ہو جاتا ہے۔",
        "تازہ کھنچے ہوئے پٹھے کے لیے نہیں؛ یہ بچاؤ اور آخری مرحلے کی ورزش ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Bending at the hips as you lower.",
        "Dropping quickly instead of resisting.",
        "Doing too many in the first session.",
        "Attempting it with a recent hamstring tear.",
      ],
      ur: [
        "نیچے جاتے وقت کولہوں سے مڑ جانا۔",
        "مزاحمت کے بجائے تیزی سے گر جانا۔",
        "پہلی ہی بار بہت زیادہ کرنا۔",
        "حالیہ پٹھا پھٹنے کے باوجود کوشش کرنا۔",
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
    repetitions: "3–6",
    sets: "2",
    holdTime: "Lower over 4–6 seconds",
    frequency: "Twice weekly",
    restBetweenSets: "60 seconds",
    progressions: [],
    regressions: ["hamstring-curl-standing"],
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
      rationale: "Eccentric hamstring loading is the best-supported approach to hamstring injury prevention. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ hipNear: 178, kneeNear: 90, hipFar: 178, kneeFar: 90, shoulderNear: 150, elbowNear: 110, shoulderFar: 150, elbowFar: 110, rootRot: 20 }, QUADRUPED), travel: 800, hold: 400, label: "Kneeling upright, ankles held" },
        { pose: pose({ hipNear: 178, kneeNear: 90, hipFar: 178, kneeFar: 90, shoulderNear: 150, elbowNear: 110, shoulderFar: 150, elbowFar: 110, rootRot: 62 }, QUADRUPED), travel: 1000, hold: 900, label: "Lower forward as slowly as you can" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-S-046",
    slug: "shoulder-diagonal-band",
    name: { en: "Banded Diagonal Reach", ur: "بینڈ کے ساتھ ترچھی حرکت" },
    bodyRegion: "Shoulder",
    joint: ["Glenohumeral", "Scapulothoracic", "Thoracic spine T1–T12"],
    musclesTargeted: ["Anterior deltoid", "Serratus anterior", "Lower trapezius", "Infraspinatus"],
    conditions: ["Return to overhead work", "Return to sport", "Scapular dyskinesis", "Reduced functional reach"],
    purpose: { en: "One movement that takes the arm from the opposite hip to overhead, which is how the shoulder is actually used to throw, lift and reach across a body.", ur: "ایک ہی حرکت جو بازو کو مخالف کولہے سے سر کے اوپر لے جاتی ہے، اور کندھا پھینکنے، اٹھانے اور جسم کے آر پار پہنچنے میں اسی طرح استعمال ہوتا ہے۔" },
    exerciseType: "Strengthening",
    difficulty: "Advanced",
    contraction: ["Concentric", "Eccentric"],
    mode: "Resisted",
    load: "Resistance band",
    position: "Standing",
    equipment: ["Resistance band"],
    startingPosition: { en: "Stand on one end of a band with the opposite hand holding the other end down by that hip, palm facing back.", ur: "بینڈ کے ایک سرے پر کھڑے ہوں، مخالف ہاتھ سے دوسرا سرا اُسی کولہے کے پاس نیچے پکڑیں، ہتھیلی پیچھے کی طرف۔" },
    quickSteps: {
      en: [
        "Stand on one end of a band, holding the other by the opposite hip.",
        "Pull the hand diagonally up and across to overhead, turning the palm out.",
        "Return slowly along the same path.",
      ],
      ur: [
        "بینڈ کے ایک سرے پر کھڑے ہوں، دوسرا مخالف کولہے کے پاس پکڑیں۔",
        "ہاتھ ترچھا اوپر اور آر پار سر کے اوپر لے جائیں، ہتھیلی باہر گھمائیں۔",
        "اُسی راستے سے آہستہ واپس آئیں۔",
      ],
    },
    steps: {
      en: [
        "Stand on one end of the band and hold the other end in the opposite hand, down beside that hip.",
        "Start with the palm facing backwards and the thumb pointing in.",
        "Pull the hand diagonally across the body, up and out towards overhead on the other side.",
        "Turn the palm to face outwards as the arm rises, finishing with the thumb up and back.",
        "Return slowly along exactly the same line over three seconds.",
      ],
      ur: [
        "بینڈ کے ایک سرے پر کھڑے ہوں اور دوسرا سرا مخالف ہاتھ سے اُسی کولہے کے پاس نیچے پکڑیں۔",
        "ہتھیلی پیچھے کی طرف اور انگوٹھا اندر رکھ کر شروع کریں۔",
        "ہاتھ ترچھا جسم کے آر پار، اوپر اور باہر دوسری طرف سر کے اوپر لے جائیں۔",
        "بازو اٹھتے ہوئے ہتھیلی باہر کی طرف گھمائیں، آخر میں انگوٹھا اوپر اور پیچھے ہو۔",
        "بالکل اُسی لکیر پر تین سیکنڈ میں آہستہ واپس آئیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "The turn of the palm is part of the exercise, not decoration — it is what brings the cuff in.",
        "The trunk should turn a little too; this is not an isolated arm movement.",
        "Keep a light band; the pattern is what matters, not the load.",
      ],
      ur: [
        "ہتھیلی کا گھومنا ورزش کا حصہ ہے، سجاوٹ نہیں — اسی سے کف کے پٹھے شامل ہوتے ہیں۔",
        "دھڑ بھی تھوڑا گھومے؛ یہ صرف بازو کی الگ حرکت نہیں۔",
        "ہلکا بینڈ رکھیں؛ اہم بات انداز ہے، وزن نہیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Losing the palm rotation and just lifting the arm.",
        "Arching the low back at the top.",
        "Using a band too strong to control the return.",
        "Letting the band snap back.",
      ],
      ur: [
        "ہتھیلی گھمانا بھول کر صرف بازو اٹھا دینا۔",
        "اوپر پہنچ کر کمر کو محراب بنانا۔",
        "اتنا سخت بینڈ لینا کہ واپسی قابو میں نہ رہے۔",
        "بینڈ کو جھٹکے سے واپس جانے دینا۔",
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
    repetitions: "10–12 each side",
    sets: "3",
    holdTime: "1 second at the top",
    frequency: "Every other day",
    restBetweenSets: "45 seconds",
    progressions: [],
    regressions: ["band-scaption"],
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
      rationale: "Diagonal pattern loading reflects how the shoulder is used functionally. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ shoulderNear: 178, elbowNear: 10, shoulderAbductNear: -20, shoulderRotNear: -30 }, STAND), travel: 800, hold: 400, label: "Hand down by the opposite hip" },
        { pose: pose({ shoulderNear: 30, elbowNear: 8, shoulderAbductNear: 46, shoulderRotNear: 30, thorax: -4 }, STAND), travel: 1000, hold: 900, label: "Pull diagonally up and overhead" },
      ],
      props: [{ kind: "band", anchor: "front" }],
    },
  },
];
