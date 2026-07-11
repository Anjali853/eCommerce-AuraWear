import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import {
  getCart,
  removeFromCart,
  updateQuantity,
} from "../services/cartService";

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
  try {
    const data = await getCart();

    console.log(data.cart.products);

    setCart(data.cart.products);
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};

  const increaseQuantity = async (productId, quantity) => {
    await updateQuantity(productId, quantity + 1);
    fetchCart();
  };

  const decreaseQuantity = async (productId, quantity) => {
    if (quantity <= 1) return;

    await updateQuantity(productId, quantity - 1);
    fetchCart();
  };

  const removeItem = async (productId) => {
    await removeFromCart(productId);
    fetchCart();
  };

  const total = cart.reduce(
    (sum, item) => sum + item.productId.price * item.quantity,
    0
  );

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
          fontSize: "24px",
        }}
      >
        Loading Cart...
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
          maxWidth: "1200px",
          margin: "40px auto",
          padding: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "40px",
            marginBottom: "30px",
          }}
        >
          🛒 My Cart
        </h1>

        {cart.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              marginTop: "100px",
              fontSize: "24px",
            }}
          >
            Your Cart is Empty 😔
          </div>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={item.productId._id}
                style={{
                  display: "flex",
                  gap: "25px",
                  alignItems: "center",
                  background: "#111",
                  padding: "20px",
                  borderRadius: "20px",
                  marginBottom: "20px",
                }}
              >
                <img
                  src={item.productId.image}
                  alt={item.productId.name}
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "15px",
                  }}
                />

                <div style={{ flex: 1 }}>
                  <h2>{item.productId.name}</h2>

                  <p
                    style={{
                      color: "#bbb",
                      marginTop: "10px",
                    }}
                  >
                    {item.productId.description}
                  </p>

                  <h3
                    style={{
                      color: "#A855F7",
                      marginTop: "15px",
                    }}
                  >
                    ₹ {item.productId.price}
                  </h3>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <button
                    onClick={() =>
                      decreaseQuantity(
                        item.productId._id,
                        item.quantity
                      )
                    }
                  >
                    -
                  </button>

                  <h3>{item.quantity}</h3>

                  <button
                    onClick={() =>
                      increaseQuantity(
                        item.productId._id,
                        item.quantity
                      )
                    }
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() =>
                    removeItem(item.productId._id)
                  }
                  style={{
                    background: "#ff4d4d",
                    border: "none",
                    color: "white",
                    padding: "10px 18px",
                    borderRadius: "10px",
                    cursor: "pointer",
                  }}
                >
                  Remove
                </button>
              </div>
            ))}

            <div
              style={{
                marginTop: "40px",
                textAlign: "right",
              }}
            >
              <h2>
                Grand Total : ₹ {total}
              </h2>

              <button
                style={{
                  marginTop: "20px",
                  padding: "15px 35px",
                  border: "none",
                  borderRadius: "30px",
                  cursor: "pointer",
                  color: "white",
                  fontWeight: "bold",
                  background:
                    "linear-gradient(90deg,#A855F7,#EC4899)",
                }}
              >
                Proceed To Checkout →
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;