import API from "./api";

export const getProducts = async () => {
  const response = await API.get("/products");
  return response.data;
};

export const getProductById = async (productId) => {
  const response = await API.get(`/products/${productId}`);
  return response.data;
};

export const searchProducts = async (keyword) => {
  const response = await API.get(
    `/products/search?keyword=${encodeURIComponent(keyword)}`
  );

  return response.data;
};