const Member = require("../models/member.model");

exports.createMember = async (req, res) => {
    try {
        const newMember = new Member(req.body);
        await newMember.save();
        res.status(201).json(newMember);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getAllMembers = async (req, res) => {
    try {
        const members = await Member.find();
        res.json(members);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getMemberById = async (req, res) => {
    try {
        const member = await Member.findById(req.params.id);
        if (!member) return res.status(404).json({ error: "Member not found" });
        res.json(member);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateMember = async (req, res) => {
    try {
        const updatedMember = await Member.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedMember);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteMember = async (req, res) => {
    try {
        await Member.findByIdAndDelete(req.params.id);
        res.json({ message: "Member deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
