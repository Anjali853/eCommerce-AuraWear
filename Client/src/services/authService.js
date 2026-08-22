import API from "./api";

export const signupUser = async (userData) => {
  const response = await API.post("/auth/signup", userData);
  return response.data;
};

export const loginUser = async (userData) => {
  const response = await API.post("/auth/login", userData);
  return response.data;
};

export const getProfile = async () => {
  const response = await API.get("/auth/profile");
  return response.data;
};

export const updateProfile = async (userData) => {
  const response = await API.put("/auth/profile", userData);
  return response.data;
};

export const uploadProfileImage = async (imageFile) => {
  const formData = new FormData();

  formData.append("image", imageFile);

  const response = await API.post(
    "/auth/upload-profile-image",
    formData
  );

  return response.data;
};

// Get Saved Address
export const getAddress = async () => {
  const response = await API.get("/address");
  return response.data;
};

// Save / Update Address
export const saveAddress = async (addressData) => {
  const response = await API.post("/address", addressData);
  return response.data;
};

// Delete Address
export const deleteAddress = async () => {
  const response = await API.delete("/address");
  return response.data;
};