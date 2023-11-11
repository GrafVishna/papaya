import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import "./index.scss";

import { BrowserRouter, Outlet } from "react-router-dom";
import PageWrapper from "./components/Wrappers/PageWrapper.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PageWrapper>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PageWrapper>
  </React.StrictMode>,
);
