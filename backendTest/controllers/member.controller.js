const Member = require("../models/member.model");

// Create new member
exports.createMember = async (req, res) => {
    try {
        const newMember = new Member(req.body);
        await newMember.save();
        res.status(201).json(newMember);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get all members
exports.getAllMembers = async (req, res) => {
    try {
        console.log("Fetching members from database..."); // Debug log
        const members = await Member.find();
        console.log("Members fetched:", members); // Debug log
        res.json(members);
    } catch (err) {
        console.error("❌ Error fetching members:", err);
        res.status(500).json({ error: err.message });
    }
};

// Get member by ID
exports.getMemberById = async (req, res) => {
    try {
        const member = await Member.findById(req.params.id);
        if (!member) return res.status(404).json({ error: "Member not found" });
        res.json(member);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update member by ID
exports.updateMember = async (req, res) => {
    try {
        const updatedMember = await Member.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedMember);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete member by ID
exports.deleteMember = async (req, res) => {
    try {
        await Member.findByIdAndDelete(req.params.id);
        res.json({ message: "Member deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};