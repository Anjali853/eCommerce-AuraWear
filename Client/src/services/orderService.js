import API from "./api";

export const createOrder = async (orderData) => {
  const response = await API.post(
    "/orders",
    orderData
  );

  return response.data;
};

export const getMyOrders = async () => {
  const response = await API.get("/orders/my");

  return response.data;
};