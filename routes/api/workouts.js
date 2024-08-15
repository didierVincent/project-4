const express = require("express");
const router = express.Router();
const workoutsCtrl = require("../../controllers/api/workouts");

// GET /api/workouts/cart
router.get("/", workoutsCtrl.show);
// POST /api/workouts/cart/items/:id
router.post("/workout/exercises/:id", workoutsCtrl.addToWorkout);

router.delete("/workout/exercises/:id", workoutsCtrl.removeExerciseInWorkout);

router.put("/workout/qty", workoutsCtrl.changeExerciseQty);
// // POST /api/workouts/cart/checkout
// router.post("/cart/checkout", workoutsCtrl.checkout);
// // POST /api/workouts/cart/qty
// router.put("/cart/qty", workoutsCtrl.setItemQtyInCart);

module.exports = router;
