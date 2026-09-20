import API from "./api";

// Get Saved Address
export const getAddress = async () => {
  const response = await API.get("/address");
  return response.data;
};

// Save Address
export const saveAddress = async (addressData) => {
  const response = await API.post("/address", addressData);
  return response.data;
};

// Delete Address
export const deleteAddress = async () => {
  const response = await API.delete("/address");
  return response.data;
};