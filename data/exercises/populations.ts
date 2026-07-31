import { pose } from "@/lib/figure";
import type { Exercise } from "../schema";
import { PRONE, QUADRUPED, SEATED, SIDE_LYING, STAND, SUPINE, SUPINE_LONG } from "./bases";

/* ==========================================================================
   PREGNANCY, NEUROLOGICAL REHABILITATION AND EVERYDAY WORK
   --------------------------------------------------------------------------
   Exercises written for a particular person rather than a particular joint:
   what is safe in late pregnancy and after childbirth, what is worth doing
   after a stroke or with Parkinson's, and the sixty-second routines for the
   people who sit or drive all day.
   Drafts pending clinical review.
   ========================================================================== */

export const POPULATIONS: Exercise[] = [
  {
    id: "EX-L-016",
    slug: "pregnancy-pelvic-tilt",
    name: { en: "Pelvic Tilt in Pregnancy", ur: "حمل میں پیڑو کی حرکت" },
    bodyRegion: "Lumbar",
    joint: ["Lumbar spine L1–L5", "Sacroiliac"],
    musclesTargeted: ["Transversus abdominis", "Erector spinae", "Gluteus maximus"],
    conditions: ["Pregnancy-related low back pain", "Pelvic girdle pain", "Postural strain", "Third trimester discomfort"],
    purpose: { en: "The safest and most useful back exercise in pregnancy: it eases the ache that comes from the growing weight in front, and can be done to the very end.", ur: "حمل میں کمر کی سب سے محفوظ اور مفید ورزش: یہ سامنے بڑھتے وزن سے ہونے والا درد کم کرتی ہے اور آخر تک کی جا سکتی ہے۔" },
    exerciseType: "Range of motion",
    difficulty: "Beginner",
    contraction: ["Concentric", "Isometric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Quadruped",
    equipment: ["Exercise mat"],
    startingPosition: { en: "Kneel on all fours with the hands under the shoulders, knees under the hips and the back flat.", ur: "چاروں ہاتھ پاؤں پر آئیں، ہاتھ کندھوں کے نیچے، گھٹنے کولہوں کے نیچے اور کمر سیدھی۔" },
    quickSteps: {
      en: [
        "Kneel on all fours with a flat back.",
        "Tuck the tailbone under and round the low back gently.",
        "Return to flat — do not let the back sag downwards.",
      ],
      ur: [
        "چاروں ہاتھ پاؤں پر آئیں، کمر سیدھی۔",
        "دُم کی ہڈی اندر کریں اور کمر نرمی سے گول کریں۔",
        "سیدھی حالت پر واپس آئیں — کمر کو نیچے جھکنے نہ دیں۔",
      ],
    },
    steps: {
      en: [
        "Kneel on all fours with the knees a little wider than usual to make room.",
        "Start with the back flat and level.",
        "Breathe out, tuck the tailbone under and let the low back round gently upwards.",
        "Hold for three seconds, feeling the lower stomach draw in.",
        "Return to flat, and stop there — do not let the back sag down.",
      ],
      ur: [
        "چاروں ہاتھ پاؤں پر آئیں، گھٹنے معمول سے تھوڑے کھلے رکھیں تاکہ جگہ بنے۔",
        "کمر سیدھی اور برابر رکھ کر شروع کریں۔",
        "سانس چھوڑیں، دُم کی ہڈی اندر کریں اور کمر نرمی سے اوپر کی طرف گول کریں۔",
        "تین سیکنڈ رکیں، پیٹ کا نچلا حصہ اندر کھنچتا محسوس کریں۔",
        "سیدھی حالت پر واپس آئیں اور وہیں رکیں — کمر نیچے نہ جھکنے دیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Do not arch the back downwards in pregnancy; the abdominal wall is already stretched.",
        "All fours is a good position generally in late pregnancy — it takes the weight off the back.",
        "Stop and seek advice if you feel any tightening of the womb.",
      ],
      ur: [
        "حمل میں کمر نیچے کی طرف محراب نہ بنائیں؛ پیٹ کی دیوار پہلے ہی کھنچی ہوئی ہے۔",
        "حمل کے آخری مہینوں میں چاروں ہاتھ پاؤں کی حالت عموماً اچھی ہے — اس سے کمر کا بوجھ ہٹ جاتا ہے۔",
        "بچہ دانی میں کھنچاؤ محسوس ہو تو رک جائیں اور مشورہ لیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Going faster as you tire.",
        "Holding the breath during the effort.",
        "Doing a week's worth in one day.",
        "Pushing on through sharp pain.",
      ],
      ur: [
        "تھکنے پر تیز ہو جانا۔",
        "زور لگاتے وقت سانس روکنا۔",
        "ہفتے بھر کا کام ایک دن میں کر لینا۔",
        "تیز درد کے باوجود جاری رکھنا۔",
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
    sets: "2",
    holdTime: "3 seconds",
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
      rationale: "Pelvic tilting in four-point kneeling is standard for pregnancy-related back pain. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ lumbar: 0 }, QUADRUPED), travel: 800, hold: 400, label: "All fours, back flat" },
        { pose: pose({ lumbar: 16, pelvisTilt: -12 }, QUADRUPED), travel: 1000, hold: 900, label: "Tuck the tailbone and round the back" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-CO-015",
    slug: "postnatal-abdominal-recovery",
    name: { en: "Restarting the Abdominals after Birth", ur: "بچے کی پیدائش کے بعد پیٹ کے پٹھوں کی بحالی" },
    bodyRegion: "Core",
    joint: ["Lumbar spine L1–L5"],
    musclesTargeted: ["Transversus abdominis", "Pelvic floor", "Rectus abdominis"],
    conditions: ["Post-partum recovery", "Abdominal separation", "Post-partum low back pain", "Core weakness"],
    purpose: { en: "The first abdominal exercise after childbirth, and the only one that is safe while the two halves of the stomach muscle are still separated.", ur: "بچے کی پیدائش کے بعد پیٹ کی پہلی ورزش، اور واحد جو پیٹ کے پٹھے کے دونوں حصے الگ ہونے کی حالت میں محفوظ ہے۔" },
    exerciseType: "Stabilisation & motor control",
    difficulty: "Beginner",
    contraction: ["Isometric"],
    mode: "Active",
    load: "No load",
    position: "Supine",
    equipment: ["Exercise mat"],
    startingPosition: { en: "Lie on your back with the knees bent, feet flat, and one hand resting on the lower stomach.", ur: "سیدھے لیٹ جائیں، گھٹنے مڑے، پاؤں فرش پر اور ایک ہاتھ پیٹ کے نچلے حصے پر۔" },
    quickSteps: {
      en: [
        "Lie on your back with the knees bent.",
        "Breathe out and draw the lower stomach in gently.",
        "Hold 10 seconds while breathing normally.",
      ],
      ur: [
        "سیدھے لیٹ جائیں، گھٹنے مڑے۔",
        "سانس چھوڑیں اور پیٹ کا نچلا حصہ نرمی سے اندر کھینچیں۔",
        "عام سانس لیتے ہوئے دس سیکنڈ رکیں۔",
      ],
    },
    steps: {
      en: [
        "Lie on your back with the knees bent and the low back in its natural position.",
        "Breathe out fully, then draw the lower stomach gently inwards and upwards.",
        "At the same time squeeze the pelvic floor, as the two work together.",
        "Keep the effort light — about two out of ten — and keep breathing.",
        "Hold ten seconds, then let go completely.",
      ],
      ur: [
        "سیدھے لیٹ جائیں، گھٹنے مڑے اور کمر اپنی قدرتی حالت میں۔",
        "پوری سانس چھوڑیں، پھر پیٹ کا نچلا حصہ نرمی سے اندر اور اوپر کھینچیں۔",
        "ساتھ ہی پیڑو کے نچلے پٹھے بھی دبائیں، دونوں مل کر کام کرتے ہیں۔",
        "زور ہلکا رکھیں — دس میں سے تقریباً دو — اور سانس لیتے رہیں۔",
        "دس سیکنڈ رکیں، پھر پوری طرح چھوڑ دیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Do not do sit-ups or crunches until the gap between the stomach muscles has closed.",
        "Check the gap: lift the head slightly and feel above and below the navel for a soft channel.",
        "This can be started within days of a normal birth, and after clearance following a caesarean.",
      ],
      ur: [
        "جب تک پیٹ کے پٹھوں کا فاصلہ بند نہ ہو، سِٹ اپ یا کرنچ نہ کریں۔",
        "فاصلہ جانچیں: سر ذرا اٹھا کر ناف کے اوپر اور نیچے نرم خلا محسوس کریں۔",
        "عام پیدائش کے چند دن بعد شروع کی جا سکتی ہے، اور آپریشن کی صورت میں اجازت کے بعد۔",
      ],
    },
    commonMistakes: {
      en: [
        "Going faster as you tire.",
        "Holding the breath during the effort.",
        "Doing a week's worth in one day.",
        "Pushing on through sharp pain.",
      ],
      ur: [
        "تھکنے پر تیز ہو جانا۔",
        "زور لگاتے وقت سانس روکنا۔",
        "ہفتے بھر کا کام ایک دن میں کر لینا۔",
        "تیز درد کے باوجود جاری رکھنا۔",
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
    frequency: "2–3 times daily",
    restBetweenSets: "30 seconds",
    progressions: ["transversus-abdominis-supine"],
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
      rationale: "Deep abdominal retraining is standard first-line post-partum core rehabilitation. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ shoulderNear: 160, elbowNear: 70 }, SUPINE), travel: 800, hold: 400, label: "Lying with a hand on the stomach" },
        { pose: pose({ shoulderNear: 158, elbowNear: 74, lumbar: 3 }, SUPINE), travel: 1000, hold: 900, label: "Draw the lower stomach in" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-H-040",
    slug: "pregnancy-side-lying-rest",
    name: { en: "Supported Side-Lying Rest", ur: "سہارے کے ساتھ پہلو پر آرام" },
    bodyRegion: "Pelvis & Hip",
    joint: ["Hip", "Sacroiliac", "Lumbar spine L1–L5"],
    musclesTargeted: ["Gluteus medius", "Piriformis", "Quadratus lumborum"],
    conditions: ["Pelvic girdle pain", "Pregnancy-related low back pain", "Hip pain at night", "Third trimester discomfort"],
    purpose: { en: "A position rather than an exercise: how to lie so the pelvis stays level and the hip stops aching through the night.", ur: "یہ ورزش کم اور حالت زیادہ ہے: کیسے لیٹا جائے کہ پیڑو برابر رہے اور رات بھر کولہا نہ دُکھے۔" },
    exerciseType: "Stretching",
    difficulty: "Beginner",
    contraction: ["Passive"],
    mode: "Passive",
    load: "No load",
    position: "Side-lying",
    equipment: ["Two pillows"],
    startingPosition: { en: "Lie on your side with one pillow between the knees and another supporting the bump.", ur: "پہلو پر لیٹ جائیں، ایک تکیہ گھٹنوں کے درمیان اور دوسرا پیٹ کے نیچے سہارے کے لیے۔" },
    quickSteps: {
      en: [
        "Lie on your side with a pillow between the knees.",
        "Put a second pillow under the bump.",
        "Keep the top hip stacked directly over the bottom one.",
      ],
      ur: [
        "پہلو پر لیٹیں، گھٹنوں کے درمیان تکیہ رکھیں۔",
        "دوسرا تکیہ پیٹ کے نیچے رکھیں۔",
        "اوپر والا کولہا بالکل نیچے والے کے اوپر رکھیں۔",
      ],
    },
    steps: {
      en: [
        "Lie on your side, preferably the left in later pregnancy.",
        "Place a firm pillow between the knees, thick enough to keep the thighs parallel.",
        "Tuck a second pillow under the bump so the abdomen is supported.",
        "Check that the top hip is stacked directly over the bottom one, not rolled forward.",
        "Bend the lower leg a little for stability and settle.",
      ],
      ur: [
        "پہلو پر لیٹ جائیں، حمل کے آخری مہینوں میں ترجیحاً بائیں طرف۔",
        "گھٹنوں کے درمیان مضبوط تکیہ رکھیں، اتنا موٹا کہ رانیں متوازی رہیں۔",
        "دوسرا تکیہ پیٹ کے نیچے رکھیں تاکہ سہارا ملے۔",
        "دیکھیں کہ اوپر والا کولہا بالکل نیچے والے کے اوپر ہو، آگے لڑھکا ہوا نہ ہو۔",
        "استحکام کے لیے نیچے والی ٹانگ تھوڑی موڑ لیں اور آرام کریں۔",
      ],
    },
    specialInstructions: {
      en: [
        "The pillow between the knees is what stops the top hip dragging the pelvis round.",
        "A rolled towel at the waist helps if the bed dips.",
        "Turn over using the log roll, keeping the knees together.",
      ],
      ur: [
        "گھٹنوں کے درمیان تکیہ ہی اوپر والے کولہے کو پیڑو گھمانے سے روکتا ہے۔",
        "بستر دھنسے تو کمر کے پاس لپٹا تولیہ رکھنے سے مدد ملتی ہے۔",
        "کروٹ لیتے وقت گھٹنے ملا کر پورا جسم ایک ساتھ گھمائیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting the top hip roll forwards.",
        "Using a pillow too thin to keep the thighs level.",
        "Twisting to turn over.",
        "Lying flat on the back in late pregnancy.",
      ],
      ur: [
        "اوپر والے کولہے کا آگے لڑھک جانا۔",
        "اتنا پتلا تکیہ لینا کہ رانیں برابر نہ رہیں۔",
        "کروٹ لیتے وقت مڑ جانا۔",
        "حمل کے آخری مہینوں میں سیدھا کمر کے بل لیٹنا۔",
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
    repetitions: "As needed",
    sets: "1",
    holdTime: "—",
    frequency: "Whenever resting or sleeping",
    restBetweenSets: "—",
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
      rationale: "Supported side-lying positioning is standard advice in pelvic girdle pain. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: SIDE_LYING, travel: 800, hold: 400, label: "Lying on the side" },
        { pose: pose({ hipNear: 46, kneeNear: 84, hipFar: 34, kneeFar: 80, hipRotNear: 4 }, SIDE_LYING), travel: 1000, hold: 900, label: "Pillow between the knees" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-H-041",
    slug: "bridging-post-stroke",
    name: { en: "Bridging for Bed Mobility", ur: "بستر میں حرکت کے لیے کولہے اٹھانا" },
    bodyRegion: "Pelvis & Hip",
    joint: ["Hip", "Lumbar spine L1–L5"],
    musclesTargeted: ["Gluteus maximus", "Hamstrings", "Erector spinae", "Transversus abdominis"],
    conditions: ["Post-stroke rehabilitation", "Bed rest deconditioning", "Pressure area care", "Reduced bed mobility"],
    purpose: { en: "Lifting the hips is what lets someone move up the bed, get a bedpan underneath, or have their clothes changed without being lifted.", ur: "کولہے اٹھانا ہی وہ حرکت ہے جس سے آدمی بستر پر اوپر کھسک سکے، نیچے برتن رکھوا سکے، یا بغیر اٹھائے کپڑے بدلوا سکے۔" },
    exerciseType: "Functional & gait",
    difficulty: "Beginner",
    contraction: ["Concentric", "Isometric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Supine",
    equipment: ["Bed or exercise mat"],
    startingPosition: { en: "Lie on your back with both knees bent and the feet flat, close to the buttocks.", ur: "سیدھے لیٹ جائیں، دونوں گھٹنے مڑے اور پاؤں کولہوں کے قریب فرش پر۔" },
    quickSteps: {
      en: [
        "Lie on your back with both knees bent, feet flat.",
        "Press through the feet and lift the hips clear.",
        "Hold 3 seconds, then lower with control.",
      ],
      ur: [
        "سیدھے لیٹ جائیں، دونوں گھٹنے مڑے، پاؤں فرش پر۔",
        "پاؤں سے زور لگا کر کولہے اٹھائیں۔",
        "تین سیکنڈ رکیں، پھر قابو سے نیچے لائیں۔",
      ],
    },
    steps: {
      en: [
        "Lie on your back with both knees bent and the feet drawn in close.",
        "If one leg is weak, help it into position with your hands first.",
        "Press evenly through both feet and lift the hips off the bed.",
        "Try to keep the weight even — the weaker side tends to lag.",
        "Hold for three seconds, then lower slowly rather than dropping.",
      ],
      ur: [
        "سیدھے لیٹ جائیں، دونوں گھٹنے مڑے اور پاؤں قریب کھینچے ہوئے۔",
        "ایک ٹانگ کمزور ہو تو پہلے ہاتھوں سے اسے جگہ پر لے آئیں۔",
        "دونوں پاؤں سے برابر زور لگا کر کولہے بستر سے اٹھائیں۔",
        "وزن برابر رکھنے کی کوشش کریں — کمزور طرف پیچھے رہ جاتی ہے۔",
        "تین سیکنڈ رکیں، پھر گرنے کے بجائے آہستہ نیچے لائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "A carer can steady the weaker knee to stop it falling outwards.",
        "This is the exercise that makes daily care possible — it is worth doing well.",
        "Even a small lift is useful; height is not the point.",
      ],
      ur: [
        "کوئی مددگار کمزور گھٹنے کو تھام سکتا ہے تاکہ وہ باہر نہ گرے۔",
        "یہی ورزش روزمرہ دیکھ بھال کو ممکن بناتی ہے — اسے اچھی طرح کرنا فائدہ مند ہے۔",
        "تھوڑا اٹھانا بھی مفید ہے؛ اونچائی مقصد نہیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Going faster as you tire.",
        "Holding the breath during the effort.",
        "Doing a week's worth in one day.",
        "Pushing on through sharp pain.",
      ],
      ur: [
        "تھکنے پر تیز ہو جانا۔",
        "زور لگاتے وقت سانس روکنا۔",
        "ہفتے بھر کا کام ایک دن میں کر لینا۔",
        "تیز درد کے باوجود جاری رکھنا۔",
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
    holdTime: "3 seconds",
    frequency: "2–3 times daily",
    restBetweenSets: "30 seconds",
    progressions: ["glute-bridge"],
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
      rationale: "Bridging is a standard bed mobility and pressure care exercise. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ rootRot: -90, hipNear: 45, kneeNear: 100, hipFar: 42, kneeFar: 98 }, SUPINE), travel: 800, hold: 400, label: "Knees bent, feet flat" },
        { pose: pose({ rootRot: -112, hipNear: 2, kneeNear: 100, hipFar: 2, kneeFar: 100 }, SUPINE), travel: 1000, hold: 900, label: "Lift the hips clear of the bed" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-CO-016",
    slug: "sitting-balance-reach",
    name: { en: "Sitting Balance Reach", ur: "بیٹھ کر توازن کے ساتھ پہنچنا" },
    bodyRegion: "Core",
    joint: ["Lumbar spine L1–L5", "Thoracic spine T1–T12", "Hip"],
    musclesTargeted: ["Obliques", "Erector spinae", "Transversus abdominis", "Gluteus medius"],
    conditions: ["Post-stroke rehabilitation", "Poor sitting balance", "Spinal cord injury rehabilitation", "Deconditioning"],
    purpose: { en: "Before standing balance comes sitting balance. Reaching outside your own base while seated is how it is built and how it is measured.", ur: "کھڑے ہونے کے توازن سے پہلے بیٹھنے کا توازن آتا ہے۔ بیٹھے بیٹھے اپنی بنیاد سے باہر پہنچنا ہی اسے بنانے اور ماپنے کا طریقہ ہے۔" },
    exerciseType: "Balance & proprioception",
    difficulty: "Beginner",
    contraction: ["Concentric", "Isometric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Sitting",
    equipment: ["Firm chair without arms"],
    startingPosition: { en: "Sit tall on a firm chair with both feet flat on the floor and the hands resting on the thighs.", ur: "مضبوط کرسی پر سیدھے بیٹھیں، دونوں پاؤں فرش پر اور ہاتھ رانوں پر۔" },
    quickSteps: {
      en: [
        "Sit tall with both feet flat on the floor.",
        "Reach one hand forward, then out to the side.",
        "Return to the middle between each reach.",
      ],
      ur: [
        "سیدھے بیٹھیں، دونوں پاؤں فرش پر۔",
        "ایک ہاتھ آگے بڑھائیں، پھر پہلو کی طرف۔",
        "ہر بار درمیان میں واپس آئیں۔",
      ],
    },
    steps: {
      en: [
        "Sit well back on a firm chair with both feet flat and the weight even.",
        "Reach one hand forward as far as you can without the feet moving.",
        "Come back to the middle and settle.",
        "Now reach the same hand out to the side, past the edge of the chair.",
        "Return to the middle, then repeat with the other hand.",
      ],
      ur: [
        "مضبوط کرسی پر اچھی طرح پیچھے بیٹھیں، دونوں پاؤں فرش پر اور وزن برابر۔",
        "ایک ہاتھ جتنا آگے بڑھا سکیں بڑھائیں، پاؤں نہ ہلیں۔",
        "درمیان میں واپس آئیں اور مستحکم ہو جائیں۔",
        "اب وہی ہاتھ پہلو کی طرف، کرسی کے کنارے سے آگے بڑھائیں۔",
        "درمیان میں واپس آئیں، پھر دوسرے ہاتھ سے دہرائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Someone should stand on the weaker side for the first few sessions.",
        "How far you can reach without losing balance is the measure to track.",
        "Reaching to the weaker side is usually much harder — do it more.",
      ],
      ur: [
        "پہلی چند بار کسی کو کمزور طرف کھڑا رہنا چاہیے۔",
        "توازن کھوئے بغیر کتنی دور پہنچ سکتے ہیں، یہی ماپنے کی بات ہے۔",
        "کمزور طرف پہنچنا عموماً زیادہ مشکل ہوتا ہے — اسے زیادہ کریں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Going faster as you tire.",
        "Holding the breath during the effort.",
        "Doing a week's worth in one day.",
        "Pushing on through sharp pain.",
      ],
      ur: [
        "تھکنے پر تیز ہو جانا۔",
        "زور لگاتے وقت سانس روکنا۔",
        "ہفتے بھر کا کام ایک دن میں کر لینا۔",
        "تیز درد کے باوجود جاری رکھنا۔",
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
    repetitions: "5 each direction",
    sets: "2",
    holdTime: "1 second",
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
      rationale: "Seated reaching tasks are standard for trunk control and sitting balance. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: SEATED, travel: 800, hold: 400, label: "Sitting tall" },
        { pose: pose({ shoulderNear: 60, elbowNear: 8, shoulderAbductNear: 40, thorax: -4 }, SEATED), travel: 1000, hold: 900, label: "Reach forward and out to the side" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-S-053",
    slug: "large-amplitude-arm-swings",
    name: { en: "Big Arm Swings", ur: "بازوؤں کے بڑے جھولے" },
    bodyRegion: "Shoulder",
    joint: ["Glenohumeral", "Thoracic spine T1–T12", "Scapulothoracic"],
    musclesTargeted: ["Deltoid", "Latissimus dorsi", "Rhomboids", "Thoracic rotators"],
    conditions: ["Parkinson's disease", "Reduced arm swing in gait", "Postural stiffness", "Deconditioning"],
    purpose: { en: "Movements deliberately made bigger than they need to be, because in some conditions the brain's own sense of 'big enough' shrinks over time.", ur: "ایسی حرکتیں جو جان بوجھ کر ضرورت سے بڑی کی جاتی ہیں، کیونکہ بعض بیماریوں میں دماغ کا 'کافی بڑا' کا اندازہ وقت کے ساتھ چھوٹا ہو جاتا ہے۔" },
    exerciseType: "Functional & gait",
    difficulty: "Beginner",
    contraction: ["Concentric"],
    mode: "Active",
    load: "No load",
    position: "Standing",
    equipment: ["Support within reach"],
    startingPosition: { en: "Stand tall with the feet hip-width apart and the arms hanging at your sides.", ur: "سیدھے کھڑے ہوں، پاؤں کولہوں کے برابر فاصلے پر اور بازو پہلوؤں پر لٹکے ہوئے۔" },
    quickSteps: {
      en: [
        "Stand tall with the arms at your sides.",
        "Swing both arms as far forward and back as they will go.",
        "Make every swing deliberately bigger than feels necessary.",
      ],
      ur: [
        "سیدھے کھڑے ہوں، بازو پہلوؤں پر۔",
        "دونوں بازو جہاں تک جائیں آگے پیچھے جھلائیں۔",
        "ہر جھولا جان بوجھ کر ضرورت سے بڑا کریں۔",
      ],
    },
    steps: {
      en: [
        "Stand tall with a worktop within reach and the feet hip-width apart.",
        "Swing both arms forward and up as far as they will comfortably go.",
        "Swing them back down and behind you, again to the full range.",
        "Make each swing bigger than feels necessary — that is the point.",
        "Say 'big' out loud with each swing if it helps keep the size up.",
      ],
      ur: [
        "سیدھے کھڑے ہوں، میز پہنچ میں ہو اور پاؤں کولہوں کے برابر فاصلے پر۔",
        "دونوں بازو آرام کی پوری حد تک آگے اور اوپر جھلائیں۔",
        "پھر نیچے اور پیچھے، دوبارہ پوری حد تک لے جائیں۔",
        "ہر جھولا ضرورت سے بڑا کریں — یہی اصل بات ہے۔",
        "مدد کے لیے ہر جھولے پر بلند آواز میں 'بڑا' کہیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Deliberately over-sized movement is the treatment, not enthusiasm.",
        "Doing it to a count or to music keeps the size up better than counting silently.",
        "Practise the same principle in walking: bigger steps, on purpose.",
      ],
      ur: [
        "جان بوجھ کر بڑی حرکت ہی علاج ہے، صرف جوش نہیں۔",
        "گنتی یا موسیقی کے ساتھ کرنے سے حرکت کا بڑا پن خاموش گنتی سے بہتر رہتا ہے۔",
        "یہی اصول چلنے میں بھی اپنائیں: جان بوجھ کر بڑے قدم۔",
      ],
    },
    commonMistakes: {
      en: [
        "Going faster as you tire.",
        "Holding the breath during the effort.",
        "Doing a week's worth in one day.",
        "Pushing on through sharp pain.",
      ],
      ur: [
        "تھکنے پر تیز ہو جانا۔",
        "زور لگاتے وقت سانس روکنا۔",
        "ہفتے بھر کا کام ایک دن میں کر لینا۔",
        "تیز درد کے باوجود جاری رکھنا۔",
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
    holdTime: "—",
    frequency: "Daily",
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
      rationale: "Large amplitude movement training is used in Parkinson's disease rehabilitation. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ shoulderNear: 200, elbowNear: 6, shoulderFar: 140, elbowFar: 6 }, STAND), travel: 800, hold: 400, label: "Arms swung back" },
        { pose: pose({ shoulderNear: 30, elbowNear: 6, shoulderFar: 200, elbowFar: 6 }, STAND), travel: 1000, hold: 900, label: "Swing them fully forward and up" },
      ],
    },
  },
  {
    id: "EX-S-054",
    slug: "weight-bearing-through-arm",
    name: { en: "Leaning through the Weaker Arm", ur: "کمزور بازو پر وزن ڈالنا" },
    bodyRegion: "Shoulder",
    joint: ["Glenohumeral", "Scapulothoracic", "Radiocarpal"],
    musclesTargeted: ["Serratus anterior", "Triceps brachii", "Rotator cuff", "Wrist extensors"],
    conditions: ["Post-stroke rehabilitation", "Shoulder subluxation", "Reduced arm use", "Sensory loss in the arm"],
    purpose: { en: "Putting weight through an arm gives it far more information than moving it does, which is why it is used early after a stroke even when the arm cannot move itself.", ur: "بازو پر وزن ڈالنے سے اسے حرکت دینے کی نسبت کہیں زیادہ معلومات ملتی ہیں، اسی لیے فالج کے بعد جلد استعمال کی جاتی ہے، چاہے بازو خود حرکت نہ کر سکے۔" },
    exerciseType: "Stabilisation & motor control",
    difficulty: "Beginner",
    contraction: ["Isometric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Sitting",
    equipment: ["Firm chair", "Table"],
    startingPosition: { en: "Sit tall beside a firm table with the affected hand placed flat on it, elbow straight.", ur: "مضبوط میز کے پاس سیدھے بیٹھیں، متاثرہ ہاتھ میز پر سیدھا رکھیں، کہنی سیدھی۔" },
    quickSteps: {
      en: [
        "Place the affected hand flat on a table, elbow straight.",
        "Lean gently sideways so weight goes through that arm.",
        "Hold 10 seconds, then release.",
      ],
      ur: [
        "متاثرہ ہاتھ میز پر سیدھا رکھیں، کہنی سیدھی۔",
        "نرمی سے پہلو کی طرف جھکیں تاکہ وزن اُس بازو پر آئے۔",
        "دس سیکنڈ رکیں، پھر چھوڑ دیں۔",
      ],
    },
    steps: {
      en: [
        "Sit tall on a firm chair beside a stable table.",
        "Place the affected hand flat on the table, fingers spread, elbow straight.",
        "Use the other hand to position it if it cannot get there itself.",
        "Lean gently towards that side so some of your weight passes down the arm.",
        "Hold for ten seconds, keeping the shoulder from riding up, then come back.",
      ],
      ur: [
        "مضبوط میز کے پاس مضبوط کرسی پر سیدھے بیٹھیں۔",
        "متاثرہ ہاتھ میز پر سیدھا رکھیں، انگلیاں کھلی اور کہنی سیدھی۔",
        "خود نہ پہنچ سکے تو دوسرے ہاتھ سے اسے جگہ پر رکھیں۔",
        "نرمی سے اُس طرف جھکیں تاکہ کچھ وزن بازو سے نیچے جائے۔",
        "دس سیکنڈ رکیں، کندھا اوپر نہ چڑھنے دیں، پھر واپس آئیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Support a subluxed shoulder with the other hand while you lean.",
        "Stop at once if there is pain at the front of the shoulder.",
        "The information the arm gets is the treatment, as much as the muscle work.",
      ],
      ur: [
        "کندھا اُترا ہوا ہو تو جھکتے وقت دوسرے ہاتھ سے سہارا دیں۔",
        "کندھے کے سامنے درد ہو تو فوراً رک جائیں۔",
        "پٹھے کے کام جتنی ہی اہم وہ معلومات ہیں جو بازو کو ملتی ہیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Going faster as you tire.",
        "Holding the breath during the effort.",
        "Doing a week's worth in one day.",
        "Pushing on through sharp pain.",
      ],
      ur: [
        "تھکنے پر تیز ہو جانا۔",
        "زور لگاتے وقت سانس روکنا۔",
        "ہفتے بھر کا کام ایک دن میں کر لینا۔",
        "تیز درد کے باوجود جاری رکھنا۔",
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
    repetitions: "5",
    sets: "3",
    holdTime: "10 seconds",
    frequency: "2–3 times daily",
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
      rationale: "Upper limb weight bearing is standard in stroke rehabilitation for sensory and postural input. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ shoulderNear: 172, elbowNear: 40 }, SEATED), travel: 800, hold: 400, label: "Hand flat on the table" },
        { pose: pose({ shoulderNear: 152, elbowNear: 6, shoulderAbductNear: 34, thorax: 6 }, SEATED), travel: 1000, hold: 900, label: "Lean through the arm" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-CX-017",
    slug: "desk-neck-reset",
    name: { en: "Desk Neck Reset", ur: "میز پر گردن کی بحالی" },
    bodyRegion: "Cervical",
    joint: ["Cervical spine C1–C7", "Thoracic spine T1–T12", "Scapulothoracic"],
    musclesTargeted: ["Deep neck flexors", "Upper trapezius", "Levator scapulae", "Rhomboids"],
    conditions: ["Desk work strain", "Forward head posture", "Cervicogenic headache", "Neck stiffness"],
    purpose: { en: "Sixty seconds that undo an hour at a screen: chin back, shoulder blades down, eyes to the far wall.", ur: "ایک منٹ جو اسکرین کے ایک گھنٹے کا اثر ختم کر دے: ٹھوڑی پیچھے، شانے نیچے، نظریں دور دیوار پر۔" },
    exerciseType: "Range of motion",
    difficulty: "Beginner",
    contraction: ["Isometric", "Concentric"],
    mode: "Active",
    load: "No load",
    position: "Sitting",
    equipment: ["Chair"],
    startingPosition: { en: "Sit tall at your desk with both feet flat and the hands resting in your lap.", ur: "میز پر سیدھے بیٹھیں، دونوں پاؤں فرش پر اور ہاتھ گود میں۔" },
    quickSteps: {
      en: [
        "Sit tall and slide the chin straight back.",
        "Draw the shoulder blades down and together.",
        "Look at something far away for twenty seconds.",
      ],
      ur: [
        "سیدھے بیٹھیں اور ٹھوڑی سیدھی پیچھے کھسکائیں۔",
        "شانے کی ہڈیاں نیچے اور اندر کھینچیں۔",
        "بیس سیکنڈ کے لیے کسی دور کی چیز کو دیکھیں۔",
      ],
    },
    steps: {
      en: [
        "Sit back in the chair with both feet flat on the floor.",
        "Slide the chin straight backwards, making a double chin, and hold five seconds.",
        "Draw both shoulder blades down and gently together, and hold five seconds.",
        "Turn the head slowly to each side, as far as is comfortable.",
        "Finish by looking at something at least six metres away for twenty seconds.",
      ],
      ur: [
        "کرسی میں پیچھے بیٹھیں، دونوں پاؤں فرش پر۔",
        "ٹھوڑی سیدھی پیچھے کھسکائیں، دوہری ٹھوڑی بنائیں، اور پانچ سیکنڈ رکیں۔",
        "دونوں شانے کی ہڈیاں نیچے اور نرمی سے اندر کھینچیں، پانچ سیکنڈ رکیں۔",
        "سر آہستہ ہر طرف گھمائیں، آرام کی حد تک۔",
        "آخر میں بیس سیکنڈ کے لیے کم از کم چھ میٹر دور کسی چیز کو دیکھیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Doing this every hour beats doing it well once a day.",
        "Looking into the distance rests the eyes, and the neck follows the eyes.",
        "Set an alarm; nobody remembers on their own.",
      ],
      ur: [
        "ہر گھنٹے کرنا دن میں ایک بار اچھی طرح کرنے سے بہتر ہے۔",
        "دور دیکھنے سے آنکھوں کو آرام ملتا ہے، اور گردن آنکھوں کے پیچھے چلتی ہے۔",
        "الارم لگا لیں؛ خود سے کسی کو یاد نہیں رہتا۔",
      ],
    },
    commonMistakes: {
      en: [
        "Going faster as you tire.",
        "Holding the breath during the effort.",
        "Doing a week's worth in one day.",
        "Pushing on through sharp pain.",
      ],
      ur: [
        "تھکنے پر تیز ہو جانا۔",
        "زور لگاتے وقت سانس روکنا۔",
        "ہفتے بھر کا کام ایک دن میں کر لینا۔",
        "تیز درد کے باوجود جاری رکھنا۔",
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
    repetitions: "1 round",
    sets: "1",
    holdTime: "5 seconds each part",
    frequency: "Hourly at a desk",
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
      rationale: "Postural break routines are standard advice for computer-related neck strain. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ neck: 8, head: 6, thorax: 8 }, SEATED), travel: 800, hold: 400, label: "Slumped at the desk" },
        { pose: pose({ neck: -2, head: -2, thorax: -4, headSlide: -6 }, SEATED), travel: 1000, hold: 900, label: "Chin back, shoulder blades down" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-L-017",
    slug: "standing-desk-break",
    name: { en: "Getting Out of the Chair", ur: "کرسی سے اٹھنے کا وقفہ" },
    bodyRegion: "Lumbar",
    joint: ["Lumbar spine L1–L5", "Hip", "Tibiofemoral"],
    musclesTargeted: ["Erector spinae", "Iliopsoas", "Gluteus maximus", "Quadriceps femoris"],
    conditions: ["Prolonged sitting", "Desk work strain", "Low back stiffness", "Sedentary lifestyle"],
    purpose: { en: "The back does not mind sitting; it minds sitting still. This is the shortest sequence that resets everything sitting shortens.", ur: "کمر کو بیٹھنے سے شکایت نہیں؛ ساکن بیٹھے رہنے سے ہے۔ یہ سب سے مختصر ترتیب ہے جو بیٹھنے سے چھوٹی ہونے والی ہر چیز کو بحال کر دیتی ہے۔" },
    exerciseType: "Functional & gait",
    difficulty: "Beginner",
    contraction: ["Concentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Standing",
    equipment: [],
    startingPosition: { en: "Stand up from your chair with the feet hip-width apart and the hands on your low back.", ur: "کرسی سے اٹھ کھڑے ہوں، پاؤں کولہوں کے برابر فاصلے پر اور ہاتھ کمر پر۔" },
    quickSteps: {
      en: [
        "Stand up and put your hands on your low back.",
        "Lean backwards five times, slowly.",
        "Then walk about for a minute before sitting again.",
      ],
      ur: [
        "کھڑے ہو کر ہاتھ کمر پر رکھیں۔",
        "آہستہ پانچ بار پیچھے جھکیں۔",
        "پھر دوبارہ بیٹھنے سے پہلے ایک منٹ چلیں پھریں۔",
      ],
    },
    steps: {
      en: [
        "Stand up fully and put the heels of both hands on your low back.",
        "Lean backwards over your hands five times, keeping the knees straight.",
        "Roll the shoulders backwards five times.",
        "Take a long stride and push the back hip forward to open the front of it.",
        "Then walk about for a minute before you sit back down.",
      ],
      ur: [
        "پوری طرح کھڑے ہوں اور دونوں ہاتھوں کی گدی کمر پر رکھیں۔",
        "گھٹنے سیدھے رکھتے ہوئے ہاتھوں کے اوپر پانچ بار پیچھے جھکیں۔",
        "کندھے پانچ بار پیچھے گھمائیں۔",
        "لمبا قدم لیں اور پچھلا کولہا آگے دبا کر اُس کا اگلا حصہ کھولیں۔",
        "پھر دوبارہ بیٹھنے سے پہلے ایک منٹ چلیں پھریں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Once an hour is the target; the length of the break matters far less than the frequency.",
        "Standing up to take phone calls builds the habit without any effort.",
        "The hip flexor stretch is the part people skip and the one sitting shortens most.",
      ],
      ur: [
        "ہدف ہر گھنٹے ایک بار ہے؛ وقفے کی لمبائی سے کہیں زیادہ اہم اُس کا بار بار ہونا ہے۔",
        "فون کالز کھڑے ہو کر لینے سے یہ عادت بغیر کوشش کے بن جاتی ہے۔",
        "کولہے کے اگلے پٹھے کا کھنچاؤ لوگ چھوڑ دیتے ہیں، اور بیٹھنے سے وہی سب سے زیادہ چھوٹا ہوتا ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Going faster as you tire.",
        "Holding the breath during the effort.",
        "Doing a week's worth in one day.",
        "Pushing on through sharp pain.",
      ],
      ur: [
        "تھکنے پر تیز ہو جانا۔",
        "زور لگاتے وقت سانس روکنا۔",
        "ہفتے بھر کا کام ایک دن میں کر لینا۔",
        "تیز درد کے باوجود جاری رکھنا۔",
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
    repetitions: "1 round",
    sets: "1",
    holdTime: "—",
    frequency: "Hourly at a desk",
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
      rationale: "Frequent postural breaks are standard advice for sedentary work. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        // The exercise is named for getting out of the chair, so it has to
        // start in the chair. It used to open standing and only lean back,
        // which is why the figure appeared to be doing nothing.
        //
        // Leaning the trunk forward out of a chair tips the whole body, legs
        // included — so `rootRot` is matched by an equal increase in hip
        // flexion, which holds the thighs on the seat while the chest travels.
        { pose: pose({}, SEATED), travel: 800, hold: 500, label: "Sitting at the desk" },
        { pose: pose({ rootRot: 26, hipNear: 112, hipFar: 110, shoulderNear: 140, elbowNear: 30, shoulderFar: 140, elbowFar: 30 }, SEATED), travel: 900, hold: 400, label: "Nose over toes — lean forward" },
        { pose: pose({ kneeNear: 22, kneeFar: 22, hipNear: 24, hipFar: 22, rootRot: 14, shoulderNear: 158, elbowNear: 20, shoulderFar: 158, elbowFar: 20 }, STAND), travel: 900, hold: 400, label: "Push through the feet and stand" },
        { pose: pose({ shoulderNear: 168, elbowNear: 78, shoulderFar: 168, elbowFar: 78 }, STAND), travel: 700, hold: 400, label: "Stand tall, hands on the back" },
        { pose: pose({ lumbar: -26, thorax: -10, neck: -10, shoulderNear: 168, elbowNear: 82, shoulderFar: 168, elbowFar: 82 }, STAND), travel: 900, hold: 900, label: "Lean back over the hands" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-T-016",
    slug: "driver-stretch-routine",
    name: { en: "Stretches for a Long Drive", ur: "لمبے سفر کے لیے کھنچاؤ" },
    bodyRegion: "Thoracic",
    joint: ["Thoracic spine T1–T12", "Hip", "Lumbar spine L1–L5"],
    musclesTargeted: ["Iliopsoas", "Pectoralis major", "Erector spinae", "Hamstrings"],
    conditions: ["Prolonged sitting", "Driving discomfort", "Low back stiffness", "Chest tightness"],
    purpose: { en: "What to do at a stop on a long journey — the three things a driving seat shortens, in the order they matter.", ur: "لمبے سفر میں رکنے پر کیا کریں — وہ تین چیزیں جو ڈرائیونگ سیٹ چھوٹی کرتی ہے، اہمیت کی ترتیب میں۔" },
    exerciseType: "Stretching",
    difficulty: "Beginner",
    contraction: ["Passive"],
    mode: "Passive",
    load: "Bodyweight",
    position: "Standing",
    equipment: [],
    startingPosition: { en: "Stand beside the car with the feet hip-width apart on level ground.", ur: "گاڑی کے پاس ہموار زمین پر کھڑے ہوں، پاؤں کولہوں کے برابر فاصلے پر۔" },
    quickSteps: {
      en: [
        "Stand and lean back over your hands five times.",
        "Take a long stride and push the back hip forward for thirty seconds each side.",
        "Clasp your hands behind you and lift them to open the chest.",
      ],
      ur: [
        "کھڑے ہو کر ہاتھوں کے اوپر پانچ بار پیچھے جھکیں۔",
        "لمبا قدم لیں اور ہر طرف تیس سیکنڈ پچھلا کولہا آگے دبائیں۔",
        "ہاتھ پیچھے ملا کر اٹھائیں تاکہ سینہ کھلے۔",
      ],
    },
    steps: {
      en: [
        "Stand on level ground away from traffic.",
        "Put the heels of your hands on your low back and lean back five times.",
        "Take a long stride, tuck the tailbone and push the back hip forward; hold thirty seconds each side.",
        "Clasp the hands behind your back and lift them away from you to open the chest.",
        "Finish by walking briskly for two minutes before getting back in.",
      ],
      ur: [
        "ٹریفک سے دور ہموار زمین پر کھڑے ہوں۔",
        "ہاتھوں کی گدی کمر پر رکھیں اور پانچ بار پیچھے جھکیں۔",
        "لمبا قدم لیں، دُم کی ہڈی اندر کریں اور پچھلا کولہا آگے دبائیں؛ ہر طرف تیس سیکنڈ۔",
        "ہاتھ پیٹھ کے پیچھے ملا کر اٹھائیں تاکہ سینہ کھلے۔",
        "دوبارہ بیٹھنے سے پہلے دو منٹ تیز چلیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Every two hours on a long drive, whether or not you feel stiff.",
        "The hip flexor stretch is the one that matters most after hours in a seat.",
        "Move the seat closer so you are not reaching for the pedals.",
      ],
      ur: [
        "لمبے سفر میں ہر دو گھنٹے بعد، چاہے اکڑن محسوس ہو یا نہ ہو۔",
        "گھنٹوں سیٹ پر بیٹھنے کے بعد کولہے کے اگلے پٹھے کا کھنچاؤ سب سے اہم ہے۔",
        "سیٹ قریب کر لیں تاکہ پیڈل تک پہنچنے کے لیے کھنچنا نہ پڑے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Going faster as you tire.",
        "Holding the breath during the effort.",
        "Doing a week's worth in one day.",
        "Pushing on through sharp pain.",
      ],
      ur: [
        "تھکنے پر تیز ہو جانا۔",
        "زور لگاتے وقت سانس روکنا۔",
        "ہفتے بھر کا کام ایک دن میں کر لینا۔",
        "تیز درد کے باوجود جاری رکھنا۔",
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
    repetitions: "1 round",
    sets: "1",
    holdTime: "30 seconds each stretch",
    frequency: "Every 2 hours of driving",
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
      rationale: "Break routines are standard advice for prolonged driving. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: STAND, travel: 800, hold: 400, label: "Standing beside the car" },
        { pose: pose({ hipNear: 32, kneeNear: 54, hipFar: -22, kneeFar: 4, pelvisTilt: -10, shoulderNear: 200, elbowNear: 14, shoulderFar: 200, elbowFar: 14 }, STAND), travel: 1000, hold: 900, label: "Long stride, hip pushed forward" },
      ],
    },
  },
  {
    id: "EX-L-018",
    slug: "bed-mobility-sit-up",
    name: { en: "Getting Out of Bed Safely", ur: "بستر سے محفوظ طریقے سے اٹھنا" },
    bodyRegion: "Lumbar",
    joint: ["Lumbar spine L1–L5", "Hip", "Glenohumeral"],
    musclesTargeted: ["Obliques", "Transversus abdominis", "Triceps brachii", "Erector spinae"],
    conditions: ["Acute low back pain", "Post-spinal-surgery rehabilitation", "Post-abdominal-surgery recovery", "Older adult conditioning"],
    purpose: { en: "Sitting straight up out of bed is the movement that most often triggers a back into spasm. There is a way that does not, and it can be taught in a minute.", ur: "بستر سے سیدھا اٹھ بیٹھنا وہ حرکت ہے جو اکثر کمر میں کھچاؤ پیدا کرتی ہے۔ ایک ایسا طریقہ ہے جو ایسا نہیں کرتا، اور ایک منٹ میں سکھایا جا سکتا ہے۔" },
    exerciseType: "Functional & gait",
    difficulty: "Beginner",
    contraction: ["Concentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Side-lying",
    equipment: ["Bed"],
    startingPosition: { en: "Lie on your back near the edge of the bed with both knees bent.", ur: "بستر کے کنارے کے قریب سیدھے لیٹیں، دونوں گھٹنے مڑے۔" },
    quickSteps: {
      en: [
        "Roll onto your side in one piece, knees together.",
        "Drop both lower legs off the edge of the bed.",
        "Push up through the bottom elbow and the top hand together.",
      ],
      ur: [
        "گھٹنے ملا کر پورے جسم کو ایک ساتھ پہلو پر گھمائیں۔",
        "دونوں پنڈلیاں بستر کے کنارے سے نیچے لٹکا دیں۔",
        "نیچے والی کہنی اور اوپر والے ہاتھ سے مل کر زور لگا کر اٹھیں۔",
      ],
    },
    steps: {
      en: [
        "Bend both knees and roll onto your side as one piece, keeping the knees together.",
        "Move close enough to the edge that your lower legs can drop off it.",
        "Let both lower legs swing down off the bed.",
        "At the same moment, push up with the bottom elbow and the top hand.",
        "The legs going down and the trunk coming up balance each other — that is why the back is spared.",
      ],
      ur: [
        "دونوں گھٹنے موڑیں اور گھٹنے ملا کر پورے جسم کو ایک ساتھ پہلو پر گھمائیں۔",
        "کنارے کے اتنا قریب آئیں کہ پنڈلیاں نیچے لٹک سکیں۔",
        "دونوں پنڈلیاں بستر سے نیچے جھولنے دیں۔",
        "بالکل اُسی وقت نیچے والی کہنی اور اوپر والے ہاتھ سے زور لگا کر اٹھیں۔",
        "ٹانگوں کا نیچے جانا اور دھڑ کا اوپر آنا ایک دوسرے کا توازن بناتے ہیں — اسی لیے کمر محفوظ رہتی ہے۔",
      ],
    },
    specialInstructions: {
      en: [
        "Never sit straight up out of bed with a sore back — that is the movement to avoid.",
        "Getting in is the same in reverse: sit, lie on your side, then roll onto your back.",
        "Teach this to anyone recovering from spinal or abdominal surgery.",
      ],
      ur: [
        "دُکھتی کمر کے ساتھ کبھی بستر سے سیدھا اٹھ کر نہ بیٹھیں — یہی حرکت سے بچنا ہے۔",
        "لیٹنا اسی کا الٹ ہے: بیٹھیں، پہلو پر لیٹیں، پھر کمر کے بل گھومیں۔",
        "ریڑھ یا پیٹ کے آپریشن سے صحتیاب ہونے والے ہر شخص کو یہ سکھائیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Sitting straight up from lying.",
        "Letting the knees separate as you roll.",
        "Twisting the trunk to push up.",
        "Rushing the whole sequence.",
      ],
      ur: [
        "لیٹے سے سیدھا اٹھ بیٹھنا۔",
        "گھومتے وقت گھٹنوں کا الگ ہو جانا۔",
        "اٹھنے کے لیے دھڑ کو مروڑنا۔",
        "پوری ترتیب میں جلدی کرنا۔",
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
    sets: "1",
    holdTime: "—",
    frequency: "Each time you get up",
    restBetweenSets: "—",
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
      rationale: "Log roll transfer out of bed is standard advice in acute back pain and after surgery. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ hipNear: 40, kneeNear: 90 }, SIDE_LYING), travel: 800, hold: 400, label: "On your side, knees bent" },
        { pose: pose({ hipNear: 76, kneeNear: 78, shoulderNear: 120, elbowNear: 96, roll: 70, rootRot: -62 }, SIDE_LYING), travel: 1000, hold: 900, label: "Legs down, push up together" },
      ],
      props: [{ kind: "mat" }],
    },
  },
];
