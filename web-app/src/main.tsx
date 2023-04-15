import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import CoinContext from "./coinContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CoinContext>
      <App />
    </CoinContext>
  </React.StrictMode>
);
