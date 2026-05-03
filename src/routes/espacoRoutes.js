const express = require("express");
const router = express.Router();
const EspacoController = require("../controllers/EspacoController");

router.get("/", EspacoController.getAll);
router.get("/:id", EspacoController.getById);
router.post("/", EspacoController.create);
router.put("/:id", EspacoController.update);
router.delete("/:id", EspacoController.remove);

module.exports = router;