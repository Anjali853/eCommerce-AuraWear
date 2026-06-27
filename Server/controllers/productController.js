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



// Get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json({
      count: products.length,
      products,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};



// Get Single Product
const getProductById = async (req, res) => {
  try {

    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json(product);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};



// Get Products By Category
const getProductsByCategory = async (req, res) => {
  try {

    const category = req.params.category;

    const products = await Product.find({
      category,
    });

    if (products.length === 0) {
      return res.status(404).json({
        message: "No products found",
      });
    }

    res.status(200).json({
      count: products.length,
      products,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// Search Products
const searchProducts = async (req, res) => {
  try {
    const keyword = req.query.keyword;

    const products = await Product.find({
      $or: [
        {
          name: {
            $regex: keyword,
            $options: "i",
          },
        },
        {
          category: {
            $regex: keyword,
            $options: "i",
          },
        },
      ],
    });

    res.status(200).json({
      count: products.length,
      products,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// Update Product (Admin)
const updateProduct = async (req, res) => {
  try {

    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    product.name = req.body.name || product.name;
    product.description =
      req.body.description || product.description;

    product.price =
      req.body.price || product.price;

    product.category =
      req.body.category || product.category;

    product.image =
      req.body.image || product.image;

    product.mood =
      req.body.mood || product.mood;

    const updatedProduct = await product.save();

    res.status(200).json({
      message: "Product updated successfully ✅",
      product: updatedProduct,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};



const deleteProduct = async (req, res) => {
  try {

    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    await product.deleteOne();

    res.status(200).json({
      message: "Product deleted successfully 🗑️",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};



module.exports = {
  createProduct,
  getProducts,
  getProductById,
  searchProducts,
  getProductsByCategory,
  updateProduct,
  deleteProduct,
};