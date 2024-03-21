import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import {KioskProvider} from "./context/KioskProvider";
import Router from "./router";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <KioskProvider>
    <RouterProvider router={Router} />
    </KioskProvider>
  </React.StrictMode>
);
