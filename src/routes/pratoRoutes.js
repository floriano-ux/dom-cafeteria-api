const express = require("express");
const router = express.Router();
const PratoController = require("../controllers/PratoController");

router.get("/", PratoController.getAll);
router.get("/:id", PratoController.getById);
router.post("/", PratoController.create);
router.put("/:id", PratoController.update);
router.delete("/:id", PratoController.remove);

module.exports = router;