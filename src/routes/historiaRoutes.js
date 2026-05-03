const express = require("express");
const router = express.Router();
const HistoriaController = require("../controllers/HistoriaController");

router.get("/", HistoriaController.get);
router.put("/", HistoriaController.update);

module.exports = router;