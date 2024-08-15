const express = require("express");
const router = express.Router();
const musclesCtrl = require("../../controllers/api/muscles");

// GET /api/muscles
router.get("/", musclesCtrl.index);

module.exports = router;
