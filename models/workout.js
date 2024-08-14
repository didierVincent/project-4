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
    addedFatigue: { type: fatigueSchema, default: () => ({}) },
    isDone: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

// workoutSchema.virtual("orderTotal").get(function () {
//   return this.lineItems.reduce((total, item) => total + item.extPrice, 0);
// });

// workoutSchema.virtual("orderQty").get(function () {
//   return this.lineItems.reduce((total, item) => total + item.qty, 0);
// });

// workoutSchema.virtual("orderId").get(function () {
//   return this.id.slice(-6).toUpperCase();
// });

workoutSchema.statics.getWorkout = function (userId) {
  return this.findOneAndUpdate(
    // query object
    { user: userId, isDone: false },
    // update doc - provides values when inserting
    { user: userId },
    // upsert option
    { upsert: true, new: true }
  );
};

// Instance method for adding an item to a cart (unpaid order)
workoutSchema.methods.addExerciseToWorkout = async function (exerciseId) {
  // 'this' keyword is bound to the cart (order doc)
  const workout = this;
  // Check if the item already exists in the workout
  const existingExerciseContainer = workout.exerciseList.find((exerContainer) =>
    exerContainer.exercise._id.equals(exerciseId)
  );
  const existingExercise = existingExerciseContainer.exercise;

  const User = mongoose.model("User");
  const user = await User.findById(workout.user);

  if (existingExercise) {
    // It already exists, so increase the qty
    console.log("this is user --> ", user);
    existingExerciseContainer.qty += 1;
    workout.addedFatigue.torsoFatigue += existingExercise.torsoFatigue;
    workout.addedFatigue.armsFatigue += existingExercise.armsFatigue;
    workout.addedFatigue.legsFatigue += existingExercise.legsFatigue;

    // user.fatigue.torsoFatigue += exercise.torsoFatigue;
    // user.fatigue.armsFatigue += exercise.armsFatigue;
    // user.fatigue.legsFatigue += exercise.legsFatigue;
  } else {
    // Get the item from the "catalog"
    // Note how the mongoose.model method behaves as a getter when passed one arg vs. two

    // workout.addedFatigue.torsoFatigue += exercise.torsoFatigue;
    // workout.addedFatigue.armsFatigue += exercise.armsFatigue;
    // workout.addedFatigue.legsFatigue += exercise.legsFatigue;

    // user.fatigue.torsoFatigue += exercise.torsoFatigue;
    // user.fatigue.armsFatigue += exercise.armsFatigue;
    // user.fatigue.legsFatigue += exercise.legsFatigue;

    // The qty of the new exercise object being pushed in defaults to 1
    const Exercise = mongoose.model("Exercise");
    const exercise = await Exercise.findById(exerciseId);
    workout.exerciseList.push({ exercise });
  }
  // return the save() method's promise
  // user.save();
  return workout.save();
};

workoutSchema.methods.deleteExercise = function (exerciseId) {
  const workout = this;
  const exercise = workout.exerciseList.find((e) =>
    e.exercise._id.equals(exerciseId)
  );
  exercise.deleteOne();
  return workout.save();
};

// // Instance method to set an item's qty in the cart
// workoutSchema.methods.setItemQty = function (itemId, newQty) {
//   //   // this keyword is bound to the cart (order doc)
//   const workout = this;
//   const exercise = workout.exerciseList.find((e) =>
//     e.exercise._id.equals(exerciseId)
//   );
//   if (exercise && newQty <= 0) {
//     // Calling deleteOne, removes the exercise subdoc from the cart.exercises array
//     exercise.deleteOne();
//   } else if (exercise) {
//     // Set the new qty - positive value is assured thanks to prev if
//     exercise.qty = newQty;
//   }
//   // return the save() method's promise
//   return cart.save();
// };
//   // Find the line item in the cart for the menu item
//   const lineItem = cart.lineItems.find((lineItem) =>
//     lineItem.item._id.equals(itemId)
//   );
//   if (lineItem && newQty <= 0) {
//     // Calling deleteOne, removes the lineItem subdoc from the cart.lineItems array
//     lineItem.deleteOne();
//   } else if (lineItem) {
//     // Set the new qty - positive value is assured thanks to prev if
//     lineItem.qty = newQty;
//   }
//   // return the save() method's promise
//   return cart.save();
// };

module.exports = mongoose.model("Workout", workoutSchema);
