const Invoice = require("../models/invoice.model");

exports.createInvoice = async (req, res) => {
    try {
        const newInvoice = new Invoice(req.body);
        await newInvoice.save();
        res.status(201).json(newInvoice);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getAllInvoices = async (req, res) => {
    try {
        const invoices = await Invoice.find().populate("memberId").populate("items.materialId");
        res.json(invoices);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getInvoiceById = async (req, res) => {
    try {
        const invoice = await Invoice.findById(req.params.id).populate("memberId").populate("items.materialId");
        if (!invoice) return res.status(404).json({ error: "Invoice not found" });
        res.json(invoice);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateInvoice = async (req, res) => {
    try {
        const updatedInvoice = await Invoice.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedInvoice);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteInvoice = async (req, res) => {
    try {
        await Invoice.findByIdAndDelete(req.params.id);
        res.json({ message: "Invoice deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
