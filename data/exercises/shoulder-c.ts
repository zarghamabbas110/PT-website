import { pose } from "@/lib/figure";
import type { Exercise } from "../schema";
import { SEATED, SIDE_LYING, STAND, SUPINE } from "./bases";

/* ==========================================================================
   SHOULDER — batch 3
   --------------------------------------------------------------------------
   Assisted range in lying, scapular mobility, the wall push up, posterior
   capsule stretching and isometric loading for a painful shoulder.
   ========================================================================== */

export const SHOULDER_C: Exercise[] = [
  {
    id: "EX-S-019",
    slug: "supine-shoulder-flexion",
    name: { en: "Supine Assisted Shoulder Flexion", ur: "لیٹ کر بازو اوپر لے جانا" },
    bodyRegion: "Shoulder",
    joint: ["Glenohumeral"],
    musclesTargeted: ["Anterior deltoid", "Supraspinatus", "Serratus anterior"],
    conditions: ["Frozen shoulder", "Post-surgery stiffness", "Painful arc"],
    purpose: { en: "Lets gravity help the arm go overhead, so the movement can be regained before the shoulder is strong enough to lift itself.", ur: "لیٹنے سے کشش ثقل بازو کو اوپر لے جانے میں مدد دیتی ہے، اس لیے طاقت آنے سے پہلے ہی حرکت بحال ہو سکتی ہے۔" },
    difficulty: "Beginner",
    contraction: ["Passive", "Concentric"],
    mode: "Active-assisted",
    load: "Assisted",
    position: "Supine",
    equipment: ["Exercise mat"],
    startingPosition: { en: "Lie on your back with your knees bent and both hands clasped together over your chest.", ur: "گھٹنے موڑ کر سیدھے لیٹ جائیں، دونوں ہاتھ سینے پر ایک دوسرے میں پھنسا لیں۔" },
    quickSteps: {
      en: [
        "Lie on your back, hands clasped over your chest.",
        "Use the good arm to guide both arms overhead.",
        "Hold 5 seconds, then bring them back slowly.",
      ],
      ur: [
        "سیدھے لیٹ جائیں، ہاتھ سینے پر ملے ہوئے۔",
        "اچھے بازو کی مدد سے دونوں بازو سر کے اوپر لے جائیں۔",
        "پانچ سیکنڈ رکیں، پھر آہستہ واپس لائیں۔",
      ],
    },
    steps: {
      en: [
        "Clasp the hands so the good arm can do the work.",
        "Keep the elbows as straight as is comfortable.",
        "Take both arms up overhead towards the floor behind you.",
        "Hold at the top, then lower slowly together.",
      ],
      ur: [
        "ہاتھ ملا لیں تاکہ اچھا بازو کام کر سکے۔",
        "کہنیاں آرام کی حد تک سیدھی رکھیں۔",
        "دونوں بازو سر کے اوپر پیچھے فرش کی طرف لے جائیں۔",
        "اوپر رکیں، پھر ساتھ آہستہ نیچے لائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Lying down takes the weight of the arm away — that is the point.",
        "Keep the low back flat; do not let the ribs flare.",
        "Stop where the stretch is comfortable.",
      ],
      ur: [
        "لیٹنے سے بازو کا وزن ختم ہو جاتا ہے — یہی مقصد ہے۔",
        "کمر فرش سے لگی رکھیں؛ پسلیاں باہر نہ نکلیں۔",
        "جہاں کھنچاؤ آرام دہ ہو وہاں رک جائیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Arching the low back to gain range.",
        "Letting the sore arm do the lifting.",
        "Bending the elbows a lot.",
        "Rushing the return.",
      ],
      ur: [
        "حرکت بڑھانے کے لیے کمر کو محراب بنانا۔",
        "درد والے بازو سے اٹھوانا۔",
        "کہنیاں زیادہ موڑ لینا۔",
        "واپسی میں جلدی کرنا۔",
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
      rationale: "Supine assisted elevation reduces the demand on the deltoid and cuff during early range work. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ shoulderNear: 150, shoulderFar: 150, elbowNear: 60, elbowFar: 60 }, SUPINE), travel: 800, hold: 400, label: "Hands clasped over the chest" },
        { pose: pose({ shoulderNear: 30, shoulderFar: 30, elbowNear: 10, elbowFar: 10 }, SUPINE), travel: 1000, hold: 900, label: "Guide both arms overhead" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-S-020",
    slug: "shoulder-shrug",
    name: { en: "Shoulder Shrugs", ur: "کندھے اُچکانا" },
    bodyRegion: "Shoulder",
    joint: ["Scapulothoracic", "Acromioclavicular"],
    musclesTargeted: ["Upper trapezius", "Levator scapulae"],
    conditions: ["Neck and shoulder tension", "Post-immobilisation", "Scapular stiffness"],
    purpose: { en: "Moves the shoulder blades through their up-and-down range, which eases tension after long sitting.", ur: "شانوں کو اوپر نیچے حرکت دیتی ہے، جس سے لمبی نشست کے بعد تناؤ کم ہوتا ہے۔" },
    difficulty: "Beginner",
    contraction: ["Concentric", "Eccentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Sitting",
    equipment: [],
    startingPosition: { en: "Sit or stand tall with your arms relaxed by your sides.", ur: "سیدھے بیٹھیں یا کھڑے ہوں، بازو پہلوؤں پر ڈھیلے۔" },
    quickSteps: {
      en: [
        "Sit or stand tall, arms relaxed.",
        "Lift both shoulders up towards your ears.",
        "Hold 3 seconds, then let them drop down and back.",
      ],
      ur: [
        "سیدھے بیٹھیں یا کھڑے ہوں، بازو ڈھیلے۔",
        "دونوں کندھے کانوں کی طرف اٹھائیں۔",
        "تین سیکنڈ رکیں، پھر نیچے اور پیچھے چھوڑ دیں۔",
      ],
    },
    steps: {
      en: [
        "Let the arms hang loose.",
        "Lift both shoulders straight up towards the ears.",
        "Hold briefly at the top.",
        "Let them drop down, then gently draw them back and down.",
      ],
      ur: [
        "بازو ڈھیلے لٹکنے دیں۔",
        "دونوں کندھے سیدھے کانوں کی طرف اٹھائیں۔",
        "اوپر تھوڑا رکیں۔",
        "نیچے چھوڑیں، پھر نرمی سے پیچھے اور نیچے کریں۔",
      ],
    },
    specialInstructions: {
      en: [
        "The drop down and back is as important as the lift.",
        "Keep the neck long — do not push the head forward.",
        "Useful hourly during desk work.",
      ],
      ur: [
        "نیچے اور پیچھے لے جانا اٹھانے جتنا ہی اہم ہے۔",
        "گردن لمبی رکھیں — سر آگے نہ نکالیں۔",
        "میز کے کام کے دوران ہر گھنٹے مفید ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Rolling the shoulders instead of lifting straight up.",
        "Pushing the head forward.",
        "Tensing the arms.",
        "Skipping the downward phase.",
      ],
      ur: [
        "سیدھا اٹھانے کے بجائے کندھے گھمانا۔",
        "سر آگے نکالنا۔",
        "بازو سخت کرنا۔",
        "نیچے کا حصہ چھوڑ دینا۔",
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
    holdTime: "3 seconds",
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
      rationale: "Scapular elevation and depression is a simple mobility exercise for postural shoulder tension. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ shoulderNear: 174, shoulderFar: 174 }, SEATED), travel: 800, hold: 400, label: "Shoulders relaxed" },
        { pose: pose({ shoulderNear: 184, shoulderFar: 184 }, SEATED), travel: 1000, hold: 900, label: "Lift towards the ears, then drop" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-S-021",
    slug: "wall-push-up",
    name: { en: "Wall Push Up", ur: "دیوار پر پش اپ" },
    bodyRegion: "Shoulder",
    joint: ["Glenohumeral", "Scapulothoracic"],
    musclesTargeted: ["Serratus anterior", "Pectoralis major", "Triceps brachii"],
    conditions: ["Scapular winging", "Shoulder weakness", "Early strengthening after injury"],
    purpose: { en: "A gentle first push-up that trains the muscle holding the shoulder blade flat against the ribs.", ur: "ہلکا پہلا پش اپ جو اُس پٹھے کو مضبوط کرتا ہے جو شانے کی ہڈی کو پسلیوں سے لگا رکھتا ہے۔" },
    difficulty: "Beginner",
    contraction: ["Concentric", "Eccentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["Wall"],
    startingPosition: { en: "Stand facing a wall an arm's length away with both palms flat on it at shoulder height.", ur: "دیوار سے ایک بازو کے فاصلے پر سامنے کھڑے ہوں، دونوں ہتھیلیاں کندھے کی اونچائی پر دیوار سے لگی ہوں۔" },
    quickSteps: {
      en: [
        "Stand facing a wall, palms flat at shoulder height.",
        "Bend the elbows to bring your chest towards the wall.",
        "Push back out and reach a little further at the end.",
      ],
      ur: [
        "دیوار کے سامنے کھڑے ہوں، ہتھیلیاں کندھے کی اونچائی پر۔",
        "کہنیاں موڑ کر سینہ دیوار کی طرف لائیں۔",
        "واپس دھکیلیں اور آخر میں تھوڑا اور آگے بڑھیں۔",
      ],
    },
    steps: {
      en: [
        "Stand far enough back that the arms are straight.",
        "Bend the elbows and let the chest come towards the wall.",
        "Push back until the elbows are straight.",
        "At the end, push a little further so the shoulder blades spread apart.",
      ],
      ur: [
        "اتنا پیچھے کھڑے ہوں کہ بازو سیدھے رہیں۔",
        "کہنیاں موڑیں اور سینہ دیوار کی طرف آنے دیں۔",
        "واپس دھکیلیں یہاں تک کہ کہنیاں سیدھی ہوں۔",
        "آخر میں تھوڑا اور دھکیلیں تاکہ شانے کی ہڈیاں پھیل جائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "That extra push at the end is the whole point of the exercise.",
        "Keep the body in a straight line from head to heels.",
        "Step further back to make it harder.",
      ],
      ur: [
        "آخر والا اضافی دھکا ہی اس ورزش کا اصل مقصد ہے۔",
        "سر سے ایڑی تک جسم سیدھی لکیر میں رکھیں۔",
        "مشکل بنانے کے لیے مزید پیچھے کھڑے ہوں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Sagging at the hips.",
        "Skipping the final push.",
        "Letting the shoulders shrug up.",
        "Placing the hands too high.",
      ],
      ur: [
        "کولہوں کا جھک جانا۔",
        "آخری دھکا چھوڑ دینا۔",
        "کندھوں کا اُچھل جانا۔",
        "ہاتھ بہت اونچے رکھنا۔",
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
    repetitions: "10–12",
    sets: "3",
    holdTime: "1 second at the end",
    frequency: "Every other day",
    restBetweenSets: "45 seconds",
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
      rationale: "Wall push ups with a plus are commonly used for early serratus anterior activation. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ shoulderNear: 90, shoulderFar: 90, elbowNear: 6, elbowFar: 6 }, STAND), travel: 800, hold: 400, label: "Arms straight against the wall" },
        { pose: pose({ shoulderNear: 86, shoulderFar: 86, elbowNear: 70, elbowFar: 70 }, STAND), travel: 1000, hold: 900, label: "Bend the elbows, chest to the wall" },
      ],
      props: [{ kind: "wall" }],
    },
  },
  {
    id: "EX-S-022",
    slug: "sleeper-stretch",
    name: { en: "Sleeper Stretch", ur: "پہلو کے بل کندھے کا کھنچاؤ" },
    bodyRegion: "Shoulder",
    joint: ["Glenohumeral"],
    musclesTargeted: ["Posterior capsule", "Infraspinatus", "Teres minor"],
    conditions: ["Posterior shoulder tightness", "Internal rotation loss", "Throwing shoulder"],
    purpose: { en: "Opens the tight back of the shoulder joint that limits reaching across the body and behind the back.", ur: "کندھے کے جوڑ کے سخت پچھلے حصے کو کھولتی ہے جو جسم کے آر پار اور پیٹھ پیچھے ہاتھ لے جانے میں رکاوٹ بنتا ہے۔" },
    difficulty: "Intermediate",
    contraction: ["Passive"],
    mode: "Passive",
    load: "Bodyweight",
    position: "Side-lying",
    equipment: ["Exercise mat"],
    startingPosition: { en: "Lie on the affected side with that shoulder under you and the elbow bent to 90 degrees in front.", ur: "متاثرہ پہلو پر لیٹیں، وہ کندھا نیچے ہو اور کہنی سامنے نوے درجے مڑی ہو۔" },
    quickSteps: {
      en: [
        "Lie on the affected shoulder, elbow bent in front at 90 degrees.",
        "Use the other hand to press the forearm down towards the floor.",
        "Hold 30 seconds, then release slowly.",
      ],
      ur: [
        "متاثرہ کندھے پر لیٹیں، کہنی سامنے نوے درجے مڑی ہو۔",
        "دوسرے ہاتھ سے بازو کو فرش کی طرف دبائیں۔",
        "تیس سیکنڈ رکیں، پھر آہستہ چھوڑیں۔",
      ],
    },
    steps: {
      en: [
        "Lie on the side with the shoulder directly underneath you.",
        "Bring the upper arm out in front to shoulder height.",
        "Bend the elbow so the forearm points at the ceiling.",
        "Use the top hand to press the forearm gently down.",
      ],
      ur: [
        "پہلو پر لیٹیں، کندھا بالکل نیچے ہو۔",
        "اوپری بازو سامنے کندھے کی اونچائی پر لائیں۔",
        "کہنی موڑیں تاکہ بازو چھت کی طرف ہو۔",
        "اوپر والے ہاتھ سے بازو نرمی سے نیچے دبائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Do not let the body roll backwards — that removes the stretch.",
        "Press gently; this stretch is easy to overdo.",
        "Stop if you feel pinching at the front of the shoulder.",
      ],
      ur: [
        "جسم پیچھے نہ لڑھکے — اس سے کھنچاؤ ختم ہو جاتا ہے۔",
        "نرمی سے دبائیں؛ اس کھنچاؤ میں زیادتی آسان ہے۔",
        "کندھے کے اگلے حصے میں چبھن ہو تو رک جائیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Rolling backwards off the shoulder.",
        "Pressing too hard.",
        "Letting the elbow slide down from shoulder height.",
        "Holding the breath.",
      ],
      ur: [
        "کندھے سے پیچھے لڑھک جانا۔",
        "بہت زور سے دبانا۔",
        "کہنی کا کندھے کی اونچائی سے نیچے کھسک جانا۔",
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
    repetitions: "3",
    sets: "2",
    holdTime: "30 seconds",
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
      rationale: "The sleeper stretch is commonly used for posterior shoulder tightness and internal rotation deficit. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ shoulderNear: 90, elbowNear: 90, shoulderRotNear: 60 }, SIDE_LYING), travel: 800, hold: 400, label: "Lying on the shoulder, forearm up" },
        { pose: pose({ shoulderNear: 90, elbowNear: 90, shoulderRotNear: -10 }, SIDE_LYING), travel: 1000, hold: 900, label: "Press the forearm towards the floor" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-S-023",
    slug: "isometric-shoulder-abduction",
    name: { en: "Isometric Shoulder Abduction", ur: "دیوار کے خلاف کندھے کا زور" },
    bodyRegion: "Shoulder",
    joint: ["Glenohumeral"],
    musclesTargeted: ["Middle deltoid", "Supraspinatus"],
    conditions: ["Painful arc", "Early rotator cuff rehabilitation", "Post-injury weakness"],
    purpose: { en: "Builds strength without moving the joint, so it can be started while movement is still painful.", ur: "جوڑ کو حرکت دیے بغیر طاقت بناتی ہے، اس لیے درد کے دوران بھی شروع کی جا سکتی ہے۔" },
    difficulty: "Beginner",
    contraction: ["Isometric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["Wall"],
    startingPosition: { en: "Stand side-on to a wall with the arm by your side and the elbow bent to 90 degrees.", ur: "دیوار کے پہلو میں کھڑے ہوں، بازو پہلو پر اور کہنی نوے درجے مڑی ہو۔" },
    quickSteps: {
      en: [
        "Stand side-on to a wall, elbow bent at your side.",
        "Press the outside of the arm into the wall.",
        "Hold 5 seconds, then relax.",
      ],
      ur: [
        "دیوار کے پہلو میں کھڑے ہوں، کہنی پہلو پر مڑی ہو۔",
        "بازو کا باہر والا حصہ دیوار پر دبائیں۔",
        "پانچ سیکنڈ رکیں، پھر ڈھیلا چھوڑیں۔",
      ],
    },
    steps: {
      en: [
        "Stand close enough that the arm touches the wall.",
        "Press the outside of the upper arm into the wall.",
        "Build the pressure gradually to about half effort.",
        "Hold, breathing normally, then release slowly.",
      ],
      ur: [
        "اتنا قریب کھڑے ہوں کہ بازو دیوار سے لگے۔",
        "اوپری بازو کا باہر والا حصہ دیوار پر دبائیں۔",
        "دباؤ آہستہ آہستہ آدھی طاقت تک بڑھائیں۔",
        "رکیں، سانس لیتے رہیں، پھر آہستہ چھوڑیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Nothing should move — the arm stays still against the wall.",
        "Build up and release the pressure gradually, never suddenly.",
        "If it hurts, press more gently.",
      ],
      ur: [
        "کچھ حرکت نہیں کرنا چاہیے — بازو دیوار پر ساکن رہے۔",
        "دباؤ آہستہ بڑھائیں اور آہستہ چھوڑیں، اچانک نہیں۔",
        "درد ہو تو ہلکا دبائیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Pressing suddenly at full force.",
        "Letting the shoulder shrug up.",
        "Leaning the whole body into the wall.",
        "Holding the breath.",
      ],
      ur: [
        "اچانک پوری طاقت سے دبانا۔",
        "کندھے کا اُچھل جانا۔",
        "پورا جسم دیوار پر جھکا دینا۔",
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
    sets: "3",
    holdTime: "5 seconds",
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
      rationale: "Isometric loading is commonly used early in rotator cuff rehabilitation when movement is painful. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ shoulderNear: 176, elbowNear: 86 }, STAND), travel: 800, hold: 400, label: "Arm at the side, elbow bent" },
        { pose: pose({ shoulderNear: 172, elbowNear: 86, shoulderAbductNear: 10 }, STAND), travel: 1000, hold: 900, label: "Press out into the wall" },
      ],
      props: [{ kind: "wall" }],
    },
  },
];
