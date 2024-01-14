import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ModalProvider } from "./providers/ModalProvider.jsx";
import { AuthProvider } from "./providers/AuthProvider.jsx";
import App from "./components/App.jsx";
import "./firebase";
import "./index.scss";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ModalProvider>
          <App />
        </ModalProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </AuthProvider>,
);
