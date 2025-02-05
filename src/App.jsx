import { AppRouter } from "./AppRouter"
import { CartProvider } from "./contexts/cart"
import { FiltersProvider } from "./contexts/filters"
import { UserProvider } from "./contexts/user"

function App() {
  return (
    <UserProvider>
      <FiltersProvider>
        <CartProvider>
          <AppRouter />
        </CartProvider>
      </FiltersProvider>
    </UserProvider>
  )
}

export default App
