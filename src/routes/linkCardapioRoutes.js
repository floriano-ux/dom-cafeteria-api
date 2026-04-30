const express = require("express");
const router = express.Router();
const LinkCardapioController = require("../controllers/LinkCardapioController");

router.get("/", LinkCardapioController.get);
router.put("/", LinkCardapioController.update);
router.delete("/", LinkCardapioController.remove);

module.exports = router;