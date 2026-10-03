const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    // Main product image
    image: {
      type: String,
      required: true,
    },

    // Multiple product images for gallery
    images: {
      type: [String],
      default: [],
    },

    category: {
      type: String,
      required: true,
    },

    stock: {
      type: Number,
      default: 0,
    },

    description: {
      type: String,
      required: true,
    },

    mood: {
      type: String,
      enum: [
        "Casual",
        "Party",
        "Office",
        "Gym",
        "Date",
        "Travel",
        "Wedding",
      ],
      default: "Casual",
    },

    brand: {
      type: String,
      default: "AuraWear",
    },

    rating: {
      type: Number,
      default: 4.8,
    },

    numReviews: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);