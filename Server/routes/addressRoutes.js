const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  getAddress,
  saveAddress,
  deleteAddress,
} = require("../controllers/addressController");

// Get saved address
router.get("/", protect, getAddress);

// Save / Update address
router.post("/", protect, saveAddress);

// Delete address
router.delete("/", protect, deleteAddress);

module.exports = router;