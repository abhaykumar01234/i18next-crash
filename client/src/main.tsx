import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Login from "./Login.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import "./i18n.ts";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/login", element: <Login /> },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.Suspense fallback="loading">
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </React.Suspense>
);
