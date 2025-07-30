import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppLayout from "./App.jsx";

// -------------------------------------
import { RouterProvider } from "react-router-dom";
import appRouter from "./router/router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <AppLayout /> */}
    <RouterProvider router={appRouter} />
  </StrictMode>
);
