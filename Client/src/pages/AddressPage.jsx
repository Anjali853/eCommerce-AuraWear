import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { getAddress, saveAddress } from "../services/authService";

const AddressPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
    country: "India",
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Load saved address
  useEffect(() => {
    const fetchAddress = async () => {
      try {
        const data = await getAddress();

        if (data.address) {
          setForm({
            fullName: data.address.fullName || "",
            phone: data.address.phone || "",
            street: data.address.street || "",
            city: data.address.city || "",
            state: data.address.state || "",
            pincode: data.address.pincode || "",
            country: data.address.country || "India",
          });
        }
      } catch (error) {
        console.error("Error fetching address:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAddress();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);

      await saveAddress(form);

      alert("Address Saved Successfully");

      navigate("/profile");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Failed to save address"
      );
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#07070A",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "22px",
        }}
      >
        Loading Address...
      </div>
    );
  }

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
          maxWidth: "600px",
          margin: "40px auto",
          background: "#111",
          padding: "30px",
          borderRadius: "20px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          Saved Address
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            name="fullName"
            placeholder="Full Name"
            value={form.fullName}
            onChange={handleChange}
            style={inputStyle}
            required
          />

          <input
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            style={inputStyle}
            required
          />

          <input
            name="street"
            placeholder="Street Address"
            value={form.street}
            onChange={handleChange}
            style={inputStyle}
            required
          />

          <input
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
            style={inputStyle}
            required
          />

          <input
            name="state"
            placeholder="State"
            value={form.state}
            onChange={handleChange}
            style={inputStyle}
            required
          />

          <input
            name="pincode"
            placeholder="Pincode"
            value={form.pincode}
            onChange={handleChange}
            style={inputStyle}
            required
          />

          <input
            name="country"
            placeholder="Country"
            value={form.country}
            onChange={handleChange}
            style={inputStyle}
            required
          />

          <button
            type="submit"
            disabled={saving}
            style={{
              ...buttonStyle,
              opacity: saving ? 0.7 : 1,
            }}
          >
            {saving ? "Saving..." : "Save Address"}
          </button>
        </form>
      </div>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "14px",
  marginBottom: "18px",
  borderRadius: "10px",
  border: "1px solid #444",
  background: "#1A1A1A",
  color: "#fff",
  fontSize: "16px",
  boxSizing: "border-box",
};

const buttonStyle = {
  width: "100%",
  padding: "15px",
  border: "none",
  borderRadius: "10px",
  background: "#8B5CF6",
  color: "#fff",
  fontSize: "17px",
  cursor: "pointer",
};

export default AddressPage;