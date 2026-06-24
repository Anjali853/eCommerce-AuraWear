const Review = require("../models/Review");

// Add Review
const addReview = async (req, res) => {
  try {
    const { productId, rating, comment } = req.body;

    const userId = req.user.id;

    // Check existing review
    const existingReview = await Review.findOne({
      user: userId,
      product: productId,
    });

    if (existingReview) {
      return res.status(400).json({
        message: "You already reviewed this product",
      });
    }

    // Create review
    const review = await Review.create({
      user: userId,
      product: productId,
      rating,
      comment,
    });

    res.status(201).json({
      message: "Review added successfully ⭐",
      review,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// Get Reviews of a Product
const getProductReviews = async (req, res) => {
  try {

    const reviews = await Review.find({
      product: req.params.productId,
    })
    .populate("user", "name email")
    .sort({
      createdAt: -1,
    });


    res.status(200).json({
      count: reviews.length,
      reviews,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};


const getProductRating = async (req, res) => {
  try {

    const reviews = await Review.find({
      product: req.params.productId,
    });

    if (reviews.length === 0) {
      return res.status(200).json({
        averageRating: 0,
        totalReviews: 0,
      });
    }

    const totalRating = reviews.reduce(
      (sum, review) => sum + review.rating,
      0
    );

    const averageRating =
      totalRating / reviews.length;

    res.status(200).json({
      averageRating:
        averageRating.toFixed(1),
      totalReviews:
        reviews.length,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};


module.exports = {
  addReview,
  getProductReviews,
  getProductRating,
};