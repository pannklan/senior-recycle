const Inventory = require("../models/inventory.model");

exports.createInventory = async (req, res) => {
    try {
        const newInventory = new Inventory(req.body);
        await newInventory.save();
        res.status(201).json(newInventory);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getAllInventory = async (req, res) => {
    try {
        const inventory = await Inventory.find().populate("materialId");
        res.json(inventory);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getInventoryById = async (req, res) => {
    try {
        const inventoryItem = await Inventory.findById(req.params.id).populate("materialId");
        if (!inventoryItem) return res.status(404).json({ error: "Inventory item not found" });
        res.json(inventoryItem);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateInventory = async (req, res) => {
    try {
        const updatedInventory = await Inventory.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedInventory);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteInventory = async (req, res) => {
    try {
        await Inventory.findByIdAndDelete(req.params.id);
        res.json({ message: "Inventory deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
