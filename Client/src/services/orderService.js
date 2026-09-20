import API from "./api";

// Create Order
export const createOrder = async (orderData) => {
  const response = await API.post("/orders/create", orderData);
  return response.data;
};

// Get My Orders
export const getMyOrders = async () => {
  const response = await API.get("/orders/my-orders");
  return response.data;
};

// Get Order By ID
export const getOrderById = async (orderId) => {
  const response = await API.get(`/orders/${orderId}`);
  return response.data;
};