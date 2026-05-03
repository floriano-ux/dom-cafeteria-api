const express = require("express");
const router = express.Router();
const InicioController = require("../controllers/InicioController");

router.get("/", InicioController.get);
router.put("/", InicioController.update);

module.exports = router;