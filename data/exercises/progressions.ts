import { pose } from "@/lib/figure";
import type { Exercise } from "../schema";
import { PRONE, SEATED, STAND, SUPINE } from "./bases";

/* ==========================================================================
   PROGRESSIONS AND LOADED WORK
   --------------------------------------------------------------------------
   The harder end of each region's ladder: banded and weighted resistance,
   single-leg loading, and the eccentric tendon protocols. Drafts pending the
   clinical review each record's evidence field already flags.
   ========================================================================== */

export const PROGRESSIONS: Exercise[] = [
  {
    id: "EX-S-024",
    slug: "shoulder-clock-wall",
    name: { en: "Wall Clock Reaches", ur: "دیوار پر گھڑی کی طرح ہاتھ گھمانا" },
    bodyRegion: "Shoulder",
    joint: ["Glenohumeral", "Scapulothoracic"],
    musclesTargeted: ["Deltoid", "Serratus anterior", "Rotator cuff"],
    conditions: ["Frozen shoulder", "Shoulder stiffness", "Post-immobilisation"],
    purpose: { en: "Takes the shoulder through every direction using the wall for support, so range returns in all planes not just one.", ur: "دیوار کے سہارے کندھے کو ہر طرف حرکت دیتی ہے، تاکہ صرف ایک نہیں بلکہ ہر سمت میں حرکت بحال ہو۔" },
    exerciseType: "Range of motion",
    difficulty: "Beginner",
    contraction: ["Concentric"],
    mode: "Active-assisted",
    load: "Assisted",
    position: "Standing",
    equipment: ["Wall"],
    startingPosition: { en: "Stand facing a wall with the fingertips of the affected hand resting on it at waist height.", ur: "دیوار کے سامنے کھڑے ہوں، متاثرہ ہاتھ کی انگلیاں کمر کی اونچائی پر دیوار سے لگی ہوں۔" },
    quickSteps: {
      en: [
        "Rest your fingertips on the wall at waist height.",
        "Slide the hand to 12 o'clock, then 3, then 6, then 9.",
        "Return to the middle between each direction.",
      ],
      ur: [
        "انگلیاں کمر کی اونچائی پر دیوار پر رکھیں۔",
        "ہاتھ بارہ بجے، پھر تین، پھر چھ، پھر نو بجے کی طرف سرکائیں۔",
        "ہر سمت کے بعد درمیان میں واپس آئیں۔",
      ],
    },
    steps: {
      en: [
        "Imagine a clock face on the wall with your hand at the centre.",
        "Walk the fingers up to 12 o'clock, then come back.",
        "Repeat out to 3, down to 6 and across to 9.",
        "Let the fingers do the work — the wall carries the arm's weight.",
      ],
      ur: [
        "دیوار پر گھڑی کا تصور کریں، ہاتھ درمیان میں ہو۔",
        "انگلیوں سے چل کر بارہ بجے تک جائیں، پھر واپس آئیں۔",
        "تین، چھ اور نو بجے کی طرف دہرائیں۔",
        "کام انگلیاں کریں — بازو کا وزن دیوار اٹھائے۔",
      ],
    },
    specialInstructions: {
      en: [
        "The wall takes the weight, which is what makes this tolerable early on.",
        "Move within comfort in every direction.",
        "Step closer to the wall to reach further.",
      ],
      ur: [
        "دیوار وزن اٹھاتی ہے، اسی لیے شروع میں یہ برداشت ہو جاتی ہے۔",
        "ہر سمت میں آرام کی حد تک جائیں۔",
        "زیادہ دور تک پہنچنے کے لیے دیوار کے قریب ہوں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Shrugging the shoulder up to reach further.",
        "Leaning the body instead of moving the arm.",
        "Skipping the harder directions.",
        "Pushing into sharp pain.",
      ],
      ur: [
        "زیادہ دور جانے کے لیے کندھا اُچھالنا۔",
        "بازو کے بجائے جسم جھکانا۔",
        "مشکل سمتوں کو چھوڑ دینا۔",
        "تیز درد تک زور لگانا۔",
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
    repetitions: "2 full clocks",
    sets: "2",
    holdTime: "2 seconds each point",
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
      rationale: "Wall-supported multidirectional reaching is commonly used in early frozen shoulder management. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ shoulderNear: 150, elbowNear: 30 }, STAND), travel: 800, hold: 400, label: "Fingertips on the wall at waist height" },
        { pose: pose({ shoulderNear: 40, elbowNear: 10 }, STAND), travel: 1000, hold: 900, label: "Walk the hand around the clock" },
      ],
      props: [{ kind: "wall" }],
    },
  },
  {
    id: "EX-S-025",
    slug: "scapular-wall-slide",
    name: { en: "Wall Slide", ur: "دیوار پر بازو سرکانا" },
    bodyRegion: "Shoulder",
    joint: ["Scapulothoracic", "Glenohumeral"],
    musclesTargeted: ["Lower trapezius", "Serratus anterior", "Rotator cuff"],
    conditions: ["Shoulder impingement", "Postural rounding", "Scapular dyskinesis"],
    purpose: { en: "Trains the shoulder blade to rotate properly as the arm goes up, using the wall as a guide.", ur: "دیوار کی رہنمائی سے شانے کی ہڈی کو بازو اٹھتے وقت درست گھومنا سکھاتی ہے۔" },
    exerciseType: "Range of motion",
    difficulty: "Intermediate",
    contraction: ["Concentric", "Eccentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["Wall"],
    startingPosition: { en: "Stand with your back to a wall, forearms against it, elbows bent to 90 degrees at shoulder height.", ur: "کمر دیوار سے لگا کر کھڑے ہوں، بازو دیوار سے لگے اور کہنیاں کندھے کی اونچائی پر نوے درجے مڑی ہوں۔" },
    quickSteps: {
      en: [
        "Stand with your back and forearms against a wall.",
        "Slide the forearms up the wall, keeping contact.",
        "Slide back down slowly.",
      ],
      ur: [
        "کمر اور بازو دیوار سے لگا کر کھڑے ہوں۔",
        "بازو دیوار سے لگے رکھتے ہوئے اوپر سرکائیں۔",
        "آہستہ واپس نیچے سرکائیں۔",
      ],
    },
    steps: {
      en: [
        "Keep the back of the hands, wrists and elbows touching the wall.",
        "Set the shoulder blades down and back first.",
        "Slide the arms up as far as contact can be kept.",
        "Slide slowly back down to the start.",
      ],
      ur: [
        "ہاتھوں کی پشت، کلائیاں اور کہنیاں دیوار سے لگی رکھیں۔",
        "پہلے شانے کی ہڈیاں نیچے اور پیچھے کریں۔",
        "جہاں تک رابطہ برقرار رہے، بازو اوپر سرکائیں۔",
        "آہستہ واپس شروع کی حالت میں لائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Stop where the wrists or elbows leave the wall — that is your range.",
        "Do not let the low back arch away from the wall.",
        "Range improves over weeks; do not force it.",
      ],
      ur: [
        "جہاں کلائیاں یا کہنیاں دیوار چھوڑ دیں وہیں رکیں — یہی آپ کی حد ہے۔",
        "کمر دیوار سے نہ ہٹے۔",
        "حرکت ہفتوں میں بہتر ہوتی ہے؛ زبردستی نہ کریں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Arching the low back off the wall.",
        "Letting the elbows come away.",
        "Shrugging at the top.",
        "Sliding up too fast.",
      ],
      ur: [
        "کمر کا دیوار سے ہٹ جانا۔",
        "کہنیوں کا دیوار سے ہٹ جانا۔",
        "اوپر پہنچ کر کندھے اُچھالنا۔",
        "بہت تیز اوپر سرکانا۔",
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
    frequency: "Every other day",
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
      rationale: "Wall slides are widely used to train scapulohumeral rhythm. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ shoulderNear: 120, elbowNear: 90, shoulderAbductNear: 80, shoulderFar: 120, elbowFar: 90, shoulderAbductFar: 80 }, STAND), travel: 800, hold: 400, label: "Forearms on the wall at shoulder height" },
        { pose: pose({ shoulderNear: 50, elbowNear: 30, shoulderAbductNear: 70, shoulderFar: 50, elbowFar: 30, shoulderAbductFar: 70 }, STAND), travel: 1000, hold: 900, label: "Slide the arms up" },
      ],
      props: [{ kind: "wall" }],
    },
  },
  {
    id: "EX-EL-007",
    slug: "biceps-curl-band",
    name: { en: "Biceps Curl with Band", ur: "بینڈ کے ساتھ بازو موڑنا" },
    bodyRegion: "Elbow",
    joint: ["Humeroulnar"],
    musclesTargeted: ["Biceps brachii", "Brachialis"],
    conditions: ["Elbow flexor weakness", "Post-immobilisation", "General upper limb conditioning"],
    purpose: { en: "Builds the strength to lift and carry, which is often lost quickly after a period in a sling or cast.", ur: "اٹھانے اور اٹھا کر چلنے کی طاقت بناتی ہے، جو سلنگ یا پلستر کے بعد جلد کم ہو جاتی ہے۔" },
    exerciseType: "Strengthening",
    difficulty: "Beginner",
    contraction: ["Concentric", "Eccentric"],
    mode: "Resisted",
    load: "Resistance band",
    position: "Standing",
    equipment: ["Resistance band"],
    startingPosition: { en: "Stand on the middle of a band holding one end in each hand, arms by your sides, palms forward.", ur: "بینڈ کے درمیان پر کھڑے ہوں، دونوں سرے ہاتھوں میں پکڑیں، بازو پہلوؤں پر اور ہتھیلیاں سامنے۔" },
    quickSteps: {
      en: [
        "Stand on a band, holding an end in each hand.",
        "Bend the elbows to bring the hands towards the shoulders.",
        "Lower slowly all the way down.",
      ],
      ur: [
        "بینڈ پر کھڑے ہوں، دونوں سرے ہاتھوں میں۔",
        "کہنیاں موڑ کر ہاتھ کندھوں کی طرف لائیں۔",
        "آہستہ پوری طرح نیچے لائیں۔",
      ],
    },
    steps: {
      en: [
        "Keep the elbows tucked at your sides.",
        "Bend the elbows against the band's resistance.",
        "Pause briefly at the top.",
        "Lower slowly until the arms are fully straight.",
      ],
      ur: [
        "کہنیاں پہلوؤں سے لگی رکھیں۔",
        "بینڈ کی مزاحمت کے خلاف کہنیاں موڑیں۔",
        "اوپر تھوڑا رکیں۔",
        "آہستہ نیچے لائیں یہاں تک کہ بازو پوری طرح سیدھے ہوں۔",
      ],
    },
    specialInstructions: {
      en: [
        "The elbows stay at your sides — no swinging.",
        "Full straightening at the bottom matters.",
        "Shorten your grip on the band to make it harder.",
      ],
      ur: [
        "کہنیاں پہلو پر رہیں — جھولنا نہیں۔",
        "نیچے پوری طرح سیدھا کرنا اہم ہے۔",
        "مشکل بنانے کے لیے بینڈ کو چھوٹا پکڑیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Swinging the body to lift.",
        "Letting the elbows drift forward.",
        "Not straightening fully at the bottom.",
        "Letting the band snap back.",
      ],
      ur: [
        "اٹھانے کے لیے جسم جھلانا۔",
        "کہنیوں کا آگے کھسک جانا۔",
        "نیچے پوری طرح سیدھا نہ کرنا۔",
        "بینڈ کو یکدم واپس کھنچنے دینا۔",
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
    repetitions: "12–15",
    sets: "3",
    holdTime: "2 seconds at the top",
    frequency: "Every other day",
    restBetweenSets: "45 seconds",
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
      rationale: "Banded elbow flexion is a standard progressive resistance exercise. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ elbowNear: 8, elbowFar: 8 }, STAND), travel: 800, hold: 400, label: "Arms straight, holding the band" },
        { pose: pose({ elbowNear: 120, elbowFar: 120 }, STAND), travel: 1000, hold: 900, label: "Bend the elbows up" },
      ],
      props: [{ kind: "band", anchor: "front" }],
    },
  },
  {
    id: "EX-EL-008",
    slug: "triceps-extension-overhead",
    name: { en: "Overhead Triceps Extension", ur: "سر کے اوپر بازو سیدھا کرنا" },
    bodyRegion: "Elbow",
    joint: ["Humeroulnar"],
    musclesTargeted: ["Triceps brachii"],
    conditions: ["Triceps weakness", "Push-up difficulty", "General upper limb conditioning"],
    purpose: { en: "Strengthens the muscle that straightens the elbow, needed for pushing up out of a chair or bed.", ur: "اُس پٹھے کو مضبوط کرتی ہے جو کہنی سیدھی کرتا ہے، جو کرسی یا بستر سے اٹھنے کے لیے ضروری ہے۔" },
    exerciseType: "Strengthening",
    difficulty: "Intermediate",
    contraction: ["Concentric", "Eccentric"],
    mode: "Resisted",
    load: "Free weight",
    position: "Sitting",
    equipment: ["Light dumbbell or bottle"],
    startingPosition: { en: "Sit tall holding a light weight in both hands above your head, elbows bent behind you.", ur: "سیدھے بیٹھیں، دونوں ہاتھوں سے ہلکا وزن سر کے اوپر پکڑیں، کہنیاں پیچھے مڑی ہوں۔" },
    quickSteps: {
      en: [
        "Sit tall, holding a light weight behind your head.",
        "Straighten the elbows to lift it overhead.",
        "Lower slowly back behind the head.",
      ],
      ur: [
        "سیدھے بیٹھیں، ہلکا وزن سر کے پیچھے پکڑیں۔",
        "کہنیاں سیدھی کر کے وزن اوپر لے جائیں۔",
        "آہستہ واپس سر کے پیچھے لائیں۔",
      ],
    },
    steps: {
      en: [
        "Sit tall with the low back supported.",
        "Keep the upper arms pointing at the ceiling and still.",
        "Straighten the elbows to raise the weight.",
        "Lower slowly, letting the elbows bend behind the head.",
      ],
      ur: [
        "سیدھے بیٹھیں، کمر کو سہارا ہو۔",
        "اوپری بازو چھت کی طرف اور ساکن رکھیں۔",
        "کہنیاں سیدھی کر کے وزن اٹھائیں۔",
        "آہستہ نیچے لائیں، کہنیاں سر کے پیچھے مڑنے دیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Only the elbows move; the upper arms stay vertical.",
        "Start light — this position is harder than it looks.",
        "Stop if the shoulder complains.",
      ],
      ur: [
        "صرف کہنیاں حرکت کریں؛ اوپری بازو سیدھے کھڑے رہیں۔",
        "ہلکے وزن سے شروع کریں — یہ حالت دیکھنے سے زیادہ مشکل ہے۔",
        "کندھے میں تکلیف ہو تو رک جائیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting the upper arms drift forward.",
        "Arching the low back.",
        "Using too much weight.",
        "Dropping the weight quickly.",
      ],
      ur: [
        "اوپری بازوؤں کا آگے کھسکنا۔",
        "کمر کو محراب بنانا۔",
        "بہت زیادہ وزن لینا۔",
        "وزن تیزی سے گرا دینا۔",
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
    repetitions: "10–12",
    sets: "3",
    holdTime: "2 seconds",
    frequency: "Every other day",
    restBetweenSets: "45 seconds",
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
      rationale: "Overhead triceps extension is a standard resistance exercise for elbow extensors. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ shoulderNear: 20, elbowNear: 110, shoulderFar: 20, elbowFar: 110 }, SEATED), travel: 800, hold: 400, label: "Weight behind the head" },
        { pose: pose({ shoulderNear: 16, elbowNear: 8, shoulderFar: 16, elbowFar: 8 }, SEATED), travel: 1000, hold: 900, label: "Straighten the elbows overhead" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-W-007",
    slug: "wrist-extension-strengthening",
    name: { en: "Wrist Extension Strengthening", ur: "کلائی اوپر اٹھانے کی طاقت" },
    bodyRegion: "Wrist & Hand",
    joint: ["Radiocarpal"],
    musclesTargeted: ["Extensor carpi radialis longus", "Extensor carpi radialis brevis", "Extensor digitorum"],
    conditions: ["Wrist weakness", "Tennis elbow recovery", "Grip weakness", "Post-fracture rehabilitation"],
    purpose: { en: "Strengthens the muscles that lift the wrist, which support the grip in every lifting and carrying task.", ur: "اُن پٹھوں کو مضبوط کرتی ہے جو کلائی اٹھاتے ہیں اور ہر اٹھانے والے کام میں گرفت کو سہارا دیتے ہیں۔" },
    exerciseType: "Strengthening",
    difficulty: "Beginner",
    contraction: ["Concentric", "Eccentric"],
    mode: "Resisted",
    load: "Free weight",
    position: "Sitting",
    equipment: ["Light weight (0.5–1 kg)"],
    startingPosition: { en: "Sit with the forearm resting on a table, palm down and the hand over the edge, holding a light weight.", ur: "بیٹھ کر بازو میز پر رکھیں، ہتھیلی نیچے اور ہاتھ کنارے سے باہر، ہلکا وزن پکڑیں۔" },
    quickSteps: {
      en: [
        "Rest the forearm on a table, palm down, hand over the edge.",
        "Lift the hand upward against the weight.",
        "Lower slowly.",
      ],
      ur: [
        "بازو میز پر رکھیں، ہتھیلی نیچے، ہاتھ کنارے سے باہر۔",
        "وزن کے خلاف ہاتھ اوپر اٹھائیں۔",
        "آہستہ نیچے لائیں۔",
      ],
    },
    steps: {
      en: [
        "Support the forearm fully so only the wrist moves.",
        "Lift the hand upward as far as is comfortable.",
        "Pause at the top.",
        "Lower slowly under control.",
      ],
      ur: [
        "بازو کو پوری طرح ٹکائیں تاکہ صرف کلائی حرکت کرے۔",
        "ہاتھ آرام کی حد تک اوپر اٹھائیں۔",
        "اوپر رکیں۔",
        "قابو سے آہستہ نیچے لائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Start with a very light weight — even a tin of food.",
        "The forearm must stay flat on the table.",
        "Stop if pain appears at the outer elbow.",
      ],
      ur: [
        "بہت ہلکے وزن سے شروع کریں — حتیٰ کہ کھانے کا ڈبہ بھی۔",
        "بازو میز پر سیدھا رہے۔",
        "کہنی کے باہر درد ہو تو رک جائیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Lifting the forearm off the table.",
        "Using too much weight.",
        "Dropping the hand quickly.",
        "Gripping the weight too tightly.",
      ],
      ur: [
        "بازو میز سے اٹھا لینا۔",
        "بہت زیادہ وزن لینا۔",
        "ہاتھ تیزی سے گرا دینا۔",
        "وزن کو بہت زور سے پکڑنا۔",
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
    repetitions: "12–15",
    sets: "3",
    holdTime: "2 seconds at the top",
    frequency: "Every other day",
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
      rationale: "Wrist extensor strengthening supports grip and is used in later stage tennis elbow rehabilitation. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ elbowNear: 88, elbowFar: 88 }, SEATED), travel: 800, hold: 400, label: "Hand hanging over the edge" },
        { pose: pose({ elbowNear: 94, elbowFar: 88 }, SEATED), travel: 1000, hold: 900, label: "Lift the hand upward" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-H-007",
    slug: "bridge-single-leg",
    name: { en: "Single Leg Bridge", ur: "ایک ٹانگ پر کولہے اٹھانا" },
    bodyRegion: "Pelvis & Hip",
    joint: ["Hip", "Lumbar spine L1–L5"],
    musclesTargeted: ["Gluteus maximus", "Hamstrings", "Transversus abdominis"],
    conditions: ["Gluteal weakness", "Low back pain", "Hip instability", "Return to sport"],
    purpose: { en: "A harder bridge that makes one hip do all the work, exposing and correcting side-to-side differences.", ur: "مشکل بریج جس میں سارا کام ایک کولہا کرتا ہے، جس سے دونوں طرف کا فرق سامنے آ کر درست ہوتا ہے۔" },
    exerciseType: "Strengthening",
    difficulty: "Advanced",
    contraction: ["Concentric", "Eccentric", "Isometric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Supine",
    equipment: ["Exercise mat"],
    startingPosition: { en: "Lie on your back with one knee bent and that foot flat, the other leg straightened out.", ur: "سیدھے لیٹ جائیں، ایک گھٹنا مڑا اور وہ پاؤں زمین پر، دوسری ٹانگ سیدھی۔" },
    quickSteps: {
      en: [
        "Lie on your back, one knee bent, the other leg straight.",
        "Press through the bent leg's heel and lift your hips.",
        "Hold 3 seconds, then lower slowly.",
      ],
      ur: [
        "سیدھے لیٹ جائیں، ایک گھٹنا مڑا، دوسری ٹانگ سیدھی۔",
        "مڑی ٹانگ کی ایڑی سے زور لگا کر کولہے اٹھائیں۔",
        "تین سیکنڈ رکیں، پھر آہستہ نیچے لائیں۔",
      ],
    },
    steps: {
      en: [
        "Set one foot flat with the knee bent; straighten the other leg.",
        "Tighten the lower abdomen gently.",
        "Press through the heel and lift the hips until the body is in a line.",
        "Keep the pelvis level, then lower slowly.",
      ],
      ur: [
        "ایک پاؤں زمین پر اور گھٹنا مڑا رکھیں؛ دوسری ٹانگ سیدھی کریں۔",
        "پیٹ کا نچلا حصہ ہلکا سخت کریں۔",
        "ایڑی سے زور لگا کر کولہے اٹھائیں یہاں تک کہ جسم ایک لکیر بنے۔",
        "کولہا برابر رکھیں، پھر آہستہ نیچے لائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "The pelvis must not drop on the unsupported side.",
        "Master the two-leg bridge first.",
        "If the hamstring cramps, lower the height.",
      ],
      ur: [
        "بغیر سہارے والی طرف کولہا نہ جھکے۔",
        "پہلے دونوں ٹانگوں والا بریج سیکھیں۔",
        "ران کے پچھلے پٹھے میں کھچاؤ ہو تو اونچائی کم کریں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting the pelvis tilt to one side.",
        "Arching the low back at the top.",
        "Pushing through the toes.",
        "Dropping down quickly.",
      ],
      ur: [
        "کولہے کا ایک طرف جھک جانا۔",
        "اوپر پہنچ کر کمر کو محراب بنانا۔",
        "پنجوں سے زور لگانا۔",
        "یکدم نیچے گر جانا۔",
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
    repetitions: "8–10 each side",
    sets: "3",
    holdTime: "3 seconds",
    frequency: "Every other day",
    restBetweenSets: "45 seconds",
    progressions: [],
    regressions: ["glute-bridge-ball-squeeze"],
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
      rationale: "Single leg bridging progresses gluteal loading and exposes asymmetry. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ rootRot: -90, hipNear: 45, kneeNear: 100, hipFar: 0, kneeFar: 4 }, SUPINE), travel: 800, hold: 400, label: "Lying with one leg straight" },
        { pose: pose({ rootRot: -112, hipNear: 2, kneeNear: 100, hipFar: -8, kneeFar: 4 }, SUPINE), travel: 1000, hold: 900, label: "Lift the hips on one leg" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-A-007",
    slug: "eccentric-heel-drop",
    name: { en: "Eccentric Heel Drop", ur: "ایڑی آہستہ نیچے لانا" },
    bodyRegion: "Ankle & Foot",
    joint: ["Talocrural"],
    musclesTargeted: ["Gastrocnemius", "Soleus", "Achilles tendon"],
    conditions: ["Achilles tendinopathy", "Calf weakness", "Return to running"],
    purpose: { en: "Loads the Achilles slowly on the way down, which is the approach shown to help stubborn tendon pain.", ur: "ایڑی کے ٹینڈن پر نیچے آتے وقت آہستہ بوجھ ڈالتی ہے، جو پرانے ٹینڈن درد میں مفید طریقہ ہے۔" },
    exerciseType: "Strengthening",
    difficulty: "Advanced",
    contraction: ["Eccentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["Step", "Support to hold"],
    startingPosition: { en: "Stand on a step with the balls of both feet on the edge and the heels hanging free.", ur: "سیڑھی پر کھڑے ہوں، دونوں پنجوں کے گدے کنارے پر اور ایڑیاں باہر لٹکی ہوں۔" },
    quickSteps: {
      en: [
        "Stand on a step with your heels hanging over the edge.",
        "Rise up on both toes, then take one foot off.",
        "Lower the other heel slowly over 3 seconds.",
      ],
      ur: [
        "سیڑھی پر کھڑے ہوں، ایڑیاں کنارے سے باہر لٹکی ہوں۔",
        "دونوں پنجوں پر اوپر اٹھیں، پھر ایک پاؤں ہٹا لیں۔",
        "دوسری ایڑی تین سیکنڈ میں آہستہ نیچے لائیں۔",
      ],
    },
    steps: {
      en: [
        "Hold a support for balance.",
        "Rise up onto the toes using both feet.",
        "Lift one foot off so the weight is on one leg.",
        "Lower that heel slowly below the level of the step, counting to three.",
      ],
      ur: [
        "توازن کے لیے سہارا پکڑیں۔",
        "دونوں پاؤں سے پنجوں پر اوپر اٹھیں۔",
        "ایک پاؤں ہٹا لیں تاکہ وزن ایک ٹانگ پر آ جائے۔",
        "تین گن کر وہ ایڑی سیڑھی کی سطح سے نیچے لائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Go up on two legs, come down on one — that is the whole method.",
        "Mild tendon ache during the exercise is expected.",
        "This is a later-stage exercise; build the calf first.",
      ],
      ur: [
        "اوپر دونوں ٹانگوں سے جائیں، نیچے ایک سے آئیں — یہی طریقہ ہے۔",
        "ورزش کے دوران ٹینڈن میں ہلکی تکلیف متوقع ہے۔",
        "یہ بعد کے مرحلے کی ورزش ہے؛ پہلے پنڈلی مضبوط کریں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Rising up on one leg instead of two.",
        "Dropping down quickly.",
        "Starting this too early in rehabilitation.",
        "Not letting the heel go below the step.",
      ],
      ur: [
        "ایک ٹانگ سے اوپر جانا۔",
        "تیزی سے نیچے گرنا۔",
        "علاج کے بہت ابتدائی مرحلے میں شروع کرنا۔",
        "ایڑی کو سیڑھی سے نیچے نہ جانے دینا۔",
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
    repetitions: "15 each side",
    sets: "3",
    holdTime: "3 seconds lowering",
    frequency: "Daily",
    restBetweenSets: "60 seconds",
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
      rationale: "Eccentric heel drops are a well-established loading protocol for Achilles tendinopathy. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ ankleNear: 30, ankleFar: 30 }, STAND), travel: 800, hold: 400, label: "Up on both toes" },
        { pose: pose({ ankleNear: -22, ankleFar: 10, hipFar: 18, kneeFar: 40 }, STAND), travel: 1000, hold: 900, label: "Lower one heel slowly" },
      ],
    },
  },
  {
    id: "EX-CO-005",
    slug: "plank-knees",
    name: { en: "Front Plank on Knees", ur: "گھٹنوں پر فرنٹ پلانک" },
    bodyRegion: "Core",
    joint: ["Lumbar spine L1–L5", "Scapulothoracic"],
    musclesTargeted: ["Transversus abdominis", "Rectus abdominis", "Serratus anterior"],
    conditions: ["Core weakness", "Low back pain", "General conditioning"],
    purpose: { en: "Trains the whole front of the trunk to hold a straight line, which is what stops the back sagging under load.", ur: "پورے اگلے دھڑ کو سیدھی لکیر برقرار رکھنا سکھاتی ہے، جو بوجھ کے نیچے کمر کو جھکنے سے روکتا ہے۔" },
    exerciseType: "Stabilisation & motor control",
    difficulty: "Beginner",
    contraction: ["Isometric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Prone",
    equipment: ["Exercise mat"],
    startingPosition: { en: "Kneel and rest on your forearms with your elbows under your shoulders and your knees behind you.", ur: "گھٹنوں کے بل آئیں اور بازوؤں پر ٹیک لگائیں، کہنیاں کندھوں کے نیچے اور گھٹنے پیچھے ہوں۔" },
    quickSteps: {
      en: [
        "Rest on your forearms and knees, elbows under your shoulders.",
        "Lift the hips so the body forms a straight line from head to knees.",
        "Hold 20 seconds, breathing normally.",
      ],
      ur: [
        "بازوؤں اور گھٹنوں پر ٹیک لگائیں، کہنیاں کندھوں کے نیچے۔",
        "کولہے اٹھائیں تاکہ سر سے گھٹنوں تک سیدھی لکیر بنے۔",
        "بیس سیکنڈ رکیں اور سانس لیتے رہیں۔",
      ],
    },
    steps: {
      en: [
        "Place the elbows directly under the shoulders.",
        "Tighten the lower abdomen gently.",
        "Lift the hips so head, shoulders, hips and knees line up.",
        "Hold, breathing normally, then lower with control.",
      ],
      ur: [
        "کہنیاں بالکل کندھوں کے نیچے رکھیں۔",
        "پیٹ کا نچلا حصہ ہلکا سخت کریں۔",
        "کولہے اٹھائیں تاکہ سر، کندھے، کولہے اور گھٹنے ایک سیدھ میں آئیں۔",
        "رکیں، سانس لیتے رہیں، پھر قابو سے نیچے لائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "The hips must not sag or pike up.",
        "Stop the hold when the form breaks, not when you are exhausted.",
        "Progress to the full plank on toes when 40 seconds is easy.",
      ],
      ur: [
        "کولہے نہ جھکیں نہ اوپر اٹھیں۔",
        "جب حالت بگڑنے لگے تب رکیں، تھکنے تک نہیں۔",
        "چالیس سیکنڈ آسان لگیں تو پنجوں والے پورے پلانک پر جائیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting the hips drop.",
        "Lifting the hips too high.",
        "Holding the breath.",
        "Shrugging the shoulders up to the ears.",
      ],
      ur: [
        "کولہوں کا جھک جانا۔",
        "کولہے بہت اونچے اٹھانا۔",
        "سانس روکنا۔",
        "کندھوں کو کانوں تک اُچھالنا۔",
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
    repetitions: "5",
    sets: "3",
    holdTime: "20 seconds",
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
      rationale: "Front plank variants are standard for anterior trunk endurance with graded load. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ hipNear: 0, kneeNear: 90, hipFar: 0, kneeFar: 90, shoulderNear: 90, elbowNear: 90, shoulderFar: 90, elbowFar: 90 }, PRONE), travel: 800, hold: 400, label: "Resting on forearms and knees" },
        { pose: pose({ hipNear: -10, kneeNear: 90, hipFar: -10, kneeFar: 90, shoulderNear: 90, elbowNear: 90, shoulderFar: 90, elbowFar: 90 }, PRONE), travel: 1000, hold: 900, label: "Lift into a straight line" },
      ],
      props: [{ kind: "mat" }],
    },
  },
];
