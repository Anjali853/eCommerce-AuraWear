import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import {getWishlist,addToWishlist,removeFromWishlist,} from "../services/wishlistService";
import {addToCart,getCart,} from "../services/cartService";

const moods = ["Party 🎉", "Casual 😎", "Office 💼", "Gym 💪", "Date ❤️", "Wedding 👑"];


const TrendingFits = () => {
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [activeMood, setActiveMood] = useState(null);



 useEffect(() => {
  fetchProducts();
  fetchWishlist();
  fetchCart();
}, []);

const fetchProducts = async () => {
  try {
    const data = await getProducts();

    console.log("API Response:", data);

    setProducts(data.products);
  } catch (err) {
    console.log(err);

    setError("Failed to load products");
  } finally {
    setLoading(false);
  }
};

// Wishlist Functions
const fetchWishlist = async () => {
  try {
    const data = await getWishlist();

    const ids = data.wishlist.products.map(
      (item) => item.productId._id
    );

    setWishlist(ids);

  } catch (err) {
    console.log(err);
  }
};



const fetchCart = async () => {
  try {
    const data = await getCart();

    const ids = data.cart.products.map(
      (item) => item.productId._id
    );

    setCart(ids);

  } catch (error) {
    console.log(error);
  }
};



//abiii addd

if (loading) {
  return (
    <h2
      style={{
        color: "white",
        textAlign: "center",
        padding: "100px",
      }}
    >
      Loading Products...
    </h2>
  );
}

if (error) {
  return (
    <h2
      style={{
        color: "red",
        textAlign: "center",
        padding: "100px",
      }}
    >
      {error}
    </h2>
  );
}

  // const toggleWishlist = (index) => {
  //   setWishlist((prev) =>
  //     prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
  //   );
  // };

const toggleWishlist = async (productId) => {
  try {

    if (wishlist.includes(productId)) {

      await removeFromWishlist(productId);

      setWishlist((prev) =>
        prev.filter((id) => id !== productId)
      );

    } else {

      await addToWishlist(productId);

      setWishlist((prev) => [
        ...prev,
        productId,
      ]);

    }

  } catch (error) {

    console.log(error);

  }
};


  const toggleCart = async (productId) => {
  try {

    await addToCart(productId);

    if (!cart.includes(productId)) {
      setCart((prev) => [...prev, productId]);
    }

    alert("Added to Cart 🛒");

  } catch (error) {
    console.log(error);
  }
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
          const inWishlist = wishlist.includes(product._id);
          const inCart = cart.includes(product._id);

          return (
            <div
              key={product._id}
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
                  src={product.image ||"https://via.placeholder.com/400x500?text=AuraWear"}
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
                  onClick={() => toggleWishlist(product._id)}
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
                    ₹{product.price}
                  </p>
                  <span style={{ fontSize: "13px", color: "#facc15", fontWeight: 600 }}>
                    ⭐ {product.rating || 4.8}
                  </span>
                </div>

                <button
                  onClick={() => toggleCart(product._id)}
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
