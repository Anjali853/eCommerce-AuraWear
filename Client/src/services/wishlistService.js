import API from "./api";

// Get Wishlist
export const getWishlist = async () => {
  const response = await API.get("/wishlist");
  return response.data;
};

// Add Product
export const addToWishlist = async (productId) => {
  const response = await API.post("/wishlist/add", {
    productId,
  });

  return response.data;
};

// Remove Product
export const removeFromWishlist = async (productId) => {
  const response = await API.delete("/wishlist/remove", {
    data: {
      productId,
    },
  });

  return response.data;
};