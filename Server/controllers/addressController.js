const Address = require("../models/Address");

// Get user's address
const getAddress = async (req, res) => {
  try {
    const address = await Address.findOne({
      user: req.user._id,
    });

    res.status(200).json({
      address: address || null,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Create or update user's address
const saveAddress = async (req, res) => {
  try {
    const {
      fullName,
      phone,
      street,
      city,
      state,
      pincode,
      country,
    } = req.body;

    if (
      !fullName ||
      !phone ||
      !street ||
      !city ||
      !state ||
      !pincode
    ) {
      return res.status(400).json({
        message: "Please fill all required fields",
      });
    }

    let address = await Address.findOne({
      user: req.user._id,
    });

    if (address) {
      address.fullName = fullName;
      address.phone = phone;
      address.street = street;
      address.city = city;
      address.state = state;
      address.pincode = pincode;
      address.country = country || "India";

      await address.save();
    } else {
      address = await Address.create({
        user: req.user._id,
        fullName,
        phone,
        street,
        city,
        state,
        pincode,
        country: country || "India",
      });
    }

    res.status(200).json({
      message: "Address saved successfully",
      address,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete address
const deleteAddress = async (req, res) => {
  try {
    const address = await Address.findOneAndDelete({
      user: req.user._id,
    });

    if (!address) {
      return res.status(404).json({
        message: "Address not found",
      });
    }

    res.status(200).json({
      message: "Address deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getAddress,
  saveAddress,
  deleteAddress,
};