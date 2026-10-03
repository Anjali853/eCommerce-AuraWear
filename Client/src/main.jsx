// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import { BrowserRouter } from "react-router-dom"
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
  
// );

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />

    <Toaster
      position="top-right"
      toastOptions={{
        duration: 2500,
        style: {
          background: "#111116",
          color: "#fff",
          border: "1px solid rgba(168,85,247,0.5)",
          borderRadius: "14px",
          boxShadow: "0 0 25px rgba(168,85,247,0.25)",
        },
      }}
    />
  </BrowserRouter>
);