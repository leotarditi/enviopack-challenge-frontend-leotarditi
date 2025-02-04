import { describe, it, expect } from "vitest"
import { render } from "@testing-library/react"
import { Cart } from "./Cart"
import { CartProvider } from "../../contexts/cart"
import { AppRouter } from "../../AppRouter"
import { UserProvider } from "../../contexts/user"

describe("<Cart />", () => {
  it("Should render", () => {
    render(
      <UserProvider>
        <CartProvider>
          <AppRouter>
            <Cart />
          </AppRouter>
        </CartProvider>
      </UserProvider>,
    )
  })
})
