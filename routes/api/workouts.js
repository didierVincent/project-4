const express = require("express");
const router = express.Router();
const workoutsCtrl = require("../../controllers/api/workouts");

// GET /api/workouts/cart
router.get("/", workoutsCtrl.show);

router.get("/workout/saved-workouts", workoutsCtrl.getWorkoutHistory);
router.post("/workout/exercises/:id", workoutsCtrl.addToWorkout);

router.post("/workout/save", workoutsCtrl.saveWorkout);
router.post("/workout/add-rest-day", workoutsCtrl.addRestDay);
router.put("/workout/qty", workoutsCtrl.changeExerciseQty);

router.delete("/workout/exercises/:id", workoutsCtrl.removeExerciseInWorkout);

router.delete("/workout/delete", workoutsCtrl.resetWorkout);

module.exports = router;
