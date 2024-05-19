import "./index.css";

import React from "react";

import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import AppProvider from "./context/AppProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  (
    <BrowserRouter basename="/web">
      <AppProvider>
        <App />
        <Toaster />
      </AppProvider>
    </BrowserRouter>
  ) as React.ReactNode
);
