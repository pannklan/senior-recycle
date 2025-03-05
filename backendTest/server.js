require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

// Default route
app.get("/", (req, res) => {
    res.send("Server is running! Use the API endpoints.");
});

// MongoDB connection
const client = new MongoClient(process.env.MONGO_URI);
let db;

async function connectDB() {
    try {
        await client.connect();
        db = client.db(); // Connect to the default DB in the URI
        console.log("✅ MongoDB connected successfully!");
    } catch (err) {
        console.error("❌ MongoDB connection error:", err);
        process.exit(1);
    }
}

connectDB();

// Middleware to attach DB to requests
app.use((req, res, next) => {
    if (!db) return res.status(500).json({ error: "Database not initialized" });
    req.db = db;
    next();
});

// Routes
app.use("/members", require("./routes/member.routes"));
app.use("/materials", require("./routes/material.routes"));
app.use("/invoices", require("./routes/invoice.routes"));
app.use("/inventories", require("./routes/inventory.routes"));

// Set port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
