/* =========================================================================
   Exercise library data
   -------------------------------------------------------------------------
   This is the content for the Exercises page. To ADD a new exercise, copy one
   block below (from "{" to "}," ) and change the text. To EDIT an exercise,
   just change the words. Keep the punctuation (quotes, commas) as-is.

   Fields:
     title    – name of the exercise
     area     – body area; must match one of the category buttons:
                "Neck", "Shoulder", "Back", "Hip", "Knee", "Ankle & Foot", "Core"
     level    – "Beginner", "Intermediate" or "Advanced"
     duration – rough time or reps, e.g. "3 sets of 10"
     summary  – one short sentence shown on the card
     steps    – the how-to, one instruction per line
     caution  – a safety note (shown in the amber box); use "" for none
   ========================================================================= */

const EXERCISES = [
  {
    title: "Chin Tucks",
    area: "Neck",
    level: "Beginner",
    duration: "3 sets of 10",
    summary: "Gently strengthens the deep neck muscles and eases 'tech neck' posture.",
    steps: [
      "Sit or stand tall with your shoulders relaxed and eyes looking straight ahead.",
      "Without tilting your head, gently draw your chin straight back, making a 'double chin'.",
      "Hold for 3–5 seconds — you should feel a light stretch at the base of the skull.",
      "Slowly release back to the start position.",
    ],
    caution: "Move slowly and stop if you feel dizziness or sharp pain.",
  },
  {
    title: "Neck Side Stretch",
    area: "Neck",
    level: "Beginner",
    duration: "Hold 20–30s each side",
    summary: "Releases tension along the side of the neck and upper shoulder.",
    steps: [
      "Sit tall and let your right arm relax down by your side.",
      "Gently tilt your left ear toward your left shoulder until you feel a comfortable stretch.",
      "For a little more, rest your left hand lightly on your head — do not pull hard.",
      "Hold, breathe, then slowly return and repeat on the other side.",
    ],
    caution: "Keep the stretch gentle — never force the movement.",
  },
  {
    title: "Scapular Squeezes",
    area: "Shoulder",
    level: "Beginner",
    duration: "3 sets of 12",
    summary: "Activates the muscles between the shoulder blades to improve posture.",
    steps: [
      "Sit or stand tall with your arms relaxed at your sides.",
      "Gently squeeze your shoulder blades together and slightly down, as if holding a pencil between them.",
      "Hold for 5 seconds without shrugging your shoulders up toward your ears.",
      "Relax slowly and repeat.",
    ],
    caution: "Avoid arching your lower back to compensate.",
  },
  {
    title: "Pendulum Swings",
    area: "Shoulder",
    level: "Beginner",
    duration: "1–2 minutes each direction",
    summary: "A gentle, weightless way to mobilise a stiff or recovering shoulder.",
    steps: [
      "Lean forward and support yourself with your good hand on a table or chair.",
      "Let the affected arm hang down loosely and relaxed.",
      "Using your body — not your arm muscles — gently sway so the arm swings in small circles.",
      "Swing clockwise, then anticlockwise, then gently forward and back.",
    ],
    caution: "Keep the arm relaxed; let momentum move it, not the shoulder muscles.",
  },
  {
    title: "Wall Angels",
    area: "Shoulder",
    level: "Intermediate",
    duration: "3 sets of 10",
    summary: "Improves shoulder mobility and upper-back posture against a wall.",
    steps: [
      "Stand with your back, head and hips lightly touching a wall, feet a few inches out.",
      "Raise your arms into a goalpost 'W' shape with the backs of your hands on the wall.",
      "Slowly slide your arms up into a 'Y', keeping hands and elbows in contact with the wall.",
      "Slide back down to the 'W' with control.",
    ],
    caution: "Only go as high as you can keep contact — don't let the lower back arch off the wall.",
  },
  {
    title: "Cat–Cow Stretch",
    area: "Back",
    level: "Beginner",
    duration: "8–10 slow cycles",
    summary: "Mobilises the whole spine and relieves general back stiffness.",
    steps: [
      "Start on your hands and knees with wrists under shoulders and knees under hips.",
      "Inhale and gently drop your belly, lifting your chest and tailbone (the 'cow').",
      "Exhale and round your spine toward the ceiling, tucking your chin (the 'cat').",
      "Flow slowly between the two with your breath.",
    ],
    caution: "Move within a comfortable range; avoid forcing the end positions.",
  },
  {
    title: "Pelvic Tilts",
    area: "Back",
    level: "Beginner",
    duration: "3 sets of 10",
    summary: "Gently activates core and lower-back muscles to ease low-back tension.",
    steps: [
      "Lie on your back with knees bent and feet flat on the floor.",
      "Flatten your lower back into the floor by gently tightening your stomach.",
      "Hold for 5 seconds while breathing normally.",
      "Relax back to the start position.",
    ],
    caution: "Keep the movement small and pain-free.",
  },
  {
    title: "Bird Dog",
    area: "Back",
    level: "Intermediate",
    duration: "3 sets of 8 each side",
    summary: "Builds core and spinal stability with a balanced reaching pattern.",
    steps: [
      "Begin on hands and knees with a flat, neutral back.",
      "Slowly extend your right arm forward and your left leg straight back.",
      "Keep your hips level and hold for 3–5 seconds without twisting.",
      "Return with control and repeat on the opposite side.",
    ],
    caution: "Stop if you feel any pinching in the lower back; keep the spine still.",
  },
  {
    title: "Glute Bridge",
    area: "Hip",
    level: "Beginner",
    duration: "3 sets of 12",
    summary: "Strengthens the glutes and supports the lower back and hips.",
    steps: [
      "Lie on your back, knees bent, feet flat and hip-width apart.",
      "Squeeze your glutes and lift your hips until knees, hips and shoulders form a straight line.",
      "Hold for 3 seconds at the top.",
      "Lower slowly to the floor.",
    ],
    caution: "Drive through your heels and avoid arching the lower back at the top.",
  },
  {
    title: "Clamshells",
    area: "Hip",
    level: "Beginner",
    duration: "3 sets of 15 each side",
    summary: "Targets the outer hip muscles that stabilise the pelvis and knees.",
    steps: [
      "Lie on your side with knees bent about 45° and hips stacked.",
      "Keep your feet together and lift your top knee upward like a clam opening.",
      "Do not let your top hip roll backward.",
      "Lower slowly and repeat, then switch sides.",
    ],
    caution: "Keep the movement controlled; you should feel it in the outer hip, not the back.",
  },
  {
    title: "Standing Hip Flexor Stretch",
    area: "Hip",
    level: "Beginner",
    duration: "Hold 30s each side",
    summary: "Lengthens tight hip flexors from prolonged sitting.",
    steps: [
      "Step into a short lunge with your right foot forward, back leg straight.",
      "Tuck your pelvis under and gently push your hips forward.",
      "You should feel a stretch across the front of the back hip.",
      "Hold, then switch sides.",
    ],
    caution: "Keep your torso upright and avoid over-arching the lower back.",
  },
  {
    title: "Quad Sets",
    area: "Knee",
    level: "Beginner",
    duration: "3 sets of 10",
    summary: "A gentle first step to reactivate the thigh muscle after knee injury.",
    steps: [
      "Sit with your leg straight out in front of you.",
      "Tighten the thigh muscle to press the back of the knee down toward the floor.",
      "Hold for 5 seconds — the kneecap should draw slightly upward.",
      "Relax and repeat.",
    ],
    caution: "This should be pain-free; reduce the effort if you feel discomfort.",
  },
  {
    title: "Straight Leg Raise",
    area: "Knee",
    level: "Beginner",
    duration: "3 sets of 10 each leg",
    summary: "Strengthens the thigh without bending a sensitive knee.",
    steps: [
      "Lie on your back with one knee bent and the other leg straight.",
      "Tighten the thigh of the straight leg and lift it to the height of the bent knee.",
      "Hold for 2–3 seconds keeping the knee straight.",
      "Lower slowly with control.",
    ],
    caution: "Keep your lower back flat; don't let it arch as you lift.",
  },
  {
    title: "Wall Sit",
    area: "Knee",
    level: "Intermediate",
    duration: "3 holds of 20–40s",
    summary: "Builds endurance in the thighs and supports the knee joint.",
    steps: [
      "Stand with your back against a wall, feet about two steps forward.",
      "Slide down until your knees are bent toward 90° (go only as low as is comfortable).",
      "Keep knees behind your toes and back flat against the wall.",
      "Hold, then slide back up.",
    ],
    caution: "Don't let the knees collapse inward; ease off if pain increases.",
  },
  {
    title: "Ankle Alphabet",
    area: "Ankle & Foot",
    level: "Beginner",
    duration: "2 rounds each foot",
    summary: "Restores ankle mobility in every direction after a sprain.",
    steps: [
      "Sit with your foot lifted off the floor.",
      "Using your big toe as a 'pencil', slowly draw each letter of the alphabet in the air.",
      "Move from the ankle only, keeping your leg still.",
      "Repeat with the other foot.",
    ],
    caution: "Keep within a pain-free range, especially early after an injury.",
  },
  {
    title: "Calf Raises",
    area: "Ankle & Foot",
    level: "Beginner",
    duration: "3 sets of 15",
    summary: "Strengthens the calves and supports the ankle and Achilles.",
    steps: [
      "Stand tall, holding a wall or chair for balance.",
      "Slowly rise onto the balls of your feet, lifting your heels.",
      "Hold for a second at the top.",
      "Lower slowly and with control.",
    ],
    caution: "Rise and lower slowly — avoid bouncing at the bottom.",
  },
  {
    title: "Towel Toe Curls",
    area: "Ankle & Foot",
    level: "Beginner",
    duration: "3 sets of 10",
    summary: "Wakes up the small foot muscles that support the arch.",
    steps: [
      "Sit with a small towel flat on the floor in front of you.",
      "Place your foot on the near edge of the towel.",
      "Scrunch your toes to pull the towel toward you.",
      "Reset and repeat, then switch feet.",
    ],
    caution: "Stop if you get foot cramps; shake out and rest before continuing.",
  },
  {
    title: "Dead Bug",
    area: "Core",
    level: "Intermediate",
    duration: "3 sets of 8 each side",
    summary: "Trains deep core control while protecting the lower back.",
    steps: [
      "Lie on your back with arms pointing to the ceiling and knees bent at 90°.",
      "Slowly lower your right arm overhead and straighten your left leg toward the floor.",
      "Keep your lower back gently pressed down the whole time.",
      "Return and repeat on the other side.",
    ],
    caution: "Only lower as far as you can keep your back flat against the floor.",
  },
  {
    title: "Modified Plank",
    area: "Core",
    level: "Beginner",
    duration: "3 holds of 15–30s",
    summary: "A knee-supported plank to safely build core and shoulder stability.",
    steps: [
      "Start on your forearms and knees, elbows under your shoulders.",
      "Form a straight line from your head to your knees by tightening your core.",
      "Keep your hips level — don't let them sag or pike up.",
      "Hold while breathing steadily, then rest.",
    ],
    caution: "Come down early if your lower back starts to sag.",
  },
  {
    title: "Side-Lying Leg Lift",
    area: "Core",
    level: "Beginner",
    duration: "3 sets of 12 each side",
    summary: "Strengthens the side of the trunk and hip together.",
    steps: [
      "Lie on your side with your body in a straight line and head supported.",
      "Keeping your top leg straight, lift it upward without rolling your hips.",
      "Pause briefly at the top.",
      "Lower slowly and repeat, then switch sides.",
    ],
    caution: "Keep the movement controlled and your hips stacked.",
  },
];

// Make the data available to the page script.
window.EXERCISES = EXERCISES;
