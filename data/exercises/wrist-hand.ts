import { pose } from "@/lib/figure";
import type { Exercise } from "../schema";
import { SEATED, STAND } from "./bases";

/* ==========================================================================
   WRIST AND HAND
   --------------------------------------------------------------------------
   Range, tendon and nerve glides, then grip and pinch. The 3D figure shows the
   whole body, so hand detail is best read from the written steps.
   ========================================================================== */

export const WRIST_HAND: Exercise[] = [
  {
    id: "EX-W-001",
    slug: "active-wrist-flexion-extension",
    name: { en: "Active Wrist Flexion and Extension", ur: "کلائی اوپر نیچے کرنا" },
    bodyRegion: "Wrist & Hand",
    joint: ["Radiocarpal"],
    musclesTargeted: ["Flexor carpi radialis", "Extensor carpi radialis", "Flexor carpi ulnaris"],
    conditions: ["Wrist stiffness", "Post-fracture rehabilitation", "Post-immobilisation"],
    purpose: { en: "Restores the up-and-down movement of the wrist needed for writing, pouring and pushing up from a chair.", ur: "کلائی کی اوپر نیچے حرکت بحال کرتی ہے جو لکھنے، پانی ڈالنے اور کرسی سے اٹھنے کے لیے ضروری ہے۔" },
    difficulty: "Beginner",
    contraction: ["Concentric", "Eccentric"],
    mode: "Active",
    load: "No load",
    position: "Sitting",
    equipment: [],
    startingPosition: { en: "Sit with the forearm resting on a table and the hand hanging just over the edge, palm down.", ur: "بیٹھ کر بازو میز پر رکھیں اور ہاتھ کنارے سے ذرا باہر لٹکائیں، ہتھیلی نیچے۔" },
    quickSteps: {
      en: [
        "Rest the forearm on a table, hand over the edge.",
        "Lift the hand up as far as is comfortable.",
        "Then lower it down as far as is comfortable.",
      ],
      ur: [
        "بازو میز پر رکھیں، ہاتھ کنارے سے باہر۔",
        "ہاتھ آرام کی حد تک اوپر اٹھائیں۔",
        "پھر آرام کی حد تک نیچے لے جائیں۔",
      ],
    },
    steps: {
      en: [
        "Keep the forearm flat and still on the table.",
        "Raise the hand upward, leading with the knuckles.",
        "Pause, then lower the hand downward.",
        "Move only at the wrist; the forearm stays put.",
      ],
      ur: [
        "بازو میز پر سیدھا اور ساکن رکھیں۔",
        "ہاتھ اوپر اٹھائیں، پوروں کی طرف سے۔",
        "رکیں، پھر ہاتھ نیچے لے جائیں۔",
        "حرکت صرف کلائی سے ہو؛ بازو ساکن رہے۔",
      ],
    },
    specialInstructions: {
      en: [
        "Move slowly and stop at the first firm resistance.",
        "Keep the fingers relaxed, not clenched.",
        "Do both directions equally.",
      ],
      ur: [
        "آہستہ حرکت دیں اور پہلی سخت رکاوٹ پر رک جائیں۔",
        "انگلیاں ڈھیلی رکھیں، مٹھی نہ بنائیں۔",
        "دونوں طرف برابر کریں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Lifting the forearm off the table.",
        "Clenching the fist.",
        "Forcing past a firm end point.",
        "Working one direction only.",
      ],
      ur: [
        "بازو میز سے اٹھا لینا۔",
        "مٹھی بھینچنا۔",
        "سخت حد سے آگے زبردستی کرنا۔",
        "صرف ایک طرف حرکت دینا۔",
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
    repetitions: "10 each way",
    sets: "3",
    holdTime: "2 seconds each end",
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
      rationale: "Active wrist range work is the standard starting point after wrist immobilisation. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ elbowNear: 88, elbowFar: 88 }, SEATED), travel: 800, hold: 400, label: "Hand lifted upward" },
        { pose: pose({ elbowNear: 96, elbowFar: 88 }, SEATED), travel: 1000, hold: 900, label: "Hand lowered downward" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-W-002",
    slug: "wrist-radial-ulnar-deviation",
    name: { en: "Wrist Side-to-Side Movement", ur: "کلائی دائیں بائیں کرنا" },
    bodyRegion: "Wrist & Hand",
    joint: ["Radiocarpal", "Midcarpal"],
    musclesTargeted: ["Extensor carpi radialis", "Flexor carpi ulnaris", "Extensor carpi ulnaris"],
    conditions: ["Wrist stiffness", "Post-fracture rehabilitation", "De Quervain's tenosynovitis"],
    purpose: { en: "Restores the sideways wrist movement used when hammering, turning a tap and lifting a jug.", ur: "کلائی کی دائیں بائیں حرکت بحال کرتی ہے جو ہتھوڑا چلانے، ٹونٹی گھمانے اور جگ اٹھانے میں کام آتی ہے۔" },
    difficulty: "Beginner",
    contraction: ["Concentric", "Eccentric"],
    mode: "Active",
    load: "No load",
    position: "Sitting",
    equipment: [],
    startingPosition: { en: "Sit with the forearm resting on a table, palm facing down and the hand flat.", ur: "بیٹھ کر بازو میز پر رکھیں، ہتھیلی نیچے اور ہاتھ سیدھا۔" },
    quickSteps: {
      en: [
        "Rest the forearm flat on a table, palm down.",
        "Move the hand towards the thumb side, then the little finger side.",
        "Keep the forearm still throughout.",
      ],
      ur: [
        "بازو میز پر سیدھا رکھیں، ہتھیلی نیچے۔",
        "ہاتھ انگوٹھے کی طرف لے جائیں، پھر چھنگلی کی طرف۔",
        "بازو پوری حرکت میں ساکن رہے۔",
      ],
    },
    steps: {
      en: [
        "Keep the whole forearm in contact with the table.",
        "Slide the hand sideways towards the thumb.",
        "Return through the middle and continue towards the little finger.",
        "Move slowly and evenly both ways.",
      ],
      ur: [
        "پورا بازو میز سے لگا رہے۔",
        "ہاتھ انگوٹھے کی طرف سرکائیں۔",
        "درمیان سے گزار کر چھنگلی کی طرف لے جائیں۔",
        "دونوں طرف آہستہ اور برابر حرکت دیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "The movement is small — a few centimetres each way.",
        "Do not lift or roll the forearm.",
        "Keep the fingers loose.",
      ],
      ur: [
        "حرکت تھوڑی ہے — ہر طرف چند سینٹی میٹر۔",
        "بازو نہ اٹھائیں نہ گھمائیں۔",
        "انگلیاں ڈھیلی رکھیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Rotating the forearm instead of moving the wrist.",
        "Lifting the elbow.",
        "Moving too far, too fast.",
        "Tensing the fingers.",
      ],
      ur: [
        "کلائی کے بجائے بازو گھمانا۔",
        "کہنی اٹھا لینا۔",
        "بہت دور اور تیز حرکت دینا۔",
        "انگلیاں سخت کرنا۔",
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
    repetitions: "10 each way",
    sets: "3",
    holdTime: "2 seconds each end",
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
      rationale: "Radial and ulnar deviation range work follows flexion and extension in wrist rehabilitation. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ elbowNear: 88, elbowFar: 88, shoulderRotNear: -10 }, SEATED), travel: 800, hold: 400, label: "Hand towards the thumb side" },
        { pose: pose({ elbowNear: 88, elbowFar: 88, shoulderRotNear: 14 }, SEATED), travel: 1000, hold: 900, label: "Hand towards the little finger side" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-W-003",
    slug: "tendon-gliding",
    name: { en: "Finger Tendon Glides", ur: "انگلیوں کی ورزش (ٹینڈن گلائیڈ)" },
    bodyRegion: "Wrist & Hand",
    joint: ["Metacarpophalangeal", "Interphalangeal"],
    musclesTargeted: ["Flexor digitorum superficialis", "Flexor digitorum profundus", "Lumbricals"],
    conditions: ["Carpal tunnel syndrome", "Hand stiffness", "Post-fracture rehabilitation", "Trigger finger"],
    purpose: { en: "Moves each finger tendon through its full path, which keeps them from sticking after injury or surgery.", ur: "ہر انگلی کے ٹینڈن کو پوری حرکت دیتی ہے تاکہ چوٹ یا آپریشن کے بعد وہ چپکیں نہیں۔" },
    difficulty: "Beginner",
    contraction: ["Concentric"],
    mode: "Active",
    load: "No load",
    position: "Sitting",
    equipment: [],
    startingPosition: { en: "Sit with the forearm supported and the hand held up, fingers straight.", ur: "بیٹھ کر بازو ٹکائیں اور ہاتھ اوپر رکھیں، انگلیاں سیدھی۔" },
    quickSteps: {
      en: [
        "Start with the fingers straight.",
        "Move through: hook fist, full fist, then straight fist.",
        "Return to straight fingers and repeat.",
      ],
      ur: [
        "انگلیاں سیدھی رکھ کر شروع کریں۔",
        "ترتیب سے: ہک مٹھی، پوری مٹھی، پھر سیدھی مٹھی۔",
        "دوبارہ سیدھی انگلیاں کریں اور دہرائیں۔",
      ],
    },
    steps: {
      en: [
        "Begin with all fingers straight and together.",
        "Make a hook fist: bend the top two joints, keep the knuckles straight.",
        "Make a full fist: curl everything in.",
        "Make a straight fist: bend the knuckles, keep the fingers straight.",
        "Return to the start between each shape.",
      ],
      ur: [
        "تمام انگلیاں سیدھی اور ملی ہوئی رکھ کر شروع کریں۔",
        "ہک مٹھی بنائیں: اوپر کے دو جوڑ موڑیں، پورے سیدھے رکھیں۔",
        "پوری مٹھی بنائیں: سب کچھ اندر موڑ لیں۔",
        "سیدھی مٹھی بنائیں: پورے موڑیں، انگلیاں سیدھی رکھیں۔",
        "ہر شکل کے بعد شروع کی حالت میں واپس آئیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Move slowly and deliberately through each shape.",
        "This should not hurt — it is a gliding exercise, not a stretch.",
        "Especially useful before and after long periods of hand use.",
      ],
      ur: [
        "ہر شکل میں آہستہ اور سوچ سمجھ کر جائیں۔",
        "اس میں درد نہیں ہونا چاہیے — یہ کھنچاؤ نہیں، حرکت کی ورزش ہے۔",
        "ہاتھ کے لمبے استعمال سے پہلے اور بعد میں خاص مفید ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Rushing through the shapes.",
        "Skipping the hook fist.",
        "Squeezing hard instead of moving through the range.",
        "Doing it only when the hand already hurts.",
      ],
      ur: [
        "شکلوں میں جلدی کرنا۔",
        "ہک مٹھی چھوڑ دینا۔",
        "حرکت کے بجائے زور سے دبانا۔",
        "صرف اُس وقت کرنا جب ہاتھ پہلے سے دُکھ رہا ہو۔",
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
    repetitions: "5 of each shape",
    sets: "3",
    holdTime: "2 seconds each",
    frequency: "3–4 times daily",
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
      rationale: "Tendon gliding exercises are standard in hand therapy for carpal tunnel syndrome and post-operative stiffness. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ elbowNear: 80, elbowFar: 88 }, SEATED), travel: 800, hold: 400, label: "Fingers straight" },
        { pose: pose({ elbowNear: 84, elbowFar: 88 }, SEATED), travel: 1000, hold: 900, label: "Through hook, full and straight fist" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-W-004",
    slug: "grip-strengthening-ball",
    name: { en: "Grip Strengthening with a Ball", ur: "گیند دبا کر گرفت مضبوط کرنا" },
    bodyRegion: "Wrist & Hand",
    joint: ["Metacarpophalangeal", "Interphalangeal"],
    musclesTargeted: ["Flexor digitorum", "Thenar muscles", "Interossei"],
    conditions: ["Grip weakness", "Post-fracture rehabilitation", "Arthritis of the hand", "Post-stroke hand weakness"],
    purpose: { en: "Rebuilds the grip needed to hold a cup, open a jar and carry shopping.", ur: "گرفت کی طاقت بحال کرتی ہے جو کپ پکڑنے، جار کھولنے اور سامان اٹھانے کے لیے ضروری ہے۔" },
    difficulty: "Beginner",
    contraction: ["Isometric", "Concentric"],
    mode: "Resisted",
    load: "Bodyweight",
    position: "Sitting",
    equipment: ["Soft ball or rolled cloth"],
    startingPosition: { en: "Sit with the forearm supported and a soft ball held in the palm.", ur: "بیٹھ کر بازو ٹکائیں اور ہتھیلی میں نرم گیند پکڑیں۔" },
    quickSteps: {
      en: [
        "Hold a soft ball in your palm.",
        "Squeeze it steadily for 5 seconds.",
        "Release slowly and rest before the next squeeze.",
      ],
      ur: [
        "ہتھیلی میں نرم گیند پکڑیں۔",
        "پانچ سیکنڈ تک مستقل دبائیں۔",
        "آہستہ چھوڑیں اور اگلی بار سے پہلے آرام کریں۔",
      ],
    },
    steps: {
      en: [
        "Support the forearm so the shoulder stays relaxed.",
        "Squeeze the ball with the whole hand, thumb included.",
        "Hold the squeeze steadily, breathing normally.",
        "Release fully and let the hand open before repeating.",
      ],
      ur: [
        "بازو ٹکائیں تاکہ کندھا ڈھیلا رہے۔",
        "پوری ہتھیلی سے، انگوٹھے سمیت، گیند دبائیں۔",
        "مستقل دبائے رکھیں اور سانس لیتے رہیں۔",
        "پوری طرح چھوڑیں اور ہاتھ کھلنے دیں، پھر دہرائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Squeeze to about seven out of ten effort, not maximum.",
        "If the hand aches the next day, do fewer repetitions.",
        "A rolled cloth works as well as a ball.",
      ],
      ur: [
        "دس میں سے تقریباً سات کے زور سے دبائیں، پوری طاقت سے نہیں۔",
        "اگلے دن ہاتھ دُکھے تو کم بار کریں۔",
        "لپٹا ہوا کپڑا بھی گیند جتنا کارآمد ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Squeezing as hard as possible every time.",
        "Holding the breath.",
        "Tensing the shoulder and neck.",
        "Not letting the hand open fully between squeezes.",
      ],
      ur: [
        "ہر بار پوری طاقت سے دبانا۔",
        "سانس روک لینا۔",
        "کندھا اور گردن سخت کرنا۔",
        "دو بار کے درمیان ہاتھ پوری طرح نہ کھولنا۔",
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
    repetitions: "10",
    sets: "3",
    holdTime: "5 seconds",
    frequency: "Daily",
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
      rationale: "Graded grip strengthening is routine in hand rehabilitation across a range of conditions. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ elbowNear: 84, elbowFar: 88 }, SEATED), travel: 800, hold: 400, label: "Ball resting in the palm" },
        { pose: pose({ elbowNear: 88, elbowFar: 88 }, SEATED), travel: 1000, hold: 900, label: "Squeeze and hold 5 seconds" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-W-005",
    slug: "median-nerve-glide",
    name: { en: "Median Nerve Glide", ur: "میڈین نرو کی حرکت" },
    bodyRegion: "Wrist & Hand",
    joint: ["Radiocarpal", "Humeroulnar"],
    musclesTargeted: ["Median nerve pathway"],
    conditions: ["Carpal tunnel syndrome", "Median nerve irritation", "Post-immobilisation tingling"],
    purpose: { en: "Moves the nerve gently along its path, which can ease the tingling of carpal tunnel syndrome.", ur: "عصب کو اس کے راستے پر نرمی سے حرکت دیتی ہے، جس سے کارپل ٹنل کی سنسناہٹ کم ہو سکتی ہے۔" },
    difficulty: "Beginner",
    contraction: ["Passive"],
    mode: "Active",
    load: "No load",
    position: "Standing",
    equipment: [],
    startingPosition: { en: "Stand or sit with the arm out to the side at shoulder height, elbow straight, palm facing up.", ur: "کھڑے یا بیٹھ کر بازو کندھے کی اونچائی پر ایک طرف پھیلائیں، کہنی سیدھی، ہتھیلی اوپر۔" },
    quickSteps: {
      en: [
        "Arm out to the side, palm up, elbow straight.",
        "Gently bend the wrist back so the fingers point down and away.",
        "Hold 3 seconds, release, and repeat — never push into tingling.",
      ],
      ur: [
        "بازو ایک طرف، ہتھیلی اوپر، کہنی سیدھی۔",
        "کلائی نرمی سے پیچھے موڑیں تاکہ انگلیاں نیچے باہر کی طرف ہوں۔",
        "تین سیکنڈ رکیں، چھوڑیں، دہرائیں — سنسناہٹ تک ہرگز نہ جائیں۔",
      ],
    },
    steps: {
      en: [
        "Take the arm out to the side at shoulder height.",
        "Turn the palm up and keep the elbow straight.",
        "Bend the wrist and fingers back gently.",
        "Hold briefly, then release back to neutral.",
        "Stop immediately if tingling increases.",
      ],
      ur: [
        "بازو کندھے کی اونچائی پر ایک طرف لے جائیں۔",
        "ہتھیلی اوپر کریں اور کہنی سیدھی رکھیں۔",
        "کلائی اور انگلیاں نرمی سے پیچھے موڑیں۔",
        "تھوڑا رکیں، پھر واپس معمول پر لائیں۔",
        "سنسناہٹ بڑھے تو فوراً رک جائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "This is a glide, not a stretch — it should never be held hard.",
        "Tingling that increases means you have gone too far.",
        "Little and often works better than long holds.",
      ],
      ur: [
        "یہ حرکت ہے، کھنچاؤ نہیں — اسے زور سے نہ روکیں۔",
        "سنسناہٹ بڑھنے کا مطلب ہے آپ حد سے آگے چلے گئے۔",
        "تھوڑا اور بار بار کرنا لمبے ہولڈ سے بہتر ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Holding the end position too long.",
        "Pushing into pins and needles.",
        "Dropping the shoulder into a shrug.",
        "Doing too many repetitions at first.",
      ],
      ur: [
        "آخری حالت میں بہت دیر رکنا۔",
        "سنسناہٹ تک زور لگانا۔",
        "کندھا اُچھال لینا۔",
        "شروع میں بہت زیادہ بار کرنا۔",
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
    repetitions: "5–8",
    sets: "2",
    holdTime: "3 seconds",
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
      rationale: "Neural gliding is commonly used in conservative management of carpal tunnel syndrome. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ shoulderNear: 96, shoulderAbductNear: 80, elbowNear: 24, shoulderFar: 178, elbowFar: 6 }, STAND), travel: 800, hold: 400, label: "Arm out to the side, palm up" },
        { pose: pose({ shoulderNear: 92, shoulderAbductNear: 86, elbowNear: 2, shoulderFar: 178, elbowFar: 6 }, STAND), travel: 1000, hold: 900, label: "Straighten and bend the wrist back" },
      ],
    },
  },
  {
    id: "EX-W-006",
    slug: "thumb-opposition",
    name: { en: "Thumb Opposition", ur: "انگوٹھے کو انگلیوں سے ملانا" },
    bodyRegion: "Wrist & Hand",
    joint: ["Carpometacarpal", "Metacarpophalangeal"],
    musclesTargeted: ["Opponens pollicis", "Abductor pollicis brevis", "Flexor pollicis brevis"],
    conditions: ["Thumb arthritis", "Post-fracture rehabilitation", "Carpal tunnel syndrome", "Hand weakness"],
    purpose: { en: "Restores the thumb-to-finger pinch that every fastening, button and pen needs.", ur: "انگوٹھے اور انگلیوں کی پکڑ بحال کرتی ہے جو بٹن، زپ اور قلم کے استعمال کے لیے ضروری ہے۔" },
    difficulty: "Beginner",
    contraction: ["Concentric"],
    mode: "Active",
    load: "No load",
    position: "Sitting",
    equipment: [],
    startingPosition: { en: "Sit with the forearm supported and the hand held up, fingers and thumb straight.", ur: "بیٹھ کر بازو ٹکائیں اور ہاتھ اوپر رکھیں، انگلیاں اور انگوٹھا سیدھے۔" },
    quickSteps: {
      en: [
        "Hold the hand up with fingers and thumb straight.",
        "Touch the thumb tip to each fingertip in turn.",
        "Open the hand fully between each touch.",
      ],
      ur: [
        "ہاتھ اوپر رکھیں، انگلیاں اور انگوٹھا سیدھے۔",
        "انگوٹھے کی نوک باری باری ہر انگلی کی نوک سے ملائیں۔",
        "ہر بار کے بعد ہاتھ پوری طرح کھولیں۔",
      ],
    },
    steps: {
      en: [
        "Start with the hand open and the thumb out to the side.",
        "Touch the thumb to the index fingertip, making a round O shape.",
        "Open the hand fully.",
        "Repeat to the middle, ring and little fingers in turn.",
      ],
      ur: [
        "ہاتھ کھلا اور انگوٹھا ایک طرف رکھ کر شروع کریں۔",
        "انگوٹھا شہادت کی انگلی کی نوک سے ملائیں، گول O بنائیں۔",
        "ہاتھ پوری طرح کھولیں۔",
        "درمیانی، انگوٹھی اور چھنگلی کے ساتھ باری باری دہرائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Aim for a round O shape, not a flat pinch.",
        "Opening the hand fully between touches matters as much as the touch.",
        "The little finger is the hardest — go slowly.",
      ],
      ur: [
        "گول O بنائیں، چپٹی پکڑ نہیں۔",
        "ہر بار ہاتھ پوری طرح کھولنا اتنا ہی اہم ہے۔",
        "چھنگلی سب سے مشکل ہے — آہستہ کریں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Bending the fingers to meet the thumb instead of moving the thumb.",
        "Not opening the hand between touches.",
        "Rushing through the fingers.",
        "Pressing hard rather than touching lightly.",
      ],
      ur: [
        "انگوٹھے کے بجائے انگلیاں موڑ کر ملانا۔",
        "ہر بار ہاتھ نہ کھولنا۔",
        "انگلیوں میں جلدی کرنا۔",
        "ہلکے سے چھونے کے بجائے زور سے دبانا۔",
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
    repetitions: "5 full rounds",
    sets: "3",
    holdTime: "2 seconds each touch",
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
      rationale: "Opposition exercises are standard in restoring functional pinch in hand rehabilitation. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ elbowNear: 80, elbowFar: 88 }, SEATED), travel: 800, hold: 400, label: "Hand open, thumb out" },
        { pose: pose({ elbowNear: 84, elbowFar: 88 }, SEATED), travel: 1000, hold: 900, label: "Thumb to each fingertip in turn" },
      ],
      props: [{ kind: "chair" }],
    },
  },
];
