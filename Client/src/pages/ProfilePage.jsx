import Navbar from "../components/Navbar";

const ProfilePage = () => {
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
          A
        </div>

        <h1
          style={{
            marginTop: "20px",
          }}
        >
          Anjali Choudhary
        </h1>

        <p
          style={{
            color: "#aaa",
          }}
        >
          anjali@gmail.com
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
          {menu("🚪", "Logout")}
        </div>
      </div>
    </div>
  );
};

const menu = (icon, title) => (
  <div
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
    <span
      style={{
        fontSize: "18px",
      }}
    >
      {icon} {title}
    </span>

    <span>➜</span>
  </div>
);

export default ProfilePage;