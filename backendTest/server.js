require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

// Default route
app.get("/", (req, res) => {
    res.send("Server is running! Use the API endpoints.");
});

// MongoDB connection
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connect(process.env.uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error:", err));

// Routes
app.use("/members", require("./routes/member.routes"));
app.use("/materials", require("./routes/material.routes"));
app.use("/inventory", require("./routes/inventory.routes"));
app.use("/invoices", require("./routes/invoice.routes"));

// Set port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));