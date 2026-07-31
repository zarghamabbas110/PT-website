import { pose } from "@/lib/figure";
import type { Exercise } from "../schema";
import { PRONE, QUADRUPED, SEATED, SIDE_LYING, STAND, SUPINE, SUPINE_LONG } from "./bases";

/* ==========================================================================
   RANGE OF MOTION
   --------------------------------------------------------------------------
   Moving each joint through what it has, with the load taken off wherever
   possible — sliding on a bed, resting on a table, helped by the other
   hand. This is the work that comes first after surgery, a cast or a flare,
   before anything is strengthened. Drafts pending clinical review.
   ========================================================================== */

export const RANGE_OF_MOTION: Exercise[] = [
  {
    id: "EX-S-041",
    slug: "shoulder-circles-seated",
    name: { en: "Seated Shoulder Circles", ur: "بیٹھ کر کندھے گھمانا" },
    bodyRegion: "Shoulder",
    joint: ["Scapulothoracic", "Acromioclavicular", "Sternoclavicular"],
    musclesTargeted: ["Upper trapezius", "Rhomboids", "Serratus anterior", "Levator scapulae"],
    conditions: ["Shoulder stiffness", "Desk work strain", "Postural fatigue", "Frozen shoulder — early stage"],
    purpose: { en: "Warms and loosens the shoulder girdle in a movement small enough to do at a desk, in a chair or in bed.", ur: "کندھے کے حصے کو گرم اور ڈھیلا کرتی ہے، اور یہ حرکت اتنی چھوٹی ہے کہ میز پر، کرسی پر یا بستر میں کی جا سکتی ہے۔" },
    exerciseType: "Range of motion",
    difficulty: "Beginner",
    contraction: ["Concentric"],
    mode: "Active",
    load: "No load",
    position: "Sitting",
    equipment: ["Chair"],
    startingPosition: { en: "Sit tall on a firm chair with the arms relaxed at your sides.", ur: "مضبوط کرسی پر سیدھے بیٹھیں، بازو پہلوؤں پر ڈھیلے۔" },
    quickSteps: {
      en: [
        "Sit tall with the arms relaxed.",
        "Roll both shoulders forward five times, then backward five times.",
        "Keep the arms hanging loose throughout.",
      ],
      ur: [
        "سیدھے بیٹھیں، بازو ڈھیلے۔",
        "دونوں کندھے پانچ بار آگے گھمائیں، پھر پانچ بار پیچھے۔",
        "پوری ورزش میں بازو ڈھیلے لٹکتے رہیں۔",
      ],
    },
    steps: {
      en: [
        "Sit tall with both feet flat and the arms hanging loose.",
        "Lift both shoulders up towards the ears.",
        "Roll them forwards and down, making a full circle.",
        "Repeat five times, then reverse and circle backwards five times.",
        "Keep the elbows straight and the arms completely relaxed.",
      ],
      ur: [
        "سیدھے بیٹھیں، دونوں پاؤں فرش پر اور بازو ڈھیلے لٹکے ہوں۔",
        "دونوں کندھے کانوں کی طرف اٹھائیں۔",
        "انہیں آگے اور نیچے گھمائیں، پورا دائرہ بنائیں۔",
        "پانچ بار دہرائیں، پھر الٹی طرف پانچ بار پیچھے گھمائیں۔",
        "کہنیاں سیدھی اور بازو بالکل ڈھیلے رکھیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Make the circles as big as comfort allows — small ones do little.",
        "Backwards circles matter more than forwards ones for a rounded posture.",
        "A good first exercise of the day before anything harder.",
      ],
      ur: [
        "دائرے آرام کی حد میں جتنے بڑے ہو سکیں بنائیں — چھوٹے دائروں سے کم فائدہ ہے۔",
        "جھکی ہوئی حالت کے لیے پیچھے کے دائرے آگے سے زیادہ اہم ہیں۔",
        "کسی بھی مشکل ورزش سے پہلے دن کی پہلی ورزش کے لیے بہترین۔",
      ],
    },
    commonMistakes: {
      en: [
        "Forcing past a firm end point.",
        "Moving fast or jerking.",
        "Twisting the body to gain extra range.",
        "Holding the breath.",
      ],
      ur: [
        "سخت حد سے آگے زبردستی کرنا۔",
        "تیز یا جھٹکے سے حرکت دینا۔",
        "زیادہ حرکت کے لیے جسم مروڑنا۔",
        "سانس روکنا۔",
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
    sets: "2",
    holdTime: "—",
    frequency: "Daily, or hourly at a desk",
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
      rationale: "Shoulder girdle circling is a standard warm-up and mobility drill. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ shoulderNear: 174, shoulderFar: 174 }, SEATED), travel: 800, hold: 400, label: "Sitting tall, arms relaxed" },
        { pose: pose({ shoulderNear: 182, shoulderFar: 182, thorax: -4 }, SEATED), travel: 1000, hold: 900, label: "Roll the shoulders in a full circle" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-S-042",
    slug: "shoulder-horizontal-abduction-active",
    name: { en: "Active Horizontal Opening", ur: "بازو سامنے سے پہلو تک کھولنا" },
    bodyRegion: "Shoulder",
    joint: ["Glenohumeral", "Scapulothoracic"],
    musclesTargeted: ["Posterior deltoid", "Rhomboids", "Middle trapezius", "Infraspinatus"],
    conditions: ["Shoulder stiffness", "Rounded posture", "Post-immobilisation stiffness", "Chest tightness"],
    purpose: { en: "Takes the arm from straight in front to straight out at the side, the range lost first when a shoulder stops being used.", ur: "بازو کو بالکل سامنے سے بالکل پہلو تک لے جاتی ہے، اور یہی حرکت سب سے پہلے ختم ہوتی ہے جب کندھا استعمال ہونا بند ہو جائے۔" },
    exerciseType: "Range of motion",
    difficulty: "Beginner",
    contraction: ["Concentric", "Eccentric"],
    mode: "Active",
    load: "No load",
    position: "Standing",
    equipment: [],
    startingPosition: { en: "Stand tall with both arms straight out in front at shoulder height, palms facing each other.", ur: "سیدھے کھڑے ہوں، دونوں بازو کندھے کی اونچائی پر سامنے سیدھے، ہتھیلیاں ایک دوسرے کی طرف۔" },
    quickSteps: {
      en: [
        "Hold both arms straight out in front at shoulder height.",
        "Open them out to the sides as far as comfortable.",
        "Bring them back together slowly.",
      ],
      ur: [
        "دونوں بازو کندھے کی اونچائی پر سامنے سیدھے رکھیں۔",
        "انہیں آرام کی حد تک پہلوؤں میں کھولیں۔",
        "آہستہ واپس ملا لیں۔",
      ],
    },
    steps: {
      en: [
        "Stand tall with the feet hip-width apart.",
        "Raise both arms straight out in front at shoulder height.",
        "Keeping them at that height, open both arms out to the sides.",
        "Squeeze the shoulder blades gently together at the end.",
        "Bring the arms slowly back together in front.",
      ],
      ur: [
        "سیدھے کھڑے ہوں، پاؤں کولہوں کے برابر فاصلے پر۔",
        "دونوں بازو کندھے کی اونچائی پر سامنے سیدھے اٹھائیں۔",
        "اُسی اونچائی پر رکھتے ہوئے دونوں بازو پہلوؤں میں کھولیں۔",
        "آخر میں شانے کی ہڈیاں نرمی سے ملائیں۔",
        "بازو آہستہ واپس سامنے ملا لیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Move slowly and stop at the first firm resistance, not at pain.",
        "Range comes back with repetition, not with force.",
        "A little stiffness afterwards is normal; pain lasting into the next day is not.",
      ],
      ur: [
        "آہستہ حرکت کریں اور پہلی سخت رکاوٹ پر رک جائیں، درد پر نہیں۔",
        "حرکت بار بار کرنے سے واپس آتی ہے، زور لگانے سے نہیں۔",
        "بعد میں ہلکی اکڑن عام ہے؛ اگلے دن تک رہنے والا درد نہیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Forcing past a firm end point.",
        "Moving fast or jerking.",
        "Twisting the body to gain extra range.",
        "Holding the breath.",
      ],
      ur: [
        "سخت حد سے آگے زبردستی کرنا۔",
        "تیز یا جھٹکے سے حرکت دینا۔",
        "زیادہ حرکت کے لیے جسم مروڑنا۔",
        "سانس روکنا۔",
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
    sets: "2",
    holdTime: "—",
    frequency: "Daily",
    restBetweenSets: "30 seconds",
    progressions: ["band-reverse-fly"],
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
      rationale: "Active horizontal abduction is a standard shoulder range exercise. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ shoulderNear: 90, elbowNear: 6, shoulderAbductNear: 0, shoulderFar: 90, elbowFar: 6, shoulderAbductFar: 0 }, STAND), travel: 800, hold: 400, label: "Arms straight out in front" },
        { pose: pose({ shoulderNear: 90, elbowNear: 6, shoulderAbductNear: 84, shoulderFar: 90, elbowFar: 6, shoulderAbductFar: 84 }, STAND), travel: 1000, hold: 900, label: "Open both arms to the sides" },
      ],
    },
  },
  {
    id: "EX-S-043",
    slug: "shoulder-rotation-active",
    name: { en: "Active Shoulder Rotation", ur: "کندھے کا فعال گھماؤ" },
    bodyRegion: "Shoulder",
    joint: ["Glenohumeral"],
    musclesTargeted: ["Infraspinatus", "Teres minor", "Subscapularis"],
    conditions: ["Frozen shoulder", "Post-immobilisation stiffness", "Rotator cuff recovery", "Difficulty reaching behind the back"],
    purpose: { en: "Turning the forearm in and out with the elbow tucked in is the range needed to reach a back pocket, a bra strap or a seat belt.", ur: "کہنی پہلو سے لگا کر بازو اندر باہر گھمانا وہ حرکت ہے جو پچھلی جیب، برا کی پٹی یا سیٹ بیلٹ تک پہنچنے کے لیے چاہیے۔" },
    exerciseType: "Range of motion",
    difficulty: "Beginner",
    contraction: ["Concentric", "Eccentric"],
    mode: "Active",
    load: "No load",
    position: "Sitting",
    equipment: ["Chair"],
    startingPosition: { en: "Sit tall with the elbow tucked firmly against your side and bent to ninety degrees, palm facing inwards.", ur: "سیدھے بیٹھیں، کہنی مضبوطی سے پہلو سے لگی اور نوے درجے مڑی، ہتھیلی اندر کی طرف۔" },
    quickSteps: {
      en: [
        "Tuck the elbow in and bend it to ninety degrees.",
        "Swing the forearm outwards, then across the body.",
        "Keep the elbow against your side throughout.",
      ],
      ur: [
        "کہنی پہلو سے لگائیں اور نوے درجے موڑیں۔",
        "بازو باہر کی طرف گھمائیں، پھر جسم کے آر پار لائیں۔",
        "پوری ورزش میں کہنی پہلو سے لگی رہے۔",
      ],
    },
    steps: {
      en: [
        "Sit tall with the elbow held against the ribs, bent to ninety degrees.",
        "Place a rolled towel between the elbow and the ribs to keep it there.",
        "Swing the forearm outwards, away from the body, as far as is comfortable.",
        "Return through the middle and take the forearm across the stomach.",
        "Move slowly and keep the elbow pinned throughout.",
      ],
      ur: [
        "سیدھے بیٹھیں، کہنی پسلیوں سے لگی اور نوے درجے مڑی ہو۔",
        "کہنی اور پسلیوں کے درمیان لپٹا تولیہ رکھیں تاکہ وہ اپنی جگہ رہے۔",
        "بازو باہر، جسم سے دور، آرام کی حد تک گھمائیں۔",
        "درمیان سے گزر کر بازو پیٹ کے آر پار لائیں۔",
        "آہستہ حرکت کریں اور کہنی پوری ورزش میں ٹکی رہے۔",
      ],
    },
    specialInstructions: {
      en: [
        "A towel under the elbow is the difference between doing this right and cheating.",
        "Outward rotation is usually the stiffer direction — give it more repetitions.",
        "The shoulder should not hitch up as the forearm swings.",
      ],
      ur: [
        "کہنی کے نیچے تولیہ ہی صحیح اور غلط کرنے کا فرق ہے۔",
        "باہر کی طرف گھماؤ عموماً زیادہ سخت ہوتا ہے — اسے زیادہ بار کریں۔",
        "بازو گھماتے وقت کندھا اوپر نہیں اُچھلنا چاہیے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Forcing past a firm end point.",
        "Moving fast or jerking.",
        "Twisting the body to gain extra range.",
        "Holding the breath.",
      ],
      ur: [
        "سخت حد سے آگے زبردستی کرنا۔",
        "تیز یا جھٹکے سے حرکت دینا۔",
        "زیادہ حرکت کے لیے جسم مروڑنا۔",
        "سانس روکنا۔",
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
    frequency: "Daily",
    restBetweenSets: "30 seconds",
    progressions: ["band-external-rotation"],
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
      rationale: "Active shoulder rotation with the elbow at the side is standard in cuff and capsule rehabilitation. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ shoulderNear: 170, elbowNear: 88, shoulderRotNear: -26 }, SEATED), travel: 800, hold: 400, label: "Elbow tucked in, forearm across" },
        { pose: pose({ shoulderNear: 170, elbowNear: 88, shoulderRotNear: 44 }, SEATED), travel: 1000, hold: 900, label: "Swing the forearm outwards" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-EL-014",
    slug: "elbow-supination-assisted",
    name: { en: "Assisted Forearm Turning", ur: "سہارے کے ساتھ بازو گھمانا" },
    bodyRegion: "Elbow",
    joint: ["Radioulnar", "Humeroradial"],
    musclesTargeted: ["Supinator", "Pronator teres", "Biceps brachii"],
    conditions: ["Post-fracture stiffness", "Post-cast stiffness", "Difficulty accepting change in the palm", "Elbow stiffness"],
    purpose: { en: "Uses the other hand to help turn the palm up and down, so range can be worked long before the muscles are strong enough to do it alone.", ur: "دوسرے ہاتھ کی مدد سے ہتھیلی اوپر نیچے گھماتی ہے، تاکہ پٹھوں کے مضبوط ہونے سے بہت پہلے حرکت پر کام ہو سکے۔" },
    exerciseType: "Range of motion",
    difficulty: "Beginner",
    contraction: ["Passive", "Concentric"],
    mode: "Active-assisted",
    load: "Assisted",
    position: "Sitting",
    equipment: ["Chair"],
    startingPosition: { en: "Sit with the affected forearm resting on a table, elbow bent to ninety degrees and the hand free over the edge.", ur: "متاثرہ بازو میز پر رکھ کر بیٹھیں، کہنی نوے درجے مڑی اور ہاتھ کنارے سے باہر آزاد۔" },
    quickSteps: {
      en: [
        "Rest the forearm on a table, elbow bent, hand over the edge.",
        "Use the other hand to turn the palm up, then down.",
        "Move slowly to the first resistance.",
      ],
      ur: [
        "بازو میز پر رکھیں، کہنی مڑی، ہاتھ کنارے سے باہر۔",
        "دوسرے ہاتھ سے ہتھیلی اوپر گھمائیں، پھر نیچے۔",
        "پہلی رکاوٹ تک آہستہ حرکت دیں۔",
      ],
    },
    steps: {
      en: [
        "Rest the forearm along a table with the elbow bent to ninety degrees.",
        "Keep the elbow tucked in at your side so the shoulder cannot help.",
        "With the other hand, gently turn the palm to face upwards.",
        "Hold at the first firm resistance for five seconds.",
        "Then turn the palm down the same way and hold again.",
      ],
      ur: [
        "بازو میز پر رکھیں، کہنی نوے درجے مڑی ہو۔",
        "کہنی پہلو سے لگی رکھیں تاکہ کندھا مدد نہ کر سکے۔",
        "دوسرے ہاتھ سے نرمی سے ہتھیلی اوپر کی طرف گھمائیں۔",
        "پہلی سخت رکاوٹ پر پانچ سیکنڈ رکیں۔",
        "پھر اسی طرح ہتھیلی نیچے گھمائیں اور دوبارہ رکیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "The elbow must stay at the side — otherwise the shoulder turns instead.",
        "Hold at the end for five seconds; the hold is what regains range.",
        "This is the standard first exercise after a wrist or forearm fracture.",
      ],
      ur: [
        "کہنی پہلو سے لگی رہے — ورنہ کندھا گھوم جاتا ہے۔",
        "آخر میں پانچ سیکنڈ رکیں؛ رکنے سے ہی حرکت واپس آتی ہے۔",
        "کلائی یا بازو کی ہڈی ٹوٹنے کے بعد یہ معیاری پہلی ورزش ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Forcing past a firm end point.",
        "Moving fast or jerking.",
        "Twisting the body to gain extra range.",
        "Holding the breath.",
      ],
      ur: [
        "سخت حد سے آگے زبردستی کرنا۔",
        "تیز یا جھٹکے سے حرکت دینا۔",
        "زیادہ حرکت کے لیے جسم مروڑنا۔",
        "سانس روکنا۔",
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
    repetitions: "10 each direction",
    sets: "2",
    holdTime: "5 seconds at the end",
    frequency: "3 times daily",
    restBetweenSets: "30 seconds",
    progressions: ["forearm-pronation-supination"],
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
      rationale: "Assisted forearm rotation is standard after distal radius fracture. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ elbowNear: 88, shoulderNear: 168 }, SEATED), travel: 800, hold: 400, label: "Forearm on the table" },
        { pose: pose({ elbowNear: 88, shoulderNear: 168, shoulderFar: 140, elbowFar: 96 }, SEATED), travel: 1000, hold: 900, label: "Turn the palm up with the other hand" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-W-011",
    slug: "wrist-circles",
    name: { en: "Wrist Circles", ur: "کلائی گھمانا" },
    bodyRegion: "Wrist & Hand",
    joint: ["Radiocarpal", "Midcarpal"],
    musclesTargeted: ["Wrist flexors", "Wrist extensors", "Radial deviators", "Ulnar deviators"],
    conditions: ["Wrist stiffness", "Post-cast stiffness", "Repetitive typing strain", "Arthritis of the wrist"],
    purpose: { en: "Takes the wrist through every direction it has in one continuous movement, which is quicker than working each direction separately.", ur: "کلائی کو ایک ہی مسلسل حرکت میں اُس کی ہر سمت سے گزارتی ہے، جو ہر سمت الگ الگ کرنے سے تیز ہے۔" },
    exerciseType: "Range of motion",
    difficulty: "Beginner",
    contraction: ["Concentric"],
    mode: "Active",
    load: "No load",
    position: "Sitting",
    equipment: [],
    startingPosition: { en: "Sit or stand with both elbows bent, forearms steady and the hands relaxed.", ur: "بیٹھ یا کھڑے ہوں، دونوں کہنیاں مڑی، بازو ساکن اور ہاتھ ڈھیلے۔" },
    quickSteps: {
      en: [
        "Hold both forearms steady with the hands relaxed.",
        "Circle both hands slowly in one direction five times.",
        "Reverse and circle five times the other way.",
      ],
      ur: [
        "دونوں بازو ساکن رکھیں، ہاتھ ڈھیلے۔",
        "دونوں ہاتھ آہستہ ایک طرف پانچ بار گھمائیں۔",
        "پھر الٹی طرف پانچ بار گھمائیں۔",
      ],
    },
    steps: {
      en: [
        "Bend both elbows and hold the forearms still — only the hands move.",
        "Make a loose fist or leave the fingers relaxed, whichever is comfortable.",
        "Circle the hands slowly, taking the wrist as far as it goes in each direction.",
        "Do five circles one way, then five the other way.",
        "Keep the movement smooth rather than fast.",
      ],
      ur: [
        "دونوں کہنیاں موڑیں اور بازو ساکن رکھیں — صرف ہاتھ حرکت کریں۔",
        "ہلکی مٹھی بنائیں یا انگلیاں ڈھیلی چھوڑ دیں، جو آرام دہ ہو۔",
        "ہاتھ آہستہ گھمائیں، ہر سمت میں کلائی کو جہاں تک جائے لے جائیں۔",
        "پانچ دائرے ایک طرف، پھر پانچ دوسری طرف۔",
        "حرکت تیز کے بجائے ہموار رکھیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Keep the forearm still — if it rolls, the shoulder is helping.",
        "Good to do every hour if you type or write all day.",
        "Stop if the hand tingles rather than aches.",
      ],
      ur: [
        "بازو ساکن رکھیں — وہ گھومے تو کندھا مدد کر رہا ہے۔",
        "سارا دن ٹائپنگ یا لکھائی کریں تو ہر گھنٹے کرنا اچھا ہے۔",
        "ہاتھ میں درد کے بجائے سنسناہٹ ہو تو رک جائیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Forcing past a firm end point.",
        "Moving fast or jerking.",
        "Twisting the body to gain extra range.",
        "Holding the breath.",
      ],
      ur: [
        "سخت حد سے آگے زبردستی کرنا۔",
        "تیز یا جھٹکے سے حرکت دینا۔",
        "زیادہ حرکت کے لیے جسم مروڑنا۔",
        "سانس روکنا۔",
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
    repetitions: "5 each direction",
    sets: "2",
    holdTime: "—",
    frequency: "Daily, or hourly at a desk",
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
      rationale: "Wrist circling is a common combined range of motion drill. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ elbowNear: 88, shoulderNear: 168, elbowFar: 88, shoulderFar: 168 }, SEATED), travel: 800, hold: 400, label: "Forearms steady, hands relaxed" },
        { pose: pose({ elbowNear: 84, shoulderNear: 164, elbowFar: 84, shoulderFar: 164 }, SEATED), travel: 1000, hold: 900, label: "Circle the hands slowly" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-W-012",
    slug: "finger-abduction-adduction",
    name: { en: "Finger Spread and Close", ur: "انگلیاں کھولنا اور بند کرنا" },
    bodyRegion: "Wrist & Hand",
    joint: ["Metacarpophalangeal", "Carpometacarpal"],
    musclesTargeted: ["Dorsal interossei", "Palmar interossei", "Abductor digiti minimi"],
    conditions: ["Arthritis of the hand", "Post-cast stiffness", "Hand weakness", "Reduced dexterity"],
    purpose: { en: "Works the small muscles between the bones of the hand, which are the first to waste and the last to be exercised.", ur: "ہاتھ کی ہڈیوں کے درمیان کے چھوٹے پٹھوں پر کام کرتی ہے، جو سب سے پہلے کمزور ہوتے ہیں اور جن کی ورزش سب سے آخر میں کی جاتی ہے۔" },
    exerciseType: "Range of motion",
    difficulty: "Beginner",
    contraction: ["Concentric"],
    mode: "Active",
    load: "No load",
    position: "Sitting",
    equipment: ["Table"],
    startingPosition: { en: "Sit with the hand resting flat on a table, palm down and the fingers straight.", ur: "بیٹھ جائیں، ہاتھ میز پر سیدھا رکھیں، ہتھیلی نیچے اور انگلیاں سیدھی۔" },
    quickSteps: {
      en: [
        "Rest the hand flat on a table, palm down.",
        "Spread all the fingers as wide apart as they go.",
        "Bring them back together and repeat.",
      ],
      ur: [
        "ہاتھ میز پر سیدھا رکھیں، ہتھیلی نیچے۔",
        "تمام انگلیاں جتنی کھل سکیں کھولیں۔",
        "واپس ملا لیں اور دہرائیں۔",
      ],
    },
    steps: {
      en: [
        "Rest the whole hand flat on a table with the palm down.",
        "Keep the fingers straight and in contact with the table.",
        "Slide the fingers apart, spreading them as wide as they will go.",
        "Hold the spread for two seconds.",
        "Slide them back together until they touch, and repeat.",
      ],
      ur: [
        "پورا ہاتھ میز پر سیدھا رکھیں، ہتھیلی نیچے۔",
        "انگلیاں سیدھی اور میز سے لگی رکھیں۔",
        "انگلیاں پھسلا کر الگ کریں، جتنی کھل سکیں کھولیں۔",
        "کھلی حالت میں دو سیکنڈ رکیں۔",
        "واپس ملا لیں یہاں تک کہ چھو جائیں، اور دہرائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Keep the fingers straight — curling them turns it into a different exercise.",
        "The table takes the weight, so only the small muscles work.",
        "Add a rubber band around the fingers to make it resisted.",
      ],
      ur: [
        "انگلیاں سیدھی رکھیں — موڑنے سے یہ الگ ورزش بن جاتی ہے۔",
        "میز وزن سنبھالتی ہے، اس لیے صرف چھوٹے پٹھے کام کرتے ہیں۔",
        "مزاحمت کے لیے انگلیوں کے گرد ربڑ بینڈ ڈال لیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Forcing past a firm end point.",
        "Moving fast or jerking.",
        "Twisting the body to gain extra range.",
        "Holding the breath.",
      ],
      ur: [
        "سخت حد سے آگے زبردستی کرنا۔",
        "تیز یا جھٹکے سے حرکت دینا۔",
        "زیادہ حرکت کے لیے جسم مروڑنا۔",
        "سانس روکنا۔",
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
    sets: "2",
    holdTime: "2 seconds spread",
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
      rationale: "Intrinsic hand exercises are standard in hand therapy and arthritis care. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ elbowNear: 84, shoulderNear: 150 }, SEATED), travel: 800, hold: 400, label: "Hand flat on the table" },
        { pose: pose({ elbowNear: 82, shoulderNear: 148 }, SEATED), travel: 1000, hold: 900, label: "Spread the fingers wide" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-W-013",
    slug: "thumb-flexion-extension",
    name: { en: "Thumb Bend and Straighten", ur: "انگوٹھا موڑنا اور سیدھا کرنا" },
    bodyRegion: "Wrist & Hand",
    joint: ["Carpometacarpal", "Metacarpophalangeal", "Interphalangeal"],
    musclesTargeted: ["Flexor pollicis longus", "Extensor pollicis longus", "Abductor pollicis brevis"],
    conditions: ["Thumb arthritis", "De Quervain's recovery", "Post-cast stiffness", "Reduced grip"],
    purpose: { en: "Keeps the thumb moving, and the thumb is roughly half the usefulness of the whole hand.", ur: "انگوٹھے کو حرکت میں رکھتی ہے، اور پورے ہاتھ کی تقریباً آدھی افادیت انگوٹھے میں ہے۔" },
    exerciseType: "Range of motion",
    difficulty: "Beginner",
    contraction: ["Concentric"],
    mode: "Active",
    load: "No load",
    position: "Sitting",
    equipment: [],
    startingPosition: { en: "Sit with the forearm resting on a table, hand upright and the thumb pointing up.", ur: "بیٹھ جائیں، بازو میز پر رکھیں، ہاتھ سیدھا کھڑا اور انگوٹھا اوپر کی طرف۔" },
    quickSteps: {
      en: [
        "Hold the hand upright with the thumb pointing up.",
        "Bend the thumb across the palm towards the little finger.",
        "Straighten it back out and repeat.",
      ],
      ur: [
        "ہاتھ سیدھا کھڑا رکھیں، انگوٹھا اوپر۔",
        "انگوٹھا ہتھیلی کے آر پار چھوٹی انگلی کی طرف موڑیں۔",
        "واپس سیدھا کریں اور دہرائیں۔",
      ],
    },
    steps: {
      en: [
        "Rest the forearm on a table with the hand upright, little finger down.",
        "Start with the thumb pointing straight up, in line with the wrist.",
        "Bend the thumb across the palm to touch the base of the little finger.",
        "Hold for two seconds at the end.",
        "Straighten it back out fully and repeat.",
      ],
      ur: [
        "بازو میز پر رکھیں، ہاتھ سیدھا کھڑا اور چھوٹی انگلی نیچے۔",
        "انگوٹھا کلائی کی سیدھ میں بالکل اوپر رکھ کر شروع کریں۔",
        "انگوٹھا ہتھیلی کے آر پار موڑ کر چھوٹی انگلی کی جڑ سے لگائیں۔",
        "آخر میں دو سیکنڈ رکیں۔",
        "پوری طرح سیدھا کریں اور دہرائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Move only the thumb — the wrist stays still.",
        "Reaching the base of the little finger is the target, not the tip.",
        "Stop if the base of the thumb becomes sharply painful.",
      ],
      ur: [
        "صرف انگوٹھا حرکت کرے — کلائی ساکن رہے۔",
        "چھوٹی انگلی کی جڑ تک پہنچنا مقصد ہے، نوک تک نہیں۔",
        "انگوٹھے کی جڑ میں تیز درد ہو تو رک جائیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Forcing past a firm end point.",
        "Moving fast or jerking.",
        "Twisting the body to gain extra range.",
        "Holding the breath.",
      ],
      ur: [
        "سخت حد سے آگے زبردستی کرنا۔",
        "تیز یا جھٹکے سے حرکت دینا۔",
        "زیادہ حرکت کے لیے جسم مروڑنا۔",
        "سانس روکنا۔",
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
      rationale: "Thumb range exercises are routine in hand therapy and thumb base arthritis. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ elbowNear: 84, shoulderNear: 150 }, SEATED), travel: 800, hold: 400, label: "Hand upright, thumb up" },
        { pose: pose({ elbowNear: 82, shoulderNear: 148 }, SEATED), travel: 1000, hold: 900, label: "Bend the thumb across the palm" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-CX-014",
    slug: "neck-flexion-extension-active",
    name: { en: "Neck Nod Forward and Back", ur: "گردن آگے پیچھے جھکانا" },
    bodyRegion: "Cervical",
    joint: ["Cervical spine C1–C7", "Atlanto-occipital"],
    musclesTargeted: ["Deep neck flexors", "Cervical erector spinae", "Upper trapezius"],
    conditions: ["Neck stiffness", "Postural strain", "Whiplash recovery", "Cervicogenic headache"],
    purpose: { en: "Restores looking down and looking up, the two ends of neck movement that a stiff neck loses first.", ur: "نیچے اور اوپر دیکھنا بحال کرتی ہے، گردن کی حرکت کے وہ دونوں سرے جو اکڑی گردن سب سے پہلے کھو دیتی ہے۔" },
    exerciseType: "Range of motion",
    difficulty: "Beginner",
    contraction: ["Concentric", "Eccentric"],
    mode: "Active",
    load: "No load",
    position: "Sitting",
    equipment: ["Chair"],
    startingPosition: { en: "Sit tall on a firm chair with the shoulders relaxed and the eyes looking straight ahead.", ur: "مضبوط کرسی پر سیدھے بیٹھیں، کندھے ڈھیلے اور نظریں سامنے۔" },
    quickSteps: {
      en: [
        "Sit tall with the shoulders relaxed.",
        "Drop the chin slowly towards the chest.",
        "Return, then tilt the head gently back and repeat.",
      ],
      ur: [
        "سیدھے بیٹھیں، کندھے ڈھیلے۔",
        "ٹھوڑی آہستہ سینے کی طرف نیچے لائیں۔",
        "واپس آئیں، پھر سر نرمی سے پیچھے جھکائیں اور دہرائیں۔",
      ],
    },
    steps: {
      en: [
        "Sit tall with both feet flat and the shoulders down.",
        "Let the chin drop slowly towards the chest, feeling the back of the neck lengthen.",
        "Hold for two seconds at the bottom.",
        "Return through the middle and tilt the head gently backwards.",
        "Go only as far as is comfortable, and come back slowly.",
      ],
      ur: [
        "سیدھے بیٹھیں، دونوں پاؤں فرش پر اور کندھے نیچے۔",
        "ٹھوڑی آہستہ سینے کی طرف گرنے دیں، گردن کا پچھلا حصہ لمبا ہوتا محسوس کریں۔",
        "نیچے دو سیکنڈ رکیں۔",
        "درمیان سے گزر کر سر نرمی سے پیچھے جھکائیں۔",
        "صرف آرام کی حد تک جائیں اور آہستہ واپس آئیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Backwards is the direction to be careful with — go a little less far than you think.",
        "Stop at once if you feel dizzy or your vision changes.",
        "Supporting the back of the head with a hand makes the return easier.",
      ],
      ur: [
        "پیچھے کی طرف احتیاط چاہیے — اپنے اندازے سے تھوڑا کم جائیں۔",
        "چکر آئے یا نظر بدلے تو فوراً رک جائیں۔",
        "سر کے پیچھے ہاتھ کا سہارا دینے سے واپسی آسان ہو جاتی ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Forcing past a firm end point.",
        "Moving fast or jerking.",
        "Twisting the body to gain extra range.",
        "Holding the breath.",
      ],
      ur: [
        "سخت حد سے آگے زبردستی کرنا۔",
        "تیز یا جھٹکے سے حرکت دینا۔",
        "زیادہ حرکت کے لیے جسم مروڑنا۔",
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
    repetitions: "10",
    sets: "2",
    holdTime: "2 seconds",
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
      rationale: "Active cervical flexion and extension is routine in mechanical neck pain management. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ neck: 0, head: 0 }, SEATED), travel: 800, hold: 400, label: "Sitting tall, eyes ahead" },
        { pose: pose({ neck: 22, head: 16 }, SEATED), travel: 1000, hold: 900, label: "Drop the chin, then look up" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-CX-015",
    slug: "cervical-rotation-supine",
    name: { en: "Neck Rotation Lying Down", ur: "لیٹ کر گردن گھمانا" },
    bodyRegion: "Cervical",
    joint: ["Cervical spine C1–C7", "Atlantoaxial"],
    musclesTargeted: ["Sternocleidomastoid", "Splenius capitis", "Upper trapezius", "Levator scapulae"],
    conditions: ["Acute neck pain", "Whiplash recovery", "Torticollis recovery", "Post-operative neck stiffness"],
    purpose: { en: "Turning the head with the weight of it taken by the bed, which is how an acutely painful neck can be moved without guarding.", ur: "سر کا وزن بستر پر چھوڑ کر گردن گھمانا، جس سے شدید درد والی گردن بغیر تناؤ کے حرکت کر سکتی ہے۔" },
    exerciseType: "Range of motion",
    difficulty: "Beginner",
    contraction: ["Concentric"],
    mode: "Active",
    load: "Assisted",
    position: "Supine",
    equipment: ["Exercise mat"],
    startingPosition: { en: "Lie on your back with the knees bent, the head resting on a thin pillow and the eyes looking up.", ur: "سیدھے لیٹ جائیں، گھٹنے مڑے، سر پتلے تکیے پر اور نظریں اوپر۔" },
    quickSteps: {
      en: [
        "Lie on your back with the head supported.",
        "Turn the head slowly to look over one shoulder.",
        "Return to the middle and turn the other way.",
      ],
      ur: [
        "سیدھے لیٹ جائیں، سر کو سہارا ہو۔",
        "سر آہستہ گھما کر ایک کندھے کے اوپر دیکھیں۔",
        "درمیان میں واپس آئیں اور دوسری طرف گھمائیں۔",
      ],
    },
    steps: {
      en: [
        "Lie on your back with the knees bent and the head on a thin pillow.",
        "Let the head rest completely — the pillow carries its weight.",
        "Turn the head slowly to one side, letting it slide on the pillow.",
        "Go only as far as is comfortable and pause for two seconds.",
        "Return through the middle and repeat to the other side.",
      ],
      ur: [
        "سیدھے لیٹ جائیں، گھٹنے مڑے اور سر پتلے تکیے پر۔",
        "سر پوری طرح ڈھیلا چھوڑ دیں — تکیہ اس کا وزن سنبھالے۔",
        "سر آہستہ ایک طرف گھمائیں، اسے تکیے پر پھسلنے دیں۔",
        "صرف آرام کی حد تک جائیں اور دو سیکنڈ رکیں۔",
        "درمیان سے گزر کر دوسری طرف دہرائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Lying down removes the work of holding the head up, so the neck can let go.",
        "This is often the only comfortable way to move an acutely painful neck.",
        "Use the thinnest pillow that still feels supported.",
      ],
      ur: [
        "لیٹنے سے سر اٹھائے رکھنے کا زور ختم ہو جاتا ہے، اس لیے گردن ڈھیلی ہو سکتی ہے۔",
        "شدید درد والی گردن کو حرکت دینے کا اکثر یہی واحد آرام دہ طریقہ ہوتا ہے۔",
        "سب سے پتلا تکیہ استعمال کریں جس سے سہارا محسوس ہو۔",
      ],
    },
    commonMistakes: {
      en: [
        "Forcing past a firm end point.",
        "Moving fast or jerking.",
        "Twisting the body to gain extra range.",
        "Holding the breath.",
      ],
      ur: [
        "سخت حد سے آگے زبردستی کرنا۔",
        "تیز یا جھٹکے سے حرکت دینا۔",
        "زیادہ حرکت کے لیے جسم مروڑنا۔",
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
    repetitions: "10 each side",
    sets: "2",
    holdTime: "2 seconds",
    frequency: "3 times daily",
    restBetweenSets: "30 seconds",
    progressions: ["neck-rotation"],
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
      rationale: "Supine cervical rotation is used where upright movement is too painful. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ neck: 0 }, SUPINE), travel: 800, hold: 400, label: "Lying with the head supported" },
        { pose: pose({ neck: 0, head: -2 }, SUPINE), travel: 1000, hold: 900, label: "Turn slowly to each side" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-T-010",
    slug: "thoracic-rotation-quadruped",
    name: { en: "All-Fours Upper Back Rotation", ur: "چاروں ہاتھ پاؤں پر اوپری کمر گھمانا" },
    bodyRegion: "Thoracic",
    joint: ["Thoracic spine T1–T12", "Costovertebral", "Scapulothoracic"],
    musclesTargeted: ["Thoracic rotators", "Rhomboids", "External obliques", "Serratus anterior"],
    conditions: ["Upper back stiffness", "Desk work stiffness", "Reduced rotation when driving", "Rib cage stiffness"],
    purpose: { en: "Locks the low back by sitting the hips back, so the rotation has to come from the stiff upper back rather than the flexible lower one.", ur: "کولہے پیچھے بٹھا کر کمر کو جام کر دیتی ہے، تاکہ گھماؤ لچکدار نچلی کمر کے بجائے اکڑی اوپری کمر سے آئے۔" },
    exerciseType: "Range of motion",
    difficulty: "Beginner",
    contraction: ["Concentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Quadruped",
    equipment: ["Exercise mat"],
    startingPosition: { en: "Kneel on all fours, then sit the hips back towards the heels with one hand behind your head.", ur: "چاروں ہاتھ پاؤں پر آئیں، پھر کولہے ایڑیوں کی طرف پیچھے بٹھائیں اور ایک ہاتھ سر کے پیچھے رکھیں۔" },
    quickSteps: {
      en: [
        "Kneel on all fours and sit the hips back towards the heels.",
        "Put one hand behind your head and turn that elbow up towards the ceiling.",
        "Lower and repeat, then swap sides.",
      ],
      ur: [
        "چاروں ہاتھ پاؤں پر آئیں اور کولہے ایڑیوں کی طرف بٹھائیں۔",
        "ایک ہاتھ سر کے پیچھے رکھیں اور وہ کہنی چھت کی طرف اوپر گھمائیں۔",
        "نیچے لائیں اور دہرائیں، پھر طرف بدلیں۔",
      ],
    },
    steps: {
      en: [
        "Start on all fours, then sit the hips back so they rest near the heels.",
        "This locks the low back and forces the movement higher up.",
        "Place one hand behind the head, keeping the other on the floor.",
        "Turn the chest and take that elbow up towards the ceiling.",
        "Lower it back down under the body and repeat, then change sides.",
      ],
      ur: [
        "چاروں ہاتھ پاؤں پر شروع کریں، پھر کولہے پیچھے بٹھا کر ایڑیوں کے قریب لے آئیں۔",
        "اس سے کمر جام ہو جاتی ہے اور حرکت اوپر کی طرف منتقل ہو جاتی ہے۔",
        "ایک ہاتھ سر کے پیچھے رکھیں، دوسرا فرش پر۔",
        "سینہ گھمائیں اور وہ کہنی چھت کی طرف اوپر لے جائیں۔",
        "اسے واپس جسم کے نیچے لائیں اور دہرائیں، پھر طرف بدلیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Sitting the hips back is what makes this a thoracic exercise rather than a lumbar one.",
        "Follow the elbow with your eyes; the head should turn too.",
        "Move to the point of stiffness and no further.",
      ],
      ur: [
        "کولہے پیچھے بٹھانے سے ہی یہ کمر کے بجائے اوپری کمر کی ورزش بنتی ہے۔",
        "نظریں کہنی کے ساتھ رکھیں؛ سر بھی گھومنا چاہیے۔",
        "اکڑن کی حد تک جائیں، اس سے آگے نہیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Forcing past a firm end point.",
        "Moving fast or jerking.",
        "Twisting the body to gain extra range.",
        "Holding the breath.",
      ],
      ur: [
        "سخت حد سے آگے زبردستی کرنا۔",
        "تیز یا جھٹکے سے حرکت دینا۔",
        "زیادہ حرکت کے لیے جسم مروڑنا۔",
        "سانس روکنا۔",
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
    repetitions: "10 each side",
    sets: "2",
    holdTime: "1 second at the top",
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
      rationale: "Quadruped thoracic rotation with the hips flexed is a common way to isolate thoracic movement. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ hipNear: 128, kneeNear: 122, hipFar: 128, kneeFar: 122, shoulderNear: 60, elbowNear: 120 }, QUADRUPED), travel: 800, hold: 400, label: "Hips back, hand behind the head" },
        { pose: pose({ hipNear: 128, kneeNear: 122, hipFar: 128, kneeFar: 122, shoulderNear: 40, elbowNear: 120, shoulderAbductNear: -70, thorax: -10 }, QUADRUPED), travel: 1000, hold: 900, label: "Turn the elbow to the ceiling" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-L-010",
    slug: "lumbar-flexion-seated",
    name: { en: "Seated Forward Bend", ur: "بیٹھ کر آگے جھکنا" },
    bodyRegion: "Lumbar",
    joint: ["Lumbar spine L1–L5", "Hip"],
    musclesTargeted: ["Erector spinae", "Multifidus", "Gluteus maximus"],
    conditions: ["Lumbar stiffness", "Stenosis-related back pain", "Facet joint pain", "Reduced bending"],
    purpose: { en: "Rounds the low back in a supported position — the direction that eases the back of anyone who feels better sitting than standing.", ur: "سہارے کی حالت میں کمر کو گول کرتی ہے — یہی وہ سمت ہے جو اُن لوگوں کو آرام دیتی ہے جنہیں کھڑے ہونے سے بیٹھنا بہتر لگتا ہے۔" },
    exerciseType: "Range of motion",
    difficulty: "Beginner",
    contraction: ["Concentric", "Passive"],
    mode: "Active",
    load: "Bodyweight",
    position: "Sitting",
    equipment: ["Chair"],
    startingPosition: { en: "Sit on the front half of a firm chair with the feet flat and apart, hands resting on the thighs.", ur: "مضبوط کرسی کے اگلے حصے پر بیٹھیں، پاؤں فرش پر اور کھلے، ہاتھ رانوں پر۔" },
    quickSteps: {
      en: [
        "Sit forward on a chair with the feet apart.",
        "Bend forward and let the hands slide down towards the floor.",
        "Come back up slowly, one part of the spine at a time.",
      ],
      ur: [
        "کرسی پر آگے کی طرف بیٹھیں، پاؤں کھلے۔",
        "آگے جھکیں اور ہاتھ فرش کی طرف پھسلنے دیں۔",
        "آہستہ، ریڑھ کا ایک ایک حصہ اٹھاتے ہوئے واپس آئیں۔",
      ],
    },
    steps: {
      en: [
        "Sit on the front half of the chair with the feet flat and wider than the hips.",
        "Let the head and shoulders drop forward first.",
        "Slide the hands down the shins towards the floor, rounding the back as you go.",
        "Rest at the bottom for a few seconds and let the back hang.",
        "Roll back up slowly, stacking the spine one part at a time.",
      ],
      ur: [
        "کرسی کے اگلے حصے پر بیٹھیں، پاؤں فرش پر اور کولہوں سے زیادہ کھلے۔",
        "پہلے سر اور کندھے آگے گرنے دیں۔",
        "ہاتھ پنڈلیوں کے ساتھ فرش کی طرف پھسلائیں، کمر گول ہوتی جائے۔",
        "نیچے چند سیکنڈ آرام کریں اور کمر کو لٹکنے دیں۔",
        "آہستہ واپس اٹھیں، ریڑھ کا ایک ایک حصہ جماتے ہوئے۔",
      ],
    },
    specialInstructions: {
      en: [
        "This suits a back that feels better sitting; if yours feels better standing, use the extension exercises instead.",
        "Roll up slowly — coming up fast is where people flare themselves.",
        "Feet wide gives the stomach room.",
      ],
      ur: [
        "یہ اُس کمر کے لیے ہے جسے بیٹھنے میں آرام ملے؛ اگر آپ کو کھڑے ہونے میں آرام ہو تو پیچھے جھکنے والی ورزشیں کریں۔",
        "آہستہ اٹھیں — تیزی سے اٹھنے پر ہی لوگوں کا درد بڑھتا ہے۔",
        "پاؤں کھلے رکھنے سے پیٹ کے لیے جگہ بنتی ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Forcing past a firm end point.",
        "Moving fast or jerking.",
        "Twisting the body to gain extra range.",
        "Holding the breath.",
      ],
      ur: [
        "سخت حد سے آگے زبردستی کرنا۔",
        "تیز یا جھٹکے سے حرکت دینا۔",
        "زیادہ حرکت کے لیے جسم مروڑنا۔",
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
    repetitions: "10",
    sets: "2",
    holdTime: "3 seconds at the bottom",
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
      rationale: "Seated flexion in sitting is a standard flexion-biased low back exercise. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ lumbar: 0, thorax: 0 }, SEATED), travel: 800, hold: 400, label: "Sitting tall on the chair" },
        { pose: pose({ lumbar: 26, thorax: 20, neck: 14, hipNear: 108, hipFar: 106, shoulderNear: 150, elbowNear: 12, shoulderFar: 150, elbowFar: 12 }, SEATED), travel: 1000, hold: 900, label: "Bend forward and let the back round" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-H-024",
    slug: "hip-flexion-active-supine",
    name: { en: "Lying Knee Lift", ur: "لیٹ کر گھٹنا اٹھانا" },
    bodyRegion: "Pelvis & Hip",
    joint: ["Hip", "Tibiofemoral"],
    musclesTargeted: ["Iliopsoas", "Rectus femoris", "Quadriceps femoris"],
    conditions: ["Post-hip-surgery rehabilitation", "Hip stiffness", "Bed rest deconditioning", "Reduced stair climbing"],
    purpose: { en: "Bending the hip with the leg supported by the bed, which is the first hip movement after surgery or a long spell lying down.", ur: "بستر کے سہارے کولہا موڑنا، جو آپریشن یا لمبے عرصے لیٹے رہنے کے بعد کولہے کی پہلی حرکت ہوتی ہے۔" },
    exerciseType: "Range of motion",
    difficulty: "Beginner",
    contraction: ["Concentric", "Eccentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Supine",
    equipment: ["Exercise mat"],
    startingPosition: { en: "Lie on your back with both legs out straight and the arms resting at your sides.", ur: "سیدھے لیٹ جائیں، دونوں ٹانگیں سیدھی اور بازو پہلوؤں پر۔" },
    quickSteps: {
      en: [
        "Lie on your back with both legs straight.",
        "Slide one heel up towards the buttock, bending the knee and hip.",
        "Slide it back down slowly and swap legs.",
      ],
      ur: [
        "سیدھے لیٹ جائیں، دونوں ٹانگیں سیدھی۔",
        "ایک ایڑی کولہے کی طرف اوپر پھسلائیں، گھٹنا اور کولہا موڑیں۔",
        "آہستہ واپس نیچے لائیں اور ٹانگ بدلیں۔",
      ],
    },
    steps: {
      en: [
        "Lie on your back with both legs straight and the low back relaxed.",
        "Keeping the heel on the bed, slide it up towards the buttock.",
        "Let the knee and hip bend together as far as is comfortable.",
        "Hold for two seconds at the top.",
        "Slide the heel back down slowly until the leg is straight again.",
      ],
      ur: [
        "سیدھے لیٹ جائیں، دونوں ٹانگیں سیدھی اور کمر ڈھیلی۔",
        "ایڑی بستر پر رکھتے ہوئے اسے کولہے کی طرف اوپر پھسلائیں۔",
        "گھٹنا اور کولہا آرام کی حد تک ساتھ مڑنے دیں۔",
        "اوپر دو سیکنڈ رکیں۔",
        "ایڑی آہستہ واپس نیچے پھسلائیں یہاں تک کہ ٹانگ دوبارہ سیدھی ہو۔",
      ],
    },
    specialInstructions: {
      en: [
        "Keeping the heel down takes the weight of the leg off the hip.",
        "After a hip replacement, do not bend past ninety degrees unless told otherwise.",
        "A plastic bag under the heel makes it slide easily on a sheet.",
      ],
      ur: [
        "ایڑی نیچے رکھنے سے ٹانگ کا وزن کولہے پر نہیں آتا۔",
        "کولہے کی تبدیلی کے بعد، جب تک نہ کہا جائے، نوے درجے سے زیادہ نہ موڑیں۔",
        "ایڑی کے نیچے پلاسٹک کا لفافہ رکھنے سے چادر پر آسانی سے پھسلتی ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Forcing past a firm end point.",
        "Moving fast or jerking.",
        "Twisting the body to gain extra range.",
        "Holding the breath.",
      ],
      ur: [
        "سخت حد سے آگے زبردستی کرنا۔",
        "تیز یا جھٹکے سے حرکت دینا۔",
        "زیادہ حرکت کے لیے جسم مروڑنا۔",
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
    repetitions: "10 each side",
    sets: "2",
    holdTime: "2 seconds",
    frequency: "3 times daily",
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
      rationale: "Supine heel slides are a standard early hip and knee range exercise. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ hipNear: 0, kneeNear: 2 }, SUPINE_LONG), travel: 800, hold: 400, label: "Lying with the legs straight" },
        { pose: pose({ hipNear: 74, kneeNear: 88, ankleNear: 30 }, SUPINE_LONG), travel: 1000, hold: 900, label: "Slide the heel up towards the buttock" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-H-025",
    slug: "hip-abduction-supine-slide",
    name: { en: "Lying Leg Slide Out", ur: "لیٹ کر ٹانگ پہلو میں پھسلانا" },
    bodyRegion: "Pelvis & Hip",
    joint: ["Hip"],
    musclesTargeted: ["Gluteus medius", "Gluteus minimus", "Tensor fasciae latae", "Adductors"],
    conditions: ["Post-hip-surgery rehabilitation", "Hip stiffness", "Bed rest deconditioning", "Hip weakness"],
    purpose: { en: "Taking the leg out to the side along the bed, which works the hip without the leg's weight having to be lifted.", ur: "بستر پر ٹانگ کو پہلو میں لے جانا، جس سے ٹانگ کا وزن اٹھائے بغیر کولہے پر کام ہوتا ہے۔" },
    exerciseType: "Range of motion",
    difficulty: "Beginner",
    contraction: ["Concentric", "Eccentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Supine",
    equipment: ["Exercise mat"],
    startingPosition: { en: "Lie on your back with both legs straight, toes pointing to the ceiling.", ur: "سیدھے لیٹ جائیں، دونوں ٹانگیں سیدھی، پنجے چھت کی طرف۔" },
    quickSteps: {
      en: [
        "Lie on your back with the legs straight and toes up.",
        "Slide one leg out to the side along the bed.",
        "Slide it back to the middle and repeat.",
      ],
      ur: [
        "سیدھے لیٹ جائیں، ٹانگیں سیدھی اور پنجے اوپر۔",
        "ایک ٹانگ بستر پر پہلو میں پھسلائیں۔",
        "واپس درمیان میں لائیں اور دہرائیں۔",
      ],
    },
    steps: {
      en: [
        "Lie on your back with both legs straight and the toes pointing up.",
        "Keeping the knee straight and the toes up, slide one leg out to the side.",
        "Go as far as is comfortable without the pelvis rolling.",
        "Hold for two seconds.",
        "Slide the leg back to the middle slowly and repeat.",
      ],
      ur: [
        "سیدھے لیٹ جائیں، دونوں ٹانگیں سیدھی اور پنجے اوپر۔",
        "گھٹنا سیدھا اور پنجہ اوپر رکھتے ہوئے ایک ٹانگ پہلو میں پھسلائیں۔",
        "آرام کی حد تک جائیں، پیڑو لڑھکنے نہ پائے۔",
        "دو سیکنڈ رکیں۔",
        "ٹانگ آہستہ واپس درمیان میں لائیں اور دہرائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "The toes must stay pointing up — letting them roll out brings in the wrong muscles.",
        "The pelvis stays flat; if it lifts, you have gone too far.",
        "After a hip replacement, never cross the leg past the midline.",
      ],
      ur: [
        "پنجے اوپر ہی رہیں — باہر لڑھکنے سے غلط پٹھے کام کرنے لگتے ہیں۔",
        "پیڑو سیدھا رہے؛ اٹھ جائے تو آپ حد سے آگے گئے۔",
        "کولہے کی تبدیلی کے بعد ٹانگ کو کبھی درمیانی لکیر کے پار نہ لے جائیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Forcing past a firm end point.",
        "Moving fast or jerking.",
        "Twisting the body to gain extra range.",
        "Holding the breath.",
      ],
      ur: [
        "سخت حد سے آگے زبردستی کرنا۔",
        "تیز یا جھٹکے سے حرکت دینا۔",
        "زیادہ حرکت کے لیے جسم مروڑنا۔",
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
    repetitions: "10 each side",
    sets: "2",
    holdTime: "2 seconds",
    frequency: "3 times daily",
    restBetweenSets: "30 seconds",
    progressions: ["side-lying-hip-abduction"],
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
      rationale: "Supine abduction sliding is standard early hip range work. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ hipRotNear: 0 }, SUPINE_LONG), travel: 800, hold: 400, label: "Lying with the legs straight" },
        { pose: pose({ hipRotNear: -30 }, SUPINE_LONG), travel: 1000, hold: 900, label: "Slide the leg out to the side" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-H-026",
    slug: "hip-rotation-seated",
    name: { en: "Seated Hip Rotation", ur: "بیٹھ کر کولہا گھمانا" },
    bodyRegion: "Pelvis & Hip",
    joint: ["Hip"],
    musclesTargeted: ["Deep hip rotators", "Piriformis", "Gluteus medius", "Adductors"],
    conditions: ["Hip stiffness", "Osteoarthritis of the hip", "Difficulty putting on socks", "Groin pain"],
    purpose: { en: "Turning the thigh in and out is the range needed to put on socks, get into a car and sit cross-legged.", ur: "ران کو اندر باہر گھمانا وہ حرکت ہے جو جرابیں پہننے، گاڑی میں بیٹھنے اور چوکڑی مار کر بیٹھنے کے لیے چاہیے۔" },
    exerciseType: "Range of motion",
    difficulty: "Beginner",
    contraction: ["Concentric"],
    mode: "Active",
    load: "No load",
    position: "Sitting",
    equipment: ["Chair"],
    startingPosition: { en: "Sit tall on a firm chair with the knees bent to ninety degrees and the feet flat, hip-width apart.", ur: "مضبوط کرسی پر سیدھے بیٹھیں، گھٹنے نوے درجے مڑے اور پاؤں فرش پر کولہوں کے برابر فاصلے پر۔" },
    quickSteps: {
      en: [
        "Sit tall with the feet flat and hip-width apart.",
        "Swing one foot out to the side, turning the knee inwards.",
        "Then swing it in, turning the knee outwards.",
      ],
      ur: [
        "سیدھے بیٹھیں، پاؤں فرش پر کولہوں کے برابر فاصلے پر۔",
        "ایک پاؤں پہلو میں لے جائیں، گھٹنا اندر گھمائیں۔",
        "پھر پاؤں اندر لائیں، گھٹنا باہر گھمائیں۔",
      ],
    },
    steps: {
      en: [
        "Sit tall with the thighs supported and both feet flat.",
        "Keeping the knee still, swing the foot outwards — this turns the hip inwards.",
        "Return to the middle.",
        "Now swing the foot inwards across the other one — this turns the hip outwards.",
        "Move slowly and keep both buttocks on the chair.",
      ],
      ur: [
        "سیدھے بیٹھیں، رانوں کو سہارا ہو اور دونوں پاؤں فرش پر۔",
        "گھٹنا ساکن رکھتے ہوئے پاؤں باہر لے جائیں — اس سے کولہا اندر گھومتا ہے۔",
        "درمیان میں واپس آئیں۔",
        "اب پاؤں دوسرے کے آر پار اندر لے جائیں — اس سے کولہا باہر گھومتا ہے۔",
        "آہستہ حرکت کریں اور دونوں کولہے کرسی پر رکھیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Both buttocks stay down — lifting one turns it into a trunk movement.",
        "Inward rotation is usually the first to go in a stiff hip.",
        "This is exactly the movement needed to put on a sock.",
      ],
      ur: [
        "دونوں کولہے نیچے رہیں — ایک اٹھانے سے یہ دھڑ کی حرکت بن جاتی ہے۔",
        "اکڑے کولہے میں اندر کی طرف گھماؤ سب سے پہلے ختم ہوتا ہے۔",
        "جراب پہننے کے لیے بالکل یہی حرکت درکار ہوتی ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Forcing past a firm end point.",
        "Moving fast or jerking.",
        "Twisting the body to gain extra range.",
        "Holding the breath.",
      ],
      ur: [
        "سخت حد سے آگے زبردستی کرنا۔",
        "تیز یا جھٹکے سے حرکت دینا۔",
        "زیادہ حرکت کے لیے جسم مروڑنا۔",
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
    repetitions: "10 each direction",
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
      rationale: "Seated hip rotation is a standard range exercise in hip osteoarthritis. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ hipRotNear: 0 }, SEATED), travel: 800, hold: 400, label: "Sitting tall, feet flat" },
        { pose: pose({ hipRotNear: 30 }, SEATED), travel: 1000, hold: 900, label: "Swing the foot out and in" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-K-016",
    slug: "knee-flexion-prone-active",
    name: { en: "Prone Knee Bend", ur: "اوندھے لیٹ کر گھٹنا موڑنا" },
    bodyRegion: "Knee",
    joint: ["Tibiofemoral"],
    musclesTargeted: ["Hamstrings", "Gastrocnemius", "Quadriceps femoris"],
    conditions: ["Post-knee-surgery rehabilitation", "Knee stiffness", "Reduced knee bend", "Post-immobilisation stiffness"],
    purpose: { en: "Bending the knee face down uses gravity to help, which gets more bend than the same exercise sitting up.", ur: "اوندھے لیٹ کر گھٹنا موڑنے میں کشش ثقل مدد کرتی ہے، جس سے بیٹھ کر کرنے کی نسبت زیادہ خم ملتا ہے۔" },
    exerciseType: "Range of motion",
    difficulty: "Beginner",
    contraction: ["Concentric", "Eccentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Prone",
    equipment: ["Exercise mat"],
    startingPosition: { en: "Lie face down with both legs straight and the arms folded under the forehead.", ur: "اوندھے لیٹ جائیں، دونوں ٹانگیں سیدھی اور بازو پیشانی کے نیچے۔" },
    quickSteps: {
      en: [
        "Lie face down with both legs straight.",
        "Bend one knee, bringing the heel towards the buttock.",
        "Lower slowly and swap legs.",
      ],
      ur: [
        "اوندھے لیٹ جائیں، دونوں ٹانگیں سیدھی۔",
        "ایک گھٹنا موڑیں، ایڑی کولہے کی طرف لائیں۔",
        "آہستہ نیچے لائیں اور ٹانگ بدلیں۔",
      ],
    },
    steps: {
      en: [
        "Lie face down with a small pillow under the stomach if the back is sore.",
        "Keep both hips flat on the floor.",
        "Bend one knee slowly, bringing the heel up towards the buttock.",
        "Go as far as is comfortable and hold for two seconds.",
        "Lower the leg slowly and repeat on the other side.",
      ],
      ur: [
        "اوندھے لیٹ جائیں، کمر دُکھتی ہو تو پیٹ کے نیچے چھوٹا تکیہ رکھیں۔",
        "دونوں کولہے فرش پر سیدھے رکھیں۔",
        "ایک گھٹنا آہستہ موڑیں، ایڑی کولہے کی طرف لائیں۔",
        "آرام کی حد تک جائیں اور دو سیکنڈ رکیں۔",
        "ٹانگ آہستہ نیچے لائیں اور دوسری طرف دہرائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Gravity helps here, which is why it beats sitting for regaining bend.",
        "The hip must stay flat — lifting it is the way people fake extra bend.",
        "Add a belt around the ankle to pull a little further once this is easy.",
      ],
      ur: [
        "یہاں کشش ثقل مدد کرتی ہے، اسی لیے خم واپس لانے میں یہ بیٹھنے سے بہتر ہے۔",
        "کولہا سیدھا رہے — اسے اٹھانا ہی زیادہ خم دکھانے کی چوری ہے۔",
        "آسان ہو جائے تو ٹخنے کے گرد پٹی ڈال کر تھوڑا اور کھینچیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Forcing past a firm end point.",
        "Moving fast or jerking.",
        "Twisting the body to gain extra range.",
        "Holding the breath.",
      ],
      ur: [
        "سخت حد سے آگے زبردستی کرنا۔",
        "تیز یا جھٹکے سے حرکت دینا۔",
        "زیادہ حرکت کے لیے جسم مروڑنا۔",
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
    repetitions: "10 each side",
    sets: "2",
    holdTime: "2 seconds",
    frequency: "3 times daily",
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
      rationale: "Prone knee flexion is standard for regaining knee bend after surgery. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ kneeNear: 2 }, PRONE), travel: 800, hold: 400, label: "Lying face down, legs straight" },
        { pose: pose({ kneeNear: 106 }, PRONE), travel: 1000, hold: 900, label: "Bend the knee towards the buttock" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-K-017",
    slug: "knee-extension-seated-active",
    name: { en: "Seated Knee Straightening", ur: "بیٹھ کر گھٹنا سیدھا کرنا" },
    bodyRegion: "Knee",
    joint: ["Tibiofemoral", "Patellofemoral"],
    musclesTargeted: ["Quadriceps femoris", "Vastus medialis obliquus"],
    conditions: ["Post-knee-surgery rehabilitation", "Extension lag", "Knee stiffness", "Osteoarthritis of the knee"],
    purpose: { en: "Straightening the knee against nothing but the weight of the shin, which is the first step back after any knee problem.", ur: "صرف پنڈلی کے وزن کے خلاف گھٹنا سیدھا کرنا، جو کسی بھی گھٹنے کے مسئلے کے بعد واپسی کا پہلا قدم ہے۔" },
    exerciseType: "Range of motion",
    difficulty: "Beginner",
    contraction: ["Concentric", "Eccentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Sitting",
    equipment: ["Chair"],
    startingPosition: { en: "Sit well back on a firm chair with both feet flat and the thighs fully supported.", ur: "مضبوط کرسی پر اچھی طرح پیچھے بیٹھیں، دونوں پاؤں فرش پر اور رانوں کو پورا سہارا ہو۔" },
    quickSteps: {
      en: [
        "Sit well back with the thighs supported.",
        "Straighten one knee until the leg is level.",
        "Hold 3 seconds, then lower slowly.",
      ],
      ur: [
        "اچھی طرح پیچھے بیٹھیں، رانوں کو سہارا ہو۔",
        "ایک گھٹنا سیدھا کریں یہاں تک کہ ٹانگ برابر ہو جائے۔",
        "تین سیکنڈ رکیں، پھر آہستہ نیچے لائیں۔",
      ],
    },
    steps: {
      en: [
        "Sit right back so the whole thigh rests on the chair.",
        "Straighten one knee until the shin is level with the floor.",
        "Pull the toes up towards you at the same time.",
        "Hold straight for three seconds, tightening the front of the thigh.",
        "Lower the foot back to the floor slowly over three seconds.",
      ],
      ur: [
        "پوری ران کرسی پر آ جائے، اتنا پیچھے بیٹھیں۔",
        "ایک گھٹنا سیدھا کریں یہاں تک کہ پنڈلی فرش کے متوازی ہو۔",
        "ساتھ ہی پنجہ اپنی طرف اوپر کھینچیں۔",
        "تین سیکنڈ سیدھا رکھیں، ران کا اگلا حصہ سخت کریں۔",
        "پاؤں تین سیکنڈ میں آہستہ فرش پر واپس لائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Getting the knee completely straight matters more than how high the foot goes.",
        "Pulling the toes up makes the thigh work harder.",
        "Add an ankle weight once ten repetitions are easy.",
      ],
      ur: [
        "پاؤں کتنا اوپر جاتا ہے، اس سے زیادہ اہم ہے گھٹنے کا بالکل سیدھا ہونا۔",
        "پنجہ اوپر کھینچنے سے ران پر زیادہ زور آتا ہے۔",
        "دس بار آسان ہو جائے تو ٹخنے پر وزن باندھ لیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Forcing past a firm end point.",
        "Moving fast or jerking.",
        "Twisting the body to gain extra range.",
        "Holding the breath.",
      ],
      ur: [
        "سخت حد سے آگے زبردستی کرنا۔",
        "تیز یا جھٹکے سے حرکت دینا۔",
        "زیادہ حرکت کے لیے جسم مروڑنا۔",
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
    repetitions: "10 each side",
    sets: "3",
    holdTime: "3 seconds",
    frequency: "Daily",
    restBetweenSets: "30 seconds",
    progressions: ["band-knee-extension-seated"],
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
      rationale: "Seated knee extension is standard early quadriceps work. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ kneeNear: 84 }, SEATED), travel: 800, hold: 400, label: "Sitting with the knee bent" },
        { pose: pose({ kneeNear: 4, ankleNear: -14 }, SEATED), travel: 1000, hold: 900, label: "Straighten the knee level" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-A-016",
    slug: "ankle-alphabet",
    name: { en: "Ankle Alphabet", ur: "ٹخنے سے حروف بنانا" },
    bodyRegion: "Ankle & Foot",
    joint: ["Talocrural", "Subtalar", "Midtarsal"],
    musclesTargeted: ["Tibialis anterior", "Peroneals", "Gastrocnemius", "Tibialis posterior"],
    conditions: ["Ankle sprain recovery", "Post-cast stiffness", "Ankle swelling", "Bed rest deconditioning"],
    purpose: { en: "Tracing letters in the air takes the ankle through every direction it has, and holds a patient's attention far better than counting repetitions.", ur: "ہوا میں حروف بنانے سے ٹخنہ اپنی ہر سمت سے گزر جاتا ہے، اور مریض کی توجہ گنتی گننے سے کہیں بہتر رہتی ہے۔" },
    exerciseType: "Range of motion",
    difficulty: "Beginner",
    contraction: ["Concentric"],
    mode: "Active",
    load: "No load",
    position: "Sitting",
    equipment: ["Chair"],
    startingPosition: { en: "Sit on a chair with one leg out in front, the heel resting on the floor and the foot free to move.", ur: "کرسی پر بیٹھیں، ایک ٹانگ سامنے، ایڑی فرش پر اور پاؤں حرکت کے لیے آزاد۔" },
    quickSteps: {
      en: [
        "Rest one heel on the floor with the foot free.",
        "Trace the letters of the alphabet in the air with your big toe.",
        "Move only the ankle, not the whole leg.",
      ],
      ur: [
        "ایک ایڑی فرش پر رکھیں، پاؤں آزاد ہو۔",
        "انگوٹھے سے ہوا میں حروف تہجی بنائیں۔",
        "صرف ٹخنہ حرکت کرے، پوری ٹانگ نہیں۔",
      ],
    },
    steps: {
      en: [
        "Sit with one leg out in front and the heel resting lightly on the floor.",
        "Imagine your big toe is a pen.",
        "Trace each letter of the alphabet in the air, one at a time.",
        "Keep the knee and shin completely still — only the ankle moves.",
        "Work through the whole alphabet, then rest and change feet.",
      ],
      ur: [
        "ایک ٹانگ سامنے رکھ کر بیٹھیں، ایڑی ہلکی فرش پر ٹکی ہو۔",
        "تصور کریں کہ آپ کا انگوٹھا قلم ہے۔",
        "ہوا میں ایک ایک کر کے حروف تہجی بنائیں۔",
        "گھٹنا اور پنڈلی بالکل ساکن رکھیں — صرف ٹخنہ حرکت کرے۔",
        "پورے حروف تہجی مکمل کریں، پھر آرام کر کے پاؤں بدلیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Watch the knee — if it swings, the hip is doing the work.",
        "Excellent for swelling: the movement pumps fluid out of the ankle.",
        "Do it with the leg raised on a stool if the ankle is swollen.",
      ],
      ur: [
        "گھٹنے پر نظر رکھیں — وہ ہلے تو کام کولہا کر رہا ہے۔",
        "سوجن کے لیے بہترین: یہ حرکت ٹخنے سے پانی نکالتی ہے۔",
        "ٹخنہ سوجا ہو تو ٹانگ اسٹول پر رکھ کر کریں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Forcing past a firm end point.",
        "Moving fast or jerking.",
        "Twisting the body to gain extra range.",
        "Holding the breath.",
      ],
      ur: [
        "سخت حد سے آگے زبردستی کرنا۔",
        "تیز یا جھٹکے سے حرکت دینا۔",
        "زیادہ حرکت کے لیے جسم مروڑنا۔",
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
    repetitions: "1 alphabet each side",
    sets: "2",
    holdTime: "—",
    frequency: "3 times daily",
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
      rationale: "Ankle alphabet tracing is a standard combined range exercise after ankle injury. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ kneeNear: 40, ankleNear: 10 }, SEATED), travel: 800, hold: 400, label: "Heel on the floor, foot free" },
        { pose: pose({ kneeNear: 40, ankleNear: -20 }, SEATED), travel: 1000, hold: 900, label: "Trace letters with the big toe" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-A-017",
    slug: "toe-extension-active",
    name: { en: "Toe Lifts", ur: "پنجے کی انگلیاں اٹھانا" },
    bodyRegion: "Ankle & Foot",
    joint: ["Metatarsophalangeal", "Interphalangeal"],
    musclesTargeted: ["Extensor digitorum longus", "Extensor hallucis longus", "Foot intrinsics"],
    conditions: ["Claw toes", "Hallux limitus", "Foot stiffness", "Plantar heel pain"],
    purpose: { en: "Separating the big toe from the others is a small skill that matters for balance, push-off and keeping the toes from clawing.", ur: "انگوٹھے کو باقی انگلیوں سے الگ کرنا ایک چھوٹی مہارت ہے جو توازن، دھکا لگانے اور انگلیوں کو مڑنے سے بچانے کے لیے اہم ہے۔" },
    exerciseType: "Range of motion",
    difficulty: "Beginner",
    contraction: ["Concentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Sitting",
    equipment: ["Chair"],
    startingPosition: { en: "Sit with both feet flat on the floor, hip-width apart and the toes relaxed.", ur: "بیٹھ جائیں، دونوں پاؤں فرش پر کولہوں کے برابر فاصلے پر اور انگلیاں ڈھیلی۔" },
    quickSteps: {
      en: [
        "Sit with both feet flat on the floor.",
        "Lift the big toe only, keeping the others down.",
        "Then lift the other four, keeping the big toe down.",
      ],
      ur: [
        "دونوں پاؤں فرش پر رکھ کر بیٹھیں۔",
        "صرف انگوٹھا اٹھائیں، باقی نیچے رکھیں۔",
        "پھر باقی چار اٹھائیں، انگوٹھا نیچے رکھیں۔",
      ],
    },
    steps: {
      en: [
        "Sit with both feet flat and the weight even across each foot.",
        "Lift the big toe off the floor while the other four stay down.",
        "Hold for two seconds, then lower it.",
        "Now press the big toe down and lift the other four instead.",
        "Alternate between the two, going slowly.",
      ],
      ur: [
        "دونوں پاؤں فرش پر رکھ کر بیٹھیں، ہر پاؤں پر وزن برابر۔",
        "انگوٹھا فرش سے اٹھائیں جبکہ باقی چار نیچے رہیں۔",
        "دو سیکنڈ رکیں، پھر نیچے کریں۔",
        "اب انگوٹھا نیچے دبائیں اور باقی چار اٹھائیں۔",
        "دونوں کے درمیان باری باری، آہستہ کریں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Almost nobody can do this at first — it takes a week or two of practice.",
        "Use a hand to hold the toes that should stay down while you learn it.",
        "This is the foundation of the short foot and balance work.",
      ],
      ur: [
        "پہلی بار یہ تقریباً کسی سے نہیں ہوتا — ایک دو ہفتے کی مشق لگتی ہے۔",
        "سیکھتے وقت جن انگلیوں کو نیچے رہنا ہے انہیں ہاتھ سے دبا لیں۔",
        "یہ شارٹ فٹ اور توازن کی ورزشوں کی بنیاد ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Forcing past a firm end point.",
        "Moving fast or jerking.",
        "Twisting the body to gain extra range.",
        "Holding the breath.",
      ],
      ur: [
        "سخت حد سے آگے زبردستی کرنا۔",
        "تیز یا جھٹکے سے حرکت دینا۔",
        "زیادہ حرکت کے لیے جسم مروڑنا۔",
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
    repetitions: "10 each way",
    sets: "2",
    holdTime: "2 seconds",
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
      rationale: "Toe separation drills are used in foot intrinsic and balance retraining. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ ankleNear: 2 }, SEATED), travel: 800, hold: 400, label: "Feet flat on the floor" },
        { pose: pose({ ankleNear: -6 }, SEATED), travel: 1000, hold: 900, label: "Lift the big toe, then the others" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-S-044",
    slug: "scapular-protraction-retraction",
    name: { en: "Shoulder Blade Slide", ur: "شانے کی ہڈی آگے پیچھے کرنا" },
    bodyRegion: "Shoulder",
    joint: ["Scapulothoracic"],
    musclesTargeted: ["Serratus anterior", "Rhomboids", "Middle trapezius", "Pectoralis minor"],
    conditions: ["Scapular dyskinesis", "Rounded posture", "Shoulder stiffness", "Desk work strain"],
    purpose: { en: "Moves the shoulder blade forward and back on the rib cage — the movement underneath every reach, and the one people lose without noticing.", ur: "شانے کی ہڈی کو پسلیوں پر آگے پیچھے حرکت دیتی ہے — یہ ہر پہنچنے والی حرکت کی بنیاد ہے اور لوگ اسے جانے بغیر کھو دیتے ہیں۔" },
    exerciseType: "Range of motion",
    difficulty: "Beginner",
    contraction: ["Concentric", "Eccentric"],
    mode: "Active",
    load: "No load",
    position: "Sitting",
    equipment: ["Chair"],
    startingPosition: { en: "Sit tall with both arms straight out in front at shoulder height, palms facing each other.", ur: "سیدھے بیٹھیں، دونوں بازو کندھے کی اونچائی پر سامنے سیدھے، ہتھیلیاں ایک دوسرے کی طرف۔" },
    quickSteps: {
      en: [
        "Hold both arms straight out in front.",
        "Reach forward so the shoulder blades slide apart.",
        "Then draw them back together without bending the elbows.",
      ],
      ur: [
        "دونوں بازو سامنے سیدھے رکھیں۔",
        "آگے بڑھائیں تاکہ شانے کی ہڈیاں الگ ہو جائیں۔",
        "پھر کہنیاں موڑے بغیر انہیں واپس ملا لیں۔",
      ],
    },
    steps: {
      en: [
        "Sit tall with both arms straight out in front at shoulder height.",
        "Without bending the elbows, reach both hands further forward.",
        "Feel the shoulder blades slide apart across the back of the ribs.",
        "Now draw the hands back by squeezing the shoulder blades together.",
        "The elbows stay straight throughout — only the shoulder blades move.",
      ],
      ur: [
        "سیدھے بیٹھیں، دونوں بازو کندھے کی اونچائی پر سامنے سیدھے۔",
        "کہنیاں موڑے بغیر دونوں ہاتھ مزید آگے بڑھائیں۔",
        "محسوس کریں کہ شانے کی ہڈیاں پسلیوں پر الگ ہو رہی ہیں۔",
        "اب شانے کی ہڈیاں ملا کر ہاتھ واپس کھینچیں۔",
        "پوری ورزش میں کہنیاں سیدھی رہیں — صرف شانے کی ہڈیاں حرکت کریں۔",
      ],
    },
    specialInstructions: {
      en: [
        "The elbows must not bend — that is what turns this into an arm exercise.",
        "The movement is small; a couple of inches at the hands is plenty.",
        "This is the foundation exercise before any scapular strengthening.",
      ],
      ur: [
        "کہنیاں نہ مڑیں — یہی چیز اسے بازو کی ورزش بنا دیتی ہے۔",
        "حرکت چھوٹی ہے؛ ہاتھوں کا دو تین انچ ہلنا کافی ہے۔",
        "شانوں کی کسی بھی مضبوطی کی ورزش سے پہلے یہ بنیادی ورزش ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Forcing past a firm end point.",
        "Moving fast or jerking.",
        "Twisting the body to gain extra range.",
        "Holding the breath.",
      ],
      ur: [
        "سخت حد سے آگے زبردستی کرنا۔",
        "تیز یا جھٹکے سے حرکت دینا۔",
        "زیادہ حرکت کے لیے جسم مروڑنا۔",
        "سانس روکنا۔",
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
    sets: "2",
    holdTime: "2 seconds each way",
    frequency: "Daily, or hourly at a desk",
    restBetweenSets: "30 seconds",
    progressions: ["scapular-setting"],
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
      rationale: "Scapular protraction and retraction drills precede scapular strengthening. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ shoulderNear: 92, elbowNear: 6, shoulderFar: 92, elbowFar: 6 }, SEATED), travel: 800, hold: 400, label: "Arms straight out in front" },
        { pose: pose({ shoulderNear: 88, elbowNear: 4, shoulderFar: 88, elbowFar: 4, thorax: -4 }, SEATED), travel: 1000, hold: 900, label: "Slide the blades apart, then together" },
      ],
      props: [{ kind: "chair" }],
    },
  },
];
