const express = require("express");
const router = express.Router();
const FotoController = require("../controllers/FotoController");

router.get("/", FotoController.getAll);
router.get("/:id", FotoController.getById);
router.post("/", FotoController.create);
router.put("/:id", FotoController.update);
router.delete("/:id", FotoController.remove);

module.exports = router;