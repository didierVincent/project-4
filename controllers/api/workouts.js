const Workout = require("../../models/workout");
// const Item = require('../../models/item');

module.exports = {
  show,
  addToWorkout,
  removeExerciseInWorkout,
  //   setItemQtyInCart,
  //   checkout,
};

// A cart is the unpaid order for a user
async function show(req, res) {
  const workout = await Workout.getWorkout(req.user._id);
  res.json(workout);
}

// Add an item to the cart
async function addToWorkout(req, res) {
  const workout = await Workout.getWorkout(req.user._id);
  await workout.addExerciseToWorkout(req.params.id);
  res.json(workout);
}

async function removeExerciseInWorkout(req, res) {
  console.log("WE ARE HITTING THIS BUTTON IN CONTROLLERS");
  const workout = await Workout.getWorkout(req.user._id);
  await workout.deleteExercise(req.body.exerciseId);
  res.json(workout);
  console.log("req.body.exerciseId -->", req.body.exerciseId);
}
// // Updates an item's qty in the cart
// async function setItemQtyInCart(req, res) {
//   const cart = await Order.getCart(req.user._id);
//   await cart.setItemQty(req.body.itemId, req.body.newQty);
//   res.json(cart);
// }

// // Update the cart's isPaid property to true
// async function checkout(req, res) {
//   const cart = await Order.getCart(req.user._id);
//   cart.isPaid = true;
//   await cart.save();
//   res.json(cart);
// }
