const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
  try {
    console.log("Authorization:", req.headers.authorization);

    let token;

    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith("Bearer ")) {
      token = authHeader.split(" ")[1];

      console.log("Token:", token);

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      console.log("Decoded:", decoded);

      const user = await User.findById(decoded.id).select("-password");

      console.log("User:", user);

      if (!user) {
        return res.status(401).json({
          message: "User not found",
        });
      }

      req.user = user;
      next();
    } else {
      return res.status(401).json({
        message: "No token, authorization denied",
      });
    }
  } catch (error) {
    console.log("JWT ERROR:", error.message);

    return res.status(401).json({
      message: error.message,
    });
  }
};

module.exports = protect;