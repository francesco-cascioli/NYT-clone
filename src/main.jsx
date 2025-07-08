import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
      <ThemeProvider>
    <App />
     <ToastContainer position="bottom-right" autoClose={2000} />
       </ThemeProvider>
  </HashRouter>
);
