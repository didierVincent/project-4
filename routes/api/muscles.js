const express = require("express");
const router = express.Router();
const musclesCtrl = require("../../controllers/api/muscles");

// GET /api/muscles
router.get("/", musclesCtrl.index);
// GET /api/muscles/:id
router.get("/:id", musclesCtrl.show);

module.exports = router;
