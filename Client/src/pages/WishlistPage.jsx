import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import {
  getWishlist,
  removeFromWishlist,
} from "../services/wishlistService";

const WishlistPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWishlist();
  }, []);

  const fetchWishlist = async () => {
    try {
      const data = await getWishlist();

      setProducts(
        data.wishlist?.products?.map((item) => item.productId) || []
      );
    } catch (error) {
      console.error("Error fetching wishlist:", error);

      // Wishlist empty hone par backend 404 de raha hai
      if (error.response?.status === 404) {
        setProducts([]);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleRemove = async (productId) => {
    try {
      await removeFromWishlist(productId);

      setProducts((prevProducts) =>
        prevProducts.filter(
          (product) => product._id !== productId
        )
      );
    } catch (error) {
      console.error("Error removing wishlist product:", error);

      alert(
        error.response?.data?.message ||
          "Failed to remove product"
      );
    }
  };

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
        }}
      >
        <h1 style={{ marginBottom: "30px" }}>
          ❤️ My Wishlist
        </h1>

        {loading ? (
          <h2>Loading wishlist...</h2>
        ) : products.length === 0 ? (
          <div
            style={{
              background: "#111",
              padding: "50px",
              borderRadius: "20px",
              textAlign: "center",
            }}
          >
            <h2>Your Wishlist is Empty 💔</h2>

            <p
              style={{
                color: "#aaa",
                marginTop: "10px",
              }}
            >
              Add products you love to your wishlist.
            </p>
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fill, minmax(240px, 1fr))",
              gap: "25px",
            }}
          >
            {products.map((product) => (
              <div
                key={product._id}
                style={{
                  background: "#111",
                  borderRadius: "20px",
                  overflow: "hidden",
                  border: "1px solid #222",
                }}
              >
                {/* Product Image */}
                {product.image && (
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{
                      width: "100%",
                      height: "280px",
                      objectFit: "cover",
                    }}
                  />
                )}

                <div style={{ padding: "20px" }}>
                  <h3>{product.name}</h3>

                  <p
                    style={{
                      color: "#A855F7",
                      fontSize: "20px",
                      fontWeight: "bold",
                      marginTop: "10px",
                    }}
                  >
                    ₹ {product.price}
                  </p>

                  <button
                    onClick={() =>
                      handleRemove(product._id)
                    }
                    style={{
                      width: "100%",
                      marginTop: "15px",
                      padding: "12px",
                      border: "none",
                      borderRadius: "25px",
                      background:
                        "linear-gradient(90deg,#A855F7,#EC4899)",
                      color: "#fff",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    ❤️ Remove from Wishlist
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;