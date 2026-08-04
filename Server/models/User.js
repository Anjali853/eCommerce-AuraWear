const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },

    password: {
      type: String,
      required: [true, "Password is required"],
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    profileImage: {
      type: String,
      default: "",
    },

//Image
address: {
  fullName: {
    type: String,
    default: "",
  },
  phone: {  
        
    type: String,
    default: "",
  },
  street: {
    type: String,
    default: "",
  },
  city: {
    type: String,
    default: "",
  },
  state: {
    type: String,
    default: "",
  },
  pincode: {
    type: String,
    default: "",
  },
  country: {
    type: String,
    default: "India",
  },
}
  },
);

const User = mongoose.model("User", userSchema);

module.exports = User;