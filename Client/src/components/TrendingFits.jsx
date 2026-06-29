import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";

// const products = [
//   {
//     name: "Cyber Glitch Jacket",
//     price: "₹2,999",
//     rating: "4.8",
//     mood: "Party",
//     image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&q=80",
//   },
//   {
//     name: "Neon Street Hoodie",
//     price: "₹1,999",
//     rating: "4.8",
//     mood: "Casual",
//     image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
//   },
//   {
//     name: "Aura Black Tee",
//     price: "₹999",
//     rating: "4.8",
//     mood: "Office",
//     image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80",
//   },
//   {
//     name: "Tokyo Future Fit",
//     price: "₹3,499",
//     rating: "4.8",
//     mood: "Date",
//     image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80",
//   },
// ];

const moods = ["Party 🎉", "Casual 😎", "Office 💼", "Gym 💪", "Date ❤️", "Wedding 👑"];




const TrendingFits = () => {
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [activeMood, setActiveMood] = useState(null);

  const toggleWishlist = (index) => {
    setWishlist((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const toggleCart = (index) => {
    setCart((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  
  return (
    <section
      style={{
        width: "100%",
        padding: "80px 0",
        background: "#07070A",
        fontFamily: "sans-serif",
      }}
    >
      {/* Section Header */}
      <div style={{ textAlign: "center", marginBottom: "2.5rem", padding: "0 1.5rem" }}>
        <p
          style={{
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "0.75rem",
            background: "linear-gradient(90deg, #a855f7, #ec4899)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Shop By Mood
        </p>
        <h2
          style={{
            fontSize: "clamp(36px, 6vw, 56px)",
            fontWeight: 900,
            color: "#ffffff",
            lineHeight: 1.1,
            marginBottom: "0.75rem",
          }}
        >
          Trending Fits
        </h2>
        <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.45)" }}>
          Discover the most loved styles on AuraWear
        </p>
      </div>

      {/* Mood Filter Pills
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "10px",
          marginBottom: "3rem",
          padding: "0 1.5rem",
        }}
      >
        {moods.map((mood) => {
          const isActive = activeMood === mood;
          return (
            <button
              key={mood}
              onClick={() => setActiveMood(isActive ? null : mood)}
              style={{
                fontSize: "13px",
                fontWeight: 600,
                padding: "9px 22px",
                borderRadius: "999px",
                cursor: "pointer",
                fontFamily: "sans-serif",
                transition: "all 0.2s",
                background: isActive
                  ? "linear-gradient(135deg, #a855f7, #ec4899)"
                  : "rgba(255,255,255,0.06)",
                color: isActive ? "#ffffff" : "rgba(255,255,255,0.65)",
                border: isActive
                  ? "1.5px solid transparent"
                  : "1.5px solid rgba(255,255,255,0.12)",
                boxShadow: isActive ? "0 0 20px rgba(168,85,247,0.4)" : "none",
              }}
            >
              {mood}
            </button>
          );
        })}
      </div> */}

      {/* Product Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "24px",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 2rem",
        }}
      >
        {products.map((product, index) => {
          const inWishlist = wishlist.includes(index);
          const inCart = cart.includes(index);

          return (
            <div
              key={index}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.10)",
                borderRadius: "24px",
                overflow: "hidden",
                transition: "transform 0.25s, border-color 0.25s, box-shadow 0.25s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px) scale(1.02)";
                e.currentTarget.style.borderColor = "rgba(168,85,247,0.6)";
                e.currentTarget.style.boxShadow = "0 0 32px rgba(168,85,247,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Image */}
              <div style={{ position: "relative" }}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />

                {/* Gradient overlay on image bottom */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "80px",
                    background: "linear-gradient(to top, rgba(7,7,10,0.85), transparent)",
                  }}
                />

                {/* Trending Badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "14px",
                    left: "14px",
                    padding: "4px 12px",
                    borderRadius: "999px",
                    background: "linear-gradient(135deg, #ec4899, #a855f7)",
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "#ffffff",
                    letterSpacing: "0.05em",
                  }}
                >
                  Trending
                </div>

                {/* Wishlist Button */}
                <button
                  onClick={() => toggleWishlist(index)}
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    width: "42px",
                    height: "42px",
                    borderRadius: "50%",
                    background: "rgba(0,0,0,0.55)",
                    border: inWishlist
                      ? "1.5px solid rgba(236,72,153,0.7)"
                      : "1.5px solid rgba(255,255,255,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    fontSize: "18px",
                    transition: "all 0.2s",
                    backdropFilter: "blur(8px)",
                  }}
                  title={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
                >
                  {inWishlist ? "❤️" : "🤍"}
                </button>
              </div>

              {/* Product Info */}
              <div style={{ padding: "18px 20px 20px" }}>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#ffffff",
                    marginBottom: "10px",
                    lineHeight: 1.3,
                  }}
                >
                  {product.name}
                </h3>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "16px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "18px",
                      fontWeight: 800,
                      background: "linear-gradient(90deg, #a855f7, #ec4899)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {product.price}
                  </p>
                  <span style={{ fontSize: "13px", color: "#facc15", fontWeight: 600 }}>
                    ⭐ {product.rating}
                  </span>
                </div>

                <button
                  onClick={() => toggleCart(index)}
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: "999px",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: 700,
                    fontFamily: "sans-serif",
                    transition: "all 0.2s",
                    background: inCart
                      ? "rgba(168,85,247,0.15)"
                      : "linear-gradient(135deg, #a855f7, #ec4899)",
                    color: inCart ? "#c084fc" : "#ffffff",
                    border: inCart ? "1.5px solid rgba(168,85,247,0.4)" : "none",
                    boxShadow: inCart ? "none" : "0 0 20px rgba(168,85,247,0.35)",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.85"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
                >
                  {inCart ? "✓ Added to Cart" : "Add To Cart"}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Cart summary pill */}
      {cart.length > 0 && (
        <div
          style={{
            position: "fixed",
            bottom: "28px",
            right: "28px",
            background: "linear-gradient(135deg, #a855f7, #ec4899)",
            color: "#ffffff",
            padding: "12px 24px",
            borderRadius: "999px",
            fontSize: "14px",
            fontWeight: 700,
            fontFamily: "sans-serif",
            boxShadow: "0 0 30px rgba(168,85,247,0.5)",
            zIndex: 999,
            cursor: "pointer",
          }}
        >
          🛒 {cart.length} item{cart.length > 1 ? "s" : ""} in cart
        </div>
      )}
    </section>









  );
};

export default TrendingFits;
