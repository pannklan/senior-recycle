const router = require("express").Router();
const Material = require("../models/material.model");

router.post("/", async (req, res) => {
    try {
        const newMaterial = new Material(req.body);
        await newMaterial.save();
        res.status(201).json(newMaterial);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get("/", async (req, res) => {
    try {
        const materials = await Material.find();
        res.json(materials);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const updatedMaterial = await Material.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedMaterial);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        await Material.findByIdAndDelete(req.params.id);
        res.json({ message: "Material deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
