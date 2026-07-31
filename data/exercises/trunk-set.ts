import { pose } from "@/lib/figure";
import type { Exercise } from "../schema";
import { PRONE, QUADRUPED, SEATED, SIDE_LYING, STAND, SUPINE } from "./bases";

/* ==========================================================================
   TRUNK, BREATHING AND NECK CONTROL
   --------------------------------------------------------------------------
   The rotation and breathing work for a stiff upper back, the full-effort
   plank holds, the extension positions for a disc-related back, and isometric
   neck strengthening. Drafts pending clinical review.
   ========================================================================== */

export const TRUNK_SET: Exercise[] = [
  {
    id: "EX-T-005",
    slug: "thread-the-needle",
    name: { en: "Thread the Needle", ur: "سوئی میں دھاگہ — اوپری کمر کا گھماؤ" },
    bodyRegion: "Thoracic",
    joint: ["Thoracic spine T1–T12", "Scapulothoracic"],
    musclesTargeted: ["Rhomboids", "Middle trapezius", "Thoracic rotators", "Latissimus dorsi"],
    conditions: ["Upper back stiffness", "Postural strain", "Desk work stiffness", "Shoulder blade pain"],
    purpose: { en: "Turns the stiff upper back while the hips stay locked by the floor, so the movement goes where it is needed instead of leaking into the low back.", ur: "اوپری کمر کو گھماتی ہے جبکہ کولہے فرش پر ٹکے رہتے ہیں، اس لیے حرکت وہیں ہوتی ہے جہاں ضرورت ہے، کمر کے نچلے حصے میں نہیں۔" },
    difficulty: "Beginner",
    contraction: ["Passive", "Concentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Quadruped",
    equipment: ["Exercise mat"],
    startingPosition: { en: "Kneel on all fours with your hands under your shoulders and your knees under your hips.", ur: "چاروں ہاتھ پاؤں پر آئیں، ہاتھ کندھوں کے نیچے اور گھٹنے کولہوں کے نیچے۔" },
    quickSteps: {
      en: [
        "Kneel on all fours with a flat back.",
        "Slide one arm under the body, palm up, until the shoulder rests on the floor.",
        "Hold 20 seconds, then unwind and swap sides.",
      ],
      ur: [
        "چاروں ہاتھ پاؤں پر آئیں، کمر سیدھی۔",
        "ایک بازو جسم کے نیچے سے گزاریں، ہتھیلی اوپر، یہاں تک کہ کندھا فرش پر ٹک جائے۔",
        "بیس سیکنڈ رکیں، پھر واپس آئیں اور طرف بدلیں۔",
      ],
    },
    steps: {
      en: [
        "Set the hands under the shoulders and the knees under the hips.",
        "Slide one hand along the floor under the body and across to the far side.",
        "Let that shoulder and the side of the head come down to rest on the floor.",
        "Keep the hips stacked over the knees — they should not follow the arm.",
        "Hold, breathing out into the upper back, then slide back up.",
      ],
      ur: [
        "ہاتھ کندھوں کے نیچے اور گھٹنے کولہوں کے نیچے رکھیں۔",
        "ایک ہاتھ فرش پر گھسیٹتے ہوئے جسم کے نیچے سے دوسری طرف لے جائیں۔",
        "اُس کندھے اور سر کے پہلو کو فرش پر ٹکنے دیں۔",
        "کولہے گھٹنوں کے اوپر ہی رہیں — بازو کے ساتھ نہ گھومیں۔",
        "رکیں، سانس اوپری کمر کی طرف چھوڑیں، پھر واپس اوپر آئیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "The hips stay square — if they rotate, the upper back stops working.",
        "The stretch belongs between the shoulder blades, not in the neck.",
        "Rest the head on the floor rather than holding it up.",
      ],
      ur: [
        "کولہے سیدھے رہیں — گھوم گئے تو اوپری کمر پر اثر ختم ہو جاتا ہے۔",
        "کھنچاؤ شانوں کے درمیان محسوس ہو، گردن میں نہیں۔",
        "سر فرش پر ٹکا دیں، اٹھائے نہ رکھیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting the hips rotate with the shoulders.",
        "Pushing to the point of neck pain.",
        "Holding the breath.",
        "Coming back up too quickly.",
      ],
      ur: [
        "کولہوں کا کندھوں کے ساتھ گھوم جانا۔",
        "اتنا زور لگانا کہ گردن میں درد ہو۔",
        "سانس روکنا۔",
        "بہت جلدی واپس اٹھ جانا۔",
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
      rationale: "Quadruped thoracic rotation is a common low-load mobility exercise for the stiff upper back. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: QUADRUPED, travel: 800, hold: 400, label: "All fours, back flat" },
        { pose: pose({ shoulderNear: 96, shoulderAbductNear: -78, elbowNear: 10, thorax: 12 }, QUADRUPED), travel: 1000, hold: 900, label: "Thread the arm under the body" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-T-006",
    slug: "open-book-rotation",
    name: { en: "Open Book Rotation", ur: "کتاب کھولنے والی ورزش" },
    bodyRegion: "Thoracic",
    joint: ["Thoracic spine T1–T12", "Shoulder"],
    musclesTargeted: ["Thoracic rotators", "Pectoralis major", "Serratus anterior", "Rhomboids"],
    conditions: ["Upper back stiffness", "Chest tightness", "Rounded posture", "Rib cage stiffness"],
    purpose: { en: "Opens the chest and turns the upper back in side-lying, where the bent hips stop the low back from taking over.", ur: "پہلو پر لیٹ کر سینہ کھولتی اور اوپری کمر کو گھماتی ہے، جہاں مڑے ہوئے کولہے کمر کے نچلے حصے کو حرکت لینے سے روکتے ہیں۔" },
    difficulty: "Beginner",
    contraction: ["Passive", "Concentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Side-lying",
    equipment: ["Exercise mat"],
    startingPosition: { en: "Lie on one side with your hips and knees bent to about ninety degrees and both arms straight out in front at shoulder height.", ur: "ایک پہلو پر لیٹ جائیں، کولہے اور گھٹنے تقریباً نوے درجے مڑے ہوں اور دونوں بازو کندھے کی اونچائی پر سامنے سیدھے ہوں۔" },
    quickSteps: {
      en: [
        "Lie on your side, knees bent, both arms out in front.",
        "Sweep the top arm up and over, opening the chest towards the ceiling.",
        "Hold 15 seconds, return, then swap sides.",
      ],
      ur: [
        "پہلو پر لیٹیں، گھٹنے مڑے، دونوں بازو سامنے۔",
        "اوپر والا بازو اوپر اور پیچھے لے جائیں، سینہ چھت کی طرف کھولیں۔",
        "پندرہ سیکنڈ رکیں، واپس آئیں، پھر طرف بدلیں۔",
      ],
    },
    steps: {
      en: [
        "Stack the knees and keep them together on the floor throughout.",
        "Reach the top arm forward, then sweep it up in a wide arc.",
        "Let the head turn to follow the moving hand.",
        "Take the arm as far towards the floor behind as it will comfortably go.",
        "Hold, then bring the arm back the same way.",
      ],
      ur: [
        "گھٹنے ایک دوسرے پر رکھیں اور پوری ورزش میں فرش پر ملے رہیں۔",
        "اوپر والا بازو آگے بڑھائیں، پھر بڑے دائرے میں اوپر لے جائیں۔",
        "سر کو ہاتھ کے ساتھ گھومنے دیں۔",
        "بازو کو آرام کی حد تک پیچھے فرش کی طرف لے جائیں۔",
        "رکیں، پھر بازو اسی راستے واپس لائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "The knees must stay down and together — that is what protects the low back.",
        "The eyes follow the hand; this frees the upper back.",
        "Go only as far as the shoulder allows without pain.",
      ],
      ur: [
        "گھٹنے نیچے اور ملے رہیں — یہی کمر کی حفاظت کرتا ہے۔",
        "نظریں ہاتھ کے ساتھ رہیں؛ اس سے اوپری کمر کھلتی ہے۔",
        "صرف اتنا جائیں جتنا کندھا بغیر درد کے اجازت دے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting the top knee lift off the floor.",
        "Forcing the arm down to touch the floor.",
        "Keeping the head facing forward.",
        "Moving quickly instead of breathing through it.",
      ],
      ur: [
        "اوپر والے گھٹنے کا فرش سے اٹھ جانا۔",
        "بازو کو زبردستی فرش تک لے جانا۔",
        "سر کو سامنے ہی رکھنا۔",
        "سانس لینے کے بجائے جلدی جلدی حرکت کرنا۔",
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
      rationale: "Side-lying open book rotation is widely used for thoracic mobility and anterior chest tightness. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ shoulderNear: 90, elbowNear: 8, shoulderFar: 90, elbowFar: 8 }, SIDE_LYING), travel: 800, hold: 400, label: "Both arms out in front" },
        { pose: pose({ shoulderNear: 92, shoulderAbductNear: 95, elbowNear: 8, shoulderFar: 90, elbowFar: 8 }, SIDE_LYING), travel: 1000, hold: 900, label: "Sweep the top arm open" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-T-007",
    slug: "diaphragmatic-breathing",
    name: { en: "Diaphragmatic Breathing", ur: "پیٹ سے سانس لینا" },
    bodyRegion: "Thoracic",
    joint: ["Thoracic spine T1–T12", "Costovertebral"],
    musclesTargeted: ["Diaphragm", "Intercostals", "Transversus abdominis"],
    conditions: ["Breathing pattern disorder", "Anxiety", "Post-COVID recovery", "Chronic pain", "Rib cage stiffness"],
    purpose: { en: "Retrains breathing to come from the diaphragm rather than the neck and shoulders, which settles both the rib cage and the nervous system.", ur: "سانس کو گردن اور کندھوں کے بجائے پردۂ شکم سے لینا سکھاتی ہے، جس سے پسلیاں اور اعصاب دونوں پرسکون ہوتے ہیں۔" },
    difficulty: "Beginner",
    contraction: ["Isometric"],
    mode: "Active",
    load: "No load",
    position: "Supine",
    equipment: ["Exercise mat"],
    startingPosition: { en: "Lie on your back with your knees bent, one hand on your chest and the other on your stomach.", ur: "گھٹنے موڑ کر سیدھے لیٹ جائیں، ایک ہاتھ سینے پر اور دوسرا پیٹ پر رکھیں۔" },
    quickSteps: {
      en: [
        "Lie on your back, one hand on the chest, one on the stomach.",
        "Breathe in through the nose so the lower hand rises and the upper stays still.",
        "Breathe out slowly through the mouth.",
      ],
      ur: [
        "سیدھے لیٹ جائیں، ایک ہاتھ سینے پر، ایک پیٹ پر۔",
        "ناک سے سانس لیں تاکہ نیچے والا ہاتھ اٹھے اور اوپر والا ساکن رہے۔",
        "منہ سے آہستہ سانس چھوڑیں۔",
      ],
    },
    steps: {
      en: [
        "Settle with the knees bent and the shoulders heavy on the floor.",
        "Breathe in through the nose for a count of four, sending the air low.",
        "Feel the lower hand rise and the ribs widen sideways.",
        "Breathe out through the mouth for a count of six, letting everything soften.",
        "Pause briefly, then repeat without forcing.",
      ],
      ur: [
        "گھٹنے مڑے اور کندھے فرش پر بھاری چھوڑ کر پرسکون ہو جائیں۔",
        "ناک سے چار کی گنتی تک سانس لیں، ہوا نیچے کی طرف بھیجیں۔",
        "محسوس کریں کہ نیچے والا ہاتھ اٹھ رہا ہے اور پسلیاں پہلوؤں میں پھیل رہی ہیں۔",
        "منہ سے چھ کی گنتی تک سانس چھوڑیں، سب کچھ ڈھیلا چھوڑ دیں۔",
        "لمحہ بھر رکیں، پھر بغیر زور لگائے دہرائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "The out-breath should be longer than the in-breath.",
        "The chest hand should barely move — that is the whole test.",
        "If you feel light-headed, breathe more gently and slow down.",
      ],
      ur: [
        "سانس چھوڑنا لینے سے لمبا ہو۔",
        "سینے والا ہاتھ بمشکل ہلے — یہی اصل پیمانہ ہے۔",
        "سر ہلکا لگے تو ہلکی اور آہستہ سانس لیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Lifting the chest and shoulders with each breath.",
        "Forcing a very deep breath in.",
        "Breathing too fast.",
        "Tightening the stomach instead of letting it rise.",
      ],
      ur: [
        "ہر سانس کے ساتھ سینہ اور کندھے اٹھانا۔",
        "زبردستی بہت گہری سانس لینا۔",
        "بہت تیز سانس لینا۔",
        "پیٹ کو اٹھنے دینے کے بجائے سخت کر لینا۔",
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
    repetitions: "8–10 breaths",
    sets: "2",
    holdTime: "4 seconds in, 6 seconds out",
    frequency: "2–3 times daily",
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
      rationale: "Diaphragmatic breathing retraining is used across respiratory, pain and anxiety rehabilitation. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ shoulderNear: 152, elbowNear: 98, shoulderFar: 152, elbowFar: 98 }, SUPINE), travel: 800, hold: 400, label: "Hands on chest and stomach" },
        { pose: pose({ shoulderNear: 150, elbowNear: 94, shoulderFar: 150, elbowFar: 94, thorax: -5 }, SUPINE), travel: 1000, hold: 900, label: "Breathe in low, ribs widen" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-CO-006",
    slug: "plank-full",
    name: { en: "Front Plank", ur: "سامنے والا پلانک" },
    bodyRegion: "Core",
    joint: ["Lumbar spine L1–L5", "Hip", "Scapulothoracic"],
    musclesTargeted: ["Transversus abdominis", "Rectus abdominis", "Gluteus maximus", "Serratus anterior"],
    conditions: ["Core weakness", "Low back pain", "Return to sport", "Poor trunk control"],
    purpose: { en: "Holds the whole body in one line on the forearms and toes — the standard test and trainer of front trunk endurance.", ur: "پورے جسم کو بازوؤں اور پنجوں پر ایک سیدھی لکیر میں روکے رکھتی ہے — دھڑ کے اگلے حصے کی برداشت کا معیاری امتحان اور مشق۔" },
    difficulty: "Advanced",
    contraction: ["Isometric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Prone",
    equipment: ["Exercise mat"],
    startingPosition: { en: "Lie face down and rest on your forearms with the elbows directly under the shoulders and the toes tucked under.", ur: "اوندھے لیٹ جائیں اور بازوؤں پر ٹیک لگائیں، کہنیاں بالکل کندھوں کے نیچے اور پنجے موڑ کر فرش پر۔" },
    quickSteps: {
      en: [
        "Rest on your forearms with the elbows under the shoulders.",
        "Tuck the toes and lift the whole body into one straight line.",
        "Hold, breathing normally, then lower with control.",
      ],
      ur: [
        "بازوؤں پر ٹیک لگائیں، کہنیاں کندھوں کے نیچے۔",
        "پنجے موڑ کر پورا جسم ایک سیدھی لکیر میں اٹھائیں۔",
        "سانس لیتے ہوئے رکیں، پھر قابو سے نیچے آئیں۔",
      ],
    },
    steps: {
      en: [
        "Set the elbows directly under the shoulders, forearms flat and parallel.",
        "Tuck the toes under and tighten the lower abdomen.",
        "Lift the knees and hips so head, hips and heels make one line.",
        "Squeeze the buttocks gently to stop the hips sagging.",
        "Hold, breathing normally, then lower the knees first.",
      ],
      ur: [
        "کہنیاں بالکل کندھوں کے نیچے رکھیں، بازو فرش پر متوازی۔",
        "پنجے موڑ کر فرش پر رکھیں اور پیٹ کا نچلا حصہ سخت کریں۔",
        "گھٹنے اور کولہے اٹھائیں تاکہ سر، کولہے اور ایڑیاں ایک لکیر بنائیں۔",
        "کولہے کے پٹھے ہلکا دبائیں تاکہ کولہا نیچے نہ جھکے۔",
        "سانس لیتے ہوئے رکیں، پھر پہلے گھٹنے نیچے کریں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Quality beats time — stop the moment the hips drop.",
        "Master the plank on knees before this one.",
        "Look at the floor just in front of your hands, not forward.",
      ],
      ur: [
        "دورانیے سے معیار اہم ہے — کولہا جھکتے ہی رک جائیں۔",
        "اس سے پہلے گھٹنوں والا پلانک سیکھیں۔",
        "ہاتھوں کے ذرا آگے فرش کو دیکھیں، سامنے نہیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting the hips sag towards the floor.",
        "Lifting the hips up into a peak.",
        "Holding the breath.",
        "Dropping the head or craning the neck.",
      ],
      ur: [
        "کولہوں کا فرش کی طرف جھک جانا۔",
        "کولہوں کو اوپر اٹھا کر پہاڑ بنانا۔",
        "سانس روکنا۔",
        "سر لٹکا لینا یا گردن آگے نکالنا۔",
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
    repetitions: "4–6",
    sets: "3",
    holdTime: "20–30 seconds",
    frequency: "Every other day",
    restBetweenSets: "45 seconds",
    progressions: [],
    regressions: ["plank-knees"],
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
      rationale: "Front plank holds are a standard measure and trainer of anterior trunk endurance. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ hipNear: 0, kneeNear: 90, hipFar: 0, kneeFar: 90, shoulderNear: 90, elbowNear: 90, shoulderFar: 90, elbowFar: 90 }, PRONE), travel: 800, hold: 400, label: "Forearms down, knees bent" },
        { pose: pose({ hipNear: -6, kneeNear: 4, hipFar: -6, kneeFar: 4, ankleNear: -34, ankleFar: -34, shoulderNear: 90, elbowNear: 90, shoulderFar: 90, elbowFar: 90 }, PRONE), travel: 1000, hold: 900, label: "Lift into one straight line" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-CO-007",
    slug: "side-plank-full",
    name: { en: "Full Side Plank", ur: "مکمل سائیڈ پلانک" },
    bodyRegion: "Core",
    joint: ["Lumbar spine L1–L5", "Hip", "Scapulothoracic"],
    musclesTargeted: ["Obliques", "Quadratus lumborum", "Gluteus medius", "Serratus anterior"],
    conditions: ["Core weakness", "Lateral trunk weakness", "Hip instability", "Return to sport"],
    purpose: { en: "Takes the side plank onto the feet, which roughly doubles the load on the side of the trunk and hip.", ur: "سائیڈ پلانک کو پاؤں پر لے جاتی ہے، جس سے دھڑ اور کولہے کے پہلو پر بوجھ تقریباً دگنا ہو جاتا ہے۔" },
    difficulty: "Advanced",
    contraction: ["Isometric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Side-lying",
    equipment: ["Exercise mat"],
    startingPosition: { en: "Lie on one side propped on the lower forearm, elbow under the shoulder, legs straight and feet stacked.", ur: "ایک پہلو پر لیٹیں، نیچے والے بازو پر ٹیک، کہنی کندھے کے نیچے، ٹانگیں سیدھی اور پاؤں ایک دوسرے پر۔" },
    quickSteps: {
      en: [
        "Lie on your side propped on the forearm, legs straight.",
        "Lift the hips so the body makes one straight line.",
        "Hold, then lower with control and swap sides.",
      ],
      ur: [
        "بازو پر ٹیک لگا کر پہلو پر لیٹیں، ٹانگیں سیدھی۔",
        "کولہے اٹھائیں تاکہ جسم ایک سیدھی لکیر بنے۔",
        "رکیں، پھر قابو سے نیچے آئیں اور طرف بدلیں۔",
      ],
    },
    steps: {
      en: [
        "Place the elbow directly under the shoulder with the forearm flat.",
        "Stack the feet, or place the top foot just in front for balance.",
        "Lift the hips until ankle, hip and shoulder line up.",
        "Keep the top hip pointing forward, not rolling back.",
        "Hold, then lower the hip slowly to the floor.",
      ],
      ur: [
        "کہنی بالکل کندھے کے نیچے رکھیں، بازو فرش پر۔",
        "پاؤں ایک دوسرے پر رکھیں، یا توازن کے لیے اوپر والا پاؤں ذرا آگے۔",
        "کولہے اٹھائیں یہاں تک کہ ٹخنہ، کولہا اور کندھا ایک سیدھ میں آئیں۔",
        "اوپر والا کولہا سامنے کی طرف رکھیں، پیچھے نہ لڑھکائیں۔",
        "رکیں، پھر کولہا آہستہ فرش پر لائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Build up from the side plank on knees first.",
        "Stop the set when the hip starts to drop, not when it has dropped.",
        "Do both sides even if one is much weaker.",
      ],
      ur: [
        "پہلے گھٹنوں والے سائیڈ پلانک سے شروع کریں۔",
        "کولہا گرنے سے پہلے ہی سیٹ ختم کریں، گرنے کے بعد نہیں۔",
        "ایک طرف کمزور ہو تب بھی دونوں طرف کریں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting the hips sink towards the floor.",
        "Rolling the chest towards the floor.",
        "Putting the elbow ahead of the shoulder.",
        "Holding the breath.",
      ],
      ur: [
        "کولہوں کا فرش کی طرف بیٹھ جانا۔",
        "سینے کا فرش کی طرف لڑھک جانا۔",
        "کہنی کو کندھے سے آگے رکھنا۔",
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
    repetitions: "3–5 each side",
    sets: "3",
    holdTime: "20–30 seconds",
    frequency: "Every other day",
    restBetweenSets: "45 seconds",
    progressions: [],
    regressions: ["side-plank-knees"],
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
      rationale: "Full side plank holds are a standard progression for lateral trunk endurance. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ hipNear: 6, kneeNear: 6, hipFar: 6, kneeFar: 6, shoulderNear: 90, shoulderAbductNear: -90, elbowNear: 90, shoulderFar: 150, elbowFar: 10 }, SIDE_LYING), travel: 800, hold: 400, label: "Propped on the forearm, legs straight" },
        { pose: pose({ hipNear: 0, kneeNear: 2, hipFar: 0, kneeFar: 2, shoulderNear: 90, shoulderAbductNear: -90, elbowNear: 90, shoulderFar: 150, elbowFar: 10 }, SIDE_LYING), travel: 1000, hold: 900, label: "Lift the hips into one line" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-CO-008",
    slug: "heel-taps-supine",
    name: { en: "Supine Heel Taps", ur: "لیٹ کر ایڑی زمین پر لگانا" },
    bodyRegion: "Core",
    joint: ["Lumbar spine L1–L5", "Hip"],
    musclesTargeted: ["Transversus abdominis", "Rectus abdominis", "Iliopsoas"],
    conditions: ["Core weakness", "Low back pain", "Post-partum recovery", "Poor trunk control"],
    purpose: { en: "The gentlest way to load the deep abdominal wall: only one leg moves, and only as far as the back can stay still.", ur: "پیٹ کے گہرے پٹھوں پر بوجھ ڈالنے کا سب سے نرم طریقہ: صرف ایک ٹانگ حرکت کرتی ہے، اور صرف اتنی جتنی کمر ساکن رہ سکے۔" },
    difficulty: "Beginner",
    contraction: ["Isometric", "Eccentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Supine",
    equipment: ["Exercise mat"],
    startingPosition: { en: "Lie on your back with both knees bent up over the hips, shins level with the floor.", ur: "سیدھے لیٹ جائیں، دونوں گھٹنے کولہوں کے اوپر مڑے ہوں اور پنڈلیاں فرش کے متوازی۔" },
    quickSteps: {
      en: [
        "Lie on your back with both knees bent up over the hips.",
        "Lower one heel slowly to tap the floor.",
        "Bring it back up, then use the other leg.",
      ],
      ur: [
        "سیدھے لیٹ جائیں، دونوں گھٹنے کولہوں کے اوپر مڑے۔",
        "ایک ایڑی آہستہ نیچے لا کر فرش پر لگائیں۔",
        "واپس اوپر لائیں، پھر دوسری ٹانگ سے کریں۔",
      ],
    },
    steps: {
      en: [
        "Bring both knees up so they sit directly over the hips.",
        "Flatten the low back gently against the floor and keep it there.",
        "Lower one heel slowly until it just touches the floor.",
        "Return it to the start without letting the back arch.",
        "Alternate legs, moving slowly throughout.",
      ],
      ur: [
        "دونوں گھٹنے اوپر لائیں تاکہ وہ بالکل کولہوں کے اوپر ہوں۔",
        "کمر کو نرمی سے فرش پر دبائیں اور وہیں رکھیں۔",
        "ایک ایڑی آہستہ نیچے لائیں یہاں تک کہ فرش کو ہلکا چھوئے۔",
        "کمر کو محراب بنائے بغیر واپس شروع والی جگہ لائیں۔",
        "باری باری ٹانگیں بدلیں، پوری ورزش آہستہ کریں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Put a hand under the low back — if the pressure changes, you have gone too far.",
        "Only lower as far as the back stays flat, even if that is a few inches.",
        "Keep breathing; do not hold the breath to brace.",
      ],
      ur: [
        "ایک ہاتھ کمر کے نیچے رکھیں — دباؤ بدلے تو آپ حد سے آگے گئے۔",
        "صرف اتنا نیچے جائیں جتنا کمر سیدھی رہے، چاہے تھوڑا سا ہی ہو۔",
        "سانس لیتے رہیں؛ سختی کے لیے سانس نہ روکیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting the low back arch off the floor.",
        "Lowering the leg too fast.",
        "Moving both legs at once too early.",
        "Holding the breath.",
      ],
      ur: [
        "کمر کا فرش سے اٹھ جانا۔",
        "ٹانگ بہت تیزی سے نیچے لانا۔",
        "بہت جلد دونوں ٹانگیں ایک ساتھ حرکت دینا۔",
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
    repetitions: "8–10 each side",
    sets: "2",
    holdTime: "—",
    frequency: "Daily",
    restBetweenSets: "30 seconds",
    progressions: ["dead-bug"],
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
      rationale: "Supine leg-lowering variants are standard graded exercises for the deep abdominal wall. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ hipNear: 90, kneeNear: 90, hipFar: 90, kneeFar: 90, shoulderNear: 176, elbowNear: 6, shoulderFar: 176, elbowFar: 6 }, SUPINE), travel: 800, hold: 400, label: "Both knees up over the hips" },
        { pose: pose({ hipNear: 90, kneeNear: 90, hipFar: 44, kneeFar: 96, shoulderNear: 176, elbowNear: 6, shoulderFar: 176, elbowFar: 6 }, SUPINE), travel: 1000, hold: 900, label: "Lower one heel to the floor" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-L-006",
    slug: "sphinx-hold",
    name: { en: "Lying on Elbows", ur: "کہنیوں پر ٹیک لگا کر لیٹنا" },
    bodyRegion: "Lumbar",
    joint: ["Lumbar spine L1–L5"],
    musclesTargeted: ["Erector spinae", "Multifidus"],
    conditions: ["Disc-related low back pain", "Centralising leg pain", "Lumbar stiffness", "Flexion intolerance"],
    purpose: { en: "A long, low-effort extension held on the elbows — often the first position that eases a disc-related back, and gentler than a full press up.", ur: "کہنیوں پر ٹیک لگا کر لمبی، کم زور والی پیچھے کی حرکت — اکثر ڈسک والی کمر کے لیے پہلی آرام دہ حالت، اور مکمل پُش اپ سے زیادہ نرم۔" },
    difficulty: "Beginner",
    contraction: ["Passive"],
    mode: "Passive",
    load: "Bodyweight",
    position: "Prone",
    equipment: ["Exercise mat"],
    startingPosition: { en: "Lie face down and prop yourself onto your forearms with the elbows under the shoulders.", ur: "اوندھے لیٹ جائیں اور بازوؤں پر ٹیک لگائیں، کہنیاں کندھوں کے نیچے۔" },
    quickSteps: {
      en: [
        "Lie face down, then prop up onto your forearms.",
        "Let the stomach and hips sink towards the floor.",
        "Rest there and breathe out; hold up to 2 minutes.",
      ],
      ur: [
        "اوندھے لیٹ جائیں، پھر بازوؤں پر ٹیک لگائیں۔",
        "پیٹ اور کولہے فرش کی طرف ڈھیلے چھوڑ دیں۔",
        "وہیں آرام کریں اور سانس چھوڑیں؛ دو منٹ تک رکیں۔",
      ],
    },
    steps: {
      en: [
        "Lie face down and rest flat for a minute first.",
        "Prop up onto the forearms with the elbows under the shoulders.",
        "Let the low back sag — do not hold it up with the muscles.",
        "Breathe out and let the hips get heavier into the floor.",
        "Hold, then lower slowly back down to flat.",
      ],
      ur: [
        "پہلے اوندھے لیٹ کر ایک منٹ آرام کریں۔",
        "بازوؤں پر ٹیک لگائیں، کہنیاں کندھوں کے نیچے۔",
        "کمر کو ڈھیلا جھکنے دیں — پٹھوں سے سہارا نہ دیں۔",
        "سانس چھوڑیں اور کولہے فرش پر بھاری ہونے دیں۔",
        "رکیں، پھر آہستہ واپس سیدھے لیٹ جائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "This is a rest position, not an exercise — nothing should be working.",
        "If leg pain draws up towards the back, stay longer.",
        "If leg pain travels further down, come off it and tell your physiotherapist.",
      ],
      ur: [
        "یہ آرام کی حالت ہے، ورزش نہیں — کسی پٹھے پر زور نہیں آنا چاہیے۔",
        "ٹانگ کا درد اوپر کمر کی طرف آئے تو زیادہ دیر رکیں۔",
        "درد ٹانگ میں مزید نیچے جائے تو اٹھ جائیں اور فزیو تھراپسٹ کو بتائیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Tensing the back and buttocks to hold the position.",
        "Putting the elbows too far forward.",
        "Coming up too high too soon.",
        "Staying on it when leg pain worsens.",
      ],
      ur: [
        "حالت برقرار رکھنے کے لیے کمر اور کولہے سخت کرنا۔",
        "کہنیاں بہت آگے رکھنا۔",
        "بہت جلد بہت اوپر اٹھ جانا۔",
        "ٹانگ کا درد بڑھنے پر بھی اسی حالت میں رہنا۔",
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
    repetitions: "1–3",
    sets: "2",
    holdTime: "1–2 minutes",
    frequency: "2–3 times daily",
    restBetweenSets: "—",
    progressions: ["prone-press-up"],
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
      rationale: "Sustained prone extension in lying is a standard early position in extension-based low back management. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ shoulderNear: 176, elbowNear: 6, shoulderFar: 176, elbowFar: 6 }, PRONE), travel: 800, hold: 400, label: "Lying flat, face down" },
        { pose: pose({ shoulderNear: 112, elbowNear: 92, shoulderFar: 112, elbowFar: 92, lumbar: -34, thorax: -12 }, PRONE), travel: 1000, hold: 900, label: "Prop up onto the forearms" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-L-007",
    slug: "standing-back-extension",
    name: { en: "Standing Back Extension", ur: "کھڑے ہو کر کمر پیچھے موڑنا" },
    bodyRegion: "Lumbar",
    joint: ["Lumbar spine L1–L5"],
    musclesTargeted: ["Erector spinae", "Multifidus", "Gluteus maximus"],
    conditions: ["Low back stiffness", "Disc-related low back pain", "Prolonged sitting", "Prolonged bending at work"],
    purpose: { en: "The extension you can do anywhere — the standing answer to a day spent bent over a desk, a patient couch or a sewing machine.", ur: "پیچھے موڑنے والی وہ ورزش جو کہیں بھی کی جا سکتی ہے — سارا دن میز، مریض کے بستر یا سلائی مشین پر جھکے رہنے کا جواب۔" },
    difficulty: "Beginner",
    contraction: ["Concentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Standing",
    equipment: [],
    startingPosition: { en: "Stand tall with your feet hip-width apart and the heels of both hands on your low back.", ur: "سیدھے کھڑے ہوں، پاؤں کولہوں کے برابر فاصلے پر اور دونوں ہاتھوں کی گدی کمر پر رکھیں۔" },
    quickSteps: {
      en: [
        "Stand with your hands on your low back.",
        "Lean backwards over your hands, keeping the knees straight.",
        "Return to upright and repeat.",
      ],
      ur: [
        "ہاتھ کمر پر رکھ کر کھڑے ہوں۔",
        "گھٹنے سیدھے رکھتے ہوئے ہاتھوں کے اوپر پیچھے جھکیں۔",
        "سیدھے ہو جائیں اور دہرائیں۔",
      ],
    },
    steps: {
      en: [
        "Stand with the feet hip-width apart and the knees straight.",
        "Place the heels of both hands on the low back, fingers pointing down.",
        "Lean back over the hands as far as is comfortable.",
        "Hold for two seconds at the end of the movement.",
        "Return to upright, and go a little further next time.",
      ],
      ur: [
        "پاؤں کولہوں کے برابر فاصلے پر اور گھٹنے سیدھے رکھ کر کھڑے ہوں۔",
        "دونوں ہاتھوں کی گدی کمر پر رکھیں، انگلیاں نیچے کی طرف۔",
        "آرام کی حد تک ہاتھوں کے اوپر پیچھے جھکیں۔",
        "حرکت کے آخر میں دو سیکنڈ رکیں۔",
        "سیدھے ہو جائیں، اور اگلی بار تھوڑا زیادہ جائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Best used every hour during a day of bending or sitting.",
        "Keep the knees straight — bending them removes the effect.",
        "Ten repetitions is usually enough at one time.",
      ],
      ur: [
        "جھکنے یا بیٹھنے والے دن میں ہر گھنٹے کرنا بہترین ہے۔",
        "گھٹنے سیدھے رکھیں — موڑنے سے فائدہ ختم ہو جاتا ہے۔",
        "ایک وقت میں دس بار عموماً کافی ہیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Bending the knees to lean further.",
        "Throwing the head back hard.",
        "Bouncing at the end of the movement.",
        "Continuing if leg pain spreads further down.",
      ],
      ur: [
        "زیادہ پیچھے جانے کے لیے گھٹنے موڑ لینا۔",
        "سر کو زور سے پیچھے پھینکنا۔",
        "حرکت کے آخر میں جھٹکا دینا۔",
        "ٹانگ کا درد نیچے پھیلنے پر بھی جاری رکھنا۔",
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
    sets: "1",
    holdTime: "2 seconds",
    frequency: "Hourly during a day of sitting or bending",
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
      rationale: "Standing extension in the workplace is a standard self-management technique for mechanical low back pain. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ shoulderNear: 168, elbowNear: 72, shoulderFar: 168, elbowFar: 72 }, STAND), travel: 800, hold: 400, label: "Standing, hands on the low back" },
        { pose: pose({ shoulderNear: 168, elbowNear: 78, shoulderFar: 168, elbowFar: 78, lumbar: -18, thorax: -6, neck: -8 }, STAND), travel: 1000, hold: 900, label: "Lean back over the hands" },
      ],
    },
  },
  {
    id: "EX-CX-007",
    slug: "cervical-isometric-rotation",
    name: { en: "Neck Isometric — Rotation", ur: "گردن کی ساکن مزاحمتی ورزش" },
    bodyRegion: "Cervical",
    joint: ["Cervical spine C1–C7", "Atlantoaxial"],
    musclesTargeted: ["Sternocleidomastoid", "Splenius capitis", "Deep neck flexors", "Upper trapezius"],
    conditions: ["Neck weakness", "Whiplash recovery", "Cervicogenic headache", "Postural strain"],
    purpose: { en: "Builds neck strength without any movement, which is why it can be started early after a whiplash when turning the head still hurts.", ur: "بغیر حرکت کے گردن کی طاقت بڑھاتی ہے، اسی لیے وہپلیش کے بعد جب گردن گھمانے میں درد ہو تب بھی جلد شروع کی جا سکتی ہے۔" },
    difficulty: "Beginner",
    contraction: ["Isometric"],
    mode: "Resisted",
    load: "Bodyweight",
    position: "Sitting",
    equipment: ["Chair"],
    startingPosition: { en: "Sit tall on a firm chair with your eyes level and one hand resting against the side of your forehead.", ur: "مضبوط کرسی پر سیدھے بیٹھیں، نظریں سیدھی اور ایک ہاتھ پیشانی کے پہلو پر رکھیں۔" },
    quickSteps: {
      en: [
        "Sit tall and place one hand against the side of your forehead.",
        "Press the head into the hand as if turning, but let nothing move.",
        "Hold 5 seconds, release, then do the other side.",
      ],
      ur: [
        "سیدھے بیٹھیں اور ایک ہاتھ پیشانی کے پہلو پر رکھیں۔",
        "سر کو ہاتھ میں ایسے دبائیں جیسے گھمانا ہو، مگر کچھ حرکت نہ کرے۔",
        "پانچ سیکنڈ رکیں، چھوڑیں، پھر دوسری طرف کریں۔",
      ],
    },
    steps: {
      en: [
        "Sit tall with the shoulders relaxed and the chin level.",
        "Rest the palm against the side of the forehead.",
        "Try to turn the head into the hand while the hand holds it still.",
        "Build the effort over two seconds, hold, then release over two seconds.",
        "Rest, then repeat on the other side.",
      ],
      ur: [
        "سیدھے بیٹھیں، کندھے ڈھیلے اور ٹھوڑی برابر۔",
        "ہتھیلی پیشانی کے پہلو پر رکھیں۔",
        "سر کو ہاتھ کی طرف گھمانے کی کوشش کریں جبکہ ہاتھ اسے روکے رکھے۔",
        "زور دو سیکنڈ میں بڑھائیں، رکیں، پھر دو سیکنڈ میں چھوڑیں۔",
        "آرام کریں، پھر دوسری طرف دہرائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Nothing should move — if the head turns, you are pressing too hard.",
        "Use about half your maximum effort, no more.",
        "Keep the jaw and shoulders relaxed throughout.",
      ],
      ur: [
        "کچھ حرکت نہ کرے — سر گھوم جائے تو آپ زیادہ زور لگا رہے ہیں۔",
        "زیادہ سے زیادہ طاقت کا تقریباً آدھا استعمال کریں، اس سے زیادہ نہیں۔",
        "جبڑا اور کندھے پوری ورزش میں ڈھیلے رکھیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting the head actually turn.",
        "Pressing at full strength.",
        "Shrugging the shoulders.",
        "Holding the breath during the hold.",
      ],
      ur: [
        "سر کا واقعی گھوم جانا۔",
        "پوری طاقت سے دبانا۔",
        "کندھے اُچھالنا۔",
        "روکنے کے دوران سانس روکنا۔",
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
    repetitions: "5 each side",
    sets: "2",
    holdTime: "5 seconds",
    frequency: "Daily",
    restBetweenSets: "20 seconds",
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
      rationale: "Isometric cervical strengthening is routine in whiplash and chronic neck pain rehabilitation. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ shoulderNear: 174, elbowNear: 22 }, SEATED), travel: 800, hold: 400, label: "Sitting tall, hand by the head" },
        { pose: pose({ shoulderNear: 58, shoulderAbductNear: 22, elbowNear: 126 }, SEATED), travel: 1000, hold: 900, label: "Press into the hand and hold" },
      ],
      props: [{ kind: "chair" }],
    },
  },
];
