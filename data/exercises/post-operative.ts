import { pose } from "@/lib/figure";
import type { Exercise } from "../schema";
import { PRONE, QUADRUPED, SEATED, SIDE_LYING, STAND, SUPINE, SUPINE_LONG } from "./bases";

/* ==========================================================================
   AFTER AN OPERATION OR A FRACTURE
   --------------------------------------------------------------------------
   Exercises tied to a specific protocol rather than to a general problem:
   the first day after a knee or hip replacement, the six weeks in a sling
   after a cuff repair, the fortnight after a ligament reconstruction when
   full straightening decides the result, the fingers inside a cast, the arm
   after breast surgery, and rolling over after spinal surgery.
   Every one defers to the surgeon's own range limits.
   Drafts pending clinical review.
   ========================================================================== */

export const POST_OPERATIVE: Exercise[] = [
  {
    id: "EX-A-025",
    slug: "ankle-pumps-post-op",
    name: { en: "Ankle Pumps after Surgery", ur: "آپریشن کے بعد ٹخنہ ہلانا" },
    bodyRegion: "Ankle & Foot",
    joint: ["Talocrural"],
    musclesTargeted: ["Gastrocnemius", "Soleus", "Tibialis anterior"],
    conditions: ["Post-operative care", "Deep vein thrombosis prevention", "Post-knee-surgery rehabilitation", "Bed rest"],
    purpose: { en: "The very first exercise after any leg operation: moving the ankle pumps blood back up the leg and is the simplest protection against a clot.", ur: "ٹانگ کے کسی بھی آپریشن کے بعد پہلی ورزش: ٹخنہ ہلانے سے خون واپس اوپر جاتا ہے اور خون جمنے سے سب سے آسان بچاؤ ملتا ہے۔" },
    exerciseType: "Range of motion",
    difficulty: "Beginner",
    contraction: ["Concentric"],
    mode: "Active",
    load: "No load",
    position: "Supine",
    equipment: ["Bed or exercise mat"],
    startingPosition: { en: "Lie on your back with both legs out straight and supported on the bed.", ur: "سیدھے لیٹ جائیں، دونوں ٹانگیں سیدھی اور بستر پر ٹکی ہوئی۔" },
    quickSteps: {
      en: [
        "Lie with both legs straight on the bed.",
        "Point the toes away, then pull them up towards you.",
        "Repeat ten times every hour you are awake.",
      ],
      ur: [
        "دونوں ٹانگیں بستر پر سیدھی رکھ کر لیٹیں۔",
        "پنجے دور کی طرف کریں، پھر اپنی طرف اوپر کھینچیں۔",
        "جاگنے کے ہر گھنٹے میں دس بار دہرائیں۔",
      ],
    },
    steps: {
      en: [
        "Lie or sit with the legs supported and straight.",
        "Point both feet away from you as far as they go.",
        "Then pull both feet up towards your shins as far as they go.",
        "Move briskly through the full range; this is a pump, not a stretch.",
        "Do ten of these every hour that you are awake.",
      ],
      ur: [
        "ٹانگیں سیدھی اور سہارے پر رکھ کر لیٹیں یا بیٹھیں۔",
        "دونوں پاؤں جہاں تک جائیں دور کی طرف کریں۔",
        "پھر دونوں پاؤں جہاں تک جائیں پنڈلی کی طرف اوپر کھینچیں۔",
        "پوری حد میں تیزی سے حرکت کریں؛ یہ پمپ ہے، کھنچاؤ نہیں۔",
        "جاگنے کے ہر گھنٹے میں دس بار کریں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Every hour matters more than how many you do at once.",
        "Safe from the very first hour after surgery unless told otherwise.",
        "Tell someone at once if one calf becomes hot, swollen or painful.",
      ],
      ur: [
        "کتنی بار ایک وقت میں کرتے ہیں، اس سے اہم ہے ہر گھنٹے کرنا۔",
        "جب تک منع نہ کیا جائے، آپریشن کے پہلے گھنٹے سے ہی محفوظ ہے۔",
        "ایک پنڈلی گرم، سوجی یا دُکھنے لگے تو فوراً کسی کو بتائیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Going beyond the range your surgeon allowed.",
        "Pushing into sharp pain.",
        "Skipping days and then doing double.",
        "Holding the breath during the effort.",
      ],
      ur: [
        "سرجن کی اجازت سے زیادہ حرکت کرنا۔",
        "تیز درد تک زور لگانا۔",
        "دن چھوڑ کر پھر دگنا کرنا۔",
        "زور لگاتے وقت سانس روکنا۔",
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
    sets: "Every hour",
    holdTime: "—",
    frequency: "Hourly while awake",
    restBetweenSets: "—",
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
      rationale: "Ankle pumping is standard post-operative practice for circulation and thromboprophylaxis. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ ankleNear: 30, ankleFar: 30 }, SUPINE_LONG), travel: 800, hold: 400, label: "Toes pointed away" },
        { pose: pose({ ankleNear: -24, ankleFar: -24 }, SUPINE_LONG), travel: 1000, hold: 900, label: "Pull the toes up" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-K-026",
    slug: "static-quads-post-op",
    name: { en: "Thigh Squeeze after Knee Surgery", ur: "گھٹنے کے آپریشن کے بعد ران سخت کرنا" },
    bodyRegion: "Knee",
    joint: ["Tibiofemoral", "Patellofemoral"],
    musclesTargeted: ["Quadriceps femoris", "Vastus medialis obliquus"],
    conditions: ["Post-knee-surgery rehabilitation", "Extension lag", "Quadriceps inhibition", "Knee swelling"],
    purpose: { en: "After a knee operation the thigh muscle switches off within days. This switches it back on before any weight goes through the joint.", ur: "گھٹنے کے آپریشن کے بعد ران کا پٹھا چند دن میں بند ہو جاتا ہے۔ یہ ورزش جوڑ پر وزن پڑنے سے پہلے اسے دوبارہ چالو کرتی ہے۔" },
    exerciseType: "Strengthening",
    difficulty: "Beginner",
    contraction: ["Isometric"],
    mode: "Active",
    load: "No load",
    position: "Supine",
    equipment: ["Bed or exercise mat", "Rolled towel"],
    startingPosition: { en: "Lie on your back with the operated leg straight and a small rolled towel under the ankle.", ur: "سیدھے لیٹ جائیں، آپریشن والی ٹانگ سیدھی اور ٹخنے کے نیچے چھوٹا لپٹا تولیہ۔" },
    quickSteps: {
      en: [
        "Lie with the leg straight, a towel under the ankle.",
        "Tighten the thigh and press the back of the knee down.",
        "Hold 5 seconds, then relax fully.",
      ],
      ur: [
        "ٹانگ سیدھی رکھ کر لیٹیں، ٹخنے کے نیچے تولیہ۔",
        "ران سخت کریں اور گھٹنے کی پشت نیچے دبائیں۔",
        "پانچ سیکنڈ رکیں، پھر پوری طرح ڈھیلا چھوڑیں۔",
      ],
    },
    steps: {
      en: [
        "Lie on your back with the operated leg straight out.",
        "Put a small rolled towel under the ankle so the heel is lifted clear.",
        "Pull the toes up towards you and tighten the front of the thigh.",
        "Press the back of the knee down towards the bed and hold.",
        "Relax completely for five seconds before the next one.",
      ],
      ur: [
        "سیدھے لیٹ جائیں، آپریشن والی ٹانگ سیدھی۔",
        "ٹخنے کے نیچے چھوٹا لپٹا تولیہ رکھیں تاکہ ایڑی اوپر رہے۔",
        "پنجے اپنی طرف کھینچیں اور ران کا اگلا حصہ سخت کریں۔",
        "گھٹنے کی پشت بستر کی طرف نیچے دبائیں اور رکیں۔",
        "اگلی بار سے پہلے پانچ سیکنڈ پوری طرح ڈھیلا چھوڑیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Watch the kneecap — it should slide upwards as you tighten.",
        "The towel under the ankle is what lets the knee straighten fully.",
        "This is the exercise that stops an extension lag developing.",
      ],
      ur: [
        "گھٹنے کی ٹوپی پر نظر رکھیں — سخت کرنے پر وہ اوپر کھسکنی چاہیے۔",
        "ٹخنے کے نیچے تولیہ ہی گھٹنے کو پوری طرح سیدھا ہونے دیتا ہے۔",
        "یہی ورزش گھٹنے کے سیدھا نہ ہونے کی کمی کو بننے سے روکتی ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Going beyond the range your surgeon allowed.",
        "Pushing into sharp pain.",
        "Skipping days and then doing double.",
        "Holding the breath during the effort.",
      ],
      ur: [
        "سرجن کی اجازت سے زیادہ حرکت کرنا۔",
        "تیز درد تک زور لگانا۔",
        "دن چھوڑ کر پھر دگنا کرنا۔",
        "زور لگاتے وقت سانس روکنا۔",
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
    restBetweenSets: "5 seconds",
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
      rationale: "Static quadriceps contraction is standard first-day practice after knee surgery. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ kneeNear: 6 }, SUPINE_LONG), travel: 800, hold: 400, label: "Leg straight, towel under the ankle" },
        { pose: pose({ kneeNear: 0, ankleNear: -18 }, SUPINE_LONG), travel: 1000, hold: 900, label: "Tighten and press the knee down" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-K-027",
    slug: "knee-flexion-over-edge",
    name: { en: "Knee Bend over the Edge of the Bed", ur: "بستر کے کنارے سے گھٹنا موڑنا" },
    bodyRegion: "Knee",
    joint: ["Tibiofemoral", "Patellofemoral"],
    musclesTargeted: ["Hamstrings", "Quadriceps femoris"],
    conditions: ["Post-knee-surgery rehabilitation", "Reduced knee bend", "Knee stiffness", "Post-immobilisation stiffness"],
    purpose: { en: "Lets gravity bend the knee with no muscle work at all, which is how bend is regained in the first fortnight after a replacement.", ur: "کشش ثقل سے گھٹنا موڑتی ہے، کسی پٹھے کے زور کے بغیر، اور تبدیلی کے بعد پہلے دو ہفتوں میں خم اسی طرح واپس آتا ہے۔" },
    exerciseType: "Range of motion",
    difficulty: "Beginner",
    contraction: ["Passive"],
    mode: "Passive",
    load: "Assisted",
    position: "Sitting",
    equipment: ["Bed or firm chair"],
    startingPosition: { en: "Sit on the edge of a bed or a high chair with both lower legs hanging free.", ur: "بستر یا اونچی کرسی کے کنارے پر بیٹھیں، دونوں پنڈلیاں آزاد لٹکی ہوں۔" },
    quickSteps: {
      en: [
        "Sit on the edge of the bed with the lower legs hanging.",
        "Let the operated knee bend under its own weight.",
        "Use the other foot to help it bend a little further.",
      ],
      ur: [
        "بستر کے کنارے پر بیٹھیں، پنڈلیاں لٹکی ہوں۔",
        "آپریشن والے گھٹنے کو اپنے وزن سے مڑنے دیں۔",
        "دوسرے پاؤں سے تھوڑا اور موڑنے میں مدد کریں۔",
      ],
    },
    steps: {
      en: [
        "Sit well back on the edge of a bed so the thigh is supported.",
        "Let both lower legs hang freely over the edge.",
        "Let the operated knee bend under the weight of the leg alone — no muscle work.",
        "After thirty seconds, hook the other ankle in front and gently draw it further back.",
        "Hold at a stretch you could hold for a minute, then straighten slowly.",
      ],
      ur: [
        "بستر کے کنارے پر اچھی طرح پیچھے بیٹھیں تاکہ ران کو سہارا ملے۔",
        "دونوں پنڈلیاں کنارے سے آزاد لٹکنے دیں۔",
        "آپریشن والے گھٹنے کو صرف ٹانگ کے وزن سے مڑنے دیں — کوئی زور نہ لگائیں۔",
        "تیس سیکنڈ بعد دوسرا ٹخنہ سامنے پھنسا کر نرمی سے مزید پیچھے کھینچیں۔",
        "اتنا کھنچاؤ رکھیں جو ایک منٹ برداشت ہو، پھر آہستہ سیدھا کریں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Bend is lost easily in the first two weeks and is hard to get back later.",
        "A stretch you could hold for a minute is about right; sharp pain is not.",
        "Do this several times a day, not once for a long time.",
      ],
      ur: [
        "پہلے دو ہفتوں میں خم آسانی سے ضائع ہو جاتا ہے اور بعد میں واپس لانا مشکل ہوتا ہے۔",
        "اتنا کھنچاؤ درست ہے جو ایک منٹ برداشت ہو؛ تیز درد نہیں۔",
        "یہ دن میں کئی بار کریں، ایک بار لمبے وقت کے لیے نہیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Going beyond the range your surgeon allowed.",
        "Pushing into sharp pain.",
        "Skipping days and then doing double.",
        "Holding the breath during the effort.",
      ],
      ur: [
        "سرجن کی اجازت سے زیادہ حرکت کرنا۔",
        "تیز درد تک زور لگانا۔",
        "دن چھوڑ کر پھر دگنا کرنا۔",
        "زور لگاتے وقت سانس روکنا۔",
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
    holdTime: "1 minute",
    frequency: "4–6 times daily",
    restBetweenSets: "30 seconds",
    progressions: ["heel-slides"],
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
      rationale: "Gravity-assisted knee flexion is standard early practice after knee arthroplasty. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ kneeNear: 84 }, SEATED), travel: 800, hold: 400, label: "Lower legs hanging free" },
        { pose: pose({ kneeNear: 116, hipNear: 88 }, SEATED), travel: 1000, hold: 900, label: "Let the knee bend, then help it" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-K-028",
    slug: "knee-extension-over-roll",
    name: { en: "Knee Straightening over a Roll", ur: "لپٹے تولیے پر گھٹنا سیدھا کرنا" },
    bodyRegion: "Knee",
    joint: ["Tibiofemoral"],
    musclesTargeted: ["Quadriceps femoris", "Hamstrings"],
    conditions: ["Post-knee-surgery rehabilitation", "Extension lag", "Knee flexion contracture", "Osteoarthritis of the knee"],
    purpose: { en: "The last few degrees of straightening are the ones that decide whether you limp. This uses the weight of the leg to get them back.", ur: "سیدھا ہونے کے آخری چند درجے ہی طے کرتے ہیں کہ لنگڑا کر چلیں گے یا نہیں۔ یہ ٹانگ کے وزن سے وہ واپس دلاتی ہے۔" },
    exerciseType: "Range of motion",
    difficulty: "Beginner",
    contraction: ["Passive"],
    mode: "Passive",
    load: "Assisted",
    position: "Supine",
    equipment: ["Bed or exercise mat", "Rolled towel"],
    startingPosition: { en: "Lie on your back with a firm rolled towel under the ankle so the heel is clear of the bed.", ur: "سیدھے لیٹ جائیں، ٹخنے کے نیچے مضبوط لپٹا تولیہ رکھیں تاکہ ایڑی بستر سے اوپر رہے۔" },
    quickSteps: {
      en: [
        "Lie with a rolled towel under the ankle.",
        "Let the knee sag straight under its own weight.",
        "Hold 5 to 10 minutes, relaxing completely.",
      ],
      ur: [
        "ٹخنے کے نیچے لپٹا تولیہ رکھ کر لیٹیں۔",
        "گھٹنے کو اپنے وزن سے سیدھا ہونے دیں۔",
        "پانچ سے دس منٹ رکیں، پوری طرح ڈھیلا چھوڑ کر۔",
      ],
    },
    steps: {
      en: [
        "Lie on your back on a firm surface.",
        "Place a rolled towel under the ankle so the whole lower leg is off the bed.",
        "Let the thigh muscles go completely soft.",
        "Let the weight of the leg press the back of the knee down towards the bed.",
        "Stay there for five to ten minutes; a light weight on the knee can be added later.",
      ],
      ur: [
        "مضبوط سطح پر سیدھے لیٹ جائیں۔",
        "ٹخنے کے نیچے لپٹا تولیہ رکھیں تاکہ پوری پنڈلی بستر سے اوپر ہو۔",
        "ران کے پٹھے بالکل ڈھیلے چھوڑ دیں۔",
        "ٹانگ کا وزن گھٹنے کی پشت کو بستر کی طرف دبانے دے۔",
        "پانچ سے دس منٹ رہیں؛ بعد میں گھٹنے پر ہلکا وزن بھی رکھا جا سکتا ہے۔",
      ],
    },
    specialInstructions: {
      en: [
        "This works because you relax, not because you push.",
        "A knee that will not straighten fully is what causes a permanent limp.",
        "Ten minutes twice a day beats a minute ten times.",
      ],
      ur: [
        "یہ ڈھیلا چھوڑنے سے کام کرتی ہے، زور لگانے سے نہیں۔",
        "جو گھٹنا پوری طرح سیدھا نہ ہو، وہی مستقل لنگ کی وجہ بنتا ہے۔",
        "دس منٹ دن میں دو بار، ایک منٹ دس بار سے بہتر ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Going beyond the range your surgeon allowed.",
        "Pushing into sharp pain.",
        "Skipping days and then doing double.",
        "Holding the breath during the effort.",
      ],
      ur: [
        "سرجن کی اجازت سے زیادہ حرکت کرنا۔",
        "تیز درد تک زور لگانا۔",
        "دن چھوڑ کر پھر دگنا کرنا۔",
        "زور لگاتے وقت سانس روکنا۔",
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
    repetitions: "1",
    sets: "2",
    holdTime: "5–10 minutes",
    frequency: "Twice daily",
    restBetweenSets: "—",
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
      rationale: "Gravity-assisted extension over a roll is standard for regaining terminal knee extension. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ kneeNear: 14 }, SUPINE_LONG), travel: 800, hold: 400, label: "Ankle on the roll, knee bent" },
        { pose: pose({ kneeNear: -2 }, SUPINE_LONG), travel: 1000, hold: 900, label: "Let the knee sag straight" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-H-037",
    slug: "hip-abduction-post-op",
    name: { en: "Sliding the Leg Out after Hip Surgery", ur: "کولہے کے آپریشن کے بعد ٹانگ باہر پھسلانا" },
    bodyRegion: "Pelvis & Hip",
    joint: ["Hip"],
    musclesTargeted: ["Gluteus medius", "Gluteus minimus", "Tensor fasciae latae"],
    conditions: ["Post-hip-surgery rehabilitation", "Hip replacement", "Gluteal weakness", "Trendelenburg gait"],
    purpose: { en: "Rebuilds the muscle that stops the pelvis dropping when you walk, without asking the new hip to carry any weight.", ur: "اُس پٹھے کو دوبارہ بناتی ہے جو چلتے وقت پیڑو کو جھکنے سے روکتا ہے، اور نئے کولہے پر کوئی وزن نہیں ڈالتی۔" },
    exerciseType: "Strengthening",
    difficulty: "Beginner",
    contraction: ["Concentric", "Eccentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Supine",
    equipment: ["Bed or exercise mat"],
    startingPosition: { en: "Lie on your back with both legs straight, the toes pointing to the ceiling.", ur: "سیدھے لیٹ جائیں، دونوں ٹانگیں سیدھی اور پنجے چھت کی طرف۔" },
    quickSteps: {
      en: [
        "Lie flat with both legs straight and toes up.",
        "Slide the operated leg out to the side.",
        "Slide it back to the middle — never past it.",
      ],
      ur: [
        "سیدھے لیٹیں، دونوں ٹانگیں سیدھی اور پنجے اوپر۔",
        "آپریشن والی ٹانگ پہلو میں پھسلائیں۔",
        "واپس درمیان تک لائیں — اس سے آگے کبھی نہیں۔",
      ],
    },
    steps: {
      en: [
        "Lie flat with both legs straight and the toes pointing straight up.",
        "Keeping the knee straight and the toes up, slide the operated leg out to the side.",
        "Go as far as is comfortable without the pelvis lifting.",
        "Slide it back until it is level with the other leg.",
        "Never take it across the midline — that is a hip precaution, not a preference.",
      ],
      ur: [
        "سیدھے لیٹیں، دونوں ٹانگیں سیدھی اور پنجے بالکل اوپر۔",
        "گھٹنا سیدھا اور پنجہ اوپر رکھتے ہوئے آپریشن والی ٹانگ پہلو میں پھسلائیں۔",
        "آرام کی حد تک جائیں، پیڑو اٹھنے نہ پائے۔",
        "واپس اتنا لائیں کہ دوسری ٹانگ کے برابر آ جائے۔",
        "اسے کبھی درمیانی لکیر کے پار نہ لے جائیں — یہ کولہے کی پابندی ہے، پسند کی بات نہیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "After a hip replacement, do not cross the legs, do not bend past ninety degrees, and do not turn the leg inwards.",
        "Toes to the ceiling throughout — turning them out changes the muscle worked.",
        "A plastic bag under the heel makes it slide on a sheet.",
      ],
      ur: [
        "کولہے کی تبدیلی کے بعد ٹانگیں کراس نہ کریں، نوے درجے سے زیادہ نہ موڑیں، اور ٹانگ اندر کی طرف نہ گھمائیں۔",
        "پوری ورزش میں پنجے چھت کی طرف — باہر گھمانے سے کام کرنے والا پٹھا بدل جاتا ہے۔",
        "ایڑی کے نیچے پلاسٹک کا لفافہ رکھنے سے چادر پر پھسلتی ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Going beyond the range your surgeon allowed.",
        "Pushing into sharp pain.",
        "Skipping days and then doing double.",
        "Holding the breath during the effort.",
      ],
      ur: [
        "سرجن کی اجازت سے زیادہ حرکت کرنا۔",
        "تیز درد تک زور لگانا۔",
        "دن چھوڑ کر پھر دگنا کرنا۔",
        "زور لگاتے وقت سانس روکنا۔",
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
    holdTime: "2 seconds",
    frequency: "3 times daily",
    restBetweenSets: "30 seconds",
    progressions: ["standing-hip-abduction"],
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
      rationale: "Supine abduction sliding is standard early practice after hip arthroplasty. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ hipRotNear: 0 }, SUPINE_LONG), travel: 800, hold: 400, label: "Legs straight, toes up" },
        { pose: pose({ hipRotNear: -26 }, SUPINE_LONG), travel: 1000, hold: 900, label: "Slide the leg out to the side" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-H-038",
    slug: "static-glutes-post-op",
    name: { en: "Buttock Squeeze after Hip Surgery", ur: "کولہے کے آپریشن کے بعد کولہے کے پٹھے دبانا" },
    bodyRegion: "Pelvis & Hip",
    joint: ["Hip"],
    musclesTargeted: ["Gluteus maximus", "Gluteus medius"],
    conditions: ["Post-hip-surgery rehabilitation", "Hip replacement", "Gluteal weakness", "Bed rest"],
    purpose: { en: "Switches the buttock muscle back on with no movement at all, which is safe from the first day even under full hip precautions.", ur: "بغیر کسی حرکت کے کولہے کے پٹھے کو دوبارہ چالو کرتی ہے، اور مکمل پابندیوں کے باوجود پہلے دن سے محفوظ ہے۔" },
    exerciseType: "Strengthening",
    difficulty: "Beginner",
    contraction: ["Isometric"],
    mode: "Active",
    load: "No load",
    position: "Supine",
    equipment: ["Bed or exercise mat"],
    startingPosition: { en: "Lie on your back with both legs out straight and comfortable.", ur: "سیدھے لیٹ جائیں، دونوں ٹانگیں سیدھی اور آرام دہ۔" },
    quickSteps: {
      en: [
        "Lie on your back with the legs straight.",
        "Squeeze both buttocks together firmly.",
        "Hold 5 seconds, then relax completely.",
      ],
      ur: [
        "سیدھے لیٹ جائیں، ٹانگیں سیدھی۔",
        "دونوں کولہے مضبوطی سے آپس میں دبائیں۔",
        "پانچ سیکنڈ رکیں، پھر پوری طرح ڈھیلا چھوڑیں۔",
      ],
    },
    steps: {
      en: [
        "Lie on your back with both legs straight and the body relaxed.",
        "Squeeze both buttock muscles together as if holding a coin between them.",
        "Nothing should move — the hips stay flat on the bed.",
        "Hold for five seconds, breathing normally.",
        "Let go completely and rest before the next one.",
      ],
      ur: [
        "سیدھے لیٹ جائیں، دونوں ٹانگیں سیدھی اور جسم ڈھیلا۔",
        "دونوں کولہوں کے پٹھے ایسے دبائیں جیسے اُن کے درمیان سکہ پکڑا ہو۔",
        "کچھ حرکت نہ کرے — کولہے بستر پر سیدھے رہیں۔",
        "عام سانس لیتے ہوئے پانچ سیکنڈ رکیں۔",
        "پوری طرح چھوڑ دیں اور اگلی بار سے پہلے آرام کریں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Safe under all hip precautions because nothing moves.",
        "Can be done in bed, in a chair, or standing at a sink.",
        "Do not squeeze so hard that the back arches.",
      ],
      ur: [
        "کچھ حرکت نہ ہونے کی وجہ سے تمام پابندیوں کے باوجود محفوظ ہے۔",
        "بستر میں، کرسی پر یا سنک کے پاس کھڑے ہو کر کی جا سکتی ہے۔",
        "اتنا زور نہ دیں کہ کمر محراب بن جائے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Going beyond the range your surgeon allowed.",
        "Pushing into sharp pain.",
        "Skipping days and then doing double.",
        "Holding the breath during the effort.",
      ],
      ur: [
        "سرجن کی اجازت سے زیادہ حرکت کرنا۔",
        "تیز درد تک زور لگانا۔",
        "دن چھوڑ کر پھر دگنا کرنا۔",
        "زور لگاتے وقت سانس روکنا۔",
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
    holdTime: "5 seconds",
    frequency: "3–4 times daily",
    restBetweenSets: "5 seconds",
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
      rationale: "Static gluteal contraction is standard early post-operative practice. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: SUPINE_LONG, travel: 800, hold: 400, label: "Lying with the legs straight" },
        { pose: pose({ hipNear: -4, hipFar: -4 }, SUPINE_LONG), travel: 1000, hold: 900, label: "Squeeze the buttocks and hold" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-H-039",
    slug: "hip-precaution-sit-to-stand",
    name: { en: "Standing Up with Hip Precautions", ur: "کولہے کی پابندیوں کے ساتھ اٹھنا" },
    bodyRegion: "Pelvis & Hip",
    joint: ["Hip", "Tibiofemoral"],
    musclesTargeted: ["Gluteus maximus", "Quadriceps femoris", "Triceps brachii"],
    conditions: ["Post-hip-surgery rehabilitation", "Hip replacement", "Return to independent living", "Falls risk"],
    purpose: { en: "Getting out of a chair is where hip precautions are most often broken, and where a new hip is most at risk of dislocating.", ur: "کرسی سے اٹھتے وقت ہی کولہے کی پابندیاں سب سے زیادہ ٹوٹتی ہیں، اور نیا کولہا اُترنے کے سب سے زیادہ خطرے میں ہوتا ہے۔" },
    exerciseType: "Functional & gait",
    difficulty: "Beginner",
    contraction: ["Concentric", "Eccentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["High firm chair with arms"],
    startingPosition: { en: "Sit on a high, firm chair with arms, the operated leg slid forward and both hands on the armrests.", ur: "ہتھوں والی اونچی مضبوط کرسی پر بیٹھیں، آپریشن والی ٹانگ آگے کھسکائی ہوئی اور دونوں ہاتھ ہتھوں پر۔" },
    quickSteps: {
      en: [
        "Slide the operated leg forward.",
        "Push up through both armrests and the other leg.",
        "To sit, reverse it — feel for the chair and lower slowly.",
      ],
      ur: [
        "آپریشن والی ٹانگ آگے کھسکائیں۔",
        "دونوں ہتھوں اور دوسری ٹانگ سے زور لگا کر اٹھیں۔",
        "بیٹھنے کے لیے الٹ کریں — کرسی کو محسوس کر کے آہستہ بیٹھیں۔",
      ],
    },
    steps: {
      en: [
        "Use a chair high enough that the hip is never bent past ninety degrees.",
        "Shuffle forward and slide the operated leg out straight in front.",
        "Put both hands on the armrests and push up through them and the other leg.",
        "Stand tall before you take a step.",
        "To sit, back up until you feel the chair, slide the operated leg forward, and lower with the arms.",
      ],
      ur: [
        "اتنی اونچی کرسی لیں کہ کولہا کبھی نوے درجے سے زیادہ نہ مڑے۔",
        "آگے کھسکیں اور آپریشن والی ٹانگ سامنے سیدھی کریں۔",
        "دونوں ہاتھ ہتھوں پر رکھیں اور اُن سے اور دوسری ٹانگ سے زور لگا کر اٹھیں۔",
        "قدم اٹھانے سے پہلے پوری طرح سیدھے کھڑے ہو جائیں۔",
        "بیٹھنے کے لیے پیچھے آئیں یہاں تک کہ کرسی محسوس ہو، آپریشن والی ٹانگ آگے کریں، اور بازوؤں سے آہستہ بیٹھیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "A low or soft chair is the commonest way the ninety-degree rule gets broken.",
        "Sliding the operated leg forward is what keeps the hip angle open.",
        "Never twist on the operated leg while standing up.",
      ],
      ur: [
        "نیچی یا نرم کرسی ہی وہ عام وجہ ہے جس سے نوے درجے کا اصول ٹوٹتا ہے۔",
        "آپریشن والی ٹانگ آگے کھسکانے سے ہی کولہے کا زاویہ کھلا رہتا ہے۔",
        "اٹھتے وقت آپریشن والی ٹانگ پر کبھی نہ مڑیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Using a low or soft chair.",
        "Bending the hip past ninety degrees.",
        "Twisting on the operated leg.",
        "Standing up without pushing through the arms.",
      ],
      ur: [
        "نیچی یا نرم کرسی استعمال کرنا۔",
        "کولہا نوے درجے سے زیادہ موڑنا۔",
        "آپریشن والی ٹانگ پر مڑ جانا۔",
        "بازوؤں سے زور لگائے بغیر اٹھنا۔",
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
    repetitions: "5",
    sets: "3",
    holdTime: "—",
    frequency: "Each time you get up",
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
      rationale: "Transfer training within hip precautions is standard after arthroplasty. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ hipNear: 88, kneeNear: 40, shoulderNear: 150, elbowNear: 90 }, SEATED), travel: 800, hold: 400, label: "Operated leg forward" },
        { pose: pose({ hipNear: 10, kneeNear: 8, shoulderNear: 160, elbowNear: 40, shoulderFar: 160, elbowFar: 40 }, SEATED), travel: 1000, hold: 900, label: "Push up through the arms" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-S-048",
    slug: "passive-shoulder-flexion-supine",
    name: { en: "Assisted Shoulder Lift after Surgery", ur: "آپریشن کے بعد سہارے سے کندھا اٹھانا" },
    bodyRegion: "Shoulder",
    joint: ["Glenohumeral", "Scapulothoracic"],
    musclesTargeted: ["Deltoid", "Rotator cuff", "Pectoralis major"],
    conditions: ["Post-rotator-cuff repair", "Post-shoulder-surgery rehabilitation", "Frozen shoulder", "Post-immobilisation stiffness"],
    purpose: { en: "The operated shoulder is lifted entirely by the good arm, so the repaired tendon does no work at all — which is the whole point in the first six weeks.", ur: "آپریشن والا کندھا مکمل طور پر اچھے بازو سے اٹھایا جاتا ہے، اس لیے مرمت شدہ ٹینڈن پر کوئی زور نہیں آتا — پہلے چھ ہفتوں میں یہی مقصد ہے۔" },
    exerciseType: "Range of motion",
    difficulty: "Beginner",
    contraction: ["Passive"],
    mode: "Passive",
    load: "Assisted",
    position: "Supine",
    equipment: ["Exercise mat"],
    startingPosition: { en: "Lie on your back with both hands clasped together over your stomach and the elbows straight.", ur: "سیدھے لیٹ جائیں، دونوں ہاتھ پیٹ پر ملا لیں اور کہنیاں سیدھی رکھیں۔" },
    quickSteps: {
      en: [
        "Lie on your back with both hands clasped.",
        "Use the good arm to lift both arms up overhead.",
        "Lower slowly and repeat.",
      ],
      ur: [
        "سیدھے لیٹ جائیں، دونوں ہاتھ ملا لیں۔",
        "اچھے بازو سے دونوں بازو سر کے اوپر اٹھائیں۔",
        "آہستہ نیچے لائیں اور دہرائیں۔",
      ],
    },
    steps: {
      en: [
        "Lie on your back with the knees bent and both hands clasped together.",
        "Keep the operated arm completely relaxed — it is a passenger.",
        "Use the good arm to lift both hands up towards the ceiling and then overhead.",
        "Go only as far as your surgeon has allowed, and stop at any pinch.",
        "Lower back down slowly, still letting the good arm do all the work.",
      ],
      ur: [
        "گھٹنے موڑ کر سیدھے لیٹ جائیں اور دونوں ہاتھ ملا لیں۔",
        "آپریشن والا بازو بالکل ڈھیلا رکھیں — وہ صرف ساتھ جا رہا ہے۔",
        "اچھے بازو سے دونوں ہاتھ چھت کی طرف اور پھر سر کے اوپر لے جائیں۔",
        "صرف اُتنا جائیں جتنی سرجن نے اجازت دی ہو، اور چبھن پر رک جائیں۔",
        "آہستہ واپس نیچے لائیں، سارا کام اچھے بازو سے ہی کرائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "The operated arm must stay completely limp — if its muscles work, the repair is being loaded.",
        "Lying down is safer than sitting because the arm is supported throughout.",
        "Follow your surgeon's range limits exactly; they differ between operations.",
      ],
      ur: [
        "آپریشن والا بازو بالکل ڈھیلا رہے — اُس کے پٹھے کام کریں تو مرمت پر بوجھ پڑ رہا ہے۔",
        "لیٹنا بیٹھنے سے محفوظ ہے کیونکہ بازو کو پوری طرح سہارا ملتا ہے۔",
        "سرجن کی بتائی حد پر بالکل عمل کریں؛ ہر آپریشن میں یہ مختلف ہوتی ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Going beyond the range your surgeon allowed.",
        "Pushing into sharp pain.",
        "Skipping days and then doing double.",
        "Holding the breath during the effort.",
      ],
      ur: [
        "سرجن کی اجازت سے زیادہ حرکت کرنا۔",
        "تیز درد تک زور لگانا۔",
        "دن چھوڑ کر پھر دگنا کرنا۔",
        "زور لگاتے وقت سانس روکنا۔",
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
    holdTime: "2 seconds at the top",
    frequency: "3–4 times daily",
    restBetweenSets: "30 seconds",
    progressions: ["supine-shoulder-flexion"],
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
      rationale: "Supine passive elevation with the contralateral arm is standard early practice after cuff repair. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ shoulderNear: 150, elbowNear: 40, shoulderFar: 150, elbowFar: 40 }, SUPINE), travel: 800, hold: 400, label: "Hands clasped over the stomach" },
        { pose: pose({ shoulderNear: 40, elbowNear: 6, shoulderFar: 40, elbowFar: 6 }, SUPINE), travel: 1000, hold: 900, label: "Good arm lifts both overhead" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-S-049",
    slug: "scapular-setting-post-op",
    name: { en: "Shoulder Blade Setting after Surgery", ur: "آپریشن کے بعد شانے کی ہڈی جمانا" },
    bodyRegion: "Shoulder",
    joint: ["Scapulothoracic"],
    musclesTargeted: ["Lower trapezius", "Middle trapezius", "Rhomboids", "Serratus anterior"],
    conditions: ["Post-rotator-cuff repair", "Post-shoulder-surgery rehabilitation", "Shoulder immobilisation", "Scapular dyskinesis"],
    purpose: { en: "Works the muscles that position the shoulder blade while the repaired tendon is protected in a sling — so something useful is happening from week one.", ur: "شانے کی ہڈی کو جگہ پر رکھنے والے پٹھوں پر کام کرتی ہے جبکہ مرمت شدہ ٹینڈن پٹی میں محفوظ رہتا ہے — تاکہ پہلے ہفتے سے کچھ مفید ہوتا رہے۔" },
    exerciseType: "Stabilisation & motor control",
    difficulty: "Beginner",
    contraction: ["Isometric"],
    mode: "Active",
    load: "No load",
    position: "Sitting",
    equipment: ["Chair"],
    startingPosition: { en: "Sit tall with the operated arm resting in its sling or supported on a cushion.", ur: "سیدھے بیٹھیں، آپریشن والا بازو پٹی میں یا تکیے پر ٹکا ہو۔" },
    quickSteps: {
      en: [
        "Sit tall with the arm supported.",
        "Draw the shoulder blades gently together and down.",
        "Hold 5 seconds without moving the arm.",
      ],
      ur: [
        "سیدھے بیٹھیں، بازو کو سہارا ہو۔",
        "شانے کی ہڈیاں نرمی سے ملائیں اور نیچے کریں۔",
        "بازو ہلائے بغیر پانچ سیکنڈ رکیں۔",
      ],
    },
    steps: {
      en: [
        "Sit tall with the operated arm fully supported in its sling or on a cushion.",
        "Without moving the arm at all, draw both shoulder blades gently towards each other.",
        "At the same time draw them downwards, away from the ears.",
        "The effort is about three out of ten — gentle.",
        "Hold for five seconds, breathing normally, then release.",
      ],
      ur: [
        "سیدھے بیٹھیں، آپریشن والا بازو پٹی یا تکیے پر پوری طرح ٹکا ہو۔",
        "بازو بالکل ہلائے بغیر دونوں شانے کی ہڈیاں نرمی سے ایک دوسرے کی طرف کھینچیں۔",
        "ساتھ ہی انہیں نیچے، کانوں سے دور کریں۔",
        "زور دس میں سے تقریباً تین ہو — نرمی سے۔",
        "عام سانس لیتے ہوئے پانچ سیکنڈ رکیں، پھر چھوڑ دیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "The arm must not move at all — that is what makes it safe in a sling.",
        "This can be started the day after surgery in most protocols.",
        "Stop if you feel anything at the front of the shoulder.",
      ],
      ur: [
        "بازو بالکل نہ ہلے — اسی سے یہ پٹی میں محفوظ رہتی ہے۔",
        "زیادہ تر پروٹوکول میں یہ آپریشن کے اگلے دن شروع کی جا سکتی ہے۔",
        "کندھے کے سامنے کچھ محسوس ہو تو رک جائیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Going beyond the range your surgeon allowed.",
        "Pushing into sharp pain.",
        "Skipping days and then doing double.",
        "Holding the breath during the effort.",
      ],
      ur: [
        "سرجن کی اجازت سے زیادہ حرکت کرنا۔",
        "تیز درد تک زور لگانا۔",
        "دن چھوڑ کر پھر دگنا کرنا۔",
        "زور لگاتے وقت سانس روکنا۔",
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
    holdTime: "5 seconds",
    frequency: "3–4 times daily",
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
      rationale: "Scapular setting within sling immobilisation is standard early shoulder rehabilitation. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ shoulderNear: 150, elbowNear: 90 }, SEATED), travel: 800, hold: 400, label: "Arm supported in the sling" },
        { pose: pose({ shoulderNear: 152, elbowNear: 88, thorax: -3 }, SEATED), travel: 1000, hold: 900, label: "Set the shoulder blades down and back" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-S-050",
    slug: "pendulum-post-op",
    name: { en: "Gentle Pendulum after Surgery", ur: "آپریشن کے بعد نرم جھولا" },
    bodyRegion: "Shoulder",
    joint: ["Glenohumeral"],
    musclesTargeted: ["Deltoid", "Rotator cuff", "Latissimus dorsi"],
    conditions: ["Post-rotator-cuff repair", "Post-shoulder-surgery rehabilitation", "Frozen shoulder", "Shoulder pain"],
    purpose: { en: "The arm hangs and the body moves, so the shoulder gets movement without a single muscle around it having to contract.", ur: "بازو لٹکا رہتا ہے اور جسم حرکت کرتا ہے، اس لیے کندھے کو حرکت ملتی ہے مگر اُس کے گرد کسی پٹھے کو زور نہیں لگانا پڑتا۔" },
    exerciseType: "Range of motion",
    difficulty: "Beginner",
    contraction: ["Passive"],
    mode: "Passive",
    load: "Assisted",
    position: "Standing",
    equipment: ["Table to lean on"],
    startingPosition: { en: "Stand leaning forward with the good hand on a table and the operated arm hanging straight down.", ur: "میز پر اچھا ہاتھ رکھ کر آگے جھک کر کھڑے ہوں، آپریشن والا بازو سیدھا نیچے لٹکتا ہو۔" },
    quickSteps: {
      en: [
        "Lean forward with the good hand on a table.",
        "Let the operated arm hang completely loose.",
        "Sway your body so the arm swings on its own.",
      ],
      ur: [
        "اچھا ہاتھ میز پر رکھ کر آگے جھکیں۔",
        "آپریشن والا بازو بالکل ڈھیلا لٹکنے دیں۔",
        "جسم کو ہلائیں تاکہ بازو خود جھولے۔",
      ],
    },
    steps: {
      en: [
        "Stand beside a table and lean forward, taking your weight on the good hand.",
        "Let the operated arm hang straight down, completely relaxed.",
        "Shift your weight from foot to foot so the arm swings forwards and backwards.",
        "Then move your body in a small circle so the arm circles too.",
        "The arm must never do the swinging — the body does it.",
      ],
      ur: [
        "میز کے پاس کھڑے ہو کر آگے جھکیں، وزن اچھے ہاتھ پر ڈالیں۔",
        "آپریشن والا بازو بالکل ڈھیلا سیدھا نیچے لٹکنے دیں۔",
        "وزن ایک پاؤں سے دوسرے پر منتقل کریں تاکہ بازو آگے پیچھے جھولے۔",
        "پھر جسم کو چھوٹے دائرے میں گھمائیں تاکہ بازو بھی دائرہ بنائے۔",
        "بازو خود کبھی نہ جھولے — جسم اسے جھلائے۔",
      ],
    },
    specialInstructions: {
      en: [
        "If the shoulder muscles are working, the exercise is being done wrong.",
        "Small circles are correct; a big swing loads the repair.",
        "Do not hold a weight in the hand unless you have been told to.",
      ],
      ur: [
        "اگر کندھے کے پٹھے کام کر رہے ہوں تو ورزش غلط ہو رہی ہے۔",
        "چھوٹے دائرے درست ہیں؛ بڑا جھولا مرمت پر بوجھ ڈالتا ہے۔",
        "جب تک کہا نہ جائے، ہاتھ میں وزن نہ پکڑیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Going beyond the range your surgeon allowed.",
        "Pushing into sharp pain.",
        "Skipping days and then doing double.",
        "Holding the breath during the effort.",
      ],
      ur: [
        "سرجن کی اجازت سے زیادہ حرکت کرنا۔",
        "تیز درد تک زور لگانا۔",
        "دن چھوڑ کر پھر دگنا کرنا۔",
        "زور لگاتے وقت سانس روکنا۔",
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
    repetitions: "10 each direction",
    sets: "2",
    holdTime: "—",
    frequency: "3–4 times daily",
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
      rationale: "Pendulum exercises are standard early passive shoulder movement after repair. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ lumbar: 26, thorax: 16, hipNear: 46, shoulderNear: 176, elbowNear: 6, shoulderFar: 120, elbowFar: 20 }, STAND), travel: 800, hold: 400, label: "Leaning on the table, arm hanging" },
        { pose: pose({ lumbar: 26, thorax: 16, hipNear: 46, shoulderNear: 146, elbowNear: 6, shoulderFar: 120, elbowFar: 20 }, STAND), travel: 1000, hold: 900, label: "Sway so the arm swings" },
      ],
      props: [{ kind: "tableSupport" }],
    },
  },
  {
    id: "EX-K-029",
    slug: "acl-heel-prop",
    name: { en: "Heel Prop after Knee Ligament Surgery", ur: "گھٹنے کے لگامنٹ آپریشن کے بعد ایڑی اونچی رکھنا" },
    bodyRegion: "Knee",
    joint: ["Tibiofemoral"],
    musclesTargeted: ["Quadriceps femoris", "Hamstrings", "Gastrocnemius"],
    conditions: ["Post-ACL reconstruction", "Knee flexion contracture", "Extension lag", "Post-knee-surgery rehabilitation"],
    purpose: { en: "Full straightening in the first fortnight after a ligament reconstruction is the single strongest predictor of a good result a year later.", ur: "لگامنٹ کی مرمت کے بعد پہلے دو ہفتوں میں گھٹنے کا پوری طرح سیدھا ہونا ایک سال بعد اچھے نتیجے کی سب سے مضبوط علامت ہے۔" },
    exerciseType: "Range of motion",
    difficulty: "Beginner",
    contraction: ["Passive"],
    mode: "Passive",
    load: "Assisted",
    position: "Supine",
    equipment: ["Bed or exercise mat", "Firm cushion"],
    startingPosition: { en: "Lie or sit with the heel propped on a firm cushion so the whole lower leg is off the surface.", ur: "لیٹیں یا بیٹھیں، ایڑی مضبوط تکیے پر رکھیں تاکہ پوری پنڈلی سطح سے اوپر ہو۔" },
    quickSteps: {
      en: [
        "Prop the heel on a cushion with the leg unsupported.",
        "Let the knee sag straight under its own weight.",
        "Hold 10 minutes, fully relaxed.",
      ],
      ur: [
        "ایڑی تکیے پر رکھیں، ٹانگ بغیر سہارے ہو۔",
        "گھٹنے کو اپنے وزن سے سیدھا ہونے دیں۔",
        "دس منٹ پوری طرح ڈھیلا چھوڑ کر رکیں۔",
      ],
    },
    steps: {
      en: [
        "Sit or lie with the operated leg out straight.",
        "Prop only the heel on a firm cushion, so the knee is unsupported.",
        "Let the thigh go completely soft — no tightening at all.",
        "Let gravity press the knee down towards straight, and stay there.",
        "Later, a small weight such as a bag of rice can be laid across the knee.",
      ],
      ur: [
        "آپریشن والی ٹانگ سیدھی رکھ کر بیٹھیں یا لیٹیں۔",
        "صرف ایڑی مضبوط تکیے پر رکھیں تاکہ گھٹنے کو سہارا نہ ملے۔",
        "ران بالکل ڈھیلی چھوڑ دیں — کوئی سختی نہیں۔",
        "کشش ثقل کو گھٹنا سیدھا کرنے دیں، اور وہیں رہیں۔",
        "بعد میں گھٹنے پر ہلکا وزن، جیسے چاول کا تھیلا، رکھا جا سکتا ہے۔",
      ],
    },
    specialInstructions: {
      en: [
        "Compare with the other knee: yours should straighten just as far.",
        "Ten minutes several times a day is the usual prescription.",
        "This is more important in the first two weeks than any strengthening.",
      ],
      ur: [
        "دوسرے گھٹنے سے موازنہ کریں: آپ کا گھٹنا اُتنا ہی سیدھا ہونا چاہیے۔",
        "عام ہدایت یہی ہے کہ دن میں کئی بار دس دس منٹ۔",
        "پہلے دو ہفتوں میں یہ کسی بھی مضبوطی کی ورزش سے زیادہ اہم ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Going beyond the range your surgeon allowed.",
        "Pushing into sharp pain.",
        "Skipping days and then doing double.",
        "Holding the breath during the effort.",
      ],
      ur: [
        "سرجن کی اجازت سے زیادہ حرکت کرنا۔",
        "تیز درد تک زور لگانا۔",
        "دن چھوڑ کر پھر دگنا کرنا۔",
        "زور لگاتے وقت سانس روکنا۔",
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
    repetitions: "1",
    sets: "3",
    holdTime: "10 minutes",
    frequency: "3–4 times daily",
    restBetweenSets: "—",
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
      rationale: "Heel prop extension is standard early practice after ACL reconstruction. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ kneeNear: 12 }, SUPINE_LONG), travel: 800, hold: 400, label: "Heel propped, knee bent" },
        { pose: pose({ kneeNear: -3 }, SUPINE_LONG), travel: 1000, hold: 900, label: "Let the knee straighten" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-K-030",
    slug: "hamstring-curl-prone-post-op",
    name: { en: "Prone Hamstring Curl after Surgery", ur: "آپریشن کے بعد اوندھے لیٹ کر گھٹنا موڑنا" },
    bodyRegion: "Knee",
    joint: ["Tibiofemoral"],
    musclesTargeted: ["Hamstrings", "Gastrocnemius"],
    conditions: ["Post-ACL reconstruction", "Hamstring graft recovery", "Knee instability", "Return to sport"],
    purpose: { en: "Rebuilds the hamstring, which both protects the new ligament and is the muscle taken to make it in many reconstructions.", ur: "ران کے پچھلے پٹھے کو دوبارہ بناتی ہے، جو نئے لگامنٹ کی حفاظت بھی کرتا ہے اور کئی آپریشنوں میں اسی سے لگامنٹ بنایا جاتا ہے۔" },
    exerciseType: "Strengthening",
    difficulty: "Intermediate",
    contraction: ["Concentric", "Eccentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Prone",
    equipment: ["Exercise mat"],
    startingPosition: { en: "Lie face down with both legs straight and a small pillow under the stomach.", ur: "اوندھے لیٹ جائیں، دونوں ٹانگیں سیدھی اور پیٹ کے نیچے چھوٹا تکیہ۔" },
    quickSteps: {
      en: [
        "Lie face down with the legs straight.",
        "Bend the operated knee as far as is comfortable.",
        "Lower slowly over three seconds.",
      ],
      ur: [
        "اوندھے لیٹ جائیں، ٹانگیں سیدھی۔",
        "آپریشن والا گھٹنا آرام کی حد تک موڑیں۔",
        "تین سیکنڈ میں آہستہ نیچے لائیں۔",
      ],
    },
    steps: {
      en: [
        "Lie face down with a small pillow under the stomach and the hips flat.",
        "Bend the operated knee, bringing the heel towards the buttock.",
        "Go as far as is comfortable within your allowed range.",
        "Hold for two seconds at the top.",
        "Lower slowly over three seconds — this is where the strength is built.",
      ],
      ur: [
        "اوندھے لیٹ جائیں، پیٹ کے نیچے چھوٹا تکیہ اور کولہے سیدھے۔",
        "آپریشن والا گھٹنا موڑیں، ایڑی کولہے کی طرف لائیں۔",
        "اپنی اجازت شدہ حد میں آرام کی حد تک جائیں۔",
        "اوپر دو سیکنڈ رکیں۔",
        "تین سیکنڈ میں آہستہ نیچے لائیں — طاقت یہیں بنتی ہے۔",
      ],
    },
    specialInstructions: {
      en: [
        "If a hamstring graft was used, expect this to feel weak for months — that is normal.",
        "The hips must stay flat; lifting them uses the back instead.",
        "Add an ankle weight only when ten slow repetitions are easy.",
      ],
      ur: [
        "اگر لگامنٹ ران کے پچھلے پٹھے سے بنایا گیا ہو تو کئی ماہ کمزوری محسوس ہوگی — یہ عام بات ہے۔",
        "کولہے سیدھے رہیں؛ اٹھانے سے کام کمر کرنے لگتی ہے۔",
        "دس آہستہ بار آسان ہو جائیں تو ہی ٹخنے پر وزن لگائیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Going beyond the range your surgeon allowed.",
        "Pushing into sharp pain.",
        "Skipping days and then doing double.",
        "Holding the breath during the effort.",
      ],
      ur: [
        "سرجن کی اجازت سے زیادہ حرکت کرنا۔",
        "تیز درد تک زور لگانا۔",
        "دن چھوڑ کر پھر دگنا کرنا۔",
        "زور لگاتے وقت سانس روکنا۔",
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
    repetitions: "10–12",
    sets: "3",
    holdTime: "2 seconds",
    frequency: "Every other day",
    restBetweenSets: "30 seconds",
    progressions: ["band-hamstring-curl"],
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
      rationale: "Prone hamstring curls are standard in ACL reconstruction rehabilitation. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ kneeNear: 2 }, PRONE), travel: 800, hold: 400, label: "Lying face down" },
        { pose: pose({ kneeNear: 92 }, PRONE), travel: 1000, hold: 900, label: "Bend the knee towards the buttock" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-W-016",
    slug: "wrist-fracture-tendon-glide",
    name: { en: "Finger Movement in a Cast", ur: "پلستر میں انگلیوں کی حرکت" },
    bodyRegion: "Wrist & Hand",
    joint: ["Metacarpophalangeal", "Interphalangeal"],
    musclesTargeted: ["Flexor digitorum superficialis", "Flexor digitorum profundus", "Extensor digitorum"],
    conditions: ["Wrist fracture", "Post-cast stiffness", "Hand swelling", "Immobilisation"],
    purpose: { en: "A cast holds the wrist, not the fingers. Fingers left still for six weeks stiffen badly, and that stiffness is harder to treat than the fracture was.", ur: "پلستر کلائی کو روکتا ہے، انگلیوں کو نہیں۔ چھ ہفتے ساکن رہنے والی انگلیاں بری طرح اکڑ جاتی ہیں، اور یہ اکڑن ہڈی سے زیادہ مشکل مسئلہ بن جاتی ہے۔" },
    exerciseType: "Range of motion",
    difficulty: "Beginner",
    contraction: ["Concentric"],
    mode: "Active",
    load: "No load",
    position: "Sitting",
    equipment: [],
    startingPosition: { en: "Sit with the plastered forearm resting on a table or supported in its sling, fingers free.", ur: "پلستر والا بازو میز پر یا پٹی میں رکھ کر بیٹھیں، انگلیاں آزاد ہوں۔" },
    quickSteps: {
      en: [
        "Rest the plastered arm on a table.",
        "Make a full fist, then straighten the fingers completely.",
        "Repeat ten times every hour.",
      ],
      ur: [
        "پلستر والا بازو میز پر رکھیں۔",
        "پوری مٹھی بنائیں، پھر انگلیاں بالکل سیدھی کریں۔",
        "ہر گھنٹے دس بار دہرائیں۔",
      ],
    },
    steps: {
      en: [
        "Rest the plastered arm supported, with the fingers clear of the cast edge.",
        "Curl the fingers into a full fist, tips touching the palm.",
        "Then straighten every finger completely, as flat as they will go.",
        "Also touch the thumb to each fingertip in turn.",
        "Do ten of each, every hour you are awake.",
      ],
      ur: [
        "پلستر والا بازو سہارے پر رکھیں، انگلیاں پلستر کے کنارے سے باہر ہوں۔",
        "انگلیاں موڑ کر پوری مٹھی بنائیں، نوکیں ہتھیلی کو چھوئیں۔",
        "پھر ہر انگلی بالکل سیدھی کریں، جتنی چپٹی ہو سکے۔",
        "انگوٹھے سے باری باری ہر انگلی کی نوک کو بھی چھوئیں۔",
        "ہر ایک دس بار، جاگنے کے ہر گھنٹے میں کریں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Keeping the hand raised above heart height reduces the swelling that causes the stiffness.",
        "If the cast presses on the knuckles so the fingers cannot bend, say so — it needs trimming.",
        "Move the shoulder and elbow too; they stiffen in a sling.",
      ],
      ur: [
        "ہاتھ دل کی سطح سے اوپر رکھنے سے وہ سوجن کم ہوتی ہے جو اکڑن کی وجہ بنتی ہے۔",
        "پلستر پوروں پر دبے اور انگلیاں نہ مڑ سکیں تو بتائیں — اسے کاٹنا پڑے گا۔",
        "کندھا اور کہنی بھی حرکت دیں؛ پٹی میں وہ بھی اکڑ جاتے ہیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Going beyond the range your surgeon allowed.",
        "Pushing into sharp pain.",
        "Skipping days and then doing double.",
        "Holding the breath during the effort.",
      ],
      ur: [
        "سرجن کی اجازت سے زیادہ حرکت کرنا۔",
        "تیز درد تک زور لگانا۔",
        "دن چھوڑ کر پھر دگنا کرنا۔",
        "زور لگاتے وقت سانس روکنا۔",
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
    repetitions: "10 of each",
    sets: "Every hour",
    holdTime: "—",
    frequency: "Hourly while awake",
    restBetweenSets: "—",
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
      rationale: "Finger and thumb movement during immobilisation is standard practice to prevent stiffness. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ shoulderNear: 150, elbowNear: 84 }, SEATED), travel: 800, hold: 400, label: "Arm supported, fingers free" },
        { pose: pose({ shoulderNear: 148, elbowNear: 86 }, SEATED), travel: 1000, hold: 900, label: "Full fist, then fully straight" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-EL-015",
    slug: "shoulder-elbow-in-sling",
    name: { en: "Keeping the Elbow Moving in a Sling", ur: "پٹی میں کہنی کو حرکت میں رکھنا" },
    bodyRegion: "Elbow",
    joint: ["Humeroulnar", "Radioulnar"],
    musclesTargeted: ["Biceps brachii", "Triceps brachii", "Pronator teres"],
    conditions: ["Shoulder immobilisation", "Post-shoulder-surgery rehabilitation", "Collar bone fracture", "Post-cast stiffness"],
    purpose: { en: "A sling protects the shoulder but stiffens everything below it. Six weeks of a bent elbow leaves an elbow that will not straighten.", ur: "پٹی کندھے کی حفاظت کرتی ہے مگر اُس کے نیچے سب کچھ اکڑا دیتی ہے۔ چھ ہفتے مڑی کہنی کے بعد کہنی سیدھی ہونا چھوڑ دیتی ہے۔" },
    exerciseType: "Range of motion",
    difficulty: "Beginner",
    contraction: ["Concentric"],
    mode: "Active",
    load: "No load",
    position: "Sitting",
    equipment: ["Chair"],
    startingPosition: { en: "Sit tall and take the operated arm out of the sling, supporting it at the elbow with the other hand.", ur: "سیدھے بیٹھیں اور آپریشن والا بازو پٹی سے نکالیں، دوسرے ہاتھ سے کہنی کو سہارا دیں۔" },
    quickSteps: {
      en: [
        "Support the arm at the elbow with the other hand.",
        "Straighten the elbow fully, then bend it fully.",
        "Also turn the palm up and down.",
      ],
      ur: [
        "دوسرے ہاتھ سے کہنی کو سہارا دیں۔",
        "کہنی پوری طرح سیدھی کریں، پھر پوری طرح موڑیں۔",
        "ہتھیلی اوپر نیچے بھی گھمائیں۔",
      ],
    },
    steps: {
      en: [
        "Sit tall and take the arm out of the sling, keeping it close to your body.",
        "Support the operated arm under the elbow with the other hand.",
        "Straighten the elbow slowly until it is completely straight.",
        "Bend it back up until the hand reaches the shoulder.",
        "Then turn the palm up and down five times, keeping the elbow at your side.",
      ],
      ur: [
        "سیدھے بیٹھیں اور بازو پٹی سے نکالیں، اسے جسم کے قریب رکھیں۔",
        "دوسرے ہاتھ سے آپریشن والے بازو کو کہنی کے نیچے سے سہارا دیں۔",
        "کہنی آہستہ سیدھی کریں یہاں تک کہ بالکل سیدھی ہو جائے۔",
        "پھر موڑیں یہاں تک کہ ہاتھ کندھے تک پہنچے۔",
        "پھر کہنی پہلو سے لگا کر ہتھیلی پانچ بار اوپر نیچے گھمائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "The shoulder must not move — the other hand holds the upper arm still.",
        "Full straightening is the one that gets lost; do it every time.",
        "Do this at every sling change unless told otherwise.",
      ],
      ur: [
        "کندھا حرکت نہ کرے — دوسرا ہاتھ اوپری بازو کو ساکن رکھے۔",
        "پوری طرح سیدھا ہونا ہی سب سے پہلے ضائع ہوتا ہے؛ ہر بار یہ ضرور کریں۔",
        "جب تک منع نہ ہو، پٹی بدلنے کے ہر موقع پر یہ کریں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Going beyond the range your surgeon allowed.",
        "Pushing into sharp pain.",
        "Skipping days and then doing double.",
        "Holding the breath during the effort.",
      ],
      ur: [
        "سرجن کی اجازت سے زیادہ حرکت کرنا۔",
        "تیز درد تک زور لگانا۔",
        "دن چھوڑ کر پھر دگنا کرنا۔",
        "زور لگاتے وقت سانس روکنا۔",
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
    repetitions: "10",
    sets: "3",
    holdTime: "—",
    frequency: "3–4 times daily",
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
      rationale: "Elbow and forearm movement during shoulder immobilisation is standard to prevent secondary stiffness. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ shoulderNear: 168, elbowNear: 110, shoulderFar: 140, elbowFar: 90 }, SEATED), travel: 800, hold: 400, label: "Elbow bent, supported" },
        { pose: pose({ shoulderNear: 168, elbowNear: 8, shoulderFar: 140, elbowFar: 90 }, SEATED), travel: 1000, hold: 900, label: "Straighten it fully" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-S-051",
    slug: "post-mastectomy-wall-climb",
    name: { en: "Wall Climb after Breast Surgery", ur: "چھاتی کے آپریشن کے بعد دیوار پر انگلیاں چڑھانا" },
    bodyRegion: "Shoulder",
    joint: ["Glenohumeral", "Scapulothoracic"],
    musclesTargeted: ["Deltoid", "Pectoralis major", "Latissimus dorsi"],
    conditions: ["Post-mastectomy recovery", "Axillary surgery", "Post-radiotherapy tightness", "Shoulder stiffness"],
    purpose: { en: "Getting the arm back overhead after breast surgery matters for dressing, washing and, practically, for being positioned for radiotherapy.", ur: "چھاتی کے آپریشن کے بعد بازو کا دوبارہ اوپر جانا کپڑے پہننے، نہانے اور عملی طور پر ریڈیو تھراپی کی حالت کے لیے اہم ہے۔" },
    exerciseType: "Range of motion",
    difficulty: "Beginner",
    contraction: ["Concentric", "Passive"],
    mode: "Active-assisted",
    load: "Assisted",
    position: "Standing",
    equipment: ["Wall"],
    startingPosition: { en: "Stand facing a wall, close enough to place your fingertips on it at chest height.", ur: "دیوار کی طرف منہ کر کے اتنا قریب کھڑے ہوں کہ انگلیاں سینے کی اونچائی پر دیوار پر رکھ سکیں۔" },
    quickSteps: {
      en: [
        "Stand facing a wall with the fingertips on it.",
        "Walk the fingers up the wall as far as is comfortable.",
        "Mark the height, then walk them back down.",
      ],
      ur: [
        "دیوار کی طرف منہ کر کے انگلیاں دیوار پر رکھیں۔",
        "انگلیاں آرام کی حد تک دیوار پر اوپر چڑھائیں۔",
        "اونچائی پر نشان لگائیں، پھر انگلیاں واپس نیچے لائیں۔",
      ],
    },
    steps: {
      en: [
        "Stand facing the wall with the fingertips of the affected side on it.",
        "Walk the fingers slowly up the wall, stepping closer as the arm rises.",
        "Go to the point of stretch, not pain, and hold there for ten seconds.",
        "Mark that height with a pencil so you can see progress week by week.",
        "Walk the fingers back down and step away.",
      ],
      ur: [
        "دیوار کی طرف منہ کر کے متاثرہ طرف کی انگلیاں دیوار پر رکھیں۔",
        "انگلیاں آہستہ دیوار پر اوپر چڑھائیں، بازو اٹھنے کے ساتھ قریب ہوتے جائیں۔",
        "کھنچاؤ کی حد تک جائیں، درد تک نہیں، اور وہاں دس سیکنڈ رکیں۔",
        "اُس اونچائی پر پنسل سے نشان لگائیں تاکہ ہفتہ بہ ہفتہ ترقی نظر آئے۔",
        "انگلیاں واپس نیچے لائیں اور پیچھے ہٹ جائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Marking the wall turns a vague exercise into a measurable one.",
        "Stop and report any new swelling in the arm or hand.",
        "Wait for drains to be removed and follow your surgeon's timing.",
      ],
      ur: [
        "دیوار پر نشان لگانے سے مبہم ورزش قابلِ پیمائش بن جاتی ہے۔",
        "بازو یا ہاتھ میں نئی سوجن ہو تو رک کر بتائیں۔",
        "نالیاں نکلنے کا انتظار کریں اور سرجن کے بتائے وقت پر عمل کریں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Going beyond the range your surgeon allowed.",
        "Pushing into sharp pain.",
        "Skipping days and then doing double.",
        "Holding the breath during the effort.",
      ],
      ur: [
        "سرجن کی اجازت سے زیادہ حرکت کرنا۔",
        "تیز درد تک زور لگانا۔",
        "دن چھوڑ کر پھر دگنا کرنا۔",
        "زور لگاتے وقت سانس روکنا۔",
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
    sets: "2",
    holdTime: "10 seconds at the top",
    frequency: "2–3 times daily",
    restBetweenSets: "30 seconds",
    progressions: [],
    regressions: ["wall-crawl-flexion"],
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
      rationale: "Wall climbing is standard shoulder rehabilitation after breast and axillary surgery. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ shoulderNear: 130, elbowNear: 60 }, STAND), travel: 800, hold: 400, label: "Fingertips on the wall" },
        { pose: pose({ shoulderNear: 40, elbowNear: 10 }, STAND), travel: 1000, hold: 900, label: "Walk the fingers up" },
      ],
      props: [{ kind: "wall" }],
    },
  },
  {
    id: "EX-S-052",
    slug: "post-surgery-shoulder-shrug",
    name: { en: "Gentle Shoulder Rolls after Chest Surgery", ur: "سینے کے آپریشن کے بعد نرم کندھے گھمانا" },
    bodyRegion: "Shoulder",
    joint: ["Scapulothoracic", "Acromioclavicular"],
    musclesTargeted: ["Upper trapezius", "Rhomboids", "Levator scapulae", "Serratus anterior"],
    conditions: ["Post-mastectomy recovery", "Post-thoracotomy recovery", "Post-cardiac-surgery recovery", "Chest wall tightness"],
    purpose: { en: "Moves the shoulder girdle without pulling on the chest wound, which is what makes it safe in the first days after chest or breast surgery.", ur: "سینے کے زخم کو کھینچے بغیر کندھے کے حصے کو حرکت دیتی ہے، اسی لیے سینے یا چھاتی کے آپریشن کے پہلے دنوں میں محفوظ ہے۔" },
    exerciseType: "Range of motion",
    difficulty: "Beginner",
    contraction: ["Concentric"],
    mode: "Active",
    load: "No load",
    position: "Sitting",
    equipment: ["Chair"],
    startingPosition: { en: "Sit upright and well supported with both arms resting loosely in your lap.", ur: "سیدھے اور اچھے سہارے کے ساتھ بیٹھیں، دونوں بازو گود میں ڈھیلے رکھے ہوں۔" },
    quickSteps: {
      en: [
        "Sit upright with the arms resting in your lap.",
        "Lift both shoulders up, then roll them back and down.",
        "Repeat slowly five times.",
      ],
      ur: [
        "سیدھے بیٹھیں، بازو گود میں رکھے ہوں۔",
        "دونوں کندھے اوپر اٹھائیں، پھر پیچھے اور نیچے گھمائیں۔",
        "آہستہ پانچ بار دہرائیں۔",
      ],
    },
    steps: {
      en: [
        "Sit upright with the back supported and the arms resting in the lap.",
        "Lift both shoulders straight up towards the ears.",
        "Roll them backwards, drawing the shoulder blades gently together.",
        "Let them drop down and forward, completing the circle.",
        "Move slowly and stop short of anything that pulls at the wound.",
      ],
      ur: [
        "کمر کو سہارا دے کر سیدھے بیٹھیں، بازو گود میں رکھے ہوں۔",
        "دونوں کندھے سیدھے کانوں کی طرف اٹھائیں۔",
        "انہیں پیچھے گھمائیں، شانے کی ہڈیاں نرمی سے ملائیں۔",
        "پھر نیچے اور آگے آنے دیں، دائرہ مکمل کریں۔",
        "آہستہ حرکت کریں اور زخم کھنچنے سے پہلے رک جائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Backwards rolls open the chest; forwards rolls close it. Do more backwards.",
        "This can usually be started the day after surgery.",
        "Stop and report any sudden increase in wound pain.",
      ],
      ur: [
        "پیچھے کے دائرے سینہ کھولتے ہیں؛ آگے کے بند کرتے ہیں۔ پیچھے زیادہ کریں۔",
        "یہ عموماً آپریشن کے اگلے دن شروع کی جا سکتی ہے۔",
        "زخم کے درد میں اچانک اضافہ ہو تو رک کر بتائیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Going beyond the range your surgeon allowed.",
        "Pushing into sharp pain.",
        "Skipping days and then doing double.",
        "Holding the breath during the effort.",
      ],
      ur: [
        "سرجن کی اجازت سے زیادہ حرکت کرنا۔",
        "تیز درد تک زور لگانا۔",
        "دن چھوڑ کر پھر دگنا کرنا۔",
        "زور لگاتے وقت سانس روکنا۔",
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
    repetitions: "5 each direction",
    sets: "3",
    holdTime: "—",
    frequency: "3–4 times daily",
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
      rationale: "Early shoulder girdle movement is standard after chest and breast surgery. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ shoulderNear: 150, elbowNear: 90, shoulderFar: 150, elbowFar: 90 }, SEATED), travel: 800, hold: 400, label: "Sitting, arms in the lap" },
        { pose: pose({ shoulderNear: 154, elbowNear: 88, shoulderFar: 154, elbowFar: 88, thorax: -5 }, SEATED), travel: 1000, hold: 900, label: "Roll the shoulders back and down" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-L-014",
    slug: "log-roll-technique",
    name: { en: "Rolling Over after Back Surgery", ur: "کمر کے آپریشن کے بعد کروٹ لینا" },
    bodyRegion: "Lumbar",
    joint: ["Lumbar spine L1–L5", "Thoracic spine T1–T12"],
    musclesTargeted: ["Transversus abdominis", "Obliques", "Erector spinae"],
    conditions: ["Post-spinal-surgery rehabilitation", "Spinal fusion", "Vertebral fracture", "Acute low back pain"],
    purpose: { en: "Turning over in bed is the movement that twists a healing spine most. Rolling in one piece is how it is done safely, and it must be practised.", ur: "بستر میں کروٹ لینا وہ حرکت ہے جو ٹھیک ہوتی ریڑھ کو سب سے زیادہ مروڑتی ہے۔ پورے جسم کو ایک ساتھ گھمانا ہی محفوظ طریقہ ہے، اور اس کی مشق ضروری ہے۔" },
    exerciseType: "Functional & gait",
    difficulty: "Beginner",
    contraction: ["Isometric", "Concentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Supine",
    equipment: ["Bed or exercise mat"],
    startingPosition: { en: "Lie on your back with the knees bent and the feet flat on the bed.", ur: "سیدھے لیٹ جائیں، گھٹنے مڑے اور پاؤں بستر پر۔" },
    quickSteps: {
      en: [
        "Lie on your back with the knees bent.",
        "Tighten the stomach, then roll head, shoulders and hips together.",
        "Never twist — the whole body turns as one piece.",
      ],
      ur: [
        "سیدھے لیٹ جائیں، گھٹنے مڑے۔",
        "پیٹ سخت کریں، پھر سر، کندھے اور کولہے ایک ساتھ گھمائیں۔",
        "کبھی نہ مڑیں — پورا جسم ایک ٹکڑے کی طرح گھومے۔",
      ],
    },
    steps: {
      en: [
        "Lie on your back with the knees bent and feet flat.",
        "Tighten the lower stomach gently to brace the spine.",
        "Turn the head towards the side you are rolling to.",
        "Roll the shoulders, ribs and hips over together, as one solid block.",
        "Use the top arm to help push, and keep the knees together throughout.",
      ],
      ur: [
        "سیدھے لیٹ جائیں، گھٹنے مڑے اور پاؤں بستر پر۔",
        "ریڑھ کو سہارا دینے کے لیے پیٹ کا نچلا حصہ ہلکا سخت کریں۔",
        "سر اُس طرف گھمائیں جس طرف کروٹ لینی ہے۔",
        "کندھے، پسلیاں اور کولہے ایک ساتھ، ایک ٹھوس بلاک کی طرح گھمائیں۔",
        "اوپر والے بازو سے دھکا دیں اور گھٹنے پوری حرکت میں ملے رکھیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "If your shoulders and hips arrive at different times, you have twisted.",
        "Practise this before surgery if you can; it is much harder to learn afterwards.",
        "Use it to get in and out of bed as well as to turn over.",
      ],
      ur: [
        "کندھے اور کولہے الگ الگ وقت پر پہنچیں تو آپ مڑ گئے ہیں۔",
        "ہو سکے تو آپریشن سے پہلے مشق کریں؛ بعد میں سیکھنا کہیں مشکل ہے۔",
        "کروٹ کے علاوہ بستر پر آنے جانے کے لیے بھی یہی طریقہ اپنائیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Turning the shoulders before the hips.",
        "Reaching across with the top arm and twisting.",
        "Letting the knees separate.",
        "Holding the breath.",
      ],
      ur: [
        "کولہوں سے پہلے کندھے گھمانا۔",
        "اوپر والے بازو سے آر پار پہنچ کر مڑ جانا۔",
        "گھٹنوں کا الگ ہو جانا۔",
        "سانس روکنا۔",
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
    repetitions: "5 each side",
    sets: "1",
    holdTime: "—",
    frequency: "Each time you turn over",
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
      rationale: "Log rolling is standard practice after spinal surgery and in acute back pain. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        // The whole point of a log roll is that nothing moves relative to
        // anything else — so every joint angle is identical across the roll and
        // only `roll` changes. Previously the hips and knees shifted a few
        // degrees as it turned, which read as the knees doing the work.
        { pose: pose({ roll: 0, shoulderNear: 140, elbowNear: 60, shoulderFar: 140, elbowFar: 60 }, SUPINE), travel: 800, hold: 500, label: "On your back, knees bent, arms folded" },
        { pose: pose({ roll: 46, shoulderNear: 140, elbowNear: 60, shoulderFar: 140, elbowFar: 60 }, SUPINE), travel: 900, hold: 300, label: "Turn head, shoulders and hips together" },
        { pose: pose({ roll: 90, shoulderNear: 140, elbowNear: 60, shoulderFar: 140, elbowFar: 60 }, SUPINE), travel: 900, hold: 900, label: "All the way onto your side, in one piece" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-L-015",
    slug: "post-spinal-walking-programme",
    name: { en: "Walking Programme after Back Surgery", ur: "کمر کے آپریشن کے بعد چلنے کا پروگرام" },
    bodyRegion: "Lumbar",
    joint: ["Lumbar spine L1–L5", "Hip"],
    musclesTargeted: ["Erector spinae", "Multifidus", "Gluteus maximus", "Quadriceps femoris"],
    conditions: ["Post-spinal-surgery rehabilitation", "Spinal fusion", "Discectomy recovery", "Deconditioning"],
    purpose: { en: "After back surgery, walking is the treatment. A little and often, built up by the clock rather than by how you feel that day, is what recovers a spine.", ur: "کمر کے آپریشن کے بعد چلنا ہی علاج ہے۔ تھوڑا اور بار بار، اور اضافہ گھڑی کے حساب سے کریں، اُس دن کی کیفیت کے حساب سے نہیں۔" },
    exerciseType: "Functional & gait",
    difficulty: "Beginner",
    contraction: ["Concentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["Flat, even ground"],
    startingPosition: { en: "Stand tall on flat, even ground with supportive shoes on.", ur: "ہموار اور برابر زمین پر سہارے والے جوتے پہن کر سیدھے کھڑے ہوں۔" },
    quickSteps: {
      en: [
        "Walk on flat ground for the number of minutes you were given.",
        "Walk tall, looking ahead, with an even stride.",
        "Add one or two minutes a day, not more.",
      ],
      ur: [
        "ہموار زمین پر اُتنے منٹ چلیں جتنے آپ کو بتائے گئے ہوں۔",
        "سیدھے کھڑے ہو کر، سامنے دیکھتے ہوئے، برابر قدموں سے چلیں۔",
        "روزانہ ایک دو منٹ بڑھائیں، اس سے زیادہ نہیں۔",
      ],
    },
    steps: {
      en: [
        "Start with the time your physiotherapist gave you, however short.",
        "Walk on flat, even ground — not on a slope or rough track at first.",
        "Stand tall, look ahead, and let the arms swing naturally.",
        "Stop at the planned time even if you feel able to continue.",
        "Add one or two minutes each day, and note what you managed.",
      ],
      ur: [
        "اُتنے وقت سے شروع کریں جتنا فزیو تھراپسٹ نے بتایا ہو، چاہے کتنا ہی کم ہو۔",
        "ہموار اور برابر زمین پر چلیں — شروع میں ڈھلوان یا کچے راستے پر نہیں۔",
        "سیدھے کھڑے ہوں، سامنے دیکھیں، اور بازو قدرتی طور پر جھولنے دیں۔",
        "طے شدہ وقت پر رک جائیں چاہے مزید چل سکتے ہوں۔",
        "روزانہ ایک دو منٹ بڑھائیں، اور جو کیا وہ لکھ لیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Doing too much on a good day and nothing for two days after is the commonest mistake.",
        "Several short walks beat one long one in the first month.",
        "Report new leg pain, numbness, or any change in bladder or bowel control at once.",
      ],
      ur: [
        "اچھے دن بہت زیادہ کر لینا اور پھر دو دن کچھ نہ کرنا سب سے عام غلطی ہے۔",
        "پہلے مہینے میں کئی چھوٹی سیریں ایک لمبی سے بہتر ہیں۔",
        "ٹانگ میں نیا درد، سُن پن، یا پیشاب پاخانے کے قابو میں تبدیلی فوراً بتائیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Walking too far on a good day.",
        "Walking on uneven ground too soon.",
        "Carrying bags in one hand.",
        "Ignoring new leg symptoms.",
      ],
      ur: [
        "اچھے دن بہت دور تک چلنا۔",
        "بہت جلد ناہموار زمین پر چلنا۔",
        "ایک ہاتھ میں تھیلے اٹھانا۔",
        "ٹانگ کی نئی علامات کو نظرانداز کرنا۔",
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
    repetitions: "As prescribed",
    sets: "3–4 walks",
    holdTime: "—",
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
      rationale: "Graded walking is the core of post-operative spinal rehabilitation. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: STAND, travel: 800, hold: 400, label: "Standing tall" },
        { pose: pose({ hipNear: 26, kneeNear: 14, hipFar: -16, shoulderNear: 168, elbowNear: 20, shoulderFar: 162, elbowFar: 24 }, STAND), travel: 1000, hold: 900, label: "Walk with an even stride" },
      ],
    },
  },
];
