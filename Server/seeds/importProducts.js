const axios = require("axios");
const mongoose = require("mongoose");
const Product = require("../models/Product");

const MONGO_URI = process.env.MONGO_URI;

const importProducts = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected ✅");

    const query = `
      {
        products(first: 50) {
          nodes {
            id
            title
            description
            productType
            vendor
            featuredImage {
              url
            }
            images(first: 5) {
              nodes {
                url
              }
            }
            variants(first: 10) {
              nodes {
                price {
                  amount
                }
                quantityAvailable
              }
            }
          }
        }
      }
    `;

    const response = await axios.post(
      "https://apparel.mock.shop/api",
      {
        query,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.data.errors) {
      console.error("GraphQL Error:", response.data.errors);
      process.exit(1);
    }

    const products = response.data.data.products.nodes;

    console.log(`Fetched ${products.length} products 👕`);

    const formattedProducts = products.map((product) => {
      const variant = product.variants.nodes[0];

      const price = Number(variant?.price?.amount || 999);

      const stock = Math.max(
        Number(variant?.quantityAvailable || 20),
        0
      );

      const image =
        product.featuredImage?.url ||
        product.images?.nodes?.[0]?.url ||
        "https://via.placeholder.com/600x800?text=AuraWear";

      return {
        name: product.title,

        price: Math.round(price * 90),

        image,

        category: product.productType || "Fashion",

        stock,

        description:
          product.description ||
          "Premium fashion product curated by AuraWear.",

        mood: "Casual",

        brand: "AuraWear",

        rating: 4.5,

        numReviews: 0,
      };
    });

    await Product.deleteMany({});

    await Product.insertMany(formattedProducts);

    console.log(
      `✅ ${formattedProducts.length} products imported successfully`
    );

    console.log("🎉 AuraWear catalog updated!");

    process.exit(0);
  } catch (error) {
    console.error("❌ Import failed:");

    if (error.response?.data) {
      console.error(error.response.data);
    } else {
      console.error(error.message);
    }

    process.exit(1);
  }
};

importProducts();