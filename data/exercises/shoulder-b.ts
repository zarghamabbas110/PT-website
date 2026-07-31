import { pose } from "@/lib/figure";
import type { Exercise } from "../schema";
import { PRONE, STAND } from "./bases";

/* ==========================================================================
   SHOULDER — batch 2
   --------------------------------------------------------------------------
   Extension, rotation and the prone scapular series. Poses are drafts pending
   the clinical review the evidence field on each record already flags.
   ========================================================================== */

export const SHOULDER_B: Exercise[] = [
  {
    id: "EX-S-014",
    slug: "shoulder-extension-standing",
    name: { en: "Standing Shoulder Extension", ur: "بازو کو پیچھے لے جانا" },
    bodyRegion: "Shoulder",
    joint: ["Glenohumeral"],
    musclesTargeted: ["Posterior deltoid", "Latissimus dorsi", "Teres major"],
    conditions: ["Shoulder stiffness", "Postural rounding", "Post-immobilisation"],
    purpose: { en: "Restores the backward reach that dressing, reaching a back pocket and fastening clothing all need.", ur: "بازو کو پیچھے لے جانے کی حرکت بحال کرتی ہے، جو کپڑے پہننے اور پچھلی جیب تک ہاتھ لے جانے کے لیے ضروری ہے۔" },
    difficulty: "Beginner",
    contraction: ["Concentric", "Eccentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Standing",
    equipment: [],
    startingPosition: { en: "Stand tall with your arms relaxed by your sides and your palms facing inward.", ur: "سیدھے کھڑے ہوں، بازو پہلوؤں پر ڈھیلے اور ہتھیلیاں اندر کی طرف۔" },
    quickSteps: {
      en: [
        "Stand tall, arms by your sides.",
        "Take the straight arm backwards as far as is comfortable.",
        "Pause, then bring it back slowly.",
      ],
      ur: [
        "سیدھے کھڑے ہوں، بازو پہلوؤں پر۔",
        "سیدھا بازو آرام کی حد تک پیچھے لے جائیں۔",
        "رکیں، پھر آہستہ واپس لائیں۔",
      ],
    },
    steps: {
      en: [
        "Set the shoulder blade gently down and back.",
        "Keep the elbow straight throughout.",
        "Take the arm backwards without letting the trunk lean forward.",
        "Stop where the stretch is comfortable, not painful.",
        "Return slowly under control.",
      ],
      ur: [
        "شانے کی ہڈی کو نرمی سے نیچے اور پیچھے رکھیں۔",
        "پوری حرکت میں کہنی سیدھی رکھیں۔",
        "بازو پیچھے لے جائیں مگر دھڑ آگے نہ جھکے۔",
        "جہاں کھنچاؤ آرام دہ ہو وہاں رکیں، درد تک نہیں۔",
        "آہستہ اور قابو سے واپس لائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "The trunk must not lean forward to fake extra range.",
        "Keep the shoulder down — no shrugging.",
        "A gentle pull at the front of the shoulder is normal.",
      ],
      ur: [
        "زیادہ حرکت دکھانے کے لیے دھڑ آگے نہ جھکائیں۔",
        "کندھا نیچے رکھیں — اُچھالیں نہیں۔",
        "کندھے کے اگلے حصے میں ہلکا کھنچاؤ معمول ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Leaning the body forward.",
        "Bending the elbow.",
        "Shrugging the shoulder up.",
        "Rushing the return.",
      ],
      ur: [
        "جسم کو آگے جھکانا۔",
        "کہنی موڑ لینا۔",
        "کندھا اوپر اُچھالنا۔",
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
    holdTime: "2 seconds at the end",
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
      rationale: "Active shoulder extension is a standard component of range-of-motion programmes after stiffness or immobilisation. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ shoulderNear: 178, shoulderFar: 178, elbowNear: 4, elbowFar: 4 }, STAND), travel: 800, hold: 400, label: "Start — arms at the sides" },
        { pose: pose({ shoulderNear: 218, shoulderFar: 218, elbowNear: 4, elbowFar: 4 }, STAND), travel: 1000, hold: 900, label: "Take the arms back, elbows straight" },
      ],
    },
  },
  {
    id: "EX-S-015",
    slug: "shoulder-internal-rotation-band",
    name: { en: "Resisted Internal Rotation with Band", ur: "بینڈ کے ساتھ اندر کی طرف گھمانا" },
    bodyRegion: "Shoulder",
    joint: ["Glenohumeral"],
    musclesTargeted: ["Subscapularis", "Pectoralis major", "Latissimus dorsi"],
    conditions: ["Rotator cuff related shoulder pain", "Post-dislocation rehabilitation", "Shoulder instability"],
    purpose: { en: "Strengthens the front of the rotator cuff, which steadies the shoulder when you push, carry or reach across.", ur: "روٹیٹر کف کے اگلے پٹھوں کو مضبوط کرتی ہے جو دھکیلنے، اٹھانے اور سامنے ہاتھ لے جانے میں کندھے کو مستحکم رکھتے ہیں۔" },
    difficulty: "Intermediate",
    contraction: ["Concentric", "Eccentric"],
    mode: "Resisted",
    load: "Resistance band",
    position: "Standing",
    equipment: ["Resistance band"],
    startingPosition: { en: "Stand holding the band with the elbow bent to 90 degrees and tucked against your side.", ur: "کھڑے ہو کر بینڈ پکڑیں، کہنی نوے درجے مڑی ہو اور پہلو سے لگی ہو۔" },
    quickSteps: {
      en: [
        "Stand with the elbow bent and tucked at your side.",
        "Pull the forearm inward across your stomach.",
        "Return slowly against the band.",
      ],
      ur: [
        "کہنی موڑ کر پہلو سے لگا کر کھڑے ہوں۔",
        "بازو کو پیٹ کی طرف اندر کھینچیں۔",
        "بینڈ کے خلاف آہستہ واپس جائیں۔",
      ],
    },
    steps: {
      en: [
        "Keep a rolled towel between the elbow and your side if that helps.",
        "Bend the elbow to 90 degrees.",
        "Rotate the forearm inward towards your stomach.",
        "Keep the elbow pinned — only the forearm moves.",
        "Return slowly; the slow return matters most.",
      ],
      ur: [
        "مدد کے لیے کہنی اور پہلو کے بیچ لپٹا تولیہ رکھ لیں۔",
        "کہنی نوے درجے موڑیں۔",
        "بازو کو پیٹ کی طرف اندر گھمائیں۔",
        "کہنی جمی رہے — صرف بازو حرکت کرے۔",
        "آہستہ واپس جائیں؛ آہستہ واپسی سب سے اہم ہے۔",
      ],
    },
    specialInstructions: {
      en: [
        "The elbow stays glued to your side throughout.",
        "Do not twist the body to help the arm.",
        "Keep the wrist straight, not bent.",
      ],
      ur: [
        "پوری ورزش میں کہنی پہلو سے چپکی رہے۔",
        "بازو کی مدد کے لیے جسم کو نہ گھمائیں۔",
        "کلائی سیدھی رکھیں، مڑی ہوئی نہیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting the elbow drift away from the side.",
        "Turning the whole body instead of the forearm.",
        "Letting the band snap back quickly.",
        "Using a band that is too strong.",
      ],
      ur: [
        "کہنی کا پہلو سے ہٹ جانا۔",
        "بازو کے بجائے پورا جسم گھمانا۔",
        "بینڈ کو تیزی سے واپس کھنچنے دینا۔",
        "بہت سخت بینڈ استعمال کرنا۔",
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
    repetitions: "12–15",
    sets: "3",
    holdTime: "2 seconds at the end",
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
      rationale: "Internal rotation strengthening complements external rotation work in rotator cuff programmes. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ shoulderNear: 174, shoulderFar: 174, elbowNear: 84, elbowFar: 84, shoulderRotNear: 55, shoulderRotFar: 55 }, STAND), travel: 800, hold: 400, label: "Start — forearms turned out" },
        { pose: pose({ shoulderNear: 174, shoulderFar: 174, elbowNear: 84, elbowFar: 84, shoulderRotNear: -40, shoulderRotFar: -40 }, STAND), travel: 1000, hold: 900, label: "Rotate inward across the stomach" },
      ],
      props: [{ kind: "band" }],
    },
  },
  {
    id: "EX-S-016",
    slug: "prone-shoulder-extension",
    name: { en: "Prone Shoulder Extension", ur: "اوندھے لیٹ کر بازو اٹھانا" },
    bodyRegion: "Shoulder",
    joint: ["Glenohumeral", "Scapulothoracic"],
    musclesTargeted: ["Posterior deltoid", "Lower trapezius", "Latissimus dorsi"],
    conditions: ["Postural rounding", "Scapular weakness", "Rotator cuff related shoulder pain"],
    purpose: { en: "Works the back of the shoulder against gravity, which is what holds the shoulder blade steady during reaching.", ur: "کندھے کے پچھلے پٹھوں کو کشش ثقل کے خلاف مضبوط کرتی ہے، جو ہاتھ بڑھاتے وقت شانے کی ہڈی کو قائم رکھتے ہیں۔" },
    difficulty: "Intermediate",
    contraction: ["Concentric", "Eccentric", "Isometric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Prone",
    equipment: ["Exercise mat"],
    startingPosition: { en: "Lie face down on a mat with your forehead resting and your arms by your sides, palms facing your thighs.", ur: "چٹائی پر اوندھے لیٹ جائیں، ماتھا ٹکا ہو اور بازو پہلوؤں پر، ہتھیلیاں رانوں کی طرف۔" },
    quickSteps: {
      en: [
        "Lie face down, arms by your sides.",
        "Lift both arms a little off the floor, squeezing the shoulder blades.",
        "Hold 3 seconds, then lower slowly.",
      ],
      ur: [
        "اوندھے لیٹ جائیں، بازو پہلوؤں پر۔",
        "دونوں بازو تھوڑا اوپر اٹھائیں اور شانے کی ہڈیاں دبائیں۔",
        "تین سیکنڈ رکیں، پھر آہستہ نیچے لائیں۔",
      ],
    },
    steps: {
      en: [
        "Keep the forehead down so the neck stays neutral.",
        "Draw the shoulder blades gently together and down.",
        "Lift the straight arms just clear of the floor.",
        "Hold, breathing normally.",
        "Lower slowly and fully before the next repetition.",
      ],
      ur: [
        "ماتھا نیچے رکھیں تاکہ گردن سیدھی رہے۔",
        "شانے کی ہڈیاں نرمی سے ملائیں اور نیچے کریں۔",
        "سیدھے بازو فرش سے ذرا اوپر اٹھائیں۔",
        "رکیں اور سانس معمول کے مطابق لیں۔",
        "اگلی بار سے پہلے آہستہ اور مکمل نیچے لائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "The lift is small — a few centimetres is enough.",
        "Do not lift the head; the neck stays long.",
        "The squeeze between the shoulder blades is the point, not the height.",
      ],
      ur: [
        "اٹھان تھوڑی ہے — چند سینٹی میٹر کافی ہیں۔",
        "سر نہ اٹھائیں؛ گردن لمبی رہے۔",
        "اصل بات شانے کی ہڈیوں کا دبنا ہے، بلندی نہیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Lifting the head and hyperextending the neck.",
        "Arching the lower back to gain height.",
        "Shrugging instead of squeezing the blades.",
        "Holding the breath.",
      ],
      ur: [
        "سر اٹھا کر گردن کو زیادہ پیچھے موڑنا۔",
        "بلندی کے لیے کمر کو محراب بنانا۔",
        "شانے دبانے کے بجائے کندھے اُچھالنا۔",
        "سانس روک لینا۔",
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
      rationale: "Prone shoulder extension is a common low-load scapular and posterior cuff exercise. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ shoulderNear: 176, shoulderFar: 176, elbowNear: 6, elbowFar: 6 }, PRONE), travel: 800, hold: 400, label: "Start — arms resting by the sides" },
        { pose: pose({ shoulderNear: 196, shoulderFar: 196, elbowNear: 4, elbowFar: 4 }, PRONE), travel: 1000, hold: 900, label: "Lift the arms, squeeze the shoulder blades" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-S-017",
    slug: "prone-horizontal-abduction",
    name: { en: "Prone Horizontal Abduction (Ts)", ur: "اوندھے لیٹ کر بازو اطراف میں اٹھانا" },
    bodyRegion: "Shoulder",
    joint: ["Glenohumeral", "Scapulothoracic"],
    musclesTargeted: ["Middle trapezius", "Rhomboids", "Posterior deltoid"],
    conditions: ["Postural rounding", "Scapular weakness", "Neck and shoulder strain"],
    purpose: { en: "Targets the muscles between the shoulder blades, which pull the shoulders back and take strain off the neck.", ur: "شانوں کے درمیان کے پٹھوں کو مضبوط کرتی ہے جو کندھوں کو پیچھے کھینچتے اور گردن سے بوجھ ہٹاتے ہیں۔" },
    difficulty: "Intermediate",
    contraction: ["Concentric", "Eccentric", "Isometric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Prone",
    equipment: ["Exercise mat"],
    startingPosition: { en: "Lie face down with your arms out to the sides at shoulder height, forming a T, thumbs pointing up.", ur: "اوندھے لیٹ جائیں، بازو کندھے کی اونچائی پر اطراف میں پھیلے ہوں (انگریزی T کی طرح)، انگوٹھے اوپر۔" },
    quickSteps: {
      en: [
        "Lie face down, arms out to the sides in a T, thumbs up.",
        "Lift both arms towards the ceiling, squeezing the shoulder blades.",
        "Hold 3 seconds, then lower slowly.",
      ],
      ur: [
        "اوندھے لیٹ جائیں، بازو اطراف میں T کی طرح، انگوٹھے اوپر۔",
        "دونوں بازو چھت کی طرف اٹھائیں اور شانے دبائیں۔",
        "تین سیکنڈ رکیں، پھر آہستہ نیچے لائیں۔",
      ],
    },
    steps: {
      en: [
        "Rest the forehead down and keep the neck long.",
        "Turn the thumbs up so the shoulders sit in a clear position.",
        "Draw the shoulder blades together first, then lift.",
        "Hold at the top without shrugging.",
        "Lower slowly all the way down.",
      ],
      ur: [
        "ماتھا نیچے رکھیں اور گردن لمبی رکھیں۔",
        "انگوٹھے اوپر رکھیں تاکہ کندھے کھلی حالت میں رہیں۔",
        "پہلے شانے کی ہڈیاں ملائیں، پھر اٹھائیں۔",
        "اوپر رکیں مگر کندھے نہ اُچھالیں۔",
        "آہستہ پوری طرح نیچے لائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Lead with the shoulder blades, not the hands.",
        "Thumbs up keeps the shoulder joint clear.",
        "Height is not the aim — control is.",
      ],
      ur: [
        "ہاتھوں کے بجائے شانے کی ہڈیوں سے حرکت شروع کریں۔",
        "انگوٹھے اوپر رکھنے سے جوڑ میں جگہ رہتی ہے۔",
        "مقصد بلندی نہیں، قابو ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Shrugging the shoulders towards the ears.",
        "Lifting the head.",
        "Bending the elbows.",
        "Using momentum instead of control.",
      ],
      ur: [
        "کندھوں کو کانوں کی طرف اُچھالنا۔",
        "سر اٹھانا۔",
        "کہنیاں موڑ لینا۔",
        "قابو کے بجائے جھٹکے سے اٹھانا۔",
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
      rationale: "Prone horizontal abduction is widely used to target middle trapezius and rhomboids. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ shoulderNear: 176, shoulderFar: 176, shoulderAbductNear: 86, shoulderAbductFar: 86, elbowNear: 4, elbowFar: 4 }, PRONE), travel: 800, hold: 400, label: "Start — arms out in a T" },
        { pose: pose({ shoulderNear: 198, shoulderFar: 198, shoulderAbductNear: 86, shoulderAbductFar: 86, elbowNear: 4, elbowFar: 4 }, PRONE), travel: 1000, hold: 900, label: "Lift towards the ceiling" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-S-018",
    slug: "prone-y-raise",
    name: { en: "Prone Y Raise", ur: "اوندھے لیٹ کر Y کی شکل میں بازو اٹھانا" },
    bodyRegion: "Shoulder",
    joint: ["Glenohumeral", "Scapulothoracic"],
    musclesTargeted: ["Lower trapezius", "Serratus anterior", "Posterior deltoid"],
    conditions: ["Scapular weakness", "Shoulder impingement", "Postural rounding"],
    purpose: { en: "Trains the lower shoulder-blade muscles, which let the arm go overhead without the shoulder hitching up.", ur: "شانے کی ہڈی کے نچلے پٹھوں کو مضبوط کرتی ہے تاکہ بازو اوپر جاتے وقت کندھا اُچھلے نہیں۔" },
    difficulty: "Advanced",
    contraction: ["Concentric", "Eccentric", "Isometric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Prone",
    equipment: ["Exercise mat"],
    startingPosition: { en: "Lie face down with your arms overhead at a diagonal, forming a Y, thumbs pointing up.", ur: "اوندھے لیٹ جائیں، بازو سر کے اوپر ترچھے پھیلے ہوں (Y کی طرح)، انگوٹھے اوپر۔" },
    quickSteps: {
      en: [
        "Lie face down, arms overhead in a Y, thumbs up.",
        "Lift both arms, leading from the shoulder blades.",
        "Hold 3 seconds, then lower slowly.",
      ],
      ur: [
        "اوندھے لیٹ جائیں، بازو سر کے اوپر Y کی طرح، انگوٹھے اوپر۔",
        "شانے کی ہڈیوں سے شروع کرتے ہوئے بازو اٹھائیں۔",
        "تین سیکنڈ رکیں، پھر آہستہ نیچے لائیں۔",
      ],
    },
    steps: {
      en: [
        "Keep the forehead down and the neck relaxed.",
        "Set the shoulder blades down and back first.",
        "Lift the straight arms clear of the floor.",
        "Hold without shrugging towards the ears.",
        "Lower slowly and reset before the next repetition.",
      ],
      ur: [
        "ماتھا نیچے اور گردن ڈھیلی رکھیں۔",
        "پہلے شانے کی ہڈیاں نیچے اور پیچھے کریں۔",
        "سیدھے بازو فرش سے اوپر اٹھائیں۔",
        "رکیں مگر کندھے کانوں کی طرف نہ اُچھالیں۔",
        "آہستہ نیچے لائیں اور اگلی بار سے پہلے سنبھلیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "This is the hardest of the prone series — master the T first.",
        "Shrugging means the load is too high; lower the arms.",
        "Keep a gentle chin tuck to protect the neck.",
      ],
      ur: [
        "یہ اوندھی ورزشوں میں سب سے مشکل ہے — پہلے T میں مہارت حاصل کریں۔",
        "کندھے اُچھلنا مطلب بوجھ زیادہ ہے؛ بازو نیچے رکھیں۔",
        "گردن کی حفاظت کے لیے ٹھوڑی ہلکی سی اندر رکھیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Shrugging the shoulders.",
        "Arching the lower back.",
        "Lifting the head to help.",
        "Going too high, too soon.",
      ],
      ur: [
        "کندھے اُچھالنا۔",
        "کمر کو محراب بنانا۔",
        "مدد کے لیے سر اٹھانا۔",
        "بہت جلد بہت اوپر جانا۔",
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
    repetitions: "8–10",
    sets: "3",
    holdTime: "3 seconds",
    frequency: "Every other day",
    restBetweenSets: "60 seconds",
    progressions: [],
    regressions: ["prone-horizontal-abduction"],
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
      rationale: "Prone Y raises are commonly prescribed to bias lower trapezius activation. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ shoulderNear: 150, shoulderFar: 150, shoulderAbductNear: 40, shoulderAbductFar: 40, elbowNear: 4, elbowFar: 4 }, PRONE), travel: 800, hold: 400, label: "Start — arms overhead in a Y" },
        { pose: pose({ shoulderNear: 176, shoulderFar: 176, shoulderAbductNear: 40, shoulderAbductFar: 40, elbowNear: 4, elbowFar: 4 }, PRONE), travel: 1000, hold: 900, label: "Lift, leading from the shoulder blades" },
      ],
      props: [{ kind: "mat" }],
    },
  },
];
