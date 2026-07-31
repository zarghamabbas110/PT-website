import { pose } from "@/lib/figure";
import type { Exercise } from "../schema";
import { SEATED, STAND } from "./bases";

/* ==========================================================================
   ELBOW AND FOREARM
   --------------------------------------------------------------------------
   Range first, then the forearm turn, then the tendon work that tennis and
   golfer's elbow need. Poses are drafts pending clinical review.
   ========================================================================== */

export const ELBOW: Exercise[] = [
  {
    id: "EX-E-001",
    slug: "active-elbow-flexion",
    name: { en: "Active Elbow Flexion", ur: "کہنی کو خود موڑنا" },
    bodyRegion: "Elbow",
    joint: ["Humeroulnar"],
    musclesTargeted: ["Biceps brachii", "Brachialis", "Brachioradialis"],
    conditions: ["Elbow stiffness", "Post-immobilisation", "Post-fracture rehabilitation"],
    purpose: { en: "Restores the bend needed to bring food to the mouth, comb hair and carry a bag.", ur: "کہنی موڑنے کی حرکت بحال کرتی ہے جو کھانا منہ تک لے جانے، بال بنانے اور تھیلا اٹھانے کے لیے ضروری ہے۔" },
    difficulty: "Beginner",
    contraction: ["Concentric", "Eccentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Sitting",
    equipment: [],
    startingPosition: { en: "Sit tall with the arm hanging by your side and the palm facing forward.", ur: "سیدھے بیٹھیں، بازو پہلو پر لٹکا ہو اور ہتھیلی سامنے کی طرف۔" },
    quickSteps: {
      en: [
        "Sit tall, arm by your side, palm facing forward.",
        "Bend the elbow to bring the hand towards the shoulder.",
        "Lower slowly all the way down.",
      ],
      ur: [
        "سیدھے بیٹھیں، بازو پہلو پر، ہتھیلی سامنے۔",
        "کہنی موڑ کر ہاتھ کندھے کی طرف لائیں۔",
        "آہستہ پوری طرح نیچے لائیں۔",
      ],
    },
    steps: {
      en: [
        "Keep the upper arm still against your side.",
        "Bend the elbow as far as is comfortable.",
        "Pause at the top without forcing.",
        "Straighten slowly and completely.",
      ],
      ur: [
        "اوپری بازو پہلو سے لگا اور ساکن رکھیں۔",
        "کہنی آرام کی حد تک موڑیں۔",
        "اوپر رکیں مگر زبردستی نہ کریں۔",
        "آہستہ اور مکمل سیدھا کریں۔",
      ],
    },
    specialInstructions: {
      en: [
        "The upper arm should not swing forward.",
        "Full straightening matters as much as full bending.",
        "Mild stretch is fine; sharp pain is not.",
      ],
      ur: [
        "اوپری بازو آگے نہ جھولے۔",
        "پوری طرح سیدھا کرنا اتنا ہی اہم ہے جتنا موڑنا۔",
        "ہلکا کھنچاؤ ٹھیک ہے؛ تیز درد نہیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Swinging the upper arm to help.",
        "Stopping short of full straightening.",
        "Shrugging the shoulder.",
        "Rushing the lowering phase.",
      ],
      ur: [
        "مدد کے لیے اوپری بازو جھلانا۔",
        "پوری طرح سیدھا نہ کرنا۔",
        "کندھا اُچھالنا۔",
        "نیچے لانے میں جلدی کرنا۔",
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
    holdTime: "2 seconds at the top",
    frequency: "Daily",
    restBetweenSets: "30 seconds",
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
      rationale: "Active elbow flexion is the standard starting point for restoring elbow range after immobilisation. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ elbowNear: 10, elbowFar: 10, shoulderNear: 176, shoulderFar: 176 }, SEATED), travel: 800, hold: 400, label: "Start — elbow straight" },
        { pose: pose({ elbowNear: 130, elbowFar: 130, shoulderNear: 176, shoulderFar: 176 }, SEATED), travel: 1000, hold: 900, label: "Bend the elbow fully" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-E-002",
    slug: "active-elbow-extension",
    name: { en: "Active Elbow Extension", ur: "کہنی کو خود سیدھا کرنا" },
    bodyRegion: "Elbow",
    joint: ["Humeroulnar"],
    musclesTargeted: ["Triceps brachii", "Anconeus"],
    conditions: ["Elbow stiffness", "Post-immobilisation", "Triceps weakness"],
    purpose: { en: "Restores full straightening, which is needed to push up from a chair and reach overhead.", ur: "کہنی پوری سیدھی کرنے کی صلاحیت بحال کرتی ہے جو کرسی سے اٹھنے اور اوپر ہاتھ بڑھانے کے لیے ضروری ہے۔" },
    difficulty: "Beginner",
    contraction: ["Concentric", "Eccentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Sitting",
    equipment: [],
    startingPosition: { en: "Sit tall with the elbow bent and the hand near the shoulder.", ur: "سیدھے بیٹھیں، کہنی مڑی ہو اور ہاتھ کندھے کے قریب۔" },
    quickSteps: {
      en: [
        "Sit tall with the elbow bent, hand near the shoulder.",
        "Straighten the elbow fully.",
        "Bend it back slowly.",
      ],
      ur: [
        "سیدھے بیٹھیں، کہنی مڑی ہو، ہاتھ کندھے کے قریب۔",
        "کہنی پوری طرح سیدھی کریں۔",
        "آہستہ واپس موڑیں۔",
      ],
    },
    steps: {
      en: [
        "Keep the upper arm still.",
        "Straighten the elbow as far as it will comfortably go.",
        "Hold the straight position briefly.",
        "Return slowly to the bent position.",
      ],
      ur: [
        "اوپری بازو ساکن رکھیں۔",
        "کہنی آرام کی حد تک سیدھی کریں۔",
        "سیدھی حالت میں تھوڑا رکیں۔",
        "آہستہ واپس مڑی حالت میں لائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Do not lock the elbow forcefully.",
        "Stop short if a hard block is felt.",
        "Keep the shoulder relaxed.",
      ],
      ur: [
        "کہنی کو زبردستی لاک نہ کریں۔",
        "سخت رکاوٹ محسوس ہو تو پہلے رک جائیں۔",
        "کندھا ڈھیلا رکھیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Forcing the last few degrees.",
        "Moving the shoulder instead of the elbow.",
        "Holding the breath.",
        "Bouncing at the end.",
      ],
      ur: [
        "آخری چند درجے زبردستی کرنا۔",
        "کہنی کے بجائے کندھا حرکت دینا۔",
        "سانس روکنا۔",
        "آخر میں جھٹکا دینا۔",
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
    frequency: "Daily",
    restBetweenSets: "30 seconds",
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
      rationale: "Active elbow extension complements flexion work in restoring elbow range. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ elbowNear: 130, elbowFar: 130 }, SEATED), travel: 800, hold: 400, label: "Start — elbow bent" },
        { pose: pose({ elbowNear: 6, elbowFar: 6 }, SEATED), travel: 1000, hold: 900, label: "Straighten the elbow" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-E-003",
    slug: "forearm-pronation-supination",
    name: { en: "Forearm Pronation and Supination", ur: "ہتھیلی اوپر نیچے گھمانا" },
    bodyRegion: "Elbow",
    joint: ["Radioulnar"],
    musclesTargeted: ["Pronator teres", "Supinator", "Biceps brachii"],
    conditions: ["Post-fracture stiffness", "Forearm stiffness", "Tennis elbow"],
    purpose: { en: "Restores the turning of the palm needed for using a key, a doorknob and a spoon.", ur: "ہتھیلی گھمانے کی حرکت بحال کرتی ہے جو چابی، دروازے کے ہینڈل اور چمچ کے استعمال کے لیے ضروری ہے۔" },
    difficulty: "Beginner",
    contraction: ["Concentric", "Eccentric"],
    mode: "Active",
    load: "No load",
    position: "Sitting",
    equipment: [],
    startingPosition: { en: "Sit with the elbow bent to 90 degrees and tucked at your side, palm facing up.", ur: "بیٹھ کر کہنی نوے درجے موڑیں اور پہلو سے لگائیں، ہتھیلی اوپر کی طرف۔" },
    quickSteps: {
      en: [
        "Sit with the elbow bent at your side.",
        "Turn the palm fully up, then fully down.",
        "Move slowly and keep the elbow still.",
      ],
      ur: [
        "کہنی پہلو سے لگا کر بیٹھیں۔",
        "ہتھیلی پوری اوپر کریں، پھر پوری نیچے۔",
        "آہستہ حرکت دیں اور کہنی ساکن رکھیں۔",
      ],
    },
    steps: {
      en: [
        "Tuck the elbow firmly against your side.",
        "Turn the palm up as far as is comfortable.",
        "Then turn it down as far as is comfortable.",
        "Keep the shoulder still — the turn comes from the forearm.",
      ],
      ur: [
        "کہنی مضبوطی سے پہلو سے لگائیں۔",
        "ہتھیلی آرام کی حد تک اوپر گھمائیں۔",
        "پھر آرام کی حد تک نیچے گھمائیں۔",
        "کندھا ساکن رکھیں — گھماؤ بازو سے آنا چاہیے۔",
      ],
    },
    specialInstructions: {
      en: [
        "The elbow must stay pinned at your side.",
        "The shoulder should not rotate to help.",
        "A rolled towel under the elbow can steady it.",
      ],
      ur: [
        "کہنی پہلو سے جمی رہنی چاہیے۔",
        "کندھا مدد کے لیے نہ گھومے۔",
        "کہنی کے نیچے لپٹا تولیہ مدد دیتا ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting the elbow lift away from the side.",
        "Rotating the shoulder instead of the forearm.",
        "Moving too fast.",
        "Only turning one way.",
      ],
      ur: [
        "کہنی کا پہلو سے اٹھ جانا۔",
        "بازو کے بجائے کندھا گھمانا۔",
        "بہت تیز حرکت دینا۔",
        "صرف ایک طرف گھمانا۔",
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
    repetitions: "10 each way",
    sets: "3",
    holdTime: "2 seconds each end",
    frequency: "Daily",
    restBetweenSets: "30 seconds",
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
      rationale: "Pronation and supination range work is standard after forearm and elbow injury. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ elbowNear: 88, elbowFar: 88, shoulderRotNear: -30, shoulderRotFar: -30 }, SEATED), travel: 800, hold: 400, label: "Palm turned up" },
        { pose: pose({ elbowNear: 88, elbowFar: 88, shoulderRotNear: 40, shoulderRotFar: 40 }, SEATED), travel: 1000, hold: 900, label: "Palm turned down" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-E-004",
    slug: "wrist-extensor-stretch",
    name: { en: "Wrist Extensor Stretch (Tennis Elbow)", ur: "کلائی کے اوپری پٹھوں کا کھنچاؤ" },
    bodyRegion: "Elbow",
    joint: ["Humeroradial", "Radiocarpal"],
    musclesTargeted: ["Extensor carpi radialis brevis", "Extensor digitorum", "Common extensor origin"],
    conditions: ["Lateral epicondylalgia (tennis elbow)", "Forearm tightness", "Gripping strain"],
    purpose: { en: "Eases the tight forearm muscles that pull on the outer elbow and cause tennis elbow pain.", ur: "بازو کے اُن سخت پٹھوں کو ڈھیلا کرتی ہے جو کہنی کے باہر کھنچاؤ ڈال کر ٹینس ایلبو کا درد پیدا کرتے ہیں۔" },
    difficulty: "Beginner",
    contraction: ["Passive"],
    mode: "Passive",
    load: "No load",
    position: "Standing",
    equipment: [],
    startingPosition: { en: "Stand or sit with the arm straight out in front at shoulder height, palm facing down.", ur: "کھڑے یا بیٹھ کر بازو سامنے کندھے کی اونچائی پر سیدھا رکھیں، ہتھیلی نیچے کی طرف۔" },
    quickSteps: {
      en: [
        "Straighten the arm out in front, palm down.",
        "Bend the wrist down and gently pull the hand with the other hand.",
        "Hold 30 seconds, then release slowly.",
      ],
      ur: [
        "بازو سامنے سیدھا کریں، ہتھیلی نیچے۔",
        "کلائی نیچے موڑیں اور دوسرے ہاتھ سے ہلکا کھینچیں۔",
        "تیس سیکنڈ رکیں، پھر آہستہ چھوڑیں۔",
      ],
    },
    steps: {
      en: [
        "Keep the elbow completely straight — this matters.",
        "Let the wrist drop so the fingers point down.",
        "Use the other hand to add a gentle pull.",
        "Hold steadily without bouncing.",
      ],
      ur: [
        "کہنی بالکل سیدھی رکھیں — یہ اہم ہے۔",
        "کلائی نیچے چھوڑیں تاکہ انگلیاں نیچے کی طرف ہوں۔",
        "دوسرے ہاتھ سے ہلکا سا کھینچیں۔",
        "بغیر جھٹکے کے مستقل رکیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "A bent elbow makes the stretch useless — keep it straight.",
        "Stretch to mild tension, never to pain.",
        "Curling the fingers into the palm increases the stretch.",
      ],
      ur: [
        "مڑی کہنی سے کھنچاؤ بےکار ہو جاتا ہے — سیدھی رکھیں۔",
        "ہلکے کھنچاؤ تک جائیں، درد تک ہرگز نہیں۔",
        "انگلیاں مٹھی میں بند کرنے سے کھنچاؤ بڑھتا ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Bending the elbow.",
        "Bouncing the stretch.",
        "Pulling hard enough to hurt.",
        "Holding for only a few seconds.",
      ],
      ur: [
        "کہنی موڑ لینا۔",
        "کھنچاؤ میں جھٹکا دینا۔",
        "اتنا زور لگانا کہ درد ہو۔",
        "صرف چند سیکنڈ رکنا۔",
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
    repetitions: "3",
    sets: "2",
    holdTime: "30 seconds",
    frequency: "2–3 times daily",
    restBetweenSets: "30 seconds",
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
      rationale: "Extensor stretching is a routine component of conservative management for lateral epicondylalgia. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ shoulderNear: 110, elbowNear: 8, shoulderFar: 178, elbowFar: 6 }, STAND), travel: 800, hold: 400, label: "Arm out in front, palm down" },
        { pose: pose({ shoulderNear: 92, elbowNear: 4, shoulderFar: 150, elbowFar: 60, shoulderAbductFar: -24 }, STAND), travel: 1000, hold: 900, label: "Bend the wrist down and pull gently" },
      ],
    },
  },
  {
    id: "EX-E-005",
    slug: "wrist-flexor-stretch",
    name: { en: "Wrist Flexor Stretch (Golfer's Elbow)", ur: "کلائی کے نچلے پٹھوں کا کھنچاؤ" },
    bodyRegion: "Elbow",
    joint: ["Humeroulnar", "Radiocarpal"],
    musclesTargeted: ["Flexor carpi radialis", "Flexor digitorum", "Common flexor origin"],
    conditions: ["Medial epicondylalgia (golfer's elbow)", "Forearm tightness", "Gripping strain"],
    purpose: { en: "Eases the tight forearm muscles that pull on the inner elbow and cause golfer's elbow pain.", ur: "بازو کے اُن سخت پٹھوں کو ڈھیلا کرتی ہے جو کہنی کے اندرونی حصے پر کھنچاؤ ڈال کر گولفر ایلبو کا درد بناتے ہیں۔" },
    difficulty: "Beginner",
    contraction: ["Passive"],
    mode: "Passive",
    load: "No load",
    position: "Standing",
    equipment: [],
    startingPosition: { en: "Stand or sit with the arm straight out in front at shoulder height, palm facing up.", ur: "کھڑے یا بیٹھ کر بازو سامنے کندھے کی اونچائی پر سیدھا رکھیں، ہتھیلی اوپر کی طرف۔" },
    quickSteps: {
      en: [
        "Straighten the arm out in front, palm up.",
        "Bend the wrist down and gently pull the fingers back.",
        "Hold 30 seconds, then release slowly.",
      ],
      ur: [
        "بازو سامنے سیدھا کریں، ہتھیلی اوپر۔",
        "کلائی نیچے موڑیں اور انگلیاں ہلکا پیچھے کھینچیں۔",
        "تیس سیکنڈ رکیں، پھر آہستہ چھوڑیں۔",
      ],
    },
    steps: {
      en: [
        "Keep the elbow completely straight.",
        "Turn the palm up to face the ceiling.",
        "Use the other hand to draw the fingers back gently.",
        "Hold steadily and breathe normally.",
      ],
      ur: [
        "کہنی بالکل سیدھی رکھیں۔",
        "ہتھیلی اوپر چھت کی طرف کریں۔",
        "دوسرے ہاتھ سے انگلیاں نرمی سے پیچھے کھینچیں۔",
        "مستقل رکیں اور سانس معمول کے مطابق لیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "The elbow must stay straight for the stretch to reach the forearm.",
        "Mild tension only — this should not be painful.",
        "Stop if you get pins and needles in the hand.",
      ],
      ur: [
        "کھنچاؤ بازو تک پہنچنے کے لیے کہنی سیدھی رہنی چاہیے۔",
        "صرف ہلکا کھنچاؤ — درد نہیں ہونا چاہیے۔",
        "ہاتھ میں سنسناہٹ ہو تو رک جائیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Bending the elbow.",
        "Pulling too hard.",
        "Bouncing.",
        "Ignoring numbness or tingling.",
      ],
      ur: [
        "کہنی موڑ لینا۔",
        "بہت زور سے کھینچنا۔",
        "جھٹکا دینا۔",
        "سُن پن یا سنسناہٹ کو نظر انداز کرنا۔",
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
    repetitions: "3",
    sets: "2",
    holdTime: "30 seconds",
    frequency: "2–3 times daily",
    restBetweenSets: "30 seconds",
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
      rationale: "Flexor stretching is a routine component of conservative management for medial epicondylalgia. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ shoulderNear: 110, elbowNear: 8, shoulderFar: 178, elbowFar: 6 }, STAND), travel: 800, hold: 400, label: "Arm out in front, palm up" },
        { pose: pose({ shoulderNear: 92, elbowNear: 4, shoulderFar: 150, elbowFar: 60, shoulderAbductFar: -24 }, STAND), travel: 1000, hold: 900, label: "Draw the fingers back gently" },
      ],
    },
  },
  {
    id: "EX-E-006",
    slug: "eccentric-wrist-extension",
    name: { en: "Eccentric Wrist Extension", ur: "کلائی کو آہستہ نیچے لانا" },
    bodyRegion: "Elbow",
    joint: ["Radiocarpal", "Humeroradial"],
    musclesTargeted: ["Extensor carpi radialis brevis", "Extensor digitorum"],
    conditions: ["Lateral epicondylalgia (tennis elbow)", "Extensor tendinopathy"],
    purpose: { en: "Loads the tendon slowly on the way down, which is the part shown to help stubborn tennis elbow.", ur: "ٹینڈن پر نیچے آتے وقت آہستہ بوجھ ڈالتی ہے، جو پرانے ٹینس ایلبو میں سب سے مفید حصہ ہے۔" },
    difficulty: "Intermediate",
    contraction: ["Eccentric"],
    mode: "Resisted",
    load: "Free weight",
    position: "Sitting",
    equipment: ["Light dumbbell (0.5–2 kg)"],
    startingPosition: { en: "Sit with the forearm resting on your thigh, palm facing down and the wrist just past the knee.", ur: "بیٹھ کر بازو ران پر رکھیں، ہتھیلی نیچے اور کلائی گھٹنے سے ذرا آگے۔" },
    quickSteps: {
      en: [
        "Rest the forearm on your thigh, palm down, holding a light weight.",
        "Lift the wrist up using the other hand.",
        "Lower it down slowly over 3 seconds — this is the whole exercise.",
      ],
      ur: [
        "بازو ران پر رکھیں، ہتھیلی نیچے، ہلکا وزن پکڑیں۔",
        "دوسرے ہاتھ کی مدد سے کلائی اوپر کریں۔",
        "تین سیکنڈ میں آہستہ نیچے لائیں — یہی اصل ورزش ہے۔",
      ],
    },
    steps: {
      en: [
        "Support the forearm fully on the thigh.",
        "Use the other hand to lift the weight up — do not lift it with the sore side.",
        "Let go and lower slowly, counting to three.",
        "Repeat; the slow lowering is the treatment.",
      ],
      ur: [
        "بازو کو ران پر پوری طرح ٹکائیں۔",
        "وزن اوپر لے جانے کے لیے دوسرا ہاتھ استعمال کریں — درد والے ہاتھ سے نہ اٹھائیں۔",
        "چھوڑ کر تین گن کر آہستہ نیچے لائیں۔",
        "دہرائیں؛ آہستہ نیچے لانا ہی علاج ہے۔",
      ],
    },
    specialInstructions: {
      en: [
        "Only the lowering is done by the painful side.",
        "Mild ache during the exercise is acceptable and expected.",
        "Add weight very gradually, over weeks.",
      ],
      ur: [
        "صرف نیچے لانا درد والے ہاتھ سے ہو۔",
        "ورزش کے دوران ہلکی تکلیف قابل قبول اور متوقع ہے۔",
        "وزن بہت آہستہ، ہفتوں میں بڑھائیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Lifting the weight with the painful side.",
        "Lowering too fast.",
        "Starting with too much weight.",
        "Stopping at the first mild ache.",
      ],
      ur: [
        "درد والے ہاتھ سے وزن اٹھانا۔",
        "بہت تیزی سے نیچے لانا۔",
        "شروع میں زیادہ وزن لینا۔",
        "پہلی ہلکی تکلیف پر چھوڑ دینا۔",
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
    repetitions: "15",
    sets: "3",
    holdTime: "3 seconds lowering",
    frequency: "Daily",
    restBetweenSets: "30 seconds",
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
      rationale: "Eccentric loading is a well-established approach in extensor tendinopathy of the elbow. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ elbowNear: 88, elbowFar: 88 }, SEATED), travel: 800, hold: 400, label: "Wrist lifted with the other hand" },
        { pose: pose({ elbowNear: 78, elbowFar: 88 }, SEATED), travel: 1000, hold: 900, label: "Lower slowly over 3 seconds" },
      ],
      props: [{ kind: "chair" }],
    },
  },
];
