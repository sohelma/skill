import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
  <StrictMode>
    <App />
    {/* <Toaster position="top-center" reverseOrder={false} /> */}
    </StrictMode>
  </>
);
