require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
// Connect to MongoDB
connectDB();


const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.json({
    message: "AuraWear Backend Running Successfully 🚀",
  });
});

// Server Start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});