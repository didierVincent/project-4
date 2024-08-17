const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const exerciseSchema = require("./exerciseSchema");
const userSchema = require("./user");
const user = require("./user");

const fatigueSchema = new Schema({
  torsoFatigue: { type: Number, default: 0 },
  armsFatigue: { type: Number, default: 0 },
  legsFatigue: { type: Number, default: 0 },
});

const exerciseContainerSchema = new Schema(
  {
    qty: { type: Number, default: 1 },
    exercise: exerciseSchema,
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

const workoutSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    exerciseList: [exerciseContainerSchema],
    initFatigue: { type: fatigueSchema, default: () => ({}) },
    addedFatigue: { type: fatigueSchema, default: () => ({}) },
    isDone: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

workoutSchema.statics.getWorkout = async function (userId) {
  const workout = this;

  const User = mongoose.model("User");
  const user = await User.findById(userId);

  const existingWorkout = await workout.findOne({
    user: userId,
    isDone: false,
  });

  if (existingWorkout) {
    // Return the existing workout without any updates, if no doc, create with user.fatigue data
    return existingWorkout;
  } else {
    return workout.findOneAndUpdate(
      // query object
      { user: userId, isDone: false },
      // update doc - provides values when inserting
      { user: userId, initFatigue: user.fatigue },
      // upsert option
      { upsert: true, new: true }
    );
  }
};

// Instance method for adding an exercise to a workout (unsaved workout)
workoutSchema.methods.addExerciseToWorkout = async function (exerciseId) {
  // 'this' keyword is bound to the workout doc
  const workout = this;
  // Check if the exercise already exists in the workout
  const existingExerciseContainer = workout.exerciseList.find((e) =>
    e.exercise._id.equals(exerciseId)
  );

  if (existingExerciseContainer) {
    // It already exists, so increase the qty and update fatigue +1
    existingExerciseContainer.qty += 1;
    const existingExercise = existingExerciseContainer.exercise;
    workout.addedFatigue.torsoFatigue += existingExercise.torsoFatigue;
    workout.addedFatigue.armsFatigue += existingExercise.armsFatigue;
    workout.addedFatigue.legsFatigue += existingExercise.legsFatigue;
  } else {
    // Get the exercise from the "catalog" and update fatigue +1
    const Exercise = mongoose.model("Exercise");
    const exercise = await Exercise.findById(exerciseId);

    workout.addedFatigue.torsoFatigue += exercise.torsoFatigue;
    workout.addedFatigue.armsFatigue += exercise.armsFatigue;
    workout.addedFatigue.legsFatigue += exercise.legsFatigue;

    workout.exerciseList.push({ exercise });
  }
  return await workout.save();
};

workoutSchema.methods.deleteExercise = async function (exerciseId) {
  const workout = this;
  const existingExerciseContainer = workout.exerciseList.find((e) =>
    e.exercise._id.equals(exerciseId)
  );
  // exercises are added to workouts but wrapped inside an exercise container
  const exerciseData = existingExerciseContainer.exercise;

  workout.addedFatigue.torsoFatigue -=
    existingExerciseContainer.qty * exerciseData.torsoFatigue;
  workout.addedFatigue.armsFatigue -=
    existingExerciseContainer.qty * exerciseData.armsFatigue;
  workout.addedFatigue.legsFatigue -=
    existingExerciseContainer.qty * exerciseData.legsFatigue;
  await existingExerciseContainer.deleteOne();
  return await workout.save();
};

// Instance method for inc/dec buttons
workoutSchema.methods.setExerciseQty = async function (exerciseId, newQty) {
  const workout = this;
  const existingExerciseContainer = workout.exerciseList.find((e) =>
    e._id.equals(exerciseId)
  );

  const exerciseData = existingExerciseContainer.exercise;

  if (existingExerciseContainer && newQty <= 0) {
    // Calling deleteOne, removes the exercise subdoc from the order.exerciseList array
    workout.addedFatigue.torsoFatigue -= exerciseData.torsoFatigue;
    workout.addedFatigue.armsFatigue -= exerciseData.armsFatigue;
    workout.addedFatigue.legsFatigue -= exerciseData.legsFatigue;
    await existingExerciseContainer.deleteOne();
    await workout.save();
  } else if (existingExerciseContainer) {
    // Set the new qty and fatigue data
    if (existingExerciseContainer.qty < newQty) {
      workout.addedFatigue.torsoFatigue += exerciseData.torsoFatigue;
      workout.addedFatigue.armsFatigue += exerciseData.armsFatigue;
      workout.addedFatigue.legsFatigue += exerciseData.legsFatigue;
    } else if (existingExerciseContainer) {
      workout.addedFatigue.torsoFatigue -= exerciseData.torsoFatigue;
      workout.addedFatigue.armsFatigue -= exerciseData.armsFatigue;
      workout.addedFatigue.legsFatigue -= exerciseData.legsFatigue;
    }
    existingExerciseContainer.qty = newQty;
    await workout.save();
  }
};

module.exports = mongoose.model("Workout", workoutSchema);
