// import { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import {
//   getCart,
//   removeFromCart,
//   updateQuantity,
// } from "../services/cartService";

// const CartPage = () => {
//   const [cart, setCart] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchCart();
//   }, []);

//   const fetchCart = async () => {
//   try {
//     const data = await getCart();

//     console.log(data.cart.products);

//     setCart(data.cart.products);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     setLoading(false);
//   }
// };

//   const increaseQuantity = async (productId, quantity) => {
//     await updateQuantity(productId, quantity + 1);
//     fetchCart();
//   };

//   const decreaseQuantity = async (productId, quantity) => {
//     if (quantity <= 1) return;

//     await updateQuantity(productId, quantity - 1);
//     fetchCart();
//   };

//   const removeItem = async (productId) => {
//     await removeFromCart(productId);
//     fetchCart();
//   };

//   const total = cart.reduce(
//     (sum, item) => sum + item.productId.price * item.quantity,
//     0
//   );

//   if (loading) {
//     return (
//       <div
//         style={{
//           minHeight: "100vh",
//           background: "#07070A",
//           color: "white",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           fontSize: "24px",
//         }}
//       >
//         Loading Cart...
//       </div>
//     );
//   }

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         background: "#07070A",
//         color: "white",
//       }}
//     >
//       <Navbar />

//       <div
//   style={{
//     maxWidth: "1300px",
//     margin: "40px auto",
//     padding: "20px",
//     display: "grid",
//     gridTemplateColumns: "2fr 1fr",
//     gap: "30px",
//     alignItems: "start",
//   }}
// >
//         <h1
//           style={{
//             fontSize: "40px",
//             marginBottom: "30px",
//           }}
//         >
//           🛒 My Cart
//         </h1>

//         {cart.length === 0 ? (
//           <div
//             style={{
//               textAlign: "center",
//               marginTop: "100px",
//               fontSize: "24px",
//             }}
//           >
//             Your Cart is Empty 😔
//           </div>
//         ) : (
//           <div>
//             {cart.map((item) => (
//               <div
//                 key={item.productId._id}
//                 style={{
//                  display: "flex",
//                  gap: "25px",
//                  alignItems: "center",
//                  background: "rgba(255,255,255,0.05)",
//                  border: "1px solid rgba(255,255,255,.08)",
//                  padding: "25px",
//                  borderRadius: "20px",
//                  marginBottom: "20px",
//                 }}
//               >
//                 <img
//                   src={item.productId.image}
//                   alt={item.productId.name}
//                   style={{
//                     width: "180px",
//                     height: "180px",
//                     objectFit: "cover",
//                     borderRadius: "15px",
//                   }}
//                 />

//                 <div style={{ flex: 1 }}>
//                   <h2>{item.productId.name}</h2>

//                   <p
//                     style={{
//                       color: "#bbb",
//                       marginTop: "10px",
//                     }}
//                   >
//                     {item.productId.description}
//                   </p>

//                   <h3
//                     style={{
//                       color: "#A855F7",
//                       marginTop: "15px",
//                     }}
//                   >
//                     ₹ {item.productId.price}
//                   </h3>
//                 </div>

//                 <div
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "10px",
//                   }}
//                 >
//                   <button
//                     onClick={() =>
//                       decreaseQuantity(
//                         item.productId._id,
//                         item.quantity
//                       )
//                     }
//                   >
//                     -
//                   </button>

//                   <h3>{item.quantity}</h3>

//                   <button
//                     onClick={() =>
//                       increaseQuantity(
//                         item.productId._id,
//                         item.quantity
//                       )
//                     }
//                   >
//                     +
//                   </button>
//                 </div>

//                 <button
//                   onClick={() =>
//                     removeItem(item.productId._id)
//                   }
//                   style={{
//                     background: "#ff4d4d",
//                     border: "none",
//                     color: "white",
//                     padding: "10px 18px",
//                     borderRadius: "10px",
//                     cursor: "pointer",
//                   }}
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}


