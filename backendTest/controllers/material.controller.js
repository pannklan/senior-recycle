const Material = require("../models/material.model");

// Create Material
exports.createMaterial = async (req, res) => {
    try {
        const { id, name, price, category } = req.body;

        const newMaterial = new Material({
            id,
            name,
            price,
            category
        });

        await newMaterial.save();
        res.status(201).json(newMaterial);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get All Materials
exports.getAllMaterials = async (req, res) => {
    try {
        const materials = await Material.find();
        res.json(materials);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get Material by ID
exports.getMaterialById = async (req, res) => {
    try {
        const material = await Material.findOne({ id: req.params.id });

        if (!material) {
            return res.status(404).json({ error: "Material not found" });
        }

        res.json(material);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update Material
exports.updateMaterial = async (req, res) => {
    try {
        const updatedMaterial = await Material.findOneAndUpdate(
            { id: req.params.id },
            req.body,
            { new: true }
        );

        if (!updatedMaterial) {
            return res.status(404).json({ error: "Material not found" });
        }

        res.json(updatedMaterial);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete Material
exports.deleteMaterial = async (req, res) => {
    try {
        const deletedMaterial = await Material.findOneAndDelete({ id: req.params.id });

        if (!deletedMaterial) {
            return res.status(404).json({ error: "Material not found" });
        }

        res.json({ message: "Material deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
