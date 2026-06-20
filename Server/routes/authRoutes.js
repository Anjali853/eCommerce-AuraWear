const protect = require("../middleware/authMiddleware");
const express = require("express");

const router = express.Router();

const {
  signupUser,
  loginUser,
  getProfile,
} = require("../controllers/authController");

// Signup Route
router.post("/signup", signupUser);


// Login Route
router.post("/login", loginUser);


// Get Profile Route
router.get("/profile", protect, getProfile);


module.exports = router;