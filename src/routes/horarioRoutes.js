const express = require("express");
const router = express.Router();
const HorarioController = require("../controllers/HorarioController");

router.get("/", HorarioController.getAll);
router.get("/:id", HorarioController.getById);
router.post("/", HorarioController.create);
router.put("/:id", HorarioController.update);
router.delete("/:id", HorarioController.remove);

module.exports = router;