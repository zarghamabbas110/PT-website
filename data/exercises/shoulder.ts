import { NEUTRAL, frontPose, pose } from "@/lib/figure";
import type { Exercise } from "../schema";

/* ==========================================================================
   SHOULDER — batch 1
   --------------------------------------------------------------------------
   Ordered as a clinical ladder: passive → active-assisted → active →
   isometric → resisted → stretches. Progressions and regressions link the
   chain together.

   NOTE ON THE FRONT VIEW
   In the front-facing figure, `elbowR` / `elbowL` are the forearm's angle
   *within the picture plane*. With the arm at the side and the elbow at 90°,
   a positive value swings the forearm outward (external rotation) and a
   negative value swings it across the body (internal rotation).

   NOTE ON URDU
   The Urdu is written for patients, not clinicians, and needs review by a
   native-speaking physiotherapist before it reaches anyone. Anatomical terms
   are deliberately left in English where that is how they are used in
   practice.
   ========================================================================== */

/** Standing, arms relaxed — the base for most upright shoulder work. */
const STAND = frontPose({});

/** Bent forward over a table, working arm hanging free — Codman's position. */
const PENDULUM = pose({
  rootX: 210,
  rootY: 214,
  lumbar: 52,
  thorax: 14,
  neck: -18,
  head: -10,
  shoulderNear: 176,
  elbowNear: 2,
  shoulderFar: 120,
  elbowFar: 40,
  hipNear: 14,
  kneeNear: 10,
  hipFar: 12,
  kneeFar: 10,
});

