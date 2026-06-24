const express = require("express");
const router = express.Router();

const {
  createOrder,
  getMyOrders,
} = require("../controllers/orderController");

const protect = require("../middleware/authMiddleware");

// Create Order
router.post("/create", protect, createOrder);

// Get My Orders
router.get("/my-orders", protect, getMyOrders);

module.exports = router;