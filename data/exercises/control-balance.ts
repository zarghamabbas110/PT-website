import { pose } from "@/lib/figure";
import type { Exercise } from "../schema";
import { PRONE, QUADRUPED, SEATED, SIDE_LYING, STAND, SUPINE, SUPINE_LONG } from "./bases";

/* ==========================================================================
   CONTROL, BALANCE, FUNCTION, NERVES AND BREATHING
   --------------------------------------------------------------------------
   The work that is not about strength or range: teaching a muscle to switch
   on, holding a position while something else moves, standing on a narrower
   base, the everyday tasks people are actually trying to get back to,
   sliding an irritated nerve, and slowing the breath.
   Drafts pending clinical review.
   ========================================================================== */

export const CONTROL_BALANCE: Exercise[] = [
  {
    id: "EX-CO-009",
    slug: "transversus-abdominis-supine",
    name: { en: "Deep Abdominal Setting", ur: "پیٹ کے گہرے پٹھے کو سخت کرنا" },
    bodyRegion: "Core",
    joint: ["Lumbar spine L1–L5"],
    musclesTargeted: ["Transversus abdominis", "Pelvic floor", "Multifidus"],
    conditions: ["Low back pain", "Post-partum recovery", "Core weakness", "Poor trunk control"],
    purpose: { en: "Teaches the deep corset muscle to switch on by itself, which is the first thing to learn before any harder core work.", ur: "پیٹ کے گہرے کمربند نما پٹھے کو خود سے فعال ہونا سکھاتی ہے، جو کسی بھی مشکل ورزش سے پہلے پہلا سبق ہے۔" },
    exerciseType: "Stabilisation & motor control",
    difficulty: "Beginner",
    contraction: ["Isometric"],
    mode: "Active",
    load: "No load",
    position: "Supine",
    equipment: ["Exercise mat"],
    startingPosition: { en: "Lie on your back with the knees bent, feet flat, and your fingertips resting just inside the front hip bones.", ur: "سیدھے لیٹ جائیں، گھٹنے مڑے، پاؤں فرش پر اور انگلیاں کولہے کی اگلی ہڈیوں کے ذرا اندر رکھیں۔" },
    quickSteps: {
      en: [
        "Lie on your back with the knees bent.",
        "Draw the lower stomach gently in, as if doing up a tight button.",
        "Hold 10 seconds while breathing normally.",
      ],
      ur: [
        "سیدھے لیٹ جائیں، گھٹنے مڑے۔",
        "پیٹ کا نچلا حصہ نرمی سے اندر کھینچیں، جیسے تنگ بٹن بند کر رہے ہوں۔",
        "دس سیکنڈ رکیں اور عام سانس لیتے رہیں۔",
      ],
    },
    steps: {
      en: [
        "Lie on your back with the knees bent and the low back in its natural position.",
        "Place your fingertips just inside the bony points at the front of the pelvis.",
        "Breathe out, then draw the lower stomach gently away from your fingers.",
        "The effort is about two out of ten — you should feel a light tightening, not a hard one.",
        "Hold for ten seconds while breathing normally, then let go completely.",
      ],
      ur: [
        "سیدھے لیٹ جائیں، گھٹنے مڑے اور کمر اپنی قدرتی حالت میں۔",
        "انگلیوں کے پورے پیڑو کی اگلی ہڈیوں کے ذرا اندر رکھیں۔",
        "سانس چھوڑیں، پھر پیٹ کا نچلا حصہ نرمی سے انگلیوں سے دور کھینچیں۔",
        "زور دس میں سے تقریباً دو ہو — ہلکی سختی محسوس ہو، سخت نہیں۔",
        "عام سانس لیتے ہوئے دس سیکنڈ رکیں، پھر پوری طرح چھوڑ دیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Gentle is correct — a hard squeeze uses the wrong muscles.",
        "If the stomach domes up or the breath stops, ease right off.",
        "Everything else in the core programme is built on this one.",
      ],
      ur: [
        "نرمی درست ہے — زور سے دبانے پر غلط پٹھے کام کرتے ہیں۔",
        "پیٹ اوپر ابھرے یا سانس رک جائے تو زور بہت کم کر دیں۔",
        "پیٹ کے پروگرام کی ہر ورزش اسی پر بنی ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Holding the breath.",
        "Letting the low back arch or the hips tip.",
        "Going faster as you tire.",
        "Chasing repetitions instead of position.",
      ],
      ur: [
        "سانس روکنا۔",
        "کمر کا محراب بننا یا کولہوں کا ٹیڑھا ہو جانا۔",
        "تھکنے پر تیز ہو جانا۔",
        "حالت کے بجائے گنتی کے پیچھے بھاگنا۔",
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
    repetitions: "10",
    sets: "2",
    holdTime: "10 seconds",
    frequency: "Daily",
    restBetweenSets: "30 seconds",
    progressions: ["abdominal-bracing"],
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
      rationale: "Transversus abdominis setting is a standard first step in motor control programmes. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ shoulderNear: 160, elbowNear: 70, shoulderFar: 160, elbowFar: 70 }, SUPINE), travel: 800, hold: 400, label: "Lying with the fingers on the pelvis" },
        { pose: pose({ shoulderNear: 158, elbowNear: 74, shoulderFar: 158, elbowFar: 74, lumbar: 3 }, SUPINE), travel: 1000, hold: 900, label: "Draw the lower stomach in" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-CO-010",
    slug: "pelvic-floor-activation",
    name: { en: "Pelvic Floor Squeeze", ur: "پیڑو کے نچلے پٹھوں کی ورزش" },
    bodyRegion: "Core",
    joint: ["Sacroiliac", "Lumbar spine L1–L5"],
    musclesTargeted: ["Pelvic floor", "Transversus abdominis"],
    conditions: ["Post-partum recovery", "Stress incontinence", "Low back pain", "Pelvic girdle pain"],
    purpose: { en: "Strengthens the sling of muscle at the base of the pelvis, which supports the bladder and works together with the deep abdominal muscle.", ur: "پیڑو کی تہہ میں موجود پٹھوں کے جھولے کو مضبوط کرتی ہے، جو مثانے کو سہارا دیتا ہے اور پیٹ کے گہرے پٹھے کے ساتھ مل کر کام کرتا ہے۔" },
    exerciseType: "Stabilisation & motor control",
    difficulty: "Beginner",
    contraction: ["Isometric", "Concentric"],
    mode: "Active",
    load: "No load",
    position: "Supine",
    equipment: ["Exercise mat"],
    startingPosition: { en: "Lie on your back with the knees bent and the feet flat, or sit comfortably if you prefer.", ur: "سیدھے لیٹ جائیں، گھٹنے مڑے اور پاؤں فرش پر، یا آرام سے بیٹھ جائیں اگر یہ بہتر لگے۔" },
    quickSteps: {
      en: [
        "Lie or sit comfortably with the knees bent.",
        "Squeeze and lift the muscles you would use to stop passing wind.",
        "Hold 5 seconds, then let go fully for 10.",
      ],
      ur: [
        "آرام سے لیٹیں یا بیٹھیں، گھٹنے مڑے ہوں۔",
        "وہ پٹھے دبائیں اور اوپر اٹھائیں جو ہوا روکنے کے لیے استعمال ہوتے ہیں۔",
        "پانچ سیکنڈ رکیں، پھر دس سیکنڈ پوری طرح ڈھیلا چھوڑیں۔",
      ],
    },
    steps: {
      en: [
        "Settle in a comfortable position and breathe out.",
        "Squeeze and lift the muscles around the back passage, as if stopping wind.",
        "Then draw the same feeling forward towards the front passage.",
        "Hold for five seconds while breathing normally.",
        "Let go completely and rest for ten seconds before the next one.",
      ],
      ur: [
        "آرام دہ حالت میں آ جائیں اور سانس چھوڑیں۔",
        "پچھلے راستے کے گرد کے پٹھے دبائیں اور اوپر اٹھائیں، جیسے ہوا روک رہے ہوں۔",
        "پھر یہی احساس آگے کی طرف بھی لے جائیں۔",
        "عام سانس لیتے ہوئے پانچ سیکنڈ رکیں۔",
        "پوری طرح چھوڑ دیں اور اگلی بار سے پہلے دس سیکنڈ آرام کریں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Letting go fully between repetitions is as important as the squeeze.",
        "Do not squeeze the buttocks or thighs, and do not hold the breath.",
        "Never practise by stopping the flow of urine — that can cause problems.",
      ],
      ur: [
        "دو بار کے درمیان پوری طرح چھوڑنا دبانے جتنا ہی اہم ہے۔",
        "کولہے یا رانیں نہ دبائیں، اور سانس نہ روکیں۔",
        "پیشاب روک کر مشق کبھی نہ کریں — اس سے مسائل پیدا ہو سکتے ہیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Holding the breath.",
        "Letting the low back arch or the hips tip.",
        "Going faster as you tire.",
        "Chasing repetitions instead of position.",
      ],
      ur: [
        "سانس روکنا۔",
        "کمر کا محراب بننا یا کولہوں کا ٹیڑھا ہو جانا۔",
        "تھکنے پر تیز ہو جانا۔",
        "حالت کے بجائے گنتی کے پیچھے بھاگنا۔",
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
    repetitions: "10",
    sets: "3",
    holdTime: "5 seconds",
    frequency: "3 times daily",
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
      rationale: "Pelvic floor muscle training is standard for stress incontinence and post-partum recovery. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: SUPINE, travel: 800, hold: 400, label: "Lying with the knees bent" },
        { pose: pose({ lumbar: 3 }, SUPINE), travel: 1000, hold: 900, label: "Squeeze and lift, then let go" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-CO-011",
    slug: "quadruped-arm-lift",
    name: { en: "All-Fours Arm Reach", ur: "چاروں ہاتھ پاؤں پر ایک ہاتھ اٹھانا" },
    bodyRegion: "Core",
    joint: ["Lumbar spine L1–L5", "Scapulothoracic"],
    musclesTargeted: ["Multifidus", "Transversus abdominis", "Lower trapezius", "Serratus anterior"],
    conditions: ["Low back pain", "Core weakness", "Scapular weakness", "Poor trunk control"],
    purpose: { en: "Half of a bird dog: the arm only. Learning to keep the trunk still while one limb moves, before trying two.", ur: "برڈ ڈاگ کا آدھا حصہ: صرف بازو۔ دو اعضاء سے پہلے ایک عضو کی حرکت میں دھڑ ساکن رکھنا سیکھنا۔" },
    exerciseType: "Stabilisation & motor control",
    difficulty: "Beginner",
    contraction: ["Isometric", "Concentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Quadruped",
    equipment: ["Exercise mat"],
    startingPosition: { en: "Kneel on all fours with the hands under the shoulders, the knees under the hips and the back flat.", ur: "چاروں ہاتھ پاؤں پر آئیں، ہاتھ کندھوں کے نیچے، گھٹنے کولہوں کے نیچے اور کمر سیدھی۔" },
    quickSteps: {
      en: [
        "Kneel on all fours with a flat back.",
        "Reach one arm straight forward to shoulder height.",
        "Hold 5 seconds, lower, then swap arms.",
      ],
      ur: [
        "چاروں ہاتھ پاؤں پر آئیں، کمر سیدھی۔",
        "ایک بازو کندھے کی اونچائی پر سیدھا آگے بڑھائیں۔",
        "پانچ سیکنڈ رکیں، نیچے لائیں، پھر بازو بدلیں۔",
      ],
    },
    steps: {
      en: [
        "Set the back flat and tighten the lower stomach gently.",
        "Take the weight onto the other three points before you lift.",
        "Reach one arm straight forward to shoulder height, thumb pointing up.",
        "Keep the hips level — imagine a glass of water balanced on the low back.",
        "Lower under control and change arms.",
      ],
      ur: [
        "کمر سیدھی کریں اور پیٹ کا نچلا حصہ ہلکا سخت کریں۔",
        "اٹھانے سے پہلے وزن باقی تین نقطوں پر لے جائیں۔",
        "ایک بازو کندھے کی اونچائی پر سیدھا آگے بڑھائیں، انگوٹھا اوپر۔",
        "کولہے برابر رکھیں — تصور کریں کمر پر پانی کا گلاس رکھا ہے۔",
        "قابو سے نیچے لائیں اور بازو بدلیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Quality first: stop the set the moment the position slips, not when you run out of repetitions.",
        "Keep breathing normally — bracing by holding the breath teaches the wrong pattern.",
        "Slow is harder than fast here, and slow is the point.",
      ],
      ur: [
        "معیار پہلے: حالت بگڑتے ہی سیٹ ختم کریں، گنتی پوری ہونے پر نہیں۔",
        "عام سانس لیتے رہیں — سانس روک کر سختی کرنا غلط عادت سکھاتا ہے۔",
        "یہاں آہستہ کرنا تیز سے مشکل ہے، اور آہستہ کرنا ہی اصل مقصد ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Holding the breath.",
        "Letting the low back arch or the hips tip.",
        "Going faster as you tire.",
        "Chasing repetitions instead of position.",
      ],
      ur: [
        "سانس روکنا۔",
        "کمر کا محراب بننا یا کولہوں کا ٹیڑھا ہو جانا۔",
        "تھکنے پر تیز ہو جانا۔",
        "حالت کے بجائے گنتی کے پیچھے بھاگنا۔",
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
    holdTime: "5 seconds",
    frequency: "Every other day",
    restBetweenSets: "30 seconds",
    progressions: ["bird-dog"],
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
      rationale: "Single-limb quadruped work precedes the full bird dog. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: QUADRUPED, travel: 800, hold: 400, label: "All fours, back flat" },
        { pose: pose({ shoulderNear: 178, elbowNear: 4 }, QUADRUPED), travel: 1000, hold: 900, label: "Reach one arm forward" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-CO-012",
    slug: "quadruped-leg-lift",
    name: { en: "All-Fours Leg Reach", ur: "چاروں ہاتھ پاؤں پر ایک ٹانگ اٹھانا" },
    bodyRegion: "Core",
    joint: ["Lumbar spine L1–L5", "Hip"],
    musclesTargeted: ["Gluteus maximus", "Multifidus", "Transversus abdominis", "Erector spinae"],
    conditions: ["Low back pain", "Gluteal weakness", "Core weakness", "Poor trunk control"],
    purpose: { en: "The other half of a bird dog: the leg only. Loading the buttock without letting the low back arch to help.", ur: "برڈ ڈاگ کا دوسرا آدھا حصہ: صرف ٹانگ۔ کولہے پر بوجھ ڈالنا بغیر اس کے کہ کمر مدد کے لیے محراب بنے۔" },
    exerciseType: "Stabilisation & motor control",
    difficulty: "Beginner",
    contraction: ["Isometric", "Concentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Quadruped",
    equipment: ["Exercise mat"],
    startingPosition: { en: "Kneel on all fours with the hands under the shoulders and the knees under the hips.", ur: "چاروں ہاتھ پاؤں پر آئیں، ہاتھ کندھوں کے نیچے اور گھٹنے کولہوں کے نیچے۔" },
    quickSteps: {
      en: [
        "Kneel on all fours with a flat back.",
        "Reach one leg straight back to hip height.",
        "Hold 5 seconds, lower, then swap legs.",
      ],
      ur: [
        "چاروں ہاتھ پاؤں پر آئیں، کمر سیدھی۔",
        "ایک ٹانگ کولہے کی اونچائی تک سیدھی پیچھے بڑھائیں۔",
        "پانچ سیکنڈ رکیں، نیچے لائیں، پھر ٹانگ بدلیں۔",
      ],
    },
    steps: {
      en: [
        "Set the back flat and tighten the lower stomach gently.",
        "Slide one foot back along the floor first, then lift it.",
        "Take the leg back to hip height, no higher.",
        "Keep both hips facing the floor — do not let the lifting side roll open.",
        "Lower under control and change legs.",
      ],
      ur: [
        "کمر سیدھی کریں اور پیٹ کا نچلا حصہ ہلکا سخت کریں۔",
        "پہلے ایک پاؤں فرش پر پیچھے پھسلائیں، پھر اٹھائیں۔",
        "ٹانگ کولہے کی اونچائی تک لے جائیں، اس سے اوپر نہیں۔",
        "دونوں کولہے فرش کی طرف رہیں — اٹھانے والی طرف کو کھلنے نہ دیں۔",
        "قابو سے نیچے لائیں اور ٹانگ بدلیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Quality first: stop the set the moment the position slips, not when you run out of repetitions.",
        "Keep breathing normally — bracing by holding the breath teaches the wrong pattern.",
        "Slow is harder than fast here, and slow is the point.",
      ],
      ur: [
        "معیار پہلے: حالت بگڑتے ہی سیٹ ختم کریں، گنتی پوری ہونے پر نہیں۔",
        "عام سانس لیتے رہیں — سانس روک کر سختی کرنا غلط عادت سکھاتا ہے۔",
        "یہاں آہستہ کرنا تیز سے مشکل ہے، اور آہستہ کرنا ہی اصل مقصد ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Holding the breath.",
        "Letting the low back arch or the hips tip.",
        "Going faster as you tire.",
        "Chasing repetitions instead of position.",
      ],
      ur: [
        "سانس روکنا۔",
        "کمر کا محراب بننا یا کولہوں کا ٹیڑھا ہو جانا۔",
        "تھکنے پر تیز ہو جانا۔",
        "حالت کے بجائے گنتی کے پیچھے بھاگنا۔",
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
    holdTime: "5 seconds",
    frequency: "Every other day",
    restBetweenSets: "30 seconds",
    progressions: ["bird-dog"],
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
      rationale: "Single-leg quadruped extension precedes the full bird dog. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: QUADRUPED, travel: 800, hold: 400, label: "All fours, back flat" },
        { pose: pose({ hipNear: 178, kneeNear: 4, ankleNear: 20 }, QUADRUPED), travel: 1000, hold: 900, label: "Reach one leg back" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-CO-013",
    slug: "dead-bug-arms-only",
    name: { en: "Dead Bug — Arms Only", ur: "ڈیڈ بگ — صرف بازو" },
    bodyRegion: "Core",
    joint: ["Lumbar spine L1–L5", "Glenohumeral"],
    musclesTargeted: ["Transversus abdominis", "Rectus abdominis", "Latissimus dorsi"],
    conditions: ["Low back pain", "Core weakness", "Post-partum recovery", "Poor trunk control"],
    purpose: { en: "The easiest version of the dead bug: only the arms move, so the back has very little to resist.", ur: "ڈیڈ بگ کا سب سے آسان انداز: صرف بازو حرکت کرتے ہیں، اس لیے کمر پر بہت کم زور آتا ہے۔" },
    exerciseType: "Stabilisation & motor control",
    difficulty: "Beginner",
    contraction: ["Isometric", "Concentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Supine",
    equipment: ["Exercise mat"],
    startingPosition: { en: "Lie on your back with the knees bent up over the hips and both arms reaching straight up towards the ceiling.", ur: "سیدھے لیٹ جائیں، گھٹنے کولہوں کے اوپر مڑے اور دونوں بازو چھت کی طرف سیدھے اوپر۔" },
    quickSteps: {
      en: [
        "Lie on your back with the knees up and arms reaching to the ceiling.",
        "Lower one arm slowly over your head.",
        "Return it and swap arms.",
      ],
      ur: [
        "سیدھے لیٹ جائیں، گھٹنے اوپر اور بازو چھت کی طرف۔",
        "ایک بازو آہستہ سر کے اوپر نیچے لائیں۔",
        "واپس لائیں اور بازو بدلیں۔",
      ],
    },
    steps: {
      en: [
        "Lie on your back with the knees bent up so they sit over the hips.",
        "Reach both arms straight up towards the ceiling.",
        "Press the low back gently into the floor and keep it there.",
        "Lower one arm slowly back over your head, as far as the back stays flat.",
        "Return it to the ceiling and repeat with the other arm.",
      ],
      ur: [
        "سیدھے لیٹ جائیں، گھٹنے اوپر مڑے ہوں تاکہ وہ کولہوں کے اوپر ہوں۔",
        "دونوں بازو چھت کی طرف سیدھے اوپر کریں۔",
        "کمر نرمی سے فرش پر دبائیں اور وہیں رکھیں۔",
        "ایک بازو آہستہ سر کے اوپر نیچے لائیں، صرف اتنا جتنا کمر سیدھی رہے۔",
        "واپس چھت کی طرف لائیں اور دوسرے بازو سے دہرائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Quality first: stop the set the moment the position slips, not when you run out of repetitions.",
        "Keep breathing normally — bracing by holding the breath teaches the wrong pattern.",
        "Slow is harder than fast here, and slow is the point.",
      ],
      ur: [
        "معیار پہلے: حالت بگڑتے ہی سیٹ ختم کریں، گنتی پوری ہونے پر نہیں۔",
        "عام سانس لیتے رہیں — سانس روک کر سختی کرنا غلط عادت سکھاتا ہے۔",
        "یہاں آہستہ کرنا تیز سے مشکل ہے، اور آہستہ کرنا ہی اصل مقصد ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Holding the breath.",
        "Letting the low back arch or the hips tip.",
        "Going faster as you tire.",
        "Chasing repetitions instead of position.",
      ],
      ur: [
        "سانس روکنا۔",
        "کمر کا محراب بننا یا کولہوں کا ٹیڑھا ہو جانا۔",
        "تھکنے پر تیز ہو جانا۔",
        "حالت کے بجائے گنتی کے پیچھے بھاگنا۔",
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
    repetitions: "10 each side",
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
      rationale: "Arm-only dead bug is the standard regression before adding leg movement. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ hipNear: 90, kneeNear: 90, hipFar: 90, kneeFar: 90, shoulderNear: 90, elbowNear: 4, shoulderFar: 90, elbowFar: 4 }, SUPINE), travel: 800, hold: 400, label: "Knees up, arms to the ceiling" },
        { pose: pose({ hipNear: 90, kneeNear: 90, hipFar: 90, kneeFar: 90, shoulderNear: 20, elbowNear: 4, shoulderFar: 90, elbowFar: 4 }, SUPINE), travel: 1000, hold: 900, label: "Lower one arm overhead" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-H-027",
    slug: "bridge-march",
    name: { en: "Bridge with Marching", ur: "کولہے اٹھا کر باری باری قدم" },
    bodyRegion: "Pelvis & Hip",
    joint: ["Hip", "Lumbar spine L1–L5"],
    musclesTargeted: ["Gluteus maximus", "Hamstrings", "Transversus abdominis", "Gluteus medius"],
    conditions: ["Gluteal weakness", "Low back pain", "Pelvic instability", "Return to running"],
    purpose: { en: "Holding a bridge while lifting one foot at a time, which forces one side of the hip to hold the whole pelvis level.", ur: "کولہے اٹھا کر باری باری ایک پاؤں اٹھانا، جس سے کولہے کی ایک طرف کو پورا پیڑو برابر رکھنا پڑتا ہے۔" },
    exerciseType: "Stabilisation & motor control",
    difficulty: "Intermediate",
    contraction: ["Isometric", "Concentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Supine",
    equipment: ["Exercise mat"],
    startingPosition: { en: "Lie on your back with the knees bent and the feet flat, then lift the hips into a bridge.", ur: "سیدھے لیٹ جائیں، گھٹنے مڑے اور پاؤں فرش پر، پھر کولہے اٹھا کر پُل بنائیں۔" },
    quickSteps: {
      en: [
        "Lift the hips into a bridge and hold.",
        "Lift one foot a few inches off the floor.",
        "Put it down and lift the other, keeping the hips level.",
      ],
      ur: [
        "کولہے اٹھا کر پُل بنائیں اور روکیں۔",
        "ایک پاؤں چند انچ فرش سے اٹھائیں۔",
        "نیچے رکھیں اور دوسرا اٹھائیں، کولہے برابر رکھیں۔",
      ],
    },
    steps: {
      en: [
        "Lift the hips until knees, hips and shoulders make a straight line.",
        "Squeeze the buttocks and hold that position.",
        "Lift one foot just a few inches off the floor, keeping the knee bent.",
        "The hips must not drop or tip to one side.",
        "Replace the foot and lift the other, alternating slowly.",
      ],
      ur: [
        "کولہے اٹھائیں یہاں تک کہ گھٹنے، کولہے اور کندھے ایک سیدھی لکیر بنائیں۔",
        "کولہے کے پٹھے دبائیں اور اسی حالت میں رکیں۔",
        "ایک پاؤں صرف چند انچ فرش سے اٹھائیں، گھٹنا مڑا رکھیں۔",
        "کولہے نہ جھکیں اور نہ ایک طرف ٹیڑھے ہوں۔",
        "پاؤں واپس رکھیں اور دوسرا اٹھائیں، آہستہ باری باری۔",
      ],
    },
    specialInstructions: {
      en: [
        "Put a hand on each hip bone — you should feel them stay level.",
        "A tiny lift is enough; height is not the point.",
        "Master the two-leg bridge and the single-leg bridge first.",
      ],
      ur: [
        "ہر کولہے کی ہڈی پر ایک ہاتھ رکھیں — وہ برابر رہنے چاہئیں۔",
        "بہت تھوڑا اٹھانا کافی ہے؛ اونچائی مقصد نہیں۔",
        "پہلے دو ٹانگوں والا اور ایک ٹانگ والا پُل سیکھیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Holding the breath.",
        "Letting the low back arch or the hips tip.",
        "Going faster as you tire.",
        "Chasing repetitions instead of position.",
      ],
      ur: [
        "سانس روکنا۔",
        "کمر کا محراب بننا یا کولہوں کا ٹیڑھا ہو جانا۔",
        "تھکنے پر تیز ہو جانا۔",
        "حالت کے بجائے گنتی کے پیچھے بھاگنا۔",
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
    holdTime: "2 seconds",
    frequency: "Every other day",
    restBetweenSets: "45 seconds",
    progressions: [],
    regressions: ["bridge-single-leg"],
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
      rationale: "Bridge marching progresses hip extensor and pelvic control demand. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ rootRot: -112, hipNear: 2, kneeNear: 100, hipFar: 2, kneeFar: 100 }, SUPINE), travel: 800, hold: 400, label: "Holding the bridge" },
        { pose: pose({ rootRot: -112, hipNear: 60, kneeNear: 96, hipFar: 2, kneeFar: 100 }, SUPINE), travel: 1000, hold: 900, label: "Lift one foot, hips level" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-L-011",
    slug: "standing-pelvic-clock",
    name: { en: "Standing Pelvic Clock", ur: "کھڑے ہو کر پیڑو گھمانا" },
    bodyRegion: "Lumbar",
    joint: ["Lumbar spine L1–L5", "Hip", "Sacroiliac"],
    musclesTargeted: ["Transversus abdominis", "Erector spinae", "Gluteus maximus", "Rectus abdominis"],
    conditions: ["Low back pain", "Poor postural awareness", "Pelvic girdle pain", "Prolonged standing"],
    purpose: { en: "Teaches where the pelvis actually is, which most people with a sore back cannot feel — and cannot correct until they can.", ur: "یہ سکھاتی ہے کہ پیڑو دراصل کہاں ہے، جو دُکھتی کمر والے زیادہ تر لوگ محسوس نہیں کر پاتے — اور جب تک محسوس نہ ہو، درست بھی نہیں کر سکتے۔" },
    exerciseType: "Stabilisation & motor control",
    difficulty: "Beginner",
    contraction: ["Concentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Standing",
    equipment: [],
    startingPosition: { en: "Stand tall with the feet hip-width apart, knees soft and both hands resting on the hip bones.", ur: "سیدھے کھڑے ہوں، پاؤں کولہوں کے برابر فاصلے پر، گھٹنے ہلکے مڑے اور دونوں ہاتھ کولہے کی ہڈیوں پر۔" },
    quickSteps: {
      en: [
        "Stand with the hands on the hip bones.",
        "Tip the pelvis forward, then backward, slowly.",
        "Then tip it to each side, making a slow circle.",
      ],
      ur: [
        "ہاتھ کولہے کی ہڈیوں پر رکھ کر کھڑے ہوں۔",
        "پیڑو آہستہ آگے جھکائیں، پھر پیچھے۔",
        "پھر ہر طرف جھکائیں اور آہستہ دائرہ بنائیں۔",
      ],
    },
    steps: {
      en: [
        "Stand tall with the knees soft and the hands on the front hip bones.",
        "Tip the pelvis forward so the low back hollows a little.",
        "Then tip it backwards so the low back flattens.",
        "Move between the two slowly, five times, feeling where the middle is.",
        "Then drop one hip, then the other, and finally join it all into a slow circle.",
      ],
      ur: [
        "سیدھے کھڑے ہوں، گھٹنے ہلکے مڑے اور ہاتھ کولہے کی اگلی ہڈیوں پر۔",
        "پیڑو آگے جھکائیں تاکہ کمر تھوڑی اندر کی طرف ہو۔",
        "پھر پیچھے جھکائیں تاکہ کمر سیدھی ہو جائے۔",
        "دونوں کے درمیان آہستہ پانچ بار حرکت کریں اور درمیان کہاں ہے یہ محسوس کریں۔",
        "پھر ایک کولہا نیچے کریں، پھر دوسرا، اور آخر میں سب کو ملا کر آہستہ دائرہ بنائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "The middle position is the one you want to stand in all day.",
        "Only the pelvis moves — the shoulders and knees stay still.",
        "Do this in front of a mirror at first; feeling it takes practice.",
      ],
      ur: [
        "درمیانی حالت وہی ہے جس میں سارا دن کھڑا ہونا چاہیے۔",
        "صرف پیڑو حرکت کرے — کندھے اور گھٹنے ساکن رہیں۔",
        "شروع میں آئینے کے سامنے کریں؛ اسے محسوس کرنے میں مشق لگتی ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Holding the breath.",
        "Letting the low back arch or the hips tip.",
        "Going faster as you tire.",
        "Chasing repetitions instead of position.",
      ],
      ur: [
        "سانس روکنا۔",
        "کمر کا محراب بننا یا کولہوں کا ٹیڑھا ہو جانا۔",
        "تھکنے پر تیز ہو جانا۔",
        "حالت کے بجائے گنتی کے پیچھے بھاگنا۔",
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
    repetitions: "5 in each direction",
    sets: "2",
    holdTime: "—",
    frequency: "Daily",
    restBetweenSets: "30 seconds",
    progressions: ["pelvic-tilt-standing"],
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
      rationale: "Pelvic awareness drills are used in postural retraining for low back pain. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ pelvisTilt: 10, lumbar: -4 }, STAND), travel: 800, hold: 400, label: "Standing, hands on the hips" },
        { pose: pose({ pelvisTilt: -12, lumbar: 10 }, STAND), travel: 1000, hold: 900, label: "Tip the pelvis forward and back" },
      ],
    },
  },
  {
    id: "EX-S-045",
    slug: "serratus-punch-supine",
    name: { en: "Lying Shoulder Punch", ur: "لیٹ کر بازو اوپر دھکیلنا" },
    bodyRegion: "Shoulder",
    joint: ["Scapulothoracic", "Glenohumeral"],
    musclesTargeted: ["Serratus anterior", "Pectoralis minor", "Anterior deltoid"],
    conditions: ["Scapular winging", "Scapular dyskinesis", "Shoulder impingement", "Reduced overhead reach"],
    purpose: { en: "Isolates the muscle that holds the shoulder blade flat against the ribs, whose weakness makes the blade wing out.", ur: "اُس پٹھے کو الگ سے مضبوط کرتی ہے جو شانے کی ہڈی کو پسلیوں سے چپکا رکھتا ہے، اور جس کی کمزوری سے ہڈی باہر ابھر آتی ہے۔" },
    exerciseType: "Stabilisation & motor control",
    difficulty: "Beginner",
    contraction: ["Concentric", "Eccentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Supine",
    equipment: ["Exercise mat"],
    startingPosition: { en: "Lie on your back with the knees bent and one arm reaching straight up towards the ceiling.", ur: "سیدھے لیٹ جائیں، گھٹنے مڑے اور ایک بازو چھت کی طرف سیدھا اوپر۔" },
    quickSteps: {
      en: [
        "Lie on your back with one arm straight up to the ceiling.",
        "Push the hand a little further up, lifting the shoulder blade off the floor.",
        "Lower it back down and repeat.",
      ],
      ur: [
        "سیدھے لیٹ جائیں، ایک بازو چھت کی طرف سیدھا اوپر۔",
        "ہاتھ تھوڑا اور اوپر دھکیلیں، شانے کی ہڈی فرش سے اٹھائیں۔",
        "واپس نیچے لائیں اور دہرائیں۔",
      ],
    },
    steps: {
      en: [
        "Lie on your back with the knees bent and the low back relaxed.",
        "Reach one arm straight up so the hand is directly over the shoulder.",
        "Keeping the elbow straight, push the hand a few inches further towards the ceiling.",
        "The shoulder blade should lift away from the floor — that is the whole movement.",
        "Lower it slowly back down and repeat.",
      ],
      ur: [
        "سیدھے لیٹ جائیں، گھٹنے مڑے اور کمر ڈھیلی۔",
        "ایک بازو سیدھا اوپر کریں تاکہ ہاتھ بالکل کندھے کے اوپر ہو۔",
        "کہنی سیدھی رکھتے ہوئے ہاتھ چند انچ اور چھت کی طرف دھکیلیں۔",
        "شانے کی ہڈی فرش سے اٹھنی چاہیے — یہی پوری حرکت ہے۔",
        "آہستہ واپس نیچے لائیں اور دہرائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "The elbow must stay straight — bending it hides the movement.",
        "The range is a few inches, not more.",
        "Progress by holding a light weight, then by doing it in a wall push-up.",
      ],
      ur: [
        "کہنی سیدھی رہے — موڑنے سے حرکت چھپ جاتی ہے۔",
        "حرکت چند انچ کی ہے، اس سے زیادہ نہیں۔",
        "ترقی کے لیے پہلے ہلکا وزن پکڑیں، پھر دیوار پش اپ میں کریں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Holding the breath.",
        "Letting the low back arch or the hips tip.",
        "Going faster as you tire.",
        "Chasing repetitions instead of position.",
      ],
      ur: [
        "سانس روکنا۔",
        "کمر کا محراب بننا یا کولہوں کا ٹیڑھا ہو جانا۔",
        "تھکنے پر تیز ہو جانا۔",
        "حالت کے بجائے گنتی کے پیچھے بھاگنا۔",
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
    holdTime: "1 second",
    frequency: "Every other day",
    restBetweenSets: "30 seconds",
    progressions: ["wall-push-up"],
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
      rationale: "Supine serratus punches are a standard isolation exercise for scapular winging. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ shoulderNear: 90, elbowNear: 4 }, SUPINE), travel: 800, hold: 400, label: "Arm straight up to the ceiling" },
        { pose: pose({ shoulderNear: 86, elbowNear: 2 }, SUPINE), travel: 1000, hold: 900, label: "Push the hand a little higher" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-T-011",
    slug: "wall-angel",
    name: { en: "Wall Angel", ur: "دیوار کے ساتھ بازو اوپر نیچے کرنا" },
    bodyRegion: "Thoracic",
    joint: ["Scapulothoracic", "Glenohumeral", "Thoracic spine T1–T12"],
    musclesTargeted: ["Lower trapezius", "Rhomboids", "Serratus anterior", "Infraspinatus"],
    conditions: ["Rounded posture", "Desk work strain", "Scapular dyskinesis", "Upper back stiffness"],
    purpose: { en: "The wall shows exactly where the back and arms actually are, which is why this exposes a rounded upper back so quickly.", ur: "دیوار صاف بتا دیتی ہے کہ کمر اور بازو دراصل کہاں ہیں، اسی لیے یہ جھکی ہوئی اوپری کمر کو فوراً ظاہر کر دیتی ہے۔" },
    exerciseType: "Stabilisation & motor control",
    difficulty: "Intermediate",
    contraction: ["Concentric", "Eccentric", "Isometric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["Wall"],
    startingPosition: { en: "Stand with your back against a wall, feet a step forward, and the backs of the arms touching the wall in a goalpost shape.", ur: "دیوار سے پیٹھ لگا کر کھڑے ہوں، پاؤں ایک قدم آگے، اور بازو گول پوسٹ کی شکل میں دیوار سے لگے ہوں۔" },
    quickSteps: {
      en: [
        "Stand with your back to a wall, arms in a goalpost shape.",
        "Slide the arms slowly up the wall, keeping contact.",
        "Slide them back down and repeat.",
      ],
      ur: [
        "دیوار سے پیٹھ لگا کر کھڑے ہوں، بازو گول پوسٹ کی شکل میں۔",
        "بازو دیوار سے لگے رکھتے ہوئے آہستہ اوپر پھسلائیں۔",
        "واپس نیچے لائیں اور دہرائیں۔",
      ],
    },
    steps: {
      en: [
        "Stand with the head, upper back and buttocks against the wall, feet a step away.",
        "Flatten the low back gently by tucking the pelvis.",
        "Put the arms up in a goalpost shape with the elbows and backs of the hands on the wall.",
        "Slide the arms slowly up the wall, keeping every point of contact.",
        "Go only as high as contact is kept, then slide back down.",
      ],
      ur: [
        "سر، اوپری کمر اور کولہے دیوار سے لگا کر کھڑے ہوں، پاؤں ایک قدم دور۔",
        "پیڑو اندر کر کے کمر نرمی سے سیدھی کریں۔",
        "بازو گول پوسٹ کی شکل میں اٹھائیں، کہنیاں اور ہاتھوں کی پشت دیوار سے لگی ہوں۔",
        "بازو آہستہ دیوار پر اوپر پھسلائیں، ہر نقطہ لگا رہے۔",
        "صرف اتنا اوپر جائیں جتنا رابطہ برقرار رہے، پھر واپس نیچے لائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Losing contact is the information — that height is your current limit.",
        "Do not arch the low back to keep the arms on the wall; that is cheating.",
        "Most people can only manage a few inches at first, and that is fine.",
      ],
      ur: [
        "رابطہ ٹوٹنا ہی اصل معلومات ہے — وہی اونچائی آپ کی موجودہ حد ہے۔",
        "بازو دیوار پر رکھنے کے لیے کمر کو محراب نہ بنائیں؛ یہ چوری ہے۔",
        "زیادہ تر لوگ شروع میں صرف چند انچ کر پاتے ہیں، اور یہ ٹھیک ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Holding the breath.",
        "Letting the low back arch or the hips tip.",
        "Going faster as you tire.",
        "Chasing repetitions instead of position.",
      ],
      ur: [
        "سانس روکنا۔",
        "کمر کا محراب بننا یا کولہوں کا ٹیڑھا ہو جانا۔",
        "تھکنے پر تیز ہو جانا۔",
        "حالت کے بجائے گنتی کے پیچھے بھاگنا۔",
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
    holdTime: "1 second at the top",
    frequency: "Daily",
    restBetweenSets: "45 seconds",
    progressions: [],
    regressions: ["scapular-wall-slide"],
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
      rationale: "Wall angels are widely used for scapular control and thoracic posture. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ shoulderNear: 92, elbowNear: 90, shoulderAbductNear: 80, shoulderFar: 92, elbowFar: 90, shoulderAbductFar: 80 }, STAND), travel: 800, hold: 400, label: "Arms on the wall in a goalpost" },
        { pose: pose({ shoulderNear: 40, elbowNear: 30, shoulderAbductNear: 60, shoulderFar: 40, elbowFar: 30, shoulderAbductFar: 60 }, STAND), travel: 1000, hold: 900, label: "Slide the arms up the wall" },
      ],
      props: [{ kind: "wall" }],
    },
  },
  {
    id: "EX-CO-014",
    slug: "side-plank-rotation",
    name: { en: "Side Plank with Rotation", ur: "سائیڈ پلانک میں گھماؤ" },
    bodyRegion: "Core",
    joint: ["Lumbar spine L1–L5", "Thoracic spine T1–T12", "Scapulothoracic"],
    musclesTargeted: ["Obliques", "Quadratus lumborum", "Serratus anterior", "Gluteus medius"],
    conditions: ["Core weakness", "Return to sport", "Lateral trunk weakness", "Rotational sport demands"],
    purpose: { en: "Adds a turn to the side plank, which is how the trunk actually has to work in throwing, digging and carrying.", ur: "سائیڈ پلانک میں گھماؤ شامل کرتی ہے، اور دھڑ کو پھینکنے، کھودنے اور اٹھانے میں اسی طرح کام کرنا پڑتا ہے۔" },
    exerciseType: "Stabilisation & motor control",
    difficulty: "Advanced",
    contraction: ["Isometric", "Concentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Side-lying",
    equipment: ["Exercise mat"],
    startingPosition: { en: "Lie on your side propped on the lower forearm with the hips lifted and the top arm reaching to the ceiling.", ur: "پہلو پر لیٹیں، نیچے والے بازو پر ٹیک، کولہے اٹھے ہوئے اور اوپر والا بازو چھت کی طرف۔" },
    quickSteps: {
      en: [
        "Hold a side plank with the top arm to the ceiling.",
        "Reach that arm under your body and turn the chest down.",
        "Return to the ceiling and repeat.",
      ],
      ur: [
        "سائیڈ پلانک میں رکیں، اوپر والا بازو چھت کی طرف۔",
        "وہ بازو جسم کے نیچے سے گزاریں اور سینہ نیچے گھمائیں۔",
        "واپس چھت کی طرف لائیں اور دہرائیں۔",
      ],
    },
    steps: {
      en: [
        "Set up a side plank with the elbow under the shoulder and the hips lifted.",
        "Reach the top arm straight up towards the ceiling.",
        "Turn the chest downwards and thread that arm under your body.",
        "Keep the hips high throughout — this is the hard part.",
        "Unwind and reach back to the ceiling, then repeat.",
      ],
      ur: [
        "سائیڈ پلانک بنائیں، کہنی کندھے کے نیچے اور کولہے اٹھے ہوئے۔",
        "اوپر والا بازو سیدھا چھت کی طرف بڑھائیں۔",
        "سینہ نیچے گھمائیں اور وہ بازو جسم کے نیچے سے گزاریں۔",
        "پوری ورزش میں کولہے اونچے رکھیں — یہی مشکل حصہ ہے۔",
        "واپس کھلیں اور بازو چھت کی طرف لے جائیں، پھر دہرائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "The hips dropping is the sign to stop the set.",
        "Master the full side plank hold before adding the rotation.",
        "Start on the knees if the full version breaks down.",
      ],
      ur: [
        "کولہوں کا جھک جانا سیٹ ختم کرنے کا اشارہ ہے۔",
        "گھماؤ شامل کرنے سے پہلے مکمل سائیڈ پلانک سیکھیں۔",
        "مکمل انداز نہ سنبھلے تو گھٹنوں پر شروع کریں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Holding the breath.",
        "Letting the low back arch or the hips tip.",
        "Going faster as you tire.",
        "Chasing repetitions instead of position.",
      ],
      ur: [
        "سانس روکنا۔",
        "کمر کا محراب بننا یا کولہوں کا ٹیڑھا ہو جانا۔",
        "تھکنے پر تیز ہو جانا۔",
        "حالت کے بجائے گنتی کے پیچھے بھاگنا۔",
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
    repetitions: "6–8 each side",
    sets: "3",
    holdTime: "1 second",
    frequency: "Every other day",
    restBetweenSets: "45 seconds",
    progressions: [],
    regressions: ["side-plank-full"],
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
      rationale: "Side plank rotation is a standard advanced trunk control progression. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ hipNear: 0, kneeNear: 2, hipFar: 0, kneeFar: 2, shoulderNear: 90, shoulderAbductNear: -90, elbowNear: 90, shoulderFar: 20, elbowFar: 6 }, SIDE_LYING), travel: 800, hold: 400, label: "Side plank, top arm up" },
        { pose: pose({ hipNear: 0, kneeNear: 2, hipFar: 0, kneeFar: 2, shoulderNear: 90, shoulderAbductNear: -90, elbowNear: 90, shoulderFar: 100, elbowFar: 20, shoulderAbductFar: -70, thorax: 10 }, SIDE_LYING), travel: 1000, hold: 900, label: "Thread the arm under the body" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-A-018",
    slug: "tandem-stance",
    name: { en: "Heel-to-Toe Standing", ur: "ایڑی سے پنجے تک کھڑا ہونا" },
    bodyRegion: "Ankle & Foot",
    joint: ["Talocrural", "Subtalar", "Hip"],
    musclesTargeted: ["Peroneals", "Tibialis posterior", "Gluteus medius", "Foot intrinsics"],
    conditions: ["Falls risk", "Ankle instability", "Balance training", "Older adult conditioning"],
    purpose: { en: "Narrowing the base of support is the simplest way to make standing harder, and it is the step between two feet and one.", ur: "کھڑے ہونے کی بنیاد تنگ کرنا اسے مشکل بنانے کا سادہ ترین طریقہ ہے، اور یہ دو پاؤں اور ایک پاؤں کے بیچ کا مرحلہ ہے۔" },
    exerciseType: "Balance & proprioception",
    difficulty: "Beginner",
    contraction: ["Isometric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["Support within reach"],
    startingPosition: { en: "Stand beside a worktop or wall with one foot directly in front of the other, heel touching toe.", ur: "میز یا دیوار کے پاس کھڑے ہوں، ایک پاؤں بالکل دوسرے کے سامنے، ایڑی پنجے سے لگی ہو۔" },
    quickSteps: {
      en: [
        "Stand with one foot directly in front of the other.",
        "Take the hands off the support if you can.",
        "Hold 30 seconds, then swap which foot is in front.",
      ],
      ur: [
        "ایک پاؤں بالکل دوسرے کے سامنے رکھ کر کھڑے ہوں۔",
        "ہو سکے تو ہاتھ سہارے سے ہٹا لیں۔",
        "تیس سیکنڈ رکیں، پھر پاؤں بدل لیں۔",
      ],
    },
    steps: {
      en: [
        "Stand within arm's reach of a worktop or wall.",
        "Place one foot directly in front of the other so the heel touches the toes.",
        "Look straight ahead at a fixed point, not down at your feet.",
        "Take the hands off the support if you can hold steady.",
        "Hold for thirty seconds, then change which foot is in front.",
      ],
      ur: [
        "میز یا دیوار سے ایک بازو کے فاصلے میں کھڑے ہوں۔",
        "ایک پاؤں بالکل دوسرے کے سامنے رکھیں تاکہ ایڑی پنجوں کو چھوئے۔",
        "سامنے کسی ایک نقطے پر نظر رکھیں، پاؤں کی طرف نیچے نہ دیکھیں۔",
        "اگر مستحکم رہ سکیں تو ہاتھ سہارے سے ہٹا لیں۔",
        "تیس سیکنڈ رکیں، پھر سامنے والا پاؤں بدل لیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Stand within arm's reach of a wall or worktop, every time.",
        "Progress by taking the hands off, not by standing on something soft first.",
        "Practise near a corner if you live alone.",
      ],
      ur: [
        "ہر بار دیوار یا میز سے ایک بازو کے فاصلے میں کھڑے ہوں۔",
        "ترقی ہاتھ ہٹا کر کریں، پہلے نرم چیز پر کھڑے ہو کر نہیں۔",
        "اکیلے رہتے ہوں تو کونے کے پاس مشق کریں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Practising away from any support.",
        "Looking down at the feet.",
        "Holding the breath.",
        "Progressing before the easier level is steady.",
      ],
      ur: [
        "سہارے سے دور مشق کرنا۔",
        "پاؤں کی طرف نیچے دیکھنا۔",
        "سانس روکنا۔",
        "آسان مرحلہ پکا ہونے سے پہلے آگے بڑھ جانا۔",
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
    repetitions: "3 each way",
    sets: "2",
    holdTime: "30 seconds",
    frequency: "Daily",
    restBetweenSets: "30 seconds",
    progressions: ["single-leg-balance"],
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
      rationale: "Tandem stance is a standard balance progression and falls-risk screen. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: STAND, travel: 800, hold: 400, label: "Standing normally" },
        { pose: pose({ hipNear: 12, kneeNear: 4, hipFar: -12, kneeFar: 4 }, STAND), travel: 1000, hold: 900, label: "One foot directly in front" },
      ],
    },
  },
  {
    id: "EX-A-019",
    slug: "single-leg-balance-eyes-closed",
    name: { en: "One Leg Balance, Eyes Closed", ur: "آنکھیں بند کر کے ایک ٹانگ پر کھڑا ہونا" },
    bodyRegion: "Ankle & Foot",
    joint: ["Talocrural", "Subtalar", "Hip"],
    musclesTargeted: ["Peroneals", "Gluteus medius", "Tibialis posterior", "Foot intrinsics"],
    conditions: ["Ankle instability", "Falls risk", "Return to sport", "Proprioceptive loss"],
    purpose: { en: "Closing the eyes removes vision, forcing the ankle and hip to rely on their own sense of position — which is what was damaged in a sprain.", ur: "آنکھیں بند کرنے سے نظر کا سہارا ختم ہو جاتا ہے اور ٹخنے اور کولہے کو اپنی حس پر انحصار کرنا پڑتا ہے — اور موچ میں یہی حس متاثر ہوتی ہے۔" },
    exerciseType: "Balance & proprioception",
    difficulty: "Intermediate",
    contraction: ["Isometric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["Support within reach"],
    startingPosition: { en: "Stand on one leg beside a worktop, with the other foot lifted just clear of the floor.", ur: "میز کے پاس ایک ٹانگ پر کھڑے ہوں، دوسرا پاؤں فرش سے ذرا اوپر اٹھا ہوا ہو۔" },
    quickSteps: {
      en: [
        "Stand on one leg beside a worktop.",
        "Close your eyes once you feel steady.",
        "Hold 10–20 seconds, then swap legs.",
      ],
      ur: [
        "میز کے پاس ایک ٹانگ پر کھڑے ہوں۔",
        "مستحکم محسوس ہوتے ہی آنکھیں بند کر لیں۔",
        "دس سے بیس سیکنڈ رکیں، پھر ٹانگ بدلیں۔",
      ],
    },
    steps: {
      en: [
        "Stand close enough to a worktop that you can reach it instantly.",
        "Balance on one leg with the other foot lifted just clear of the floor.",
        "Settle first with the eyes open until you are completely steady.",
        "Close the eyes and keep breathing normally.",
        "Open them the moment you start to lose it, and rest before the next go.",
      ],
      ur: [
        "میز کے اتنا قریب کھڑے ہوں کہ فوراً پکڑ سکیں۔",
        "ایک ٹانگ پر توازن بنائیں، دوسرا پاؤں فرش سے ذرا اوپر۔",
        "پہلے آنکھیں کھلی رکھ کر پوری طرح مستحکم ہو جائیں۔",
        "آنکھیں بند کریں اور عام سانس لیتے رہیں۔",
        "توازن بگڑنا شروع ہوتے ہی آنکھیں کھول لیں اور اگلی بار سے پہلے آرام کریں۔",
      ],
    },
    specialInstructions: {
      en: [
        "This is much harder than it sounds — ten seconds is a good target.",
        "Never do this one without something within arm's reach.",
        "Master thirty seconds with the eyes open before trying this.",
      ],
      ur: [
        "یہ سننے سے کہیں زیادہ مشکل ہے — دس سیکنڈ اچھا ہدف ہے۔",
        "بازو کی پہنچ میں کوئی سہارا رکھے بغیر یہ ہرگز نہ کریں۔",
        "یہ کرنے سے پہلے آنکھیں کھلی رکھ کر تیس سیکنڈ کر لیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Practising away from any support.",
        "Looking down at the feet.",
        "Holding the breath.",
        "Progressing before the easier level is steady.",
      ],
      ur: [
        "سہارے سے دور مشق کرنا۔",
        "پاؤں کی طرف نیچے دیکھنا۔",
        "سانس روکنا۔",
        "آسان مرحلہ پکا ہونے سے پہلے آگے بڑھ جانا۔",
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
    repetitions: "3 each side",
    sets: "2",
    holdTime: "10–20 seconds",
    frequency: "Daily",
    restBetweenSets: "30 seconds",
    progressions: [],
    regressions: ["single-leg-balance"],
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
      rationale: "Eyes-closed single leg stance is a standard proprioceptive progression. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ hipNear: 0, kneeNear: 2 }, STAND), travel: 800, hold: 400, label: "Standing on one leg" },
        { pose: pose({ hipNear: 30, kneeNear: 70, shoulderNear: 150, shoulderAbductNear: 30 }, STAND), travel: 1000, hold: 900, label: "Close the eyes and hold" },
      ],
    },
  },
  {
    id: "EX-H-028",
    slug: "single-leg-reach",
    name: { en: "Single Leg Reach", ur: "ایک ٹانگ پر کھڑے ہو کر آگے پہنچنا" },
    bodyRegion: "Pelvis & Hip",
    joint: ["Hip", "Tibiofemoral", "Talocrural"],
    musclesTargeted: ["Gluteus medius", "Gluteus maximus", "Quadriceps femoris", "Peroneals"],
    conditions: ["Falls risk", "Knee instability", "Return to sport", "Hip weakness"],
    purpose: { en: "Reaching while balanced on one leg is what stepping onto uneven ground actually demands, and it loads the hip while it does it.", ur: "ایک ٹانگ پر توازن رکھتے ہوئے آگے پہنچنا وہی ہے جو ناہموار زمین پر قدم رکھنے میں درکار ہوتا ہے، اور ساتھ ہی کولہے پر بوجھ بھی ڈالتا ہے۔" },
    exerciseType: "Balance & proprioception",
    difficulty: "Intermediate",
    contraction: ["Concentric", "Eccentric", "Isometric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["Support within reach"],
    startingPosition: { en: "Stand on one leg beside a worktop with the knee slightly bent and the pelvis level.", ur: "میز کے پاس ایک ٹانگ پر کھڑے ہوں، گھٹنا ہلکا مڑا اور پیڑو برابر۔" },
    quickSteps: {
      en: [
        "Stand on one leg with the knee slightly bent.",
        "Reach the other foot forward and tap the floor lightly.",
        "Return to standing and repeat.",
      ],
      ur: [
        "ایک ٹانگ پر کھڑے ہوں، گھٹنا ہلکا مڑا۔",
        "دوسرا پاؤں آگے بڑھا کر فرش کو ہلکا چھوئیں۔",
        "واپس سیدھے ہوں اور دہرائیں۔",
      ],
    },
    steps: {
      en: [
        "Stand on one leg with a soft knee and the pelvis level.",
        "Hinge forward slightly from the hip as you reach.",
        "Take the other foot forward and tap the floor as far away as you can control.",
        "Keep the knee of the standing leg tracking over the middle of the foot.",
        "Push back up to standing without wobbling, and repeat.",
      ],
      ur: [
        "ایک ٹانگ پر کھڑے ہوں، گھٹنا ہلکا مڑا اور پیڑو برابر۔",
        "پہنچتے وقت کولہے سے ہلکا آگے جھکیں۔",
        "دوسرا پاؤں آگے لے جا کر جتنی دور قابو میں رہے فرش کو چھوئیں۔",
        "کھڑی ٹانگ کا گھٹنا پاؤں کے درمیان کی سیدھ میں رکھیں۔",
        "بغیر لڑکھڑائے واپس سیدھے ہوں اور دہرائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Watch the standing knee — if it falls inwards, reach less far.",
        "The reach distance is the measure; increase it slowly week by week.",
        "Later, reach to the side and behind as well as forward.",
      ],
      ur: [
        "کھڑی ٹانگ کے گھٹنے پر نظر رکھیں — وہ اندر کی طرف گرے تو کم دور جائیں۔",
        "پہنچنے کا فاصلہ ہی پیمانہ ہے؛ اسے ہفتہ بہ ہفتہ آہستہ بڑھائیں۔",
        "بعد میں آگے کے علاوہ پہلو اور پیچھے بھی پہنچیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Practising away from any support.",
        "Looking down at the feet.",
        "Holding the breath.",
        "Progressing before the easier level is steady.",
      ],
      ur: [
        "سہارے سے دور مشق کرنا۔",
        "پاؤں کی طرف نیچے دیکھنا۔",
        "سانس روکنا۔",
        "آسان مرحلہ پکا ہونے سے پہلے آگے بڑھ جانا۔",
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
    sets: "2",
    holdTime: "1 second",
    frequency: "Every other day",
    restBetweenSets: "30 seconds",
    progressions: [],
    regressions: ["single-leg-balance"],
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
      rationale: "Single leg reach tasks are widely used for dynamic balance and hip control. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ hipNear: 0, kneeNear: 2 }, STAND), travel: 800, hold: 400, label: "Standing on one leg" },
        { pose: pose({ hipNear: 44, kneeNear: 6, hipFar: 8, kneeFar: 30, lumbar: 10, shoulderNear: 130, elbowNear: 20, shoulderFar: 130, elbowFar: 20 }, STAND), travel: 1000, hold: 900, label: "Reach the other foot forward" },
      ],
    },
  },
  {
    id: "EX-H-029",
    slug: "weight-shift-standing",
    name: { en: "Standing Weight Shift", ur: "کھڑے ہو کر وزن منتقل کرنا" },
    bodyRegion: "Pelvis & Hip",
    joint: ["Hip", "Talocrural"],
    musclesTargeted: ["Gluteus medius", "Peroneals", "Tibialis posterior", "Erector spinae"],
    conditions: ["Falls risk", "Post-stroke rehabilitation", "Early balance training", "Post-hip-surgery rehabilitation"],
    purpose: { en: "The gentlest balance exercise there is: moving your weight from one foot to the other, which is what walking actually is.", ur: "توازن کی سب سے نرم ورزش: وزن ایک پاؤں سے دوسرے پر لے جانا، اور چلنا دراصل یہی ہے۔" },
    exerciseType: "Balance & proprioception",
    difficulty: "Beginner",
    contraction: ["Concentric", "Isometric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["Support within reach"],
    startingPosition: { en: "Stand tall with the feet hip-width apart and the hands resting lightly on a worktop.", ur: "سیدھے کھڑے ہوں، پاؤں کولہوں کے برابر فاصلے پر اور ہاتھ ہلکے سے میز پر۔" },
    quickSteps: {
      en: [
        "Stand with the feet hip-width apart.",
        "Shift your weight slowly onto one foot, then the other.",
        "Keep the shoulders level throughout.",
      ],
      ur: [
        "پاؤں کولہوں کے برابر فاصلے پر رکھ کر کھڑے ہوں۔",
        "وزن آہستہ ایک پاؤں پر لے جائیں، پھر دوسرے پر۔",
        "پوری ورزش میں کندھے برابر رکھیں۔",
      ],
    },
    steps: {
      en: [
        "Stand tall with the feet hip-width apart, near a worktop.",
        "Shift your weight slowly across onto the right foot.",
        "Go as far as you can while keeping both feet flat and the shoulders level.",
        "Pause there for three seconds.",
        "Shift slowly across to the left foot and pause again.",
      ],
      ur: [
        "میز کے قریب سیدھے کھڑے ہوں، پاؤں کولہوں کے برابر فاصلے پر۔",
        "وزن آہستہ دائیں پاؤں پر منتقل کریں۔",
        "اتنا جائیں جتنا دونوں پاؤں زمین پر اور کندھے برابر رہیں۔",
        "وہاں تین سیکنڈ رکیں۔",
        "آہستہ بائیں پاؤں پر جائیں اور دوبارہ رکیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Both feet stay flat — this is a shift, not a step.",
        "The shoulders stay level; leaning the trunk is not the same thing.",
        "This is often the safest starting point after a stroke or a hip replacement.",
      ],
      ur: [
        "دونوں پاؤں زمین پر رہیں — یہ منتقلی ہے، قدم نہیں۔",
        "کندھے برابر رہیں؛ دھڑ جھکانا اس سے مختلف بات ہے۔",
        "فالج یا کولہے کی تبدیلی کے بعد یہ اکثر سب سے محفوظ آغاز ہوتا ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Practising away from any support.",
        "Looking down at the feet.",
        "Holding the breath.",
        "Progressing before the easier level is steady.",
      ],
      ur: [
        "سہارے سے دور مشق کرنا۔",
        "پاؤں کی طرف نیچے دیکھنا۔",
        "سانس روکنا۔",
        "آسان مرحلہ پکا ہونے سے پہلے آگے بڑھ جانا۔",
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
    holdTime: "3 seconds",
    frequency: "Daily",
    restBetweenSets: "30 seconds",
    progressions: ["tandem-stance"],
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
      rationale: "Lateral weight shifting is a standard entry-level balance and gait preparation drill. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: STAND, travel: 800, hold: 400, label: "Standing evenly" },
        { pose: pose({ hipRotNear: -10, hipNear: 6, kneeNear: 8, hipFar: -4, lumbar: -3 }, STAND), travel: 1000, hold: 900, label: "Shift the weight to one side" },
      ],
    },
  },
  {
    id: "EX-A-020",
    slug: "single-leg-stance-head-turns",
    name: { en: "One Leg Balance with Head Turns", ur: "ایک ٹانگ پر کھڑے ہو کر سر گھمانا" },
    bodyRegion: "Ankle & Foot",
    joint: ["Talocrural", "Subtalar", "Cervical spine C1–C7"],
    musclesTargeted: ["Peroneals", "Gluteus medius", "Tibialis posterior", "Deep neck flexors"],
    conditions: ["Falls risk", "Dizziness with movement", "Ankle instability", "Return to sport"],
    purpose: { en: "Turning the head while balanced challenges the inner ear as well as the ankle, which is what makes crossing a busy road difficult for some people.", ur: "توازن میں رہتے ہوئے سر گھمانا ٹخنے کے ساتھ کان کے اندرونی حصے کو بھی آزماتا ہے، اور اسی لیے کچھ لوگوں کو مصروف سڑک پار کرنا مشکل لگتا ہے۔" },
    exerciseType: "Balance & proprioception",
    difficulty: "Intermediate",
    contraction: ["Isometric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["Support within reach"],
    startingPosition: { en: "Stand on one leg beside a worktop with the other foot lifted clear of the floor.", ur: "میز کے پاس ایک ٹانگ پر کھڑے ہوں، دوسرا پاؤں فرش سے اوپر اٹھا ہوا۔" },
    quickSteps: {
      en: [
        "Stand on one leg beside a worktop.",
        "Turn your head slowly from side to side.",
        "Hold for 20 seconds, then swap legs.",
      ],
      ur: [
        "میز کے پاس ایک ٹانگ پر کھڑے ہوں۔",
        "سر آہستہ دائیں بائیں گھمائیں۔",
        "بیس سیکنڈ رکیں، پھر ٹانگ بدلیں۔",
      ],
    },
    steps: {
      en: [
        "Stand within arm's reach of a worktop and balance on one leg.",
        "Once steady, turn the head slowly to look over one shoulder.",
        "Return through the middle and turn to the other side.",
        "Keep the turns slow and the breathing normal.",
        "Continue for twenty seconds, then rest and change legs.",
      ],
      ur: [
        "میز سے ایک بازو کے فاصلے میں کھڑے ہو کر ایک ٹانگ پر توازن بنائیں۔",
        "مستحکم ہونے پر سر آہستہ گھما کر ایک کندھے کے اوپر دیکھیں۔",
        "درمیان سے گزر کر دوسری طرف گھمائیں۔",
        "گھماؤ آہستہ اور سانس عام رکھیں۔",
        "بیس سیکنڈ جاری رکھیں، پھر آرام کر کے ٹانگ بدلیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Stop and hold the worktop at once if you feel dizzy.",
        "Slow turns first; speed can come later.",
        "Master plain single leg balance before adding the head movement.",
      ],
      ur: [
        "چکر آئے تو فوراً رک کر میز پکڑ لیں۔",
        "پہلے آہستہ گھمائیں؛ رفتار بعد میں آ سکتی ہے۔",
        "سر کی حرکت شامل کرنے سے پہلے سادہ ایک ٹانگ توازن سیکھیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Practising away from any support.",
        "Looking down at the feet.",
        "Holding the breath.",
        "Progressing before the easier level is steady.",
      ],
      ur: [
        "سہارے سے دور مشق کرنا۔",
        "پاؤں کی طرف نیچے دیکھنا۔",
        "سانس روکنا۔",
        "آسان مرحلہ پکا ہونے سے پہلے آگے بڑھ جانا۔",
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
    repetitions: "3 each side",
    sets: "2",
    holdTime: "20 seconds",
    frequency: "Daily",
    restBetweenSets: "30 seconds",
    progressions: [],
    regressions: ["single-leg-balance"],
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
      rationale: "Adding head movement to single leg stance challenges vestibular contribution to balance. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ hipNear: 30, kneeNear: 70 }, STAND), travel: 800, hold: 400, label: "Balanced on one leg" },
        { pose: pose({ hipNear: 30, kneeNear: 70, head: -4 }, STAND), travel: 1000, hold: 900, label: "Turn the head side to side" },
      ],
    },
  },
  {
    id: "EX-K-018",
    slug: "mini-squat",
    name: { en: "Mini Squat", ur: "چھوٹی اسکواٹ" },
    bodyRegion: "Knee",
    joint: ["Tibiofemoral", "Hip", "Talocrural"],
    musclesTargeted: ["Quadriceps femoris", "Gluteus maximus", "Hamstrings", "Soleus"],
    conditions: ["Osteoarthritis of the knee", "Quadriceps weakness", "Return to daily activity", "Post-knee-surgery rehabilitation"],
    purpose: { en: "A quarter of the way down and back up — enough to load the knee usefully, shallow enough for a knee that will not yet take a full squat.", ur: "صرف چوتھائی نیچے اور واپس اوپر — گھٹنے پر مفید بوجھ ڈالنے کے لیے کافی، اور اُس گھٹنے کے لیے کم جو ابھی پوری اسکواٹ برداشت نہ کرے۔" },
    exerciseType: "Functional & gait",
    difficulty: "Beginner",
    contraction: ["Concentric", "Eccentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["Support to hold"],
    startingPosition: { en: "Stand tall with the feet hip-width apart, holding a worktop lightly with both hands.", ur: "سیدھے کھڑے ہوں، پاؤں کولہوں کے برابر فاصلے پر، دونوں ہاتھ ہلکے سے میز پر۔" },
    quickSteps: {
      en: [
        "Stand with the feet hip-width apart.",
        "Bend the knees a quarter of the way down.",
        "Push back up through the heels.",
      ],
      ur: [
        "پاؤں کولہوں کے برابر فاصلے پر رکھ کر کھڑے ہوں۔",
        "گھٹنے چوتھائی حد تک موڑیں۔",
        "ایڑیوں سے زور لگا کر واپس اوپر آئیں۔",
      ],
    },
    steps: {
      en: [
        "Stand tall with the feet hip-width apart and the toes forward.",
        "Sit the hips back slightly, as if beginning to sit on a high stool.",
        "Bend the knees about a quarter of the way down.",
        "Keep the knees tracking over the middle of the feet, not falling inwards.",
        "Push back up through the heels and stand tall.",
      ],
      ur: [
        "سیدھے کھڑے ہوں، پاؤں کولہوں کے برابر فاصلے پر اور پنجے سامنے۔",
        "کولہے تھوڑا پیچھے لے جائیں، جیسے اونچے اسٹول پر بیٹھنے لگے ہوں۔",
        "گھٹنے تقریباً چوتھائی حد تک موڑیں۔",
        "گھٹنے پاؤں کے درمیان کی سیدھ میں رکھیں، اندر کی طرف نہ گرنے دیں۔",
        "ایڑیوں سے زور لگا کر واپس اوپر آئیں اور سیدھے کھڑے ہوں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Quarter depth is deliberate — deeper is not better for a sore knee.",
        "The knees must not roll inwards; that is what wears the kneecap.",
        "Hold a worktop until the movement is steady, then let go.",
      ],
      ur: [
        "چوتھائی گہرائی جان بوجھ کر ہے — دُکھتے گھٹنے کے لیے زیادہ گہرا بہتر نہیں۔",
        "گھٹنے اندر کی طرف نہ گھومیں؛ اسی سے گھٹنے کی ٹوپی گھستی ہے۔",
        "حرکت مستحکم ہونے تک میز پکڑے رکھیں، پھر چھوڑ دیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting the knees fall inwards.",
        "Going too deep too soon.",
        "Lifting the heels.",
        "Leaning too far forward.",
      ],
      ur: [
        "گھٹنوں کا اندر کی طرف گر جانا۔",
        "بہت جلد بہت گہرا جانا۔",
        "ایڑیاں اٹھا لینا۔",
        "بہت آگے جھک جانا۔",
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
    holdTime: "1 second at the bottom",
    frequency: "Every other day",
    restBetweenSets: "30 seconds",
    progressions: ["wall-squat-hold"],
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
      rationale: "Mini squats are a standard partial-range closed-chain knee exercise. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: STAND, travel: 800, hold: 400, label: "Standing tall" },
        { pose: pose({ hipNear: 30, kneeNear: 36, ankleNear: -14, hipFar: 30, kneeFar: 36, ankleFar: -14, shoulderNear: 130, elbowNear: 30, shoulderFar: 130, elbowFar: 30, lumbar: 4 }, STAND), travel: 1000, hold: 900, label: "Bend a quarter of the way down" },
      ],
    },
  },
  {
    id: "EX-K-019",
    slug: "forward-lunge",
    name: { en: "Forward Lunge", ur: "آگے کی طرف لنج" },
    bodyRegion: "Knee",
    joint: ["Tibiofemoral", "Hip", "Talocrural"],
    musclesTargeted: ["Quadriceps femoris", "Gluteus maximus", "Hamstrings", "Gluteus medius"],
    conditions: ["Return to sport", "Knee strengthening", "Single leg weakness", "Return to manual work"],
    purpose: { en: "Loads one leg at a time in the pattern used for stairs, kerbs and getting up off the floor.", ur: "ایک وقت میں ایک ٹانگ پر بوجھ ڈالتی ہے، اُسی انداز میں جو سیڑھیوں، فٹ پاتھ اور فرش سے اٹھنے میں استعمال ہوتا ہے۔" },
    exerciseType: "Functional & gait",
    difficulty: "Intermediate",
    contraction: ["Concentric", "Eccentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["Support within reach"],
    startingPosition: { en: "Stand tall with the feet together and the hands on the hips or resting on a support.", ur: "سیدھے کھڑے ہوں، پاؤں ملے ہوئے اور ہاتھ کولہوں پر یا سہارے پر۔" },
    quickSteps: {
      en: [
        "Stand tall with the feet together.",
        "Step one foot forward and lower the back knee towards the floor.",
        "Push back to standing and swap legs.",
      ],
      ur: [
        "سیدھے کھڑے ہوں، پاؤں ملے ہوئے۔",
        "ایک پاؤں آگے رکھیں اور پچھلا گھٹنا فرش کی طرف نیچے لائیں۔",
        "واپس کھڑے ہوں اور ٹانگ بدلیں۔",
      ],
    },
    steps: {
      en: [
        "Stand tall with the feet together and the trunk upright.",
        "Take a controlled step forward, about the length of your own foot and a half.",
        "Lower straight down by bending both knees, taking the back knee towards the floor.",
        "Keep the front knee behind the toes and the trunk upright.",
        "Push firmly through the front heel to return to standing, then change legs.",
      ],
      ur: [
        "سیدھے کھڑے ہوں، پاؤں ملے اور دھڑ سیدھا۔",
        "قابو سے آگے قدم لیں، تقریباً اپنے پاؤں کے ڈیڑھ گنا فاصلے پر۔",
        "دونوں گھٹنے موڑ کر سیدھا نیچے آئیں، پچھلا گھٹنا فرش کی طرف لے جائیں۔",
        "اگلا گھٹنا پنجوں سے پیچھے اور دھڑ سیدھا رکھیں۔",
        "اگلی ایڑی سے مضبوطی سے زور لگا کر واپس کھڑے ہوں، پھر ٹانگ بدلیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Go straight down, not forward — that is what keeps it off the kneecap.",
        "Start by only going a quarter of the way down.",
        "Keep a chair or worktop within reach until the balance is reliable.",
      ],
      ur: [
        "سیدھا نیچے جائیں، آگے نہیں — اسی سے گھٹنے کی ٹوپی محفوظ رہتی ہے۔",
        "شروع میں صرف چوتھائی حد تک نیچے جائیں۔",
        "توازن پکا ہونے تک کرسی یا میز پہنچ میں رکھیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting the front knee travel past the toes.",
        "Leaning the trunk forward.",
        "Letting the front knee fall inwards.",
        "Stepping too short.",
      ],
      ur: [
        "اگلے گھٹنے کا پنجوں سے آگے چلے جانا۔",
        "دھڑ کو آگے جھکانا۔",
        "اگلے گھٹنے کا اندر کی طرف گر جانا۔",
        "بہت چھوٹا قدم لینا۔",
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
    repetitions: "8–10 each side",
    sets: "3",
    holdTime: "1 second at the bottom",
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
      rationale: "Lunging is a standard single-leg strengthening and functional progression. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: STAND, travel: 800, hold: 400, label: "Standing tall" },
        { pose: pose({ hipNear: 42, kneeNear: 62, hipFar: -18, kneeFar: 74, ankleFar: 26, shoulderNear: 160, elbowNear: 40, shoulderFar: 160, elbowFar: 40 }, STAND), travel: 1000, hold: 900, label: "Step forward and lower the back knee" },
      ],
    },
  },
  {
    id: "EX-H-030",
    slug: "lateral-step-over",
    name: { en: "Sideways Step Over", ur: "پہلو کی طرف قدم اٹھا کر گزرنا" },
    bodyRegion: "Pelvis & Hip",
    joint: ["Hip", "Tibiofemoral", "Talocrural"],
    musclesTargeted: ["Gluteus medius", "Gluteus maximus", "Quadriceps femoris", "Peroneals"],
    conditions: ["Falls risk", "Hip weakness", "Return to walking outdoors", "Post-hip-surgery rehabilitation"],
    purpose: { en: "Stepping sideways over an obstacle is the movement needed to get into a bath, over a doorstep or across a gutter.", ur: "کسی رکاوٹ کے اوپر سے پہلو کی طرف قدم اٹھانا وہ حرکت ہے جو باتھ ٹب، دہلیز یا نالی پار کرنے کے لیے چاہیے۔" },
    exerciseType: "Functional & gait",
    difficulty: "Intermediate",
    contraction: ["Concentric", "Eccentric", "Isometric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["Low obstacle", "Support within reach"],
    startingPosition: { en: "Stand side-on to a low object such as a rolled towel or a book, holding a support.", ur: "کسی نیچی چیز، مثلاً لپٹے تولیے یا کتاب، کے پہلو میں کھڑے ہوں اور سہارا پکڑیں۔" },
    quickSteps: {
      en: [
        "Stand side-on to a low object.",
        "Step sideways over it with the near leg, then the far leg.",
        "Step back over the other way and repeat.",
      ],
      ur: [
        "کسی نیچی چیز کے پہلو میں کھڑے ہوں۔",
        "قریبی ٹانگ سے اُس کے اوپر سے پہلو میں قدم رکھیں، پھر دوسری ٹانگ۔",
        "دوسری طرف واپس گزریں اور دہرائیں۔",
      ],
    },
    steps: {
      en: [
        "Place a rolled towel or a book on the floor beside you.",
        "Stand tall with a worktop or chair within reach.",
        "Lift the near leg out to the side and over the object, placing it down flat.",
        "Bring the other foot over to join it, staying upright throughout.",
        "Step back the other way and repeat, keeping the pelvis level.",
      ],
      ur: [
        "اپنے پہلو میں فرش پر لپٹا تولیہ یا کتاب رکھیں۔",
        "سیدھے کھڑے ہوں، میز یا کرسی پہنچ میں ہو۔",
        "قریبی ٹانگ پہلو میں اٹھا کر چیز کے اوپر سے گزاریں اور سیدھی نیچے رکھیں۔",
        "دوسرا پاؤں بھی ساتھ لے آئیں، پوری حرکت میں سیدھے رہیں۔",
        "دوسری طرف واپس گزریں اور دہرائیں، پیڑو برابر رکھیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Start with something no higher than a rolled towel.",
        "The trunk stays upright — leaning is how people catch a foot.",
        "Look ahead, not down at the object.",
      ],
      ur: [
        "ایسی چیز سے شروع کریں جو لپٹے تولیے سے اونچی نہ ہو۔",
        "دھڑ سیدھا رہے — جھکنے سے ہی پاؤں اٹکتا ہے۔",
        "سامنے دیکھیں، چیز کی طرف نیچے نہیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Looking down at the obstacle.",
        "Leaning the trunk sideways.",
        "Choosing too high an object.",
        "Practising without a support nearby.",
      ],
      ur: [
        "رکاوٹ کی طرف نیچے دیکھنا۔",
        "دھڑ کو پہلو میں جھکانا۔",
        "بہت اونچی چیز چننا۔",
        "قریب سہارے کے بغیر مشق کرنا۔",
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
    repetitions: "10 each way",
    sets: "2",
    holdTime: "—",
    frequency: "Daily",
    restBetweenSets: "30 seconds",
    progressions: ["step-up"],
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
      rationale: "Obstacle stepping is a standard functional and falls-prevention drill. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: STAND, travel: 800, hold: 400, label: "Standing beside the object" },
        { pose: pose({ hipRotNear: -28, hipNear: 32, kneeNear: 62, shoulderFar: 140, elbowFar: 40 }, STAND), travel: 1000, hold: 900, label: "Step sideways over it" },
      ],
    },
  },
  {
    id: "EX-K-020",
    slug: "stair-practice",
    name: { en: "Stair Practice", ur: "سیڑھیوں کی مشق" },
    bodyRegion: "Knee",
    joint: ["Tibiofemoral", "Hip", "Talocrural"],
    musclesTargeted: ["Quadriceps femoris", "Gluteus maximus", "Soleus", "Gluteus medius"],
    conditions: ["Return to daily activity", "Post-knee-surgery rehabilitation", "Falls risk", "Quadriceps weakness"],
    purpose: { en: "Stairs are where most people notice their leg is weak, and practising them properly is both the test and the treatment.", ur: "زیادہ تر لوگوں کو سیڑھیوں پر ہی اپنی ٹانگ کی کمزوری کا پتا چلتا ہے، اور ان کی درست مشق ہی امتحان بھی ہے اور علاج بھی۔" },
    exerciseType: "Functional & gait",
    difficulty: "Intermediate",
    contraction: ["Concentric", "Eccentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["Stairs with a rail"],
    startingPosition: { en: "Stand at the bottom of a flight of stairs with one hand on the rail.", ur: "سیڑھیوں کے نیچے کھڑے ہوں، ایک ہاتھ ریلنگ پر۔" },
    quickSteps: {
      en: [
        "Hold the rail and step up with the stronger leg first.",
        "Bring the other foot up to join it.",
        "Coming down, lead with the weaker leg.",
      ],
      ur: [
        "ریلنگ پکڑیں اور پہلے مضبوط ٹانگ سے اوپر قدم رکھیں۔",
        "دوسرا پاؤں بھی ساتھ لے آئیں۔",
        "نیچے آتے وقت پہلے کمزور ٹانگ رکھیں۔",
      ],
    },
    steps: {
      en: [
        "Hold the rail with one hand and stand close to the first step.",
        "Going up: lead with the stronger leg, then bring the other up beside it.",
        "Going down: lead with the weaker leg, then bring the stronger one down.",
        "The saying is 'up with the good, down with the bad'.",
        "Take one step at a time until you can manage foot over foot.",
      ],
      ur: [
        "ایک ہاتھ سے ریلنگ پکڑیں اور پہلی سیڑھی کے قریب کھڑے ہوں۔",
        "اوپر جاتے وقت: پہلے مضبوط ٹانگ رکھیں، پھر دوسری ساتھ لے آئیں۔",
        "نیچے آتے وقت: پہلے کمزور ٹانگ رکھیں، پھر مضبوط ٹانگ نیچے لائیں۔",
        "کہاوت یہ ہے: 'اچھی ٹانگ سے اوپر، کمزور ٹانگ سے نیچے'۔",
        "جب تک باری باری قدم نہ رکھ سکیں، ایک وقت میں ایک سیڑھی کریں۔",
      ],
    },
    specialInstructions: {
      en: [
        "'Up with the good, down with the bad' — this is the rule that protects the sore leg.",
        "Always use the rail until foot-over-foot is genuinely steady.",
        "Coming down is harder and more dangerous than going up.",
      ],
      ur: [
        "'اچھی ٹانگ سے اوپر، کمزور ٹانگ سے نیچے' — یہی اصول دُکھتی ٹانگ کی حفاظت کرتا ہے۔",
        "جب تک باری باری قدم رکھنا واقعی مستحکم نہ ہو، ہمیشہ ریلنگ استعمال کریں۔",
        "نیچے آنا اوپر جانے سے زیادہ مشکل اور زیادہ خطرناک ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Leading with the wrong leg.",
        "Not using the rail.",
        "Rushing, especially coming down.",
        "Carrying things in both hands.",
      ],
      ur: [
        "غلط ٹانگ سے شروع کرنا۔",
        "ریلنگ استعمال نہ کرنا۔",
        "جلدی کرنا، خاص طور پر نیچے آتے وقت۔",
        "دونوں ہاتھوں میں سامان اٹھانا۔",
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
    repetitions: "1 flight",
    sets: "2–3",
    holdTime: "—",
    frequency: "Daily",
    restBetweenSets: "30 seconds",
    progressions: [],
    regressions: ["step-up"],
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
      rationale: "Graded stair practice is standard functional retraining after lower limb surgery. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: STAND, travel: 800, hold: 400, label: "Standing at the stairs" },
        { pose: pose({ hipNear: 68, kneeNear: 78, ankleNear: -10, hipFar: -8, kneeFar: 6, shoulderNear: 120, elbowNear: 50, lumbar: 6 }, STAND), travel: 1000, hold: 900, label: "Step up leading with the stronger leg" },
      ],
    },
  },
  {
    id: "EX-H-031",
    slug: "floor-transfer-practice",
    name: { en: "Getting Up from the Floor", ur: "فرش سے اٹھنے کی مشق" },
    bodyRegion: "Pelvis & Hip",
    joint: ["Hip", "Tibiofemoral", "Glenohumeral"],
    musclesTargeted: ["Gluteus maximus", "Quadriceps femoris", "Triceps brachii", "Erector spinae"],
    conditions: ["Falls risk", "Older adult conditioning", "Post-fall confidence", "Return to independent living"],
    purpose: { en: "Knowing how to get up off the floor is what turns a fall into an inconvenience rather than an emergency.", ur: "فرش سے اٹھنا آنا ہی وہ چیز ہے جو گرنے کو ہنگامی حالت کے بجائے معمولی پریشانی بنا دیتی ہے۔" },
    exerciseType: "Functional & gait",
    difficulty: "Intermediate",
    contraction: ["Concentric", "Eccentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Quadruped",
    equipment: ["Exercise mat", "Sturdy chair"],
    startingPosition: { en: "Start lying on your side on a mat, with a sturdy chair placed within reach.", ur: "چٹائی پر پہلو کے بل لیٹ کر شروع کریں، ایک مضبوط کرسی پہنچ میں رکھی ہو۔" },
    quickSteps: {
      en: [
        "Roll onto your side, then push up onto all fours.",
        "Crawl to a sturdy chair and put both hands on the seat.",
        "Bring one foot forward and push up to standing.",
      ],
      ur: [
        "پہلو پر لڑھکیں، پھر چاروں ہاتھ پاؤں پر آ جائیں۔",
        "مضبوط کرسی تک جائیں اور دونوں ہاتھ نشست پر رکھیں۔",
        "ایک پاؤں آگے لائیں اور زور لگا کر کھڑے ہو جائیں۔",
      ],
    },
    steps: {
      en: [
        "Roll onto your side and push up onto one elbow, then onto both hands.",
        "Come onto all fours and rest there for a moment.",
        "Crawl to a sturdy chair and place both hands flat on the seat.",
        "Bring the stronger leg forward so that foot is flat on the floor.",
        "Push down through both hands and that foot to stand up, then turn and sit.",
      ],
      ur: [
        "پہلو پر لڑھکیں اور ایک کہنی پر، پھر دونوں ہاتھوں پر اٹھیں۔",
        "چاروں ہاتھ پاؤں پر آ جائیں اور لمحہ بھر آرام کریں۔",
        "مضبوط کرسی تک جائیں اور دونوں ہاتھ نشست پر سیدھے رکھیں۔",
        "مضبوط ٹانگ آگے لائیں تاکہ وہ پاؤں فرش پر سیدھا ہو۔",
        "دونوں ہاتھوں اور اُس پاؤں سے زور لگا کر کھڑے ہوں، پھر مڑ کر بیٹھ جائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Practise this before you need it — after a fall is the wrong time to learn.",
        "Make sure the chair cannot slide; put it against a wall.",
        "Rest at each stage; there is no hurry.",
      ],
      ur: [
        "ضرورت پڑنے سے پہلے مشق کریں — گرنے کے بعد سیکھنے کا وقت نہیں ہوتا۔",
        "یقینی بنائیں کہ کرسی پھسل نہ سکے؛ اسے دیوار سے لگا دیں۔",
        "ہر مرحلے پر آرام کریں؛ جلدی کی ضرورت نہیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Using a chair that can slide or tip.",
        "Trying to stand straight up without the chair.",
        "Rushing through the stages.",
        "Practising alone the first few times.",
      ],
      ur: [
        "ایسی کرسی استعمال کرنا جو پھسل یا الٹ سکے۔",
        "کرسی کے بغیر سیدھا کھڑا ہونے کی کوشش کرنا۔",
        "مراحل میں جلدی کرنا۔",
        "پہلی چند بار اکیلے مشق کرنا۔",
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
    repetitions: "3",
    sets: "1",
    holdTime: "—",
    frequency: "Twice weekly",
    restBetweenSets: "60 seconds",
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
      rationale: "Floor transfer training is a standard component of falls management programmes. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: QUADRUPED, travel: 800, hold: 400, label: "On all fours" },
        { pose: pose({ hipNear: 96, kneeNear: 88, ankleNear: -14, hipFar: 126, kneeFar: 122, shoulderNear: 78, elbowNear: 8, shoulderFar: 78, elbowFar: 8 }, QUADRUPED), travel: 1000, hold: 900, label: "Bring one foot forward to stand" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-W-014",
    slug: "ulnar-nerve-glide",
    name: { en: "Ulnar Nerve Glide", ur: "النار عصب کی حرکت" },
    bodyRegion: "Wrist & Hand",
    joint: ["Radiocarpal", "Humeroulnar", "Cervical spine C1–C7"],
    musclesTargeted: ["Flexor carpi ulnaris", "Ulnar nerve", "Interossei"],
    conditions: ["Cubital tunnel syndrome", "Ulnar nerve irritation", "Pins and needles in the ring and little fingers", "Post-elbow-surgery recovery"],
    purpose: { en: "Moves the nerve that runs behind the elbow, which when tethered causes numbness in the little and ring fingers.", ur: "کہنی کے پیچھے سے گزرنے والے عصب کو حرکت دیتی ہے، جو پھنس جائے تو چھوٹی اور اُس کے ساتھ والی انگلی سُن ہو جاتی ہے۔" },
    exerciseType: "Neural mobilisation",
    difficulty: "Beginner",
    contraction: ["Passive"],
    mode: "Active",
    load: "No load",
    position: "Standing",
    equipment: [],
    startingPosition: { en: "Stand or sit tall with one arm out to the side at shoulder height, palm facing up.", ur: "سیدھے کھڑے ہوں یا بیٹھیں، ایک بازو کندھے کی اونچائی پر پہلو میں، ہتھیلی اوپر۔" },
    quickSteps: {
      en: [
        "Hold the arm out to the side, palm up.",
        "Bend the elbow and bring the hand towards your face, making a mask shape.",
        "Straighten back out slowly and repeat.",
      ],
      ur: [
        "بازو پہلو میں رکھیں، ہتھیلی اوپر۔",
        "کہنی موڑ کر ہاتھ چہرے کی طرف لائیں، ماسک جیسی شکل بنائیں۔",
        "آہستہ واپس سیدھا کریں اور دہرائیں۔",
      ],
    },
    steps: {
      en: [
        "Hold one arm out to the side at shoulder height with the palm facing up.",
        "Make a circle with the thumb and index finger.",
        "Bend the elbow and turn the hand so the circle comes up around the eye, like goggles.",
        "Hold there for only two seconds — this is a glide, not a stretch.",
        "Straighten the arm slowly back out to the side.",
      ],
      ur: [
        "ایک بازو کندھے کی اونچائی پر پہلو میں رکھیں، ہتھیلی اوپر۔",
        "انگوٹھے اور شہادت کی انگلی سے دائرہ بنائیں۔",
        "کہنی موڑیں اور ہاتھ گھمائیں تاکہ دائرہ آنکھ کے گرد آ جائے، جیسے چشمہ۔",
        "وہاں صرف دو سیکنڈ رکیں — یہ حرکت ہے، کھنچاؤ نہیں۔",
        "بازو آہستہ واپس پہلو میں سیدھا کریں۔",
      ],
    },
    specialInstructions: {
      en: [
        "A nerve glide is not a stretch — never hold it long or pull into symptoms.",
        "If the tingling increases, do fewer repetitions and less range.",
        "Stop and tell your physiotherapist if numbness becomes constant.",
      ],
      ur: [
        "عصب کی حرکت کھنچاؤ نہیں — اسے کبھی دیر تک نہ روکیں اور نہ علامات تک کھینچیں۔",
        "سنسناہٹ بڑھے تو کم بار اور کم حد تک کریں۔",
        "سُن پن مستقل ہو جائے تو رک جائیں اور فزیو تھراپسٹ کو بتائیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Holding the end position too long.",
        "Pulling until the fingers tingle strongly.",
        "Doing too many repetitions on the first day.",
        "Continuing when symptoms worsen.",
      ],
      ur: [
        "آخری حالت میں بہت دیر رکنا۔",
        "اتنا کھینچنا کہ انگلیوں میں تیز سنسناہٹ ہو۔",
        "پہلے ہی دن بہت زیادہ بار کرنا۔",
        "علامات بڑھنے پر بھی جاری رکھنا۔",
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
    repetitions: "5–10",
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
      rationale: "Ulnar nerve gliding is used in cubital tunnel and ulnar neuropathy management. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ shoulderNear: 90, shoulderAbductNear: 84, elbowNear: 6 }, STAND), travel: 800, hold: 400, label: "Arm out to the side, palm up" },
        { pose: pose({ shoulderNear: 90, shoulderAbductNear: 84, elbowNear: 128, shoulderRotNear: 40 }, STAND), travel: 1000, hold: 900, label: "Bend the elbow towards the face" },
      ],
    },
  },
  {
    id: "EX-L-012",
    slug: "sciatic-nerve-glide",
    name: { en: "Sciatic Nerve Glide", ur: "سیاٹک عصب کی حرکت" },
    bodyRegion: "Lumbar",
    joint: ["Lumbar spine L1–L5", "Hip", "Tibiofemoral"],
    musclesTargeted: ["Hamstrings", "Sciatic nerve", "Gastrocnemius"],
    conditions: ["Sciatica recovery", "Nerve-related leg pain", "Post-discectomy recovery", "Hamstring tightness with nerve symptoms"],
    purpose: { en: "Slides the sciatic nerve along its path instead of stretching it, which is what an irritated nerve will tolerate when a hamstring stretch will not.", ur: "سیاٹک عصب کو کھینچنے کے بجائے اُس کے راستے پر سرکاتی ہے، اور حساس عصب یہی برداشت کرتا ہے جب ران کے پچھلے پٹھے کا کھنچاؤ برداشت نہ ہو۔" },
    exerciseType: "Neural mobilisation",
    difficulty: "Beginner",
    contraction: ["Passive"],
    mode: "Active",
    load: "Bodyweight",
    position: "Sitting",
    equipment: ["Chair"],
    startingPosition: { en: "Sit on a firm chair with a slumped back, both feet flat and the hands resting on the thighs.", ur: "مضبوط کرسی پر جھک کر بیٹھیں، دونوں پاؤں فرش پر اور ہاتھ رانوں پر۔" },
    quickSteps: {
      en: [
        "Sit slumped with the chin on the chest.",
        "Straighten one knee while lifting the head at the same time.",
        "Then bend the knee and drop the head, and repeat.",
      ],
      ur: [
        "جھک کر بیٹھیں، ٹھوڑی سینے پر۔",
        "ایک گھٹنا سیدھا کریں اور ساتھ ہی سر اٹھائیں۔",
        "پھر گھٹنا موڑیں اور سر جھکائیں، اور دہرائیں۔",
      ],
    },
    steps: {
      en: [
        "Sit on a firm chair and let the back slump, chin down towards the chest.",
        "Straighten one knee out in front of you.",
        "At the same moment, lift your head and look forward.",
        "Then bend the knee back down while dropping the chin to the chest again.",
        "Move smoothly between the two — the nerve slides rather than stretches.",
      ],
      ur: [
        "مضبوط کرسی پر بیٹھیں اور کمر جھکنے دیں، ٹھوڑی سینے کی طرف نیچے۔",
        "ایک گھٹنا سامنے سیدھا کریں۔",
        "بالکل اُسی وقت سر اٹھائیں اور سامنے دیکھیں۔",
        "پھر گھٹنا واپس موڑیں اور ساتھ ہی ٹھوڑی دوبارہ سینے کی طرف لائیں۔",
        "دونوں کے درمیان ہموار حرکت کریں — عصب کھنچتا نہیں، سرکتا ہے۔",
      ],
    },
    specialInstructions: {
      en: [
        "The head and the knee move in opposite directions — that is the whole trick.",
        "Never hold the end position; keep moving through it.",
        "If leg pain travels further down, stop and tell your physiotherapist.",
      ],
      ur: [
        "سر اور گھٹنا مخالف سمتوں میں حرکت کرتے ہیں — یہی اصل بات ہے۔",
        "آخری حالت میں کبھی نہ رکیں؛ حرکت جاری رکھیں۔",
        "ٹانگ کا درد مزید نیچے جائے تو رک جائیں اور فزیو تھراپسٹ کو بتائیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Holding the straight-knee position.",
        "Moving the head and knee the same way.",
        "Pushing into strong leg pain.",
        "Doing too many on the first day.",
      ],
      ur: [
        "گھٹنا سیدھا کر کے رک جانا۔",
        "سر اور گھٹنے کو ایک ہی سمت میں حرکت دینا۔",
        "ٹانگ کے تیز درد تک زور لگانا۔",
        "پہلے ہی دن بہت زیادہ بار کرنا۔",
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
    repetitions: "10 each side",
    sets: "2",
    holdTime: "—",
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
      rationale: "Sciatic nerve gliding is used where nerve mechanosensitivity limits stretching. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ kneeNear: 84, lumbar: 22, thorax: 18, neck: 18 }, SEATED), travel: 800, hold: 400, label: "Sitting slumped, chin down" },
        { pose: pose({ kneeNear: 6, ankleNear: -18, lumbar: 4, thorax: 2, neck: -6 }, SEATED), travel: 1000, hold: 900, label: "Straighten the knee, lift the head" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-T-012",
    slug: "pursed-lip-breathing",
    name: { en: "Pursed Lip Breathing", ur: "ہونٹ سکیڑ کر سانس لینا" },
    bodyRegion: "Thoracic",
    joint: ["Costovertebral", "Thoracic spine T1–T12"],
    musclesTargeted: ["Diaphragm", "Intercostals", "Accessory respiratory muscles"],
    conditions: ["Breathlessness", "Chronic lung disease", "Post-COVID recovery", "Anxiety"],
    purpose: { en: "Slows the breath out against pursed lips, which keeps the small airways open longer and eases breathlessness within a few breaths.", ur: "ہونٹ سکیڑ کر سانس آہستہ باہر نکالتی ہے، جس سے چھوٹی نالیاں زیادہ دیر کھلی رہتی ہیں اور چند سانسوں میں سانس کی تنگی کم ہو جاتی ہے۔" },
    exerciseType: "Breathing & relaxation",
    difficulty: "Beginner",
    contraction: ["Isometric"],
    mode: "Active",
    load: "No load",
    position: "Sitting",
    equipment: ["Chair"],
    startingPosition: { en: "Sit forward on a chair with the forearms resting on your thighs and the shoulders relaxed.", ur: "کرسی پر آگے کی طرف بیٹھیں، بازو رانوں پر رکھے اور کندھے ڈھیلے۔" },
    quickSteps: {
      en: [
        "Sit forward with the forearms on your thighs.",
        "Breathe in through the nose for two counts.",
        "Breathe out through pursed lips for four counts.",
      ],
      ur: [
        "آگے کی طرف بیٹھیں، بازو رانوں پر۔",
        "ناک سے دو گنتی تک سانس لیں۔",
        "ہونٹ سکیڑ کر چار گنتی تک سانس چھوڑیں۔",
      ],
    },
    steps: {
      en: [
        "Sit leaning slightly forward with the forearms resting on the thighs.",
        "Let the shoulders drop and the neck muscles relax.",
        "Breathe in gently through the nose for a count of two.",
        "Purse the lips as if about to whistle, and breathe out slowly for a count of four.",
        "Never force the air out — let it flow, and repeat until the breathing settles.",
      ],
      ur: [
        "ذرا آگے جھک کر بیٹھیں، بازو رانوں پر رکھیں۔",
        "کندھے نیچے چھوڑیں اور گردن کے پٹھے ڈھیلے کریں۔",
        "ناک سے نرمی سے دو کی گنتی تک سانس لیں۔",
        "ہونٹ ایسے سکیڑیں جیسے سیٹی بجانی ہو، اور چار کی گنتی تک آہستہ سانس چھوڑیں۔",
        "ہوا زبردستی نہ نکالیں — بہنے دیں، اور سانس معمول پر آنے تک دہرائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "The out-breath should be twice as long as the in-breath.",
        "Leaning forward on the forearms is a genuine treatment position, not slouching.",
        "Use it during the activity that makes you breathless, not just afterwards.",
      ],
      ur: [
        "سانس چھوڑنا لینے سے دگنا لمبا ہو۔",
        "بازوؤں پر آگے جھکنا اصل علاجی حالت ہے، جھک کر بیٹھنا نہیں۔",
        "جس کام سے سانس پھولے اُس کے دوران استعمال کریں، صرف بعد میں نہیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Forcing the air out hard.",
        "Breathing in too deeply.",
        "Tensing the neck and shoulders.",
        "Only using it after the breathlessness has passed.",
      ],
      ur: [
        "ہوا زور سے باہر نکالنا۔",
        "بہت گہری سانس لینا۔",
        "گردن اور کندھے سخت کر لینا۔",
        "صرف سانس کی تنگی ختم ہونے کے بعد استعمال کرنا۔",
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
    holdTime: "2 in, 4 out",
    frequency: "As needed, and 3 times daily",
    restBetweenSets: "—",
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
      rationale: "Pursed lip breathing is standard in chronic lung disease and breathlessness management. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ lumbar: 8, thorax: 6 }, SEATED), travel: 800, hold: 400, label: "Sitting forward, arms on the thighs" },
        { pose: pose({ lumbar: 14, thorax: 10, shoulderNear: 150, elbowNear: 92, shoulderFar: 150, elbowFar: 92 }, SEATED), travel: 1000, hold: 900, label: "Breathe out slowly through pursed lips" },
      ],
      props: [{ kind: "chair" }],
    },
  },
];
