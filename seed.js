require("dotenv").config();
require("./config/database");

const Muscle = require("./models/muscle");
const Exercise = require("./models/exercise");

(async function () {
  await Muscle.deleteMany({});
  const muscles = await Muscle.create([
    { name: "Torso", sortOrder: 10 },
    { name: "Arms", sortOrder: 20 },
    { name: "Legs", sortOrder: 30 },
  ]);
  const [torso, arms, legs] = muscles;

  await Exercise.deleteMany({});
  const exercises = await Exercise.create([
    {
      name: "Lateral Raise",
      muscle: [torso],
      torsoFatigue: 3,
      armsFatigue: 0,
      legsFatigue: 0,
    },
    {
      name: "Pull Ups",
      muscle: [torso, arms],
      torsoFatigue: 3,
      armsFatigue: 2,
      legsFatigue: 0,
    },
    {
      name: "Deadlift",
      muscle: [torso, arms, legs],
      torsoFatigue: 2,
      armsFatigue: 1,
      legsFatigue: 4,
    },
    {
      name: "Bicep Curl",
      muscle: [arms],
      torsoFatigue: 0,
      armsFatigue: 3,
      legsFatigue: 0,
    },
    {
      name: "Squat",
      muscle: [legs],
      torsoFatigue: 0,
      armsFatigue: 0,
      legsFatigue: 4,
    },
    {
      name: "Kettlebell Swings",
      muscle: [arms, legs],
      torsoFatigue: 0,
      armsFatigue: 1,
      legsFatigue: 2,
    },
  ]);

  console.log(exercises);

  process.exit();
})();
