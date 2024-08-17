// routes/api/users.js

const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/api/users");

// require the authorization middleware function
const ensureLoggedIn = require("../../config/ensureLoggedIn");

router.get("/check-token", usersCtrl.checkToken);
router.get("/fetch-data", usersCtrl.fetchData);

// POST /api/users
router.post("/", usersCtrl.create);
// POST /api/users/login
router.post("/login", usersCtrl.login);

// created Routes
router.post("/update-fatigue", usersCtrl.updateFatigue);
router.post("/reset-fatigue", usersCtrl.resetFatigue);
router.post("/add-rest-day", usersCtrl.addRestDay);

module.exports = router;
