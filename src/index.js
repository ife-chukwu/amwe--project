import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { HashRouter } from "react-router-dom";
import { ContextApi } from "./ContextApi";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <ContextApi>
    <HashRouter>
      <App />
    </HashRouter>
  </ContextApi>
  </React.StrictMode>
);
