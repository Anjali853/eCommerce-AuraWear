import API from "./api";

// Get Cart
export const getCart = async () => {
  const response = await API.get("/cart");
  return response.data;
};

// Add To Cart
export const addToCart = async (productId) => {
  const response = await API.post("/cart/add", {
    productId,
    quantity: 1,
  });

  return response.data;
};

// Remove Product
export const removeFromCart = async (productId) => {
  const response = await API.delete("/cart/remove", {
    data: {
      productId,
    },
  });

  return response.data;
};

// Update Quantity
export const updateQuantity = async (
  productId,
  quantity
) => {
  const response = await API.put("/cart/update", {
    productId,
    quantity,
  });

  return response.data;
};