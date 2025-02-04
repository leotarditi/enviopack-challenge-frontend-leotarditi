import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { CartProvider } from "../contexts/cart"
import HomePage from "./Home"
import { AppRouter } from "../AppRouter"
import { UserProvider } from "../contexts/user"

describe("<HomePage />", () => {
  it("Should render", () => {
    render(
      <UserProvider>
        <CartProvider>
          <AppRouter>
            <HomePage />
          </AppRouter>
        </CartProvider>
      </UserProvider>,
    )
    // screen.debug()
  })
})
