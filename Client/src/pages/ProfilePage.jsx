import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { getProfile } from "../services/authService";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  // const [profile, setProfile] = useState(null);
  const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);
const navigate = useNavigate();

const handleLogout = () => {
  localStorage.removeItem("token");
  navigate("/login");
};

  useEffect(() => {
  const fetchProfile = async () => {
    try {
      const data = await getProfile();

      // Backend response:
      // {
      //   message: "...",
      //   user: { ... }
      // }

      setUser(data.user);
    } catch (error) {
      console.error("Error fetching profile:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchProfile();
}, []);



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
      Loading Profile...
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
          maxWidth: "700px",
          margin: "40px auto",
          background: "#111",
          padding: "40px",
          borderRadius: "25px",
          textAlign: "center",
        }}
      >
        {/* Avatar */}

        <div
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            background:
              "linear-gradient(135deg,#A855F7,#EC4899)",
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "50px",
            fontWeight: "bold",
          }}
        >
         {user?.name?.charAt(0).toUpperCase()}
        </div>

        <h1
  style={{
    marginTop: "20px",
  }}
>
  {user?.name}
</h1>

        <p
  style={{
    color: "#aaa",
  }}
>
  {user?.email}
</p>

        <div
          style={{
            marginTop: "40px",
          }}
        >
          {menu("📦", "My Orders")}
          {menu("❤️", "Wishlist")}
          {menu("📍", "Saved Address")}
          {menu("⚙", "Edit Profile")}
          {menu("🚪", "Logout", handleLogout)}
        </div>
      </div>
    </div>
  );
};

const menu = (icon, title, onClick) => (
  <div
    onClick={onClick}
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      background: "#1A1A1A",
      padding: "18px",
      borderRadius: "15px",
      marginBottom: "15px",
      cursor: "pointer",
      transition: "0.3s",
    }}
  >
    <span style={{ fontSize: "18px" }}>
      {icon} {title}
    </span>

    <span>➜</span>
  </div>
);

export default ProfilePage;