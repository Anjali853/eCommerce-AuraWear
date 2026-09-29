import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById, getProducts } from "../services/productService";
import { addToCart } from "../services/cartService";
import {
  getWishlist,
  addToWishlist,
  removeFromWishlist,
} from "../services/wishlistService";

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [loading, setLoading] = useState(true);

  const sizes = ["XS", "S", "M", "L", "XL"];

  useEffect(() => {
  fetchProduct();
  fetchWishlist();
}, [productId]);

const fetchProduct = async () => {
  try {
    // Get the exact product
    const productData = await getProductById(productId);

    setProduct(productData);

    // Get products for "You might also like"
    const data = await getProducts();

    const allProducts = data.products || [];

    const similar = allProducts
      .filter(
        (item) =>
          item.category === productData.category &&
          item._id !== productData._id
      )
      .slice(0, 4);

    setSimilarProducts(similar);
  } catch (error) {
    console.error("Error fetching product:", error);
    setProduct(null);
  } finally {
    setLoading(false);
  }
};

  const fetchWishlist = async () => {
    try {
      const data = await getWishlist();

      const ids =
        data.wishlist?.products?.map(
          (item) => item.productId._id
        ) || [];

      setWishlist(ids);
    } catch (error) {
      console.log(error);
    }
  };

  const handleWishlist = async () => {
    try {
      if (wishlist.includes(product._id)) {
        await removeFromWishlist(product._id);

        setWishlist((prev) =>
          prev.filter((item) => item !== product._id)
        );
      } else {
        await addToWishlist(product._id);

        setWishlist((prev) => [...prev, product._id]);
      }
    } catch (error) {
      console.error("Wishlist error:", error);
    }
  };

  const handleAddToCart = async () => {
    try {
      for (let i = 0; i < quantity; i++) {
        await addToCart(product._id);
      }

      alert("Added to Bag 🛍️");
    } catch (error) {
      console.error("Add to cart error:", error);
      alert(
        error.response?.data?.message ||
          "Unable to add product to cart"
      );
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
          alignItems: "center",
          justifyContent: "center",
          fontSize: "20px",
        }}
      >
        Loading your fit...
      </div>
    );
  }

  if (!product) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#07070A",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <h2>Product not found 😭</h2>

        <button
          onClick={() => navigate("/")}
          style={{
            padding: "12px 24px",
            border: "none",
            borderRadius: "999px",
            background:
              "linear-gradient(135deg,#a855f7,#ec4899)",
            color: "white",
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          Back to Shopping
        </button>
      </div>
    );
  }

  const inWishlist = wishlist.includes(product._id);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#07070A",
        color: "#fff",
        fontFamily: "sans-serif",
        paddingBottom: "80px",
      }}
    >
      {/* Back Button */}

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "30px 24px 10px",
        }}
      >
        <button
          onClick={() => navigate(-1)}
          style={{
            background: "transparent",
            border: "none",
            color: "rgba(255,255,255,0.65)",
            cursor: "pointer",
            fontSize: "15px",
          }}
        >
          ← Back
        </button>
      </div>

      {/* Product */}

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "20px 24px",
          display: "grid",
          gridTemplateColumns: "minmax(300px, 1fr) minmax(300px, 0.9fr)",
          gap: "60px",
          alignItems: "center",
        }}
      >
        {/* Image */}

        <div
          style={{
            position: "relative",
            borderRadius: "30px",
            overflow: "hidden",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "100%",
              height: "650px",
              objectFit: "cover",
              display: "block",
            }}
          />

          <button
            onClick={handleWishlist}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              width: "52px",
              height: "52px",
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.2)",
              background: "rgba(0,0,0,0.55)",
              color: "white",
              fontSize: "23px",
              cursor: "pointer",
              backdropFilter: "blur(10px)",
            }}
          >
            {inWishlist ? "❤️" : "🤍"}
          </button>
        </div>

        {/* Details */}

        <div>
          <p
            style={{
              color: "#c084fc",
              fontSize: "12px",
              fontWeight: 800,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            {product.category}
          </p>

          <h1
            style={{
              fontSize: "clamp(36px, 5vw, 62px)",
              lineHeight: 1.05,
              margin: "12px 0 18px",
              fontWeight: 900,
            }}
          >
            {product.name}
          </h1>

          <div
            style={{
              display: "flex",
              gap: "14px",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <span style={{ color: "#facc15", fontWeight: 700 }}>
              ⭐ {product.rating || 4.8}
            </span>

            <span style={{ color: "rgba(255,255,255,0.45)" }}>
              ({product.numReviews || 0} reviews)
            </span>
          </div>

          <div
            style={{
              fontSize: "32px",
              fontWeight: 900,
              marginBottom: "24px",
              background:
                "linear-gradient(90deg,#a855f7,#ec4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            ₹{product.price}
          </div>

          <p
            style={{
              color: "rgba(255,255,255,0.62)",
              lineHeight: 1.8,
              fontSize: "16px",
              marginBottom: "30px",
            }}
          >
            {product.description}
          </p>

          {/* Size */}

          <div style={{ marginBottom: "28px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "12px",
              }}
            >
              <strong>Select Size</strong>

              <span
                style={{
                  color: "#c084fc",
                  fontSize: "13px",
                }}
              >
                Size Guide
              </span>
            </div>

            <div
              style={{
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
              }}
            >
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  style={{
                    width: "54px",
                    height: "48px",
                    borderRadius: "12px",
                    border:
                      selectedSize === size
                        ? "2px solid #ec4899"
                        : "1px solid rgba(255,255,255,0.15)",
                    background:
                      selectedSize === size
                        ? "rgba(236,72,153,0.15)"
                        : "rgba(255,255,255,0.04)",
                    color: "white",
                    cursor: "pointer",
                    fontWeight: 700,
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}

          <div style={{ marginBottom: "28px" }}>
            <strong
              style={{
                display: "block",
                marginBottom: "12px",
              }}
            >
              Quantity
            </strong>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "140px",
                justifyContent: "space-between",
                border:
                  "1px solid rgba(255,255,255,0.15)",
                borderRadius: "12px",
                padding: "6px",
              }}
            >
              <button
                onClick={() =>
                  setQuantity((q) => Math.max(1, q - 1))
                }
                style={quantityButtonStyle}
              >
                −
              </button>

              <span style={{ fontWeight: 800 }}>
                {quantity}
              </span>

              <button
                onClick={() =>
                  setQuantity((q) =>
                    Math.min(product.stock, q + 1)
                  )
                }
                style={quantityButtonStyle}
              >
                +
              </button>
            </div>
          </div>

          {/* Stock */}

          <p
            style={{
              color:
                product.stock > 5
                  ? "#4ade80"
                  : "#fb7185",
              fontSize: "14px",
              marginBottom: "18px",
            }}
          >
            {product.stock > 5
              ? `✓ ${product.stock} pieces available`
              : `Only ${product.stock} left — grab it!`}
          </p>

          {/* Add to Bag */}

          <button
            onClick={handleAddToCart}
            style={{
              width: "100%",
              padding: "17px",
              border: "none",
              borderRadius: "999px",
              background:
                "linear-gradient(135deg,#a855f7,#ec4899)",
              color: "white",
              fontSize: "16px",
              fontWeight: 800,
              cursor: "pointer",
              boxShadow:
                "0 0 30px rgba(168,85,247,0.35)",
            }}
          >
            Add to Bag 🛍️
          </button>
        </div>
      </div>

      {/* Similar Products */}

      {similarProducts.length > 0 && (
        <section
          style={{
            maxWidth: "1200px",
            margin: "80px auto 0",
            padding: "0 24px",
          }}
        >
          <p
            style={{
              color: "#c084fc",
              fontSize: "12px",
              fontWeight: 800,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Complete the vibe
          </p>

          <h2
            style={{
              fontSize: "38px",
              fontWeight: 900,
              margin: "8px 0 28px",
            }}
          >
            You might also like ✨
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(220px,1fr))",
              gap: "20px",
            }}
          >
            {similarProducts.map((item) => (
              <div
                key={item._id}
                onClick={() => navigate(`/product/${item._id}`)}
                style={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  background: "rgba(255,255,255,0.04)",
                  border:
                    "1px solid rgba(255,255,255,0.08)",
                  cursor: "pointer",
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "100%",
                    height: "280px",
                    objectFit: "cover",
                  }}
                />

                <div style={{ padding: "16px" }}>
                  <h3
                    style={{
                      fontSize: "16px",
                      marginBottom: "8px",
                    }}
                  >
                    {item.name}
                  </h3>

                  <strong>₹{item.price}</strong>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

const quantityButtonStyle = {
  width: "36px",
  height: "36px",
  border: "none",
  borderRadius: "8px",
  background: "rgba(255,255,255,0.08)",
  color: "white",
  fontSize: "20px",
  cursor: "pointer",
};

export default ProductDetail;