//           {/* annnnnnnnnnnnn */}
//             <div
//   style={{
//     color: "#FFD700",
//     marginTop: "8px",
//   }}
// >
// ⭐⭐⭐⭐⭐
// </div>

//             <div
// style={{
// background:"#111",
// padding:"30px",
// borderRadius:"20px",
// height:"fit-content",
// position:"sticky",
// top:"120px"
// }}
// >

// <h2>Order Summary</h2>

// <hr
// style={{
// border:"1px solid rgba(255,255,255,.1)",
// margin:"20px 0"
// }}
// />

// <div
// style={{
// display:"flex",
// justifyContent:"space-between"
// }}
// >
// <span>Subtotal</span>
// <span>₹ {total}</span>
// </div>

// <div
// style={{
// display:"flex",
// justifyContent:"space-between",
// marginTop:"12px"
// }}
// >
// <span>Shipping</span>
// <span style={{color:"#22c55e"}}>FREE</span>
// </div>

// <div
// style={{
// display:"flex",
// justifyContent:"space-between",
// marginTop:"12px"
// }}
// >
// <span>GST</span>
// <span>₹ {Math.floor(total*0.05)}</span>
// </div>

// <hr
// style={{
// border:"1px solid rgba(255,255,255,.1)",
// margin:"20px 0"
// }}
// />

// <div
// style={{
// display:"flex",
// justifyContent:"space-between",
// fontSize:"22px",
// fontWeight:"bold"
// }}
// >
// <span>Total</span>

// <span>
// ₹ {total+Math.floor(total*0.05)}
// </span>

// </div>

// <button
// style={{
// width:"100%",
// marginTop:"25px",
// padding:"16px",
// border:"none",
// borderRadius:"40px",
// fontWeight:"bold",
// fontSize:"16px",
// cursor:"pointer",
// background:
// "linear-gradient(90deg,#A855F7,#EC4899)",
// color:"#fff"
// }}
// >
// Proceed To Checkout →
// </button>

// </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CartPage;





import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import {
  getCart,
  removeFromCart,
  updateQuantity,
} from "../services/cartService";

const GST_RATE = 0.18; // 18%
const FREE_SHIPPING_THRESHOLD = 2000;
const SHIPPING_FEE = 99;

