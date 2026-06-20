const express = require("express");
const router = express.Router();

const {
  createProduct,
} = require("../controllers/productController");


// Create Product Route
router.post("/add", createProduct);


module.exports = router;