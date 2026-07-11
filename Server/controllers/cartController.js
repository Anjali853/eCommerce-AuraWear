const Cart = require("../models/Cart");

// Add product to cart
const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    // Login user ID from JWT middleware
    const userId = req.user.id;

    // Check if cart already exists
    let cart = await Cart.findOne({ user: userId });

    if (cart) {
      // Check if product already exists
      const productIndex = cart.products.findIndex(
        (item) => item.productId.toString() === productId
      );

      if (productIndex > -1) {
        // Increase quantity
        cart.products[productIndex].quantity += quantity;
      } else {
        // Add new product
        cart.products.push({
          productId,
          quantity,
        });
      }

    } else {
      // Create new cart
      cart = new Cart({
        user: userId,
        products: [
          {
            productId,
            quantity,
          },
        ],
      });
    }

    await cart.save();

    res.status(200).json({
      message: "Product added to cart successfully",
      cart,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// Get cart
// Get cart
const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({
      user: req.user.id,
    }).populate("products.productId");

    if (!cart) {
      return res.status(404).json({
        message: "Cart is empty",
      });
    }

    res.status(200).json({
      message: "Cart fetched successfully",
      cart,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// Remove product from cart
const removeFromCart = async (req, res) => {
  try {
    const { productId } = req.body;

   const cart = await Cart.findOne({
  user: req.user.id,
}).populate("products.productId");

    if (!cart) {
      return res.status(404).json({
        message: "Cart not found",
      });
    }

    cart.products = cart.products.filter(
      (item) => item.productId.toString() !== productId
    );

    await cart.save();

    res.status(200).json({
      message: "Product removed from cart",
      cart,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


const updateCartQuantity = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    const cart = await Cart.findOne({
      user: req.user.id,
    });

    if (!cart) {
      return res.status(404).json({
        message: "Cart not found",
      });
    }

    const product = cart.products.find(
      (item) => item.productId.toString() === productId
    );

    if (!product) {
      return res.status(404).json({
        message: "Product not found in cart",
      });
    }

    product.quantity = quantity;

    await cart.save();

    res.status(200).json({
      message: "Quantity updated successfully",
      cart,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// Export all functions
module.exports = {
  addToCart,
  getCart,
  removeFromCart,
  updateCartQuantity,
};