const CartPage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busyId, setBusyId] = useState(null);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const data = await getCart();
      setCart(data.cart.products);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const increaseQuantity = async (productId, quantity) => {
    setBusyId(productId);
    try {
      await updateQuantity(productId, quantity + 1);
      await fetchCart();
    } finally {
      setBusyId(null);
    }
  };

  const decreaseQuantity = async (productId, quantity) => {
    if (quantity <= 1) return;
    setBusyId(productId);
    try {
      await updateQuantity(productId, quantity - 1);
      await fetchCart();
    } finally {
      setBusyId(null);
    }
  };

  const removeItem = async (productId) => {
    setBusyId(productId);
    try {
      await removeFromCart(productId);
      await fetchCart();
    } finally {
      setBusyId(null);
    }
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.productId.price * item.quantity,
    0
  );
  const gst = subtotal * GST_RATE;
  const shipping =
    cart.length === 0 || subtotal >= FREE_SHIPPING_THRESHOLD
      ? 0
      : SHIPPING_FEE;
  const grandTotal = subtotal + gst + shipping;

  const styles = {
    page: {
      minHeight: "100vh",
      background:
        "radial-gradient(1200px 600px at 10% -10%, rgba(168,85,247,0.10), transparent 60%), radial-gradient(1000px 500px at 100% 0%, rgba(236,72,153,0.08), transparent 55%), #07070A",
      color: "#F5F5F7",
      fontFamily:
        "'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif",
    },
    container: {
      maxWidth: "1300px",
      margin: "0 auto",
      padding: "40px 24px 100px",
      display: "grid",
      gridTemplateColumns: "1.7fr 1fr",
      gap: "32px",
      alignItems: "start",
    },
    heading: {
      fontSize: "34px",
      fontWeight: 700,
      marginBottom: "28px",
      letterSpacing: "-0.02em",
      gridColumn: "1 / -1",
    },
    card: {
      display: "flex",
      gap: "22px",
      alignItems: "center",
      background:
        "linear-gradient(145deg, rgba(255,255,255,0.045), rgba(255,255,255,0.02))",
      border: "1px solid rgba(255,255,255,0.08)",
      padding: "22px",
      borderRadius: "18px",
      marginBottom: "18px",
      transition: "border-color 0.2s ease, transform 0.2s ease",
    },
    img: {
      width: "150px",
      height: "150px",
      objectFit: "cover",
      borderRadius: "14px",
      border: "1px solid rgba(255,255,255,0.06)",
      flexShrink: 0,
    },
    name: {
      fontSize: "19px",
      fontWeight: 600,
      margin: 0,
    },
    desc: {
      color: "#9C9CA6",
      fontSize: "14px",
      marginTop: "8px",
      lineHeight: 1.5,
    },
    price: {
      color: "#C084FC",
      marginTop: "12px",
      fontSize: "18px",
      fontWeight: 700,
    },
    stepper: {
      display: "flex",
      alignItems: "center",
      gap: "2px",
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: "12px",
      padding: "4px",
    },
    stepBtn: (disabled) => ({
      width: "32px",
      height: "32px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "none",
      borderRadius: "9px",
      background: "transparent",
      color: disabled ? "#4A4A52" : "#F5F5F7",
      fontSize: "17px",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "background 0.15s ease",
    }),
    qty: {
      width: "34px",
      textAlign: "center",
      fontSize: "15px",
      fontWeight: 600,
    },
    removeBtn: {
      background: "rgba(255,77,77,0.1)",
      border: "1px solid rgba(255,77,77,0.35)",
      color: "#FF6B6B",
      padding: "10px 16px",
      borderRadius: "10px",
      cursor: "pointer",
      fontSize: "13px",
      fontWeight: 600,
      transition: "background 0.15s ease, color 0.15s ease",
      whiteSpace: "nowrap",
    },
    summary: {
      position: "sticky",
      top: "24px",
      background:
        "linear-gradient(160deg, rgba(255,255,255,0.05), rgba(255,255,255,0.015))",
      border: "1px solid rgba(255,255,255,0.09)",
      borderRadius: "20px",
      padding: "28px",
      boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
    },
    summaryTitle: {
      fontSize: "20px",
      fontWeight: 700,
      marginBottom: "22px",
      letterSpacing: "-0.01em",
    },
    row: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: "15px",
      color: "#B8B8C0",
      marginBottom: "14px",
    },
    rowValue: {
      color: "#F5F5F7",
      fontWeight: 500,
    },
    divider: {
      height: "1px",
      background: "rgba(255,255,255,0.09)",
      margin: "18px 0",
    },
    grandRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: "24px",
    },
    grandLabel: {
      fontSize: "16px",
      fontWeight: 600,
      color: "#F5F5F7",
    },
    grandValue: {
      fontSize: "26px",
      fontWeight: 800,
      background: "linear-gradient(90deg,#C084FC,#F472B6)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    checkoutBtn: {
      width: "100%",
      padding: "16px",
      border: "none",
      borderRadius: "14px",
      cursor: "pointer",
      color: "white",
      fontWeight: 700,
      fontSize: "15px",
      letterSpacing: "0.01em",
      background: "linear-gradient(90deg,#A855F7,#EC4899)",
      boxShadow: "0 10px 30px rgba(168,85,247,0.35)",
      transition: "transform 0.15s ease, box-shadow 0.15s ease",
    },
    shippingNote: {
      fontSize: "12px",
      color: "#7A7A82",
      marginTop: "14px",
      textAlign: "center",
      lineHeight: 1.5,
    },
    empty: {
      textAlign: "center",
      marginTop: "100px",
      fontSize: "20px",
      color: "#9C9CA6",
      gridColumn: "1 / span 1",
    },
  };

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
          fontSize: "22px",
        }}
      >
        Loading Cart...
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <Navbar />

      <div style={styles.container}>
        <h1 style={styles.heading}>🛒 My Cart</h1>

        {/* Left: Products */}
        <div>
  {cart.length === 0 ? (
<div
  style={{
    ...styles.empty,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  <h2 style={{ fontSize: "32px", marginBottom: "10px" }}>
    🛒 Your Cart is Empty
  </h2>

  <p
    style={{
      color: "#9CA3AF",
      marginBottom: "30px",
    }}
  >
    Looks like you haven't added anything yet.
  </p>

  <button
    onClick={() => navigate("/")}
    style={{
      marginTop: "10px",
      padding: "14px 35px",
      border: "none",
      borderRadius: "30px",
      background: "linear-gradient(90deg,#A855F7,#EC4899)",
      color: "#fff",
      cursor: "pointer",
      fontWeight: "bold",
      fontSize: "15px",
    }}
  >
    Continue Shopping →
  </button>
</div>
          ) : (
            cart.map((item) => {
              const isBusy = busyId === item.productId._id;
              return (
                <div key={item.productId._id} style={styles.card}>
                  <img
                    src={item.productId.image}
                    alt={item.productId.name}
                    style={styles.img}
                  />

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h2 style={styles.name}>{item.productId.name}</h2>
                    <p style={styles.desc}>{item.productId.description}</p>
                    <h3 style={styles.price}>₹ {item.productId.price}</h3>
                  </div>

                  <div style={styles.stepper}>
                    <button
                      disabled={isBusy || item.quantity <= 1}
                      style={styles.stepBtn(isBusy || item.quantity <= 1)}
                      onClick={() =>
                        decreaseQuantity(item.productId._id, item.quantity)
                      }
                    >
                      −
                    </button>
                    <span style={styles.qty}>{item.quantity}</span>
                    <button
                      disabled={isBusy}
                      style={styles.stepBtn(isBusy)}
                      onClick={() =>
                        increaseQuantity(item.productId._id, item.quantity)
                      }
                    >
                      +
                    </button>
                  </div>

                  <button
                    disabled={isBusy}
                    style={{
                      ...styles.removeBtn,
                      opacity: isBusy ? 0.5 : 1,
                      cursor: isBusy ? "not-allowed" : "pointer",
                    }}
                    onClick={() => removeItem(item.productId._id)}
                  >
                    🗑 Remove
                  </button>
                </div>
              );
            })
          )}
        </div>

        

        {/* Right: Sticky Order Summary */}
        {cart.length > 0 && (
          <div style={styles.summary}>
            <h3 style={styles.summaryTitle}>Order Summary</h3>

            <div style={styles.row}>
              <span>Subtotal</span>
              <span style={styles.rowValue}>₹ {subtotal.toFixed(2)}</span>
            </div>
            <div style={styles.row}>
              <span>GST (18%)</span>
              <span style={styles.rowValue}>₹ {gst.toFixed(2)}</span>
            </div>
            <div style={styles.row}>
              <span>Shipping</span>
              <span style={styles.rowValue}>
                {shipping === 0 ? "Free" : `₹ ${shipping.toFixed(2)}`}
              </span>
            </div>

            <div style={styles.divider} />

            <div style={styles.grandRow}>
              <span style={styles.grandLabel}>Grand Total</span>
              <span style={styles.grandValue}>
                ₹ {grandTotal.toFixed(2)}
              </span>
            </div>

{/* kuch to chang kiya hai */}
           <button
  style={styles.checkoutBtn}
  onClick={() => navigate("/checkout")}
>
  Proceed To Checkout →
</button>
            {shipping > 0 && (
              <p style={styles.shippingNote}>
                Add items worth ₹{(FREE_SHIPPING_THRESHOLD - subtotal).toFixed(2)} more for free shipping
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
