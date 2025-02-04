import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { CartProvider } from "../contexts/cart"
import CartPage from "./Cart"
import { AppRouter } from "../AppRouter"
import { UserProvider } from "../contexts/user"

describe("<CartPage />", () => {
  it("Should render", () => {
    render(
      <UserProvider>
        <CartProvider>
          <AppRouter>
            <CartPage />
          </AppRouter>
        </CartProvider>
      </UserProvider>,
    )
    // screen.debug()
  })
})
