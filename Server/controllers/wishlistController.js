const Wishlist = require("../models/Wishlist");


// Add Product To Wishlist
const addToWishlist = async (req, res) => {
  try {

    const { productId } = req.body;

    const userId = req.user.id;

    // Check if wishlist already exists
    let wishlist = await Wishlist.findOne({
      user: userId,
    });

    if (wishlist) {

      // Check duplicate product
      const alreadyExists = wishlist.products.find(
        (item) =>
          item.productId.toString() === productId
      );

      if (alreadyExists) {
        return res.status(400).json({
          message: "Product already in wishlist",
        });
      }

      wishlist.products.push({
        productId,
      });

    } else {

      // Create new wishlist
      wishlist = new Wishlist({
        user: userId,
        products: [
          {
            productId,
          },
        ],
      });

    }

    await wishlist.save();

    res.status(200).json({
      message: "Added to wishlist ❤️",
      wishlist,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};



// Get User Wishlist
const getWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.findOne({
      user: req.user.id,
    }).populate("products.productId");

    if (!wishlist) {
      return res.status(404).json({
        message: "Wishlist is empty",
      });
    }

    res.status(200).json({
      message: "Wishlist fetched successfully ❤️",
      wishlist,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Remove Product From Wishlist
const removeFromWishlist = async (req, res) => {
  try {

    const { productId } = req.body;

    const wishlist = await Wishlist.findOne({
      user: req.user.id,
    });

    if (!wishlist) {
      return res.status(404).json({
        message: "Wishlist not found",
      });
    }

    wishlist.products = wishlist.products.filter(
      (item) =>
        item.productId.toString() !== productId
    );

    await wishlist.save();

    res.status(200).json({
      message: "Removed from wishlist ❤️",
      wishlist,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addToWishlist,
  getWishlist,
  removeFromWishlist,
};