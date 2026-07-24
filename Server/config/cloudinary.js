//  CLOUDINARY_CLOUD_NAME= cct18rhm
//  CLOUDINARY_API_KEY=817874434299656
//  CLOUDINARY_API_SECRET=EXaWadG_IWNFMPgKlqvi_lE0YoA

 const { v2: cloudinary } = require("cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

module.exports = cloudinary;