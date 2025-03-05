const mongoose = require("mongoose");

const MaterialSchema = new mongoose.Schema({
    name: { type: String, required: true },
    unit: { type: String, required: true },
    priceGeneral: { type: Number, required: true },
    priceMember: { type: Number, required: true }
});

module.exports = mongoose.model("Material", MaterialSchema);
