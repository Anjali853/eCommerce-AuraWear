const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    // Kaun user review de raha hai
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Kis product ka review hai
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },

    // Star rating
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },

    // User comment
    comment: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// Ek user ek product par sirf ek review de sakta hai
reviewSchema.index(
  { user: 1, product: 1 },
  { unique: true }
);

const Review = mongoose.model(
  "Review",
  reviewSchema
);

module.exports = Review;