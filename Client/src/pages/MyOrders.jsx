import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getMyOrders } from "../services/orderService";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const data = await getMyOrders();
      setOrders(data.orders);
    } catch (error) {
      console.log(error);
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

        {orders.length === 0 ? (
          <h2>No Orders Yet</h2>
        ) : (
          orders.map((order) => (
            <div
              key={order._id}
              style={{
                background: "#111",
                padding: "20px",
                borderRadius: "20px",
                marginBottom: "20px",
              }}
            >
              <h3>Order ID</h3>

              <p>{order._id}</p>

              <h4
                style={{
                  marginTop: "15px",
                }}
              >
                Status :
                <span
                  style={{
                    color: "#22c55e",
                  }}
                >
                  {" "}
                  {order.orderStatus}
                </span>
              </h4>

              <h4
                style={{
                  marginTop: "10px",
                }}
              >
                Payment :
                {" "}
                {order.paymentMethod}
              </h4>

              <h3
                style={{
                  marginTop: "15px",
                  color: "#A855F7",
                }}
              >
                ₹ {order.totalPrice}
              </h3>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyOrders;