const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

const {
  signupUser,
  loginUser,
  getProfile,
  updateProfile,
  uploadProfileImage,
  updateAddress,
} = require("../controllers/authController");

// Signup Route
router.post("/signup", signupUser);

// Login Route
router.post("/login", loginUser);

// Get Profile
router.get("/profile", protect, getProfile);

// Update Profile
router.put("/profile", protect, updateProfile);

// Upload Profile Image
router.post(
  "/upload-profile-image",
  protect,
  upload.single("image"),
  uploadProfileImage
);
router.put("/address", protect, updateAddress);

module.exports = router;