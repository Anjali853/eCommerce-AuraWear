const Cart = require("../models/Cart");

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
        (item) =>
          item.productId.toString() === productId
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

module.exports = {
  addToCart,
};