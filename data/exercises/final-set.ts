import { pose } from "@/lib/figure";
import type { Exercise } from "../schema";
import { PRONE, QUADRUPED, SEATED, SIDE_LYING, STAND, SUPINE, SUPINE_LONG } from "./bases";

/* ==========================================================================
   THE LAST OF THE THIRD HUNDRED
   --------------------------------------------------------------------------
   The exercises that were still missing once everything else was written:
   the honest single-leg tests, the loaded carry that beats any sit-up for
   someone who lifts at work, the side glide for a back locked to one side,
   the hop that comes before running, and the five minutes that should
   precede all of it.
   Drafts pending clinical review.
   ========================================================================== */

export const FINAL_SET: Exercise[] = [
  {
    id: "EX-S-059",
    slug: "shoulder-wall-angel-slide",
    name: { en: "Sliding the Arms up a Doorway", ur: "چوکھٹ پر بازو اوپر پھسلانا" },
    bodyRegion: "Shoulder",
    joint: ["Glenohumeral", "Scapulothoracic"],
    musclesTargeted: ["Serratus anterior", "Lower trapezius", "Deltoid"],
    conditions: ["Shoulder stiffness", "Reduced overhead reach", "Rounded posture", "Post-immobilisation stiffness"],
    purpose: { en: "The door frame keeps the arms in one plane, so the shoulder cannot cheat forward as it rises — which is exactly how most people fake overhead range.", ur: "چوکھٹ بازوؤں کو ایک ہی رخ میں رکھتی ہے، اس لیے اٹھتے وقت کندھا آگے کھسک کر چوری نہیں کر سکتا — اور زیادہ تر لوگ اسی طرح جھوٹی حرکت دکھاتے ہیں۔" },
    exerciseType: "Range of motion",
    difficulty: "Beginner",
    contraction: ["Concentric", "Passive"],
    mode: "Active",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["Doorway"],
    startingPosition: { en: "Stand in a doorway with the forearms flat on the frame on each side, elbows bent to ninety degrees.", ur: "دروازے میں کھڑے ہوں، دونوں بازو ہر طرف چوکھٹ پر سیدھے، کہنیاں نوے درجے مڑی۔" },
    quickSteps: {
      en: [
        "Stand in a doorway with the forearms on the frame.",
        "Slide both arms slowly up the frame.",
        "Slide them back down and repeat.",
      ],
      ur: [
        "دروازے میں کھڑے ہوں، بازو چوکھٹ پر رکھیں۔",
        "دونوں بازو آہستہ چوکھٹ پر اوپر پھسلائیں۔",
        "واپس نیچے لائیں اور دہرائیں۔",
      ],
    },
    steps: {
      en: [
        "Stand in the middle of a doorway with a forearm flat on each side of the frame.",
        "Start with the elbows at shoulder height and bent to ninety degrees.",
        "Keeping both forearms in contact, slide them slowly up the frame.",
        "Go only as high as contact is kept, then slide back down.",
      ],
      ur: [
        "دروازے کے درمیان کھڑے ہوں، ہر طرف چوکھٹ پر ایک بازو سیدھا رکھیں۔",
        "کہنیاں کندھے کی اونچائی پر اور نوے درجے مڑی رکھ کر شروع کریں۔",
        "دونوں بازو چوکھٹ سے لگے رکھتے ہوئے آہستہ اوپر پھسلائیں۔",
        "صرف اتنا اوپر جائیں جتنا رابطہ برقرار رہے، پھر واپس نیچے لائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Losing contact with the frame is the information — that is your honest range.",
        "Do not arch the back to get higher; that is the cheat this exercise exists to stop.",
        "A narrow doorway is harder than a wide one.",
      ],
      ur: [
        "چوکھٹ سے رابطہ ٹوٹنا ہی اصل معلومات ہے — یہی آپ کی سچی حد ہے۔",
        "زیادہ اوپر جانے کے لیے کمر محراب نہ بنائیں؛ یہی چوری روکنے کے لیے یہ ورزش ہے۔",
        "تنگ دروازہ چوڑے سے زیادہ مشکل ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Moving faster as you tire.",
        "Holding the breath during the effort.",
        "Pushing through sharp pain.",
        "Losing the starting position by the last repetition.",
      ],
      ur: [
        "تھکنے پر تیز حرکت کرنا۔",
        "زور لگاتے وقت سانس روکنا۔",
        "تیز درد کے باوجود زور لگانا۔",
        "آخری بار تک شروع والی حالت بگاڑ لینا۔",
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
    repetitions: "10",
    sets: "3",
    holdTime: "1 second at the top",
    frequency: "Daily",
    restBetweenSets: "30 seconds",
    progressions: [],
    regressions: ["wall-angel"],
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
      rationale: "Doorway arm slides constrain the plane of elevation and expose compensations. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ shoulderNear: 92, elbowNear: 90, shoulderAbductNear: 80, shoulderFar: 92, elbowFar: 90, shoulderAbductFar: 80 }, STAND), travel: 800, hold: 400, label: "Forearms on the door frame" },
        { pose: pose({ shoulderNear: 40, elbowNear: 30, shoulderAbductNear: 60, shoulderFar: 40, elbowFar: 30, shoulderAbductFar: 60 }, STAND), travel: 1000, hold: 900, label: "Slide the arms up" },
      ],
      props: [{ kind: "doorway" }],
    },
  },
  {
    id: "EX-S-060",
    slug: "shoulder-sleeper-progression",
    name: { en: "Cross-Body Stretch Lying Down", ur: "لیٹ کر بازو سینے کے آر پار کھینچنا" },
    bodyRegion: "Shoulder",
    joint: ["Glenohumeral", "Scapulothoracic"],
    musclesTargeted: ["Posterior deltoid", "Infraspinatus", "Posterior capsule"],
    conditions: ["Shoulder impingement", "Overhead sport", "Reduced internal rotation", "Rotator cuff tendinopathy"],
    purpose: { en: "Lying on the shoulder blade pins it down, so the stretch reaches the back of the joint rather than sliding the whole shoulder across.", ur: "شانے کی ہڈی پر لیٹنے سے وہ ٹک جاتی ہے، اس لیے کھنچاؤ جوڑ کے پچھلے حصے تک پہنچتا ہے، پورا کندھا کھسکنے کے بجائے۔" },
    exerciseType: "Stretching",
    difficulty: "Intermediate",
    contraction: ["Passive"],
    mode: "Passive",
    load: "Bodyweight",
    position: "Side-lying",
    equipment: ["Exercise mat"],
    startingPosition: { en: "Lie on the affected side with the shoulder blade pinned under you and that arm out in front at shoulder height.", ur: "متاثرہ طرف پر لیٹیں، شانے کی ہڈی نیچے دبی ہو اور وہ بازو کندھے کی اونچائی پر سامنے۔" },
    quickSteps: {
      en: [
        "Lie on the affected shoulder with that arm out in front.",
        "Use the other hand to draw it across your chest.",
        "Hold 30 seconds, then release.",
      ],
      ur: [
        "متاثرہ کندھے پر لیٹیں، وہ بازو سامنے رکھیں۔",
        "دوسرے ہاتھ سے اسے سینے کے آر پار کھینچیں۔",
        "تیس سیکنڈ رکیں، پھر چھوڑ دیں۔",
      ],
    },
    steps: {
      en: [
        "Lie on the affected side so its shoulder blade is trapped between you and the bed.",
        "Bring that arm out in front of you at shoulder height, elbow straight.",
        "Reach over with the other hand and draw it gently across your chest.",
        "Hold where it pulls at the back of the shoulder, then release slowly.",
      ],
      ur: [
        "متاثرہ طرف پر لیٹیں تاکہ اُس کی شانے کی ہڈی آپ کے اور بستر کے درمیان دب جائے۔",
        "وہ بازو کندھے کی اونچائی پر سامنے لائیں، کہنی سیدھی۔",
        "دوسرے ہاتھ سے اسے نرمی سے سینے کے آر پار کھینچیں۔",
        "جہاں کندھے کے پیچھے کھنچاؤ ہو وہیں رکیں، پھر آہستہ چھوڑ دیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Lying on the shoulder blade is what makes this work; standing loses most of it.",
        "The pull belongs at the back of the shoulder, not at the front.",
        "Stop at once if the front of the shoulder pinches.",
      ],
      ur: [
        "شانے کی ہڈی پر لیٹنا ہی اسے مؤثر بناتا ہے؛ کھڑے ہو کر زیادہ تر فائدہ ضائع ہو جاتا ہے۔",
        "کھنچاؤ کندھے کے پیچھے ہونا چاہیے، سامنے نہیں۔",
        "کندھے کے سامنے چبھن ہو تو فوراً رک جائیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Moving faster as you tire.",
        "Holding the breath during the effort.",
        "Pushing through sharp pain.",
        "Losing the starting position by the last repetition.",
      ],
      ur: [
        "تھکنے پر تیز حرکت کرنا۔",
        "زور لگاتے وقت سانس روکنا۔",
        "تیز درد کے باوجود زور لگانا۔",
        "آخری بار تک شروع والی حالت بگاڑ لینا۔",
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
    repetitions: "3 each side",
    sets: "2",
    holdTime: "30 seconds",
    frequency: "Daily",
    restBetweenSets: "30 seconds",
    progressions: [],
    regressions: ["cross-body-stretch"],
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
      rationale: "Side-lying cross-body stretching targets posterior capsule tightness. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ shoulderNear: 90, elbowNear: 6, shoulderFar: 120, elbowFar: 60 }, SIDE_LYING), travel: 800, hold: 400, label: "Arm out in front" },
        { pose: pose({ shoulderNear: 90, shoulderAbductNear: -50, elbowNear: 6, shoulderFar: 110, elbowFar: 80 }, SIDE_LYING), travel: 1000, hold: 900, label: "Draw it across the chest" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-S-061",
    slug: "shoulder-lawn-mower-pull",
    name: { en: "One-Arm Row", ur: "ایک بازو سے رو" },
    bodyRegion: "Shoulder",
    joint: ["Scapulothoracic", "Glenohumeral", "Humeroulnar"],
    musclesTargeted: ["Rhomboids", "Middle trapezius", "Latissimus dorsi", "Biceps brachii"],
    conditions: ["Rounded posture", "Scapular weakness", "Return to manual work", "Upper limb weakness"],
    purpose: { en: "Rowing one arm at a time lets the weaker side be trained to the stronger side's standard, instead of being carried by it.", ur: "ایک وقت میں ایک بازو سے رو کرنے سے کمزور طرف کو مضبوط طرف کے معیار تک لایا جا سکتا ہے، اُس کے سہارے چلنے کے بجائے۔" },
    exerciseType: "Strengthening",
    difficulty: "Intermediate",
    contraction: ["Concentric", "Eccentric"],
    mode: "Resisted",
    load: "Free weight",
    position: "Standing",
    equipment: ["Light weight", "Chair"],
    startingPosition: { en: "Stand leaning forward with one hand on a chair seat and a weight in the other hand, arm hanging.", ur: "آگے جھک کر کھڑے ہوں، ایک ہاتھ کرسی کی نشست پر اور دوسرے ہاتھ میں وزن، بازو لٹکتا ہوا۔" },
    quickSteps: {
      en: [
        "Lean forward with one hand on a chair, weight in the other.",
        "Pull the weight up towards your hip.",
        "Lower slowly over three seconds.",
      ],
      ur: [
        "ایک ہاتھ کرسی پر رکھ کر آگے جھکیں، دوسرے میں وزن۔",
        "وزن کولہے کی طرف اوپر کھینچیں۔",
        "تین سیکنڈ میں آہستہ نیچے لائیں۔",
      ],
    },
    steps: {
      en: [
        "Place one hand on a chair seat and step the same-side foot forward.",
        "Let the other arm hang straight down with a weight in the hand.",
        "Draw the shoulder blade back first, then pull the elbow up past your ribs.",
        "Lower slowly over three seconds until the arm hangs straight again.",
      ],
      ur: [
        "ایک ہاتھ کرسی کی نشست پر رکھیں اور اُسی طرف کا پاؤں آگے کریں۔",
        "دوسرا بازو وزن کے ساتھ سیدھا نیچے لٹکنے دیں۔",
        "پہلے شانے کی ہڈی پیچھے کھینچیں، پھر کہنی پسلیوں سے اوپر لے جائیں۔",
        "تین سیکنڈ میں آہستہ نیچے لائیں یہاں تک کہ بازو دوبارہ سیدھا لٹکے۔",
      ],
    },
    specialInstructions: {
      en: [
        "The shoulder blade moves first and the arm follows; doing it the other way trains the wrong thing.",
        "Keep the back flat — a rounded back means the weight is too heavy.",
        "Do the weaker side first, and match the stronger side to it.",
      ],
      ur: [
        "پہلے شانے کی ہڈی حرکت کرتی ہے اور بازو اُس کے پیچھے؛ الٹا کرنے سے غلط چیز مضبوط ہوتی ہے۔",
        "کمر سیدھی رکھیں — گول کمر کا مطلب ہے وزن زیادہ ہے۔",
        "پہلے کمزور طرف کریں، اور مضبوط طرف کو اُسی کے برابر رکھیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Moving faster as you tire.",
        "Holding the breath during the effort.",
        "Pushing through sharp pain.",
        "Losing the starting position by the last repetition.",
      ],
      ur: [
        "تھکنے پر تیز حرکت کرنا۔",
        "زور لگاتے وقت سانس روکنا۔",
        "تیز درد کے باوجود زور لگانا۔",
        "آخری بار تک شروع والی حالت بگاڑ لینا۔",
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
    regressions: ["band-row-retraction"],
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
      rationale: "Single arm rowing is standard scapular retractor and lat strengthening. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ lumbar: 24, thorax: 12, hipNear: 46, shoulderNear: 176, elbowNear: 6, shoulderFar: 110, elbowFar: 20 }, STAND), travel: 800, hold: 400, label: "Leaning forward, arm hanging" },
        { pose: pose({ lumbar: 24, thorax: 12, hipNear: 46, shoulderNear: 186, elbowNear: 106, shoulderFar: 110, elbowFar: 20 }, STAND), travel: 1000, hold: 900, label: "Pull the elbow up past the ribs" },
      ],
      props: [{ kind: "dumbbells" }],
    },
  },
  {
    id: "EX-H-045",
    slug: "hip-hitch",
    name: { en: "Hip Hitch on a Step", ur: "سیڑھی پر کولہا اٹھانا" },
    bodyRegion: "Pelvis & Hip",
    joint: ["Hip", "Lumbar spine L1–L5"],
    musclesTargeted: ["Gluteus medius", "Gluteus minimus", "Quadratus lumborum"],
    conditions: ["Trendelenburg gait", "Gluteal weakness", "Lateral hip pain", "Hip instability"],
    purpose: { en: "Isolates the muscle that holds the pelvis level in walking, by asking it to lift the other side of the pelvis rather than move the leg.", ur: "اُس پٹھے کو الگ کرتی ہے جو چلتے وقت پیڑو برابر رکھتا ہے، اور اُس سے ٹانگ ہلانے کے بجائے دوسری طرف کا پیڑو اٹھواتی ہے۔" },
    exerciseType: "Strengthening",
    difficulty: "Intermediate",
    contraction: ["Concentric", "Eccentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["Low step", "Support to hold"],
    startingPosition: { en: "Stand on a low step on one leg with the other foot hanging free beside it, holding a rail.", ur: "نیچی سیڑھی پر ایک ٹانگ سے کھڑے ہوں، دوسرا پاؤں اُس کے پہلو میں آزاد لٹکا ہو، ریلنگ پکڑی ہو۔" },
    quickSteps: {
      en: [
        "Stand on a step on one leg, the other foot hanging free.",
        "Drop the free hip down, then lift it up.",
        "The standing leg stays straight throughout.",
      ],
      ur: [
        "سیڑھی پر ایک ٹانگ سے کھڑے ہوں، دوسرا پاؤں آزاد لٹکے۔",
        "آزاد کولہا نیچے گرائیں، پھر اوپر اٹھائیں۔",
        "کھڑی ٹانگ پوری ورزش میں سیدھی رہے۔",
      ],
    },
    steps: {
      en: [
        "Stand on a low step on one leg, holding a rail for balance only.",
        "Let the free foot hang beside the step with that leg relaxed.",
        "Let the free hip drop down towards the floor.",
        "Now lift that hip up as high as you can, using the standing side's buttock.",
      ],
      ur: [
        "نیچی سیڑھی پر ایک ٹانگ سے کھڑے ہوں، ریلنگ صرف توازن کے لیے پکڑیں۔",
        "آزاد پاؤں سیڑھی کے پہلو میں لٹکنے دیں، وہ ٹانگ ڈھیلی ہو۔",
        "آزاد کولہا فرش کی طرف نیچے گرنے دیں۔",
        "اب اُس کولہے کو جتنا ہو سکے اوپر اٹھائیں، کھڑی طرف کے کولہے کے پٹھے سے۔",
      ],
    },
    specialInstructions: {
      en: [
        "The work is done by the standing leg's buttock, not by the leg that moves.",
        "The standing knee must stay straight — bending it lets you cheat.",
        "Put a hand on the standing buttock to feel it working.",
      ],
      ur: [
        "کام کھڑی ٹانگ کے کولہے کا پٹھا کرتا ہے، حرکت کرنے والی ٹانگ نہیں۔",
        "کھڑی ٹانگ کا گھٹنا سیدھا رہے — موڑنے سے چوری ہو جاتی ہے۔",
        "کھڑے کولہے پر ہاتھ رکھ کر اُس کا کام محسوس کریں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Moving faster as you tire.",
        "Holding the breath during the effort.",
        "Pushing through sharp pain.",
        "Losing the starting position by the last repetition.",
      ],
      ur: [
        "تھکنے پر تیز حرکت کرنا۔",
        "زور لگاتے وقت سانس روکنا۔",
        "تیز درد کے باوجود زور لگانا۔",
        "آخری بار تک شروع والی حالت بگاڑ لینا۔",
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
    repetitions: "10–12 each side",
    sets: "3",
    holdTime: "2 seconds at the top",
    frequency: "Every other day",
    restBetweenSets: "30 seconds",
    progressions: [],
    regressions: ["standing-hip-abduction"],
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
      rationale: "Pelvic drop and lift is standard isolation of hip abductor control. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ hipRotNear: 0, hipFar: 8 }, STAND), travel: 800, hold: 400, label: "Free hip dropped" },
        { pose: pose({ hipRotNear: 0, hipFar: -14, lumbar: -5 }, STAND), travel: 1000, hold: 900, label: "Lift the free hip up" },
      ],
    },
  },
  {
    id: "EX-H-046",
    slug: "hip-thrust-on-chair",
    name: { en: "Hip Thrust from a Chair", ur: "کرسی کے سہارے کولہے اٹھانا" },
    bodyRegion: "Pelvis & Hip",
    joint: ["Hip", "Tibiofemoral"],
    musclesTargeted: ["Gluteus maximus", "Hamstrings", "Quadriceps femoris"],
    conditions: ["Gluteal weakness", "Return to sport", "Low back pain", "Difficulty climbing stairs"],
    purpose: { en: "Raising the shoulders onto a chair makes the buttock work through a much bigger range than a floor bridge, which is why it builds more strength.", ur: "کندھے کرسی پر رکھنے سے کولہے کا پٹھا فرش والے پُل کی نسبت کہیں بڑی حد میں کام کرتا ہے، اسی لیے زیادہ طاقت بنتی ہے۔" },
    exerciseType: "Strengthening",
    difficulty: "Intermediate",
    contraction: ["Concentric", "Eccentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Supine",
    equipment: ["Firm chair against a wall", "Exercise mat"],
    startingPosition: { en: "Sit on the floor with the upper back against the seat of a firm chair, knees bent and feet flat.", ur: "فرش پر بیٹھیں، اوپری کمر مضبوط کرسی کی نشست سے لگی، گھٹنے مڑے اور پاؤں فرش پر۔" },
    quickSteps: {
      en: [
        "Rest the upper back on a chair seat, knees bent.",
        "Drive through the heels and lift the hips level.",
        "Lower slowly and repeat.",
      ],
      ur: [
        "اوپری کمر کرسی کی نشست پر ٹکائیں، گھٹنے مڑے۔",
        "ایڑیوں سے زور لگا کر کولہے برابر تک اٹھائیں۔",
        "آہستہ نیچے لائیں اور دہرائیں۔",
      ],
    },
    steps: {
      en: [
        "Push a firm chair against a wall so it cannot slide.",
        "Sit on the floor with the shoulder blades resting on the front edge of the seat.",
        "Bend the knees with the feet flat and about a foot's length from your buttocks.",
        "Drive through the heels and lift the hips until the body is level from knees to shoulders.",
      ],
      ur: [
        "مضبوط کرسی دیوار سے لگا دیں تاکہ پھسل نہ سکے۔",
        "فرش پر بیٹھیں، شانے کی ہڈیاں نشست کے اگلے کنارے پر ٹکی ہوں۔",
        "گھٹنے موڑیں، پاؤں فرش پر اور کولہوں سے تقریباً ایک قدم دور۔",
        "ایڑیوں سے زور لگا کر کولہے اٹھائیں یہاں تک کہ گھٹنوں سے کندھوں تک جسم برابر ہو۔",
      ],
    },
    specialInstructions: {
      en: [
        "Level is the target — going higher arches the low back instead of using the buttock.",
        "The chair must be against a wall; this is the main safety point.",
        "Tuck the chin so the neck is not levered against the seat.",
      ],
      ur: [
        "ہدف برابر ہونا ہے — اس سے اوپر جانے سے کولہے کے بجائے کمر محراب بنتی ہے۔",
        "کرسی دیوار سے لگی ہو؛ یہی سب سے اہم حفاظتی بات ہے۔",
        "ٹھوڑی اندر رکھیں تاکہ گردن نشست سے نہ ٹکرائے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Moving faster as you tire.",
        "Holding the breath during the effort.",
        "Pushing through sharp pain.",
        "Losing the starting position by the last repetition.",
      ],
      ur: [
        "تھکنے پر تیز حرکت کرنا۔",
        "زور لگاتے وقت سانس روکنا۔",
        "تیز درد کے باوجود زور لگانا۔",
        "آخری بار تک شروع والی حالت بگاڑ لینا۔",
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
    holdTime: "2 seconds at the top",
    frequency: "Every other day",
    restBetweenSets: "45 seconds",
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
      rationale: "Elevated-shoulder hip thrusting increases gluteal range and load. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ rootRot: -74, hipNear: 84, kneeNear: 100, hipFar: 84, kneeFar: 100 }, SUPINE), travel: 800, hold: 400, label: "Shoulders on the chair, hips down" },
        { pose: pose({ rootRot: -74, hipNear: 20, kneeNear: 96, hipFar: 20, kneeFar: 96 }, SUPINE), travel: 1000, hold: 900, label: "Drive up until level" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-H-047",
    slug: "adductor-side-plank",
    name: { en: "Side Plank on the Top Leg", ur: "اوپر والی ٹانگ پر سائیڈ پلانک" },
    bodyRegion: "Pelvis & Hip",
    joint: ["Hip"],
    musclesTargeted: ["Adductor longus", "Adductor magnus", "Obliques", "Gluteus medius"],
    conditions: ["Groin strain", "Adductor-related groin pain", "Return to sport", "Hip instability"],
    purpose: { en: "Holding the body up on the inner thigh of the top leg is one of the strongest ways to load the groin, and is used late in return to sport.", ur: "جسم کو اوپر والی ٹانگ کی اندرونی ران پر تھامنا گرائن پر بوجھ ڈالنے کے سب سے مضبوط طریقوں میں سے ہے، اور کھیل میں واپسی کے آخری مرحلے میں استعمال ہوتا ہے۔" },
    exerciseType: "Strengthening",
    difficulty: "Advanced",
    contraction: ["Isometric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Side-lying",
    equipment: ["Exercise mat", "Chair"],
    startingPosition: { en: "Lie on your side propped on the lower forearm with the top leg resting on a chair seat.", ur: "پہلو پر لیٹیں، نیچے والے بازو پر ٹیک اور اوپر والی ٹانگ کرسی کی نشست پر۔" },
    quickSteps: {
      en: [
        "Lie on your side with the top leg on a chair.",
        "Press down through that leg and lift the hips.",
        "Hold 10 seconds, then lower.",
      ],
      ur: [
        "پہلو پر لیٹیں، اوپر والی ٹانگ کرسی پر۔",
        "اُس ٹانگ سے نیچے دباؤ ڈال کر کولہے اٹھائیں۔",
        "دس سیکنڈ رکیں، پھر نیچے آئیں۔",
      ],
    },
    steps: {
      en: [
        "Lie on your side with the elbow under the shoulder and the top leg on a chair seat.",
        "Let the lower leg hang free below it.",
        "Press down through the inner thigh of the top leg and lift the hips off the floor.",
        "Hold, keeping the body in a straight line, then lower slowly.",
      ],
      ur: [
        "پہلو پر لیٹیں، کہنی کندھے کے نیچے اور اوپر والی ٹانگ کرسی کی نشست پر۔",
        "نیچے والی ٹانگ اُس کے نیچے آزاد لٹکنے دیں۔",
        "اوپر والی ٹانگ کی اندرونی ران سے نیچے دباؤ ڈال کر کولہے فرش سے اٹھائیں۔",
        "جسم سیدھی لکیر میں رکھتے ہوئے رکیں، پھر آہستہ نیچے آئیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Not for a fresh groin strain — this is late-stage work.",
        "The chair must not slide; put it against a wall.",
        "Build from the adductor squeeze, through side plank, to this.",
      ],
      ur: [
        "تازہ گرائن کھنچاؤ کے لیے نہیں — یہ آخری مرحلے کی ورزش ہے۔",
        "کرسی پھسلنی نہیں چاہیے؛ اسے دیوار سے لگا دیں۔",
        "گیند دبانے سے، سائیڈ پلانک سے ہوتے ہوئے اس تک پہنچیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Moving faster as you tire.",
        "Holding the breath during the effort.",
        "Pushing through sharp pain.",
        "Losing the starting position by the last repetition.",
      ],
      ur: [
        "تھکنے پر تیز حرکت کرنا۔",
        "زور لگاتے وقت سانس روکنا۔",
        "تیز درد کے باوجود زور لگانا۔",
        "آخری بار تک شروع والی حالت بگاڑ لینا۔",
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
    repetitions: "5–8 each side",
    sets: "3",
    holdTime: "10 seconds",
    frequency: "Twice weekly",
    restBetweenSets: "60 seconds",
    progressions: [],
    regressions: ["isometric-hip-adduction-ball"],
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
      rationale: "Adductor side plank variants are used late in groin injury rehabilitation. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ hipNear: 6, kneeNear: 6, hipFar: 6, kneeFar: 6, shoulderNear: 90, shoulderAbductNear: -90, elbowNear: 90, shoulderFar: 150, elbowFar: 10 }, SIDE_LYING), travel: 800, hold: 400, label: "Top leg on the chair" },
        { pose: pose({ hipNear: 0, kneeNear: 2, hipFar: 26, kneeFar: 4, shoulderNear: 90, shoulderAbductNear: -90, elbowNear: 90, shoulderFar: 150, elbowFar: 10 }, SIDE_LYING), travel: 1000, hold: 900, label: "Press down and lift the hips" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-K-033",
    slug: "knee-wall-slide-single",
    name: { en: "Single Leg Wall Slide", ur: "ایک ٹانگ پر دیوار سے کھسکنا" },
    bodyRegion: "Knee",
    joint: ["Tibiofemoral", "Patellofemoral", "Hip"],
    musclesTargeted: ["Quadriceps femoris", "Gluteus medius", "Gluteus maximus", "Soleus"],
    conditions: ["Patellofemoral pain", "Return to sport", "Single leg weakness", "Post-knee-surgery rehabilitation"],
    purpose: { en: "One leg at a time with the back supported, so the knee can be loaded properly without the balance demand of a free squat.", ur: "کمر کو سہارا دیتے ہوئے ایک وقت میں ایک ٹانگ، تاکہ گھٹنے پر مناسب بوجھ پڑے بغیر آزاد اسکواٹ کے توازن کے تقاضے کے۔" },
    exerciseType: "Strengthening",
    difficulty: "Intermediate",
    contraction: ["Concentric", "Eccentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["Wall"],
    startingPosition: { en: "Stand with your back against a wall, feet a step forward, weight on one leg.", ur: "دیوار سے پیٹھ لگا کر کھڑے ہوں، پاؤں ایک قدم آگے، وزن ایک ٹانگ پر۔" },
    quickSteps: {
      en: [
        "Stand with your back on a wall, weight on one leg.",
        "Slide down until that knee is a quarter bent.",
        "Push back up through the heel.",
      ],
      ur: [
        "دیوار سے پیٹھ لگا کر کھڑے ہوں، وزن ایک ٹانگ پر۔",
        "نیچے کھسکیں یہاں تک کہ وہ گھٹنا چوتھائی مڑ جائے۔",
        "ایڑی سے زور لگا کر واپس اوپر آئیں۔",
      ],
    },
    steps: {
      en: [
        "Stand with the back flat against a wall and the feet a step forward.",
        "Take the weight onto one leg and lift the other foot slightly off the floor.",
        "Slide down the wall until the standing knee is about a quarter bent.",
        "Push back up through the heel, keeping the knee over the middle of the foot.",
      ],
      ur: [
        "دیوار سے پیٹھ سیدھی لگا کر کھڑے ہوں، پاؤں ایک قدم آگے۔",
        "وزن ایک ٹانگ پر لے جائیں اور دوسرا پاؤں فرش سے ذرا اٹھا لیں۔",
        "دیوار پر نیچے کھسکیں یہاں تک کہ کھڑی ٹانگ کا گھٹنا چوتھائی مڑ جائے۔",
        "ایڑی سے زور لگا کر واپس اوپر آئیں، گھٹنا پاؤں کے درمیان کی سیدھ میں رکھیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Watch the knee in a mirror — if it falls inwards, go less deep.",
        "The wall takes the balance out of it, so all the effort goes to the knee.",
        "Quarter depth, done level, beats half depth with a collapsing knee.",
      ],
      ur: [
        "آئینے میں گھٹنے کو دیکھیں — اندر کی طرف گرے تو کم گہرا جائیں۔",
        "دیوار توازن کا تقاضا ختم کر دیتی ہے، اس لیے سارا زور گھٹنے پر آتا ہے۔",
        "گرتے گھٹنے کے ساتھ آدھی گہرائی سے بہتر ہے برابر رہ کر چوتھائی۔",
      ],
    },
    commonMistakes: {
      en: [
        "Moving faster as you tire.",
        "Holding the breath during the effort.",
        "Pushing through sharp pain.",
        "Losing the starting position by the last repetition.",
      ],
      ur: [
        "تھکنے پر تیز حرکت کرنا۔",
        "زور لگاتے وقت سانس روکنا۔",
        "تیز درد کے باوجود زور لگانا۔",
        "آخری بار تک شروع والی حالت بگاڑ لینا۔",
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
    holdTime: "1 second at the bottom",
    frequency: "Every other day",
    restBetweenSets: "45 seconds",
    progressions: [],
    regressions: ["wall-squat-hold"],
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
      rationale: "Single leg wall slides are a standard supported closed-chain progression. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ hipNear: 0, kneeNear: 2, hipFar: 20, kneeFar: 40 }, STAND), travel: 800, hold: 400, label: "Back on the wall, one leg down" },
        { pose: pose({ hipNear: 32, kneeNear: 38, ankleNear: -14, hipFar: 46, kneeFar: 70 }, STAND), travel: 1000, hold: 900, label: "Slide down on one leg" },
      ],
      props: [{ kind: "wall" }],
    },
  },
  {
    id: "EX-K-034",
    slug: "knee-flexion-with-strap",
    name: { en: "Knee Bend with a Belt", ur: "پٹی سے گھٹنا موڑنا" },
    bodyRegion: "Knee",
    joint: ["Tibiofemoral"],
    musclesTargeted: ["Quadriceps femoris", "Hamstrings", "Knee capsule"],
    conditions: ["Post-knee-surgery rehabilitation", "Reduced knee bend", "Post-cast stiffness", "Knee stiffness"],
    purpose: { en: "A belt round the ankle lets the arms pull the knee further than the leg can bend by itself, which is how the last of the range is recovered.", ur: "ٹخنے کے گرد پٹی بازوؤں کو گھٹنے کو اُس سے آگے کھینچنے دیتی ہے جہاں تک ٹانگ خود مڑ سکے، اور آخری حد اسی طرح واپس آتی ہے۔" },
    exerciseType: "Range of motion",
    difficulty: "Beginner",
    contraction: ["Passive"],
    mode: "Passive",
    load: "Assisted",
    position: "Prone",
    equipment: ["Exercise mat", "Belt or towel"],
    startingPosition: { en: "Lie face down with a belt looped around the ankle and both ends held over the shoulder.", ur: "اوندھے لیٹ جائیں، پٹی ٹخنے کے گرد اور دونوں سرے کندھے کے اوپر پکڑے ہوں۔" },
    quickSteps: {
      en: [
        "Lie face down with a belt round the ankle.",
        "Pull gently so the knee bends further.",
        "Hold 30 seconds, then release slowly.",
      ],
      ur: [
        "اوندھے لیٹیں، پٹی ٹخنے کے گرد ہو۔",
        "نرمی سے کھینچیں تاکہ گھٹنا مزید مڑے۔",
        "تیس سیکنڈ رکیں، پھر آہستہ چھوڑ دیں۔",
      ],
    },
    steps: {
      en: [
        "Lie face down with a belt looped around the ankle of the stiff knee.",
        "Bring both ends over the same shoulder and take hold of them.",
        "Bend the knee actively as far as it goes, then pull gently on the belt.",
        "Hold at a firm stretch for thirty seconds, then let it down slowly.",
      ],
      ur: [
        "اوندھے لیٹ جائیں، سخت گھٹنے والے ٹخنے کے گرد پٹی ڈالیں۔",
        "دونوں سرے اُسی طرف کے کندھے پر لا کر پکڑیں۔",
        "گھٹنا خود جہاں تک مڑ سکے موڑیں، پھر پٹی نرمی سے کھینچیں۔",
        "سخت کھنچاؤ پر تیس سیکنڈ رکیں، پھر آہستہ نیچے لائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Bend it as far as you can yourself first, then assist with the belt.",
        "The hips must stay flat; lifting them fakes extra bend.",
        "A stretch you could hold for a minute is the right intensity.",
      ],
      ur: [
        "پہلے خود جتنا مڑ سکے موڑیں، پھر پٹی سے مدد لیں۔",
        "کولہے سیدھے رہیں؛ اٹھانے سے جھوٹا خم بنتا ہے۔",
        "اتنا کھنچاؤ درست ہے جو ایک منٹ برداشت ہو۔",
      ],
    },
    commonMistakes: {
      en: [
        "Moving faster as you tire.",
        "Holding the breath during the effort.",
        "Pushing through sharp pain.",
        "Losing the starting position by the last repetition.",
      ],
      ur: [
        "تھکنے پر تیز حرکت کرنا۔",
        "زور لگاتے وقت سانس روکنا۔",
        "تیز درد کے باوجود زور لگانا۔",
        "آخری بار تک شروع والی حالت بگاڑ لینا۔",
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
    repetitions: "3",
    sets: "2",
    holdTime: "30 seconds",
    frequency: "3 times daily",
    restBetweenSets: "30 seconds",
    progressions: [],
    regressions: ["knee-flexion-prone-active"],
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
      rationale: "Belt-assisted prone knee flexion is standard for regaining knee bend. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ kneeNear: 60 }, PRONE), travel: 800, hold: 400, label: "Knee bent as far as it goes" },
        { pose: pose({ kneeNear: 124, shoulderNear: 40, elbowNear: 80 }, PRONE), travel: 1000, hold: 900, label: "Pull gently further with the belt" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-A-028",
    slug: "ankle-single-leg-heel-raise",
    name: { en: "One Leg Heel Raise", ur: "ایک ٹانگ پر ایڑی اٹھانا" },
    bodyRegion: "Ankle & Foot",
    joint: ["Talocrural", "Subtalar"],
    musclesTargeted: ["Gastrocnemius", "Soleus", "Achilles tendon", "Foot intrinsics"],
    conditions: ["Achilles tendinopathy", "Calf weakness", "Push-off weakness in gait", "Return to running"],
    purpose: { en: "A calf has to lift the whole body on one leg to walk, so training it on two legs never loads it enough. This is the honest test.", ur: "چلنے کے لیے پنڈلی کو پورا جسم ایک ٹانگ پر اٹھانا پڑتا ہے، اس لیے دو ٹانگوں پر مشق کبھی کافی بوجھ نہیں ڈالتی۔ یہی اصل امتحان ہے۔" },
    exerciseType: "Strengthening",
    difficulty: "Intermediate",
    contraction: ["Concentric", "Eccentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["Support to hold"],
    startingPosition: { en: "Stand on one leg beside a worktop with the other foot lifted clear of the floor.", ur: "میز کے پاس ایک ٹانگ پر کھڑے ہوں، دوسرا پاؤں فرش سے اوپر اٹھا ہوا۔" },
    quickSteps: {
      en: [
        "Stand on one leg with a hand on a worktop.",
        "Rise up onto the toes as high as you can.",
        "Lower slowly over three seconds.",
      ],
      ur: [
        "ایک ٹانگ پر کھڑے ہوں، ایک ہاتھ میز پر۔",
        "پنجوں پر جتنا اوپر ہو سکے اٹھیں۔",
        "تین سیکنڈ میں آہستہ نیچے لائیں۔",
      ],
    },
    steps: {
      en: [
        "Stand on one leg with the fingertips resting on a worktop for balance only.",
        "Keep the knee straight and the weight over the big toe and second toe.",
        "Rise as high onto the toes as you can and pause for one second.",
        "Lower slowly over three seconds, all the way down to the floor.",
      ],
      ur: [
        "ایک ٹانگ پر کھڑے ہوں، انگلیاں صرف توازن کے لیے میز پر رکھیں۔",
        "گھٹنا سیدھا رکھیں اور وزن انگوٹھے اور اُس کے ساتھ والی انگلی پر رکھیں۔",
        "پنجوں پر جتنا اوپر ہو سکے اٹھیں اور ایک سیکنڈ رکیں۔",
        "تین سیکنڈ میں آہستہ نیچے، بالکل فرش تک لائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Counting how many you manage on each side shows the difference between them plainly.",
        "Twenty-five on the injured side is a common target before returning to running.",
        "Do not let the ankle roll outwards as you rise.",
      ],
      ur: [
        "ہر طرف کتنی بار کر سکتے ہیں یہ گننے سے دونوں کا فرق صاف نظر آتا ہے۔",
        "دوڑنے پر واپسی سے پہلے متاثرہ طرف پچیس بار عام ہدف ہے۔",
        "اٹھتے وقت ٹخنے کو باہر کی طرف لڑھکنے نہ دیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Moving faster as you tire.",
        "Holding the breath during the effort.",
        "Pushing through sharp pain.",
        "Losing the starting position by the last repetition.",
      ],
      ur: [
        "تھکنے پر تیز حرکت کرنا۔",
        "زور لگاتے وقت سانس روکنا۔",
        "تیز درد کے باوجود زور لگانا۔",
        "آخری بار تک شروع والی حالت بگاڑ لینا۔",
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
    repetitions: "15–25 each side",
    sets: "3",
    holdTime: "1 second at the top",
    frequency: "Daily",
    restBetweenSets: "30 seconds",
    progressions: [],
    regressions: ["heel-raises"],
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
      rationale: "Single leg heel raises are a standard measure and trainer of calf capacity. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ ankleNear: 0, hipFar: 30, kneeFar: 70 }, STAND), travel: 800, hold: 400, label: "Standing on one leg" },
        { pose: pose({ ankleNear: 36, hipFar: 30, kneeFar: 70 }, STAND), travel: 1000, hold: 900, label: "Rise onto the toes" },
      ],
    },
  },
  {
    id: "EX-A-029",
    slug: "foot-doming-standing",
    name: { en: "Short Foot Standing", ur: "کھڑے ہو کر پاؤں کی محراب اٹھانا" },
    bodyRegion: "Ankle & Foot",
    joint: ["Midtarsal", "Subtalar", "Metatarsophalangeal"],
    musclesTargeted: ["Abductor hallucis", "Flexor digitorum brevis", "Tibialis posterior"],
    conditions: ["Flat foot", "Plantar heel pain", "Ankle instability", "Knee valgus in squatting"],
    purpose: { en: "The same arch lift as sitting, but with body weight on it — which is when the foot muscles actually have to do the job.", ur: "بیٹھ کر محراب اٹھانے جیسی ہی ورزش، مگر جسم کے وزن کے ساتھ — اور اسی وقت پاؤں کے پٹھوں کو واقعی کام کرنا پڑتا ہے۔" },
    exerciseType: "Stabilisation & motor control",
    difficulty: "Intermediate",
    contraction: ["Isometric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["Support within reach"],
    startingPosition: { en: "Stand tall with the feet hip-width apart, barefoot, and the weight even on both feet.", ur: "سیدھے کھڑے ہوں، پاؤں کولہوں کے برابر فاصلے پر، ننگے پاؤں، وزن دونوں پر برابر۔" },
    quickSteps: {
      en: [
        "Stand barefoot with the weight even on both feet.",
        "Draw the ball of each foot back to lift the arch.",
        "Hold 10 seconds without curling the toes.",
      ],
      ur: [
        "ننگے پاؤں کھڑے ہوں، وزن دونوں پر برابر۔",
        "ہر پاؤں کا اگلا حصہ پیچھے کھینچ کر محراب اٹھائیں۔",
        "انگلیاں موڑے بغیر دس سیکنڈ رکیں۔",
      ],
    },
    steps: {
      en: [
        "Stand barefoot with the feet hip-width apart and the toes relaxed and flat.",
        "Keep the heel, big toe base and little toe base all pressed down.",
        "Draw the ball of the foot back towards the heel, shortening the foot.",
        "The arch lifts a few millimetres — hold it there and keep the toes flat.",
      ],
      ur: [
        "ننگے پاؤں کھڑے ہوں، پاؤں کولہوں کے برابر فاصلے پر اور انگلیاں ڈھیلی اور سیدھی۔",
        "ایڑی، انگوٹھے کی جڑ اور چھوٹی انگلی کی جڑ سب دبی رہیں۔",
        "پاؤں کا اگلا حصہ ایڑی کی طرف پیچھے کھینچیں، پاؤں کو چھوٹا کریں۔",
        "محراب چند ملی میٹر اٹھے گی — اسے وہیں روکیں اور انگلیاں سیدھی رکھیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Curling the toes is the wrong exercise; they must stay flat.",
        "Progress to holding it on one leg, then during a mini squat.",
        "Learn it sitting first; standing is much harder.",
      ],
      ur: [
        "انگلیاں موڑنا غلط ورزش ہے؛ وہ سیدھی رہنی چاہئیں۔",
        "پھر ایک ٹانگ پر، اور پھر چھوٹی اسکواٹ کے دوران روکنے تک بڑھیں۔",
        "پہلے بیٹھ کر سیکھیں؛ کھڑے ہو کر کہیں مشکل ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Moving faster as you tire.",
        "Holding the breath during the effort.",
        "Pushing through sharp pain.",
        "Losing the starting position by the last repetition.",
      ],
      ur: [
        "تھکنے پر تیز حرکت کرنا۔",
        "زور لگاتے وقت سانس روکنا۔",
        "تیز درد کے باوجود زور لگانا۔",
        "آخری بار تک شروع والی حالت بگاڑ لینا۔",
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
    repetitions: "10",
    sets: "3",
    holdTime: "10 seconds",
    frequency: "Daily",
    restBetweenSets: "30 seconds",
    progressions: [],
    regressions: ["short-foot-exercise"],
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
      rationale: "Weight-bearing short foot training progresses intrinsic foot strengthening. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ ankleNear: 0, ankleFar: 0 }, STAND), travel: 800, hold: 400, label: "Standing barefoot" },
        { pose: pose({ ankleNear: 4, ankleFar: 4 }, STAND), travel: 1000, hold: 900, label: "Lift both arches" },
      ],
    },
  },
  {
    id: "EX-A-030",
    slug: "ankle-hopping",
    name: { en: "Small Hops", ur: "چھوٹی چھلانگیں" },
    bodyRegion: "Ankle & Foot",
    joint: ["Talocrural", "Subtalar", "Tibiofemoral"],
    musclesTargeted: ["Gastrocnemius", "Soleus", "Quadriceps femoris", "Peroneals"],
    conditions: ["Return to sport", "Achilles tendinopathy", "Ankle instability", "Late-stage rehabilitation"],
    purpose: { en: "The last step before running: the tendon has to store and release energy quickly, and nothing built slowly prepares it for that.", ur: "دوڑنے سے پہلے کا آخری قدم: ٹینڈن کو تیزی سے توانائی جمع کر کے چھوڑنی پڑتی ہے، اور آہستہ بنائی گئی کوئی چیز اس کے لیے تیار نہیں کرتی۔" },
    exerciseType: "Functional & gait",
    difficulty: "Advanced",
    contraction: ["Concentric", "Eccentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["Support within reach"],
    startingPosition: { en: "Stand tall on both feet with the knees slightly bent and a worktop within reach.", ur: "دونوں پاؤں پر سیدھے کھڑے ہوں، گھٹنے ہلکے مڑے اور میز پہنچ میں ہو۔" },
    quickSteps: {
      en: [
        "Stand on both feet with the knees soft.",
        "Hop lightly on the spot, landing on the balls of the feet.",
        "Keep the contacts quiet and quick.",
      ],
      ur: [
        "دونوں پاؤں پر کھڑے ہوں، گھٹنے ہلکے مڑے۔",
        "ایک جگہ ہلکی چھلانگیں لگائیں، پنجوں پر اتریں۔",
        "زمین سے رابطہ خاموش اور تیز رکھیں۔",
      ],
    },
    steps: {
      en: [
        "Stand on both feet with the knees slightly bent and a support within reach.",
        "Hop lightly on the spot, only a couple of centimetres off the floor.",
        "Land on the balls of the feet and let the heels touch lightly.",
        "Keep the landings quiet — noise means you are landing too hard.",
      ],
      ur: [
        "دونوں پاؤں پر کھڑے ہوں، گھٹنے ہلکے مڑے اور سہارا پہنچ میں ہو۔",
        "ایک جگہ ہلکی چھلانگیں لگائیں، فرش سے صرف دو تین سینٹی میٹر اوپر۔",
        "پنجوں پر اتریں اور ایڑیوں کو ہلکا چھونے دیں۔",
        "اترنا خاموش رکھیں — آواز کا مطلب ہے آپ زور سے اتر رہے ہیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Quiet landings are the measure of control; loud ones mean stop.",
        "Only start this when single leg heel raises and balance are both back.",
        "Stop for the day if the tendon is sore the next morning.",
      ],
      ur: [
        "خاموش اترنا قابو کا پیمانہ ہے؛ اونچی آواز کا مطلب ہے رک جائیں۔",
        "یہ تب شروع کریں جب ایک ٹانگ پر ایڑی اٹھانا اور توازن دونوں واپس آ جائیں۔",
        "اگلی صبح ٹینڈن دُکھے تو اُس دن کے لیے بند کر دیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Moving faster as you tire.",
        "Holding the breath during the effort.",
        "Pushing through sharp pain.",
        "Losing the starting position by the last repetition.",
      ],
      ur: [
        "تھکنے پر تیز حرکت کرنا۔",
        "زور لگاتے وقت سانس روکنا۔",
        "تیز درد کے باوجود زور لگانا۔",
        "آخری بار تک شروع والی حالت بگاڑ لینا۔",
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
    holdTime: "—",
    frequency: "Every other day",
    restBetweenSets: "60 seconds",
    progressions: [],
    regressions: ["ankle-single-leg-heel-raise"],
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
      rationale: "Low-level hopping is a standard late-stage plyometric progression. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ kneeNear: 20, kneeFar: 20, ankleNear: 0, ankleFar: 0 }, STAND), travel: 800, hold: 400, label: "Standing, knees soft" },
        { pose: pose({ kneeNear: 6, kneeFar: 6, ankleNear: 34, ankleFar: 34 }, STAND), travel: 1000, hold: 900, label: "Hop lightly on the spot" },
      ],
    },
  },
  {
    id: "EX-CX-021",
    slug: "neck-retraction-with-band",
    name: { en: "Chin Tuck against a Band", ur: "بینڈ کے خلاف ٹھوڑی اندر کرنا" },
    bodyRegion: "Cervical",
    joint: ["Cervical spine C1–C7"],
    musclesTargeted: ["Deep neck flexors", "Longus colli", "Cervical erector spinae"],
    conditions: ["Forward head posture", "Neck weakness", "Postural fatigue", "Desk work strain"],
    purpose: { en: "Adds resistance to the chin tuck, which turns a postural cue into genuine strengthening for the muscles that hold the head back over the body.", ur: "ٹھوڑی اندر کرنے میں مزاحمت شامل کرتی ہے، جس سے یہ صرف عادت سکھانے سے بڑھ کر اُن پٹھوں کی اصل مضبوطی بن جاتی ہے جو سر کو جسم کے اوپر رکھتے ہیں۔" },
    exerciseType: "Strengthening",
    difficulty: "Intermediate",
    contraction: ["Isometric"],
    mode: "Resisted",
    load: "Resistance band",
    position: "Sitting",
    equipment: ["Resistance band", "Chair"],
    startingPosition: { en: "Sit tall with a band around the back of the head, both ends held out in front at eye level.", ur: "سیدھے بیٹھیں، بینڈ سر کے پیچھے سے گزار کر دونوں سرے آنکھوں کی سطح پر سامنے پکڑیں۔" },
    quickSteps: {
      en: [
        "Loop a band around the back of your head, holding both ends in front.",
        "Slide the chin straight back against the band.",
        "Hold 5 seconds, then release slowly.",
      ],
      ur: [
        "بینڈ سر کے پیچھے سے گزاریں، دونوں سرے سامنے پکڑیں۔",
        "بینڈ کے خلاف ٹھوڑی سیدھی پیچھے کھسکائیں۔",
        "پانچ سیکنڈ رکیں، پھر آہستہ چھوڑ دیں۔",
      ],
    },
    steps: {
      en: [
        "Sit tall with the band around the back of the head, level with the ears.",
        "Hold both ends out in front at eye level so the band is taut.",
        "Slide the chin straight backwards, making a double chin, against the band's pull.",
        "The head must slide back, not tip up or down — hold five seconds.",
      ],
      ur: [
        "سیدھے بیٹھیں، بینڈ سر کے پیچھے کانوں کی سطح پر ہو۔",
        "دونوں سرے آنکھوں کی سطح پر سامنے پکڑیں تاکہ بینڈ تنا رہے۔",
        "بینڈ کی کھنچائی کے خلاف ٹھوڑی سیدھی پیچھے کھسکائیں، دوہری ٹھوڑی بنائیں۔",
        "سر پیچھے کھسکے، اوپر یا نیچے نہ جھکے — پانچ سیکنڈ رکیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "You control the resistance by how far you hold your hands forward.",
        "Backwards, not upwards — tipping the chin up is the usual mistake.",
        "Only add resistance once the plain chin tuck is easy and painless.",
      ],
      ur: [
        "مزاحمت اس بات سے طے ہوتی ہے کہ ہاتھ کتنے آگے رکھتے ہیں۔",
        "پیچھے، اوپر نہیں — ٹھوڑی اوپر اٹھانا عام غلطی ہے۔",
        "سادہ ٹھوڑی اندر کرنا آسان اور بے درد ہو جائے تو ہی مزاحمت شامل کریں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Moving faster as you tire.",
        "Holding the breath during the effort.",
        "Pushing through sharp pain.",
        "Losing the starting position by the last repetition.",
      ],
      ur: [
        "تھکنے پر تیز حرکت کرنا۔",
        "زور لگاتے وقت سانس روکنا۔",
        "تیز درد کے باوجود زور لگانا۔",
        "آخری بار تک شروع والی حالت بگاڑ لینا۔",
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
    frequency: "Daily",
    restBetweenSets: "20 seconds",
    progressions: [],
    regressions: ["chin-tuck"],
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
      rationale: "Resisted cervical retraction strengthens the deep flexors in a postural pattern. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ neck: 6, head: 4, shoulderNear: 90, elbowNear: 40, shoulderFar: 90, elbowFar: 40 }, SEATED), travel: 800, hold: 400, label: "Band round the head" },
        { pose: pose({ neck: -2, head: -2, headSlide: -8, shoulderNear: 90, elbowNear: 30, shoulderFar: 90, elbowFar: 30 }, SEATED), travel: 1000, hold: 900, label: "Slide the chin back" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-CX-022",
    slug: "upper-trap-strengthening",
    name: { en: "Shoulder Blade Lift", ur: "شانے کی ہڈی اوپر اٹھانا" },
    bodyRegion: "Cervical",
    joint: ["Scapulothoracic", "Acromioclavicular"],
    musclesTargeted: ["Upper trapezius", "Levator scapulae", "Serratus anterior"],
    conditions: ["Neck and shoulder pain", "Postural fatigue", "Scapular weakness", "Return to carrying work"],
    purpose: { en: "The muscle everybody stretches is usually weak rather than tight, and strengthening it settles more neck pain than stretching it ever does.", ur: "جس پٹھے کو ہر کوئی کھینچتا ہے وہ عموماً سخت نہیں بلکہ کمزور ہوتا ہے، اور اسے مضبوط کرنے سے گردن کا درد کھینچنے کی نسبت کہیں زیادہ کم ہوتا ہے۔" },
    exerciseType: "Strengthening",
    difficulty: "Intermediate",
    contraction: ["Concentric", "Isometric"],
    mode: "Resisted",
    load: "Free weight",
    position: "Standing",
    equipment: ["Light weight"],
    startingPosition: { en: "Stand tall holding a light weight in one hand, that arm raised out to the side at about forty-five degrees.", ur: "سیدھے کھڑے ہوں، ایک ہاتھ میں ہلکا وزن، وہ بازو پہلو میں تقریباً پینتالیس درجے پر اٹھا ہوا۔" },
    quickSteps: {
      en: [
        "Hold a light weight with the arm out at forty-five degrees.",
        "Lift the shoulder blade up and out towards the ear.",
        "Hold 3 seconds, then lower slowly.",
      ],
      ur: [
        "بازو پینتالیس درجے پر رکھ کر ہلکا وزن پکڑیں۔",
        "شانے کی ہڈی اوپر اور کان کی طرف اٹھائیں۔",
        "تین سیکنڈ رکیں، پھر آہستہ نیچے لائیں۔",
      ],
    },
    steps: {
      en: [
        "Stand tall and raise one arm out to the side at about forty-five degrees, thumb up.",
        "Hold a light weight or a water bottle in that hand.",
        "Without bending the elbow, lift the whole shoulder blade upwards and outwards.",
        "Hold three seconds at the top, then lower slowly and fully.",
      ],
      ur: [
        "سیدھے کھڑے ہوں اور ایک بازو پہلو میں تقریباً پینتالیس درجے پر اٹھائیں، انگوٹھا اوپر۔",
        "اُس ہاتھ میں ہلکا وزن یا پانی کی بوتل پکڑیں۔",
        "کہنی موڑے بغیر پوری شانے کی ہڈی اوپر اور باہر کی طرف اٹھائیں۔",
        "اوپر تین سیکنڈ رکیں، پھر آہستہ اور پوری طرح نیچے لائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Up and out towards the ear, not straight up like a shrug.",
        "Start with no weight at all until the movement is clear.",
        "A stiff, aching upper trapezius is far more often weak than tight.",
      ],
      ur: [
        "اوپر اور کان کی طرف باہر، سیدھا اوپر شرگ کی طرح نہیں۔",
        "حرکت صاف سمجھ آنے تک بالکل بغیر وزن شروع کریں۔",
        "اکڑا اور دُکھتا اوپری ٹریپیزیس سخت سے کہیں زیادہ اکثر کمزور ہوتا ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Moving faster as you tire.",
        "Holding the breath during the effort.",
        "Pushing through sharp pain.",
        "Losing the starting position by the last repetition.",
      ],
      ur: [
        "تھکنے پر تیز حرکت کرنا۔",
        "زور لگاتے وقت سانس روکنا۔",
        "تیز درد کے باوجود زور لگانا۔",
        "آخری بار تک شروع والی حالت بگاڑ لینا۔",
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
    repetitions: "10–12 each side",
    sets: "3",
    holdTime: "3 seconds",
    frequency: "Every other day",
    restBetweenSets: "45 seconds",
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
      rationale: "Loaded scapular elevation strengthens upper trapezius in its functional role. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ shoulderNear: 92, shoulderAbductNear: 44, elbowNear: 6 }, STAND), travel: 800, hold: 400, label: "Arm out at forty-five degrees" },
        { pose: pose({ shoulderNear: 82, shoulderAbductNear: 44, elbowNear: 6, thorax: -2 }, STAND), travel: 1000, hold: 900, label: "Lift the shoulder blade up and out" },
      ],
      props: [{ kind: "dumbbells" }],
    },
  },
  {
    id: "EX-L-022",
    slug: "lumbar-side-glide",
    name: { en: "Side Glide against a Wall", ur: "دیوار کے سہارے کولہا ایک طرف کھسکانا" },
    bodyRegion: "Lumbar",
    joint: ["Lumbar spine L1–L5"],
    musclesTargeted: ["Quadratus lumborum", "Obliques", "Erector spinae"],
    conditions: ["Acute low back pain", "Sciatica recovery", "Lateral shift", "Disc-related low back pain"],
    purpose: { en: "For a back that has locked to one side, this pushes the trunk back towards the middle — often the movement that unlocks it.", ur: "جو کمر ایک طرف جام ہو جائے، یہ دھڑ کو واپس درمیان کی طرف دھکیلتی ہے — اکثر یہی حرکت اسے کھول دیتی ہے۔" },
    exerciseType: "Range of motion",
    difficulty: "Intermediate",
    contraction: ["Concentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["Wall"],
    startingPosition: { en: "Stand side-on to a wall with the shoulder of the shifted side against it, elbow bent.", ur: "دیوار کے پہلو میں کھڑے ہوں، جھکی ہوئی طرف کا کندھا دیوار سے لگا اور کہنی مڑی۔" },
    quickSteps: {
      en: [
        "Stand side-on to a wall, shoulder against it.",
        "Push the hips sideways towards the wall.",
        "Hold 2 seconds, then return.",
      ],
      ur: [
        "دیوار کے پہلو میں کھڑے ہوں، کندھا دیوار سے لگا۔",
        "کولہے دیوار کی طرف پہلو میں دھکیلیں۔",
        "دو سیکنڈ رکیں، پھر واپس آئیں۔",
      ],
    },
    steps: {
      en: [
        "Stand about a foot from a wall with one shoulder resting against it, elbow bent by your side.",
        "Keep the feet together and the shoulders level.",
        "Push the hips sideways in towards the wall, keeping the trunk upright.",
        "Hold for two seconds, then let them come back out, and repeat.",
      ],
      ur: [
        "دیوار سے تقریباً ایک فٹ دور کھڑے ہوں، ایک کندھا اُس سے لگا اور کہنی پہلو میں مڑی۔",
        "پاؤں ملے اور کندھے برابر رکھیں۔",
        "کولہے پہلو میں دیوار کی طرف دھکیلیں، دھڑ سیدھا رکھیں۔",
        "دو سیکنڈ رکیں، پھر واپس آنے دیں اور دہرائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Which side to stand against depends on which way your back has shifted; ask your physiotherapist.",
        "Leg pain that moves up towards the back is a good sign; further down is not.",
        "Correcting the shift usually comes before any extension exercises.",
      ],
      ur: [
        "کس طرف کھڑے ہونا ہے یہ اس پر منحصر ہے کہ کمر کس طرف جھکی ہے؛ فزیو تھراپسٹ سے پوچھیں۔",
        "ٹانگ کا درد اوپر کمر کی طرف آئے تو اچھی علامت ہے؛ مزید نیچے جائے تو نہیں۔",
        "جھکاؤ درست کرنا عموماً پیچھے موڑنے والی ورزشوں سے پہلے آتا ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Moving faster as you tire.",
        "Holding the breath during the effort.",
        "Pushing through sharp pain.",
        "Losing the starting position by the last repetition.",
      ],
      ur: [
        "تھکنے پر تیز حرکت کرنا۔",
        "زور لگاتے وقت سانس روکنا۔",
        "تیز درد کے باوجود زور لگانا۔",
        "آخری بار تک شروع والی حالت بگاڑ لینا۔",
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
    frequency: "Every 2 hours while symptoms persist",
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
      rationale: "Lateral shift correction is a standard step in directional preference management. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ shoulderNear: 150, elbowNear: 100 }, STAND), travel: 800, hold: 400, label: "Shoulder against the wall" },
        { pose: pose({ shoulderNear: 150, elbowNear: 100, hipRotNear: -20, lumbar: -4 }, STAND), travel: 1000, hold: 900, label: "Push the hips towards the wall" },
      ],
      props: [{ kind: "wall" }],
    },
  },
  {
    id: "EX-L-023",
    slug: "prone-double-leg-lift",
    name: { en: "Lifting Both Legs Face Down", ur: "اوندھے لیٹ کر دونوں ٹانگیں اٹھانا" },
    bodyRegion: "Lumbar",
    joint: ["Lumbar spine L1–L5", "Hip"],
    musclesTargeted: ["Erector spinae", "Gluteus maximus", "Multifidus", "Hamstrings"],
    conditions: ["Low back weakness", "Postural fatigue", "Return to manual work", "Gluteal weakness"],
    purpose: { en: "Loads the whole back of the body at once, and is the natural progression once single leg lifts are easy.", ur: "پورے جسم کے پچھلے حصے پر ایک ساتھ بوجھ ڈالتی ہے، اور ایک ٹانگ اٹھانا آسان ہو جائے تو یہی قدرتی اگلا قدم ہے۔" },
    exerciseType: "Strengthening",
    difficulty: "Intermediate",
    contraction: ["Concentric", "Isometric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Prone",
    equipment: ["Exercise mat", "Pillow"],
    startingPosition: { en: "Lie face down with a pillow under the stomach and both arms folded under the forehead.", ur: "اوندھے لیٹ جائیں، پیٹ کے نیچے تکیہ اور دونوں بازو پیشانی کے نیچے۔" },
    quickSteps: {
      en: [
        "Lie face down with a pillow under the stomach.",
        "Lift both legs a few inches off the floor.",
        "Hold 5 seconds, then lower slowly.",
      ],
      ur: [
        "پیٹ کے نیچے تکیہ رکھ کر اوندھے لیٹیں۔",
        "دونوں ٹانگیں چند انچ فرش سے اٹھائیں۔",
        "پانچ سیکنڈ رکیں، پھر آہستہ نیچے لائیں۔",
      ],
    },
    steps: {
      en: [
        "Lie face down with a pillow under the stomach to protect the low back.",
        "Tighten the lower stomach gently before you lift.",
        "Lift both legs together a few inches off the floor, keeping the knees straight.",
        "Hold for five seconds without arching further, then lower slowly.",
      ],
      ur: [
        "اوندھے لیٹ جائیں، کمر کی حفاظت کے لیے پیٹ کے نیچے تکیہ رکھیں۔",
        "اٹھانے سے پہلے پیٹ کا نچلا حصہ ہلکا سخت کریں۔",
        "دونوں ٹانگیں ایک ساتھ چند انچ فرش سے اٹھائیں، گھٹنے سیدھے رکھیں۔",
        "مزید محراب بنائے بغیر پانچ سیکنڈ رکیں، پھر آہستہ نیچے لائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "A few inches is the whole movement; lifting higher just arches the back.",
        "The pillow under the stomach is what keeps this off the joints.",
        "Master single leg lifts for ten each side before doing both together.",
      ],
      ur: [
        "چند انچ ہی پوری حرکت ہے؛ زیادہ اٹھانے سے صرف کمر محراب بنتی ہے۔",
        "پیٹ کے نیچے تکیہ ہی اسے جوڑوں سے بچاتا ہے۔",
        "دونوں ٹانگیں ایک ساتھ کرنے سے پہلے ہر طرف دس بار ایک ٹانگ اٹھانا سیکھ لیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Moving faster as you tire.",
        "Holding the breath during the effort.",
        "Pushing through sharp pain.",
        "Losing the starting position by the last repetition.",
      ],
      ur: [
        "تھکنے پر تیز حرکت کرنا۔",
        "زور لگاتے وقت سانس روکنا۔",
        "تیز درد کے باوجود زور لگانا۔",
        "آخری بار تک شروع والی حالت بگاڑ لینا۔",
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
    repetitions: "8–10",
    sets: "3",
    holdTime: "5 seconds",
    frequency: "Every other day",
    restBetweenSets: "45 seconds",
    progressions: [],
    regressions: ["prone-hip-extension"],
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
      rationale: "Prone bilateral leg lifting is a standard extensor strengthening progression. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ hipNear: 0, kneeNear: 2, hipFar: 0, kneeFar: 2 }, PRONE), travel: 800, hold: 400, label: "Lying face down" },
        { pose: pose({ hipNear: -18, kneeNear: 2, hipFar: -18, kneeFar: 2 }, PRONE), travel: 1000, hold: 900, label: "Lift both legs a few inches" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-CO-021",
    slug: "standing-core-brace-carry",
    name: { en: "Carrying a Weight on One Side", ur: "ایک طرف وزن اٹھا کر چلنا" },
    bodyRegion: "Core",
    joint: ["Lumbar spine L1–L5", "Hip", "Scapulothoracic"],
    musclesTargeted: ["Obliques", "Quadratus lumborum", "Gluteus medius", "Upper trapezius"],
    conditions: ["Core weakness", "Return to manual work", "Low back pain", "Lateral trunk weakness"],
    purpose: { en: "Carrying a load on one side is what a trunk actually has to resist all day — a bucket, a bag, a child. Practising it is more useful than any sit-up.", ur: "ایک طرف بوجھ اٹھانا وہی ہے جس کے خلاف دھڑ کو سارا دن کام کرنا پڑتا ہے — بالٹی، تھیلا، بچہ۔ اس کی مشق کسی بھی سِٹ اپ سے زیادہ مفید ہے۔" },
    exerciseType: "Functional & gait",
    difficulty: "Intermediate",
    contraction: ["Isometric"],
    mode: "Resisted",
    load: "Free weight",
    position: "Standing",
    equipment: ["A weight, bucket or bag"],
    startingPosition: { en: "Stand tall holding a weight in one hand, arm straight down at your side.", ur: "سیدھے کھڑے ہوں، ایک ہاتھ میں وزن، بازو پہلو میں سیدھا نیچے۔" },
    quickSteps: {
      en: [
        "Hold a weight in one hand at your side.",
        "Stand tall and walk without leaning to either side.",
        "Walk twenty steps, then swap hands.",
      ],
      ur: [
        "ایک ہاتھ میں وزن پہلو میں پکڑیں۔",
        "سیدھے کھڑے ہو کر چلیں، کسی طرف نہ جھکیں۔",
        "بیس قدم چلیں، پھر ہاتھ بدلیں۔",
      ],
    },
    steps: {
      en: [
        "Pick up a weight, a bucket or a loaded bag in one hand.",
        "Stand tall, shoulders level, and brace the stomach gently.",
        "Walk twenty steps keeping both shoulders level and the trunk upright.",
        "Put it down, rest, then carry the same load in the other hand.",
      ],
      ur: [
        "ایک ہاتھ میں وزن، بالٹی یا بھرا تھیلا اٹھائیں۔",
        "سیدھے کھڑے ہوں، کندھے برابر اور پیٹ ہلکا سخت۔",
        "بیس قدم چلیں، دونوں کندھے برابر اور دھڑ سیدھا رکھیں۔",
        "رکھ دیں، آرام کریں، پھر وہی وزن دوسرے ہاتھ میں اٹھائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Leaning away from the weight is the fault; the trunk should hold you level.",
        "Carry the same weight both sides even if one feels much harder.",
        "This is worth more than any abdominal exercise for someone who lifts at work.",
      ],
      ur: [
        "وزن سے مخالف طرف جھکنا غلطی ہے؛ دھڑ کو آپ کو برابر رکھنا چاہیے۔",
        "دونوں طرف ایک ہی وزن اٹھائیں چاہے ایک طرف زیادہ مشکل لگے۔",
        "کام پر وزن اٹھانے والے کے لیے یہ پیٹ کی کسی بھی ورزش سے زیادہ قیمتی ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Moving faster as you tire.",
        "Holding the breath during the effort.",
        "Pushing through sharp pain.",
        "Losing the starting position by the last repetition.",
      ],
      ur: [
        "تھکنے پر تیز حرکت کرنا۔",
        "زور لگاتے وقت سانس روکنا۔",
        "تیز درد کے باوجود زور لگانا۔",
        "آخری بار تک شروع والی حالت بگاڑ لینا۔",
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
    repetitions: "20 steps each side",
    sets: "3",
    holdTime: "—",
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
      rationale: "Loaded carries train anti-lateral-flexion trunk control in a functional pattern. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ shoulderNear: 176, elbowNear: 6 }, STAND), travel: 800, hold: 400, label: "Weight held at one side" },
        { pose: pose({ shoulderNear: 178, elbowNear: 4, hipNear: 24, kneeNear: 14, hipFar: -14 }, STAND), travel: 1000, hold: 900, label: "Walk without leaning" },
      ],
      props: [{ kind: "dumbbells" }],
    },
  },
  {
    id: "EX-CO-022",
    slug: "general-warm-up-routine",
    name: { en: "Five-Minute Warm Up", ur: "پانچ منٹ کا وارم اپ" },
    bodyRegion: "Core",
    joint: ["Hip", "Thoracic spine T1–T12", "Glenohumeral", "Talocrural"],
    musclesTargeted: ["Gluteus maximus", "Quadriceps femoris", "Deltoid", "Erector spinae"],
    conditions: ["Warm-up before exercise", "Deconditioning", "General conditioning", "Return to sport"],
    purpose: { en: "What to do before the exercises rather than instead of them: five minutes that raises the pulse, moves every joint, and halves how stiff the first set feels.", ur: "ورزشوں سے پہلے کیا کریں، اُن کی جگہ نہیں: پانچ منٹ جو نبض بڑھاتے ہیں، ہر جوڑ کو حرکت دیتے ہیں، اور پہلے سیٹ کی اکڑن آدھی کر دیتے ہیں۔" },
    exerciseType: "Functional & gait",
    difficulty: "Beginner",
    contraction: ["Concentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["Support within reach"],
    startingPosition: { en: "Stand tall in a clear space with the feet hip-width apart.", ur: "کھلی جگہ میں سیدھے کھڑے ہوں، پاؤں کولہوں کے برابر فاصلے پر۔" },
    quickSteps: {
      en: [
        "March on the spot for one minute.",
        "Then do ten each of shoulder circles, trunk turns and mini squats.",
        "Finish with ten heel raises and ten arm swings.",
      ],
      ur: [
        "ایک منٹ ایک جگہ قدم اٹھائیں۔",
        "پھر کندھے گھمانا، دھڑ گھمانا اور چھوٹی اسکواٹ، ہر ایک دس بار۔",
        "آخر میں دس بار ایڑی اٹھانا اور دس بار بازو جھلانا۔",
      ],
    },
    steps: {
      en: [
        "Start by marching on the spot for a full minute, swinging the arms.",
        "Do ten shoulder circles backwards and ten trunk turns each way.",
        "Do ten mini squats, only a quarter of the way down.",
        "Finish with ten heel raises and ten big arm swings, then start your programme.",
      ],
      ur: [
        "ایک پورا منٹ ایک جگہ قدم اٹھائیں، بازو جھلاتے ہوئے۔",
        "دس بار کندھے پیچھے گھمائیں اور ہر طرف دس بار دھڑ گھمائیں۔",
        "دس چھوٹی اسکواٹ کریں، صرف چوتھائی نیچے تک۔",
        "آخر میں دس بار ایڑی اٹھائیں اور دس بڑے بازو جھولے، پھر اپنا پروگرام شروع کریں۔",
      ],
    },
    specialInstructions: {
      en: [
        "The point is to raise the pulse and move every joint, not to tire yourself.",
        "Do this before strengthening, not before stretching a cold muscle.",
        "If you can still talk easily at the end, you have it about right.",
      ],
      ur: [
        "مقصد نبض بڑھانا اور ہر جوڑ کو حرکت دینا ہے، خود کو تھکانا نہیں۔",
        "یہ مضبوطی کی ورزشوں سے پہلے کریں، ٹھنڈے پٹھے کے کھنچاؤ سے پہلے نہیں۔",
        "آخر میں آسانی سے بات کر سکیں تو سمجھیں ٹھیک کیا۔",
      ],
    },
    commonMistakes: {
      en: [
        "Moving faster as you tire.",
        "Holding the breath during the effort.",
        "Pushing through sharp pain.",
        "Losing the starting position by the last repetition.",
      ],
      ur: [
        "تھکنے پر تیز حرکت کرنا۔",
        "زور لگاتے وقت سانس روکنا۔",
        "تیز درد کے باوجود زور لگانا۔",
        "آخری بار تک شروع والی حالت بگاڑ لینا۔",
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
    repetitions: "1 round",
    sets: "1",
    holdTime: "—",
    frequency: "Before every session",
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
      rationale: "Structured warm-up is standard practice before loaded exercise. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: STAND, travel: 800, hold: 400, label: "Standing ready" },
        { pose: pose({ hipNear: 80, kneeNear: 86, shoulderFar: 130, elbowFar: 40 }, STAND), travel: 1000, hold: 900, label: "March, circle, turn, squat" },
      ],
    },
  },
];
