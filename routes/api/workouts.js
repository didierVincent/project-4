const express = require("express");
const router = express.Router();
const workoutsCtrl = require("../../controllers/api/workouts");

// GET /api/workouts/cart
router.get("/", workoutsCtrl.show);
// POST /api/workouts/cart/items/:id
router.post("/workout/exercises/:id", workoutsCtrl.addToWorkout);

router.delete("/workout/exercises/:id", workoutsCtrl.removeExerciseInWorkout);

router.put("/workout/qty", workoutsCtrl.changeExerciseQty);

router.post("/workout/save", workoutsCtrl.saveWorkout);

module.exports = router;
