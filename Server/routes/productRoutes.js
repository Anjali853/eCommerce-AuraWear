const express = require("express");
const router = express.Router();

const {
  createProduct,
  getProducts,
  getProductById,
  getProductsByCategory,
  searchProducts,
} = require("../controllers/productController");
// Create Product Route
router.post("/add", createProduct);

router.get("/", getProducts);

// Search pehle
router.get("/search", searchProducts);

// Category uske baad
router.get("/category/:category", getProductsByCategory);

// ID hamesha last
router.get("/:id", getProductById);

module.exports = router;