const Workout = require("../../models/workout");
const User = require("../../models/user");

module.exports = {
  show,
  addToWorkout,
  removeExerciseInWorkout,
  changeExerciseQty,
  saveWorkout,
};

// Find/Create workout for user
async function show(req, res) {
  const userId = req.user._id;
  const workout = await Workout.getWorkout(userId);
  res.json(workout);
}

// Add an exercise to the workout
async function addToWorkout(req, res) {
  const userId = req.user._id;
  const workout = await Workout.getWorkout(userId);
  const exerciseId = req.params.id;
  await workout.addExerciseToWorkout(exerciseId);
  res.json(workout);
}

async function removeExerciseInWorkout(req, res) {
  const workout = await Workout.getWorkout(req.user._id);
  await workout.deleteExercise(req.body.exerciseId);
  res.json(workout);
}
// // Updates an item's qty in the cart
async function changeExerciseQty(req, res) {
  const userId = req.user._id;
  const workout = await Workout.getWorkout(userId);
  await workout.setExerciseQty(req.body.exerciseId, req.body.newQty);
  res.json(workout);
}

// // Update the cart's isPaid property to true
async function saveWorkout(req, res) {
  const userId = req.user._id;
  const workout = await Workout.getWorkout(userId);
  workout.isDone = true;
  await workout.save();
  res.json(workout);
}
