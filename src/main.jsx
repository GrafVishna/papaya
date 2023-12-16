import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import "./index.scss";

import { BrowserRouter, Outlet } from "react-router-dom";
import { ModalProvider } from "./providers/ModalProvider.jsx";
import { Provider } from "react-redux";
import { store } from "./store/index.js";
import "./firebase";
import { AuthProvider } from "./providers/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <AuthProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </AuthProvider>
    </Provider>
  </BrowserRouter>,
);
