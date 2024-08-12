import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
//   <App />
    <RouterProvider router={router} />
);
