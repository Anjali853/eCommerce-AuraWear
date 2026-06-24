const express = require("express");
const router = express.Router();

const {
  createOrder,
  getMyOrders,
  getOrderById,
} = require("../controllers/orderController");

const protect = require("../middleware/authMiddleware");

// Create Order
router.post("/create", protect, createOrder);

// Get My Orders
router.get("/my-orders", protect, getMyOrders);
router.get("/:id", protect, getOrderById);

module.exports = router;