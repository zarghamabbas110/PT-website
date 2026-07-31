import { pose } from "@/lib/figure";
import type { Exercise } from "../schema";
import { PRONE, QUADRUPED, SEATED, SIDE_LYING, STAND, SUPINE, SUPINE_LONG } from "./bases";

/* ==========================================================================
   DEPTH FOR THE THINNER REGIONS
   --------------------------------------------------------------------------
   The elbow, wrist and hand, neck, upper back and trunk had roughly a third
   of the shoulder's coverage. This levels them up: the two elbow stretches
   that decide whether an elbow works at all, hand strengthening in both
   directions rather than only gripping, the deep and superficial neck
   muscles, four ways into a stiff upper back, and the trunk work that sits
   either side of a plank.
   Drafts pending clinical review.
   ========================================================================== */

export const REGION_DEPTH: Exercise[] = [
  {
    id: "EX-EL-017",
    slug: "elbow-extension-stretch",
    name: { en: "Elbow Straightening Stretch", ur: "کہنی سیدھی کرنے کا کھنچاؤ" },
    bodyRegion: "Elbow",
    joint: ["Humeroulnar", "Humeroradial"],
    musclesTargeted: ["Biceps brachii", "Brachialis", "Elbow capsule"],
    conditions: ["Post-fracture stiffness", "Elbow flexion contracture", "Post-cast stiffness", "Post-immobilisation stiffness"],
    purpose: { en: "An elbow that will not straighten fully is far more disabling than one that will not bend, and the last few degrees are the ones that vanish first.", ur: "جو کہنی پوری طرح سیدھی نہ ہو وہ نہ مڑنے والی کہنی سے کہیں زیادہ معذور کرتی ہے، اور آخری چند درجے سب سے پہلے ختم ہوتے ہیں۔" },
    exerciseType: "Stretching",
    difficulty: "Beginner",
    contraction: ["Passive"],
    mode: "Passive",
    load: "Assisted",
    position: "Sitting",
    equipment: ["Table", "Small rolled towel"],
    startingPosition: { en: "Sit at a table with the upper arm resting on it, a rolled towel under the elbow and the forearm hanging free.", ur: "میز پر بیٹھیں، اوپری بازو میز پر، کہنی کے نیچے لپٹا تولیہ اور بازو آزاد لٹکتا ہوا۔" },
    quickSteps: {
      en: [
        "Rest the upper arm on a table with a towel under the elbow.",
        "Let the forearm hang and straighten under its own weight.",
        "Hold 2 minutes, palm facing up.",
      ],
      ur: [
        "اوپری بازو میز پر رکھیں، کہنی کے نیچے تولیہ۔",
        "بازو کو اپنے وزن سے لٹکنے اور سیدھا ہونے دیں۔",
        "دو منٹ رکیں، ہتھیلی اوپر کی طرف۔",
      ],
    },
    steps: {
      en: [
        "Sit sideways at a table with the upper arm resting along it.",
        "Place a small rolled towel under the elbow so the forearm can hang past the edge.",
        "Turn the palm to face upwards and let the arm go completely soft.",
        "Let the weight of the forearm slowly straighten the elbow, and stay there.",
      ],
      ur: [
        "میز کے پہلو میں بیٹھیں، اوپری بازو اُس پر رکھیں۔",
        "کہنی کے نیچے چھوٹا لپٹا تولیہ رکھیں تاکہ بازو کنارے سے باہر لٹک سکے۔",
        "ہتھیلی اوپر کی طرف گھمائیں اور بازو بالکل ڈھیلا چھوڑ دیں۔",
        "بازو کے وزن کو آہستہ کہنی سیدھی کرنے دیں، اور وہیں رہیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "The palm facing up is what puts the stretch on the right structures.",
        "A long gentle hold beats a short hard pull for a stiff elbow.",
        "A light weight in the hand can be added once two minutes is comfortable.",
      ],
      ur: [
        "ہتھیلی اوپر رکھنے سے ہی کھنچاؤ صحیح جگہ پڑتا ہے۔",
        "سخت کہنی کے لیے لمبا نرم کھنچاؤ مختصر زور دار کھینچ سے بہتر ہے۔",
        "دو منٹ آرام سے ہو جائیں تو ہاتھ میں ہلکا وزن رکھا جا سکتا ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Moving faster as you tire.",
        "Holding the breath during the effort.",
        "Pushing through sharp pain.",
        "Losing the starting position by the last repetition.",
      ],
      ur: [
        "تھکنے پر تیز حرکت کرنا۔",
        "زور لگاتے وقت سانس روکنا۔",
        "تیز درد کے باوجود زور لگانا۔",
        "آخری بار تک شروع والی حالت بگاڑ لینا۔",
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
    holdTime: "2 minutes",
    frequency: "3 times daily",
    restBetweenSets: "—",
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
      rationale: "Prolonged low-load stretching is standard for elbow contracture. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ shoulderNear: 150, elbowNear: 70 }, SEATED), travel: 800, hold: 400, label: "Forearm hanging, elbow bent" },
        { pose: pose({ shoulderNear: 150, elbowNear: 12 }, SEATED), travel: 1000, hold: 900, label: "Let it straighten under its weight" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-EL-018",
    slug: "elbow-flexion-stretch",
    name: { en: "Elbow Bending Stretch", ur: "کہنی موڑنے کا کھنچاؤ" },
    bodyRegion: "Elbow",
    joint: ["Humeroulnar"],
    musclesTargeted: ["Triceps brachii", "Elbow capsule", "Anconeus"],
    conditions: ["Post-fracture stiffness", "Post-cast stiffness", "Difficulty reaching the face", "Post-immobilisation stiffness"],
    purpose: { en: "Without full bending you cannot reach your own mouth, hair or the back of your head — which is why this is worked on as hard as straightening.", ur: "پوری طرح مڑے بغیر آپ اپنے منہ، بالوں یا سر کے پیچھے تک نہیں پہنچ سکتے — اسی لیے اس پر سیدھا کرنے جتنی ہی محنت کی جاتی ہے۔" },
    exerciseType: "Stretching",
    difficulty: "Beginner",
    contraction: ["Passive"],
    mode: "Passive",
    load: "Assisted",
    position: "Sitting",
    equipment: ["Chair"],
    startingPosition: { en: "Sit tall with the affected elbow bent as far as it will go and the other hand on the wrist.", ur: "سیدھے بیٹھیں، متاثرہ کہنی جہاں تک مڑ سکے مڑی ہو اور دوسرا ہاتھ کلائی پر۔" },
    quickSteps: {
      en: [
        "Bend the affected elbow as far as it goes.",
        "Use the other hand to press it gently further.",
        "Hold 30 seconds, then release slowly.",
      ],
      ur: [
        "متاثرہ کہنی جہاں تک مڑ سکے موڑیں۔",
        "دوسرے ہاتھ سے نرمی سے اسے مزید دبائیں۔",
        "تیس سیکنڈ رکیں، پھر آہستہ چھوڑ دیں۔",
      ],
    },
    steps: {
      en: [
        "Sit tall with the upper arm held against your side.",
        "Bend the elbow actively as far as it will go on its own.",
        "Take hold of the wrist with the other hand and press gently further.",
        "Hold at a firm stretch, not at pain, then let go slowly.",
      ],
      ur: [
        "سیدھے بیٹھیں، اوپری بازو پہلو سے لگا ہو۔",
        "کہنی خود جہاں تک مڑ سکے موڑیں۔",
        "دوسرے ہاتھ سے کلائی پکڑ کر نرمی سے مزید دبائیں۔",
        "سخت کھنچاؤ پر رکیں، درد پر نہیں، پھر آہستہ چھوڑ دیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Bend it as far as you can yourself first, then assist — that order matters.",
        "Measure by what you can reach: shoulder, then mouth, then the top of the head.",
        "Never force a stiff elbow after a fracture; it responds badly and can lay down bone.",
      ],
      ur: [
        "پہلے خود جتنا مڑ سکے موڑیں، پھر مدد لیں — یہ ترتیب اہم ہے۔",
        "پیمانہ یہ ہے کہ کہاں تک پہنچتے ہیں: کندھا، پھر منہ، پھر سر کی چوٹی۔",
        "ٹوٹ پھوٹ کے بعد سخت کہنی پر کبھی زبردستی نہ کریں؛ یہ نقصان دیتی ہے اور ہڈی بن سکتی ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Moving faster as you tire.",
        "Holding the breath during the effort.",
        "Pushing through sharp pain.",
        "Losing the starting position by the last repetition.",
      ],
      ur: [
        "تھکنے پر تیز حرکت کرنا۔",
        "زور لگاتے وقت سانس روکنا۔",
        "تیز درد کے باوجود زور لگانا۔",
        "آخری بار تک شروع والی حالت بگاڑ لینا۔",
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
    frequency: "3 times daily",
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
      rationale: "Assisted elbow flexion stretching is standard after immobilisation. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ elbowNear: 90 }, SEATED), travel: 800, hold: 400, label: "Elbow bent as far as it goes" },
        { pose: pose({ elbowNear: 138, shoulderFar: 120, elbowFar: 90 }, SEATED), travel: 1000, hold: 900, label: "Press gently further" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-EL-019",
    slug: "hammer-curl",
    name: { en: "Thumb-Up Curl", ur: "انگوٹھا اوپر رکھ کر بازو موڑنا" },
    bodyRegion: "Elbow",
    joint: ["Humeroulnar", "Humeroradial"],
    musclesTargeted: ["Brachioradialis", "Brachialis", "Biceps brachii"],
    conditions: ["Elbow weakness", "Tennis elbow", "Grip weakness", "Return to manual work"],
    purpose: { en: "Curling with the thumb up works the muscle that crosses the outside of the elbow, which is the one that fails in a stubborn tennis elbow.", ur: "انگوٹھا اوپر رکھ کر بازو موڑنے سے وہ پٹھا کام کرتا ہے جو کہنی کے باہر سے گزرتا ہے، اور ضدی ٹینس ایلبو میں یہی کمزور ہوتا ہے۔" },
    exerciseType: "Strengthening",
    difficulty: "Intermediate",
    contraction: ["Concentric", "Eccentric"],
    mode: "Resisted",
    load: "Free weight",
    position: "Standing",
    equipment: ["Light weight or bottle"],
    startingPosition: { en: "Stand tall with a light weight in each hand, arms at your sides and the thumbs pointing forward.", ur: "سیدھے کھڑے ہوں، ہر ہاتھ میں ہلکا وزن، بازو پہلوؤں پر اور انگوٹھے سامنے کی طرف۔" },
    quickSteps: {
      en: [
        "Hold a light weight in each hand, thumbs forward.",
        "Bend the elbows keeping the thumbs up throughout.",
        "Lower slowly over three seconds.",
      ],
      ur: [
        "ہر ہاتھ میں ہلکا وزن پکڑیں، انگوٹھے سامنے۔",
        "کہنیاں موڑیں، انگوٹھے پوری حرکت میں اوپر رہیں۔",
        "تین سیکنڈ میں آہستہ نیچے لائیں۔",
      ],
    },
    steps: {
      en: [
        "Stand tall with the elbows tucked in at your sides.",
        "Hold the weights with the thumbs pointing forward, palms facing your thighs.",
        "Bend the elbows up towards the shoulders without turning the wrists.",
        "Lower slowly over three seconds, keeping the elbows pinned at your sides.",
      ],
      ur: [
        "سیدھے کھڑے ہوں، کہنیاں پہلوؤں سے لگی ہوں۔",
        "وزن انگوٹھے سامنے رکھ کر پکڑیں، ہتھیلیاں رانوں کی طرف۔",
        "کلائیاں گھمائے بغیر کہنیاں کندھوں کی طرف موڑیں۔",
        "تین سیکنڈ میں آہستہ نیچے لائیں، کہنیاں پہلوؤں سے لگی رہیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "The thumb staying up is the whole difference from an ordinary curl.",
        "The elbows must not drift forward; that hands the work to the shoulder.",
        "Useful in tennis elbow once the isometric work is painless.",
      ],
      ur: [
        "انگوٹھے کا اوپر رہنا ہی عام کرل سے فرق ہے۔",
        "کہنیاں آگے نہ آئیں؛ اس سے کام کندھے کے پاس چلا جاتا ہے۔",
        "ساکن ورزش بغیر درد ہونے لگے تو ٹینس ایلبو میں مفید ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Moving faster as you tire.",
        "Holding the breath during the effort.",
        "Pushing through sharp pain.",
        "Losing the starting position by the last repetition.",
      ],
      ur: [
        "تھکنے پر تیز حرکت کرنا۔",
        "زور لگاتے وقت سانس روکنا۔",
        "تیز درد کے باوجود زور لگانا۔",
        "آخری بار تک شروع والی حالت بگاڑ لینا۔",
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
    holdTime: "1 second at the top",
    frequency: "Every other day",
    restBetweenSets: "45 seconds",
    progressions: [],
    regressions: ["isometric-elbow-flexion"],
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
      rationale: "Neutral-grip elbow flexion loads brachioradialis and is used in lateral elbow pain. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ elbowNear: 8, elbowFar: 8 }, STAND), travel: 800, hold: 400, label: "Weights at the sides, thumbs up" },
        { pose: pose({ elbowNear: 130, elbowFar: 130 }, STAND), travel: 1000, hold: 900, label: "Curl up keeping the thumbs up" },
      ],
      props: [{ kind: "dumbbells" }],
    },
  },
  {
    id: "EX-EL-020",
    slug: "elbow-supination-with-weight",
    name: { en: "Weighted Forearm Turn", ur: "وزن کے ساتھ بازو گھمانا" },
    bodyRegion: "Elbow",
    joint: ["Radioulnar", "Humeroradial"],
    musclesTargeted: ["Supinator", "Pronator teres", "Biceps brachii"],
    conditions: ["Post-fracture weakness", "Difficulty turning a key", "Forearm weakness", "Tennis elbow"],
    purpose: { en: "Holding a weight at one end of a stick makes turning the palm much harder, which is how forearm rotation strength is actually built.", ur: "چھڑی کے ایک سرے پر وزن پکڑنے سے ہتھیلی گھمانا کہیں مشکل ہو جاتا ہے، اور بازو گھمانے کی طاقت اسی طرح بنتی ہے۔" },
    exerciseType: "Strengthening",
    difficulty: "Intermediate",
    contraction: ["Concentric", "Eccentric"],
    mode: "Resisted",
    load: "Free weight",
    position: "Sitting",
    equipment: ["Hammer or weighted stick", "Chair"],
    startingPosition: { en: "Sit with the elbow tucked in and bent to ninety degrees, holding a hammer by its handle, head upwards.", ur: "بیٹھ جائیں، کہنی پہلو سے لگی اور نوے درجے مڑی، ہتھوڑا دستے سے پکڑیں، سر اوپر کی طرف۔" },
    quickSteps: {
      en: [
        "Hold a hammer by the handle with the head up.",
        "Turn the palm slowly up, then slowly down.",
        "Keep the elbow pinned at your side.",
      ],
      ur: [
        "ہتھوڑا دستے سے پکڑیں، سر اوپر کی طرف۔",
        "ہتھیلی آہستہ اوپر گھمائیں، پھر آہستہ نیچے۔",
        "کہنی پہلو سے لگی رکھیں۔",
      ],
    },
    steps: {
      en: [
        "Sit with the forearm resting on your thigh, hand past the knee.",
        "Hold the hammer by the end of its handle so the weight is far from your hand.",
        "Turn the palm slowly up until the hammer head points to the side.",
        "Turn it slowly the other way, taking three seconds in each direction.",
      ],
      ur: [
        "بازو ران پر رکھ کر بیٹھیں، ہاتھ گھٹنے سے آگے۔",
        "ہتھوڑا دستے کے سرے سے پکڑیں تاکہ وزن ہاتھ سے دور رہے۔",
        "ہتھیلی آہستہ اوپر گھمائیں یہاں تک کہ ہتھوڑے کا سر پہلو کی طرف ہو۔",
        "پھر آہستہ دوسری طرف گھمائیں، ہر سمت میں تین سیکنڈ لیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Sliding your grip down the handle makes it harder without changing the weight.",
        "The elbow must stay against your side or the shoulder takes over.",
        "Work both directions; turning the palm down is usually the weaker one.",
      ],
      ur: [
        "گرفت دستے پر نیچے کرنے سے وزن بدلے بغیر مشکل بڑھ جاتی ہے۔",
        "کہنی پہلو سے لگی رہے ورنہ کندھا کام سنبھال لیتا ہے۔",
        "دونوں سمتوں میں کریں؛ ہتھیلی نیچے گھمانا عموماً زیادہ کمزور ہوتا ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Moving faster as you tire.",
        "Holding the breath during the effort.",
        "Pushing through sharp pain.",
        "Losing the starting position by the last repetition.",
      ],
      ur: [
        "تھکنے پر تیز حرکت کرنا۔",
        "زور لگاتے وقت سانس روکنا۔",
        "تیز درد کے باوجود زور لگانا۔",
        "آخری بار تک شروع والی حالت بگاڑ لینا۔",
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
    sets: "3",
    holdTime: "1 second",
    frequency: "Every other day",
    restBetweenSets: "45 seconds",
    progressions: [],
    regressions: ["band-forearm-pronation"],
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
      rationale: "Weighted forearm rotation is standard after distal radius and forearm fractures. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ elbowNear: 88, shoulderNear: 168 }, SEATED), travel: 800, hold: 400, label: "Elbow tucked in, hammer held" },
        { pose: pose({ elbowNear: 88, shoulderNear: 166 }, SEATED), travel: 1000, hold: 900, label: "Turn the palm slowly up" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-W-017",
    slug: "wrist-flexor-strengthening",
    name: { en: "Wrist Curl", ur: "کلائی موڑنے کی مضبوطی" },
    bodyRegion: "Wrist & Hand",
    joint: ["Radiocarpal", "Midcarpal"],
    musclesTargeted: ["Flexor carpi radialis", "Flexor carpi ulnaris", "Finger flexors"],
    conditions: ["Grip weakness", "Golfer's elbow", "Post-cast weakness", "Return to manual work"],
    purpose: { en: "The muscles that close the wrist are the same ones behind a firm grip, and they weaken fast after any spell in a cast.", ur: "کلائی بند کرنے والے پٹھے ہی مضبوط گرفت کے پیچھے ہوتے ہیں، اور پلستر کے بعد یہ تیزی سے کمزور ہو جاتے ہیں۔" },
    exerciseType: "Strengthening",
    difficulty: "Beginner",
    contraction: ["Concentric", "Eccentric"],
    mode: "Resisted",
    load: "Free weight",
    position: "Sitting",
    equipment: ["Light weight or bottle", "Chair"],
    startingPosition: { en: "Sit with the forearm resting on your thigh, palm up and the hand past the knee, holding a light weight.", ur: "بیٹھ جائیں، بازو ران پر، ہتھیلی اوپر اور ہاتھ گھٹنے سے آگے، ہلکا وزن پکڑا ہوا۔" },
    quickSteps: {
      en: [
        "Rest the forearm on your thigh, palm up.",
        "Curl the wrist upwards, then lower slowly.",
        "Let it drop fully at the bottom each time.",
      ],
      ur: [
        "بازو ران پر رکھیں، ہتھیلی اوپر۔",
        "کلائی اوپر موڑیں، پھر آہستہ نیچے لائیں۔",
        "ہر بار نیچے پوری طرح جانے دیں۔",
      ],
    },
    steps: {
      en: [
        "Sit with the forearm along the thigh and the hand hanging past the knee.",
        "Hold a light weight with the palm facing up.",
        "Curl the wrist upwards as far as it will go.",
        "Lower slowly over three seconds, letting the wrist drop fully at the bottom.",
      ],
      ur: [
        "بازو ران پر رکھ کر بیٹھیں اور ہاتھ گھٹنے سے آگے لٹکائیں۔",
        "ہتھیلی اوپر رکھ کر ہلکا وزن پکڑیں۔",
        "کلائی جہاں تک جائے اوپر موڑیں۔",
        "تین سیکنڈ میں آہستہ نیچے لائیں، نیچے کلائی کو پوری طرح گرنے دیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Letting it drop fully at the bottom is what gives the full range.",
        "The forearm must not lift off the thigh.",
        "Half a kilogram is a sensible starting weight for most people.",
      ],
      ur: [
        "نیچے پوری طرح گرنے دینے سے ہی پوری حرکت ملتی ہے۔",
        "بازو ران سے اٹھنا نہیں چاہیے۔",
        "زیادہ تر لوگوں کے لیے آدھا کلو شروع کرنے کا مناسب وزن ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Moving faster as you tire.",
        "Holding the breath during the effort.",
        "Pushing through sharp pain.",
        "Losing the starting position by the last repetition.",
      ],
      ur: [
        "تھکنے پر تیز حرکت کرنا۔",
        "زور لگاتے وقت سانس روکنا۔",
        "تیز درد کے باوجود زور لگانا۔",
        "آخری بار تک شروع والی حالت بگاڑ لینا۔",
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
    holdTime: "1 second",
    frequency: "Every other day",
    restBetweenSets: "45 seconds",
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
      rationale: "Resisted wrist flexion is standard grip and forearm strengthening. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ elbowNear: 88, shoulderNear: 160 }, SEATED), travel: 800, hold: 400, label: "Palm up, wrist dropped" },
        { pose: pose({ elbowNear: 88, shoulderNear: 158 }, SEATED), travel: 1000, hold: 900, label: "Curl the wrist up" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-W-018",
    slug: "putty-squeeze",
    name: { en: "Squeezing Putty or Dough", ur: "آٹا یا پُٹی دبانا" },
    bodyRegion: "Wrist & Hand",
    joint: ["Metacarpophalangeal", "Interphalangeal", "Carpometacarpal"],
    musclesTargeted: ["Flexor digitorum profundus", "Lumbricals", "Interossei", "Thenar muscles"],
    conditions: ["Grip weakness", "Arthritis of the hand", "Post-cast weakness", "Reduced dexterity"],
    purpose: { en: "Dough gives resistance in every direction at once, which is closer to real hand use than squeezing a ball, and every kitchen has some.", ur: "آٹا ہر سمت میں ایک ساتھ مزاحمت دیتا ہے، جو گیند دبانے کی نسبت ہاتھ کے حقیقی استعمال سے زیادہ ملتا جلتا ہے، اور ہر باورچی خانے میں موجود ہے۔" },
    exerciseType: "Strengthening",
    difficulty: "Beginner",
    contraction: ["Concentric", "Isometric"],
    mode: "Resisted",
    load: "Bodyweight",
    position: "Sitting",
    equipment: ["Therapy putty or stiff dough"],
    startingPosition: { en: "Sit with the forearm supported on a table and a ball of putty or stiff dough in the hand.", ur: "بازو میز پر رکھ کر بیٹھیں، ہاتھ میں پُٹی یا سخت آٹے کا پیڑا ہو۔" },
    quickSteps: {
      en: [
        "Squeeze the putty into a fist and hold.",
        "Then roll it into a sausage with the whole hand.",
        "Then pinch bits off it with the thumb and each finger.",
      ],
      ur: [
        "پُٹی کو مٹھی میں دبائیں اور روکیں۔",
        "پھر پورے ہاتھ سے اسے بیلن کی شکل دیں۔",
        "پھر انگوٹھے اور ہر انگلی سے اُس کے ٹکڑے چٹکی سے نکالیں۔",
      ],
    },
    steps: {
      en: [
        "Rest the forearm on a table with the hand free.",
        "Squeeze the putty slowly into a full fist and hold for five seconds.",
        "Open the hand fully and roll the putty into a sausage on the table.",
        "Finish by pinching pieces off it between the thumb and each finger in turn.",
      ],
      ur: [
        "بازو میز پر رکھیں، ہاتھ آزاد ہو۔",
        "پُٹی آہستہ پوری مٹھی میں دبائیں اور پانچ سیکنڈ روکیں۔",
        "ہاتھ پوری طرح کھولیں اور پُٹی کو میز پر بیلن کی شکل دیں۔",
        "آخر میں انگوٹھے اور باری باری ہر انگلی سے اُس کے ٹکڑے چٹکی سے نکالیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Pinching between the thumb and each finger matters as much as the grip.",
        "Stiffer dough is a harder exercise; that is the whole progression.",
        "Stop if the base of the thumb becomes sharply painful.",
      ],
      ur: [
        "انگوٹھے اور ہر انگلی سے چٹکی بھرنا گرفت جتنا ہی اہم ہے۔",
        "زیادہ سخت آٹا زیادہ مشکل ورزش ہے؛ ترقی کا یہی طریقہ ہے۔",
        "انگوٹھے کی جڑ میں تیز درد ہو تو رک جائیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Moving faster as you tire.",
        "Holding the breath during the effort.",
        "Pushing through sharp pain.",
        "Losing the starting position by the last repetition.",
      ],
      ur: [
        "تھکنے پر تیز حرکت کرنا۔",
        "زور لگاتے وقت سانس روکنا۔",
        "تیز درد کے باوجود زور لگانا۔",
        "آخری بار تک شروع والی حالت بگاڑ لینا۔",
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
    repetitions: "10 of each",
    sets: "2",
    holdTime: "5 seconds on the squeeze",
    frequency: "Daily",
    restBetweenSets: "30 seconds",
    progressions: ["grip-strengthening-ball"],
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
      rationale: "Graded putty exercise is standard in hand therapy for grip and pinch. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ elbowNear: 82, shoulderNear: 150 }, SEATED), travel: 800, hold: 400, label: "Putty in the hand" },
        { pose: pose({ elbowNear: 84, shoulderNear: 152 }, SEATED), travel: 1000, hold: 900, label: "Squeeze into a full fist" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-W-019",
    slug: "wrist-weight-bearing",
    name: { en: "Leaning on the Hands", ur: "ہاتھوں پر ٹیک لگانا" },
    bodyRegion: "Wrist & Hand",
    joint: ["Radiocarpal", "Midcarpal", "Metacarpophalangeal"],
    musclesTargeted: ["Wrist extensors", "Wrist flexors", "Forearm muscles"],
    conditions: ["Post-cast stiffness", "Wrist weakness", "Difficulty pushing up from a chair", "Return to weight bearing"],
    purpose: { en: "Being able to take weight through a hand is what lets you push up from a chair or off the floor, and it is lost quickly after any wrist injury.", ur: "ہاتھ پر وزن ڈال سکنا ہی کرسی یا فرش سے اٹھنے کے لیے ضروری ہے، اور کلائی کی کسی بھی چوٹ کے بعد یہ جلد ختم ہو جاتا ہے۔" },
    exerciseType: "Stabilisation & motor control",
    difficulty: "Intermediate",
    contraction: ["Isometric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["Table"],
    startingPosition: { en: "Stand at a firm table with both palms flat on it, fingers pointing forward and elbows straight.", ur: "مضبوط میز کے پاس کھڑے ہوں، دونوں ہتھیلیاں اُس پر سیدھی، انگلیاں سامنے اور کہنیاں سیدھی۔" },
    quickSteps: {
      en: [
        "Place both palms flat on a firm table.",
        "Lean forward so weight goes through the hands.",
        "Hold 10 seconds, then ease off.",
      ],
      ur: [
        "دونوں ہتھیلیاں مضبوط میز پر سیدھی رکھیں۔",
        "آگے جھکیں تاکہ وزن ہاتھوں پر آئے۔",
        "دس سیکنڈ رکیں، پھر زور کم کریں۔",
      ],
    },
    steps: {
      en: [
        "Stand at a firm, stable table with both palms flat and fingers pointing forwards.",
        "Keep the elbows straight but not locked.",
        "Lean forward gradually so more of your weight passes through the wrists.",
        "Take only as much weight as is comfortable, hold ten seconds, then ease back.",
      ],
      ur: [
        "مضبوط اور ثابت میز کے پاس کھڑے ہوں، دونوں ہتھیلیاں سیدھی اور انگلیاں سامنے۔",
        "کہنیاں سیدھی رکھیں مگر سختی سے جام نہ کریں۔",
        "آہستہ آہستہ آگے جھکیں تاکہ زیادہ وزن کلائیوں سے گزرے۔",
        "صرف اتنا وزن لیں جتنا آرام دہ ہو، دس سیکنڈ رکیں، پھر پیچھے آ جائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "You control the load entirely by how far you lean; start with very little.",
        "Progress to a wall push-up, then to hands on a chair, then to the floor.",
        "Stop at once if the wrist pinches at the back.",
      ],
      ur: [
        "بوجھ مکمل طور پر آپ کے جھکنے پر منحصر ہے؛ بہت کم سے شروع کریں۔",
        "پھر دیوار پش اپ، پھر کرسی پر ہاتھ، پھر فرش تک بڑھیں۔",
        "کلائی کے پیچھے چبھن ہو تو فوراً رک جائیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Moving faster as you tire.",
        "Holding the breath during the effort.",
        "Pushing through sharp pain.",
        "Losing the starting position by the last repetition.",
      ],
      ur: [
        "تھکنے پر تیز حرکت کرنا۔",
        "زور لگاتے وقت سانس روکنا۔",
        "تیز درد کے باوجود زور لگانا۔",
        "آخری بار تک شروع والی حالت بگاڑ لینا۔",
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
    repetitions: "5",
    sets: "3",
    holdTime: "10 seconds",
    frequency: "Daily",
    restBetweenSets: "30 seconds",
    progressions: ["wall-push-up"],
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
      rationale: "Graded wrist weight bearing is standard after immobilisation. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ shoulderNear: 120, elbowNear: 30, shoulderFar: 120, elbowFar: 30 }, STAND), travel: 800, hold: 400, label: "Palms on the table" },
        { pose: pose({ shoulderNear: 100, elbowNear: 6, shoulderFar: 100, elbowFar: 6, lumbar: 10, hipNear: 26 }, STAND), travel: 1000, hold: 900, label: "Lean through the wrists" },
      ],
      props: [{ kind: "tableSupport" }],
    },
  },
  {
    id: "EX-W-020",
    slug: "finger-extension-band",
    name: { en: "Opening the Hand against a Band", ur: "ربڑ بینڈ کے خلاف ہاتھ کھولنا" },
    bodyRegion: "Wrist & Hand",
    joint: ["Metacarpophalangeal", "Interphalangeal"],
    musclesTargeted: ["Extensor digitorum", "Dorsal interossei", "Abductor pollicis"],
    conditions: ["Grip imbalance", "Tennis elbow", "Arthritis of the hand", "Repetitive gripping work"],
    purpose: { en: "Everyone exercises closing the hand and nobody exercises opening it, which is part of why gripping muscles get tight and sore.", ur: "ہر کوئی ہاتھ بند کرنے کی ورزش کرتا ہے اور کوئی کھولنے کی نہیں، اور یہی وجہ ہے کہ پکڑنے والے پٹھے سخت اور دُکھنے لگتے ہیں۔" },
    exerciseType: "Strengthening",
    difficulty: "Beginner",
    contraction: ["Concentric", "Eccentric"],
    mode: "Resisted",
    load: "Resistance band",
    position: "Sitting",
    equipment: ["Rubber band"],
    startingPosition: { en: "Sit with a rubber band looped around all five fingertips, hand relaxed.", ur: "بیٹھ جائیں، ربڑ بینڈ تمام پانچ انگلیوں کی نوکوں کے گرد ڈالیں، ہاتھ ڈھیلا۔" },
    quickSteps: {
      en: [
        "Loop a rubber band around all five fingertips.",
        "Open the fingers against it as wide as they go.",
        "Close slowly over three seconds.",
      ],
      ur: [
        "ربڑ بینڈ تمام پانچ انگلیوں کی نوکوں کے گرد ڈالیں۔",
        "اُس کے خلاف انگلیاں جتنی کھل سکیں کھولیں۔",
        "تین سیکنڈ میں آہستہ بند کریں۔",
      ],
    },
    steps: {
      en: [
        "Loop an ordinary rubber band around all five fingertips including the thumb.",
        "Rest the forearm on a table with the hand free.",
        "Open the fingers and thumb outwards against the band, as wide as they go.",
        "Close them slowly over three seconds against the band's pull.",
      ],
      ur: [
        "عام ربڑ بینڈ انگوٹھے سمیت پانچوں انگلیوں کی نوکوں کے گرد ڈالیں۔",
        "بازو میز پر رکھیں، ہاتھ آزاد ہو۔",
        "بینڈ کے خلاف انگلیاں اور انگوٹھا باہر کی طرف جتنا کھل سکیں کھولیں۔",
        "بینڈ کی کھنچائی کے خلاف تین سیکنڈ میں آہستہ بند کریں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Two or three bands together make it harder; that is the progression.",
        "Keep the fingers straight as they open, not clawed.",
        "This balances all the gripping most hands do all day.",
      ],
      ur: [
        "دو تین بینڈ ایک ساتھ ڈالنے سے مشکل بڑھ جاتی ہے؛ ترقی کا یہی طریقہ ہے۔",
        "کھولتے وقت انگلیاں سیدھی رکھیں، مڑی ہوئی نہیں۔",
        "یہ اُس ساری پکڑ کا توازن بناتی ہے جو ہاتھ سارا دن کرتا ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Moving faster as you tire.",
        "Holding the breath during the effort.",
        "Pushing through sharp pain.",
        "Losing the starting position by the last repetition.",
      ],
      ur: [
        "تھکنے پر تیز حرکت کرنا۔",
        "زور لگاتے وقت سانس روکنا۔",
        "تیز درد کے باوجود زور لگانا۔",
        "آخری بار تک شروع والی حالت بگاڑ لینا۔",
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
    repetitions: "15",
    sets: "3",
    holdTime: "1 second open",
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
      rationale: "Resisted finger extension balances the flexor-dominant demands of daily hand use. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ elbowNear: 82, shoulderNear: 150 }, SEATED), travel: 800, hold: 400, label: "Band around the fingertips" },
        { pose: pose({ elbowNear: 84, shoulderNear: 152 }, SEATED), travel: 1000, hold: 900, label: "Open the fingers wide" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-CX-018",
    slug: "cervical-rotation-with-overpressure",
    name: { en: "Neck Turn with a Gentle Push", ur: "ہلکے دباؤ کے ساتھ گردن گھمانا" },
    bodyRegion: "Cervical",
    joint: ["Cervical spine C1–C7", "Atlantoaxial"],
    musclesTargeted: ["Sternocleidomastoid", "Splenius capitis", "Upper trapezius"],
    conditions: ["Neck stiffness", "Reduced rotation when driving", "Torticollis recovery", "Postural strain"],
    purpose: { en: "Once the neck turns freely by itself, a light push at the very end recovers the last few degrees — the ones needed to reverse a car.", ur: "جب گردن خود آزادی سے گھومنے لگے تو آخر میں ہلکا دباؤ آخری چند درجے واپس دلاتا ہے — وہی جو گاڑی پیچھے کرنے کے لیے چاہیے۔" },
    exerciseType: "Range of motion",
    difficulty: "Intermediate",
    contraction: ["Passive"],
    mode: "Active-assisted",
    load: "Assisted",
    position: "Sitting",
    equipment: ["Chair"],
    startingPosition: { en: "Sit tall with the shoulders relaxed and both feet flat on the floor.", ur: "سیدھے بیٹھیں، کندھے ڈھیلے اور دونوں پاؤں فرش پر۔" },
    quickSteps: {
      en: [
        "Turn the head as far as it goes by itself.",
        "Place a hand on the jaw and press gently a little further.",
        "Hold 5 seconds, then return to the middle.",
      ],
      ur: [
        "سر جہاں تک خود گھومے گھمائیں۔",
        "ایک ہاتھ جبڑے پر رکھ کر نرمی سے تھوڑا اور دبائیں۔",
        "پانچ سیکنڈ رکیں، پھر درمیان میں واپس آئیں۔",
      ],
    },
    steps: {
      en: [
        "Sit tall and turn the head as far as it will comfortably go on its own.",
        "Place the hand of the same side flat on the jaw.",
        "Press very gently to take the head a few degrees further.",
        "Hold five seconds, release the hand first, then bring the head back.",
      ],
      ur: [
        "سیدھے بیٹھیں اور سر آرام کی حد تک خود گھمائیں۔",
        "اُسی طرف کا ہاتھ جبڑے پر رکھیں۔",
        "بہت نرمی سے دبائیں تاکہ سر چند درجے اور گھومے۔",
        "پانچ سیکنڈ رکیں، پہلے ہاتھ ہٹائیں، پھر سر واپس لائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Only do this once plain active rotation is comfortable and free.",
        "The push is tiny — a few degrees, not a wrench.",
        "Stop at once and do not repeat if you feel dizzy or sick.",
      ],
      ur: [
        "یہ صرف تب کریں جب سادہ گھماؤ آرام دہ اور آزاد ہو جائے۔",
        "دباؤ بہت معمولی ہو — چند درجے، جھٹکا نہیں۔",
        "چکر یا متلی ہو تو فوراً رک جائیں اور دوبارہ نہ کریں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Moving faster as you tire.",
        "Holding the breath during the effort.",
        "Pushing through sharp pain.",
        "Losing the starting position by the last repetition.",
      ],
      ur: [
        "تھکنے پر تیز حرکت کرنا۔",
        "زور لگاتے وقت سانس روکنا۔",
        "تیز درد کے باوجود زور لگانا۔",
        "آخری بار تک شروع والی حالت بگاڑ لینا۔",
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
    holdTime: "5 seconds",
    frequency: "Twice daily",
    restBetweenSets: "30 seconds",
    progressions: [],
    regressions: ["neck-rotation"],
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
      rationale: "Active-assisted cervical rotation with light overpressure is used once active range is pain-free. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ shoulderNear: 174, elbowNear: 22 }, SEATED), travel: 800, hold: 400, label: "Head turned as far as it goes" },
        { pose: pose({ shoulderNear: 60, elbowNear: 124, head: -4 }, SEATED), travel: 1000, hold: 900, label: "Press gently a little further" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-CX-019",
    slug: "chin-tuck-lying",
    name: { en: "Chin Tuck Lying Down", ur: "لیٹ کر ٹھوڑی اندر کرنا" },
    bodyRegion: "Cervical",
    joint: ["Cervical spine C1–C7", "Atlanto-occipital"],
    musclesTargeted: ["Deep neck flexors", "Longus colli", "Longus capitis"],
    conditions: ["Forward head posture", "Neck weakness", "Whiplash recovery", "Cervicogenic headache"],
    purpose: { en: "Lying down takes the weight of the head out of it, so the deep neck muscles can be found and trained without the big surface ones taking over.", ur: "لیٹنے سے سر کا وزن ہٹ جاتا ہے، اس لیے گردن کے گہرے پٹھے ڈھونڈے اور مضبوط کیے جا سکتے ہیں بغیر اس کے کہ بڑے اوپری پٹھے کام سنبھال لیں۔" },
    exerciseType: "Stabilisation & motor control",
    difficulty: "Beginner",
    contraction: ["Isometric"],
    mode: "Active",
    load: "No load",
    position: "Supine",
    equipment: ["Exercise mat", "Thin pillow"],
    startingPosition: { en: "Lie on your back with the knees bent and the head resting on a thin pillow, eyes to the ceiling.", ur: "سیدھے لیٹ جائیں، گھٹنے مڑے اور سر پتلے تکیے پر، نظریں چھت کی طرف۔" },
    quickSteps: {
      en: [
        "Lie on your back with the head on a thin pillow.",
        "Nod the chin gently down towards the throat.",
        "Hold 10 seconds without lifting the head.",
      ],
      ur: [
        "سیدھے لیٹ جائیں، سر پتلے تکیے پر۔",
        "ٹھوڑی نرمی سے گلے کی طرف نیچے جھکائیں۔",
        "سر اٹھائے بغیر دس سیکنڈ رکیں۔",
      ],
    },
    steps: {
      en: [
        "Lie on your back with the knees bent and the head supported on a thin pillow.",
        "Nod the chin gently down, as if saying a small yes, lengthening the back of the neck.",
        "The head stays on the pillow throughout — this is a nod, not a lift.",
        "Hold ten seconds while breathing normally, then release completely.",
      ],
      ur: [
        "گھٹنے موڑ کر سیدھے لیٹ جائیں، سر پتلے تکیے پر ٹکا ہو۔",
        "ٹھوڑی نرمی سے نیچے جھکائیں، جیسے ہلکا سا 'ہاں' کہہ رہے ہوں، گردن کا پچھلا حصہ لمبا کریں۔",
        "سر پوری ورزش میں تکیے پر رہے — یہ جھکاؤ ہے، اٹھانا نہیں۔",
        "عام سانس لیتے ہوئے دس سیکنڈ رکیں، پھر پوری طرح چھوڑ دیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "If the front of the neck stands out in cords, you are using the wrong muscles.",
        "The head lifting off the pillow is the commonest mistake — keep it down.",
        "Build up to ten holds of ten seconds before adding any head lift.",
      ],
      ur: [
        "گردن کے سامنے رگیں ابھر آئیں تو آپ غلط پٹھے استعمال کر رہے ہیں۔",
        "سر کا تکیے سے اٹھ جانا سب سے عام غلطی ہے — اسے نیچے رکھیں۔",
        "سر اٹھانا شامل کرنے سے پہلے دس دس سیکنڈ کے دس دور تک پہنچیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Moving faster as you tire.",
        "Holding the breath during the effort.",
        "Pushing through sharp pain.",
        "Losing the starting position by the last repetition.",
      ],
      ur: [
        "تھکنے پر تیز حرکت کرنا۔",
        "زور لگاتے وقت سانس روکنا۔",
        "تیز درد کے باوجود زور لگانا۔",
        "آخری بار تک شروع والی حالت بگاڑ لینا۔",
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
    holdTime: "10 seconds",
    frequency: "Daily",
    restBetweenSets: "30 seconds",
    progressions: ["deep-neck-flexor-hold"],
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
      rationale: "Supine craniocervical flexion is the standard deep neck flexor training exercise. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ neck: 0, head: 0 }, SUPINE), travel: 800, hold: 400, label: "Lying with the head supported" },
        { pose: pose({ neck: -2, head: 8, headSlide: -8 }, SUPINE), travel: 1000, hold: 900, label: "Nod the chin gently down" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-CX-020",
    slug: "prone-neck-extension",
    name: { en: "Head Lift Lying Face Down", ur: "اوندھے لیٹ کر سر اٹھانا" },
    bodyRegion: "Cervical",
    joint: ["Cervical spine C1–C7"],
    musclesTargeted: ["Cervical erector spinae", "Semispinalis capitis", "Upper trapezius"],
    conditions: ["Neck weakness", "Postural fatigue", "Forward head posture", "Whiplash recovery"],
    purpose: { en: "Strengthens the back of the neck against gravity, which is the only way to load it properly and the muscles that hold your head up all day.", ur: "کشش ثقل کے خلاف گردن کے پچھلے حصے کو مضبوط کرتی ہے، اور اُن پٹھوں پر مناسب بوجھ ڈالنے کا یہی واحد طریقہ ہے جو سارا دن آپ کا سر تھامے رکھتے ہیں۔" },
    exerciseType: "Strengthening",
    difficulty: "Intermediate",
    contraction: ["Isometric", "Concentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Prone",
    equipment: ["Exercise mat", "Pillow"],
    startingPosition: { en: "Lie face down with a pillow under the chest and the head hanging just over the edge of it.", ur: "اوندھے لیٹ جائیں، سینے کے نیچے تکیہ اور سر اُس کے کنارے سے ذرا باہر لٹکا ہوا۔" },
    quickSteps: {
      en: [
        "Lie face down with a pillow under the chest.",
        "Tuck the chin, then lift the head level with the body.",
        "Hold 5 seconds, then lower slowly.",
      ],
      ur: [
        "سینے کے نیچے تکیہ رکھ کر اوندھے لیٹیں۔",
        "ٹھوڑی اندر کریں، پھر سر جسم کے برابر اٹھائیں۔",
        "پانچ سیکنڈ رکیں، پھر آہستہ نیچے لائیں۔",
      ],
    },
    steps: {
      en: [
        "Lie face down with a pillow under the chest so the head can hang forward.",
        "Tuck the chin in first — this comes before the lift.",
        "Keeping it tucked, lift the head until it is level with the spine, no higher.",
        "Hold for five seconds, then lower slowly back down.",
      ],
      ur: [
        "اوندھے لیٹ جائیں، سینے کے نیچے تکیہ ہو تاکہ سر آگے لٹک سکے۔",
        "پہلے ٹھوڑی اندر کریں — یہ اٹھانے سے پہلے آتا ہے۔",
        "ٹھوڑی اندر رکھتے ہوئے سر اٹھائیں یہاں تک کہ ریڑھ کے برابر آ جائے، اس سے اوپر نہیں۔",
        "پانچ سیکنڈ رکیں، پھر آہستہ واپس نیچے لائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Chin tucked first, then lift — lifting with the chin poking is what hurts.",
        "Level with the spine is the target; going higher jams the joints.",
        "Not to be started in the first weeks after a whiplash.",
      ],
      ur: [
        "پہلے ٹھوڑی اندر، پھر اٹھائیں — ٹھوڑی نکال کر اٹھانے سے ہی درد ہوتا ہے۔",
        "ہدف ریڑھ کے برابر ہے؛ اس سے اوپر جانے سے جوڑ جام ہوتے ہیں۔",
        "وہپلیش کے پہلے ہفتوں میں یہ شروع نہ کریں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Moving faster as you tire.",
        "Holding the breath during the effort.",
        "Pushing through sharp pain.",
        "Losing the starting position by the last repetition.",
      ],
      ur: [
        "تھکنے پر تیز حرکت کرنا۔",
        "زور لگاتے وقت سانس روکنا۔",
        "تیز درد کے باوجود زور لگانا۔",
        "آخری بار تک شروع والی حالت بگاڑ لینا۔",
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
    repetitions: "8–10",
    sets: "2",
    holdTime: "5 seconds",
    frequency: "Every other day",
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
      rationale: "Prone cervical extension is standard neck extensor strengthening. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ neck: 20, head: 14 }, PRONE), travel: 800, hold: 400, label: "Head hanging forward" },
        { pose: pose({ neck: -2, head: 0 }, PRONE), travel: 1000, hold: 900, label: "Tuck the chin and lift level" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-T-018",
    slug: "thoracic-extension-over-chair",
    name: { en: "Bending Back over a Chair", ur: "کرسی پر پیچھے جھکنا" },
    bodyRegion: "Thoracic",
    joint: ["Thoracic spine T1–T12", "Costovertebral"],
    musclesTargeted: ["Erector spinae", "Rectus abdominis", "Pectoralis major"],
    conditions: ["Upper back stiffness", "Rounded posture", "Desk work strain", "Reduced overhead reach"],
    purpose: { en: "The back of a chair works as a fixed point to bend over, which reaches the stiff middle of the upper back that free movement never gets to.", ur: "کرسی کی پشت ایک ثابت نقطے کا کام دیتی ہے، جس پر جھک کر اوپری کمر کے اُس سخت درمیانی حصے تک پہنچا جا سکتا ہے جہاں آزاد حرکت نہیں پہنچتی۔" },
    exerciseType: "Range of motion",
    difficulty: "Beginner",
    contraction: ["Passive"],
    mode: "Passive",
    load: "Bodyweight",
    position: "Sitting",
    equipment: ["Chair with a low back"],
    startingPosition: { en: "Sit on a chair with a low back so its top edge sits between your shoulder blades.", ur: "نیچی پشت والی کرسی پر بیٹھیں تاکہ اُس کا اوپری کنارہ شانوں کے درمیان آئے۔" },
    quickSteps: {
      en: [
        "Sit so the chair back is between your shoulder blades.",
        "Support your head and lean back over it.",
        "Hold 10 seconds, then come up slowly.",
      ],
      ur: [
        "ایسے بیٹھیں کہ کرسی کی پشت شانوں کے درمیان ہو۔",
        "سر کو سہارا دیں اور اُس پر پیچھے جھکیں۔",
        "دس سیکنڈ رکیں، پھر آہستہ سیدھے ہوں۔",
      ],
    },
    steps: {
      en: [
        "Sit well back so the top of the chair back rests between the shoulder blades.",
        "Lace the hands behind the head to support its weight.",
        "Lean backwards over the chair, letting the upper back extend over it.",
        "Hold ten seconds, breathing out, then come up slowly using the hands.",
      ],
      ur: [
        "اچھی طرح پیچھے بیٹھیں تاکہ کرسی کی پشت کا اوپری حصہ شانوں کے درمیان ٹکے۔",
        "ہاتھ سر کے پیچھے ملا لیں تاکہ اُس کا وزن سنبھلے۔",
        "کرسی پر پیچھے جھکیں اور اوپری کمر کو اُس پر پیچھے مڑنے دیں۔",
        "سانس چھوڑتے ہوئے دس سیکنڈ رکیں، پھر ہاتھوں کے سہارے آہستہ سیدھے ہوں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Supporting the head with the hands is what protects the neck; do not skip it.",
        "Move the chair up or down your back to reach a different level.",
        "Stop if you feel it in the low back rather than between the shoulder blades.",
      ],
      ur: [
        "ہاتھوں سے سر کو سہارا دینا ہی گردن کی حفاظت کرتا ہے؛ اسے نہ چھوڑیں۔",
        "مختلف سطح تک پہنچنے کے لیے کرسی کو کمر پر اوپر یا نیچے کریں۔",
        "شانوں کے درمیان کے بجائے کمر کے نچلے حصے میں محسوس ہو تو رک جائیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Moving faster as you tire.",
        "Holding the breath during the effort.",
        "Pushing through sharp pain.",
        "Losing the starting position by the last repetition.",
      ],
      ur: [
        "تھکنے پر تیز حرکت کرنا۔",
        "زور لگاتے وقت سانس روکنا۔",
        "تیز درد کے باوجود زور لگانا۔",
        "آخری بار تک شروع والی حالت بگاڑ لینا۔",
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
    repetitions: "5",
    sets: "2",
    holdTime: "10 seconds",
    frequency: "Daily, or hourly at a desk",
    restBetweenSets: "30 seconds",
    progressions: [],
    regressions: ["thoracic-extension-chair"],
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
      rationale: "Chair-assisted thoracic extension is widely used for upper back stiffness. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ thorax: 6, shoulderNear: 50, elbowNear: 130, shoulderFar: 50, elbowFar: 130 }, SEATED), travel: 800, hold: 400, label: "Sitting against the chair back" },
        { pose: pose({ thorax: -16, neck: -4, shoulderNear: 44, elbowNear: 132, shoulderFar: 44, elbowFar: 132 }, SEATED), travel: 1000, hold: 900, label: "Lean back over it" },
      ],
      props: [{ kind: "chair" }],
    },
  },
  {
    id: "EX-T-019",
    slug: "prone-thoracic-rotation",
    name: { en: "Face-Down Upper Back Rotation", ur: "اوندھے لیٹ کر اوپری کمر گھمانا" },
    bodyRegion: "Thoracic",
    joint: ["Thoracic spine T1–T12", "Costovertebral", "Glenohumeral"],
    musclesTargeted: ["Thoracic rotators", "Rhomboids", "Pectoralis major", "Serratus anterior"],
    conditions: ["Upper back stiffness", "Chest tightness", "Rounded posture", "Reduced rotation when driving"],
    purpose: { en: "The floor holds the pelvis still, so every degree of turn has to come from the upper back rather than being borrowed from the hips.", ur: "فرش پیڑو کو ساکن رکھتا ہے، اس لیے گھماؤ کا ہر درجہ اوپری کمر سے آتا ہے، کولہوں سے ادھار نہیں لیا جاتا۔" },
    exerciseType: "Range of motion",
    difficulty: "Beginner",
    contraction: ["Passive", "Concentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Prone",
    equipment: ["Exercise mat"],
    startingPosition: { en: "Lie face down with both arms out to the sides at shoulder height, palms down.", ur: "اوندھے لیٹ جائیں، دونوں بازو کندھے کی اونچائی پر پہلوؤں میں، ہتھیلیاں نیچے۔" },
    quickSteps: {
      en: [
        "Lie face down with both arms out to the sides.",
        "Roll one shoulder up and reach that arm across your back.",
        "Hold 15 seconds, then swap sides.",
      ],
      ur: [
        "اوندھے لیٹ جائیں، دونوں بازو پہلوؤں میں۔",
        "ایک کندھا اوپر گھمائیں اور وہ بازو پیٹھ کے آر پار لے جائیں۔",
        "پندرہ سیکنڈ رکیں، پھر طرف بدلیں۔",
      ],
    },
    steps: {
      en: [
        "Lie face down with the arms out to the sides at shoulder height.",
        "Keeping both hips flat on the floor, push through one hand to roll that shoulder up.",
        "Let the chest turn towards the ceiling as far as the hips will allow.",
        "Hold fifteen seconds, breathing into the chest, then lower and swap.",
      ],
      ur: [
        "اوندھے لیٹ جائیں، بازو کندھے کی اونچائی پر پہلوؤں میں۔",
        "دونوں کولہے فرش پر رکھتے ہوئے ایک ہاتھ سے دھکا دے کر وہ کندھا اوپر گھمائیں۔",
        "سینے کو چھت کی طرف اُتنا گھومنے دیں جتنا کولہے اجازت دیں۔",
        "پندرہ سیکنڈ رکیں، سینے میں سانس لیں، پھر نیچے آ کر طرف بدلیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "The hips staying down is what keeps this in the upper back.",
        "Bending the top knee and placing that foot behind helps hold the pelvis flat.",
        "Stop at a stretch across the chest, not at pain in the shoulder.",
      ],
      ur: [
        "کولہوں کا نیچے رہنا ہی اسے اوپری کمر تک محدود رکھتا ہے۔",
        "اوپر والا گھٹنا موڑ کر پاؤں پیچھے رکھنے سے پیڑو سیدھا رہتا ہے۔",
        "سینے میں کھنچاؤ پر رکیں، کندھے کے درد پر نہیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Moving faster as you tire.",
        "Holding the breath during the effort.",
        "Pushing through sharp pain.",
        "Losing the starting position by the last repetition.",
      ],
      ur: [
        "تھکنے پر تیز حرکت کرنا۔",
        "زور لگاتے وقت سانس روکنا۔",
        "تیز درد کے باوجود زور لگانا۔",
        "آخری بار تک شروع والی حالت بگاڑ لینا۔",
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
    repetitions: "3 each side",
    sets: "2",
    holdTime: "15 seconds",
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
      rationale: "Prone rotation with the pelvis fixed is a common thoracic mobility exercise. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ shoulderNear: 90, shoulderAbductNear: 84, elbowNear: 6, shoulderFar: 90, shoulderAbductFar: 84, elbowFar: 6 }, PRONE), travel: 800, hold: 400, label: "Face down, arms out" },
        { pose: pose({ shoulderNear: 90, shoulderAbductNear: 84, elbowNear: 40, shoulderFar: 90, shoulderAbductFar: 84, elbowFar: 6, thorax: -8, kneeNear: 80 }, PRONE), travel: 1000, hold: 900, label: "Roll one shoulder up" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-T-020",
    slug: "supine-thoracic-rotation",
    name: { en: "Lying Trunk Twist", ur: "لیٹ کر دھڑ گھمانا" },
    bodyRegion: "Thoracic",
    joint: ["Thoracic spine T1–T12", "Lumbar spine L1–L5", "Costovertebral"],
    musclesTargeted: ["Obliques", "Thoracic rotators", "Erector spinae", "Pectoralis major"],
    conditions: ["Upper back stiffness", "Low back stiffness", "Rib cage stiffness", "Prolonged sitting"],
    purpose: { en: "Lying down with the arms out means the shoulders anchor the top while the knees carry the bottom round — a bigger turn than standing allows.", ur: "لیٹ کر بازو کھلے رکھنے سے کندھے اوپر کا حصہ جماتے ہیں اور گھٹنے نیچے کا حصہ گھماتے ہیں — کھڑے ہو کر ممکن گھماؤ سے زیادہ۔" },
    exerciseType: "Range of motion",
    difficulty: "Beginner",
    contraction: ["Passive"],
    mode: "Passive",
    load: "Bodyweight",
    position: "Supine",
    equipment: ["Exercise mat"],
    startingPosition: { en: "Lie on your back with the knees bent and both arms out to the sides at shoulder height.", ur: "سیدھے لیٹ جائیں، گھٹنے مڑے اور دونوں بازو کندھے کی اونچائی پر پہلوؤں میں۔" },
    quickSteps: {
      en: [
        "Lie on your back with the arms out to the sides.",
        "Let both knees fall slowly to one side.",
        "Hold 20 seconds, then take them the other way.",
      ],
      ur: [
        "سیدھے لیٹ جائیں، بازو پہلوؤں میں۔",
        "دونوں گھٹنے آہستہ ایک طرف گرنے دیں۔",
        "بیس سیکنڈ رکیں، پھر دوسری طرف لے جائیں۔",
      ],
    },
    steps: {
      en: [
        "Lie on your back with the knees bent and both feet flat.",
        "Take both arms out to the sides at shoulder height, palms up.",
        "Let both knees fall slowly to one side, keeping them together.",
        "Keep both shoulders flat on the floor; stop when one starts to lift.",
      ],
      ur: [
        "گھٹنے موڑ کر سیدھے لیٹ جائیں، دونوں پاؤں فرش پر۔",
        "دونوں بازو کندھے کی اونچائی پر پہلوؤں میں کھولیں، ہتھیلیاں اوپر۔",
        "دونوں گھٹنے ملا کر آہستہ ایک طرف گرنے دیں۔",
        "دونوں کندھے فرش پر رکھیں؛ ایک اٹھنے لگے تو رک جائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "The far shoulder lifting is the signal to stop — that is your current range.",
        "Turning the head the other way increases the turn through the upper back.",
        "A pillow under the knees makes it gentler for a sore back.",
      ],
      ur: [
        "دور والے کندھے کا اٹھنا رکنے کا اشارہ ہے — یہی آپ کی موجودہ حد ہے۔",
        "سر مخالف طرف گھمانے سے اوپری کمر کا گھماؤ بڑھ جاتا ہے۔",
        "دُکھتی کمر کے لیے گھٹنوں کے نیچے تکیہ رکھنے سے یہ نرم ہو جاتی ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Moving faster as you tire.",
        "Holding the breath during the effort.",
        "Pushing through sharp pain.",
        "Losing the starting position by the last repetition.",
      ],
      ur: [
        "تھکنے پر تیز حرکت کرنا۔",
        "زور لگاتے وقت سانس روکنا۔",
        "تیز درد کے باوجود زور لگانا۔",
        "آخری بار تک شروع والی حالت بگاڑ لینا۔",
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
    repetitions: "5 each side",
    sets: "2",
    holdTime: "20 seconds",
    frequency: "Daily",
    restBetweenSets: "30 seconds",
    progressions: [],
    regressions: ["lumbar-rotation-supine"],
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
      rationale: "Supine trunk rotation is a standard low-load spinal mobility exercise. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ shoulderNear: 90, shoulderAbductNear: 84, elbowNear: 6, shoulderFar: 90, shoulderAbductFar: 84, elbowFar: 6 }, SUPINE), travel: 800, hold: 400, label: "Lying with the arms out" },
        { pose: pose({ shoulderNear: 90, shoulderAbductNear: 84, elbowNear: 6, shoulderFar: 90, shoulderAbductFar: 84, elbowFar: 6, hipRotNear: 44, hipRotFar: 44, head: -4 }, SUPINE), travel: 1000, hold: 900, label: "Let the knees fall to one side" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-T-021",
    slug: "standing-rotation-stretch",
    name: { en: "Standing Trunk Turn", ur: "کھڑے ہو کر دھڑ گھمانا" },
    bodyRegion: "Thoracic",
    joint: ["Thoracic spine T1–T12", "Lumbar spine L1–L5"],
    musclesTargeted: ["Obliques", "Thoracic rotators", "Erector spinae"],
    conditions: ["Prolonged standing", "Upper back stiffness", "Warm-up before exercise", "Manual work strain"],
    purpose: { en: "Thirty seconds that can be taken anywhere, in work clothes, without lying on anything — which is why people actually do it.", ur: "تیس سیکنڈ جو کہیں بھی، کام کے کپڑوں میں، بغیر کہیں لیٹے کیے جا سکتے ہیں — اسی لیے لوگ واقعی کرتے ہیں۔" },
    exerciseType: "Range of motion",
    difficulty: "Beginner",
    contraction: ["Concentric"],
    mode: "Active",
    load: "No load",
    position: "Standing",
    equipment: [],
    startingPosition: { en: "Stand tall with the feet hip-width apart and the arms folded across the chest.", ur: "سیدھے کھڑے ہوں، پاؤں کولہوں کے برابر فاصلے پر اور بازو سینے پر باندھے ہوئے۔" },
    quickSteps: {
      en: [
        "Stand tall with the arms folded across the chest.",
        "Turn the shoulders to one side, keeping the hips forward.",
        "Hold 3 seconds, then turn the other way.",
      ],
      ur: [
        "سیدھے کھڑے ہوں، بازو سینے پر باندھے۔",
        "کندھے ایک طرف گھمائیں، کولہے سامنے رکھیں۔",
        "تین سیکنڈ رکیں، پھر دوسری طرف گھمائیں۔",
      ],
    },
    steps: {
      en: [
        "Stand tall with the feet hip-width apart and firmly planted.",
        "Fold the arms across the chest, each hand on the opposite shoulder.",
        "Turn the shoulders and chest to one side as far as is comfortable.",
        "Keep the hips and feet facing forward, hold three seconds, then turn the other way.",
      ],
      ur: [
        "سیدھے کھڑے ہوں، پاؤں کولہوں کے برابر فاصلے پر اور مضبوطی سے جمے ہوں۔",
        "بازو سینے پر باندھیں، ہر ہاتھ مخالف کندھے پر۔",
        "کندھے اور سینہ آرام کی حد تک ایک طرف گھمائیں۔",
        "کولہے اور پاؤں سامنے رکھیں، تین سیکنڈ رکیں، پھر دوسری طرف گھمائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "The hips staying forward is what keeps the turn in the upper back.",
        "Turn only as far as feels smooth; this is not a sport.",
        "Ideal every hour or two on a long shift on your feet.",
      ],
      ur: [
        "کولہوں کا سامنے رہنا ہی گھماؤ کو اوپری کمر تک محدود رکھتا ہے۔",
        "صرف اتنا گھمائیں جتنا ہموار لگے؛ یہ کھیل نہیں ہے۔",
        "پاؤں پر لمبی شفٹ میں ہر ایک دو گھنٹے بعد بہترین ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Moving faster as you tire.",
        "Holding the breath during the effort.",
        "Pushing through sharp pain.",
        "Losing the starting position by the last repetition.",
      ],
      ur: [
        "تھکنے پر تیز حرکت کرنا۔",
        "زور لگاتے وقت سانس روکنا۔",
        "تیز درد کے باوجود زور لگانا۔",
        "آخری بار تک شروع والی حالت بگاڑ لینا۔",
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
    holdTime: "3 seconds",
    frequency: "Hourly during standing work",
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
      rationale: "Standing trunk rotation is a common workplace mobility break. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ shoulderNear: 140, elbowNear: 130, shoulderFar: 140, elbowFar: 130 }, STAND), travel: 800, hold: 400, label: "Standing, arms folded" },
        { pose: pose({ shoulderNear: 140, elbowNear: 130, shoulderFar: 140, elbowFar: 130, thorax: -4, head: -6 }, STAND), travel: 1000, hold: 900, label: "Turn the shoulders to one side" },
      ],
    },
  },
  {
    id: "EX-CO-018",
    slug: "side-lying-trunk-lift",
    name: { en: "Side Lift Lying on the Side", ur: "پہلو پر لیٹ کر دھڑ اٹھانا" },
    bodyRegion: "Core",
    joint: ["Lumbar spine L1–L5", "Thoracic spine T1–T12"],
    musclesTargeted: ["Obliques", "Quadratus lumborum", "Latissimus dorsi"],
    conditions: ["Lateral trunk weakness", "Low back pain", "Scoliosis management", "Core weakness"],
    purpose: { en: "Loads the side of the trunk without the shoulder having to hold the body up, which makes it useful when a side plank is not yet possible.", ur: "دھڑ کے پہلو پر بوجھ ڈالتی ہے بغیر اس کے کہ کندھے کو جسم اٹھانا پڑے، اسی لیے جب سائیڈ پلانک ممکن نہ ہو تب یہ مفید ہے۔" },
    exerciseType: "Strengthening",
    difficulty: "Beginner",
    contraction: ["Concentric", "Eccentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Side-lying",
    equipment: ["Exercise mat"],
    startingPosition: { en: "Lie on your side with the knees bent, the lower arm across the chest and the top hand behind the head.", ur: "پہلو پر لیٹ جائیں، گھٹنے مڑے، نیچے والا بازو سینے پر اور اوپر والا ہاتھ سر کے پیچھے۔" },
    quickSteps: {
      en: [
        "Lie on your side with the top hand behind your head.",
        "Lift the head and shoulders sideways off the floor.",
        "Lower slowly and repeat.",
      ],
      ur: [
        "پہلو پر لیٹیں، اوپر والا ہاتھ سر کے پیچھے۔",
        "سر اور کندھے پہلو کی طرف فرش سے اٹھائیں۔",
        "آہستہ نیچے لائیں اور دہرائیں۔",
      ],
    },
    steps: {
      en: [
        "Lie on your side with the knees bent and the hips stacked.",
        "Put the top hand behind the head and the lower arm across your chest.",
        "Lift the head and shoulders sideways towards the top hip.",
        "The movement is small — a few inches — then lower slowly.",
      ],
      ur: [
        "پہلو پر لیٹ جائیں، گھٹنے مڑے اور کولہے ایک دوسرے پر۔",
        "اوپر والا ہاتھ سر کے پیچھے اور نیچے والا بازو سینے پر رکھیں۔",
        "سر اور کندھے پہلو کی طرف اوپر والے کولہے کی طرف اٹھائیں۔",
        "حرکت چھوٹی ہے — چند انچ — پھر آہستہ نیچے لائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Sideways, not forwards — rolling forward turns it into an ordinary sit-up.",
        "A few inches is the whole movement; height is not the point.",
        "Progress to the side plank on knees when fifteen are easy.",
      ],
      ur: [
        "پہلو کی طرف، آگے نہیں — آگے لڑھکنے سے یہ عام سِٹ اپ بن جاتی ہے۔",
        "چند انچ ہی پوری حرکت ہے؛ اونچائی مقصد نہیں۔",
        "پندرہ بار آسان ہو جائیں تو گھٹنوں والے سائیڈ پلانک پر جائیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Moving faster as you tire.",
        "Holding the breath during the effort.",
        "Pushing through sharp pain.",
        "Losing the starting position by the last repetition.",
      ],
      ur: [
        "تھکنے پر تیز حرکت کرنا۔",
        "زور لگاتے وقت سانس روکنا۔",
        "تیز درد کے باوجود زور لگانا۔",
        "آخری بار تک شروع والی حالت بگاڑ لینا۔",
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
    repetitions: "10–15 each side",
    sets: "2",
    holdTime: "1 second",
    frequency: "Every other day",
    restBetweenSets: "30 seconds",
    progressions: ["side-plank-knees"],
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
      rationale: "Side-lying lateral trunk flexion is a standard oblique strengthening regression. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ shoulderNear: 60, elbowNear: 130, shoulderFar: 120, elbowFar: 110 }, SIDE_LYING), travel: 800, hold: 400, label: "Lying on the side" },
        { pose: pose({ shoulderNear: 60, elbowNear: 130, shoulderFar: 120, elbowFar: 110, thorax: 14, neck: 8 }, SIDE_LYING), travel: 1000, hold: 900, label: "Lift the shoulders sideways" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-CO-019",
    slug: "prone-plank-shoulder-tap",
    name: { en: "Plank with Shoulder Taps", ur: "پلانک میں کندھے چھونا" },
    bodyRegion: "Core",
    joint: ["Lumbar spine L1–L5", "Scapulothoracic", "Glenohumeral"],
    musclesTargeted: ["Transversus abdominis", "Obliques", "Serratus anterior", "Gluteus maximus"],
    conditions: ["Core weakness", "Return to sport", "Poor trunk control", "Rotational sport demands"],
    purpose: { en: "Taking a hand off a plank makes the trunk resist a twist, which is much harder and much more like real life than simply holding still.", ur: "پلانک سے ایک ہاتھ ہٹانے پر دھڑ کو مروڑ کے خلاف کام کرنا پڑتا ہے، جو صرف ساکن رہنے سے کہیں مشکل اور حقیقی زندگی سے قریب تر ہے۔" },
    exerciseType: "Stabilisation & motor control",
    difficulty: "Advanced",
    contraction: ["Isometric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Prone",
    equipment: ["Exercise mat"],
    startingPosition: { en: "Take a plank position on the hands with the feet wide apart and the body in a straight line.", ur: "ہاتھوں پر پلانک کی حالت لیں، پاؤں کھلے اور جسم سیدھی لکیر میں۔" },
    quickSteps: {
      en: [
        "Hold a plank on your hands with the feet wide.",
        "Lift one hand and tap the opposite shoulder.",
        "Replace it and tap with the other hand.",
      ],
      ur: [
        "ہاتھوں پر پلانک میں رکیں، پاؤں کھلے۔",
        "ایک ہاتھ اٹھا کر مخالف کندھے کو چھوئیں۔",
        "واپس رکھیں اور دوسرے ہاتھ سے چھوئیں۔",
      ],
    },
    steps: {
      en: [
        "Take a plank on the hands with the wrists under the shoulders.",
        "Set the feet wider than the hips — this is what makes it possible at first.",
        "Lift one hand slowly and tap the opposite shoulder.",
        "The hips must not rock — if they do, widen the feet or go back to a plain plank.",
      ],
      ur: [
        "ہاتھوں پر پلانک لیں، کلائیاں کندھوں کے نیچے۔",
        "پاؤں کولہوں سے زیادہ کھلے رکھیں — شروع میں یہی اسے ممکن بناتا ہے۔",
        "ایک ہاتھ آہستہ اٹھا کر مخالف کندھے کو چھوئیں۔",
        "کولہے نہ ہلیں — ہلیں تو پاؤں مزید کھولیں یا سادہ پلانک پر واپس جائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Wider feet make it easier; narrower feet make it much harder.",
        "The hips rocking is the sign to stop the set.",
        "Master a forty-second plank before adding the taps.",
      ],
      ur: [
        "پاؤں زیادہ کھلے ہوں تو آسان، قریب ہوں تو کہیں مشکل۔",
        "کولہوں کا ہلنا سیٹ ختم کرنے کا اشارہ ہے۔",
        "ٹیپ شامل کرنے سے پہلے چالیس سیکنڈ کا پلانک سیکھ لیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Moving faster as you tire.",
        "Holding the breath during the effort.",
        "Pushing through sharp pain.",
        "Losing the starting position by the last repetition.",
      ],
      ur: [
        "تھکنے پر تیز حرکت کرنا۔",
        "زور لگاتے وقت سانس روکنا۔",
        "تیز درد کے باوجود زور لگانا۔",
        "آخری بار تک شروع والی حالت بگاڑ لینا۔",
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
    holdTime: "1 second",
    frequency: "Every other day",
    restBetweenSets: "45 seconds",
    progressions: [],
    regressions: ["plank-full"],
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
      rationale: "Plank with shoulder taps adds an anti-rotation demand to a static hold. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ hipNear: -6, kneeNear: 4, hipFar: -6, kneeFar: 4, ankleNear: -34, ankleFar: -34, shoulderNear: 90, elbowNear: 6, shoulderFar: 90, elbowFar: 6 }, PRONE), travel: 800, hold: 400, label: "Plank on the hands" },
        { pose: pose({ hipNear: -6, kneeNear: 4, hipFar: -6, kneeFar: 4, ankleNear: -34, ankleFar: -34, shoulderNear: 60, elbowNear: 120, shoulderFar: 90, elbowFar: 6 }, PRONE), travel: 1000, hold: 900, label: "Tap the opposite shoulder" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-CO-020",
    slug: "supine-leg-lowering",
    name: { en: "Lowering Both Legs", ur: "دونوں ٹانگیں نیچے لانا" },
    bodyRegion: "Core",
    joint: ["Lumbar spine L1–L5", "Hip"],
    musclesTargeted: ["Transversus abdominis", "Rectus abdominis", "Iliopsoas"],
    conditions: ["Core weakness", "Low back pain", "Return to sport", "Post-partum recovery"],
    purpose: { en: "Lowering both legs together is the hardest thing you can ask of the abdominal wall lying down, and the range you can control is a real measure of it.", ur: "دونوں ٹانگیں ایک ساتھ نیچے لانا لیٹ کر پیٹ کی دیوار سے مانگی جانے والی سب سے مشکل چیز ہے، اور جتنی حد تک قابو رہے وہی اصل پیمانہ ہے۔" },
    exerciseType: "Strengthening",
    difficulty: "Advanced",
    contraction: ["Eccentric", "Isometric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Supine",
    equipment: ["Exercise mat"],
    startingPosition: { en: "Lie on your back with both legs straight up towards the ceiling and the arms by your sides.", ur: "سیدھے لیٹ جائیں، دونوں ٹانگیں چھت کی طرف سیدھی اوپر اور بازو پہلوؤں پر۔" },
    quickSteps: {
      en: [
        "Lie on your back with both legs straight up.",
        "Lower them slowly, only as far as the back stays flat.",
        "Raise them back up and repeat.",
      ],
      ur: [
        "سیدھے لیٹ جائیں، دونوں ٹانگیں سیدھی اوپر۔",
        "انہیں آہستہ نیچے لائیں، صرف اتنا جتنا کمر سیدھی رہے۔",
        "واپس اوپر لائیں اور دہرائیں۔",
      ],
    },
    steps: {
      en: [
        "Lie on your back with both legs raised straight towards the ceiling.",
        "Press the low back gently into the floor and put a hand under it to check.",
        "Lower both legs slowly together, keeping the back pressed down.",
        "The moment the back starts to lift, stop and raise the legs again.",
      ],
      ur: [
        "سیدھے لیٹ جائیں، دونوں ٹانگیں چھت کی طرف سیدھی اٹھی ہوں۔",
        "کمر نرمی سے فرش پر دبائیں اور جانچنے کے لیے نیچے ہاتھ رکھیں۔",
        "دونوں ٹانگیں ایک ساتھ آہستہ نیچے لائیں، کمر دبی رہے۔",
        "کمر اٹھنا شروع ہوتے ہی رک جائیں اور ٹانگیں دوبارہ اوپر لے جائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "How far you can lower with a flat back is the measure — most people manage far less than they expect.",
        "Bend the knees a little to make it easier; straighter legs are harder.",
        "Not for anyone with an abdominal separation that has not closed.",
      ],
      ur: [
        "کمر سیدھی رکھتے ہوئے کتنا نیچے لا سکتے ہیں، یہی پیمانہ ہے — زیادہ تر لوگ اپنے اندازے سے کہیں کم کر پاتے ہیں۔",
        "آسان کرنے کے لیے گھٹنے تھوڑے موڑ لیں؛ سیدھی ٹانگیں زیادہ مشکل ہیں۔",
        "جس کے پیٹ کے پٹھوں کا فاصلہ بند نہ ہوا ہو، اُس کے لیے نہیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Moving faster as you tire.",
        "Holding the breath during the effort.",
        "Pushing through sharp pain.",
        "Losing the starting position by the last repetition.",
      ],
      ur: [
        "تھکنے پر تیز حرکت کرنا۔",
        "زور لگاتے وقت سانس روکنا۔",
        "تیز درد کے باوجود زور لگانا۔",
        "آخری بار تک شروع والی حالت بگاڑ لینا۔",
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
    repetitions: "8–10",
    sets: "3",
    holdTime: "3 seconds down",
    frequency: "Every other day",
    restBetweenSets: "45 seconds",
    progressions: [],
    regressions: ["heel-taps-supine"],
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
      rationale: "Double leg lowering is a standard advanced measure and exercise of abdominal control. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        { pose: pose({ hipNear: 90, kneeNear: 4, hipFar: 90, kneeFar: 4 }, SUPINE), travel: 800, hold: 400, label: "Legs straight up" },
        { pose: pose({ hipNear: 40, kneeNear: 4, hipFar: 40, kneeFar: 4 }, SUPINE), travel: 1000, hold: 900, label: "Lower both legs slowly" },
      ],
      props: [{ kind: "mat" }],
    },
  },
  {
    id: "EX-L-021",
    slug: "lumbar-rotation-with-legs-up",
    name: { en: "Knee Drop with the Hips Bent", ur: "گھٹنے اٹھا کر ایک طرف گرانا" },
    bodyRegion: "Lumbar",
    joint: ["Lumbar spine L1–L5", "Hip", "Sacroiliac"],
    musclesTargeted: ["Obliques", "Erector spinae", "Quadratus lumborum", "Gluteus medius"],
    conditions: ["Low back stiffness", "Sacroiliac pain", "Prolonged sitting", "Facet joint pain"],
    purpose: { en: "Bending the hips to ninety degrees before rotating concentrates the turn low in the back, where a stiff facet joint usually sits.", ur: "گھماؤ سے پہلے کولہے نوے درجے موڑنے سے حرکت کمر کے نچلے حصے پر مرکوز ہو جاتی ہے، جہاں عموماً سخت جوڑ ہوتا ہے۔" },
    exerciseType: "Range of motion",
    difficulty: "Beginner",
    contraction: ["Passive"],
    mode: "Passive",
    load: "Bodyweight",
    position: "Supine",
    equipment: ["Exercise mat"],
    startingPosition: { en: "Lie on your back with both knees bent up over the hips and the arms out to the sides.", ur: "سیدھے لیٹ جائیں، دونوں گھٹنے کولہوں کے اوپر مڑے اور بازو پہلوؤں میں۔" },
    quickSteps: {
      en: [
        "Lie with both knees bent up over the hips.",
        "Let them fall slowly to one side.",
        "Hold 20 seconds, then take them the other way.",
      ],
      ur: [
        "دونوں گھٹنے کولہوں کے اوپر مڑے رکھ کر لیٹیں۔",
        "انہیں آہستہ ایک طرف گرنے دیں۔",
        "بیس سیکنڈ رکیں، پھر دوسری طرف لے جائیں۔",
      ],
    },
    steps: {
      en: [
        "Lie on your back and bring both knees up so they sit over the hips.",
        "Take both arms out to the sides at shoulder height.",
        "Let both knees fall slowly to one side, keeping them together and level.",
        "Both shoulders stay on the floor; stop when one starts to lift.",
      ],
      ur: [
        "سیدھے لیٹ جائیں اور دونوں گھٹنے اوپر لائیں تاکہ کولہوں کے اوپر ہوں۔",
        "دونوں بازو کندھے کی اونچائی پر پہلوؤں میں کھولیں۔",
        "دونوں گھٹنے ملا کر اور برابر رکھتے ہوئے آہستہ ایک طرف گرنے دیں۔",
        "دونوں کندھے فرش پر رہیں؛ ایک اٹھنے لگے تو رک جائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Hips at ninety degrees puts the turn lower than with the feet on the floor.",
        "Keep the knees level with each other; letting one slide ahead loses the effect.",
        "Stop if pain travels down the leg rather than easing in the back.",
      ],
      ur: [
        "کولہے نوے درجے پر ہوں تو گھماؤ پاؤں فرش پر رکھنے کی نسبت نیچے آ جاتا ہے۔",
        "گھٹنے آپس میں برابر رکھیں؛ ایک آگے نکل جائے تو اثر ختم ہو جاتا ہے۔",
        "کمر میں آرام کے بجائے درد ٹانگ میں جائے تو رک جائیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Moving faster as you tire.",
        "Holding the breath during the effort.",
        "Pushing through sharp pain.",
        "Losing the starting position by the last repetition.",
      ],
      ur: [
        "تھکنے پر تیز حرکت کرنا۔",
        "زور لگاتے وقت سانس روکنا۔",
        "تیز درد کے باوجود زور لگانا۔",
        "آخری بار تک شروع والی حالت بگاڑ لینا۔",
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
    repetitions: "5 each side",
    sets: "2",
    holdTime: "20 seconds",
    frequency: "Daily",
    restBetweenSets: "30 seconds",
    progressions: [],
    regressions: ["lumbar-rotation-supine"],
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
      rationale: "Supine rotation with hips flexed targets lower lumbar segments. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frames: [
        { pose: pose({ hipNear: 90, kneeNear: 90, hipFar: 90, kneeFar: 90, shoulderNear: 90, shoulderAbductNear: 84, elbowNear: 6, shoulderFar: 90, shoulderAbductFar: 84, elbowFar: 6 }, SUPINE), travel: 800, hold: 400, label: "Knees up over the hips" },
        { pose: pose({ hipNear: 90, kneeNear: 90, hipFar: 90, kneeFar: 90, hipRotNear: 46, hipRotFar: 46, shoulderNear: 90, shoulderAbductNear: 84, elbowNear: 6, shoulderFar: 90, shoulderAbductFar: 84, elbowFar: 6 }, SUPINE), travel: 1000, hold: 900, label: "Let them fall to one side" },
      ],
      props: [{ kind: "mat" }],
    },
  },
];
