const Product = require("../models/Product");

// Create Product
const createProduct = async (req, res) => {
  try {
    const {
      name,
      price,
      image,
      category,
      stock,
      description,
    } = req.body;

    const product = new Product({
      name,
      price,
      image,
      category,
      stock,
      description,
    });

    await product.save();

    res.status(201).json({
      message: "Product created successfully",
      product,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


module.exports = {
  createProduct,
};