import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { StrictMode } from "react"
import { CartProvider } from "./contexts/cart.jsx"
import { FiltersProvider } from "./contexts/filters.jsx"
import { UserProvider } from "./contexts/user.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <FiltersProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FiltersProvider>
    </UserProvider>
  </StrictMode>,
)