export const SHOULDER: Exercise[] = [
  /* ------------------------------------------------------------- EX-S-001 */
  {
    id: "EX-S-001",
    slug: "pendulum-codman",
    name: {
      en: "Pendulum (Codman's) Exercise",
      ur: "پینڈولم (کوڈمین) ورزش",
    },
    bodyRegion: "Shoulder",
    joint: ["Glenohumeral", "Scapulothoracic"],
    musclesTargeted: ["Rotator cuff (unloaded)", "Deltoid (relaxed)"],
    conditions: [
      "Adhesive capsulitis",
      "Post-operative shoulder (early phase)",
      "Rotator cuff repair rehabilitation",
      "Subacromial pain syndrome",
    ],
    purpose: {
      en: "Moves the shoulder joint gently without asking the muscles to work, which eases stiffness and pain in the earliest stage of recovery.",
      ur: "یہ ورزش کندھے کے جوڑ کو پٹھوں پر زور ڈالے بغیر حرکت دیتی ہے، جس سے ابتدائی مرحلے میں سختی اور درد کم ہوتا ہے۔",
    },
    difficulty: "Beginner",
    contraction: ["Passive"],
    mode: "Passive",
    load: "No load",
    position: "Standing",
    equipment: ["A table or chair for support"],
    startingPosition: {
      en: "Stand beside a table. Lean forward and support yourself with your good hand on the table. Let the affected arm hang straight down, completely relaxed.",
      ur: "میز کے پاس کھڑے ہوں۔ آگے کی طرف جھکیں اور اپنے صحت مند ہاتھ سے میز کا سہارا لیں۔ متاثرہ بازو کو بالکل ڈھیلا چھوڑ کر سیدھا نیچے لٹکنے دیں۔",
    },
    quickSteps: {
      en: [
        "Lean on a table and let the sore arm hang completely loose.",
        "Sway your body so the arm swings by itself — forwards and back, side to side, then small circles.",
        "Never use the shoulder muscles to move it.",
      ],
      ur: [
        "میز پر ہاتھ رکھ کر آگے جھکیں اور تکلیف والا بازو بالکل ڈھیلا لٹکنے دیں۔",
        "جسم کو ہلکا سا ہلائیں تاکہ بازو خود جھولے — آگے پیچھے، پھر دائیں بائیں، پھر چھوٹے گول گول۔",
        "بازو کو اپنے زور سے مت ہلائیں، اسے بس لٹکا رہنے دیں۔",
      ],
    },
    steps: {
      en: [
        "Let the affected arm hang loose — do not hold it up with your muscles.",
        "Gently sway your body, not your arm, so the arm swings forward and backward.",
        "Then sway so it swings side to side.",
        "Finally let it swing in small circles, first one way then the other.",
        "Keep every movement small, slow and completely relaxed.",
      ],
      ur: [
        "متاثرہ بازو کو بالکل ڈھیلا لٹکنے دیں — اسے پٹھوں کے زور سے نہ اٹھائیں۔",
        "اپنے جسم کو ہلکا سا ہلائیں، بازو کو نہیں، تاکہ بازو آگے پیچھے جھولے۔",
        "پھر جسم کو اس طرح ہلائیں کہ بازو دائیں بائیں جھولے۔",
        "آخر میں بازو کو چھوٹے دائروں میں گھومنے دیں، پہلے ایک طرف پھر دوسری طرف۔",
        "ہر حرکت چھوٹی، آہستہ اور مکمل طور پر ڈھیلی رکھیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "The movement comes from your body, never from your shoulder muscles.",
        "If the arm feels heavy or tight, you are still holding it — relax further.",
        "This should not hurt. A gentle pulling feeling is normal.",
        "Very useful first thing in the morning when the shoulder is stiffest.",
      ],
      ur: [
        "حرکت آپ کے جسم سے پیدا ہونی چاہیے، کندھے کے پٹھوں سے ہرگز نہیں۔",
        "اگر بازو بھاری یا کھنچا ہوا محسوس ہو تو آپ اسے تھامے ہوئے ہیں — مزید ڈھیلا چھوڑیں۔",
        "اس میں درد نہیں ہونا چاہیے۔ ہلکا کھنچاؤ محسوس ہونا معمول کی بات ہے۔",
        "صبح کے وقت جب کندھا سب سے زیادہ سخت ہو، یہ ورزش بہت مفید ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Actively swinging the arm using the shoulder muscles.",
        "Making the circles too large.",
        "Standing upright instead of leaning forward, so the arm cannot hang free.",
        "Holding the breath.",
      ],
      ur: [
        "کندھے کے پٹھوں سے بازو کو خود جھلانا۔",
        "دائرے بہت بڑے بنانا۔",
        "آگے جھکنے کے بجائے سیدھا کھڑے رہنا، جس سے بازو آزادانہ نہیں لٹک سکتا۔",
        "سانس روک لینا۔",
      ],
    },
    safetyPrecautions: {
      en: [
        "Stop if pain increases during or after the exercise.",
        "Support your body properly so you do not strain your lower back.",
        "Follow any movement limits given by your surgeon after an operation.",
      ],
      ur: [
        "اگر ورزش کے دوران یا بعد میں درد بڑھے تو رک جائیں۔",
        "جسم کو اچھی طرح سہارا دیں تاکہ کمر پر زور نہ پڑے۔",
        "آپریشن کے بعد سرجن کی بتائی ہوئی حرکت کی حدود کی پابندی کریں۔",
      ],
    },
    repetitions: "10 circles each direction",
    sets: "2",
    holdTime: "Not applicable",
    frequency: "3–4 times a day",
    restBetweenSets: "30 seconds",
    progressions: ["wand-assisted-flexion"],
    regressions: [],
    contraindications: {
      en: [
        "Unstable fracture of the humerus, scapula or clavicle",
        "Acute shoulder dislocation before relocation and review",
        "Any movement restriction specified by the operating surgeon",
      ],
      ur: [
        "بازو، شانے یا ہنسلی کی غیر مستحکم ہڈی ٹوٹنا",
        "کندھے کا حالیہ اترنا، جب تک اسے واپس نہ بٹھایا جائے اور معائنہ نہ ہو",
        "سرجن کی جانب سے بتائی گئی کوئی بھی حرکت کی پابندی",
      ],
    },
    evidence: {
      status: "unreviewed",
      rationale:
        "Pendulum exercises are a long-established early-phase intervention for painful and stiff shoulders where active movement is not yet appropriate. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        {
          pose: pose({ shoulderNear: 158 }, PENDULUM),
          travel: 800,
          hold: 200,
          label: "Arm hangs relaxed — sway forward",
        },
        {
          pose: pose({ shoulderNear: 196 }, PENDULUM),
          travel: 900,
          hold: 200,
          label: "Let it swing back — body does the work",
        },
      ],
      props: [{ kind: "tableSupport" }],
      arrows: [{ at: "hand", dir: 90, len: 34, label: "swing" }],
    },
  },

  /* ------------------------------------------------------------- EX-S-002 */
  {
    id: "EX-S-002",
    slug: "wand-assisted-flexion",
    name: {
      en: "Wand-Assisted Shoulder Flexion",
      ur: "ڈنڈے کی مدد سے کندھا آگے اٹھانا",
    },
    bodyRegion: "Shoulder",
    joint: ["Glenohumeral", "Scapulothoracic"],
    musclesTargeted: [
      "Anterior deltoid",
      "Supraspinatus",
      "Serratus anterior",
    ],
    conditions: [
      "Adhesive capsulitis",
      "Post-operative stiffness",
      "Rotator cuff repair rehabilitation",
      "Reduced shoulder range of motion",
    ],
    purpose: {
      en: "The good arm does the work through a stick, guiding the stiff shoulder into more range than it could reach on its own.",
      ur: "صحت مند بازو ڈنڈے کے ذریعے کام کرتا ہے اور سخت کندھے کو اُس حد تک لے جاتا ہے جہاں وہ خود نہیں پہنچ سکتا۔",
    },
    difficulty: "Beginner",
    contraction: ["Passive", "Concentric"],
    mode: "Active-assisted",
    load: "No load",
    position: "Supine",
    equipment: ["A walking stick, broom handle or dowel"],
    startingPosition: {
      en: "Lie on your back with knees bent. Hold the stick with both hands, palms facing down, hands about shoulder-width apart, resting on your thighs.",
      ur: "گھٹنے موڑ کر سیدھے لیٹ جائیں۔ ڈنڈے کو دونوں ہاتھوں سے پکڑیں، ہتھیلیاں نیچے کی طرف، ہاتھ کندھوں کے برابر فاصلے پر، ڈنڈا رانوں پر رکھا ہو۔",
    },
    quickSteps: {
      en: [
        "Lie on your back holding a stick with both hands, elbows straight.",
        "Push the stick up and over towards your head with your good arm.",
        "Hold 5 seconds, then lower slowly.",
      ],
      ur: [
        "سیدھے لیٹ جائیں اور ڈنڈا دونوں ہاتھوں سے پکڑیں، کہنیاں سیدھی رکھیں۔",
        "اچھے والے ہاتھ سے ڈنڈے کو اوپر، سر کی طرف لے جائیں۔",
        "پانچ سیکنڈ وہیں رکیں، پھر آرام سے نیچے لے آئیں۔",
      ],
    },
    steps: {
      en: [
        "Keep both elbows straight.",
        "Using mainly your good arm, push the stick up and over towards your head.",
        "Go as far as a comfortable stretch allows — not into pain.",
        "Hold at the top, breathing normally.",
        "Lower the stick back down slowly and with control.",
      ],
      ur: [
        "دونوں کہنیاں سیدھی رکھیں۔",
        "زیادہ تر صحت مند بازو کے زور سے ڈنڈے کو اوپر اور سر کی طرف دھکیلیں۔",
        "جہاں تک آرام دہ کھنچاؤ ہو وہاں تک جائیں — درد تک نہیں۔",
        "اوپر رک کر سانس معمول کے مطابق لیتے رہیں۔",
        "ڈنڈے کو آہستہ اور قابو کے ساتھ واپس نیچے لائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Lying down supports your back and stops you from arching to cheat the movement.",
        "Keep both shoulders resting on the bed — do not let one lift.",
        "The stretch should be felt in the shoulder, not the neck.",
        "Move slowly. Speed will not increase your range.",
      ],
      ur: [
        "لیٹنے سے کمر کو سہارا ملتا ہے اور آپ کمر موڑ کر دھوکہ نہیں دے سکتے۔",
        "دونوں کندھے بستر پر ٹکے رہنے دیں — کسی ایک کو اٹھنے نہ دیں۔",
        "کھنچاؤ کندھے میں محسوس ہونا چاہیے، گردن میں نہیں۔",
        "آہستہ حرکت کریں۔ تیزی سے حرکت کی حد نہیں بڑھے گی۔",
      ],
    },
    commonMistakes: {
      en: [
        "Bending the elbows, which shortens the movement.",
        "Arching the lower back to gain apparent range.",
        "Shrugging the shoulder up towards the ear.",
        "Pushing into sharp pain rather than a stretch.",
      ],
      ur: [
        "کہنیاں موڑ لینا، جس سے حرکت کم ہو جاتی ہے۔",
        "زیادہ حرکت دکھانے کے لیے کمر کو محراب کی طرح موڑنا۔",
        "کندھے کو کان کی طرف اچکانا۔",
        "کھنچاؤ کے بجائے تیز درد تک زور لگانا۔",
      ],
    },
    safetyPrecautions: {
      en: [
        "A gentle stretch is expected; sharp or pinching pain is not.",
        "Respect any range limits set after surgery.",
        "Stop if you get pins and needles down the arm.",
      ],
      ur: [
        "ہلکا کھنچاؤ متوقع ہے؛ تیز یا چبھنے والا درد نہیں۔",
        "آپریشن کے بعد مقرر کردہ حرکت کی حدود کا خیال رکھیں۔",
        "اگر بازو میں سوئیاں چبھنے کا احساس ہو تو رک جائیں۔",
      ],
    },
    repetitions: "10",
    sets: "2–3",
    holdTime: "5 seconds at the top",
    frequency: "2–3 times a day",
    restBetweenSets: "30 seconds",
    progressions: ["active-shoulder-flexion", "wall-crawl-flexion"],
    regressions: ["pendulum-codman"],
    contraindications: {
      en: [
        "Unstable fracture around the shoulder",
        "Surgeon-specified restriction on elevation",
        "Acute anterior instability where elevation reproduces apprehension",
      ],
      ur: [
        "کندھے کے گرد غیر مستحکم ہڈی ٹوٹنا",
        "سرجن کی جانب سے بازو اٹھانے پر پابندی",
        "کندھے کی حالیہ عدم استحکام کی کیفیت جس میں بازو اٹھانے سے خوف یا بے چینی ہو",
      ],
    },
    evidence: {
      status: "unreviewed",
      rationale:
        "Active-assisted range of motion with a wand is standard practice for restoring elevation where active movement is limited by pain or stiffness. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frontFrames: [
        {
          pose: frontPose({ abductR: 4, abductL: 4, elbowR: 0, elbowL: 0 }, STAND),
          travel: 800,
          hold: 400,
          label: "Start — stick held at the thighs",
        },
        {
          pose: frontPose(
            { abductR: 150, abductL: 150, elbowR: 0, elbowL: 0 },
            STAND
          ),
          travel: 1100,
          hold: 1000,
          label: "Good arm guides both overhead — hold 5s",
        },
      ],
      props: [{ kind: "stick" }],
      arrows: [{ at: "handR", dir: 0, len: 36, label: "up" }],
    },
  },

  /* ------------------------------------------------------------- EX-S-003 */
  {
    id: "EX-S-003",
    slug: "wand-assisted-abduction",
    name: {
      en: "Wand-Assisted Shoulder Abduction",
      ur: "ڈنڈے کی مدد سے بازو ایک طرف اٹھانا",
    },
    bodyRegion: "Shoulder",
    joint: ["Glenohumeral", "Scapulothoracic"],
    musclesTargeted: ["Middle deltoid", "Supraspinatus", "Upper trapezius"],
    conditions: [
      "Adhesive capsulitis",
      "Post-operative stiffness",
      "Reduced abduction range",
    ],
    purpose: {
      en: "Restores the ability to lift the arm out to the side, guided by the good arm so the stiff shoulder is never forced.",
      ur: "بازو کو ایک طرف اٹھانے کی صلاحیت بحال کرتی ہے، صحت مند بازو رہنمائی کرتا ہے تاکہ سخت کندھے پر زبردستی نہ ہو۔",
    },
    difficulty: "Beginner",
    contraction: ["Passive", "Concentric"],
    mode: "Active-assisted",
    load: "No load",
    position: "Standing",
    equipment: ["A walking stick, broom handle or dowel"],
    startingPosition: {
      en: "Stand tall. Hold the stick horizontally in front of you with both hands, palms facing forward, arms relaxed down.",
      ur: "سیدھے کھڑے ہوں۔ ڈنڈے کو دونوں ہاتھوں سے سامنے افقی پکڑیں، ہتھیلیاں آگے کی طرف، بازو نیچے ڈھیلے۔",
    },
    quickSteps: {
      en: [
        "Stand holding the stick in front of you with both hands.",
        "Push sideways with the good hand so the affected arm lifts out to the side.",
        "Hold 5 seconds, then lower slowly.",
      ],
      ur: [
        "کھڑے ہو کر ڈنڈا دونوں ہاتھوں سے سامنے پکڑیں۔",
        "اچھے والے ہاتھ سے ڈنڈے کو سائیڈ پر دھکیلیں تاکہ تکلیف والا بازو سائیڈ میں اوپر اٹھے۔",
        "پانچ سیکنڈ رکیں، پھر آرام سے نیچے لے آئیں۔",
      ],
    },
    steps: {
      en: [
        "Keep both elbows straight and your body upright.",
        "Push the stick sideways with your good hand so the affected arm is lifted out to the side.",
        "Raise only as far as is comfortable.",
        "Hold at the end of the range.",
        "Lower slowly back to the starting position.",
      ],
      ur: [
        "دونوں کہنیاں سیدھی اور جسم سیدھا رکھیں۔",
        "صحت مند ہاتھ سے ڈنڈے کو ایک طرف دھکیلیں تاکہ متاثرہ بازو بغل کی طرف اٹھ جائے۔",
        "صرف اتنا اوپر لے جائیں جتنا آرام دہ ہو۔",
        "حرکت کی آخری حد پر رکیں۔",
        "آہستہ سے واپس ابتدائی پوزیشن پر لائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Keep your body straight — do not lean away to gain height.",
        "Keep the shoulder down; do not let it shrug up to the ear.",
        "If pain appears in a specific arc, stop just below it and tell your physiotherapist.",
      ],
      ur: [
        "جسم سیدھا رکھیں — زیادہ بلندی کے لیے دوسری طرف نہ جھکیں۔",
        "کندھا نیچے رکھیں؛ اسے کان کی طرف اچکنے نہ دیں۔",
        "اگر کسی خاص زاویے پر درد ہو تو اس سے ذرا پہلے رک جائیں اور اپنے فزیوتھراپسٹ کو بتائیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Leaning the trunk sideways instead of moving the shoulder.",
        "Shrugging the shoulder up to compensate.",
        "Bending the elbow of the affected arm.",
        "Rushing through the movement.",
      ],
      ur: [
        "کندھا حرکت دینے کے بجائے دھڑ کو ایک طرف جھکانا۔",
        "تلافی کے لیے کندھا اچکانا۔",
        "متاثرہ بازو کی کہنی موڑ لینا۔",
        "حرکت جلدی جلدی کرنا۔",
      ],
    },
    safetyPrecautions: {
      en: [
        "Stop at the point of pain, not past it.",
        "Take particular care between roughly 60 and 120 degrees if that arc is painful.",
      ],
      ur: [
        "درد کے مقام پر رک جائیں، اس سے آگے نہ بڑھیں۔",
        "اگر تقریباً 60 سے 120 درجے کے درمیان درد ہو تو خاص احتیاط کریں۔",
      ],
    },
    repetitions: "10",
    sets: "2–3",
    holdTime: "5 seconds",
    frequency: "2–3 times a day",
    restBetweenSets: "30 seconds",
    progressions: ["active-shoulder-abduction"],
    regressions: ["pendulum-codman"],
    contraindications: {
      en: [
        "Unstable fracture around the shoulder",
        "Surgeon-specified restriction on abduction",
        "Painful arc that worsens with repetition",
      ],
      ur: [
        "کندھے کے گرد غیر مستحکم ہڈی ٹوٹنا",
        "سرجن کی جانب سے بازو ایک طرف اٹھانے پر پابندی",
        "ایسا دردناک زاویہ جو دہرانے سے بڑھتا جائے",
      ],
    },
    evidence: {
      status: "unreviewed",
      rationale:
        "Wand-assisted abduction is routinely used to restore elevation in the coronal plane during early rehabilitation. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      // Both arms cannot abduct on one stick. To push the affected right arm
      // out to the side, the assisting left hand has to travel the same way,
      // which means the left arm ADDUCTS across the front of the body.
      frontFrames: [
        {
          pose: frontPose({ abductR: 6, abductL: 6, elbowR: 0, elbowL: 0 }, STAND),
          travel: 800,
          hold: 400,
          label: "Start — stick held low in front",
        },
        {
          pose: frontPose(
            { abductR: 94, abductL: -34, elbowR: 0, elbowL: 0 },
            STAND
          ),
          travel: 1100,
          hold: 900,
          label: "Left hand pushes; right arm lifts out",
        },
      ],
      props: [{ kind: "stick" }],
      arrows: [
        { at: "handR", dir: 300, len: 32, label: "affected" },
        { at: "handL", dir: 300, len: 26, label: "pushes" },
      ],
    },
  },

  /* ------------------------------------------------------------- EX-S-004 */
  {
    id: "EX-S-004",
    slug: "wand-assisted-external-rotation",
    name: {
      en: "Wand-Assisted External Rotation",
      ur: "ڈنڈے کی مدد سے بازو باہر کی طرف گھمانا",
    },
    bodyRegion: "Shoulder",
    joint: ["Glenohumeral"],
    musclesTargeted: ["Infraspinatus", "Teres minor", "Posterior deltoid"],
    conditions: [
      "Adhesive capsulitis",
      "Post-operative stiffness",
      "Loss of external rotation",
      "Rotator cuff repair rehabilitation",
    ],
    purpose: {
      en: "Restores the turning-out movement of the shoulder, which is usually the first range lost in a frozen shoulder and the hardest to regain.",
      ur: "کندھے کی باہر کی طرف گھومنے کی حرکت بحال کرتی ہے، جو منجمد کندھے میں سب سے پہلے ختم ہوتی ہے اور سب سے مشکل سے واپس آتی ہے۔",
    },
    difficulty: "Beginner",
    contraction: ["Passive", "Concentric"],
    mode: "Active-assisted",
    load: "No load",
    position: "Standing",
    equipment: ["A walking stick, broom handle or dowel", "A rolled towel"],
    startingPosition: {
      en: "Stand tall with a rolled towel tucked between your elbow and your side. Bend both elbows to 90 degrees and hold the stick horizontally, palms facing up.",
      ur: "سیدھے کھڑے ہوں اور ایک لپٹا ہوا تولیہ کہنی اور پہلو کے درمیان دبا لیں۔ دونوں کہنیاں 90 درجے پر موڑیں اور ڈنڈا افقی پکڑیں، ہتھیلیاں اوپر کی طرف۔",
    },
    quickSteps: {
      en: [
        "Tuck a rolled towel between your elbow and your side, elbow bent to 90°.",
        "Use the good hand to push the stick so the affected forearm turns outward.",
        "Keep the elbow glued to your side. Hold 10 seconds.",
      ],
      ur: [
        "ایک چھوٹا تولیہ لپیٹ کر کہنی اور پہلو کے بیچ دبا لیں، کہنی نوے ڈگری پر مڑی رہے۔",
        "اچھے والے ہاتھ سے ڈنڈا دھکیلیں تاکہ تکلیف والا بازو باہر کی طرف گھومے۔",
        "کہنی پہلو سے ہٹنی نہیں چاہیے۔ دس سیکنڈ رکیں۔",
      ],
    },
    steps: {
      en: [
        "Keep the affected elbow pressed into your side throughout — the towel helps you feel it.",
        "Use the good hand to push the stick sideways, turning the affected forearm away from your body.",
        "Keep the wrist and forearm level; do not let the hand drop.",
        "Hold at the end of range where you feel a stretch.",
        "Return slowly to the middle.",
      ],
      ur: [
        "متاثرہ کہنی کو پوری ورزش کے دوران پہلو سے لگائے رکھیں — تولیہ اسے محسوس کرنے میں مدد دیتا ہے۔",
        "صحت مند ہاتھ سے ڈنڈے کو ایک طرف دھکیلیں تاکہ متاثرہ بازو جسم سے باہر کی طرف گھومے۔",
        "کلائی اور بازو سیدھے رکھیں؛ ہاتھ کو نیچے نہ گرنے دیں۔",
        "جہاں کھنچاؤ محسوس ہو وہاں رکیں۔",
        "آہستہ سے درمیان میں واپس آئیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "The elbow must stay glued to your side. If the towel drops, you have lost the position.",
        "This is a rotation, not a reach — your hand moves out, your elbow does not.",
        "Expect a stretch at the front of the shoulder.",
        "Often the most restricted direction after a frozen shoulder — progress will be slow and that is normal.",
      ],
      ur: [
        "کہنی پہلو سے چپکی رہنی چاہیے۔ اگر تولیہ گر جائے تو پوزیشن بگڑ گئی۔",
        "یہ گھماؤ ہے، آگے بڑھنا نہیں — آپ کا ہاتھ باہر جاتا ہے، کہنی نہیں۔",
        "کندھے کے اگلے حصے میں کھنچاؤ متوقع ہے۔",
        "منجمد کندھے کے بعد یہ اکثر سب سے زیادہ محدود سمت ہوتی ہے — بہتری آہستہ ہوگی، یہ معمول ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Letting the elbow drift away from the body.",
        "Turning the whole trunk instead of the shoulder.",
        "Letting the elbow angle open past 90 degrees.",
        "Forcing the range and provoking pain.",
      ],
      ur: [
        "کہنی کو جسم سے دور ہٹنے دینا۔",
        "کندھے کے بجائے پورا دھڑ گھمانا۔",
        "کہنی کا زاویہ 90 درجے سے زیادہ کھول دینا۔",
        "زبردستی حرکت بڑھانا اور درد پیدا کرنا۔",
      ],
    },
    safetyPrecautions: {
      en: [
        "After a rotator cuff repair, external rotation range is often restricted — follow your surgeon's limit exactly.",
        "Stop at a stretch, never at sharp pain.",
      ],
      ur: [
        "روٹیٹر کف کی مرمت کے بعد باہر گھمانے کی حد اکثر محدود ہوتی ہے — سرجن کی مقرر کردہ حد پر بالکل عمل کریں۔",
        "کھنچاؤ پر رکیں، تیز درد پر ہرگز نہیں۔",
      ],
    },
    repetitions: "10",
    sets: "2–3",
    holdTime: "10 seconds",
    frequency: "2–3 times a day",
    restBetweenSets: "30 seconds",
    progressions: ["band-external-rotation"],
    regressions: ["pendulum-codman"],
    contraindications: {
      en: [
        "Post-operative restriction on external rotation",
        "Anterior shoulder instability",
        "Recent subscapularis repair",
      ],
      ur: [
        "آپریشن کے بعد باہر گھمانے پر پابندی",
        "کندھے کے اگلے حصے کی عدم استحکام",
        "حالیہ سب اسکیپولرس کی مرمت",
      ],
    },
    evidence: {
      status: "unreviewed",
      rationale:
        "External rotation range is characteristically the most limited direction in adhesive capsulitis; assisted range work at the side is standard early management. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frontFrames: [
        {
          pose: frontPose(
            { abductR: 8, abductL: 8, elbowR: -20, elbowL: 46 },
            STAND
          ),
          travel: 800,
          hold: 400,
          label: "Start — elbows at the sides, bent to 90°",
        },
        {
          // Both hands travel the same way across the screen: that is external
          // rotation for the affected side and internal rotation for the
          // assisting side. They cannot both rotate outward on one stick.
          pose: frontPose(
            { abductR: 8, abductL: 8, elbowR: 76, elbowL: -52 },
            STAND
          ),
          travel: 1000,
          hold: 1200,
          label: "Left hand pushes it across — hold 10s",
        },
      ],
      props: [{ kind: "stick" }],
      arrows: [{ at: "handR", dir: 270, len: 32, label: "out" }],
    },
  },

  /* ------------------------------------------------------------- EX-S-005 */
  {
    id: "EX-S-005",
    slug: "wall-crawl-flexion",
    name: {
      en: "Wall Crawl (Finger Ladder) — Forward",
      ur: "دیوار پر انگلیوں سے چڑھنا — سامنے کی طرف",
    },
    bodyRegion: "Shoulder",
    joint: ["Glenohumeral", "Scapulothoracic"],
    musclesTargeted: ["Anterior deltoid", "Serratus anterior", "Supraspinatus"],
    conditions: [
      "Adhesive capsulitis",
      "Reduced shoulder elevation",
      "Post-operative stiffness",
    ],
    purpose: {
      en: "The wall takes the weight of the arm, so the shoulder can gradually be walked into more height than it could lift unaided — and progress is easy to measure.",
      ur: "دیوار بازو کا وزن سنبھالتی ہے، اس لیے کندھے کو آہستہ آہستہ اُس بلندی تک لے جایا جا سکتا ہے جہاں وہ خود نہیں پہنچ سکتا — اور بہتری ناپنا آسان ہوتا ہے۔",
    },
    difficulty: "Beginner",
    contraction: ["Concentric"],
    mode: "Active-assisted",
    load: "Assisted",
    position: "Standing",
    equipment: ["A clear wall"],
    startingPosition: {
      en: "Stand facing a wall, about an arm's length away. Place the fingertips of the affected hand on the wall at about waist height.",
      ur: "دیوار کی طرف رخ کر کے تقریباً ایک بازو کے فاصلے پر کھڑے ہوں۔ متاثرہ ہاتھ کی انگلیوں کے پوروں کو کمر کی بلندی پر دیوار پر رکھیں۔",
    },
    quickSteps: {
      en: [
        "Stand facing a wall with your fingertips on it at waist height.",
        "Walk your fingers slowly up the wall, stepping closer as you go.",
        "Hold at your highest comfortable point, then walk them back down.",
      ],
      ur: [
        "دیوار کے سامنے کھڑے ہوں اور انگلیاں کمر کی اونچائی پر دیوار پر رکھیں۔",
        "انگلیوں کو آہستہ آہستہ دیوار پر اوپر چڑھائیں اور ساتھ ساتھ دیوار کے قریب ہوتے جائیں۔",
        "جہاں تک آرام سے جا سکیں وہیں رکیں، پھر انگلیوں کو واپس نیچے لے آئیں۔",
      ],
    },
    steps: {
      en: [
        "Walk your fingers slowly up the wall, like a spider climbing.",
        "Let your body step closer to the wall as your hand rises.",
        "Go up only to the point of a comfortable stretch.",
        "Hold there and breathe.",
        "Walk the fingers back down slowly — do not just drop the arm.",
      ],
      ur: [
        "اپنی انگلیوں کو آہستہ آہستہ دیوار پر اوپر چلائیں، جیسے مکڑی چڑھتی ہے۔",
        "جیسے جیسے ہاتھ اوپر جائے، جسم کو دیوار کے قریب کرتے جائیں۔",
        "صرف اتنا اوپر جائیں جہاں آرام دہ کھنچاؤ ہو۔",
        "وہاں رکیں اور سانس لیتے رہیں۔",
        "انگلیوں کو آہستہ سے واپس نیچے چلائیں — بازو کو یکدم نہ گرائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Mark your best height with a small piece of tape — it shows progress week by week.",
        "Do not shrug the shoulder up; keep it relaxed and down.",
        "The fingers do the walking; the shoulder just follows.",
        "Turning side-on to the wall works the same movement outward to the side.",
      ],
      ur: [
        "اپنی بہترین بلندی پر ٹیپ کا چھوٹا ٹکڑا لگائیں — اس سے ہفتہ وار بہتری نظر آتی ہے۔",
        "کندھا نہ اچکائیں؛ اسے ڈھیلا اور نیچے رکھیں۔",
        "انگلیاں چلتی ہیں؛ کندھا صرف ان کے پیچھے آتا ہے۔",
        "دیوار کی طرف پہلو کر کے کھڑے ہونے سے یہی حرکت بغل کی طرف ہوتی ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Leaning the trunk backwards to appear to reach higher.",
        "Shrugging the shoulder towards the ear.",
        "Standing too far from the wall so the arm is unsupported.",
        "Dropping the arm at the end instead of walking it down.",
      ],
      ur: [
        "زیادہ اونچائی دکھانے کے لیے دھڑ کو پیچھے جھکانا۔",
        "کندھے کو کان کی طرف اچکانا۔",
        "دیوار سے بہت دور کھڑے ہونا جس سے بازو کو سہارا نہیں ملتا۔",
        "آخر میں بازو کو نیچے چلانے کے بجائے یکدم گرا دینا۔",
      ],
    },
    safetyPrecautions: {
      en: [
        "Do not push through sharp pain to reach a mark.",
        "Make sure the floor is not slippery before you step forward.",
      ],
      ur: [
        "کسی نشان تک پہنچنے کے لیے تیز درد برداشت نہ کریں۔",
        "آگے قدم بڑھانے سے پہلے یقینی بنائیں کہ فرش پھسلن والا نہیں۔",
      ],
    },
    repetitions: "8–10",
    sets: "2",
    holdTime: "10 seconds at the top",
    frequency: "2–3 times a day",
    restBetweenSets: "30 seconds",
    progressions: ["active-shoulder-flexion"],
    regressions: ["wand-assisted-flexion"],
    contraindications: {
      en: [
        "Surgeon-specified restriction on elevation",
        "Unstable fracture around the shoulder",
        "Balance impairment that makes standing close to a wall unsafe",
      ],
      ur: [
        "سرجن کی جانب سے بازو اٹھانے پر پابندی",
        "کندھے کے گرد غیر مستحکم ہڈی ٹوٹنا",
        "توازن کی خرابی جس سے دیوار کے قریب کھڑا ہونا محفوظ نہ ہو",
      ],
    },
    evidence: {
      status: "unreviewed",
      rationale:
        "Finger-ladder wall walking is a widely used assisted elevation exercise with the advantage of a visible progress marker. Citations to be attached at clinical review.",
    },
    figure: {
      // Drawn side-on with the wall in front of the figure. From the front the
      // arm rising could be flexion or abduction; side-on, facing a solid
      // wall, it can only be flexion.
      view: "side",
      frames: [
        {
          pose: pose(
            { rootX: 176, rootY: 205, shoulderNear: 108, elbowNear: 34 },
            NEUTRAL
          ),
          travel: 800,
          hold: 300,
          label: "Fingertips start at waist height",
        },
        {
          pose: pose(
            { rootX: 176, rootY: 205, shoulderNear: 26, elbowNear: 6 },
            NEUTRAL
          ),
          travel: 1200,
          hold: 900,
          label: "Walk the fingers up the wall — hold 10s",
        },
      ],
      props: [{ kind: "wallRight" }],
      arrows: [{ at: "hand", dir: 0, len: 28, label: "climb" }],
    },
  },

  /* ------------------------------------------------------------- EX-S-006 */
  {
    id: "EX-S-006",
    slug: "scapular-setting",
    name: {
      en: "Scapular Setting (Shoulder Blade Squeeze)",
      ur: "شانے کی ہڈیوں کو ملانا",
    },
    bodyRegion: "Shoulder",
    joint: ["Scapulothoracic"],
    musclesTargeted: [
      "Middle trapezius",
      "Lower trapezius",
      "Rhomboid major",
      "Rhomboid minor",
    ],
    conditions: [
      "Scapular dyskinesis",
      "Subacromial pain syndrome",
      "Postural neck and shoulder pain",
      "Rotator cuff related shoulder pain",
    ],
    purpose: {
      en: "Teaches control of the shoulder blade, which is the stable base every arm movement is built on. Without it, the shoulder joint takes load it was not designed to take.",
      ur: "شانے کی ہڈی پر قابو سکھاتی ہے، جو بازو کی ہر حرکت کی مضبوط بنیاد ہے۔ اس کے بغیر کندھے کے جوڑ پر ایسا بوجھ پڑتا ہے جس کے لیے وہ بنا ہی نہیں۔",
    },
    difficulty: "Beginner",
    contraction: ["Isometric"],
    mode: "Active",
    load: "No load",
    position: "Sitting",
    equipment: [],
    startingPosition: {
      en: "Sit or stand tall with your arms relaxed by your sides and your shoulders dropped away from your ears.",
      ur: "سیدھے بیٹھیں یا کھڑے ہوں، بازو پہلوؤں پر ڈھیلے اور کندھے کانوں سے دور نیچے۔",
    },
    quickSteps: {
      en: [
        "Sit or stand tall with your arms relaxed.",
        "Gently draw your shoulder blades together and slightly down.",
        "Hold 5 seconds without shrugging, then release.",
      ],
      ur: [
        "سیدھے بیٹھ یا کھڑے ہو جائیں، بازو ڈھیلے چھوڑ دیں۔",
        "دونوں شولڈر بلیڈ کو آہستہ سے پیچھے اور تھوڑا نیچے کی طرف ملائیں۔",
        "کندھے اوپر مت اٹھائیں۔ پانچ سیکنڈ رکیں، پھر چھوڑ دیں۔",
      ],
    },
    steps: {
      en: [
        "Gently draw your shoulder blades together and slightly downward.",
        "Imagine holding a pencil between them without crushing it.",
        "Keep your shoulders down — they must not rise towards your ears.",
        "Hold while breathing normally.",
        "Release slowly and completely before repeating.",
      ],
      ur: [
        "اپنی شانے کی ہڈیوں کو نرمی سے آپس میں ملائیں اور ہلکا سا نیچے کی طرف کھینچیں۔",
        "تصور کریں کہ ان کے درمیان ایک پنسل ہے جسے آپ نے دبانا نہیں توڑنا نہیں۔",
        "کندھے نیچے رکھیں — وہ کانوں کی طرف نہیں اٹھنے چاہئیں۔",
        "سانس معمول کے مطابق لیتے ہوئے اس حالت میں رکیں۔",
        "دہرانے سے پہلے آہستہ اور مکمل طور پر ڈھیلا چھوڑ دیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "This is a small movement. If it looks big, you are using the wrong muscles.",
        "Effort should be gentle — about two out of ten.",
        "The most common error is shrugging. Watch yourself in a mirror.",
        "Can be done many times a day at a desk without anyone noticing.",
      ],
      ur: [
        "یہ ایک چھوٹی حرکت ہے۔ اگر یہ بڑی نظر آئے تو آپ غلط پٹھے استعمال کر رہے ہیں۔",
        "زور ہلکا ہونا چاہیے — دس میں سے تقریباً دو۔",
        "سب سے عام غلطی کندھے اچکانا ہے۔ آئینے میں خود کو دیکھیں۔",
        "دفتر میں میز پر بیٹھے ہوئے دن میں کئی بار کی جا سکتی ہے، کسی کو پتہ بھی نہیں چلے گا۔",
      ],
    },
    commonMistakes: {
      en: [
        "Shrugging the shoulders upward.",
        "Squeezing far too hard.",
        "Arching the lower back to help.",
        "Holding the breath during the squeeze.",
      ],
      ur: [
        "کندھوں کو اوپر اچکانا۔",
        "بہت زیادہ زور سے دبانا۔",
        "مدد کے لیے کمر کو موڑنا۔",
        "دباؤ کے دوران سانس روک لینا۔",
      ],
    },
    safetyPrecautions: {
      en: [
        "Should be completely pain-free.",
        "Stop if you get pain or tingling into the arm.",
      ],
      ur: [
        "یہ بالکل بے درد ہونی چاہیے۔",
        "اگر بازو میں درد یا جھنجھناہٹ ہو تو رک جائیں۔",
      ],
    },
    repetitions: "10",
    sets: "3",
    holdTime: "5 seconds",
    frequency: "Several times daily",
    restBetweenSets: "20 seconds",
    progressions: ["band-row-retraction"],
    regressions: [],
    contraindications: {
      en: [
        "Acute scapular or clavicular fracture",
        "Recent thoracic spine surgery",
      ],
      ur: [
        "شانے یا ہنسلی کی ہڈی کا حالیہ ٹوٹنا",
        "چھاتی کی ریڑھ کی ہڈی کا حالیہ آپریشن",
      ],
    },
    evidence: {
      status: "unreviewed",
      rationale:
        "Scapular stabiliser retraining is a core component of management for rotator cuff related shoulder pain and scapular dyskinesis. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frontFrames: [
        {
          pose: frontPose({ scapulaR: -6, scapulaL: -6 }, STAND),
          travel: 800,
          hold: 400,
          label: "Start — shoulders relaxed forward",
        },
        {
          pose: frontPose({ scapulaR: 7, scapulaL: 7 }, STAND),
          travel: 900,
          hold: 1300,
          label: "Draw the blades together — hold 5s",
        },
      ],
      arrows: [
        { at: "shoulderR", dir: 90, len: 26, label: "back" },
        { at: "shoulderL", dir: 270, len: 26 },
      ],
    },
  },

  /* ------------------------------------------------------------- EX-S-007 */
  {
    id: "EX-S-007",
    slug: "active-shoulder-flexion",
    name: {
      en: "Active Shoulder Flexion",
      ur: "بازو کو خود آگے اٹھانا",
    },
    bodyRegion: "Shoulder",
    joint: ["Glenohumeral", "Scapulothoracic"],
    musclesTargeted: [
      "Anterior deltoid",
      "Supraspinatus",
      "Serratus anterior",
      "Upper trapezius",
    ],
    conditions: [
      "Recovering shoulder stiffness",
      "Rotator cuff related shoulder pain",
      "Deconditioning after immobilisation",
    ],
    purpose: {
      en: "Rebuilds the ability to lift the arm forward under its own power, the movement needed for reaching, dressing and lifting.",
      ur: "بازو کو اپنی طاقت سے آگے اٹھانے کی صلاحیت بحال کرتی ہے، جو کچھ پکڑنے، کپڑے پہننے اور وزن اٹھانے کے لیے ضروری ہے۔",
    },
    difficulty: "Intermediate",
    contraction: ["Concentric", "Eccentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Standing",
    equipment: [],
    startingPosition: {
      en: "Stand tall with your arms relaxed by your sides, thumb pointing forward.",
      ur: "سیدھے کھڑے ہوں، بازو پہلوؤں پر ڈھیلے اور انگوٹھا آگے کی طرف۔",
    },
    quickSteps: {
      en: [
        "Stand tall with the arm at your side, thumb forward.",
        "Raise the arm forward and up with the elbow straight — no shrugging.",
        "Pause at the top, then lower slowly.",
      ],
      ur: [
        "سیدھے کھڑے ہوں، بازو پہلو پر اور انگوٹھا سامنے کی طرف۔",
        "کہنی سیدھی رکھتے ہوئے بازو کو آگے سے اوپر اٹھائیں — کندھا اوپر نہ اچکے۔",
        "اوپر ایک لمحہ رکیں، پھر آرام سے نیچے لے آئیں۔",
      ],
    },
    steps: {
      en: [
        "Set your shoulder blade gently before you begin.",
        "Keeping the elbow straight, raise the arm forward and upward.",
        "Lift only as high as you can go without shrugging or leaning back.",
        "Pause briefly at the top.",
        "Lower slowly under control — the lowering matters as much as the lift.",
      ],
      ur: [
        "شروع کرنے سے پہلے شانے کی ہڈی کو نرمی سے سیٹ کریں۔",
        "کہنی سیدھی رکھتے ہوئے بازو کو آگے اور اوپر اٹھائیں۔",
        "صرف اتنا اوپر لے جائیں جتنا کندھا اچکائے یا پیچھے جھکے بغیر ممکن ہو۔",
        "اوپر تھوڑی دیر رکیں۔",
        "آہستہ اور قابو سے نیچے لائیں — نیچے لانا اٹھانے جتنا ہی اہم ہے۔",
      ],
    },
    specialInstructions: {
      en: [
        "Quality over height. A controlled lift to 90 degrees beats a shrugged lift to 150.",
        "Watch in a mirror: the shoulder should stay level as the arm rises.",
        "If a particular arc hurts, note where and report it.",
        "Add a light weight only once the movement is clean and pain-free.",
      ],
      ur: [
        "بلندی سے زیادہ معیار اہم ہے۔ 90 درجے تک قابو سے اٹھانا 150 درجے تک اچک کر اٹھانے سے بہتر ہے۔",
        "آئینے میں دیکھیں: بازو اٹھتے وقت کندھا برابر رہنا چاہیے۔",
        "اگر کسی خاص زاویے پر درد ہو تو نوٹ کریں اور بتائیں۔",
        "ہلکا وزن صرف اُس وقت شامل کریں جب حرکت صاف اور بے درد ہو جائے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Shrugging the shoulder to get the arm higher.",
        "Leaning the trunk backwards.",
        "Swinging the arm up with momentum.",
        "Letting the arm drop rather than lowering it.",
      ],
      ur: [
        "بازو اونچا کرنے کے لیے کندھا اچکانا۔",
        "دھڑ کو پیچھے جھکانا۔",
        "جھٹکے سے بازو اوپر پھینکنا۔",
        "بازو کو نیچے لانے کے بجائے گرا دینا۔",
      ],
    },
    safetyPrecautions: {
      en: [
        "Work below the painful arc if one is present.",
        "Stop if pain lingers after the session rather than settling.",
      ],
      ur: [
        "اگر کوئی دردناک زاویہ ہو تو اس سے نیچے کام کریں۔",
        "اگر ورزش کے بعد درد ختم ہونے کے بجائے برقرار رہے تو بند کر دیں۔",
      ],
    },
    repetitions: "10–12",
    sets: "3",
    holdTime: "1–2 seconds at the top",
    frequency: "Once daily",
    restBetweenSets: "45 seconds",
    progressions: ["scaption-raise"],
    regressions: ["wand-assisted-flexion", "wall-crawl-flexion"],
    contraindications: {
      en: [
        "Surgeon-specified restriction on active elevation",
        "Acute rotator cuff tear awaiting surgical opinion",
        "Unstable fracture around the shoulder",
      ],
      ur: [
        "سرجن کی جانب سے بازو خود اٹھانے پر پابندی",
        "روٹیٹر کف کا حالیہ پھٹنا جس پر سرجن کی رائے زیرِ التوا ہو",
        "کندھے کے گرد غیر مستحکم ہڈی ٹوٹنا",
      ],
    },
    evidence: {
      status: "unreviewed",
      rationale:
        "Active elevation with attention to scapulohumeral control is a standard progression once assisted range is comfortable. Citations to be attached at clinical review.",
    },
    figure: {
      view: "side",
      frames: [
        {
          pose: pose({ rootY: 205, shoulderNear: 176, elbowNear: 4 }, NEUTRAL),
          travel: 800,
          hold: 400,
          label: "Start — arm at the side",
        },
        {
          pose: pose({ rootY: 205, shoulderNear: 20, elbowNear: 2 }, NEUTRAL),
          travel: 1100,
          hold: 800,
          label: "Raise forward and up — elbow straight",
        },
      ],
      arrows: [{ at: "hand", dir: 60, len: 34, label: "up" }],
    },
  },

  /* ------------------------------------------------------------- EX-S-008 */
  {
    id: "EX-S-008",
    slug: "active-shoulder-abduction",
    name: {
      en: "Active Shoulder Abduction",
      ur: "بازو کو خود ایک طرف اٹھانا",
    },
    bodyRegion: "Shoulder",
    joint: ["Glenohumeral", "Scapulothoracic"],
    musclesTargeted: ["Middle deltoid", "Supraspinatus", "Serratus anterior"],
    conditions: [
      "Rotator cuff related shoulder pain",
      "Recovering shoulder stiffness",
      "Deltoid weakness",
    ],
    purpose: {
      en: "Rebuilds strength for lifting the arm out to the side — the movement most often lost and most often painful in shoulder problems.",
      ur: "بازو کو ایک طرف اٹھانے کی طاقت بحال کرتی ہے — کندھے کے مسائل میں یہ حرکت سب سے زیادہ متاثر اور سب سے زیادہ دردناک ہوتی ہے۔",
    },
    difficulty: "Intermediate",
    contraction: ["Concentric", "Eccentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Standing",
    equipment: [],
    startingPosition: {
      en: "Stand tall with your arms by your sides and palms facing your thighs.",
      ur: "سیدھے کھڑے ہوں، بازو پہلوؤں پر اور ہتھیلیاں رانوں کی طرف۔",
    },
    quickSteps: {
      en: [
        "Stand tall with arms at your sides.",
        "Lift the arm out to the side with the thumb pointing up, elbow straight.",
        "Stop at shoulder height, then lower slowly.",
      ],
      ur: [
        "سیدھے کھڑے ہوں، بازو پہلوؤں پر۔",
        "انگوٹھا اوپر رکھ کر بازو کو سائیڈ سے اوپر اٹھائیں، کہنی سیدھی رہے۔",
        "کندھے کی اونچائی پر رک جائیں، پھر آرام سے نیچے لے آئیں۔",
      ],
    },
    steps: {
      en: [
        "Set the shoulder blade gently.",
        "With the elbow straight, lift the arm out to the side.",
        "Lead with the thumb slightly up — this keeps the joint clear.",
        "Stop at shoulder height, or lower if that is where comfort ends.",
        "Lower slowly back to your side.",
      ],
      ur: [
        "شانے کی ہڈی کو نرمی سے سیٹ کریں۔",
        "کہنی سیدھی رکھتے ہوئے بازو کو ایک طرف اٹھائیں۔",
        "انگوٹھا ہلکا سا اوپر رکھیں — اس سے جوڑ میں جگہ رہتی ہے۔",
        "کندھے کی بلندی پر رکیں، یا اس سے پہلے اگر آرام وہیں ختم ہو جائے۔",
        "آہستہ سے واپس پہلو پر لائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Thumb up, not palm down — palm-down lifting closes the space at the top of the shoulder.",
        "Do not go past shoulder height in the early stages.",
        "If there is a painful band partway up, work below it for now.",
        "Keep the neck relaxed throughout.",
      ],
      ur: [
        "انگوٹھا اوپر رکھیں، ہتھیلی نیچے نہیں — ہتھیلی نیچے رکھ کر اٹھانے سے کندھے کے اوپر کی جگہ تنگ ہو جاتی ہے۔",
        "ابتدائی مرحلے میں کندھے کی بلندی سے اوپر نہ جائیں۔",
        "اگر درمیان میں کسی جگہ درد ہو تو فی الحال اس سے نیچے کام کریں۔",
        "پوری ورزش کے دوران گردن ڈھیلی رکھیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Shrugging the shoulder up as the arm rises.",
        "Side-bending the trunk away from the lifting arm.",
        "Lifting with the palm facing down.",
        "Using momentum instead of control.",
      ],
      ur: [
        "بازو اٹھتے وقت کندھا اچکانا۔",
        "اٹھانے والے بازو کی مخالف سمت دھڑ کو جھکانا۔",
        "ہتھیلی نیچے رکھ کر اٹھانا۔",
        "قابو کے بجائے جھٹکے کا استعمال۔",
      ],
    },
    safetyPrecautions: {
      en: [
        "Avoid the painful arc, typically around 60 to 120 degrees, until it settles.",
        "Reduce the height rather than pushing through discomfort.",
      ],
      ur: [
        "دردناک زاویہ، عام طور پر 60 سے 120 درجے، سے تب تک گریز کریں جب تک وہ ٹھیک نہ ہو۔",
        "تکلیف برداشت کرنے کے بجائے بلندی کم کریں۔",
      ],
    },
    repetitions: "10–12",
    sets: "3",
    holdTime: "1–2 seconds",
    frequency: "Once daily",
    restBetweenSets: "45 seconds",
    progressions: ["scaption-raise"],
    regressions: ["wand-assisted-abduction"],
    contraindications: {
      en: [
        "Surgeon-specified restriction on abduction",
        "Acute subacromial bursitis with marked pain on elevation",
        "Unstable fracture around the shoulder",
      ],
      ur: [
        "سرجن کی جانب سے بازو ایک طرف اٹھانے پر پابندی",
        "سب ایکرومیئل برسائٹس کی شدید حالت جس میں بازو اٹھانے سے تیز درد ہو",
        "کندھے کے گرد غیر مستحکم ہڈی ٹوٹنا",
      ],
    },
    evidence: {
      status: "unreviewed",
      rationale:
        "Active abduction with thumb-up positioning is commonly preferred to reduce subacromial narrowing during elevation. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frontFrames: [
        {
          pose: frontPose({ abductR: 6, abductL: 6 }, STAND),
          travel: 800,
          hold: 400,
          label: "Start — arms at the sides",
        },
        {
          pose: frontPose({ abductR: 90, abductL: 90 }, STAND),
          travel: 1100,
          hold: 800,
          label: "Lift to shoulder height, thumbs up",
        },
      ],
      arrows: [{ at: "handR", dir: 340, len: 32, label: "out" }],
    },
  },

  /* ------------------------------------------------------------- EX-S-009 */
  {
    id: "EX-S-009",
    slug: "scaption-raise",
    name: {
      en: "Scaption Raise (Scapular Plane Elevation)",
      ur: "اسکیپشن ریز (شانے کے زاویے میں بازو اٹھانا)",
    },
    bodyRegion: "Shoulder",
    joint: ["Glenohumeral", "Scapulothoracic"],
    musclesTargeted: [
      "Supraspinatus",
      "Middle deltoid",
      "Serratus anterior",
      "Lower trapezius",
    ],
    conditions: [
      "Rotator cuff related shoulder pain",
      "Subacromial pain syndrome",
      "Return to overhead activity",
    ],
    purpose: {
      en: "Lifts the arm in the shoulder blade's natural plane — about 30 degrees forward of straight sideways — which is where the joint is most congruent and least likely to pinch.",
      ur: "بازو کو شانے کی ہڈی کے قدرتی زاویے میں اٹھایا جاتا ہے — سیدھے بغل سے تقریباً 30 درجے آگے — جہاں جوڑ سب سے زیادہ ہم آہنگ ہوتا ہے اور دبنے کا امکان کم ہوتا ہے۔",
    },
    difficulty: "Intermediate",
    contraction: ["Concentric", "Eccentric"],
    mode: "Active",
    load: "Bodyweight",
    position: "Standing",
    equipment: ["Light dumbbells (optional, 0.5–2 kg)"],
    startingPosition: {
      en: "Stand tall. Let your arms hang, then bring them forward about 30 degrees from your sides, thumbs pointing up.",
      ur: "سیدھے کھڑے ہوں۔ بازو لٹکنے دیں، پھر انہیں پہلوؤں سے تقریباً 30 درجے آگے لائیں، انگوٹھے اوپر کی طرف۔",
    },
    quickSteps: {
      en: [
        "Bring your arms about 30° forward of your sides, thumbs up.",
        "Raise both arms along that forward diagonal to shoulder height.",
        "Lower slowly along the same line.",
      ],
      ur: [
        "بازوؤں کو پہلو سے تھوڑا آگے کریں (تقریباً تیس ڈگری)، انگوٹھے اوپر۔",
        "دونوں بازو اسی ترچھی لائن پر کندھے کی اونچائی تک اٹھائیں۔",
        "اسی لائن پر آرام سے واپس نیچے لے آئیں۔",
      ],
    },
    steps: {
      en: [
        "Keep the thumbs pointing upward throughout.",
        "Raise both arms along that forward-diagonal line.",
        "Stop at shoulder height in the early stages.",
        "Pause, keeping the shoulders down and level.",
        "Lower slowly along the same line.",
      ],
      ur: [
        "پوری ورزش میں انگوٹھے اوپر کی طرف رکھیں۔",
        "دونوں بازو اسی آگے کی طرف مائل لکیر پر اٹھائیں۔",
        "ابتدائی مرحلے میں کندھے کی بلندی پر رکیں۔",
        "رکیں، کندھے نیچے اور برابر رکھیں۔",
        "اسی لکیر پر آہستہ سے نیچے لائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Think of the letter V: your arms travel forward and out, not straight to the side.",
        "This is usually the most comfortable way to lift a painful shoulder.",
        "Add weight only when you can complete all repetitions without shrugging.",
        "Stop the set the moment the shoulder starts to hitch upward.",
      ],
      ur: [
        "انگریزی حرف V کا تصور کریں: آپ کے بازو آگے اور باہر جاتے ہیں، سیدھے بغل کی طرف نہیں۔",
        "دردناک کندھے کو اٹھانے کا یہ عام طور پر سب سے آرام دہ طریقہ ہے۔",
        "وزن صرف اُس وقت شامل کریں جب آپ کندھا اچکائے بغیر تمام دہرائیاں مکمل کر سکیں۔",
        "جیسے ہی کندھا اوپر کی طرف اچکنے لگے، سیٹ روک دیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "Drifting into straight abduction instead of the scapular plane.",
        "Turning the thumbs down.",
        "Using weights that are too heavy too soon.",
        "Shrugging in the last part of the range.",
      ],
      ur: [
        "شانے کے زاویے کے بجائے سیدھا بغل کی طرف چلے جانا۔",
        "انگوٹھے نیچے کر لینا۔",
        "بہت جلد بہت بھاری وزن استعمال کرنا۔",
        "حرکت کے آخری حصے میں کندھا اچکانا۔",
      ],
    },
    safetyPrecautions: {
      en: [
        "Start with no weight at all.",
        "Discomfort during the set should settle quickly afterwards; if it does not, reduce the load.",
      ],
      ur: [
        "بالکل بغیر وزن کے شروع کریں۔",
        "سیٹ کے دوران تکلیف بعد میں جلد ختم ہو جانی چاہیے؛ اگر نہ ہو تو وزن کم کریں۔",
      ],
    },
    repetitions: "10–12",
    sets: "3",
    holdTime: "1–2 seconds",
    frequency: "Every other day",
    restBetweenSets: "60 seconds",
    progressions: [],
    regressions: ["active-shoulder-abduction"],
    contraindications: {
      en: [
        "Acute full-thickness rotator cuff tear",
        "Surgeon-specified restriction on elevation",
        "Marked painful arc not yet settled",
      ],
      ur: [
        "روٹیٹر کف کا مکمل پھٹنا (حالیہ)",
        "سرجن کی جانب سے بازو اٹھانے پر پابندی",
        "واضح دردناک زاویہ جو ابھی ٹھیک نہ ہوا ہو",
      ],
    },
    evidence: {
      status: "unreviewed",
      rationale:
        "Elevation in the scapular plane is widely preferred to pure abduction during rotator cuff rehabilitation for reasons of joint congruency and comfort. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frontFrames: [
        {
          pose: frontPose({ abductR: 14, abductL: 14, elbowR: 2, elbowL: 2 }, STAND),
          travel: 800,
          hold: 400,
          label: "Start — arms slightly forward of the sides",
        },
        {
          pose: frontPose({ abductR: 84, abductL: 84, elbowR: 2, elbowL: 2 }, STAND),
          travel: 1100,
          hold: 800,
          label: "Raise on the diagonal, thumbs up",
        },
      ],
      props: [{ kind: "dumbbells" }],
      arrows: [{ at: "handR", dir: 335, len: 30, label: "V shape" }],
    },
  },

  /* ------------------------------------------------------------- EX-S-010 */
  {
    id: "EX-S-010",
    slug: "band-external-rotation",
    name: {
      en: "Resisted External Rotation with Band",
      ur: "ربڑ بینڈ کے ساتھ بازو باہر گھمانا",
    },
    bodyRegion: "Shoulder",
    joint: ["Glenohumeral"],
    musclesTargeted: ["Infraspinatus", "Teres minor", "Posterior deltoid"],
    conditions: [
      "Rotator cuff related shoulder pain",
      "Subacromial pain syndrome",
      "Shoulder instability",
      "Return to throwing or overhead sport",
    ],
    purpose: {
      en: "Strengthens the small muscles at the back of the shoulder that hold the ball centred in the socket. These are almost always the weak link in shoulder pain.",
      ur: "کندھے کے پچھلے حصے کے چھوٹے پٹھوں کو مضبوط کرتی ہے جو جوڑ کی گیند کو اپنی جگہ پر رکھتے ہیں۔ کندھے کے درد میں تقریباً ہمیشہ یہی کمزور کڑی ہوتے ہیں۔",
    },
    difficulty: "Intermediate",
    contraction: ["Concentric", "Eccentric"],
    mode: "Resisted",
    load: "Resistance band",
    position: "Standing",
    equipment: ["Resistance band", "A rolled towel"],
    startingPosition: {
      en: "Stand side-on to where the band is anchored, at about elbow height. Tuck a rolled towel between your elbow and your side. Bend the elbow to 90 degrees and hold the band across your body.",
      ur: "جہاں بینڈ بندھا ہے اس کی طرف پہلو کر کے کھڑے ہوں، تقریباً کہنی کی بلندی پر۔ ایک لپٹا ہوا تولیہ کہنی اور پہلو کے درمیان دبا لیں۔ کہنی 90 درجے پر موڑیں اور بینڈ کو جسم کے سامنے سے پکڑیں۔",
    },
    quickSteps: {
      en: [
        "Stand side-on to the band with a towel tucked at your elbow, elbow bent 90°.",
        "Rotate the forearm outward, away from your stomach.",
        "Return slowly against the band — the slow return matters most.",
      ],
      ur: [
        "بینڈ کی طرف پہلو کر کے کھڑے ہوں، تولیہ کہنی کے نیچے دبا ہو، کہنی نوے ڈگری پر۔",
        "بازو کو پیٹ سے ہٹا کر باہر کی طرف گھمائیں۔",
        "واپسی آہستہ کریں — اصل فائدہ اسی آہستہ واپسی میں ہے۔",
      ],
    },
    steps: {
      en: [
        "Keep the elbow pinned to your side — the towel should not fall.",
        "Set the shoulder blade back and down before you pull.",
        "Rotate the forearm outward, away from your stomach.",
        "Stop when the forearm reaches roughly straight ahead, or your comfortable limit.",
        "Return slowly, resisting the band all the way back.",
      ],
      ur: [
        "کہنی پہلو سے لگی رہے — تولیہ گرنا نہیں چاہیے۔",
        "کھینچنے سے پہلے شانے کی ہڈی پیچھے اور نیچے سیٹ کریں۔",
        "بازو کو باہر کی طرف، پیٹ سے دور گھمائیں۔",
        "جب بازو تقریباً سامنے کی سیدھ میں آ جائے یا آپ کی آرام دہ حد آ جائے تو رکیں۔",
        "آہستہ واپس آئیں، پورے راستے بینڈ کے زور کے خلاف مزاحمت کرتے ہوئے۔",
      ],
    },
    specialInstructions: {
      en: [
        "The towel is not optional — without it the elbow drifts and the big muscles take over.",
        "Slow on the way back. That controlled return is where most of the benefit lies.",
        "The band should be light enough that you never shrug or twist.",
        "You should feel this at the back of the shoulder, not the front.",
      ],
      ur: [
        "تولیہ لازمی ہے — اس کے بغیر کہنی ہٹ جاتی ہے اور بڑے پٹھے کام سنبھال لیتے ہیں۔",
        "واپسی آہستہ کریں۔ زیادہ تر فائدہ اسی قابو والی واپسی میں ہے۔",
        "بینڈ اتنا ہلکا ہو کہ آپ کبھی کندھا نہ اچکائیں اور نہ جسم گھمائیں۔",
        "یہ کندھے کے پیچھے محسوس ہونی چاہیے، سامنے نہیں۔",
      ],
    },
    commonMistakes: {
      en: [
        "The elbow lifting away from the side.",
        "Twisting the whole body instead of rotating the shoulder.",
        "Using a band that is far too strong.",
        "Letting the band snap the arm back.",
      ],
      ur: [
        "کہنی کا پہلو سے ہٹ جانا۔",
        "کندھا گھمانے کے بجائے پورا جسم گھمانا۔",
        "بہت سخت بینڈ استعمال کرنا۔",
        "بینڈ کو جھٹکے سے بازو واپس کھینچنے دینا۔",
      ],
    },
    safetyPrecautions: {
      en: [
        "Check the band for nicks or tears before every session.",
        "Anchor the band securely so it cannot fly free.",
        "Reduce resistance if you cannot keep the elbow at your side.",
      ],
      ur: [
        "ہر بار استعمال سے پہلے بینڈ میں کٹ یا شگاف چیک کریں۔",
        "بینڈ کو مضبوطی سے باندھیں تاکہ وہ چھوٹ نہ جائے۔",
        "اگر کہنی پہلو پر نہ رکھ سکیں تو مزاحمت کم کریں۔",
      ],
    },
    repetitions: "12–15",
    sets: "3",
    holdTime: "2 seconds at the end",
    frequency: "Every other day",
    restBetweenSets: "60 seconds",
    progressions: [],
    regressions: ["wand-assisted-external-rotation"],
    contraindications: {
      en: [
        "Recent subscapularis or capsular repair",
        "Anterior instability where external rotation provokes apprehension",
        "Acute rotator cuff tear awaiting surgical opinion",
      ],
      ur: [
        "حالیہ سب اسکیپولرس یا کیپسول کی مرمت",
        "کندھے کی اگلی عدم استحکام جس میں باہر گھمانے سے خوف یا بے چینی ہو",
        "روٹیٹر کف کا حالیہ پھٹنا جس پر سرجن کی رائے زیرِ التوا ہو",
      ],
    },
    evidence: {
      status: "unreviewed",
      rationale:
        "Resisted external rotation at the side is a mainstay of rotator cuff strengthening programmes. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frontFrames: [
        {
          pose: frontPose(
            { abductR: 8, abductL: 8, elbowR: -55, elbowL: -55 },
            STAND
          ),
          travel: 800,
          hold: 400,
          label: "Start — forearms across the body",
        },
        {
          pose: frontPose(
            { abductR: 8, abductL: 8, elbowR: 80, elbowL: 80 },
            STAND
          ),
          travel: 1000,
          hold: 900,
          label: "Rotate outward — elbows stay pinned",
        },
      ],
      props: [{ kind: "band" }],
      arrows: [{ at: "handR", dir: 270, len: 30, label: "out" }],
    },
  },

  /* ------------------------------------------------------------- EX-S-011 */
  {
    id: "EX-S-011",
    slug: "band-row-retraction",
    name: {
      en: "Resisted Row with Scapular Retraction",
      ur: "ربڑ بینڈ کے ساتھ کھینچنا اور شانے ملانا",
    },
    bodyRegion: "Shoulder",
    joint: ["Scapulothoracic", "Glenohumeral"],
    musclesTargeted: [
      "Middle trapezius",
      "Lower trapezius",
      "Rhomboids",
      "Posterior deltoid",
      "Latissimus dorsi",
    ],
    conditions: [
      "Scapular dyskinesis",
      "Postural neck and shoulder pain",
      "Rotator cuff related shoulder pain",
      "Return to desk work",
    ],
    purpose: {
      en: "Builds real strength in the muscles that hold the shoulder blades back, turning the light scapular setting exercise into something that carries load.",
      ur: "اُن پٹھوں میں حقیقی طاقت پیدا کرتی ہے جو شانے کی ہڈیوں کو پیچھے رکھتے ہیں، اور ہلکی سیٹنگ ورزش کو ایک بوجھ اٹھانے والی ورزش میں بدل دیتی ہے۔",
    },
    difficulty: "Intermediate",
    contraction: ["Concentric", "Eccentric"],
    mode: "Resisted",
    load: "Resistance band",
    position: "Standing",
    equipment: ["Resistance band anchored at chest height"],
    startingPosition: {
      en: "Stand facing the anchor point, holding one end of the band in each hand with your arms extended forward at chest height.",
      ur: "بینڈ جہاں بندھا ہے اس کی طرف رخ کر کے کھڑے ہوں، ہر ہاتھ میں بینڈ کا ایک سرا پکڑیں اور بازو سینے کی بلندی پر آگے پھیلے ہوں۔",
    },
    quickSteps: {
      en: [
        "Face the band with both arms stretched forward at chest height.",
        "Draw the shoulder blades back first, then pull the elbows past your ribs.",
        "Return forward slowly under control.",
      ],
      ur: [
        "بینڈ کے سامنے کھڑے ہوں، دونوں بازو سینے کی اونچائی پر آگے کی طرف۔",
        "پہلے شولڈر بلیڈ پیچھے کھینچیں، پھر کہنیاں پیچھے لے جائیں۔",
        "آرام سے، قابو کے ساتھ واپس آگے آئیں۔",
      ],
    },
    steps: {
      en: [
        "Draw your shoulder blades back and down first, before the arms move.",
        "Pull both elbows straight back, keeping them close to your ribs.",
        "Squeeze the shoulder blades together at the end.",
        "Hold briefly without shrugging.",
        "Return forward slowly, letting the blades glide apart under control.",
      ],
      ur: [
        "بازو حرکت کرنے سے پہلے شانے کی ہڈیاں پیچھے اور نیچے کھینچیں۔",
        "دونوں کہنیاں سیدھی پیچھے کھینچیں، انہیں پسلیوں کے قریب رکھیں۔",
        "آخر میں شانے کی ہڈیوں کو آپس میں دبائیں۔",
        "کندھا اچکائے بغیر تھوڑی دیر رکیں۔",
        "آہستہ آگے واپس آئیں اور ہڈیوں کو قابو کے ساتھ کھلنے دیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Blades move first, arms second. If the arms lead, the exercise is wasted.",
        "Keep the neck long and the shoulders away from the ears.",
        "Do not lean backwards to pull harder.",
        "A mirror or a photo from the side is very useful here.",
      ],
      ur: [
        "پہلے شانے کی ہڈیاں حرکت کریں، پھر بازو۔ اگر بازو پہلے چلیں تو ورزش بے کار ہے۔",
        "گردن لمبی اور کندھے کانوں سے دور رکھیں۔",
        "زیادہ زور لگانے کے لیے پیچھے نہ جھکیں۔",
        "یہاں آئینہ یا پہلو سے لی گئی تصویر بہت مددگار ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Leading with the arms and never moving the shoulder blades.",
        "Shrugging the shoulders during the pull.",
        "Leaning the trunk backwards.",
        "Releasing the band quickly instead of controlling the return.",
      ],
      ur: [
        "بازوؤں سے شروع کرنا اور شانے کی ہڈیاں بالکل حرکت نہ دینا۔",
        "کھینچتے وقت کندھے اچکانا۔",
        "دھڑ کو پیچھے جھکانا۔",
        "واپسی کو قابو کرنے کے بجائے بینڈ کو جلدی چھوڑ دینا۔",
      ],
    },
    safetyPrecautions: {
      en: [
        "Check the band and the anchor before each set.",
        "Stop if you feel pinching between the shoulder blades rather than muscular effort.",
      ],
      ur: [
        "ہر سیٹ سے پہلے بینڈ اور اس کے بندھن کو چیک کریں۔",
        "اگر شانوں کے درمیان پٹھوں کی محنت کے بجائے چبھن محسوس ہو تو رک جائیں۔",
      ],
    },
    repetitions: "12",
    sets: "3",
    holdTime: "2 seconds",
    frequency: "Every other day",
    restBetweenSets: "60 seconds",
    progressions: [],
    regressions: ["scapular-setting"],
    contraindications: {
      en: [
        "Acute scapular or clavicular fracture",
        "Recent thoracic or shoulder surgery with movement restrictions",
      ],
      ur: [
        "شانے یا ہنسلی کی ہڈی کا حالیہ ٹوٹنا",
        "چھاتی یا کندھے کا حالیہ آپریشن جس میں حرکت کی پابندی ہو",
      ],
    },
    evidence: {
      status: "unreviewed",
      rationale:
        "Rowing patterns with deliberate scapular retraction are standard for periscapular strengthening. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frontFrames: [
        {
          pose: frontPose(
            { abductR: 16, abductL: 16, elbowR: -12, elbowL: -12, scapulaR: -7, scapulaL: -7 },
            STAND
          ),
          travel: 800,
          hold: 400,
          label: "Start — arms forward, blades apart",
        },
        {
          pose: frontPose(
            { abductR: 22, abductL: 22, elbowR: -78, elbowL: -78, scapulaR: 8, scapulaL: 8 },
            STAND
          ),
          travel: 1000,
          hold: 900,
          label: "Pull back, squeeze the blades",
        },
      ],
      props: [{ kind: "band" }],
      arrows: [{ at: "shoulderR", dir: 90, len: 26, label: "squeeze" }],
    },
  },

  /* ------------------------------------------------------------- EX-S-012 */
  {
    id: "EX-S-012",
    slug: "cross-body-stretch",
    name: {
      en: "Cross-Body Posterior Shoulder Stretch",
      ur: "بازو کو سینے کے آر پار کھینچنا",
    },
    bodyRegion: "Shoulder",
    joint: ["Glenohumeral"],
    musclesTargeted: [
      "Posterior deltoid",
      "Infraspinatus",
      "Posterior capsule",
    ],
    conditions: [
      "Posterior shoulder tightness",
      "Subacromial pain syndrome",
      "Overhead athletes with reduced internal rotation",
    ],
    purpose: {
      en: "Loosens the back of the shoulder. When that tissue is tight it pushes the joint forward and upward, which is a common hidden cause of shoulder pinching.",
      ur: "کندھے کے پچھلے حصے کو ڈھیلا کرتی ہے۔ جب یہ حصہ سخت ہو تو جوڑ کو آگے اور اوپر دھکیلتا ہے، جو کندھے میں چبھن کی ایک عام پوشیدہ وجہ ہے۔",
    },
    difficulty: "Beginner",
    contraction: ["Passive"],
    mode: "Passive",
    load: "No load",
    position: "Standing",
    equipment: [],
    startingPosition: {
      en: "Stand or sit tall. Bring the affected arm across the front of your chest at about shoulder height.",
      ur: "سیدھے کھڑے ہوں یا بیٹھیں۔ متاثرہ بازو کو سینے کے سامنے سے تقریباً کندھے کی بلندی پر لے آئیں۔",
    },
    quickSteps: {
      en: [
        "Bring the sore arm across your chest at shoulder height.",
        "Hold just above the elbow with the other hand and draw it further across.",
        "Hold 30 seconds without shrugging.",
      ],
      ur: [
        "تکلیف والا بازو سینے کے سامنے سے دوسری طرف لے جائیں، کندھے کی اونچائی پر۔",
        "دوسرے ہاتھ سے کہنی کے تھوڑا اوپر سے پکڑ کر مزید کھینچیں۔",
        "کندھا اوپر نہ اٹھے۔ تیس سیکنڈ رکیں۔",
      ],
    },
    steps: {
      en: [
        "Use your other hand to hold just above the elbow — not on the elbow joint itself.",
        "Gently draw the arm further across your body.",
        "Keep the shoulder down; do not let it lift towards the ear.",
        "Hold where you feel a comfortable stretch at the back of the shoulder.",
        "Release slowly and repeat.",
      ],
      ur: [
        "دوسرے ہاتھ سے کہنی کے ذرا اوپر سے پکڑیں — کہنی کے جوڑ پر نہیں۔",
        "بازو کو نرمی سے جسم کے مزید آر پار کھینچیں۔",
        "کندھا نیچے رکھیں؛ اسے کان کی طرف اٹھنے نہ دیں۔",
        "جہاں کندھے کے پیچھے آرام دہ کھنچاؤ محسوس ہو وہاں رکیں۔",
        "آہستہ چھوڑیں اور دہرائیں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Hold above the elbow, never pull on the elbow joint itself.",
        "The stretch belongs at the back of the shoulder. Pain at the front means stop.",
        "Keep breathing — do not hold your breath through the stretch.",
        "Best done when the muscles are warm, such as after a shower.",
      ],
      ur: [
        "کہنی کے اوپر سے پکڑیں، کہنی کے جوڑ کو ہرگز نہ کھینچیں۔",
        "کھنچاؤ کندھے کے پیچھے ہونا چاہیے۔ سامنے درد ہو تو رک جائیں۔",
        "سانس لیتے رہیں — کھنچاؤ کے دوران سانس نہ روکیں۔",
        "پٹھے گرم ہوں تو بہتر ہے، جیسے نہانے کے بعد۔",
      ],
    },
    commonMistakes: {
      en: [
        "Pulling on the elbow joint instead of the upper arm.",
        "Letting the shoulder shrug up.",
        "Rotating the trunk to fake more range.",
        "Bouncing rather than holding.",
      ],
      ur: [
        "بازو کے بجائے کہنی کے جوڑ کو کھینچنا۔",
        "کندھے کو اچکنے دینا۔",
        "زیادہ کھنچاؤ دکھانے کے لیے دھڑ گھمانا۔",
        "رکنے کے بجائے جھٹکے دینا۔",
      ],
    },
    safetyPrecautions: {
      en: [
        "Stop if you feel pinching at the front of the shoulder.",
        "Never stretch into sharp pain.",
      ],
      ur: [
        "اگر کندھے کے سامنے چبھن محسوس ہو تو رک جائیں۔",
        "تیز درد تک کبھی نہ کھینچیں۔",
      ],
    },
    repetitions: "3–4",
    sets: "1",
    holdTime: "30 seconds",
    frequency: "Twice daily",
    restBetweenSets: "15 seconds",
    progressions: [],
    regressions: [],
    contraindications: {
      en: [
        "Acute anterior shoulder instability",
        "Recent shoulder dislocation",
        "Post-operative restriction on horizontal adduction",
      ],
      ur: [
        "کندھے کی اگلی حالیہ عدم استحکام",
        "کندھے کا حالیہ اترنا",
        "آپریشن کے بعد بازو کو جسم کے آر پار لانے پر پابندی",
      ],
    },
    evidence: {
      status: "unreviewed",
      rationale:
        "Cross-body stretching is commonly used to address posterior shoulder tightness, particularly in overhead athletes. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frontFrames: [
        {
          pose: frontPose(
            { abductR: 80, elbowR: -48, abductL: 34, elbowL: -70 },
            STAND
          ),
          travel: 800,
          hold: 400,
          label: "Bring the arm across the chest",
        },
        {
          pose: frontPose(
            { abductR: 84, elbowR: -74, abductL: 40, elbowL: -84 },
            STAND
          ),
          travel: 900,
          hold: 1400,
          label: "Draw it further across — hold 30s",
        },
      ],
      arrows: [{ at: "elbowR", dir: 90, len: 28, label: "pull" }],
    },
  },

  /* ------------------------------------------------------------- EX-S-013 */
  {
    id: "EX-S-013",
    slug: "doorway-pec-stretch",
    name: {
      en: "Doorway Pectoral Stretch",
      ur: "دروازے میں سینے کے پٹھوں کا کھنچاؤ",
    },
    bodyRegion: "Shoulder",
    joint: ["Glenohumeral", "Scapulothoracic"],
    musclesTargeted: [
      "Pectoralis major",
      "Pectoralis minor",
      "Anterior deltoid",
    ],
    conditions: [
      "Rounded shoulder posture",
      "Postural neck and shoulder pain",
      "Reduced shoulder extension",
      "Desk-related upper limb discomfort",
    ],
    purpose: {
      en: "Opens the front of the chest. Tight chest muscles pull the shoulders forward, which narrows the space the rotator cuff tendons pass through.",
      ur: "سینے کے اگلے حصے کو کھولتی ہے۔ سخت سینے کے پٹھے کندھوں کو آگے کھینچتے ہیں، جس سے وہ جگہ تنگ ہو جاتی ہے جہاں سے روٹیٹر کف کے پٹھے گزرتے ہیں۔",
    },
    difficulty: "Beginner",
    contraction: ["Passive"],
    mode: "Passive",
    load: "No load",
    position: "Standing",
    equipment: ["A doorway"],
    startingPosition: {
      en: "Stand in a doorway. Place your forearms on the door frame with your elbows at about shoulder height, bent to 90 degrees.",
      ur: "دروازے میں کھڑے ہوں۔ اپنے بازو دروازے کی چوکھٹ پر رکھیں، کہنیاں تقریباً کندھے کی بلندی پر اور 90 درجے پر مڑی ہوئی۔",
    },
    quickSteps: {
      en: [
        "Put your forearms on a door frame, elbows at about shoulder height.",
        "Step forward slowly until you feel a stretch across your chest.",
        "Keep your ribs down. Hold 30 seconds.",
      ],
      ur: [
        "دروازے میں کھڑے ہو کر دونوں بازو چوکھٹ پر رکھیں، کہنیاں کندھے کی اونچائی پر۔",
        "آہستہ سے ایک قدم آگے بڑھائیں یہاں تک کہ سینے میں کھنچاؤ محسوس ہو۔",
        "کمر کو پیچھے مت موڑیں۔ تیس سیکنڈ رکیں۔",
      ],
    },
    steps: {
      en: [
        "Set your shoulder blades gently back and down.",
        "Step forward slowly with one foot.",
        "Let your chest move through the doorway until you feel a stretch across the front.",
        "Keep your ribs down and your lower back neutral.",
        "Hold, then step back to release.",
      ],
      ur: [
        "شانے کی ہڈیاں نرمی سے پیچھے اور نیچے سیٹ کریں۔",
        "ایک پاؤں سے آہستہ آگے قدم بڑھائیں۔",
        "اپنے سینے کو دروازے سے آگے جانے دیں جب تک سامنے کھنچاؤ محسوس نہ ہو۔",
        "پسلیاں نیچے اور کمر معمول کی حالت میں رکھیں۔",
        "رکیں، پھر پیچھے قدم لے کر کھنچاؤ ختم کریں۔",
      ],
    },
    specialInstructions: {
      en: [
        "Changing the elbow height changes which part of the chest is stretched — try low, middle and high.",
        "Do not let your lower back arch to make the stretch feel bigger.",
        "The stretch is across the chest and front of the shoulder, never in the shoulder joint itself.",
        "Excellent to do after long periods at a desk or on a phone.",
      ],
      ur: [
        "کہنی کی بلندی بدلنے سے سینے کا مختلف حصہ کھنچتا ہے — نیچے، درمیان اور اوپر تینوں آزمائیں۔",
        "کھنچاؤ بڑا محسوس کرنے کے لیے کمر کو محراب کی طرح نہ موڑیں۔",
        "کھنچاؤ سینے اور کندھے کے اگلے حصے میں ہو، خود کندھے کے جوڑ میں ہرگز نہیں۔",
        "دیر تک میز پر یا موبائل پر کام کے بعد بہت مفید ہے۔",
      ],
    },
    commonMistakes: {
      en: [
        "Arching the lower back instead of opening the chest.",
        "Pushing too far and straining the front of the shoulder.",
        "Letting the shoulders shrug up towards the ears.",
        "Holding the breath.",
      ],
      ur: [
        "سینہ کھولنے کے بجائے کمر کو موڑنا۔",
        "بہت آگے بڑھ کر کندھے کے اگلے حصے پر زور ڈالنا۔",
        "کندھوں کو کانوں کی طرف اچکنے دینا۔",
        "سانس روک لینا۔",
      ],
    },
    safetyPrecautions: {
      en: [
        "Stop immediately if you feel pinching or instability at the front of the shoulder.",
        "Go gently if you have a history of shoulder dislocation.",
      ],
      ur: [
        "اگر کندھے کے سامنے چبھن یا ڈھیلا پن محسوس ہو تو فوراً رک جائیں۔",
        "اگر پہلے کبھی کندھا اترا ہو تو بہت احتیاط سے کریں۔",
      ],
    },
    repetitions: "3",
    sets: "1",
    holdTime: "30 seconds",
    frequency: "Twice daily",
    restBetweenSets: "15 seconds",
    progressions: [],
    regressions: [],
    contraindications: {
      en: [
        "Anterior shoulder instability",
        "Recent anterior stabilisation surgery",
        "Acute pectoral muscle strain",
      ],
      ur: [
        "کندھے کی اگلی عدم استحکام",
        "کندھے کے اگلے حصے کا حالیہ آپریشن",
        "سینے کے پٹھے کا حالیہ کھنچاؤ یا چوٹ",
      ],
    },
    evidence: {
      status: "unreviewed",
      rationale:
        "Pectoral stretching is a routine component of postural and subacromial pain management programmes. Citations to be attached at clinical review.",
    },
    figure: {
      view: "front",
      frontFrames: [
        {
          pose: frontPose(
            { abductR: 78, abductL: 78, elbowR: 84, elbowL: 84, scapulaR: 0, scapulaL: 0 },
            STAND
          ),
          travel: 800,
          hold: 400,
          label: "Forearms on the door frame",
        },
        {
          pose: frontPose(
            { abductR: 88, abductL: 88, elbowR: 92, elbowL: 92, scapulaR: 9, scapulaL: 9 },
            STAND
          ),
          travel: 1000,
          hold: 1400,
          label: "Step through — hold 30s",
        },
      ],
      props: [{ kind: "doorway" }],
      arrows: [{ at: "pelvis", dir: 0, len: 0 }],
    },
  },
];
