import { pose } from "@/lib/figure";
import type { Exercise } from "../schema";
import { QUADRUPED, SEATED, SUPINE } from "./bases";

/* ==========================================================================
   NECK, UPPER BACK AND LOW BACK
   --------------------------------------------------------------------------
   Range and stretch work for the neck, mobility for the stiff upper back, and
   the low back control exercises. Poses are drafts pending clinical review.
   ========================================================================== */

export const NECK_BACK: Exercise[] = [
  {
    id: "EX-CX-001",
    slug: "neck-side-flexion",
    name: { en: "Neck Side Bend", ur: "گردن ایک طرف جھکانا" },
    bodyRegion: "Cervical",
    joint: ["Cervical spine C1–C7"],
    musclesTargeted: ["Upper trapezius", "Levator scapulae", "Scalenes"],
    conditions: ["Neck stiffness", "Postural strain", "Cervicogenic headache"],
    purpose: { en: "Restores side-to-side neck movement and eases the tight muscles that run from the neck to the shoulder.", ur: "گردن کی دائیں بائیں حرکت بحال کرتی ہے اور گردن سے کندھے تک کے سخت پٹھوں کو ڈھیلا کرتی ہے۔" },
    exerciseType: "Range of motion",
    difficulty: "Beginner",
    contraction: ["Passive"],
    mode: "Active",
    load: "No load",
    position: "Sitting",
    equipment: [],
    startingPosition: { en: "Sit tall on a firm chair with your shoulders relaxed and your hands resting on your thighs.", ur: "مضبوط کرسی پر سیدھے بیٹھیں، کندھے ڈھیلے اور ہاتھ رانوں پر۔" },
    quickSteps: {
      en: [
        "Sit tall, shoulders relaxed and level.",
        "Tilt one ear towards that shoulder.",
        "Hold 15 seconds, return, then do the other side.",
      ],
      ur: [
        "سیدھے بیٹھیں، کندھے ڈھیلے اور برابر۔",
        "ایک کان اُسی طرف کے کندھے کی طرف جھکائیں۔",
        "پندرہ سیکنڈ رکیں، واپس آئیں، پھر دوسری طرف کریں۔",
      ],
    },
    steps: {
      en: [
        "Sit tall with both sitting bones evenly weighted.",
        "Let one ear drop towards the shoulder on that side.",
        "Keep the opposite shoulder down — do not let it lift.",
        "Hold, breathing normally, then return to the middle.",
      ],
      ur: [
        "سیدھے بیٹھیں، دونوں طرف وزن برابر ہو۔",
        "ایک کان اُسی طرف کے کندھے کی طرف جھکنے دیں۔",
        "دوسری طرف کا کندھا نیچے رکھیں — اٹھنے نہ دیں۔",
        "رکیں، سانس لیتے رہیں، پھر درمیان میں واپس آئیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "The nose stays pointing forward — this is a tilt, not a turn.",
        "Letting the opposite shoulder lift removes the stretch.",
        "Sitting on the opposite hand helps hold the shoulder down.",
      ],
      ur: [
        "ناک سامنے ہی رہے — یہ جھکاؤ ہے، گھماؤ نہیں۔",
        "دوسرا کندھا اٹھنے سے کھنچاؤ ختم ہو جاتا ہے۔",
        "دوسرے ہاتھ کے نیچے بیٹھنے سے کندھا نیچے رہتا ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Turning the head instead of tilting it.",
        "Letting the opposite shoulder rise.",
        "Pulling hard with the hand.",
        "Holding the breath.",
      ],
      ur: [
        "جھکانے کے بجائے سر گھمانا۔",
        "دوسرے کندھے کا اٹھ جانا۔",
        "ہاتھ سے زور سے کھینچنا۔",
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
    repetitions: "3 each side",
    sets: "2",
    holdTime: "15 seconds",
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
      rationale: "Cervical side flexion stretching is routine in the conservative management of mechanical neck pain. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ neck: 0, head: 0 }, SEATED), travel: 800, hold: 400, label: "Sit tall, head level" },
        { pose: pose({ neck: 0, head: 0, thorax: 0, pelvisTilt: 0 }, SEATED), travel: 1000, hold: 900, label: "Tilt the ear towards the shoulder" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-CX-002",
    slug: "neck-rotation",
    name: { en: "Neck Rotation", ur: "گردن دائیں بائیں گھمانا" },
    bodyRegion: "Cervical",
    joint: ["Cervical spine C1–C7", "Atlantoaxial"],
    musclesTargeted: ["Sternocleidomastoid", "Splenius capitis", "Upper trapezius"],
    conditions: ["Neck stiffness", "Postural strain", "Torticollis recovery", "Driving discomfort"],
    purpose: { en: "Restores the turn needed to look over the shoulder when reversing a car or crossing a road.", ur: "گردن گھمانے کی حرکت بحال کرتی ہے جو گاڑی پیچھے کرتے یا سڑک پار کرتے وقت ضروری ہے۔" },
    exerciseType: "Range of motion",
    difficulty: "Beginner",
    contraction: ["Concentric"],
    mode: "Active",
    load: "No load",
    position: "Sitting",
    equipment: [],
    startingPosition: { en: "Sit tall on a firm chair with your shoulders relaxed and your eyes level.", ur: "مضبوط کرسی پر سیدھے بیٹھیں، کندھے ڈھیلے اور نظریں سیدھی۔" },
    quickSteps: {
      en: [
        "Sit tall with your eyes level.",
        "Turn your head slowly to look over one shoulder.",
        "Return to the middle and turn the other way.",
      ],
      ur: [
        "سیدھے بیٹھیں، نظریں سیدھی۔",
        "سر آہستہ گھما کر ایک کندھے کے اوپر دیکھیں۔",
        "درمیان میں واپس آئیں اور دوسری طرف گھمائیں۔",
      ],
    },
    steps: {
      en: [
        "Keep the shoulders square and facing forward.",
        "Turn the head to look over one shoulder.",
        "Go only as far as is comfortable.",
        "Return through the middle and repeat to the other side.",
      ],
      ur: [
        "کندھے سیدھے اور سامنے کی طرف رکھیں۔",
        "سر گھما کر ایک کندھے کے اوپر دیکھیں۔",
        "صرف آرام کی حد تک جائیں۔",
        "درمیان سے گزر کر دوسری طرف دہرائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "The chin stays level — do not let it lift or drop.",
        "Turn the head only; the trunk stays still.",
        "Range often differs between sides; that is common.",
      ],
      ur: [
        "ٹھوڑی برابر رہے — نہ اوپر ہو نہ نیچے۔",
        "صرف سر گھمائیں؛ دھڑ ساکن رہے۔",
        "دونوں طرف حرکت اکثر مختلف ہوتی ہے؛ یہ عام بات ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Turning the shoulders with the head.",
        "Lifting the chin as you turn.",
        "Forcing past a firm end point.",
        "Moving quickly.",
      ],
      ur: [
        "سر کے ساتھ کندھے بھی گھمانا۔",
        "گھماتے وقت ٹھوڑی اٹھانا۔",
        "سخت حد سے آگے زبردستی کرنا۔",
        "تیزی سے حرکت دینا۔",
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
    holdTime: "2 seconds each end",
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
      rationale: "Active cervical rotation is a core component of neck range-of-motion programmes. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ neck: 0 }, SEATED), travel: 800, hold: 400, label: "Sit tall, looking forward" },
        { pose: pose({ neck: 0, head: 0 }, SEATED), travel: 1000, hold: 900, label: "Turn to look over the shoulder" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-CX-003",
    slug: "upper-trapezius-stretch",
    name: { en: "Upper Trapezius Stretch", ur: "کندھے اور گردن کے پٹھے کا کھنچاؤ" },
    bodyRegion: "Cervical",
    joint: ["Cervical spine C1–C7", "Scapulothoracic"],
    musclesTargeted: ["Upper trapezius"],
    conditions: ["Neck and shoulder tension", "Postural strain", "Tension headache", "Desk work stiffness"],
    purpose: { en: "Eases the thick muscle between the neck and shoulder that tightens with desk work and stress.", ur: "گردن اور کندھے کے درمیان کے موٹے پٹھے کو ڈھیلا کرتی ہے جو میز کے کام اور ذہنی دباؤ سے سخت ہو جاتا ہے۔" },
    exerciseType: "Stretching",
    difficulty: "Beginner",
    contraction: ["Passive"],
    mode: "Passive",
    load: "No load",
    position: "Sitting",
    equipment: [],
    startingPosition: { en: "Sit tall and hold the edge of the chair with the hand on the side being stretched.", ur: "سیدھے بیٹھیں اور جس طرف کھنچاؤ کرنا ہے اُس ہاتھ سے کرسی کا کنارہ پکڑیں۔" },
    quickSteps: {
      en: [
        "Sit tall, holding the chair edge with one hand.",
        "Tilt the opposite ear towards its shoulder.",
        "Hold 30 seconds, then release slowly.",
      ],
      ur: [
        "سیدھے بیٹھیں، ایک ہاتھ سے کرسی کا کنارہ پکڑیں۔",
        "دوسری طرف کا کان اُس کندھے کی طرف جھکائیں۔",
        "تیس سیکنڈ رکیں، پھر آہستہ چھوڑیں۔",
      ],
    },
    steps: {
      en: [
        "Anchor one hand under the chair to hold that shoulder down.",
        "Tilt the head away from that side.",
        "Add a small turn of the nose towards the raised shoulder.",
        "Hold steadily, then release slowly.",
      ],
      ur: [
        "ایک ہاتھ کرسی کے نیچے جما کر اُس کندھے کو نیچے رکھیں۔",
        "سر اُس طرف سے دور جھکائیں۔",
        "ناک کو اٹھے ہوئے کندھے کی طرف ذرا گھمائیں۔",
        "مستقل رکیں، پھر آہستہ چھوڑیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Anchoring the hand is what makes this work.",
        "Stretch to mild tension, never to pain.",
        "Stop if you feel dizzy or your vision changes.",
      ],
      ur: [
        "ہاتھ جمانا ہی اس ورزش کو مؤثر بناتا ہے۔",
        "ہلکے کھنچاؤ تک جائیں، درد تک ہرگز نہیں۔",
        "چکر آئے یا نظر بدلے تو رک جائیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting the anchored shoulder lift.",
        "Pulling the head hard with the free hand.",
        "Bouncing.",
        "Holding for only a few seconds.",
      ],
      ur: [
        "جمے ہوئے کندھے کا اٹھ جانا۔",
        "خالی ہاتھ سے سر کو زور سے کھینچنا۔",
        "جھٹکا دینا۔",
        "صرف چند سیکنڈ رکنا۔",
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
    repetitions: "3 each side",
    sets: "2",
    holdTime: "30 seconds",
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
      rationale: "Upper trapezius stretching is widely used for postural neck and shoulder tension. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ neck: 0 }, SEATED), travel: 800, hold: 400, label: "Hold the chair, sit tall" },
        { pose: pose({ neck: 0, head: 0 }, SEATED), travel: 1000, hold: 900, label: "Tilt the ear away and hold" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-CX-004",
    slug: "deep-neck-flexor-hold",
    name: { en: "Deep Neck Flexor Hold", ur: "گردن کے گہرے پٹھوں کی مشق" },
    bodyRegion: "Cervical",
    joint: ["Cervical spine C1–C7"],
    musclesTargeted: ["Longus colli", "Longus capitis", "Deep cervical flexors"],
    conditions: ["Forward head posture", "Neck pain", "Whiplash recovery", "Cervicogenic headache"],
    purpose: { en: "Builds endurance in the small deep muscles that hold the head up all day, so the big surface muscles stop overworking.", ur: "گردن کے چھوٹے گہرے پٹھوں کی برداشت بڑھاتی ہے جو دن بھر سر سنبھالتے ہیں، تاکہ بڑے اوپری پٹھوں پر بوجھ نہ پڑے۔" },
    exerciseType: "Stabilisation & motor control",
    difficulty: "Beginner",
    contraction: ["Isometric"],
    mode: "Active",
    load: "No load",
    position: "Supine",
    equipment: ["Exercise mat"],
    startingPosition: { en: "Lie on your back with your knees bent, feet flat, and your head resting on the floor or a thin pillow.", ur: "گھٹنے موڑ کر سیدھے لیٹ جائیں، پاؤں زمین پر اور سر فرش یا پتلے تکیے پر۔" },
    quickSteps: {
      en: [
        "Lie on your back with knees bent.",
        "Gently nod the chin down, as if saying a small yes.",
        "Hold 10 seconds without lifting the head.",
      ],
      ur: [
        "گھٹنے موڑ کر سیدھے لیٹ جائیں۔",
        "ٹھوڑی نرمی سے نیچے کریں، جیسے ہلکی سی ہاں کہہ رہے ہوں۔",
        "دس سیکنڈ رکیں، سر نہ اٹھائیں۔",
      ],
    },
    steps: {
      en: [
        "Rest the head down and let the jaw stay loose.",
        "Nod the chin gently downward — a small movement.",
        "Keep the back of the head in contact with the surface.",
        "Hold, breathing normally, then release fully.",
      ],
      ur: [
        "سر ٹکا رہنے دیں اور جبڑا ڈھیلا رکھیں۔",
        "ٹھوڑی نرمی سے نیچے کریں — حرکت تھوڑی ہو۔",
        "سر کا پچھلا حصہ سطح سے لگا رہے۔",
        "رکیں، سانس لیتے رہیں، پھر پوری طرح چھوڑ دیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "The head must not lift off the surface — that uses the wrong muscles.",
        "If the front neck muscles stand out, ease off.",
        "Ten seconds held well beats thirty seconds held badly.",
      ],
      ur: [
        "سر سطح سے نہ اٹھے — ورنہ غلط پٹھے استعمال ہوتے ہیں۔",
        "گردن کے اگلے پٹھے اُبھرنے لگیں تو زور کم کریں۔",
        "دس سیکنڈ درست انداز میں تیس سیکنڈ غلط سے بہتر ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Lifting the head off the floor.",
        "Pushing the chin down hard.",
        "Clenching the jaw.",
        "Holding the breath.",
      ],
      ur: [
        "سر فرش سے اٹھا لینا۔",
        "ٹھوڑی زور سے نیچے دبانا۔",
        "جبڑا بھینچنا۔",
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
    sets: "3",
    holdTime: "10 seconds",
    frequency: "Daily",
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
      rationale: "Deep cervical flexor endurance training is well established in the management of mechanical neck pain. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ neck: 0, head: 0 }, SUPINE), travel: 800, hold: 400, label: "Lying with the head resting" },
        { pose: pose({ neck: -3, head: 6 }, SUPINE), travel: 1000, hold: 900, label: "Gentle chin nod, hold 10 seconds" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-T-001",
    slug: "thoracic-extension-chair",
    name: { en: "Seated Thoracic Extension", ur: "کرسی پر بیٹھ کر اوپری کمر کھولنا" },
    bodyRegion: "Thoracic",
    joint: ["Thoracic spine T1–T12", "Costovertebral"],
    musclesTargeted: ["Thoracic erector spinae", "Lower trapezius"],
    conditions: ["Thoracic stiffness", "Postural rounding", "Desk work stiffness", "Shoulder impingement"],
    purpose: { en: "Opens the stiff upper back that rounds from sitting, and gives the shoulders room to lift.", ur: "بیٹھنے سے اکڑی ہوئی اوپری کمر کو کھولتی ہے اور کندھوں کو اوپر اٹھنے کی جگہ دیتی ہے۔" },
    exerciseType: "Range of motion",
    difficulty: "Beginner",
    contraction: ["Concentric", "Passive"],
    mode: "Active",
    load: "Bodyweight",
    position: "Sitting",
    equipment: ["Firm chair with a back"],
    startingPosition: { en: "Sit on a firm chair with the mid-back resting against the chair back and hands behind the head.", ur: "مضبوط کرسی پر بیٹھیں، درمیانی کمر کرسی کی پشت سے لگی ہو اور ہاتھ سر کے پیچھے۔" },
    quickSteps: {
      en: [
        "Sit with the mid-back against the chair back, hands behind the head.",
        "Lean the upper back gently backwards over the chair.",
        "Hold 3 seconds, then return.",
      ],
      ur: [
        "درمیانی کمر کرسی کی پشت سے لگا کر بیٹھیں، ہاتھ سر کے پیچھے۔",
        "اوپری کمر کو نرمی سے پیچھے کرسی پر جھکائیں۔",
        "تین سیکنڈ رکیں، پھر واپس آئیں۔",
      ],
    },
    steps: {
      en: [
        "Rest the mid-back over the top of the chair back.",
        "Support the head with the hands so the neck stays relaxed.",
        "Extend the upper back gently backwards over the chair edge.",
        "Hold, breathing out, then return to upright.",
      ],
      ur: [
        "درمیانی کمر کرسی کی پشت کے اوپر ٹکائیں۔",
        "ہاتھوں سے سر سنبھالیں تاکہ گردن ڈھیلی رہے۔",
        "اوپری کمر کو کرسی کے کنارے پر نرمی سے پیچھے جھکائیں۔",
        "رکیں، سانس چھوڑیں، پھر سیدھے ہو جائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "The movement belongs to the upper back, not the lower back.",
        "Support the head so the neck does not take the strain.",
        "Breathe out as you extend — it lets the ribs move.",
      ],
      ur: [
        "حرکت اوپری کمر سے ہو، نچلی کمر سے نہیں۔",
        "سر کو سہارا دیں تاکہ گردن پر زور نہ آئے۔",
        "جھکتے وقت سانس چھوڑیں — اس سے پسلیاں کھلتی ہیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Arching from the lower back instead.",
        "Letting the head fall back unsupported.",
        "Forcing the range.",
        "Holding the breath.",
      ],
      ur: [
        "نچلی کمر سے محراب بنانا۔",
        "سر کو بغیر سہارے پیچھے گرنے دینا۔",
        "حرکت کو زبردستی بڑھانا۔",
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
    repetitions: "8–10",
    sets: "3",
    holdTime: "3 seconds",
    frequency: "Daily, or hourly at a desk",
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
      rationale: "Thoracic extension over a chair back is commonly used for postural thoracic stiffness. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ thorax: 0, shoulderNear: 40, elbowNear: 130, shoulderFar: 40, elbowFar: 130, shoulderAbductNear: 60, shoulderAbductFar: 60 }, SEATED), travel: 800, hold: 400, label: "Sit tall, hands behind the head" },
        { pose: pose({ thorax: -18, shoulderNear: 40, elbowNear: 130, shoulderFar: 40, elbowFar: 130, shoulderAbductNear: 60, shoulderAbductFar: 60 }, SEATED), travel: 1000, hold: 900, label: "Lean the upper back over the chair" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-T-002",
    slug: "thoracic-rotation-seated",
    name: { en: "Seated Thoracic Rotation", ur: "بیٹھ کر دھڑ گھمانا" },
    bodyRegion: "Thoracic",
    joint: ["Thoracic spine T1–T12", "Costovertebral"],
    musclesTargeted: ["Thoracic rotators", "Obliques", "Multifidus"],
    conditions: ["Thoracic stiffness", "Low back pain", "Golf and racquet sports", "Desk work stiffness"],
    purpose: { en: "Restores the trunk turn that protects the low back when you twist to reach behind you.", ur: "دھڑ گھمانے کی حرکت بحال کرتی ہے جو پیچھے مڑ کر کچھ لینے میں کمر کی حفاظت کرتی ہے۔" },
    exerciseType: "Range of motion",
    difficulty: "Beginner",
    contraction: ["Concentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Sitting",
    equipment: ["Firm chair"],
    startingPosition: { en: "Sit tall on a firm chair with your feet flat and your arms crossed over your chest.", ur: "مضبوط کرسی پر سیدھے بیٹھیں، پاؤں زمین پر اور بازو سینے پر بندھے ہوں۔" },
    quickSteps: {
      en: [
        "Sit tall with your arms crossed over your chest.",
        "Turn your upper body to one side.",
        "Hold 3 seconds, return, and turn the other way.",
      ],
      ur: [
        "بازو سینے پر باندھ کر سیدھے بیٹھیں۔",
        "اوپری جسم ایک طرف گھمائیں۔",
        "تین سیکنڈ رکیں، واپس آئیں، پھر دوسری طرف۔",
      ],
    },
    steps: {
      en: [
        "Sit tall with both feet flat and the knees facing forward.",
        "Cross the arms so the shoulders move with the chest.",
        "Turn the upper body around, keeping the hips still.",
        "Hold, then return through the middle and repeat the other way.",
      ],
      ur: [
        "دونوں پاؤں زمین پر اور گھٹنے سامنے رکھ کر سیدھے بیٹھیں۔",
        "بازو باندھیں تاکہ کندھے سینے کے ساتھ گھومیں۔",
        "اوپری جسم گھمائیں، کولہے ساکن رکھیں۔",
        "رکیں، درمیان سے گزر کر دوسری طرف دہرائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "The hips and knees must stay facing forward.",
        "Sit tall first — a slumped spine will not rotate.",
        "Breathe out as you turn.",
      ],
      ur: [
        "کولہے اور گھٹنے سامنے ہی رہیں۔",
        "پہلے سیدھے بیٹھیں — جھکی ریڑھ نہیں گھومتی۔",
        "گھماتے وقت سانس چھوڑیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting the knees and hips turn too.",
        "Slumping before rotating.",
        "Using the arms to wrench further round.",
        "Moving quickly.",
      ],
      ur: [
        "گھٹنوں اور کولہوں کا بھی گھوم جانا۔",
        "گھمانے سے پہلے جھک جانا۔",
        "بازوؤں سے زبردستی زیادہ گھمانا۔",
        "تیزی سے حرکت دینا۔",
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
    repetitions: "8–10 each side",
    sets: "3",
    holdTime: "3 seconds",
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
      rationale: "Seated thoracic rotation is routinely used to restore trunk rotation and offload the lumbar spine. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ thorax: 0, shoulderNear: 140, elbowNear: 120, shoulderFar: 140, elbowFar: 120 }, SEATED), travel: 800, hold: 400, label: "Sit tall, arms crossed" },
        { pose: pose({ thorax: 0, shoulderNear: 140, elbowNear: 120, shoulderFar: 140, elbowFar: 120, lumbar: 0 }, SEATED), travel: 1000, hold: 900, label: "Turn the upper body round" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-L-001",
    slug: "cat-camel",
    name: { en: "Cat and Camel", ur: "بلی اور اونٹ کی ورزش" },
    bodyRegion: "Lumbar",
    joint: ["Lumbar spine L1–L5", "Thoracic spine T1–T12"],
    musclesTargeted: ["Erector spinae", "Multifidus", "Abdominals"],
    conditions: ["Non-specific low back pain", "Lumbar stiffness", "Postural strain"],
    purpose: { en: "Moves the whole spine gently through its range, which settles stiffness and eases morning back pain.", ur: "پوری ریڑھ کو نرمی سے حرکت دیتی ہے، جس سے اکڑن اور صبح کی کمر درد کم ہوتی ہے۔" },
    exerciseType: "Range of motion",
    difficulty: "Beginner",
    contraction: ["Concentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Quadruped",
    equipment: ["Exercise mat"],
    startingPosition: { en: "Kneel on all fours with your hands under your shoulders and your knees under your hips.", ur: "چاروں ہاتھ پاؤں پر آ جائیں، ہاتھ کندھوں کے نیچے اور گھٹنے کولہوں کے نیچے۔" },
    quickSteps: {
      en: [
        "Kneel on all fours, back flat.",
        "Round the back up towards the ceiling.",
        "Then let it sag down gently, and repeat slowly.",
      ],
      ur: [
        "چاروں ہاتھ پاؤں پر آئیں، کمر سیدھی۔",
        "کمر کو چھت کی طرف اوپر گول کریں۔",
        "پھر نرمی سے نیچے جھکنے دیں، آہستہ دہرائیں۔",
      ],
    },
    steps: {
      en: [
        "Start with a flat back, weight evenly spread.",
        "Breathe out and round the back up, tucking the tailbone.",
        "Breathe in and let the back sag, lifting the tailbone.",
        "Move slowly between the two, keeping the arms straight.",
      ],
      ur: [
        "سیدھی کمر سے شروع کریں، وزن برابر ہو۔",
        "سانس چھوڑیں اور کمر اوپر گول کریں، دُم کی ہڈی اندر کریں۔",
        "سانس لیں اور کمر نیچے جھکنے دیں، دُم کی ہڈی اوپر کریں۔",
        "دونوں کے بیچ آہستہ حرکت کریں، بازو سیدھے رکھیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "This should feel easy — it is a mobiliser, not a strengthener.",
        "Let the breath lead the movement.",
        "Stop short of any painful end range.",
      ],
      ur: [
        "یہ آسان محسوس ہونی چاہیے — یہ حرکت کی ورزش ہے، طاقت کی نہیں۔",
        "سانس کو حرکت کی رہنمائی کرنے دیں۔",
        "درد والی حد سے پہلے رک جائیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Moving too fast.",
        "Bending the elbows.",
        "Pushing into painful range.",
        "Holding the breath.",
      ],
      ur: [
        "بہت تیز حرکت کرنا۔",
        "کہنیاں موڑ لینا۔",
        "درد والی حد تک زور لگانا۔",
        "سانس روک لینا۔",
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
    holdTime: "2 seconds each position",
    frequency: "Daily, morning and evening",
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
      rationale: "Cat-camel mobilisation is a widely used low-load spinal movement exercise. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ lumbar: 0, thorax: 0 }, QUADRUPED), travel: 800, hold: 400, label: "Flat back on all fours" },
        { pose: pose({ lumbar: 18, thorax: 14, neck: 14 }, QUADRUPED), travel: 1000, hold: 900, label: "Round up, then sag down" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-L-002",
    slug: "knee-to-chest",
    name: { en: "Single Knee to Chest", ur: "ایک گھٹنا سینے کی طرف لانا" },
    bodyRegion: "Lumbar",
    joint: ["Lumbar spine L1–L5", "Hip"],
    musclesTargeted: ["Gluteus maximus", "Erector spinae", "Hip extensors"],
    conditions: ["Non-specific low back pain", "Lumbar stiffness", "Sciatica recovery"],
    purpose: { en: "Gently opens the lower back and buttock, which often settles the ache of a stiff, sore back.", ur: "کمر اور کولہے کو نرمی سے کھولتی ہے، جس سے اکڑی اور دُکھتی کمر کا درد اکثر کم ہو جاتا ہے۔" },
    exerciseType: "Stretching",
    difficulty: "Beginner",
    contraction: ["Passive"],
    mode: "Passive",
    load: "Bodyweight",
    position: "Supine",
    equipment: ["Exercise mat"],
    startingPosition: { en: "Lie on your back with both knees bent and your feet flat on the floor.", ur: "سیدھے لیٹ جائیں، دونوں گھٹنے مڑے اور پاؤں زمین پر۔" },
    quickSteps: {
      en: [
        "Lie on your back, knees bent.",
        "Draw one knee up towards your chest with both hands.",
        "Hold 20 seconds, lower slowly, then swap sides.",
      ],
      ur: [
        "سیدھے لیٹ جائیں، گھٹنے مڑے ہوں۔",
        "دونوں ہاتھوں سے ایک گھٹنا سینے کی طرف لائیں۔",
        "بیس سیکنڈ رکیں، آہستہ نیچے کریں، پھر دوسری طرف۔",
      ],
    },
    steps: {
      en: [
        "Keep the other foot flat on the floor.",
        "Hold behind the thigh and draw the knee towards the chest.",
        "Take it to a comfortable stretch, not to pain.",
        "Hold, breathing normally, then lower the leg slowly.",
      ],
      ur: [
        "دوسرا پاؤں زمین پر ہی رکھیں۔",
        "ران کے پیچھے سے پکڑ کر گھٹنا سینے کی طرف لائیں۔",
        "آرام دہ کھنچاؤ تک لائیں، درد تک نہیں۔",
        "رکیں، سانس لیتے رہیں، پھر ٹانگ آہستہ نیچے کریں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Hold behind the thigh, not over the kneecap.",
        "Keep the head and shoulders relaxed on the floor.",
        "Stop if pain travels down the leg.",
      ],
      ur: [
        "ران کے پیچھے سے پکڑیں، گھٹنے کی ٹوپی پر نہیں۔",
        "سر اور کندھے فرش پر ڈھیلے رکھیں۔",
        "درد ٹانگ میں پھیلے تو رک جائیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Pulling on the kneecap.",
        "Lifting the head off the floor.",
        "Letting the other leg straighten.",
        "Bouncing the stretch.",
      ],
      ur: [
        "گھٹنے کی ٹوپی سے کھینچنا۔",
        "سر فرش سے اٹھا لینا۔",
        "دوسری ٹانگ کا سیدھا ہو جانا۔",
        "کھنچاؤ میں جھٹکا دینا۔",
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
    repetitions: "3 each side",
    sets: "2",
    holdTime: "20 seconds",
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
      rationale: "Single knee to chest is a standard low back mobility and comfort exercise. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ hipNear: 45, kneeNear: 100 }, SUPINE), travel: 800, hold: 400, label: "Lying with knees bent" },
        { pose: pose({ hipNear: 110, kneeNear: 125, shoulderNear: 120, elbowNear: 100 }, SUPINE), travel: 1000, hold: 900, label: "Draw one knee to the chest" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-CO-001",
    slug: "bird-dog",
    name: { en: "Bird Dog", ur: "برڈ ڈاگ — ایک ہاتھ ایک ٹانگ" },
    bodyRegion: "Core",
    joint: ["Lumbar spine L1–L5", "Hip", "Scapulothoracic"],
    musclesTargeted: ["Multifidus", "Gluteus maximus", "Erector spinae", "Transversus abdominis"],
    conditions: ["Non-specific low back pain", "Core weakness", "Poor trunk control"],
    purpose: { en: "Teaches the trunk to stay still while an arm and leg move — the control the back needs during walking and lifting.", ur: "دھڑ کو ساکن رکھتے ہوئے ہاتھ اور ٹانگ حرکت دینا سکھاتی ہے — یہی قابو چلنے اور وزن اٹھانے میں کمر کو چاہیے۔" },
    exerciseType: "Stabilisation & motor control",
    difficulty: "Intermediate",
    contraction: ["Isometric", "Concentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Quadruped",
    equipment: ["Exercise mat"],
    startingPosition: { en: "Kneel on all fours with your hands under your shoulders, knees under your hips and your back flat.", ur: "چاروں ہاتھ پاؤں پر آئیں، ہاتھ کندھوں کے نیچے، گھٹنے کولہوں کے نیچے اور کمر سیدھی۔" },
    quickSteps: {
      en: [
        "Kneel on all fours with a flat back.",
        "Reach one arm forward and the opposite leg back.",
        "Hold 5 seconds, return, then swap sides.",
      ],
      ur: [
        "چاروں ہاتھ پاؤں پر آئیں، کمر سیدھی۔",
        "ایک ہاتھ آگے اور مخالف ٹانگ پیچھے بڑھائیں۔",
        "پانچ سیکنڈ رکیں، واپس آئیں، پھر دوسری طرف۔",
      ],
    },
    steps: {
      en: [
        "Set the back flat and tighten the lower abdomen gently.",
        "Reach one arm straight forward at shoulder height.",
        "At the same time reach the opposite leg straight back at hip height.",
        "Hold without letting the hips tip.",
        "Return under control and swap sides.",
      ],
      ur: [
        "کمر سیدھی کریں اور پیٹ کا نچلا حصہ ہلکا سخت کریں۔",
        "ایک ہاتھ کندھے کی اونچائی پر سیدھا آگے بڑھائیں۔",
        "ساتھ ہی مخالف ٹانگ کولہے کی اونچائی پر سیدھی پیچھے بڑھائیں۔",
        "رکیں مگر کولہا ٹیڑھا نہ ہو۔",
        "قابو سے واپس آئیں اور دوسری طرف کریں۔",
      ],
    },
    specialInstructions: {
      en: [
        "The hips must stay level — imagine balancing a glass on your back.",
        "Do not lift the leg above hip height.",
        "If you wobble, reach less far.",
      ],
      ur: [
        "کولہے برابر رہیں — تصور کریں کمر پر گلاس رکھا ہے۔",
        "ٹانگ کولہے کی اونچائی سے اوپر نہ اٹھائیں۔",
        "لڑکھڑاہٹ ہو تو کم دور تک بڑھائیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting the hips rotate or drop.",
        "Lifting the leg too high and arching the back.",
        "Holding the breath.",
        "Rushing between sides.",
      ],
      ur: [
        "کولہوں کا گھوم جانا یا جھک جانا۔",
        "ٹانگ بہت اوپر اٹھا کر کمر کو محراب بنانا۔",
        "سانس روکنا۔",
        "اطراف بدلنے میں جلدی کرنا۔",
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
    sets: "3",
    holdTime: "5 seconds",
    frequency: "Every other day",
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
      rationale: "Bird dog is a widely used motor control exercise for the lumbar spine. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: QUADRUPED, travel: 800, hold: 400, label: "All fours, back flat" },
        { pose: pose({ hipNear: 178, kneeNear: 4, ankleNear: 20, shoulderFar: 178, elbowFar: 2 }, QUADRUPED), travel: 1000, hold: 900, label: "Opposite arm and leg reach out" },
      ],
      props: [{ kind: "mat" }],
    },
  },
];
