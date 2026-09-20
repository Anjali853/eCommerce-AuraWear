import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { getProfile } from "../services/authService";

const styles = {
  page: {
    minHeight: "100vh",
    background: "#07070A",
    color: "#fff",
  },
  center: {
    minHeight: "100vh",
    background: "#07070A",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "16px",
    fontSize: "22px",
  },
  card: {
    maxWidth: "700px",
    margin: "40px auto",
    background: "#111",
    padding: "40px",
    borderRadius: "25px",
    textAlign: "center",
  },
  avatar: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  avatarFallback: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    background: "#8B5CF6",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "50px",
    color: "white",
    margin: "0 auto",
  },
  name: { marginTop: "20px" },
  email: { color: "#aaa" },
  menuWrap: { marginTop: "40px" },
  retryButton: {
    background: "#8B5CF6",
    color: "#fff",
    border: "none",
    borderRadius: "12px",
    padding: "12px 24px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

const Avatar = ({ user }) =>
  user?.profileImage ? (
    <img src={user.profileImage} alt="Profile" style={styles.avatar} />
  ) : (
    <div style={styles.avatarFallback}>
      {user?.name?.charAt(0)?.toUpperCase() || "U"}
    </div>
  );

const MenuItem = ({ icon, title, onClick, danger = false }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: hovered ? "#242424" : "#1A1A1A",
        color: danger ? "#F87171" : "#fff",
        border: "none",
        padding: "18px",
        borderRadius: "15px",
        marginBottom: "15px",
        cursor: "pointer",
        transition: "background 0.3s",
        font: "inherit",
        textAlign: "left",
      }}
    >
      <span style={{ fontSize: "18px" }}>
        {icon} {title}
      </span>
      <span aria-hidden="true">➜</span>
    </button>
  );
};

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reloadKey, setReloadKey] = useState(0);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };

  useEffect(() => {
    // No token means the user isn't logged in, so skip the request.
    if (!localStorage.getItem("token")) {
      navigate("/login", { replace: true });
      return;
    }

    let cancelled = false;

    const fetchProfile = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getProfile();
        if (!cancelled) setUser(data.user);
      } catch (err) {
        console.error("Error fetching profile:", err);

        // Expired or invalid token: send the user back to login.
        if (err?.response?.status === 401) {
          localStorage.removeItem("token");
          if (!cancelled) navigate("/login", { replace: true });
          return;
        }

        if (!cancelled) setError("Couldn't load your profile.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchProfile();

    // Avoid setting state if the component unmounts mid-request.
    return () => {
      cancelled = true;
    };
  }, [navigate, reloadKey]);

  if (loading) {
    return <div style={styles.center}>Loading profile...</div>;
  }

  if (error) {
    return (
      <div style={styles.center}>
        <span>{error}</span>
        <button
          type="button"
          style={styles.retryButton}
          onClick={() => setReloadKey((k) => k + 1)}
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <Navbar />

      <div style={styles.card}>
        <Avatar user={user} />

        <h1 style={styles.name}>{user?.name}</h1>
        <p style={styles.email}>{user?.email}</p>

        <div style={styles.menuWrap}>
          <MenuItem icon="📦" title="My Orders" onClick={() => navigate("/orders")} />
          <MenuItem icon="❤️" title="Wishlist" onClick={() => navigate("/wishlist")} />
          <MenuItem icon="📍" title="Saved Address" onClick={() => navigate("/address")} />
          <MenuItem icon="⚙" title="Edit Profile" onClick={() => navigate("/edit-profile")} />
          <MenuItem icon="🚪" title="Logout" onClick={handleLogout} danger />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;