const express = require("express");
const router = express.Router();
const materialController = require("../controllers/material.controller");

// Define CRUD routes
router.post("/", materialController.createMaterial);
router.get("/", materialController.getAllMaterials);
router.get("/:id", materialController.getMaterialById);
router.put("/:id", materialController.updateMaterial);
router.delete("/:id", materialController.deleteMaterial);

module.exports = router;
