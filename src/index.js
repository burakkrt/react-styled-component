import React from "react";
import ReactDOM from "react-dom/client";

// Components
import Status from "./status";
import Cat from "./Cat";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Cat />
    <Status />
  </React.StrictMode>
);