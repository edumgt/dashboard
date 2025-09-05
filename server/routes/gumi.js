const express = require("express");
const router = express.Router();
const { getGumi } = require("../controllers/gumiController");

// GET /api/gumi
router.get("/", getGumi);

module.exports = router;
