import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { AppRouter } from "./AppRouter"
import { CartProvider } from "./contexts/cart"
import { FiltersProvider } from "./contexts/filters"
import { UserProvider } from "./contexts/user"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <FiltersProvider>
          <CartProvider>
            <AppRouter />
          </CartProvider>
        </FiltersProvider>
      </UserProvider>
    </QueryClientProvider>
  )
}

export default App
