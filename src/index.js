import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { UserProvider } from "./context/user.context.jsx";
import { CategoriesProvider } from "./context/categories.context.jsx";
import { CartProvider } from "./context/cart.context.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserProvider>
    <CategoriesProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </CategoriesProvider>
  </UserProvider>
);
