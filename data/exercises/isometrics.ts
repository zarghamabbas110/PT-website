import { pose } from "@/lib/figure";
import type { Exercise } from "../schema";
import { PRONE, QUADRUPED, SEATED, SIDE_LYING, STAND, SUPINE } from "./bases";

/* ==========================================================================
   ISOMETRIC HOLDS
   --------------------------------------------------------------------------
   Strength without movement — what a painful, swollen or recently operated
   joint will accept long before it will move under load. One hold for each
   direction at the neck, shoulder, elbow, wrist, hip, knee and ankle.
   Drafts pending clinical review.
   ========================================================================== */

export const ISOMETRICS: Exercise[] = [
  {
    id: "EX-CX-011",
    slug: "cervical-isometric-flexion",
    name: { en: "Neck Isometric — Flexion", ur: "گردن کی ساکن ورزش — آگے" },
    bodyRegion: "Cervical",
    joint: ["Cervical spine C1–C7"],
    musclesTargeted: ["Deep neck flexors", "Longus colli", "Sternocleidomastoid"],
    conditions: ["Neck weakness", "Whiplash recovery", "Forward head posture", "Cervicogenic headache"],
    purpose: { en: "Strengthens the muscles at the front of the neck with no movement at all, so it is safe long before the neck is ready to turn freely.", ur: "بغیر کسی حرکت کے گردن کے اگلے پٹھوں کو مضبوط کرتی ہے، اس لیے گردن کے آزادانہ گھومنے سے بہت پہلے بھی محفوظ ہے۔" },
    exerciseType: "Strengthening",
    difficulty: "Beginner",
    contraction: ["Isometric"],
    mode: "Resisted",
    load: "Bodyweight",
    position: "Sitting",
    equipment: ["Chair"],
    startingPosition: { en: "Sit tall on a firm chair with the palm of one hand resting flat against your forehead.", ur: "مضبوط کرسی پر سیدھے بیٹھیں، ایک ہاتھ کی ہتھیلی پیشانی پر رکھیں۔" },
    quickSteps: {
      en: [
        "Place a palm flat on your forehead.",
        "Press the head forward into the hand without moving.",
        "Hold 5 seconds, then release slowly.",
      ],
      ur: [
        "ایک ہتھیلی پیشانی پر رکھیں۔",
        "سر کو ہاتھ میں آگے دبائیں مگر حرکت نہ ہو۔",
        "پانچ سیکنڈ رکیں، پھر آہستہ چھوڑیں۔",
      ],
    },
    steps: {
      en: [
        "Sit tall with the chin level and the shoulders relaxed.",
        "Rest the palm of one hand flat on the forehead.",
        "Press the forehead forward into the hand while the hand holds it perfectly still.",
        "Build the pressure over two seconds and hold at about half your strength.",
        "Ease off over two seconds and rest before the next repetition.",
      ],
      ur: [
        "سیدھے بیٹھیں، ٹھوڑی برابر اور کندھے ڈھیلے۔",
        "ایک ہاتھ کی ہتھیلی پیشانی پر رکھیں۔",
        "پیشانی کو ہاتھ میں آگے دبائیں جبکہ ہاتھ اسے بالکل ساکن رکھے۔",
        "دباؤ دو سیکنڈ میں بڑھائیں اور تقریباً آدھی طاقت پر روکیں۔",
        "دو سیکنڈ میں زور کم کریں اور اگلی بار سے پہلے آرام کریں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Nothing should move — if the joint gives way, you are pushing too hard.",
        "Build the effort up over two seconds rather than snapping into it.",
        "Keep breathing out through the hold; holding the breath spikes the blood pressure.",
      ],
      ur: [
        "کچھ حرکت نہ کرے — جوڑ ہل جائے تو آپ زیادہ زور لگا رہے ہیں۔",
        "زور دو سیکنڈ میں بتدریج بڑھائیں، یکدم نہیں۔",
        "روکنے کے دوران سانس چھوڑتے رہیں؛ سانس روکنے سے بلڈ پریشر بڑھ جاتا ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting the joint actually move.",
        "Pushing at full strength straight away.",
        "Holding the breath.",
        "Tensing the neck and jaw.",
      ],
      ur: [
        "جوڑ کا واقعی ہل جانا۔",
        "شروع میں ہی پوری طاقت لگا دینا۔",
        "سانس روکنا۔",
        "گردن اور جبڑا سخت کر لینا۔",
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
    repetitions: "5",
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
      rationale: "Isometric cervical strengthening is standard in early whiplash and chronic neck pain care. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ shoulderNear: 174, elbowNear: 22 }, SEATED), travel: 800, hold: 400, label: "Sitting tall, palm on the forehead" },
        { pose: pose({ shoulderNear: 64, elbowNear: 118 }, SEATED), travel: 1000, hold: 900, label: "Press forward and hold" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-CX-012",
    slug: "cervical-isometric-extension",
    name: { en: "Neck Isometric — Extension", ur: "گردن کی ساکن ورزش — پیچھے" },
    bodyRegion: "Cervical",
    joint: ["Cervical spine C1–C7"],
    musclesTargeted: ["Cervical erector spinae", "Splenius capitis", "Upper trapezius"],
    conditions: ["Neck weakness", "Whiplash recovery", "Postural strain", "Poor endurance at a desk"],
    purpose: { en: "Strengthens the muscles at the back of the neck — the ones that tire first over a long day of looking down.", ur: "گردن کے پچھلے پٹھوں کو مضبوط کرتی ہے — وہی جو نیچے دیکھتے ہوئے لمبے دن میں سب سے پہلے تھکتے ہیں۔" },
    exerciseType: "Strengthening",
    difficulty: "Beginner",
    contraction: ["Isometric"],
    mode: "Resisted",
    load: "Bodyweight",
    position: "Sitting",
    equipment: ["Chair"],
    startingPosition: { en: "Sit tall on a firm chair with both hands laced behind your head.", ur: "مضبوط کرسی پر سیدھے بیٹھیں، دونوں ہاتھ سر کے پیچھے ملا لیں۔" },
    quickSteps: {
      en: [
        "Lace both hands behind your head.",
        "Press the head backwards into the hands without moving.",
        "Hold 5 seconds, then release slowly.",
      ],
      ur: [
        "دونوں ہاتھ سر کے پیچھے ملائیں۔",
        "سر کو ہاتھوں میں پیچھے دبائیں مگر حرکت نہ ہو۔",
        "پانچ سیکنڈ رکیں، پھر آہستہ چھوڑیں۔",
      ],
    },
    steps: {
      en: [
        "Sit tall with the chin gently tucked, not poking forward.",
        "Lace both hands behind the head, low down near the skull base.",
        "Press the head backwards into the hands while they hold it still.",
        "Build to about half effort and hold, keeping the chin tucked.",
        "Ease off slowly and rest.",
      ],
      ur: [
        "سیدھے بیٹھیں، ٹھوڑی ہلکی اندر، آگے نکلی ہوئی نہیں۔",
        "دونوں ہاتھ سر کے پیچھے، کھوپڑی کی جڑ کے قریب نیچے ملائیں۔",
        "سر کو ہاتھوں میں پیچھے دبائیں جبکہ وہ اسے ساکن رکھیں۔",
        "تقریباً آدھی طاقت تک بڑھائیں اور روکیں، ٹھوڑی اندر رکھتے ہوئے۔",
        "آہستہ زور کم کریں اور آرام کریں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Nothing should move — if the joint gives way, you are pushing too hard.",
        "Build the effort up over two seconds rather than snapping into it.",
        "Keep breathing out through the hold; holding the breath spikes the blood pressure.",
      ],
      ur: [
        "کچھ حرکت نہ کرے — جوڑ ہل جائے تو آپ زیادہ زور لگا رہے ہیں۔",
        "زور دو سیکنڈ میں بتدریج بڑھائیں، یکدم نہیں۔",
        "روکنے کے دوران سانس چھوڑتے رہیں؛ سانس روکنے سے بلڈ پریشر بڑھ جاتا ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting the joint actually move.",
        "Pushing at full strength straight away.",
        "Holding the breath.",
        "Tensing the neck and jaw.",
      ],
      ur: [
        "جوڑ کا واقعی ہل جانا۔",
        "شروع میں ہی پوری طاقت لگا دینا۔",
        "سانس روکنا۔",
        "گردن اور جبڑا سخت کر لینا۔",
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
    repetitions: "5",
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
      rationale: "Isometric cervical extension strengthening is used across neck rehabilitation programmes. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ shoulderNear: 174, elbowNear: 22 }, SEATED), travel: 800, hold: 400, label: "Hands laced behind the head" },
        { pose: pose({ shoulderNear: 44, elbowNear: 138, shoulderFar: 44, elbowFar: 138 }, SEATED), travel: 1000, hold: 900, label: "Press backwards and hold" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-CX-013",
    slug: "cervical-isometric-side-flexion",
    name: { en: "Neck Isometric — Side Bend", ur: "گردن کی ساکن ورزش — پہلو" },
    bodyRegion: "Cervical",
    joint: ["Cervical spine C1–C7"],
    musclesTargeted: ["Scalenes", "Upper trapezius", "Levator scapulae"],
    conditions: ["Neck weakness", "Whiplash recovery", "Torticollis recovery", "Postural strain"],
    purpose: { en: "Works the muscles on the side of the neck, which are usually the weakest and the most uneven between the two sides.", ur: "گردن کے پہلو کے پٹھوں پر کام کرتی ہے، جو عموماً سب سے کمزور اور دونوں طرف سب سے غیر برابر ہوتے ہیں۔" },
    exerciseType: "Strengthening",
    difficulty: "Beginner",
    contraction: ["Isometric"],
    mode: "Resisted",
    load: "Bodyweight",
    position: "Sitting",
    equipment: ["Chair"],
    startingPosition: { en: "Sit tall on a firm chair with the palm of one hand flat against the side of your head, above the ear.", ur: "مضبوط کرسی پر سیدھے بیٹھیں، ایک ہاتھ کی ہتھیلی کان کے اوپر سر کے پہلو پر رکھیں۔" },
    quickSteps: {
      en: [
        "Place a palm against the side of your head.",
        "Press sideways into the hand without moving.",
        "Hold 5 seconds, then do the other side.",
      ],
      ur: [
        "ایک ہتھیلی سر کے پہلو پر رکھیں۔",
        "پہلو کی طرف ہاتھ میں دبائیں مگر حرکت نہ ہو۔",
        "پانچ سیکنڈ رکیں، پھر دوسری طرف کریں۔",
      ],
    },
    steps: {
      en: [
        "Sit tall with both shoulders down and level.",
        "Place the palm flat against the side of the head, just above the ear.",
        "Press the head sideways into the hand while the hand holds it still.",
        "Keep the nose pointing straight ahead — this is a tilt, not a turn.",
        "Ease off slowly, rest, then repeat on the other side.",
      ],
      ur: [
        "سیدھے بیٹھیں، دونوں کندھے نیچے اور برابر۔",
        "ہتھیلی کان کے ذرا اوپر سر کے پہلو پر رکھیں۔",
        "سر کو پہلو کی طرف ہاتھ میں دبائیں جبکہ ہاتھ اسے ساکن رکھے۔",
        "ناک بالکل سامنے رہے — یہ جھکاؤ ہے، گھماؤ نہیں۔",
        "آہستہ زور کم کریں، آرام کریں، پھر دوسری طرف دہرائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Nothing should move — if the joint gives way, you are pushing too hard.",
        "Build the effort up over two seconds rather than snapping into it.",
        "Keep breathing out through the hold; holding the breath spikes the blood pressure.",
      ],
      ur: [
        "کچھ حرکت نہ کرے — جوڑ ہل جائے تو آپ زیادہ زور لگا رہے ہیں۔",
        "زور دو سیکنڈ میں بتدریج بڑھائیں، یکدم نہیں۔",
        "روکنے کے دوران سانس چھوڑتے رہیں؛ سانس روکنے سے بلڈ پریشر بڑھ جاتا ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting the joint actually move.",
        "Pushing at full strength straight away.",
        "Holding the breath.",
        "Tensing the neck and jaw.",
      ],
      ur: [
        "جوڑ کا واقعی ہل جانا۔",
        "شروع میں ہی پوری طاقت لگا دینا۔",
        "سانس روکنا۔",
        "گردن اور جبڑا سخت کر لینا۔",
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
      rationale: "Isometric cervical side flexion is used to restore side-to-side neck strength symmetry. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ shoulderNear: 174, elbowNear: 22 }, SEATED), travel: 800, hold: 400, label: "Palm against the side of the head" },
        { pose: pose({ shoulderNear: 54, shoulderAbductNear: 34, elbowNear: 126 }, SEATED), travel: 1000, hold: 900, label: "Press sideways and hold" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-S-027",
    slug: "isometric-shoulder-flexion",
    name: { en: "Isometric Shoulder Flexion", ur: "کندھے کی ساکن ورزش — آگے" },
    bodyRegion: "Shoulder",
    joint: ["Glenohumeral", "Scapulothoracic"],
    musclesTargeted: ["Anterior deltoid", "Pectoralis major", "Coracobrachialis"],
    conditions: ["Rotator cuff tendinopathy", "Painful arc", "Post-immobilisation weakness", "Early post-operative shoulder"],
    purpose: { en: "Loads the front of the shoulder against a wall without the arm moving, which is often the only strengthening a painful shoulder will accept.", ur: "بازو ہلائے بغیر دیوار کے سہارے کندھے کے اگلے حصے پر بوجھ ڈالتی ہے، جو اکثر دُکھتے کندھے کی واحد قابل قبول مضبوطی کی ورزش ہوتی ہے۔" },
    exerciseType: "Strengthening",
    difficulty: "Beginner",
    contraction: ["Isometric"],
    mode: "Resisted",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["Wall"],
    startingPosition: { en: "Stand facing a wall an arm's length away with the elbow bent to ninety degrees and the fist against the wall.", ur: "دیوار سے ایک بازو کے فاصلے پر منہ کر کے کھڑے ہوں، کہنی نوے درجے مڑی اور مٹھی دیوار سے لگی ہو۔" },
    quickSteps: {
      en: [
        "Face a wall with the elbow bent and the fist against it.",
        "Press forward into the wall without moving.",
        "Hold 5 seconds, then release.",
      ],
      ur: [
        "دیوار کی طرف منہ کریں، کہنی مڑی اور مٹھی دیوار پر۔",
        "دیوار میں آگے دبائیں مگر حرکت نہ ہو۔",
        "پانچ سیکنڈ رکیں، پھر چھوڑ دیں۔",
      ],
    },
    steps: {
      en: [
        "Stand facing the wall, close enough that the bent elbow just reaches it.",
        "Make a soft fist and rest the knuckles against the wall.",
        "Keep the elbow tucked in at your side and bent to ninety degrees.",
        "Press the fist forward into the wall, building to about half effort.",
        "Hold, then ease off slowly and shake the arm out.",
      ],
      ur: [
        "دیوار کی طرف منہ کر کے اتنا قریب کھڑے ہوں کہ مڑی کہنی بس پہنچ جائے۔",
        "ہلکی مٹھی بنائیں اور پوروں کو دیوار سے لگائیں۔",
        "کہنی پہلو سے لگی اور نوے درجے مڑی رکھیں۔",
        "مٹھی دیوار میں آگے دبائیں، تقریباً آدھی طاقت تک بڑھائیں۔",
        "رکیں، پھر آہستہ زور کم کریں اور بازو جھٹک لیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Nothing should move — if the joint gives way, you are pushing too hard.",
        "Build the effort up over two seconds rather than snapping into it.",
        "Keep breathing out through the hold; holding the breath spikes the blood pressure.",
      ],
      ur: [
        "کچھ حرکت نہ کرے — جوڑ ہل جائے تو آپ زیادہ زور لگا رہے ہیں۔",
        "زور دو سیکنڈ میں بتدریج بڑھائیں، یکدم نہیں۔",
        "روکنے کے دوران سانس چھوڑتے رہیں؛ سانس روکنے سے بلڈ پریشر بڑھ جاتا ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting the joint actually move.",
        "Pushing at full strength straight away.",
        "Holding the breath.",
        "Tensing the neck and jaw.",
      ],
      ur: [
        "جوڑ کا واقعی ہل جانا۔",
        "شروع میں ہی پوری طاقت لگا دینا۔",
        "سانس روکنا۔",
        "گردن اور جبڑا سخت کر لینا۔",
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
    holdTime: "5 seconds",
    frequency: "Daily",
    restBetweenSets: "20 seconds",
    progressions: ["band-shoulder-flexion"],
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
      rationale: "Isometric shoulder loading is standard for irritable rotator cuff presentations. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ shoulderNear: 172, elbowNear: 30 }, STAND), travel: 800, hold: 400, label: "Elbow bent, fist on the wall" },
        { pose: pose({ shoulderNear: 160, elbowNear: 92 }, STAND), travel: 1000, hold: 900, label: "Press forward and hold" },
      ],
      props: [{ kind: "wall" }],
    },
  },
  {
    id: "EX-S-028",
    slug: "isometric-shoulder-extension",
    name: { en: "Isometric Shoulder Extension", ur: "کندھے کی ساکن ورزش — پیچھے" },
    bodyRegion: "Shoulder",
    joint: ["Glenohumeral", "Scapulothoracic"],
    musclesTargeted: ["Latissimus dorsi", "Posterior deltoid", "Teres major"],
    conditions: ["Rotator cuff tendinopathy", "Post-immobilisation weakness", "Shoulder instability", "Painful arc"],
    purpose: { en: "Loads the back of the shoulder against a wall, balancing the front-of-shoulder work that most people do far more of.", ur: "دیوار کے سہارے کندھے کے پچھلے حصے پر بوجھ ڈالتی ہے، جو اگلے حصے کی اُس مشق کا توازن بناتی ہے جو زیادہ تر لوگ کہیں زیادہ کرتے ہیں۔" },
    exerciseType: "Strengthening",
    difficulty: "Beginner",
    contraction: ["Isometric"],
    mode: "Resisted",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["Wall"],
    startingPosition: { en: "Stand with your back to a wall, arms straight down at your sides and the backs of the hands against it.", ur: "دیوار کی طرف پیٹھ کر کے کھڑے ہوں، بازو پہلوؤں پر سیدھے اور ہاتھوں کی پشت دیوار سے لگی ہو۔" },
    quickSteps: {
      en: [
        "Stand with your back to a wall, arms at your sides.",
        "Press the backs of the hands into the wall.",
        "Hold 5 seconds, then release.",
      ],
      ur: [
        "دیوار کی طرف پیٹھ کر کے کھڑے ہوں، بازو پہلوؤں پر۔",
        "ہاتھوں کی پشت دیوار میں دبائیں۔",
        "پانچ سیکنڈ رکیں، پھر چھوڑ دیں۔",
      ],
    },
    steps: {
      en: [
        "Stand with the heels a few inches from the wall and the back against it.",
        "Let both arms hang straight down with the backs of the hands touching the wall.",
        "Press both hands backwards into the wall.",
        "Keep the elbows straight and the shoulders down, away from the ears.",
        "Hold, then ease off slowly.",
      ],
      ur: [
        "ایڑیاں دیوار سے چند انچ دور اور پیٹھ دیوار سے لگا کر کھڑے ہوں۔",
        "دونوں بازو سیدھے نیچے لٹکائیں، ہاتھوں کی پشت دیوار کو چھوتی ہو۔",
        "دونوں ہاتھ دیوار میں پیچھے دبائیں۔",
        "کہنیاں سیدھی اور کندھے نیچے، کانوں سے دور رکھیں۔",
        "رکیں، پھر آہستہ زور کم کریں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Nothing should move — if the joint gives way, you are pushing too hard.",
        "Build the effort up over two seconds rather than snapping into it.",
        "Keep breathing out through the hold; holding the breath spikes the blood pressure.",
      ],
      ur: [
        "کچھ حرکت نہ کرے — جوڑ ہل جائے تو آپ زیادہ زور لگا رہے ہیں۔",
        "زور دو سیکنڈ میں بتدریج بڑھائیں، یکدم نہیں۔",
        "روکنے کے دوران سانس چھوڑتے رہیں؛ سانس روکنے سے بلڈ پریشر بڑھ جاتا ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting the joint actually move.",
        "Pushing at full strength straight away.",
        "Holding the breath.",
        "Tensing the neck and jaw.",
      ],
      ur: [
        "جوڑ کا واقعی ہل جانا۔",
        "شروع میں ہی پوری طاقت لگا دینا۔",
        "سانس روکنا۔",
        "گردن اور جبڑا سخت کر لینا۔",
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
    holdTime: "5 seconds",
    frequency: "Daily",
    restBetweenSets: "20 seconds",
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
      rationale: "Isometric shoulder extension is used in graded loading of an irritable shoulder. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ shoulderNear: 176, elbowNear: 8, shoulderFar: 176, elbowFar: 8 }, STAND), travel: 800, hold: 400, label: "Back to the wall, arms down" },
        { pose: pose({ shoulderNear: 186, elbowNear: 4, shoulderFar: 186, elbowFar: 4 }, STAND), travel: 1000, hold: 900, label: "Press the hands back and hold" },
      ],
    },
  },
  {
    id: "EX-S-029",
    slug: "isometric-shoulder-external-rotation",
    name: { en: "Isometric External Rotation", ur: "کندھے کی ساکن ورزش — باہر کی طرف گھماؤ" },
    bodyRegion: "Shoulder",
    joint: ["Glenohumeral", "Scapulothoracic"],
    musclesTargeted: ["Infraspinatus", "Teres minor", "Posterior deltoid"],
    conditions: ["Rotator cuff tendinopathy", "Shoulder impingement", "Post-dislocation rehabilitation", "Overhead sport"],
    purpose: { en: "Loads the small muscles at the back of the cuff — the ones that fail first — with the arm safely at the side.", ur: "کف کے پچھلے چھوٹے پٹھوں پر بوجھ ڈالتی ہے — وہی جو سب سے پہلے کمزور ہوتے ہیں — بازو محفوظ طور پر پہلو میں رکھتے ہوئے۔" },
    exerciseType: "Strengthening",
    difficulty: "Beginner",
    contraction: ["Isometric"],
    mode: "Resisted",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["Wall"],
    startingPosition: { en: "Stand side-on to a wall with the elbow tucked in and bent to ninety degrees, the back of the hand against the wall.", ur: "دیوار کے پہلو میں کھڑے ہوں، کہنی پہلو سے لگی اور نوے درجے مڑی، ہاتھ کی پشت دیوار سے لگی ہو۔" },
    quickSteps: {
      en: [
        "Stand side-on to a wall, elbow tucked in and bent.",
        "Press the back of the hand outwards into the wall.",
        "Hold 5 seconds, then release.",
      ],
      ur: [
        "دیوار کے پہلو میں کھڑے ہوں، کہنی پہلو سے لگی اور مڑی ہوئی۔",
        "ہاتھ کی پشت دیوار میں باہر کی طرف دبائیں۔",
        "پانچ سیکنڈ رکیں، پھر چھوڑ دیں۔",
      ],
    },
    steps: {
      en: [
        "Stand with the affected shoulder next to the wall.",
        "Tuck the elbow firmly against your side and bend it to ninety degrees.",
        "Rest the back of that hand against the wall.",
        "Press outwards into the wall as if opening a door, without the arm moving.",
        "Hold at about half effort, then ease off.",
      ],
      ur: [
        "متاثرہ کندھا دیوار کے ساتھ رکھ کر کھڑے ہوں۔",
        "کہنی مضبوطی سے پہلو سے لگائیں اور نوے درجے موڑیں۔",
        "اُس ہاتھ کی پشت دیوار سے لگائیں۔",
        "دیوار میں باہر کی طرف ایسے دبائیں جیسے دروازہ کھول رہے ہوں، بازو ہلائے بغیر۔",
        "تقریباً آدھی طاقت پر رکیں، پھر زور کم کریں۔",
      ],
    },
    specialInstructions: {
      en: [
        "A rolled towel between the elbow and the ribs keeps the arm in the right place.",
        "The forearm must not swing — if it does, stand closer to the wall.",
        "Stop if the pain during the hold is above three out of ten.",
      ],
      ur: [
        "کہنی اور پسلیوں کے درمیان لپٹا تولیہ رکھنے سے بازو صحیح جگہ رہتا ہے۔",
        "بازو ہلنا نہیں چاہیے — ہلے تو دیوار کے زیادہ قریب کھڑے ہوں۔",
        "روکنے کے دوران درد دس میں سے تین سے زیادہ ہو تو رک جائیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting the joint actually move.",
        "Pushing at full strength straight away.",
        "Holding the breath.",
        "Tensing the neck and jaw.",
      ],
      ur: [
        "جوڑ کا واقعی ہل جانا۔",
        "شروع میں ہی پوری طاقت لگا دینا۔",
        "سانس روکنا۔",
        "گردن اور جبڑا سخت کر لینا۔",
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
    repetitions: "5 each side",
    sets: "3",
    holdTime: "5 seconds",
    frequency: "Daily",
    restBetweenSets: "20 seconds",
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
      rationale: "Isometric rotator cuff loading is widely used in early tendinopathy management. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ shoulderNear: 170, elbowNear: 88 }, STAND), travel: 800, hold: 400, label: "Elbow tucked in, hand on the wall" },
        { pose: pose({ shoulderNear: 170, elbowNear: 88, shoulderRotNear: 26 }, STAND), travel: 1000, hold: 900, label: "Press outwards and hold" },
      ],
      props: [{ kind: "wall" }],
    },
  },
  {
    id: "EX-S-030",
    slug: "isometric-shoulder-internal-rotation",
    name: { en: "Isometric Internal Rotation", ur: "کندھے کی ساکن ورزش — اندر کی طرف گھماؤ" },
    bodyRegion: "Shoulder",
    joint: ["Glenohumeral", "Scapulothoracic"],
    musclesTargeted: ["Subscapularis", "Pectoralis major", "Latissimus dorsi"],
    conditions: ["Rotator cuff tendinopathy", "Post-dislocation rehabilitation", "Shoulder instability", "Post-immobilisation weakness"],
    purpose: { en: "Loads the one cuff muscle on the front of the shoulder blade, which is the hardest to reach and the most often left out.", ur: "شانے کی ہڈی کے سامنے والے واحد کف پٹھے پر بوجھ ڈالتی ہے، جس تک پہنچنا سب سے مشکل اور جسے سب سے زیادہ نظرانداز کیا جاتا ہے۔" },
    exerciseType: "Strengthening",
    difficulty: "Beginner",
    contraction: ["Isometric"],
    mode: "Resisted",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["Wall"],
    startingPosition: { en: "Stand in a doorway or beside a wall with the elbow tucked in, bent to ninety degrees, palm against the frame.", ur: "دروازے میں یا دیوار کے پاس کھڑے ہوں، کہنی پہلو سے لگی، نوے درجے مڑی، ہتھیلی چوکھٹ پر۔" },
    quickSteps: {
      en: [
        "Stand with the elbow tucked in and bent, palm against a door frame.",
        "Press the palm inwards without moving.",
        "Hold 5 seconds, then release.",
      ],
      ur: [
        "کہنی پہلو سے لگی اور مڑی رکھ کر کھڑے ہوں، ہتھیلی چوکھٹ پر۔",
        "ہتھیلی اندر کی طرف دبائیں مگر حرکت نہ ہو۔",
        "پانچ سیکنڈ رکیں، پھر چھوڑ دیں۔",
      ],
    },
    steps: {
      en: [
        "Stand in a doorway with the affected arm nearest the frame.",
        "Tuck the elbow against your side and bend it to ninety degrees.",
        "Place the palm flat against the frame.",
        "Press inwards, towards your stomach, without letting the arm move.",
        "Hold at about half effort, then ease off slowly.",
      ],
      ur: [
        "دروازے میں کھڑے ہوں، متاثرہ بازو چوکھٹ کے قریب۔",
        "کہنی پہلو سے لگائیں اور نوے درجے موڑیں۔",
        "ہتھیلی چوکھٹ پر رکھیں۔",
        "بازو ہلائے بغیر اندر، پیٹ کی طرف دبائیں۔",
        "تقریباً آدھی طاقت پر رکیں، پھر آہستہ چھوڑیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Nothing should move — if the joint gives way, you are pushing too hard.",
        "Build the effort up over two seconds rather than snapping into it.",
        "Keep breathing out through the hold; holding the breath spikes the blood pressure.",
      ],
      ur: [
        "کچھ حرکت نہ کرے — جوڑ ہل جائے تو آپ زیادہ زور لگا رہے ہیں۔",
        "زور دو سیکنڈ میں بتدریج بڑھائیں، یکدم نہیں۔",
        "روکنے کے دوران سانس چھوڑتے رہیں؛ سانس روکنے سے بلڈ پریشر بڑھ جاتا ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting the joint actually move.",
        "Pushing at full strength straight away.",
        "Holding the breath.",
        "Tensing the neck and jaw.",
      ],
      ur: [
        "جوڑ کا واقعی ہل جانا۔",
        "شروع میں ہی پوری طاقت لگا دینا۔",
        "سانس روکنا۔",
        "گردن اور جبڑا سخت کر لینا۔",
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
    repetitions: "5 each side",
    sets: "3",
    holdTime: "5 seconds",
    frequency: "Daily",
    restBetweenSets: "20 seconds",
    progressions: ["shoulder-internal-rotation-band"],
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
      rationale: "Isometric internal rotation loading is part of standard rotator cuff programmes. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ shoulderNear: 170, elbowNear: 88 }, STAND), travel: 800, hold: 400, label: "Elbow tucked in, palm on the frame" },
        { pose: pose({ shoulderNear: 170, elbowNear: 88, shoulderRotNear: -26 }, STAND), travel: 1000, hold: 900, label: "Press inwards and hold" },
      ],
      props: [{ kind: "doorway" }],
    },
  },
  {
    id: "EX-EL-011",
    slug: "isometric-elbow-flexion",
    name: { en: "Isometric Elbow Flexion", ur: "کہنی کی ساکن ورزش — موڑنا" },
    bodyRegion: "Elbow",
    joint: ["Humeroulnar", "Humeroradial"],
    musclesTargeted: ["Biceps brachii", "Brachialis", "Brachioradialis"],
    conditions: ["Biceps tendinopathy", "Post-fracture weakness", "Post-immobilisation stiffness", "Early elbow rehabilitation"],
    purpose: { en: "Loads the elbow flexors with the joint completely still, which is what a healing elbow can take before it can move under load.", ur: "جوڑ کو بالکل ساکن رکھتے ہوئے کہنی موڑنے والے پٹھوں پر بوجھ ڈالتی ہے، جو ٹھیک ہوتی کہنی وزن کے ساتھ حرکت سے پہلے برداشت کر سکتی ہے۔" },
    exerciseType: "Strengthening",
    difficulty: "Beginner",
    contraction: ["Isometric"],
    mode: "Resisted",
    load: "Bodyweight",
    position: "Sitting",
    equipment: ["Chair"],
    startingPosition: { en: "Sit tall with one elbow bent to ninety degrees, palm up, and the other hand pressing down on it.", ur: "سیدھے بیٹھیں، ایک کہنی نوے درجے مڑی، ہتھیلی اوپر، اور دوسرا ہاتھ اُس پر نیچے دبا رہا ہو۔" },
    quickSteps: {
      en: [
        "Bend one elbow to ninety degrees, palm up.",
        "Press up against your other hand without moving.",
        "Hold 5 seconds, then release.",
      ],
      ur: [
        "ایک کہنی نوے درجے موڑیں، ہتھیلی اوپر۔",
        "دوسرے ہاتھ کے خلاف اوپر دبائیں مگر حرکت نہ ہو۔",
        "پانچ سیکنڈ رکیں، پھر چھوڑ دیں۔",
      ],
    },
    steps: {
      en: [
        "Sit tall with the elbow tucked in against your side.",
        "Bend it to ninety degrees with the palm facing up.",
        "Place the other hand flat on top of that forearm.",
        "Try to curl the arm up while the top hand stops it completely.",
        "Hold at about half effort, then release over two seconds.",
      ],
      ur: [
        "سیدھے بیٹھیں، کہنی پہلو سے لگی ہو۔",
        "اسے نوے درجے موڑیں، ہتھیلی اوپر کی طرف۔",
        "دوسرا ہاتھ اُس بازو کے اوپر رکھیں۔",
        "بازو اوپر موڑنے کی کوشش کریں جبکہ اوپر والا ہاتھ اسے پوری طرح روکے۔",
        "تقریباً آدھی طاقت پر رکیں، پھر دو سیکنڈ میں چھوڑ دیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Nothing should move — if the joint gives way, you are pushing too hard.",
        "Build the effort up over two seconds rather than snapping into it.",
        "Keep breathing out through the hold; holding the breath spikes the blood pressure.",
      ],
      ur: [
        "کچھ حرکت نہ کرے — جوڑ ہل جائے تو آپ زیادہ زور لگا رہے ہیں۔",
        "زور دو سیکنڈ میں بتدریج بڑھائیں، یکدم نہیں۔",
        "روکنے کے دوران سانس چھوڑتے رہیں؛ سانس روکنے سے بلڈ پریشر بڑھ جاتا ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting the joint actually move.",
        "Pushing at full strength straight away.",
        "Holding the breath.",
        "Tensing the neck and jaw.",
      ],
      ur: [
        "جوڑ کا واقعی ہل جانا۔",
        "شروع میں ہی پوری طاقت لگا دینا۔",
        "سانس روکنا۔",
        "گردن اور جبڑا سخت کر لینا۔",
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
    repetitions: "5 each side",
    sets: "3",
    holdTime: "5 seconds",
    frequency: "Daily",
    restBetweenSets: "20 seconds",
    progressions: ["biceps-curl-band"],
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
      rationale: "Isometric elbow flexor loading is used early after fracture and in biceps tendinopathy. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ elbowNear: 22 }, SEATED), travel: 800, hold: 400, label: "Elbow bent, palm up" },
        { pose: pose({ shoulderNear: 172, elbowNear: 92, shoulderFar: 130, elbowFar: 100 }, SEATED), travel: 1000, hold: 900, label: "Press up and hold" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-EL-012",
    slug: "isometric-elbow-extension",
    name: { en: "Isometric Elbow Extension", ur: "کہنی کی ساکن ورزش — سیدھا کرنا" },
    bodyRegion: "Elbow",
    joint: ["Humeroulnar"],
    musclesTargeted: ["Triceps brachii", "Anconeus"],
    conditions: ["Triceps tendinopathy", "Post-fracture weakness", "Post-immobilisation stiffness", "Push-up difficulty"],
    purpose: { en: "Loads the back of the arm without movement — the strength needed to push up out of a chair or off the floor.", ur: "بغیر حرکت بازو کے پچھلے حصے پر بوجھ ڈالتی ہے — وہی طاقت جو کرسی یا فرش سے اٹھنے کے لیے چاہیے۔" },
    exerciseType: "Strengthening",
    difficulty: "Beginner",
    contraction: ["Isometric"],
    mode: "Resisted",
    load: "Bodyweight",
    position: "Sitting",
    equipment: ["Chair"],
    startingPosition: { en: "Sit tall with one elbow bent to ninety degrees and the other hand cupped under that forearm.", ur: "سیدھے بیٹھیں، ایک کہنی نوے درجے مڑی اور دوسرا ہاتھ اُس بازو کے نیچے رکھا ہو۔" },
    quickSteps: {
      en: [
        "Bend one elbow to ninety degrees.",
        "Press down against your other hand without moving.",
        "Hold 5 seconds, then release.",
      ],
      ur: [
        "ایک کہنی نوے درجے موڑیں۔",
        "دوسرے ہاتھ کے خلاف نیچے دبائیں مگر حرکت نہ ہو۔",
        "پانچ سیکنڈ رکیں، پھر چھوڑ دیں۔",
      ],
    },
    steps: {
      en: [
        "Sit tall with the elbow held in at your side and bent to ninety degrees.",
        "Cup the other hand underneath that forearm.",
        "Try to straighten the elbow downwards while the lower hand blocks it.",
        "Build to about half effort and hold, keeping the shoulder relaxed.",
        "Ease off slowly and rest between repetitions.",
      ],
      ur: [
        "سیدھے بیٹھیں، کہنی پہلو سے لگی اور نوے درجے مڑی ہو۔",
        "دوسرا ہاتھ اُس بازو کے نیچے رکھیں۔",
        "کہنی نیچے کی طرف سیدھی کرنے کی کوشش کریں جبکہ نیچے والا ہاتھ اسے روکے۔",
        "تقریباً آدھی طاقت تک بڑھائیں اور روکیں، کندھا ڈھیلا رکھیں۔",
        "آہستہ زور کم کریں اور دو بار کے درمیان آرام کریں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Nothing should move — if the joint gives way, you are pushing too hard.",
        "Build the effort up over two seconds rather than snapping into it.",
        "Keep breathing out through the hold; holding the breath spikes the blood pressure.",
      ],
      ur: [
        "کچھ حرکت نہ کرے — جوڑ ہل جائے تو آپ زیادہ زور لگا رہے ہیں۔",
        "زور دو سیکنڈ میں بتدریج بڑھائیں، یکدم نہیں۔",
        "روکنے کے دوران سانس چھوڑتے رہیں؛ سانس روکنے سے بلڈ پریشر بڑھ جاتا ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting the joint actually move.",
        "Pushing at full strength straight away.",
        "Holding the breath.",
        "Tensing the neck and jaw.",
      ],
      ur: [
        "جوڑ کا واقعی ہل جانا۔",
        "شروع میں ہی پوری طاقت لگا دینا۔",
        "سانس روکنا۔",
        "گردن اور جبڑا سخت کر لینا۔",
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
    repetitions: "5 each side",
    sets: "3",
    holdTime: "5 seconds",
    frequency: "Daily",
    restBetweenSets: "20 seconds",
    progressions: ["triceps-extension-overhead"],
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
      rationale: "Isometric triceps loading is used early after elbow injury. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ elbowNear: 22 }, SEATED), travel: 800, hold: 400, label: "Elbow bent, hand underneath" },
        { pose: pose({ shoulderNear: 172, elbowNear: 92, shoulderFar: 138, elbowFar: 112 }, SEATED), travel: 1000, hold: 900, label: "Press down and hold" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-W-009",
    slug: "isometric-wrist-extension",
    name: { en: "Isometric Wrist Extension", ur: "کلائی کی ساکن ورزش — پیچھے" },
    bodyRegion: "Wrist & Hand",
    joint: ["Radiocarpal", "Midcarpal"],
    musclesTargeted: ["Extensor carpi radialis brevis", "Extensor carpi radialis longus", "Extensor digitorum"],
    conditions: ["Tennis elbow", "Wrist extensor weakness", "Repetitive gripping work", "Early tendinopathy loading"],
    purpose: { en: "The first loading step for a tennis elbow: the tendon is worked hard while the wrist does not move at all.", ur: "ٹینس ایلبو کے لیے بوجھ کا پہلا قدم: ٹینڈن پر پورا کام آتا ہے جبکہ کلائی بالکل حرکت نہیں کرتی۔" },
    exerciseType: "Strengthening",
    difficulty: "Beginner",
    contraction: ["Isometric"],
    mode: "Resisted",
    load: "Bodyweight",
    position: "Sitting",
    equipment: ["Chair", "Table"],
    startingPosition: { en: "Sit at a table with the forearm resting on it, palm down, and the hand over the edge.", ur: "میز پر بیٹھیں، بازو میز پر رکھیں، ہتھیلی نیچے اور ہاتھ کنارے سے باہر۔" },
    quickSteps: {
      en: [
        "Rest the forearm on a table, palm down, hand over the edge.",
        "Press the back of the hand up against your other hand.",
        "Hold 5 seconds, then release.",
      ],
      ur: [
        "بازو میز پر رکھیں، ہتھیلی نیچے، ہاتھ کنارے سے باہر۔",
        "ہاتھ کی پشت دوسرے ہاتھ کے خلاف اوپر دبائیں۔",
        "پانچ سیکنڈ رکیں، پھر چھوڑ دیں۔",
      ],
    },
    steps: {
      en: [
        "Rest the forearm flat on a table with the palm facing down.",
        "Let the hand hang just over the edge, wrist level with the table.",
        "Place the other hand on top of the back of that hand.",
        "Press the hand upwards while the top hand stops it moving.",
        "Hold at about half effort, then release slowly.",
      ],
      ur: [
        "بازو میز پر سیدھا رکھیں، ہتھیلی نیچے کی طرف۔",
        "ہاتھ کنارے سے ذرا باہر لٹکائیں، کلائی میز کے برابر۔",
        "دوسرا ہاتھ اُس ہاتھ کی پشت پر رکھیں۔",
        "ہاتھ اوپر دبائیں جبکہ اوپر والا ہاتھ اسے ہلنے نہ دے۔",
        "تقریباً آدھی طاقت پر رکیں، پھر آہستہ چھوڑیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "A small ache at the outer elbow during the hold is expected and acceptable.",
        "Stop if the pain rises above four out of ten or lasts into the next day.",
        "This comes before the eccentric work, not after it.",
      ],
      ur: [
        "روکنے کے دوران کہنی کے باہر ہلکا درد متوقع اور قابل قبول ہے۔",
        "درد دس میں سے چار سے بڑھ جائے یا اگلے دن تک رہے تو رک جائیں۔",
        "یہ ایکسنٹرک ورزش سے پہلے آتی ہے، بعد میں نہیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting the joint actually move.",
        "Pushing at full strength straight away.",
        "Holding the breath.",
        "Tensing the neck and jaw.",
      ],
      ur: [
        "جوڑ کا واقعی ہل جانا۔",
        "شروع میں ہی پوری طاقت لگا دینا۔",
        "سانس روکنا۔",
        "گردن اور جبڑا سخت کر لینا۔",
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
    repetitions: "5 each side",
    sets: "3",
    holdTime: "5 seconds",
    frequency: "Daily",
    restBetweenSets: "20 seconds",
    progressions: ["eccentric-wrist-extension"],
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
      rationale: "Isometric wrist extensor loading is a first-line step in lateral epicondylalgia. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ shoulderNear: 150, elbowNear: 82 }, SEATED), travel: 800, hold: 400, label: "Forearm on the table, palm down" },
        { pose: pose({ shoulderNear: 148, elbowNear: 86, shoulderFar: 132, elbowFar: 96 }, SEATED), travel: 1000, hold: 900, label: "Press the hand up and hold" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-H-019",
    slug: "isometric-hip-abduction-wall",
    name: { en: "Isometric Hip Abduction against a Wall", ur: "دیوار کے سہارے کولہے کی ساکن ورزش" },
    bodyRegion: "Pelvis & Hip",
    joint: ["Hip"],
    musclesTargeted: ["Gluteus medius", "Gluteus minimus", "Tensor fasciae latae"],
    conditions: ["Lateral hip pain", "Gluteal tendinopathy", "Trendelenburg gait", "Hip weakness"],
    purpose: { en: "Loads the side of the hip with no movement, which is exactly what an irritable gluteal tendon will tolerate first.", ur: "بغیر حرکت کولہے کے پہلو پر بوجھ ڈالتی ہے، اور یہی وہ چیز ہے جو حساس گلوٹیل ٹینڈن سب سے پہلے برداشت کرتا ہے۔" },
    exerciseType: "Strengthening",
    difficulty: "Beginner",
    contraction: ["Isometric"],
    mode: "Resisted",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["Wall"],
    startingPosition: { en: "Stand side-on to a wall, close enough that the outside of the near knee touches it.", ur: "دیوار کے پہلو میں اتنا قریب کھڑے ہوں کہ قریبی گھٹنے کا باہر والا حصہ دیوار کو چھوئے۔" },
    quickSteps: {
      en: [
        "Stand side-on to a wall with the near knee touching it.",
        "Press the knee outwards into the wall.",
        "Hold 5 seconds, then swap sides.",
      ],
      ur: [
        "دیوار کے پہلو میں کھڑے ہوں، قریبی گھٹنا دیوار سے لگا ہو۔",
        "گھٹنا دیوار میں باہر کی طرف دبائیں۔",
        "پانچ سیکنڈ رکیں، پھر طرف بدلیں۔",
      ],
    },
    steps: {
      en: [
        "Stand upright with one side towards the wall, feet hip-width apart.",
        "Bend the knee nearest the wall slightly and rest its outer side against the wall.",
        "Take your weight onto the far leg.",
        "Press the near knee sideways into the wall, feeling the buttock of the standing leg work.",
        "Hold at about half effort, then ease off and change sides.",
      ],
      ur: [
        "سیدھے کھڑے ہوں، ایک پہلو دیوار کی طرف، پاؤں کولہوں کے برابر فاصلے پر۔",
        "دیوار والا گھٹنا ہلکا موڑیں اور اُس کا باہر والا حصہ دیوار سے لگائیں۔",
        "وزن دور والی ٹانگ پر لے جائیں۔",
        "قریبی گھٹنا دیوار میں پہلو کی طرف دبائیں، کھڑی ٹانگ کے کولہے میں زور محسوس کریں۔",
        "تقریباً آدھی طاقت پر رکیں، پھر زور کم کر کے طرف بدلیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "The muscle being worked is on the standing leg, not the pushing one.",
        "Keep the pelvis level — do not let the hip drop.",
        "This suits a painful gluteal tendon better than side-lying lifts.",
      ],
      ur: [
        "جس پٹھے پر کام ہو رہا ہے وہ کھڑی ٹانگ کا ہے، دبانے والی کا نہیں۔",
        "پیڑو برابر رکھیں — کولہا جھکنے نہ دیں۔",
        "دُکھتے گلوٹیل ٹینڈن کے لیے یہ پہلو پر لیٹ کر ٹانگ اٹھانے سے بہتر ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting the joint actually move.",
        "Pushing at full strength straight away.",
        "Holding the breath.",
        "Tensing the neck and jaw.",
      ],
      ur: [
        "جوڑ کا واقعی ہل جانا۔",
        "شروع میں ہی پوری طاقت لگا دینا۔",
        "سانس روکنا۔",
        "گردن اور جبڑا سخت کر لینا۔",
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
    repetitions: "5 each side",
    sets: "3",
    holdTime: "5 seconds",
    frequency: "Daily",
    restBetweenSets: "20 seconds",
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
      rationale: "Isometric abduction loading is used first-line in gluteal tendinopathy. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: STAND, travel: 800, hold: 400, label: "Standing side-on to the wall" },
        { pose: pose({ hipRotNear: -12, hipNear: 8, kneeNear: 22, shoulderNear: 168, elbowNear: 26 }, STAND), travel: 1000, hold: 900, label: "Press the knee outwards and hold" },
      ],
      props: [{ kind: "wall" }],
    },
  },
  {
    id: "EX-H-020",
    slug: "isometric-hip-adduction-ball",
    name: { en: "Isometric Hip Adduction with a Ball", ur: "گیند دبا کر کولہے کی ساکن ورزش" },
    bodyRegion: "Pelvis & Hip",
    joint: ["Hip"],
    musclesTargeted: ["Adductor longus", "Adductor magnus", "Gracilis", "Pectineus"],
    conditions: ["Groin strain", "Adductor-related groin pain", "Post-partum recovery", "Return to sport"],
    purpose: { en: "Squeezing a ball between the knees is the standard first load for a strained groin, and it can be graded simply by how hard you squeeze.", ur: "گھٹنوں کے درمیان گیند دبانا کھنچے ہوئے گرائن کے لیے پہلا معیاری بوجھ ہے، اور اس کی شدت صرف دبانے کے زور سے بڑھائی جا سکتی ہے۔" },
    exerciseType: "Strengthening",
    difficulty: "Beginner",
    contraction: ["Isometric"],
    mode: "Resisted",
    load: "Bodyweight",
    position: "Supine",
    equipment: ["Exercise mat", "Soft ball or rolled towel"],
    startingPosition: { en: "Lie on your back with the knees bent, feet flat, and a soft ball held between the knees.", ur: "سیدھے لیٹ جائیں، گھٹنے مڑے، پاؤں زمین پر اور گھٹنوں کے درمیان نرم گیند رکھی ہو۔" },
    quickSteps: {
      en: [
        "Lie on your back with a ball between your knees.",
        "Squeeze the ball and hold.",
        "Hold 5 seconds, then relax completely.",
      ],
      ur: [
        "سیدھے لیٹ جائیں، گھٹنوں کے درمیان گیند رکھیں۔",
        "گیند دبائیں اور روکیں۔",
        "پانچ سیکنڈ رکیں، پھر پوری طرح ڈھیلا چھوڑیں۔",
      ],
    },
    steps: {
      en: [
        "Lie on your back with the knees bent and the feet flat on the floor.",
        "Place a soft ball or a rolled towel between the knees.",
        "Squeeze the knees together, building the pressure over two seconds.",
        "Hold at about half your maximum squeeze, keeping the buttocks relaxed.",
        "Let go slowly and rest before the next repetition.",
      ],
      ur: [
        "سیدھے لیٹ جائیں، گھٹنے مڑے اور پاؤں فرش پر۔",
        "گھٹنوں کے درمیان نرم گیند یا لپٹا تولیہ رکھیں۔",
        "گھٹنے آپس میں دبائیں، دباؤ دو سیکنڈ میں بڑھائیں۔",
        "زیادہ سے زیادہ زور کے تقریباً آدھے پر رکیں، کولہے ڈھیلے رکھیں۔",
        "آہستہ چھوڑیں اور اگلی بار سے پہلے آرام کریں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Start at about half effort — a fresh groin strain will not take more.",
        "The low back stays flat; do not let it arch as you squeeze.",
        "Move to a straight-leg squeeze once this is painless.",
      ],
      ur: [
        "تقریباً آدھی طاقت سے شروع کریں — تازہ گرائن کھنچاؤ اس سے زیادہ برداشت نہیں کرے گا۔",
        "کمر سیدھی رہے؛ دباتے وقت اسے محراب نہ بننے دیں۔",
        "درد ختم ہو جائے تو ٹانگیں سیدھی کر کے دبانے پر جائیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting the joint actually move.",
        "Pushing at full strength straight away.",
        "Holding the breath.",
        "Tensing the neck and jaw.",
      ],
      ur: [
        "جوڑ کا واقعی ہل جانا۔",
        "شروع میں ہی پوری طاقت لگا دینا۔",
        "سانس روکنا۔",
        "گردن اور جبڑا سخت کر لینا۔",
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
    holdTime: "5 seconds",
    frequency: "Daily",
    restBetweenSets: "20 seconds",
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
      rationale: "Isometric adductor squeezes are a standard first load in adductor-related groin pain. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ hipRotNear: 6, hipRotFar: 6 }, SUPINE), travel: 800, hold: 400, label: "Ball held between the knees" },
        { pose: pose({ hipRotNear: 0, hipRotFar: 0 }, SUPINE), travel: 1000, hold: 900, label: "Squeeze and hold" },
      ],
      props: [{ kind: "mat" }, { kind: "ballBetweenKnees" }],
    },
  },
  {
    id: "EX-K-013",
    slug: "isometric-knee-extension-multiangle",
    name: { en: "Multi-Angle Isometric Knee Extension", ur: "مختلف زاویوں پر گھٹنے کی ساکن ورزش" },
    bodyRegion: "Knee",
    joint: ["Tibiofemoral", "Patellofemoral"],
    musclesTargeted: ["Quadriceps femoris", "Vastus medialis obliquus"],
    conditions: ["Patellofemoral pain", "Post-knee-surgery rehabilitation", "Quadriceps weakness", "Osteoarthritis of the knee"],
    purpose: { en: "Strength gained in an isometric hold stays close to the angle you trained, so this works the knee at three angles instead of one.", ur: "ساکن ورزش سے حاصل طاقت اُسی زاویے کے قریب رہتی ہے جس پر مشق کی جائے، اس لیے یہ گھٹنے کو ایک کے بجائے تین زاویوں پر مضبوط کرتی ہے۔" },
    exerciseType: "Strengthening",
    difficulty: "Intermediate",
    contraction: ["Isometric"],
    mode: "Resisted",
    load: "Bodyweight",
    position: "Sitting",
    equipment: ["Chair"],
    startingPosition: { en: "Sit tall on a firm chair with the knee bent and the heel pressed back against a chair leg.", ur: "مضبوط کرسی پر سیدھے بیٹھیں، گھٹنا مڑا اور ایڑی کرسی کی ٹانگ سے پیچھے دبی ہوئی۔" },
    quickSteps: {
      en: [
        "Sit tall and press the heel back against the chair leg.",
        "Hold 5 seconds at that angle.",
        "Repeat with the knee straighter, then straighter again.",
      ],
      ur: [
        "سیدھے بیٹھیں اور ایڑی کرسی کی ٹانگ سے پیچھے دبائیں۔",
        "اُس زاویے پر پانچ سیکنڈ رکیں۔",
        "پھر گھٹنا زیادہ سیدھا کر کے دہرائیں، اور پھر اور زیادہ سیدھا۔",
      ],
    },
    steps: {
      en: [
        "Sit well back with the thigh fully supported by the chair.",
        "Start with the knee bent to about ninety degrees, heel against the chair leg.",
        "Press the heel backwards, tightening the front of the thigh, and hold.",
        "Move the foot forward so the knee is about half straight and repeat the hold.",
        "Finally straighten the knee almost fully and hold once more.",
      ],
      ur: [
        "اچھی طرح پیچھے بیٹھیں تاکہ ران کو کرسی کا پورا سہارا ملے۔",
        "گھٹنا تقریباً نوے درجے مڑا رکھ کر شروع کریں، ایڑی کرسی کی ٹانگ سے لگی ہو۔",
        "ایڑی پیچھے دبائیں، ران کا اگلا حصہ سخت کریں اور روکیں۔",
        "پاؤں آگے کریں تاکہ گھٹنا آدھا سیدھا ہو اور یہی دہرائیں۔",
        "آخر میں گھٹنا تقریباً پوری طرح سیدھا کر کے ایک بار پھر روکیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Three angles, because strength does not carry far from where it is trained.",
        "If one angle hurts, skip that one and work the other two.",
        "The kneecap should not grind — stop if it does.",
      ],
      ur: [
        "تین زاویے، کیونکہ طاقت مشق کے زاویے سے دور تک نہیں جاتی۔",
        "کسی ایک زاویے پر درد ہو تو اسے چھوڑ کر باقی دو پر کام کریں۔",
        "گھٹنے کی ٹوپی میں رگڑ نہیں ہونی چاہیے — ہو تو رک جائیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting the joint actually move.",
        "Pushing at full strength straight away.",
        "Holding the breath.",
        "Tensing the neck and jaw.",
      ],
      ur: [
        "جوڑ کا واقعی ہل جانا۔",
        "شروع میں ہی پوری طاقت لگا دینا۔",
        "سانس روکنا۔",
        "گردن اور جبڑا سخت کر لینا۔",
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
    repetitions: "5 at each angle",
    sets: "2",
    holdTime: "5 seconds",
    frequency: "Daily",
    restBetweenSets: "20 seconds",
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
      rationale: "Multi-angle isometric quadriceps training reflects the angle specificity of isometric gains. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ kneeNear: 84 }, SEATED), travel: 800, hold: 400, label: "Knee bent, heel against the chair" },
        { pose: pose({ kneeNear: 30, ankleNear: 0 }, SEATED), travel: 1000, hold: 900, label: "Straighten and hold at each angle" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-A-011",
    slug: "isometric-ankle-eversion",
    name: { en: "Isometric Ankle Eversion", ur: "ٹخنے کی ساکن ورزش — باہر کی طرف" },
    bodyRegion: "Ankle & Foot",
    joint: ["Talocrural", "Subtalar"],
    musclesTargeted: ["Peroneus longus", "Peroneus brevis"],
    conditions: ["Ankle sprain recovery", "Ankle instability", "Peroneal weakness", "Recurrent rolling of the ankle"],
    purpose: { en: "Loads the muscles down the outside of the shin — the ones that stop the ankle rolling over, and the first to be trained after a sprain.", ur: "پنڈلی کے باہر کی طرف کے پٹھوں پر بوجھ ڈالتی ہے — وہی جو ٹخنے کو لڑھکنے سے روکتے ہیں، اور موچ کے بعد سب سے پہلے مضبوط کیے جاتے ہیں۔" },
    exerciseType: "Strengthening",
    difficulty: "Beginner",
    contraction: ["Isometric"],
    mode: "Resisted",
    load: "Bodyweight",
    position: "Sitting",
    equipment: ["Chair", "Wall or table leg"],
    startingPosition: { en: "Sit tall with the outside of the foot resting against a wall or the leg of a heavy table.", ur: "سیدھے بیٹھیں، پاؤں کا باہر والا حصہ دیوار یا بھاری میز کی ٹانگ سے لگا ہو۔" },
    quickSteps: {
      en: [
        "Rest the outside of the foot against a wall.",
        "Press the foot outwards without moving.",
        "Hold 5 seconds, then release.",
      ],
      ur: [
        "پاؤں کا باہر والا حصہ دیوار سے لگائیں۔",
        "پاؤں باہر کی طرف دبائیں مگر حرکت نہ ہو۔",
        "پانچ سیکنڈ رکیں، پھر چھوڑ دیں۔",
      ],
    },
    steps: {
      en: [
        "Sit with the foot flat and the outer edge against a wall or table leg.",
        "Keep the knee pointing straight ahead — the movement is at the ankle only.",
        "Press the outer edge of the foot outwards into the wall.",
        "Build to about half effort and hold, without letting the knee swing out.",
        "Ease off slowly and rest.",
      ],
      ur: [
        "پاؤں فرش پر رکھ کر بیٹھیں، باہر والا کنارہ دیوار یا میز کی ٹانگ سے لگا ہو۔",
        "گھٹنا بالکل سامنے رکھیں — حرکت صرف ٹخنے پر ہے۔",
        "پاؤں کا باہر والا کنارہ دیوار میں باہر دبائیں۔",
        "تقریباً آدھی طاقت تک بڑھائیں اور روکیں، گھٹنا باہر نہ جانے دیں۔",
        "آہستہ زور کم کریں اور آرام کریں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Watch the knee — it turning outwards means the hip is doing the work.",
        "This is the key muscle group after an inversion sprain.",
        "Progress to a resistance band once five seconds is easy.",
      ],
      ur: [
        "گھٹنے پر نظر رکھیں — اُس کا باہر گھومنا مطلب کام کولہا کر رہا ہے۔",
        "اندر کی طرف موچ کے بعد یہی سب سے اہم پٹھے ہیں۔",
        "پانچ سیکنڈ آسان ہو جائے تو ربڑ بینڈ پر جائیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting the joint actually move.",
        "Pushing at full strength straight away.",
        "Holding the breath.",
        "Tensing the neck and jaw.",
      ],
      ur: [
        "جوڑ کا واقعی ہل جانا۔",
        "شروع میں ہی پوری طاقت لگا دینا۔",
        "سانس روکنا۔",
        "گردن اور جبڑا سخت کر لینا۔",
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
    repetitions: "5 each side",
    sets: "3",
    holdTime: "5 seconds",
    frequency: "Daily",
    restBetweenSets: "20 seconds",
    progressions: ["band-ankle-eversion"],
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
      rationale: "Isometric peroneal loading is a standard early step after lateral ankle sprain. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ ankleNear: 2 }, SEATED), travel: 800, hold: 400, label: "Outer foot against the wall" },
        { pose: pose({ ankleNear: 2, hipRotNear: -8 }, SEATED), travel: 1000, hold: 900, label: "Press outwards and hold" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-A-012",
    slug: "isometric-ankle-inversion",
    name: { en: "Isometric Ankle Inversion", ur: "ٹخنے کی ساکن ورزش — اندر کی طرف" },
    bodyRegion: "Ankle & Foot",
    joint: ["Talocrural", "Subtalar"],
    musclesTargeted: ["Tibialis posterior", "Tibialis anterior", "Flexor digitorum longus"],
    conditions: ["Flat foot", "Tibialis posterior dysfunction", "Ankle instability", "Medial arch pain"],
    purpose: { en: "Loads the muscle that holds up the arch of the foot, whose weakness is the usual cause of a foot flattening in adulthood.", ur: "اُس پٹھے پر بوجھ ڈالتی ہے جو پاؤں کی محراب کو تھامتا ہے، اور جس کی کمزوری بڑی عمر میں پاؤں چپٹا ہونے کی عام وجہ ہے۔" },
    exerciseType: "Strengthening",
    difficulty: "Beginner",
    contraction: ["Isometric"],
    mode: "Resisted",
    load: "Bodyweight",
    position: "Sitting",
    equipment: ["Chair", "Wall or table leg"],
    startingPosition: { en: "Sit tall with the inner edge of the foot resting against a wall or a heavy table leg.", ur: "سیدھے بیٹھیں، پاؤں کا اندرونی کنارہ دیوار یا بھاری میز کی ٹانگ سے لگا ہو۔" },
    quickSteps: {
      en: [
        "Rest the inner edge of the foot against a wall.",
        "Press the foot inwards without moving.",
        "Hold 5 seconds, then release.",
      ],
      ur: [
        "پاؤں کا اندرونی کنارہ دیوار سے لگائیں۔",
        "پاؤں اندر کی طرف دبائیں مگر حرکت نہ ہو۔",
        "پانچ سیکنڈ رکیں، پھر چھوڑ دیں۔",
      ],
    },
    steps: {
      en: [
        "Sit with the foot flat and the inner edge against a wall or table leg.",
        "Keep the knee pointing straight ahead throughout.",
        "Press the inner edge of the foot inwards, as if trying to lift the arch.",
        "Build to about half effort and hold.",
        "Ease off slowly and rest before repeating.",
      ],
      ur: [
        "پاؤں فرش پر رکھ کر بیٹھیں، اندرونی کنارہ دیوار یا میز کی ٹانگ سے لگا ہو۔",
        "پوری ورزش میں گھٹنا بالکل سامنے رکھیں۔",
        "پاؤں کا اندرونی کنارہ اندر کی طرف دبائیں، جیسے محراب اٹھانا ہو۔",
        "تقریباً آدھی طاقت تک بڑھائیں اور روکیں۔",
        "آہستہ زور کم کریں اور دہرانے سے پہلے آرام کریں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Think of lifting the arch rather than pushing the foot.",
        "The knee must not rotate inwards — that is the hip cheating.",
        "This is the muscle that fails in an adult flat foot.",
      ],
      ur: [
        "پاؤں دھکیلنے کے بجائے محراب اٹھانے کا تصور کریں۔",
        "گھٹنا اندر کی طرف نہ گھومے — یہ کولہے کی چوری ہے۔",
        "بڑی عمر کے چپٹے پاؤں میں یہی پٹھا کمزور ہوتا ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting the joint actually move.",
        "Pushing at full strength straight away.",
        "Holding the breath.",
        "Tensing the neck and jaw.",
      ],
      ur: [
        "جوڑ کا واقعی ہل جانا۔",
        "شروع میں ہی پوری طاقت لگا دینا۔",
        "سانس روکنا۔",
        "گردن اور جبڑا سخت کر لینا۔",
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
    repetitions: "5 each side",
    sets: "3",
    holdTime: "5 seconds",
    frequency: "Daily",
    restBetweenSets: "20 seconds",
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
      rationale: "Isometric tibialis posterior loading is used in stage-one posterior tibial tendon dysfunction. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ ankleNear: 2 }, SEATED), travel: 800, hold: 400, label: "Inner foot against the wall" },
        { pose: pose({ ankleNear: 2, hipRotNear: 8 }, SEATED), travel: 1000, hold: 900, label: "Press inwards and hold" },
      ],
      props: [{ kind: "chair" }],
    },
  },
];
