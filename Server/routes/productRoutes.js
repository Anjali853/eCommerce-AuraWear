const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const adminOnly = require("../middleware/adminMiddleware");

const {
  createProduct,
  getProducts,
  getProductById,
  getProductsByCategory,
  searchProducts,
} = require("../controllers/productController");


// Admin Only Create Product
router.post(
  "/add",
  protect,
  adminOnly,
  createProduct
);

router.get("/", getProducts);

router.get("/search", searchProducts);

router.get(
  "/category/:category",
  getProductsByCategory
);

router.get("/:id", getProductById);

module.exports = router;