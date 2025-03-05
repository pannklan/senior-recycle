const mongoose = require("mongoose");

const MemberSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    telNum: { type: String, required: true }
});

module.exports = mongoose.model("Member", MemberSchema);
