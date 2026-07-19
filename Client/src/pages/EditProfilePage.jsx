import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { getProfile, updateProfile } from "../services/authService";

const EditProfilePage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getProfile();
        setName(data.user.name);
        setEmail(data.user.email);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);

      await updateProfile({
        name,
        email,
      });

      alert("Profile Updated Successfully!");

      navigate("/profile", { replace: true });
    } catch (error) {
      alert(error.response?.data?.message || "Update Failed");
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
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "22px",
        }}
      >
        Loading...
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#07070A",
        color: "white",
      }}
    >
      <Navbar />

      <div
        style={{
          maxWidth: "500px",
          margin: "50px auto",
          background: "#111",
          padding: "35px",
          borderRadius: "20px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Edit Profile
        </h2>

        <form onSubmit={handleSubmit}>
          <label>Name</label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
          />

          <label>Email</label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />

          <button
            type="submit"
            disabled={saving}
            style={buttonStyle}
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "14px",
  marginTop: "8px",
  marginBottom: "20px",
  borderRadius: "10px",
  border: "1px solid #444",
  background: "#1a1a1a",
  color: "white",
  fontSize: "16px",
  outline: "none",
  boxSizing: "border-box",
};

const buttonStyle = {
  width: "100%",
  padding: "15px",
  border: "none",
  borderRadius: "10px",
  background: "#8B5CF6",
  color: "white",
  fontSize: "16px",
  cursor: "pointer",
};

export default EditProfilePage;