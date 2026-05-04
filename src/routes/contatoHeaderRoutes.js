const express = require("express");
const router = express.Router();
const ContatoHeaderController = require("../controllers/ContatoHeaderController");

router.get("/", ContatoHeaderController.get);
router.put("/", ContatoHeaderController.update);

module.exports = router;