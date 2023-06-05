import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./custom.css";
import Status from "./status";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Status />
  </React.StrictMode>
);