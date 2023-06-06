import React from "react";
import ReactDOM from "react-dom/client";

// Components
import Status from "./status";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <App />
    <Status />
  </React.Fragment>
);