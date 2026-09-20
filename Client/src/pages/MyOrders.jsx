import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getMyOrders } from "../services/orderService";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const data = await getMyOrders();
      setOrders(data.orders || []);
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  };

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
          maxWidth: "1100px",
          margin: "40px auto",
          padding: "20px",
        }}
      >
        <h1 style={{ marginBottom: "30px" }}>
          📦 My Orders
        </h1>

        {loading ? (
          <h2>Loading orders...</h2>
        ) : orders.length === 0 ? (
          <div
            style={{
              background: "#111",
              padding: "40px",
              borderRadius: "20px",
              textAlign: "center",
            }}
          >
            <h2>No Orders Yet</h2>
            <p style={{ color: "#aaa" }}>
              Your placed orders will appear here.
            </p>
          </div>
        ) : (
          orders.map((order) => (
            <div
              key={order._id}
              style={{
                background: "#111",
                padding: "25px",
                borderRadius: "20px",
                marginBottom: "25px",
                border: "1px solid #222",
              }}
            >
              {/* Order Header */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "10px",
                }}
              >
                <div>
                  <h3>Order ID</h3>

                  <p
                    style={{
                      color: "#aaa",
                      fontSize: "14px",
                    }}
                  >
                    {order._id}
                  </p>
                </div>

                <div
                  style={{
                    background: "#22c55e",
                    color: "black",
                    padding: "8px 15px",
                    borderRadius: "20px",
                    fontWeight: "bold",
                  }}
                >
                  {order.orderStatus}
                </div>
              </div>

              {/* Order Date */}
              <p
                style={{
                  color: "#aaa",
                  marginTop: "10px",
                }}
              >
                Ordered on:{" "}
                {new Date(order.createdAt).toLocaleDateString()}
              </p>

              {/* Products */}
              <div style={{ marginTop: "20px" }}>
                <h3>Items</h3>

                {order.orderItems?.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                      padding: "15px 0",
                      borderBottom: "1px solid #222",
                    }}
                  >
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{
                          width: "70px",
                          height: "70px",
                          objectFit: "cover",
                          borderRadius: "10px",
                        }}
                      />
                    )}

                    <div style={{ flex: 1 }}>
                      <h4>{item.name}</h4>

                      <p
                        style={{
                          color: "#aaa",
                          marginTop: "5px",
                        }}
                      >
                        ₹ {item.price} × {item.quantity}
                      </p>
                    </div>

                    <strong>
                      ₹ {item.price * item.quantity}
                    </strong>
                  </div>
                ))}
              </div>

              {/* Shipping Address */}
              <div style={{ marginTop: "20px" }}>
                <h3>Shipping Address</h3>

                <p
                  style={{
                    color: "#aaa",
                    lineHeight: "1.6",
                  }}
                >
                  {order.shippingAddress?.fullName}
                  <br />
                  {order.shippingAddress?.address}
                  <br />
                  {order.shippingAddress?.city},{" "}
                  {order.shippingAddress?.state}
                  <br />
                  PIN: {order.shippingAddress?.pincode}
                  <br />
                  Phone: {order.shippingAddress?.phone}
                </p>
              </div>

              {/* Payment + Total */}
              <div
                style={{
                  marginTop: "20px",
                  paddingTop: "20px",
                  borderTop: "1px solid #333",
                }}
              >
                <h4>
                  Payment:{" "}
                  <span style={{ color: "#aaa" }}>
                    {order.paymentMethod}
                  </span>
                </h4>

                <h2
                  style={{
                    marginTop: "10px",
                    color: "#A855F7",
                  }}
                >
                  Total: ₹ {order.totalPrice}
                </h2>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyOrders;