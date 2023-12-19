import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ModalProvider } from "./providers/ModalProvider.jsx";
import { AuthProvider } from "./providers/AuthProvider.jsx";
import App from "./components/App.jsx";
import "./firebase";
import "./index.scss";
import { AuthProviderSetUser } from "./providers/AuthProviderSetUser.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <AuthProviderSetUser>
      <BrowserRouter>
        <ModalProvider>
          <App />
        </ModalProvider>
      </BrowserRouter>
    </AuthProviderSetUser>
  </AuthProvider>,
);
