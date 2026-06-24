const express = require("express");

const router = express.Router();

const {
  addReview,
  getProductReviews,
} = require("../controllers/reviewController");
const protect = require("../middleware/authMiddleware");


// Add Review (Protected)
router.post("/add", protect, addReview);

router.get("/:productId", getProductReviews);



module.exports = router;