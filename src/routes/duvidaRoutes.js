const express = require("express");
const router = express.Router();
const DuvidaController = require("../controllers/DuvidaController");

router.get("/", DuvidaController.getAll);
router.get("/:id", DuvidaController.getById);
router.post("/", DuvidaController.create);
router.put("/:id", DuvidaController.update);
router.delete("/:id", DuvidaController.remove);

module.exports = router;