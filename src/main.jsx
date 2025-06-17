import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
      <ThemeProvider>
    <App />
       </ThemeProvider>
  </HashRouter>
);
