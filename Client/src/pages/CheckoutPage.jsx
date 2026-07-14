import { useState } from "react";
import Navbar from "../components/Navbar";
import { createOrder } from "../services/orderService";

const CheckoutPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("cod");

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#07070A",
        color: "#fff",
      }}
    >
      <Navbar />

      <div
        style={{
          maxWidth: "1200px",
          margin: "40px auto",
          padding: "20px",
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "30px",
        }}
      >
        {/* Left */}
        <div
          style={{
            background: "#111",
            padding: "30px",
            borderRadius: "20px",
          }}
        >
          <h1>Checkout</h1>

          <div style={{ marginTop: "30px" }}>
            <label>Full Name</label>

            <input
              type="text"
              placeholder="Enter your full name"
              style={inputStyle}
            />

            <label>Phone Number</label>

            <input
              type="text"
              placeholder="Enter phone number"
              style={inputStyle}
            />

            <label>Address</label>

            <textarea
              placeholder="Enter address"
              style={{
                ...inputStyle,
                height: "100px",
              }}
            />

            <label>City</label>

            <input
              type="text"
              placeholder="City"
              style={inputStyle}
            />

            <label>Pincode</label>

            <input
              type="text"
              placeholder="Pincode"
              style={inputStyle}
            />
          </div>

          <h2 style={{ marginTop: "40px" }}>
            Payment Method
          </h2>

          <div style={{ marginTop: "20px" }}>
            <label style={radioStyle}>
              <input
                type="radio"
                checked={paymentMethod === "cod"}
                onChange={() =>
                  setPaymentMethod("cod")
                }
              />
              Cash On Delivery
            </label>

            <label style={radioStyle}>
              <input
                type="radio"
                checked={paymentMethod === "razorpay"}
                onChange={() =>
                  setPaymentMethod("razorpay")
                }
              />
              Razorpay
            </label>
          </div>
        </div>

        {/* Right */}
        <div
          style={{
            background: "#111",
            padding: "30px",
            borderRadius: "20px",
            height: "fit-content",
          }}
        >
          <h2>Order Summary</h2>

          <hr
            style={{
              border: "1px solid rgba(255,255,255,.1)",
              margin: "20px 0",
            }}
          />

          <div style={row}>
            <span>Subtotal</span>
            <span>₹2499</span>
          </div>

          <div style={row}>
            <span>Shipping</span>
            <span>FREE</span>
          </div>

          <div style={row}>
            <span>GST</span>
            <span>₹450</span>
          </div>

          <hr
            style={{
              border: "1px solid rgba(255,255,255,.1)",
              margin: "20px 0",
            }}
          />

          <div style={row}>
            <h3>Total</h3>
            <h2>₹2949</h2>
          </div>

          <button
            style={{
              width: "100%",
              marginTop: "25px",
              padding: "16px",
              border: "none",
              borderRadius: "40px",
              background:
                "linear-gradient(90deg,#A855F7,#EC4899)",
              color: "#fff",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            Place Order →
          </button>
        </div>
      </div>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "14px",
  marginTop: "10px",
  marginBottom: "20px",
  borderRadius: "10px",
  border: "1px solid rgba(255,255,255,.15)",
  background: "#1A1A1A",
  color: "#fff",
};

const row = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "15px",
};

const radioStyle = {
  display: "block",
  marginBottom: "15px",
};

export default CheckoutPage;