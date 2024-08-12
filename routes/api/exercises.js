const express = require("express");
const router = express.Router();
const exercisesCtrl = require("../../controllers/api/exercises");

// GET /api/exercises
router.get("/", exercisesCtrl.index);
// GET /api/exercises/:id
router.get("/:id", exercisesCtrl.show);

module.exports = router;
