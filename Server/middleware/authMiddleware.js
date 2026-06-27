const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
  try {
    let token;

    const authHeader = req.headers.authorization;

    if (
      authHeader &&
      authHeader.startsWith("Bearer ")
    ) {
      token = authHeader.split(" ")[1];

      // Verify JWT
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET
      );

      // Fetch full user from database
      const user = await User.findById(decoded.id).select("-password");

      if (!user) {
        return res.status(401).json({
          message: "User not found",
        });
      }

      // Attach full user to request
      req.user = user;

      next();

    } else {
      return res.status(401).json({
        message: "No token, authorization denied",
      });
    }

  } catch (error) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }
};

module.exports = protect;