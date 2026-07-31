import { pose } from "@/lib/figure";
import type { Exercise } from "../schema";
import { PRONE, QUADRUPED, SEATED, SIDE_LYING, STAND, SUPINE, SUPINE_LONG } from "./bases";

/* ==========================================================================
   BALL, ROLLER, TOWEL AND WHAT IS ALREADY IN THE HOUSE
   --------------------------------------------------------------------------
   Gym ball and foam roller work for clinics that have them, and beside it
   the same jobs done with a towel, a chair, a stair and two water bottles —
   because most people will never buy equipment, and a bottle filled a
   little further each week is a perfectly good progression.
   Drafts pending clinical review.
   ========================================================================== */

export const EQUIPMENT: Exercise[] = [
  {
    id: "EX-L-019",
    slug: "gym-ball-sitting-tilt",
    name: { en: "Pelvic Tilts on a Gym Ball", ur: "جِم بال پر پیڑو کی حرکت" },
    bodyRegion: "Lumbar",
    joint: ["Lumbar spine L1–L5", "Sacroiliac", "Hip"],
    musclesTargeted: ["Transversus abdominis", "Erector spinae", "Gluteus maximus"],
    conditions: ["Low back stiffness", "Prolonged sitting", "Poor postural awareness", "Pregnancy-related low back pain"],
    purpose: { en: "A ball will not let you sit still, which is exactly why it teaches the low back to move again after weeks of guarding it.", ur: "گیند آپ کو ساکن بیٹھنے نہیں دیتی، اور یہی وجہ ہے کہ ہفتوں کی احتیاط کے بعد یہ کمر کو دوبارہ حرکت سکھاتی ہے۔" },
    exerciseType: "Range of motion",
    difficulty: "Beginner",
    contraction: ["Concentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Sitting",
    equipment: ["Gym ball"],
    startingPosition: { en: "Sit tall on a gym ball with both feet flat and hip-width apart, hands resting on the thighs.", ur: "جِم بال پر سیدھے بیٹھیں، دونوں پاؤں فرش پر کولہوں کے برابر فاصلے پر، ہاتھ رانوں پر۔" },
    quickSteps: {
      en: [
        "Sit tall on the ball with both feet flat.",
        "Roll the pelvis forward, then backward.",
        "Then roll it in slow circles both ways.",
      ],
      ur: [
        "گیند پر سیدھے بیٹھیں، دونوں پاؤں فرش پر۔",
        "پیڑو آگے گھمائیں، پھر پیچھے۔",
        "پھر دونوں طرف آہستہ دائرے بنائیں۔",
      ],
    },
    steps: {
      en: [
        "Sit on the ball with the feet flat and wide enough to feel steady.",
        "Roll the pelvis forwards so the low back hollows a little.",
        "Roll it backwards so the low back flattens and the ball moves under you.",
        "Move between the two ten times, letting the ball do the work.",
        "Then take the pelvis in slow circles, five each way.",
      ],
      ur: [
        "گیند پر بیٹھیں، پاؤں فرش پر اور اتنے کھلے کہ استحکام محسوس ہو۔",
        "پیڑو آگے گھمائیں تاکہ کمر تھوڑی اندر کی طرف ہو۔",
        "پھر پیچھے گھمائیں تاکہ کمر سیدھی ہو اور گیند نیچے کھسکے۔",
        "دونوں کے درمیان دس بار حرکت کریں، گیند کو کام کرنے دیں۔",
        "پھر پیڑو کو آہستہ دائروں میں گھمائیں، ہر طرف پانچ بار۔",
      ],
    },
    specialInstructions: {
      en: [
        "A ball is the right size when your hips and knees are level as you sit on it.",
        "Put it against a wall or in a corner until you trust your balance on it.",
        "Bare feet or non-slip shoes; socks on a hard floor are how people fall off.",
      ],
      ur: [
        "گیند کا سائز درست ہے اگر اُس پر بیٹھنے سے کولہے اور گھٹنے برابر ہوں۔",
        "توازن پر بھروسہ ہونے تک اسے دیوار یا کونے سے لگا کر رکھیں۔",
        "ننگے پاؤں یا نہ پھسلنے والے جوتے پہنیں؛ سخت فرش پر جرابیں پہن کر لوگ گرتے ہیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting the equipment slip or roll away.",
        "Going faster as you tire.",
        "Holding the breath during the effort.",
        "Using more resistance than you can control.",
      ],
      ur: [
        "سامان کا پھسل یا لڑھک جانا۔",
        "تھکنے پر تیز ہو جانا۔",
        "زور لگاتے وقت سانس روکنا۔",
        "اتنی مزاحمت لینا جو قابو میں نہ رہے۔",
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
    repetitions: "10 each way",
    sets: "2",
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
      rationale: "Gym ball pelvic mobility is widely used for low back stiffness and pregnancy discomfort. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ pelvisTilt: 10, lumbar: -4 }, SEATED), travel: 800, hold: 400, label: "Sitting tall on the ball" },
        { pose: pose({ pelvisTilt: -12, lumbar: 12 }, SEATED), travel: 1000, hold: 900, label: "Roll the pelvis forward and back" },
      ],
      props: [{ kind: "gymBall" }],
    },
  },
  {
    id: "EX-K-031",
    slug: "gym-ball-wall-squat",
    name: { en: "Wall Squat with a Gym Ball", ur: "جِم بال کے ساتھ دیوار پر اسکواٹ" },
    bodyRegion: "Knee",
    joint: ["Tibiofemoral", "Hip", "Patellofemoral"],
    musclesTargeted: ["Quadriceps femoris", "Gluteus maximus", "Hamstrings", "Soleus"],
    conditions: ["Quadriceps weakness", "Patellofemoral pain", "Osteoarthritis of the knee", "Return to daily activity"],
    purpose: { en: "The ball rolls with you, so the back is supported and the knee path stays honest — which makes this the most forgiving way to load a sore knee.", ur: "گیند آپ کے ساتھ لڑھکتی ہے، اس لیے کمر کو سہارا ملتا ہے اور گھٹنے کا راستہ درست رہتا ہے — یہی دُکھتے گھٹنے پر بوجھ ڈالنے کا سب سے نرم طریقہ ہے۔" },
    exerciseType: "Strengthening",
    difficulty: "Beginner",
    contraction: ["Concentric", "Eccentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["Gym ball", "Wall"],
    startingPosition: { en: "Stand with a gym ball between your low back and a wall, feet a step forward and hip-width apart.", ur: "جِم بال کمر اور دیوار کے درمیان رکھ کر کھڑے ہوں، پاؤں ایک قدم آگے اور کولہوں کے برابر فاصلے پر۔" },
    quickSteps: {
      en: [
        "Put the ball between your low back and a wall.",
        "Slide down until the knees are about halfway bent.",
        "Push back up through the heels.",
      ],
      ur: [
        "گیند کمر اور دیوار کے درمیان رکھیں۔",
        "نیچے کھسکیں یہاں تک کہ گھٹنے تقریباً آدھے مڑ جائیں۔",
        "ایڑیوں سے زور لگا کر واپس اوپر آئیں۔",
      ],
    },
    steps: {
      en: [
        "Place the ball in the small of your back against a smooth wall.",
        "Walk the feet a step forward so they are ahead of your hips.",
        "Bend the knees and let the ball roll up your back as you slide down.",
        "Stop when the knees are about halfway bent, and never past a right angle.",
        "Push back up through the heels until the legs are straight.",
      ],
      ur: [
        "گیند کمر کے گڑھے میں ہموار دیوار سے لگا کر رکھیں۔",
        "پاؤں ایک قدم آگے کریں تاکہ وہ کولہوں سے آگے ہوں۔",
        "گھٹنے موڑیں اور نیچے کھسکتے ہوئے گیند کو کمر پر اوپر لڑھکنے دیں۔",
        "گھٹنے تقریباً آدھے مڑنے پر رک جائیں، اور کبھی نوے درجے سے آگے نہ جائیں۔",
        "ایڑیوں سے زور لگا کر واپس اوپر آئیں یہاں تک کہ ٹانگیں سیدھی ہو جائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "The knees must stay behind the toes; walk the feet further forward if they do not.",
        "Going deeper is not better — halfway loaded well beats deep and shaky.",
        "Watch in a mirror that the knees do not fall inwards.",
      ],
      ur: [
        "گھٹنے پنجوں سے پیچھے رہیں؛ نہ رہیں تو پاؤں مزید آگے کر لیں۔",
        "زیادہ گہرا بہتر نہیں — لڑکھڑاتے ہوئے گہرے سے بہتر ہے آدھا مگر ٹھیک۔",
        "آئینے میں دیکھیں کہ گھٹنے اندر کی طرف نہ گریں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting the equipment slip or roll away.",
        "Going faster as you tire.",
        "Holding the breath during the effort.",
        "Using more resistance than you can control.",
      ],
      ur: [
        "سامان کا پھسل یا لڑھک جانا۔",
        "تھکنے پر تیز ہو جانا۔",
        "زور لگاتے وقت سانس روکنا۔",
        "اتنی مزاحمت لینا جو قابو میں نہ رہے۔",
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
    holdTime: "2 seconds at the bottom",
    frequency: "Every other day",
    restBetweenSets: "30 seconds",
    progressions: [],
    regressions: ["mini-squat"],
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
      rationale: "Gym ball wall squats are a standard supported closed-chain knee exercise. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: STAND, travel: 800, hold: 400, label: "Standing against the ball" },
        { pose: pose({ hipNear: 46, kneeNear: 52, ankleNear: -16, hipFar: 46, kneeFar: 52, ankleFar: -16 }, STAND), travel: 1000, hold: 900, label: "Slide down the wall" },
      ],
      props: [{ kind: "gymBall" }],
    },
  },
  {
    id: "EX-H-042",
    slug: "gym-ball-bridge",
    name: { en: "Bridge with the Feet on a Ball", ur: "پاؤں گیند پر رکھ کر کولہے اٹھانا" },
    bodyRegion: "Pelvis & Hip",
    joint: ["Hip", "Tibiofemoral", "Lumbar spine L1–L5"],
    musclesTargeted: ["Hamstrings", "Gluteus maximus", "Transversus abdominis", "Gastrocnemius"],
    conditions: ["Gluteal weakness", "Hamstring weakness", "Return to sport", "Poor trunk control"],
    purpose: { en: "Putting the feet on something that rolls turns a simple bridge into a balance and control exercise, and shifts the load onto the hamstrings.", ur: "پاؤں لڑھکنے والی چیز پر رکھنے سے سادہ پُل توازن اور قابو کی ورزش بن جاتی ہے، اور بوجھ ران کے پچھلے پٹھوں پر آ جاتا ہے۔" },
    exerciseType: "Stabilisation & motor control",
    difficulty: "Advanced",
    contraction: ["Concentric", "Isometric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Supine",
    equipment: ["Gym ball", "Exercise mat"],
    startingPosition: { en: "Lie on your back with both heels resting on top of a gym ball and the arms out at your sides.", ur: "سیدھے لیٹ جائیں، دونوں ایڑیاں جِم بال کے اوپر اور بازو پہلوؤں میں کھلے۔" },
    quickSteps: {
      en: [
        "Lie on your back with both heels on the ball.",
        "Lift the hips until the body is straight.",
        "Hold 3 seconds, then lower slowly.",
      ],
      ur: [
        "سیدھے لیٹ جائیں، دونوں ایڑیاں گیند پر۔",
        "کولہے اٹھائیں یہاں تک کہ جسم سیدھا ہو جائے۔",
        "تین سیکنڈ رکیں، پھر آہستہ نیچے لائیں۔",
      ],
    },
    steps: {
      en: [
        "Lie on your back with both heels on top of the ball and the legs fairly straight.",
        "Spread the arms out to the sides for stability.",
        "Press the heels down and lift the hips until shoulders, hips and heels line up.",
        "Keep the ball still — any wobble means you are going too fast.",
        "Hold for three seconds, then lower slowly to the floor.",
      ],
      ur: [
        "سیدھے لیٹ جائیں، دونوں ایڑیاں گیند کے اوپر اور ٹانگیں تقریباً سیدھی۔",
        "استحکام کے لیے بازو پہلوؤں میں کھول لیں۔",
        "ایڑیاں نیچے دبائیں اور کولہے اٹھائیں یہاں تک کہ کندھے، کولہے اور ایڑیاں ایک سیدھ میں آئیں۔",
        "گیند ساکن رکھیں — لڑکھڑاہٹ کا مطلب ہے آپ بہت تیز کر رہے ہیں۔",
        "تین سیکنڈ رکیں، پھر آہستہ فرش پر نیچے آئیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "A ball is the right size when your hips and knees are level as you sit on it.",
        "Put it against a wall or in a corner until you trust your balance on it.",
        "Bare feet or non-slip shoes; socks on a hard floor are how people fall off.",
      ],
      ur: [
        "گیند کا سائز درست ہے اگر اُس پر بیٹھنے سے کولہے اور گھٹنے برابر ہوں۔",
        "توازن پر بھروسہ ہونے تک اسے دیوار یا کونے سے لگا کر رکھیں۔",
        "ننگے پاؤں یا نہ پھسلنے والے جوتے پہنیں؛ سخت فرش پر جرابیں پہن کر لوگ گرتے ہیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting the equipment slip or roll away.",
        "Going faster as you tire.",
        "Holding the breath during the effort.",
        "Using more resistance than you can control.",
      ],
      ur: [
        "سامان کا پھسل یا لڑھک جانا۔",
        "تھکنے پر تیز ہو جانا۔",
        "زور لگاتے وقت سانس روکنا۔",
        "اتنی مزاحمت لینا جو قابو میں نہ رہے۔",
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
    repetitions: "8–10",
    sets: "3",
    holdTime: "3 seconds",
    frequency: "Every other day",
    restBetweenSets: "45 seconds",
    progressions: [],
    regressions: ["glute-bridge"],
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
      rationale: "Gym ball bridging progresses hip extensor and trunk control demand. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ hipNear: 0, kneeNear: 8, hipFar: 0, kneeFar: 8 }, SUPINE_LONG), travel: 800, hold: 400, label: "Heels on the ball" },
        { pose: pose({ rootRot: -112, hipNear: 4, kneeNear: 10, hipFar: 4, kneeFar: 10 }, SUPINE_LONG), travel: 1000, hold: 900, label: "Lift the hips into a line" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-L-020",
    slug: "gym-ball-back-extension",
    name: { en: "Back Extension over a Ball", ur: "گیند پر کمر پیچھے موڑنا" },
    bodyRegion: "Lumbar",
    joint: ["Lumbar spine L1–L5", "Thoracic spine T1–T12"],
    musclesTargeted: ["Erector spinae", "Multifidus", "Gluteus maximus"],
    conditions: ["Low back weakness", "Postural fatigue", "Return to manual work", "Osteoporosis prevention"],
    purpose: { en: "Strengthens the back extensors over a supported curve, which is far kinder to the spine than lifting the trunk off a flat floor.", ur: "سہارے والی گولائی پر کمر کے پٹھوں کو مضبوط کرتی ہے، جو چپٹے فرش سے دھڑ اٹھانے کی نسبت ریڑھ کے لیے کہیں زیادہ نرم ہے۔" },
    exerciseType: "Strengthening",
    difficulty: "Intermediate",
    contraction: ["Concentric", "Eccentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Prone",
    equipment: ["Gym ball", "Exercise mat"],
    startingPosition: { en: "Lie face down over a gym ball with it under your stomach and the feet braced against a wall.", ur: "جِم بال پر اوندھے لیٹ جائیں، گیند پیٹ کے نیچے ہو اور پاؤں دیوار سے ٹکے ہوں۔" },
    quickSteps: {
      en: [
        "Lie face down over the ball with the feet braced.",
        "Lift the chest until the body is straight.",
        "Lower slowly and repeat.",
      ],
      ur: [
        "گیند پر اوندھے لیٹیں، پاؤں ٹکے ہوں۔",
        "سینہ اٹھائیں یہاں تک کہ جسم سیدھا ہو جائے۔",
        "آہستہ نیچے لائیں اور دہرائیں۔",
      ],
    },
    steps: {
      en: [
        "Kneel over the ball and walk your hands forward until it sits under the stomach.",
        "Brace the feet against a wall or have someone hold them.",
        "Cross the arms over the chest, or place the hands by the temples.",
        "Lift the chest until the body makes a straight line — no higher.",
        "Lower slowly back over the ball and repeat.",
      ],
      ur: [
        "گیند پر گھٹنوں کے بل آئیں اور ہاتھ آگے بڑھائیں یہاں تک کہ گیند پیٹ کے نیچے آ جائے۔",
        "پاؤں دیوار سے ٹکائیں یا کسی سے پکڑوائیں۔",
        "بازو سینے پر باندھیں یا ہاتھ کنپٹیوں پر رکھیں۔",
        "سینہ اٹھائیں یہاں تک کہ جسم سیدھی لکیر بنائے — اس سے اوپر نہیں۔",
        "آہستہ واپس گیند پر نیچے آئیں اور دہرائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Stop at a straight line — arching beyond it loads the joints rather than the muscles.",
        "Hands by the temples is much harder than arms crossed; start with crossed.",
        "Not for anyone with a recent vertebral fracture.",
      ],
      ur: [
        "سیدھی لکیر پر رک جائیں — اس سے آگے محراب بنانے سے پٹھوں کے بجائے جوڑوں پر بوجھ پڑتا ہے۔",
        "ہاتھ کنپٹیوں پر رکھنا بازو باندھنے سے کہیں مشکل ہے؛ باندھنے سے شروع کریں۔",
        "جس کے مہرے میں حالیہ ٹوٹ ہوئی ہو، اُس کے لیے نہیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting the equipment slip or roll away.",
        "Going faster as you tire.",
        "Holding the breath during the effort.",
        "Using more resistance than you can control.",
      ],
      ur: [
        "سامان کا پھسل یا لڑھک جانا۔",
        "تھکنے پر تیز ہو جانا۔",
        "زور لگاتے وقت سانس روکنا۔",
        "اتنی مزاحمت لینا جو قابو میں نہ رہے۔",
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
    repetitions: "10–12",
    sets: "3",
    holdTime: "1 second at the top",
    frequency: "Every other day",
    restBetweenSets: "45 seconds",
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
      rationale: "Ball-supported back extension is a standard graded extensor strengthening exercise. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ lumbar: 14, thorax: 10, shoulderNear: 150, elbowNear: 120, shoulderFar: 150, elbowFar: 120 }, PRONE), travel: 800, hold: 400, label: "Draped over the ball" },
        { pose: pose({ lumbar: -8, thorax: -6, shoulderNear: 150, elbowNear: 120, shoulderFar: 150, elbowFar: 120 }, PRONE), travel: 1000, hold: 900, label: "Lift the chest to straight" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-K-032",
    slug: "gym-ball-hamstring-curl",
    name: { en: "Hamstring Curl on a Ball", ur: "گیند پر ران کے پچھلے پٹھے کی ورزش" },
    bodyRegion: "Knee",
    joint: ["Tibiofemoral", "Hip"],
    musclesTargeted: ["Hamstrings", "Gluteus maximus", "Gastrocnemius", "Transversus abdominis"],
    conditions: ["Hamstring weakness", "Post-ACL rehabilitation", "Return to sport", "Knee instability"],
    purpose: { en: "Rolling the ball in with the heels while holding a bridge is one of the hardest hamstring exercises that needs no weights at all.", ur: "پُل کی حالت میں ایڑیوں سے گیند اندر کھینچنا ران کے پچھلے پٹھے کی سب سے مشکل ورزشوں میں سے ہے، اور اس کے لیے کوئی وزن نہیں چاہیے۔" },
    exerciseType: "Strengthening",
    difficulty: "Advanced",
    contraction: ["Concentric", "Eccentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Supine",
    equipment: ["Gym ball", "Exercise mat"],
    startingPosition: { en: "Lie on your back with both heels on a gym ball, hips lifted so the body is in a straight line.", ur: "سیدھے لیٹ جائیں، دونوں ایڑیاں جِم بال پر اور کولہے اٹھے ہوئے تاکہ جسم سیدھی لکیر بنائے۔" },
    quickSteps: {
      en: [
        "Lift the hips with both heels on the ball.",
        "Bend the knees and roll the ball towards you.",
        "Roll it slowly back out, keeping the hips up.",
      ],
      ur: [
        "دونوں ایڑیاں گیند پر رکھ کر کولہے اٹھائیں۔",
        "گھٹنے موڑ کر گیند اپنی طرف کھینچیں۔",
        "کولہے اٹھائے رکھتے ہوئے گیند آہستہ واپس باہر کریں۔",
      ],
    },
    steps: {
      en: [
        "Lie on your back with the heels on the ball and the arms out for balance.",
        "Lift the hips so the body makes a straight line from shoulders to heels.",
        "Bend both knees and pull the ball in towards your buttocks.",
        "The hips must not drop as the ball comes in — that is the whole difficulty.",
        "Straighten the legs slowly to roll it back out, then lower the hips.",
      ],
      ur: [
        "سیدھے لیٹ جائیں، ایڑیاں گیند پر اور بازو توازن کے لیے کھلے۔",
        "کولہے اٹھائیں تاکہ کندھوں سے ایڑیوں تک جسم سیدھی لکیر بنائے۔",
        "دونوں گھٹنے موڑ کر گیند کولہوں کی طرف کھینچیں۔",
        "گیند اندر آتے وقت کولہے نہ گریں — یہی سب سے مشکل حصہ ہے۔",
        "ٹانگیں آہستہ سیدھی کر کے گیند واپس باہر کریں، پھر کولہے نیچے لائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Master the ball bridge as a hold before adding the curl.",
        "The hips dropping is the sign to stop the set.",
        "Expect real hamstring soreness for a day or two the first time.",
      ],
      ur: [
        "کرل شامل کرنے سے پہلے گیند پر پُل روکنا سیکھ لیں۔",
        "کولہوں کا گرنا سیٹ ختم کرنے کا اشارہ ہے۔",
        "پہلی بار ایک دو دن ران کے پچھلے پٹھے میں اصل درد متوقع ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting the equipment slip or roll away.",
        "Going faster as you tire.",
        "Holding the breath during the effort.",
        "Using more resistance than you can control.",
      ],
      ur: [
        "سامان کا پھسل یا لڑھک جانا۔",
        "تھکنے پر تیز ہو جانا۔",
        "زور لگاتے وقت سانس روکنا۔",
        "اتنی مزاحمت لینا جو قابو میں نہ رہے۔",
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
    repetitions: "8–10",
    sets: "3",
    holdTime: "1 second",
    frequency: "Twice weekly",
    restBetweenSets: "60 seconds",
    progressions: [],
    regressions: ["gym-ball-bridge"],
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
      rationale: "Ball hamstring curls are a standard advanced closed-chain hamstring exercise. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ rootRot: -112, hipNear: 4, kneeNear: 10, hipFar: 4, kneeFar: 10 }, SUPINE_LONG), travel: 800, hold: 400, label: "Bridge with the heels on the ball" },
        { pose: pose({ rootRot: -112, hipNear: 24, kneeNear: 82, hipFar: 24, kneeFar: 82 }, SUPINE_LONG), travel: 1000, hold: 900, label: "Roll the ball in with the heels" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-CO-017",
    slug: "gym-ball-dead-bug",
    name: { en: "Dead Bug Holding a Ball", ur: "گیند پکڑ کر ڈیڈ بگ" },
    bodyRegion: "Core",
    joint: ["Lumbar spine L1–L5", "Hip", "Glenohumeral"],
    musclesTargeted: ["Transversus abdominis", "Rectus abdominis", "Iliopsoas", "Latissimus dorsi"],
    conditions: ["Core weakness", "Low back pain", "Return to sport", "Poor trunk control"],
    purpose: { en: "Pressing a ball between the opposite hand and knee gives the abdominal wall something to push against, which makes it far easier to feel it working.", ur: "مخالف ہاتھ اور گھٹنے کے درمیان گیند دبانے سے پیٹ کی دیوار کو دبانے کے لیے کچھ مل جاتا ہے، جس سے اُس کا کام محسوس کرنا کہیں آسان ہو جاتا ہے۔" },
    exerciseType: "Stabilisation & motor control",
    difficulty: "Intermediate",
    contraction: ["Isometric", "Concentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Supine",
    equipment: ["Gym ball", "Exercise mat"],
    startingPosition: { en: "Lie on your back with both knees bent up over the hips and a ball held between one hand and the opposite knee.", ur: "سیدھے لیٹ جائیں، دونوں گھٹنے کولہوں کے اوپر مڑے اور گیند ایک ہاتھ اور مخالف گھٹنے کے درمیان پکڑی ہو۔" },
    quickSteps: {
      en: [
        "Hold a ball between one hand and the opposite knee.",
        "Press them together and hold.",
        "Lower the free arm and leg away, then return.",
      ],
      ur: [
        "گیند ایک ہاتھ اور مخالف گھٹنے کے درمیان پکڑیں۔",
        "انہیں آپس میں دبائیں اور روکیں۔",
        "آزاد بازو اور ٹانگ دور لے جائیں، پھر واپس لائیں۔",
      ],
    },
    steps: {
      en: [
        "Lie on your back with both knees bent up so they sit over the hips.",
        "Hold the ball between the right hand and the left knee and press them together.",
        "Keep pressing while you lower the left arm overhead and the right leg away.",
        "Go only as far as the low back stays flat on the floor.",
        "Return, then swap which hand and knee hold the ball.",
      ],
      ur: [
        "سیدھے لیٹ جائیں، دونوں گھٹنے اوپر مڑے ہوں تاکہ کولہوں کے اوپر ہوں۔",
        "گیند دائیں ہاتھ اور بائیں گھٹنے کے درمیان پکڑیں اور دبائیں۔",
        "دباؤ برقرار رکھتے ہوئے بایاں بازو سر کے اوپر اور دائیں ٹانگ دور لے جائیں۔",
        "صرف اتنا جائیں جتنا کمر فرش پر سیدھی رہے۔",
        "واپس آئیں، پھر ہاتھ اور گھٹنا بدل لیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "The press against the ball is what switches the deep abdominals on.",
        "If the low back lifts, move the free arm and leg less far.",
        "Keep breathing — bracing by holding the breath teaches the wrong thing.",
      ],
      ur: [
        "گیند پر دباؤ ہی پیٹ کے گہرے پٹھوں کو چالو کرتا ہے۔",
        "کمر اٹھ جائے تو آزاد بازو اور ٹانگ کم دور لے جائیں۔",
        "سانس لیتے رہیں — سانس روک کر سختی کرنا غلط عادت سکھاتا ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting the equipment slip or roll away.",
        "Going faster as you tire.",
        "Holding the breath during the effort.",
        "Using more resistance than you can control.",
      ],
      ur: [
        "سامان کا پھسل یا لڑھک جانا۔",
        "تھکنے پر تیز ہو جانا۔",
        "زور لگاتے وقت سانس روکنا۔",
        "اتنی مزاحمت لینا جو قابو میں نہ رہے۔",
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
    repetitions: "8 each side",
    sets: "3",
    holdTime: "—",
    frequency: "Every other day",
    restBetweenSets: "30 seconds",
    progressions: [],
    regressions: ["dead-bug"],
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
      rationale: "Ball-assisted dead bug is a common way to cue deep abdominal activation. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ hipNear: 90, kneeNear: 90, hipFar: 90, kneeFar: 90, shoulderNear: 90, elbowNear: 20, shoulderFar: 90, elbowFar: 20 }, SUPINE), travel: 800, hold: 400, label: "Ball pressed between hand and knee" },
        { pose: pose({ hipNear: 90, kneeNear: 90, hipFar: 20, kneeFar: 16, shoulderNear: 90, elbowNear: 20, shoulderFar: 20, elbowFar: 6 }, SUPINE), travel: 1000, hold: 900, label: "Lower the free arm and leg" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-T-017",
    slug: "foam-roller-thoracic",
    name: { en: "Upper Back over a Foam Roller", ur: "فوم رولر پر اوپری کمر" },
    bodyRegion: "Thoracic",
    joint: ["Thoracic spine T1–T12", "Costovertebral"],
    musclesTargeted: ["Erector spinae", "Rhomboids", "Pectoralis major"],
    conditions: ["Upper back stiffness", "Rounded posture", "Desk work strain", "Reduced overhead reach"],
    purpose: { en: "Uses body weight over a fixed point to extend the stiff part of the upper back, which no amount of active movement reaches on its own.", ur: "جسم کے وزن کو ایک نقطے پر استعمال کر کے اوپری کمر کے سخت حصے کو پیچھے موڑتی ہے، جہاں صرف اپنی حرکت سے پہنچا نہیں جا سکتا۔" },
    exerciseType: "Range of motion",
    difficulty: "Intermediate",
    contraction: ["Passive"],
    mode: "Passive",
    load: "Bodyweight",
    position: "Supine",
    equipment: ["Foam roller", "Exercise mat"],
    startingPosition: { en: "Lie on your back with a foam roller across the upper back and the hands behind the head.", ur: "سیدھے لیٹ جائیں، فوم رولر اوپری کمر کے آر پار اور ہاتھ سر کے پیچھے۔" },
    quickSteps: {
      en: [
        "Lie with a foam roller across your upper back.",
        "Support the head and lean back over it.",
        "Hold 20 seconds, then move it up or down a little.",
      ],
      ur: [
        "فوم رولر اوپری کمر کے آر پار رکھ کر لیٹیں۔",
        "سر کو سہارا دیں اور اُس پر پیچھے جھکیں۔",
        "بیس سیکنڈ رکیں، پھر رولر تھوڑا اوپر یا نیچے کریں۔",
      ],
    },
    steps: {
      en: [
        "Lie on your back with the roller across the upper back, below the shoulder blades.",
        "Lace the hands behind the head to support its weight — this matters.",
        "Keep the hips down and lean back over the roller.",
        "Hold for twenty seconds, breathing out into it.",
        "Move the roller a hand's width up or down and repeat, staying above the low back.",
      ],
      ur: [
        "سیدھے لیٹ جائیں، رولر شانوں کی ہڈیوں کے نیچے اوپری کمر کے آر پار ہو۔",
        "ہاتھ سر کے پیچھے ملا لیں تاکہ اُس کا وزن سنبھلے — یہ اہم ہے۔",
        "کولہے نیچے رکھیں اور رولر پر پیچھے جھکیں۔",
        "بیس سیکنڈ رکیں، سانس اُسی طرف چھوڑیں۔",
        "رولر ایک ہاتھ کے برابر اوپر یا نیچے کریں اور دہرائیں، کمر کے نچلے حصے سے اوپر ہی رہیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Never take the roller below the ribs; the low back has no support there.",
        "Supporting the head with the hands is what protects the neck.",
        "A rolled towel works if you do not have a roller.",
      ],
      ur: [
        "رولر کبھی پسلیوں سے نیچے نہ لے جائیں؛ وہاں کمر کو سہارا نہیں ملتا۔",
        "ہاتھوں سے سر کو سہارا دینا ہی گردن کی حفاظت کرتا ہے۔",
        "رولر نہ ہو تو لپٹا تولیہ بھی کام دیتا ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting the equipment slip or roll away.",
        "Going faster as you tire.",
        "Holding the breath during the effort.",
        "Using more resistance than you can control.",
      ],
      ur: [
        "سامان کا پھسل یا لڑھک جانا۔",
        "تھکنے پر تیز ہو جانا۔",
        "زور لگاتے وقت سانس روکنا۔",
        "اتنی مزاحمت لینا جو قابو میں نہ رہے۔",
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
    repetitions: "3 positions",
    sets: "2",
    holdTime: "20 seconds each",
    frequency: "Daily",
    restBetweenSets: "30 seconds",
    progressions: [],
    regressions: ["thoracic-foam-roll"],
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
      rationale: "Foam roller thoracic extension is widely used for upper back stiffness. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ thorax: 4, shoulderNear: 50, elbowNear: 130, shoulderFar: 50, elbowFar: 130 }, SUPINE), travel: 800, hold: 400, label: "Roller across the upper back" },
        { pose: pose({ thorax: -14, neck: -4, shoulderNear: 46, elbowNear: 132, shoulderFar: 46, elbowFar: 132 }, SUPINE), travel: 1000, hold: 900, label: "Lean back over it" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-H-043",
    slug: "foam-roller-itb",
    name: { en: "Rolling the Outer Thigh", ur: "ران کے بیرونی حصے پر رولر" },
    bodyRegion: "Pelvis & Hip",
    joint: ["Hip", "Tibiofemoral"],
    musclesTargeted: ["Tensor fasciae latae", "Iliotibial band", "Vastus lateralis", "Gluteus medius"],
    conditions: ["Lateral hip pain", "Iliotibial band syndrome", "Runner's knee", "Muscle soreness after running"],
    purpose: { en: "Rolling the outside of the thigh is uncomfortable and popular in equal measure; used sensibly it eases the tightness that a stretch alone does not reach.", ur: "ران کے باہر رولر چلانا جتنا تکلیف دہ ہے اُتنا ہی مقبول بھی؛ سمجھداری سے کیا جائے تو یہ اُس سختی کو کم کرتا ہے جہاں صرف کھنچاؤ نہیں پہنچتا۔" },
    exerciseType: "Stretching",
    difficulty: "Intermediate",
    contraction: ["Passive"],
    mode: "Passive",
    load: "Bodyweight",
    position: "Side-lying",
    equipment: ["Foam roller", "Exercise mat"],
    startingPosition: { en: "Lie on your side with a foam roller under the outside of the lower thigh, propped on the forearm.", ur: "پہلو پر لیٹ جائیں، فوم رولر نیچے والی ران کے باہر ہو اور بازو پر ٹیک لگی ہو۔" },
    quickSteps: {
      en: [
        "Lie on your side with a roller under the outer thigh.",
        "Roll slowly from the hip to just above the knee.",
        "Pause on any sore spot for twenty seconds.",
      ],
      ur: [
        "پہلو پر لیٹیں، رولر ران کے باہر ہو۔",
        "کولہے سے گھٹنے کے ذرا اوپر تک آہستہ رول کریں۔",
        "کسی دُکھتی جگہ پر بیس سیکنڈ رکیں۔",
      ],
    },
    steps: {
      en: [
        "Lie on your side with the roller under the outside of the lower thigh.",
        "Prop yourself on the forearm and use the top foot on the floor to control the weight.",
        "Roll slowly from just below the hip to just above the knee.",
        "When you find a tender spot, stop there and breathe for twenty seconds.",
        "Do not roll over the bony point of the hip or the knee itself.",
      ],
      ur: [
        "پہلو پر لیٹیں، رولر نیچے والی ران کے باہر ہو۔",
        "بازو پر ٹیک لگائیں اور اوپر والا پاؤں فرش پر رکھ کر وزن قابو کریں۔",
        "کولہے کے ذرا نیچے سے گھٹنے کے ذرا اوپر تک آہستہ رول کریں۔",
        "کوئی دُکھتی جگہ ملے تو وہیں رک کر بیس سیکنڈ سانس لیں۔",
        "کولہے کی ہڈی یا خود گھٹنے پر رول نہ کریں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Take weight through the top foot to control how hard it presses.",
        "Uncomfortable is expected; sharp pain and holding the breath are not.",
        "Follow it with the standing outer hip stretch.",
      ],
      ur: [
        "اوپر والے پاؤں پر وزن ڈال کر دباؤ کم زیادہ کریں۔",
        "تکلیف متوقع ہے؛ تیز درد اور سانس روکنا نہیں۔",
        "اس کے بعد کھڑے ہو کر کولہے کے باہر کا کھنچاؤ کریں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting the equipment slip or roll away.",
        "Going faster as you tire.",
        "Holding the breath during the effort.",
        "Using more resistance than you can control.",
      ],
      ur: [
        "سامان کا پھسل یا لڑھک جانا۔",
        "تھکنے پر تیز ہو جانا۔",
        "زور لگاتے وقت سانس روکنا۔",
        "اتنی مزاحمت لینا جو قابو میں نہ رہے۔",
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
    repetitions: "10 passes each side",
    sets: "1",
    holdTime: "20 seconds on a tender spot",
    frequency: "After exercise, or daily",
    restBetweenSets: "30 seconds",
    progressions: ["itb-standing-stretch"],
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
      rationale: "Foam rolling of the lateral thigh is widely used for lateral hip and knee pain. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ hipNear: 10, kneeNear: 6, hipFar: 60, kneeFar: 70, shoulderNear: 120, elbowNear: 90 }, SIDE_LYING), travel: 800, hold: 400, label: "Roller under the outer thigh" },
        { pose: pose({ hipNear: 34, kneeNear: 8, hipFar: 60, kneeFar: 70, shoulderNear: 120, elbowNear: 90 }, SIDE_LYING), travel: 1000, hold: 900, label: "Roll from hip to knee" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-A-026",
    slug: "foam-roller-calf",
    name: { en: "Rolling the Calf", ur: "پنڈلی پر رولر" },
    bodyRegion: "Ankle & Foot",
    joint: ["Talocrural", "Tibiofemoral"],
    musclesTargeted: ["Gastrocnemius", "Soleus", "Achilles tendon"],
    conditions: ["Calf tightness", "Achilles tendinopathy", "Plantar heel pain", "Muscle soreness after running"],
    purpose: { en: "Works into the calf more deeply than a stretch does, and is easy to do sitting on the floor with nothing but a roller.", ur: "پنڈلی میں کھنچاؤ سے زیادہ گہرائی تک کام کرتی ہے، اور فرش پر بیٹھ کر صرف ایک رولر سے آسانی سے ہو جاتی ہے۔" },
    exerciseType: "Stretching",
    difficulty: "Beginner",
    contraction: ["Passive"],
    mode: "Passive",
    load: "Bodyweight",
    position: "Sitting",
    equipment: ["Foam roller", "Exercise mat"],
    startingPosition: { en: "Sit on the floor with one calf resting on a foam roller and the hands behind you.", ur: "فرش پر بیٹھیں، ایک پنڈلی فوم رولر پر رکھیں اور ہاتھ پیچھے رکھیں۔" },
    quickSteps: {
      en: [
        "Sit with one calf on a foam roller.",
        "Lift the hips and roll from ankle to knee.",
        "Pause on any tender spot for twenty seconds.",
      ],
      ur: [
        "ایک پنڈلی فوم رولر پر رکھ کر بیٹھیں۔",
        "کولہے اٹھائیں اور ٹخنے سے گھٹنے تک رول کریں۔",
        "کسی دُکھتی جگہ پر بیس سیکنڈ رکیں۔",
      ],
    },
    steps: {
      en: [
        "Sit on the floor with the hands behind you and one calf across the roller.",
        "Cross the other leg over it to add pressure, or leave it off to reduce pressure.",
        "Lift the hips clear of the floor.",
        "Roll slowly from just above the ankle to just below the knee.",
        "Pause on any tender spot and turn the foot in and out while you wait.",
      ],
      ur: [
        "فرش پر بیٹھیں، ہاتھ پیچھے رکھیں اور ایک پنڈلی رولر پر رکھیں۔",
        "دباؤ بڑھانے کے لیے دوسری ٹانگ اُس پر رکھیں، یا کم کرنے کے لیے ہٹا لیں۔",
        "کولہے فرش سے اٹھائیں۔",
        "ٹخنے کے ذرا اوپر سے گھٹنے کے ذرا نیچے تک آہستہ رول کریں۔",
        "دُکھتی جگہ پر رکیں اور انتظار کے دوران پاؤں اندر باہر گھمائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Turning the foot while you pause reaches the deeper muscle.",
        "Stop and seek advice if one calf is swollen, hot or newly painful.",
        "Do it after walking or running rather than before.",
      ],
      ur: [
        "رکنے کے دوران پاؤں گھمانے سے گہرے پٹھے تک پہنچا جا سکتا ہے۔",
        "ایک پنڈلی سوجی، گرم یا نئی دُکھتی ہو تو رک کر مشورہ لیں۔",
        "یہ چلنے یا دوڑنے کے بعد کریں، پہلے نہیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting the equipment slip or roll away.",
        "Going faster as you tire.",
        "Holding the breath during the effort.",
        "Using more resistance than you can control.",
      ],
      ur: [
        "سامان کا پھسل یا لڑھک جانا۔",
        "تھکنے پر تیز ہو جانا۔",
        "زور لگاتے وقت سانس روکنا۔",
        "اتنی مزاحمت لینا جو قابو میں نہ رہے۔",
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
    repetitions: "10 passes each side",
    sets: "1",
    holdTime: "20 seconds on a tender spot",
    frequency: "After exercise",
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
      rationale: "Calf foam rolling is widely used for muscle tightness and soreness. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ rootRot: -58, hipNear: 60, kneeNear: 6, shoulderNear: 200, elbowNear: 10 }, SUPINE_LONG), travel: 800, hold: 400, label: "Calf across the roller" },
        { pose: pose({ rootRot: -58, hipNear: 74, kneeNear: 6, shoulderNear: 200, elbowNear: 10 }, SUPINE_LONG), travel: 1000, hold: 900, label: "Roll from ankle to knee" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-S-055",
    slug: "towel-shoulder-internal-rotation",
    name: { en: "Towel Stretch behind the Back", ur: "پیٹھ کے پیچھے تولیے سے کھنچاؤ" },
    bodyRegion: "Shoulder",
    joint: ["Glenohumeral", "Scapulothoracic"],
    musclesTargeted: ["Subscapularis", "Posterior capsule", "Teres major", "Latissimus dorsi"],
    conditions: ["Frozen shoulder", "Difficulty reaching behind the back", "Post-immobilisation stiffness", "Shoulder stiffness"],
    purpose: { en: "Uses the good arm to pull the stiff one further up the back — the range needed for a back pocket, a bra strap, or washing yourself.", ur: "اچھے بازو سے سخت بازو کو پیٹھ پر اوپر کھینچتی ہے — وہی حرکت جو پچھلی جیب، برا کی پٹی یا نہانے کے لیے چاہیے۔" },
    exerciseType: "Stretching",
    difficulty: "Intermediate",
    contraction: ["Passive"],
    mode: "Passive",
    load: "Assisted",
    position: "Standing",
    equipment: ["Towel"],
    startingPosition: { en: "Stand holding one end of a towel over your shoulder and the other end behind your back.", ur: "کھڑے ہوں، تولیے کا ایک سرا کندھے کے اوپر سے اور دوسرا پیٹھ کے پیچھے سے پکڑیں۔" },
    quickSteps: {
      en: [
        "Hold a towel over one shoulder and behind your back.",
        "Pull gently upwards with the top hand.",
        "Hold 20 seconds, then swap.",
      ],
      ur: [
        "تولیہ ایک کندھے کے اوپر اور پیٹھ کے پیچھے پکڑیں۔",
        "اوپر والے ہاتھ سے نرمی سے اوپر کھینچیں۔",
        "بیس سیکنڈ رکیں، پھر بدلیں۔",
      ],
    },
    steps: {
      en: [
        "Drape a towel over the good shoulder so one end hangs down your back.",
        "Reach the stiff arm behind your back and take hold of the lower end.",
        "Pull gently upwards with the top hand, drawing the lower hand up the back.",
        "Stop at a stretch, not at pain, and hold for twenty seconds.",
        "Release slowly, then swap which arm is on top.",
      ],
      ur: [
        "تولیہ اچھے کندھے پر ڈالیں تاکہ ایک سرا پیٹھ پر لٹکے۔",
        "سخت بازو پیٹھ کے پیچھے لے جا کر نچلا سرا پکڑیں۔",
        "اوپر والے ہاتھ سے نرمی سے اوپر کھینچیں تاکہ نیچے والا ہاتھ پیٹھ پر اوپر آئے۔",
        "کھنچاؤ پر رکیں، درد پر نہیں، اور بیس سیکنڈ رکیں۔",
        "آہستہ چھوڑیں، پھر بازو بدل لیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Mark on the towel how far you got, so progress is visible week by week.",
        "Stop at once if the shoulder pinches at the front.",
        "Warm the shoulder up with pendulums before doing this.",
      ],
      ur: [
        "تولیے پر نشان لگائیں کہ کہاں تک پہنچے، تاکہ ہفتہ بہ ہفتہ ترقی نظر آئے۔",
        "کندھے کے سامنے چبھن ہو تو فوراً رک جائیں۔",
        "یہ کرنے سے پہلے جھولوں سے کندھا گرم کر لیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting the equipment slip or roll away.",
        "Going faster as you tire.",
        "Holding the breath during the effort.",
        "Using more resistance than you can control.",
      ],
      ur: [
        "سامان کا پھسل یا لڑھک جانا۔",
        "تھکنے پر تیز ہو جانا۔",
        "زور لگاتے وقت سانس روکنا۔",
        "اتنی مزاحمت لینا جو قابو میں نہ رہے۔",
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
    holdTime: "20 seconds",
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
      rationale: "Towel-assisted internal rotation stretching is standard in adhesive capsulitis. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ shoulderNear: 200, elbowNear: 60, shoulderFar: 40, elbowFar: 110 }, STAND), travel: 800, hold: 400, label: "Towel over the shoulder" },
        { pose: pose({ shoulderNear: 210, elbowNear: 92, shoulderFar: 30, elbowFar: 130 }, STAND), travel: 1000, hold: 900, label: "Pull the lower hand up the back" },
      ],
    },
  },
  {
    id: "EX-H-044",
    slug: "towel-hamstring-stretch",
    name: { en: "Hamstring Stretch with a Towel", ur: "تولیے سے ران کے پچھلے پٹھے کا کھنچاؤ" },
    bodyRegion: "Pelvis & Hip",
    joint: ["Hip", "Tibiofemoral"],
    musclesTargeted: ["Hamstrings", "Gastrocnemius", "Gluteus maximus"],
    conditions: ["Hamstring tightness", "Low back pain", "Sciatica recovery", "Post-surgical stiffness"],
    purpose: { en: "The towel does the reaching, so the back stays flat on the floor — which is what makes this the safest hamstring stretch for a sore back.", ur: "تولیہ پہنچنے کا کام کرتا ہے، اس لیے کمر فرش پر سیدھی رہتی ہے — اسی سے یہ دُکھتی کمر کے لیے سب سے محفوظ کھنچاؤ بن جاتا ہے۔" },
    exerciseType: "Stretching",
    difficulty: "Beginner",
    contraction: ["Passive"],
    mode: "Passive",
    load: "Assisted",
    position: "Supine",
    equipment: ["Towel or belt", "Exercise mat"],
    startingPosition: { en: "Lie on your back with a towel looped around the sole of one foot, both ends held in your hands.", ur: "سیدھے لیٹ جائیں، تولیہ ایک پاؤں کے تلوے کے گرد ڈالیں اور دونوں سرے ہاتھوں میں پکڑیں۔" },
    quickSteps: {
      en: [
        "Loop a towel around one foot and hold both ends.",
        "Straighten that knee and raise the leg.",
        "Hold 30 seconds, then swap legs.",
      ],
      ur: [
        "تولیہ ایک پاؤں کے گرد ڈالیں اور دونوں سرے پکڑیں۔",
        "وہ گھٹنا سیدھا کریں اور ٹانگ اٹھائیں۔",
        "تیس سیکنڈ رکیں، پھر ٹانگ بدلیں۔",
      ],
    },
    steps: {
      en: [
        "Lie on your back with the other knee bent and that foot flat on the floor.",
        "Loop the towel around the sole of the foot you are stretching.",
        "Straighten that knee as much as you can, then raise the leg using the towel.",
        "Keep the low back flat and the other foot down.",
        "Hold where the back of the thigh pulls, then lower slowly.",
      ],
      ur: [
        "سیدھے لیٹ جائیں، دوسرا گھٹنا مڑا اور وہ پاؤں فرش پر۔",
        "جس ٹانگ کو کھینچنا ہے اُس کے تلوے کے گرد تولیہ ڈالیں۔",
        "وہ گھٹنا جتنا ہو سکے سیدھا کریں، پھر تولیے سے ٹانگ اٹھائیں۔",
        "کمر سیدھی اور دوسرا پاؤں نیچے رکھیں۔",
        "جہاں ران کے پیچھے کھنچاؤ ہو وہیں رکیں، پھر آہستہ نیچے لائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "The knee staying straight matters more than how high the leg goes.",
        "Bending the other knee protects the low back — do not straighten it.",
        "If the leg tingles rather than pulls, lower it and tell your physiotherapist.",
      ],
      ur: [
        "ٹانگ کتنی اونچی جاتی ہے، اس سے اہم ہے گھٹنے کا سیدھا رہنا۔",
        "دوسرا گھٹنا موڑنے سے کمر محفوظ رہتی ہے — اسے سیدھا نہ کریں۔",
        "ٹانگ میں کھنچاؤ کے بجائے سنسناہٹ ہو تو نیچے کریں اور فزیو تھراپسٹ کو بتائیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting the equipment slip or roll away.",
        "Going faster as you tire.",
        "Holding the breath during the effort.",
        "Using more resistance than you can control.",
      ],
      ur: [
        "سامان کا پھسل یا لڑھک جانا۔",
        "تھکنے پر تیز ہو جانا۔",
        "زور لگاتے وقت سانس روکنا۔",
        "اتنی مزاحمت لینا جو قابو میں نہ رہے۔",
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
      rationale: "Towel-assisted supine hamstring stretching is standard where the back must stay supported. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ hipNear: 45, kneeNear: 100 }, SUPINE), travel: 800, hold: 400, label: "Towel around the foot" },
        { pose: pose({ hipNear: 76, kneeNear: 6, shoulderNear: 110, elbowNear: 40 }, SUPINE), travel: 1000, hold: 900, label: "Straighten the knee and raise" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-S-056",
    slug: "water-bottle-weights",
    name: { en: "Using Water Bottles as Weights", ur: "پانی کی بوتلیں بطور وزن" },
    bodyRegion: "Shoulder",
    joint: ["Glenohumeral", "Humeroulnar", "Scapulothoracic"],
    musclesTargeted: ["Deltoid", "Biceps brachii", "Triceps brachii", "Upper trapezius"],
    conditions: ["Shoulder weakness", "Deconditioning", "Home exercise without equipment", "General conditioning"],
    purpose: { en: "A half-litre bottle weighs half a kilogram, and a full one weighs a kilogram. That is exactly the range most shoulder work needs, and every house has some.", ur: "آدھے لیٹر کی بوتل کا وزن آدھا کلو اور پوری بھری کا ایک کلو ہوتا ہے۔ کندھے کی زیادہ تر ورزشوں کے لیے یہی حد چاہیے، اور ہر گھر میں بوتلیں موجود ہیں۔" },
    exerciseType: "Strengthening",
    difficulty: "Beginner",
    contraction: ["Concentric", "Eccentric"],
    mode: "Resisted",
    load: "Free weight",
    position: "Standing",
    equipment: ["Two water bottles"],
    startingPosition: { en: "Stand tall with a filled water bottle in each hand, arms at your sides.", ur: "سیدھے کھڑے ہوں، ہر ہاتھ میں بھری ہوئی پانی کی بوتل، بازو پہلوؤں پر۔" },
    quickSteps: {
      en: [
        "Hold a filled bottle in each hand at your sides.",
        "Raise both arms forward to shoulder height, then lower slowly.",
        "Then raise them out to the sides the same way.",
      ],
      ur: [
        "ہر ہاتھ میں بھری بوتل پہلوؤں پر پکڑیں۔",
        "دونوں بازو سامنے کندھے کی اونچائی تک اٹھائیں، پھر آہستہ نیچے لائیں۔",
        "پھر اسی طرح پہلوؤں میں اٹھائیں۔",
      ],
    },
    steps: {
      en: [
        "Fill two identical bottles to the same level and hold one in each hand.",
        "Stand tall with the feet hip-width apart and the stomach gently tight.",
        "Raise both arms forward to shoulder height over two seconds.",
        "Lower them over three seconds — this is where the strength is built.",
        "Repeat the set raising the arms out to the sides instead.",
      ],
      ur: [
        "دو ایک جیسی بوتلیں برابر بھریں اور ہر ہاتھ میں ایک پکڑیں۔",
        "سیدھے کھڑے ہوں، پاؤں کولہوں کے برابر فاصلے پر اور پیٹ ہلکا سخت۔",
        "دونوں بازو دو سیکنڈ میں سامنے کندھے کی اونچائی تک اٹھائیں۔",
        "تین سیکنڈ میں نیچے لائیں — طاقت یہیں بنتی ہے۔",
        "پھر یہی سیٹ بازو پہلوؤں میں اٹھا کر دہرائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Add water a little at a time to increase the weight — it is the cheapest progression there is.",
        "Both bottles must be filled equally or you will work one side harder.",
        "If the shoulders shrug, the bottles are too full.",
      ],
      ur: [
        "وزن بڑھانے کے لیے تھوڑا تھوڑا پانی ڈالیں — یہ سب سے سستا طریقہ ہے۔",
        "دونوں بوتلیں برابر بھری ہوں ورنہ ایک طرف زیادہ زور پڑے گا۔",
        "کندھے اُچھلنے لگیں تو بوتلیں زیادہ بھری ہیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting the equipment slip or roll away.",
        "Going faster as you tire.",
        "Holding the breath during the effort.",
        "Using more resistance than you can control.",
      ],
      ur: [
        "سامان کا پھسل یا لڑھک جانا۔",
        "تھکنے پر تیز ہو جانا۔",
        "زور لگاتے وقت سانس روکنا۔",
        "اتنی مزاحمت لینا جو قابو میں نہ رہے۔",
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
    repetitions: "10–12 in each direction",
    sets: "3",
    holdTime: "1 second at the top",
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
      rationale: "Household objects as graded weights are standard where equipment is unavailable. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ shoulderNear: 176, elbowNear: 8, shoulderFar: 176, elbowFar: 8 }, STAND), travel: 800, hold: 400, label: "Bottles held at the sides" },
        { pose: pose({ shoulderNear: 92, elbowNear: 8, shoulderFar: 92, elbowFar: 8 }, STAND), travel: 1000, hold: 900, label: "Raise to shoulder height" },
      ],
      props: [{ kind: "dumbbells" }],
    },
  },
  {
    id: "EX-EL-016",
    slug: "chair-triceps-dip",
    name: { en: "Chair Push Up", ur: "کرسی پر پُش اپ" },
    bodyRegion: "Elbow",
    joint: ["Humeroulnar", "Glenohumeral", "Scapulothoracic"],
    musclesTargeted: ["Triceps brachii", "Anterior deltoid", "Pectoralis major", "Serratus anterior"],
    conditions: ["Upper limb weakness", "Difficulty pushing up from a chair", "Return to independent living", "General conditioning"],
    purpose: { en: "Builds exactly the strength needed to push yourself up out of a chair, using the chair itself.", ur: "بالکل وہی طاقت بناتی ہے جو کرسی سے اٹھنے کے لیے چاہیے، اور اسی کرسی سے۔" },
    exerciseType: "Strengthening",
    difficulty: "Intermediate",
    contraction: ["Concentric", "Eccentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Sitting",
    equipment: ["Firm chair with arms against a wall"],
    startingPosition: { en: "Sit on a firm chair with arms, hands on the armrests and feet flat on the floor.", ur: "ہتھوں والی مضبوط کرسی پر بیٹھیں، ہاتھ ہتھوں پر اور پاؤں فرش پر۔" },
    quickSteps: {
      en: [
        "Sit with both hands on the armrests.",
        "Push down and lift your bottom just clear of the seat.",
        "Hold 3 seconds, then lower slowly.",
      ],
      ur: [
        "دونوں ہاتھ ہتھوں پر رکھ کر بیٹھیں۔",
        "نیچے دبائیں اور کولہے نشست سے ذرا اوپر اٹھائیں۔",
        "تین سیکنڈ رکیں، پھر آہستہ نیچے لائیں۔",
      ],
    },
    steps: {
      en: [
        "Use a firm chair with arms, pushed back against a wall so it cannot slide.",
        "Sit with both hands flat on the armrests and the feet flat on the floor.",
        "Push down through both hands and lift your bottom just clear of the seat.",
        "Let the feet help as much as you need to at first.",
        "Hold for three seconds, then lower slowly rather than dropping.",
      ],
      ur: [
        "ہتھوں والی مضبوط کرسی لیں، دیوار سے لگا دیں تاکہ پھسل نہ سکے۔",
        "دونوں ہاتھ ہتھوں پر اور پاؤں فرش پر رکھ کر بیٹھیں۔",
        "دونوں ہاتھوں سے نیچے دبائیں اور کولہے نشست سے ذرا اوپر اٹھائیں۔",
        "شروع میں پاؤں سے جتنی مدد چاہیے لے لیں۔",
        "تین سیکنڈ رکیں، پھر گرنے کے بجائے آہستہ نیچے آئیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Use the legs to help at first, then less and less as you get stronger.",
        "The chair must be against a wall — this is the main safety point.",
        "Not for a shoulder that has recently been operated on or dislocated.",
      ],
      ur: [
        "شروع میں ٹانگوں سے مدد لیں، پھر طاقت بڑھنے پر کم کرتے جائیں۔",
        "کرسی دیوار سے لگی ہو — یہی سب سے اہم حفاظتی بات ہے۔",
        "حال ہی میں آپریشن یا اُترنے والے کندھے کے لیے نہیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting the equipment slip or roll away.",
        "Going faster as you tire.",
        "Holding the breath during the effort.",
        "Using more resistance than you can control.",
      ],
      ur: [
        "سامان کا پھسل یا لڑھک جانا۔",
        "تھکنے پر تیز ہو جانا۔",
        "زور لگاتے وقت سانس روکنا۔",
        "اتنی مزاحمت لینا جو قابو میں نہ رہے۔",
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
    repetitions: "8–10",
    sets: "3",
    holdTime: "3 seconds",
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
      rationale: "Seated push-ups are standard for upper limb strength needed in transfers. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ shoulderNear: 168, elbowNear: 80, shoulderFar: 168, elbowFar: 80 }, SEATED), travel: 800, hold: 400, label: "Hands on the armrests" },
        { pose: pose({ shoulderNear: 176, elbowNear: 14, shoulderFar: 176, elbowFar: 14, hipNear: 78, hipFar: 78 }, SEATED), travel: 1000, hold: 900, label: "Push down and lift clear" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-S-057",
    slug: "towel-scapular-squeeze",
    name: { en: "Towel Row", ur: "تولیے سے رو" },
    bodyRegion: "Shoulder",
    joint: ["Scapulothoracic", "Glenohumeral"],
    musclesTargeted: ["Rhomboids", "Middle trapezius", "Posterior deltoid", "Biceps brachii"],
    conditions: ["Rounded posture", "Scapular weakness", "Desk work strain", "Home exercise without equipment"],
    purpose: { en: "Two hands pulling against each other through a towel give as much resistance as you choose to apply, and cost nothing.", ur: "تولیے کے ذریعے دو ہاتھ ایک دوسرے کے خلاف کھینچیں تو اُتنی ہی مزاحمت ملتی ہے جتنی آپ چاہیں، اور خرچ کچھ نہیں۔" },
    exerciseType: "Strengthening",
    difficulty: "Beginner",
    contraction: ["Concentric", "Isometric"],
    mode: "Resisted",
    load: "Bodyweight",
    position: "Sitting",
    equipment: ["Towel", "Chair"],
    startingPosition: { en: "Sit tall holding a towel taut between both hands, arms out in front at chest height.", ur: "سیدھے بیٹھیں، تولیہ دونوں ہاتھوں کے درمیان کھنچا ہوا پکڑیں، بازو سینے کی اونچائی پر سامنے۔" },
    quickSteps: {
      en: [
        "Hold a towel taut between both hands in front of you.",
        "Pull the hands apart while drawing the elbows back.",
        "Hold 3 seconds, then release.",
      ],
      ur: [
        "تولیہ دونوں ہاتھوں کے درمیان سامنے کھنچا ہوا پکڑیں۔",
        "ہاتھ الگ کھینچیں اور کہنیاں پیچھے لے جائیں۔",
        "تین سیکنڈ رکیں، پھر چھوڑ دیں۔",
      ],
    },
    steps: {
      en: [
        "Sit tall with both feet flat and hold a towel between your hands, arms out in front.",
        "Pull outwards on the towel so it is taut — you set the resistance.",
        "Keeping that tension, draw both elbows backwards past your ribs.",
        "Squeeze the shoulder blades together at the end and hold three seconds.",
        "Return slowly to the front, keeping the towel taut throughout.",
      ],
      ur: [
        "سیدھے بیٹھیں، دونوں پاؤں فرش پر اور تولیہ ہاتھوں کے درمیان سامنے پکڑیں۔",
        "تولیے کو باہر کی طرف کھینچیں تاکہ تن جائے — مزاحمت آپ خود طے کرتے ہیں۔",
        "یہی کھنچاؤ رکھتے ہوئے دونوں کہنیاں پسلیوں سے پیچھے لے جائیں۔",
        "آخر میں شانے کی ہڈیاں ملائیں اور تین سیکنڈ رکیں۔",
        "آہستہ سامنے واپس آئیں، تولیہ پوری حرکت میں تنا رہے۔",
      ],
    },
    specialInstructions: {
      en: [
        "You control the resistance entirely — pull harder on the towel to make it harder.",
        "The elbows must go behind the ribs; stopping short works nothing.",
        "Keep the shoulders down away from the ears.",
      ],
      ur: [
        "مزاحمت مکمل طور پر آپ کے قابو میں ہے — تولیہ زیادہ کھینچیں تو مشکل ہو جائے گی۔",
        "کہنیاں پسلیوں سے پیچھے جانی چاہئیں؛ پہلے رک جانے سے کچھ فائدہ نہیں۔",
        "کندھے کانوں سے دور نیچے رکھیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting the equipment slip or roll away.",
        "Going faster as you tire.",
        "Holding the breath during the effort.",
        "Using more resistance than you can control.",
      ],
      ur: [
        "سامان کا پھسل یا لڑھک جانا۔",
        "تھکنے پر تیز ہو جانا۔",
        "زور لگاتے وقت سانس روکنا۔",
        "اتنی مزاحمت لینا جو قابو میں نہ رہے۔",
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
    holdTime: "3 seconds",
    frequency: "Daily",
    restBetweenSets: "30 seconds",
    progressions: ["band-row-retraction"],
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
      rationale: "Self-resisted rowing is standard where bands and weights are unavailable. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ shoulderNear: 90, elbowNear: 20, shoulderFar: 90, elbowFar: 20 }, SEATED), travel: 800, hold: 400, label: "Towel taut, arms in front" },
        { pose: pose({ shoulderNear: 150, elbowNear: 96, shoulderFar: 150, elbowFar: 96, thorax: -5 }, SEATED), travel: 1000, hold: 900, label: "Draw the elbows back" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-S-058",
    slug: "book-shoulder-external-rotation",
    name: { en: "Side-Lying Rotation with a Weight", ur: "پہلو پر لیٹ کر وزن کے ساتھ گھماؤ" },
    bodyRegion: "Shoulder",
    joint: ["Glenohumeral", "Scapulothoracic"],
    musclesTargeted: ["Infraspinatus", "Teres minor", "Posterior deltoid"],
    conditions: ["Rotator cuff weakness", "Shoulder impingement", "Overhead sport", "Post-immobilisation weakness"],
    purpose: { en: "Lying on your side means gravity does the resisting, so a book or a small bottle is enough to load the cuff properly.", ur: "پہلو پر لیٹنے سے مزاحمت کشش ثقل دیتی ہے، اس لیے ایک کتاب یا چھوٹی بوتل کف کے پٹھوں پر مناسب بوجھ ڈالنے کے لیے کافی ہے۔" },
    exerciseType: "Strengthening",
    difficulty: "Intermediate",
    contraction: ["Concentric", "Eccentric"],
    mode: "Resisted",
    load: "Free weight",
    position: "Side-lying",
    equipment: ["Small weight or book", "Exercise mat", "Rolled towel"],
    startingPosition: { en: "Lie on your good side with the top elbow tucked in at your waist, bent to ninety degrees, holding a small weight.", ur: "اچھی طرف پر لیٹیں، اوپر والی کہنی کمر سے لگی اور نوے درجے مڑی، ہاتھ میں چھوٹا وزن۔" },
    quickSteps: {
      en: [
        "Lie on your side with the top elbow tucked in and bent.",
        "Lift the weight by turning the forearm up towards the ceiling.",
        "Lower slowly over three seconds.",
      ],
      ur: [
        "پہلو پر لیٹیں، اوپر والی کہنی لگی اور مڑی ہو۔",
        "بازو چھت کی طرف گھما کر وزن اٹھائیں۔",
        "تین سیکنڈ میں آہستہ نیچے لائیں۔",
      ],
    },
    steps: {
      en: [
        "Lie on the good side with a pillow under the head.",
        "Put a rolled towel between the top elbow and your waist to keep it in place.",
        "Bend that elbow to ninety degrees and hold a small weight or a book.",
        "Turn the forearm up towards the ceiling, keeping the elbow pinned.",
        "Lower slowly over three seconds — the lowering does most of the work.",
      ],
      ur: [
        "اچھی طرف پر لیٹیں، سر کے نیچے تکیہ۔",
        "اوپر والی کہنی اور کمر کے درمیان لپٹا تولیہ رکھیں تاکہ وہ اپنی جگہ رہے۔",
        "وہ کہنی نوے درجے موڑیں اور چھوٹا وزن یا کتاب پکڑیں۔",
        "کہنی ٹکی رکھتے ہوئے بازو چھت کی طرف اوپر گھمائیں۔",
        "تین سیکنڈ میں آہستہ نیچے لائیں — زیادہ تر کام نیچے لانے میں ہوتا ہے۔",
      ],
    },
    specialInstructions: {
      en: [
        "The towel under the elbow is the difference between doing this right and using the shoulder.",
        "A very light weight is correct — half a kilogram is plenty for the cuff.",
        "Range matters more than weight; go through the full arc.",
      ],
      ur: [
        "کہنی کے نیچے تولیہ ہی صحیح کرنے اور کندھے سے کام لینے کا فرق ہے۔",
        "بہت ہلکا وزن درست ہے — کف کے لیے آدھا کلو کافی ہے۔",
        "وزن سے زیادہ حرکت کی حد اہم ہے؛ پوری حد تک جائیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting the equipment slip or roll away.",
        "Going faster as you tire.",
        "Holding the breath during the effort.",
        "Using more resistance than you can control.",
      ],
      ur: [
        "سامان کا پھسل یا لڑھک جانا۔",
        "تھکنے پر تیز ہو جانا۔",
        "زور لگاتے وقت سانس روکنا۔",
        "اتنی مزاحمت لینا جو قابو میں نہ رہے۔",
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
    regressions: ["band-external-rotation"],
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
      rationale: "Side-lying external rotation is a standard rotator cuff strengthening exercise. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ shoulderNear: 170, elbowNear: 88, shoulderRotNear: -40 }, SIDE_LYING), travel: 800, hold: 400, label: "Elbow tucked in, weight held" },
        { pose: pose({ shoulderNear: 170, elbowNear: 88, shoulderRotNear: 40 }, SIDE_LYING), travel: 1000, hold: 900, label: "Turn the forearm to the ceiling" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-A-027",
    slug: "stair-calf-strengthening",
    name: { en: "Calf Raise on a Stair", ur: "سیڑھی پر ایڑی اٹھانا" },
    bodyRegion: "Ankle & Foot",
    joint: ["Talocrural", "Subtalar"],
    musclesTargeted: ["Gastrocnemius", "Soleus", "Achilles tendon"],
    conditions: ["Calf weakness", "Achilles tendinopathy", "Push-off weakness in gait", "Return to sport"],
    purpose: { en: "Standing on the edge of a step lets the heel drop below the toes, which loads the calf through its whole range instead of only the top half.", ur: "سیڑھی کے کنارے پر کھڑے ہونے سے ایڑی پنجوں سے نیچے جا سکتی ہے، جس سے پنڈلی پر صرف اوپری آدھے کے بجائے پوری حد میں بوجھ پڑتا ہے۔" },
    exerciseType: "Strengthening",
    difficulty: "Intermediate",
    contraction: ["Concentric", "Eccentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["Step with a rail"],
    startingPosition: { en: "Stand on the edge of a step with the balls of both feet on it, holding the rail.", ur: "سیڑھی کے کنارے پر کھڑے ہوں، دونوں پاؤں کے اگلے حصے اُس پر اور ریلنگ پکڑی ہو۔" },
    quickSteps: {
      en: [
        "Stand on the edge of a step, holding the rail.",
        "Rise up onto the toes, then lower below the step.",
        "Take three seconds to come down each time.",
      ],
      ur: [
        "ریلنگ پکڑ کر سیڑھی کے کنارے پر کھڑے ہوں۔",
        "پنجوں پر اٹھیں، پھر سیڑھی سے نیچے آئیں۔",
        "ہر بار نیچے آنے میں تین سیکنڈ لگائیں۔",
      ],
    },
    steps: {
      en: [
        "Hold the rail firmly with both hands and stand with the balls of the feet on the edge.",
        "Rise up onto the toes as high as you can and pause for one second.",
        "Lower slowly over three seconds, letting the heels drop below the level of the step.",
        "Pause at the bottom, feeling the stretch, then rise again.",
        "Progress to one leg at a time when twenty on two legs are easy.",
      ],
      ur: [
        "دونوں ہاتھوں سے ریلنگ مضبوطی سے پکڑیں اور پاؤں کے اگلے حصے کنارے پر رکھیں۔",
        "پنجوں پر جتنا اوپر ہو سکے اٹھیں اور ایک سیکنڈ رکیں۔",
        "تین سیکنڈ میں آہستہ نیچے آئیں، ایڑیاں سیڑھی کی سطح سے نیچے جانے دیں۔",
        "نیچے رک کر کھنچاؤ محسوس کریں، پھر دوبارہ اٹھیں۔",
        "دو ٹانگوں پر بیس بار آسان ہو جائیں تو ایک ٹانگ پر جائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "The slow lowering is the part that heals a tendon; do not rush it.",
        "Doing some with the knees bent works the deeper calf muscle too.",
        "Always hold the rail — this is done at the edge of a drop.",
      ],
      ur: [
        "آہستہ نیچے آنا ہی ٹینڈن کو ٹھیک کرتا ہے؛ اس میں جلدی نہ کریں۔",
        "کچھ بار گھٹنے موڑ کر کرنے سے گہرا پنڈلی کا پٹھا بھی کام کرتا ہے۔",
        "ہمیشہ ریلنگ پکڑیں — یہ کنارے پر کی جانے والی ورزش ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting the equipment slip or roll away.",
        "Going faster as you tire.",
        "Holding the breath during the effort.",
        "Using more resistance than you can control.",
      ],
      ur: [
        "سامان کا پھسل یا لڑھک جانا۔",
        "تھکنے پر تیز ہو جانا۔",
        "زور لگاتے وقت سانس روکنا۔",
        "اتنی مزاحمت لینا جو قابو میں نہ رہے۔",
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
    repetitions: "12–15",
    sets: "3",
    holdTime: "1 second at the top, 3 seconds down",
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
      rationale: "Heel raises over a step edge are standard in Achilles tendinopathy loading programmes. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ ankleNear: -26, ankleFar: -26, shoulderNear: 120, elbowNear: 40, shoulderFar: 120, elbowFar: 40 }, STAND), travel: 800, hold: 400, label: "Heels dropped below the step" },
        { pose: pose({ ankleNear: 34, ankleFar: 34, shoulderNear: 120, elbowNear: 40, shoulderFar: 120, elbowFar: 40 }, STAND), travel: 1000, hold: 900, label: "Rise up onto the toes" },
      ],
    },
  },
];
