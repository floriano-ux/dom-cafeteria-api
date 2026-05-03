const express = require("express");
const router = express.Router();
const ContatoInfoController = require("../controllers/ContatoInfoController");

router.get("/", ContatoInfoController.get);
router.put("/", ContatoInfoController.update);

module.exports = router;