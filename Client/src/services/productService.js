import API from "./api";

export const getProducts = async () => {
  const response = await API.get("/products");
  return response.data;
};

export const getProductById = async (productId) => {
  const response = await API.get(`/products/${productId}`);
  return response.data;
};