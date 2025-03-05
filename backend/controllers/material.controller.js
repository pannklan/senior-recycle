const Material = require("../models/material.model");

exports.createMaterial = async (req, res) => {
    try {
        const newMaterial = new Material(req.body);
        await newMaterial.save();
        res.status(201).json(newMaterial);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getAllMaterials = async (req, res) => {
    try {
        const materials = await Material.find();
        res.json(materials);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getMaterialById = async (req, res) => {
    try {
        const material = await Material.findById(req.params.id);
        if (!material) return res.status(404).json({ error: "Material not found" });
        res.json(material);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateMaterial = async (req, res) => {
    try {
        const updatedMaterial = await Material.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedMaterial);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteMaterial = async (req, res) => {
    try {
        await Material.findByIdAndDelete(req.params.id);
        res.json({ message: "Material deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
