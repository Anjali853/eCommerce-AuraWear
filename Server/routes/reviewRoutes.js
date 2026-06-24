const express = require("express");

const router = express.Router();

const {
  addReview,
  getProductReviews,
  getProductRating,
} = require("../controllers/reviewController");
const protect = require("../middleware/authMiddleware");
router.get("/rating/:productId",getProductRating);


// Add Review (Protected)
router.post("/add", protect, addReview);

router.get("/:productId", getProductReviews);




module.exports = router;