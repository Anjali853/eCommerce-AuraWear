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

// GET ADDRESS
export const getAddress = async () => {
  const response = await API.get("/auth/address");
  return response.data;
};

// UPDATE ADDRESS
export const updateAddress = async (addressData) => {
  const response = await API.put(
    "/auth/address",
    addressData
  );

  return response.data;
};