import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AIStylistPage from "./pages/AIStylistPage";
import MoodCollectionPage from "./pages/MoodCollectionPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import MyOrders from "./pages/MyOrders";
import OrderSuccess from "./pages/OrderSuccess";
import ProfilePage from "./pages/ProfilePage";
import EditProfilePage from "./pages/EditProfilePage";
import AddressPage from "./pages/AddressPage";


import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ai-stylist" element={<AIStylistPage />} />
      <Route path="/mood/:moodName" element={<MoodCollectionPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/App.css" element={<App />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/orders" element={<MyOrders />} />
      <Route path="/order-success" element={<OrderSuccess />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/edit-profile" element={<EditProfilePage />} />
      <Route path="/address" element={<AddressPage />} />
    </Routes>
  );
}

export default App;