import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "./styles/global.scss";
import Router from "./pages/router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ToastContainer
      position="top-right"
      autoClose={false}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
    <Router />
  </React.StrictMode>
);
