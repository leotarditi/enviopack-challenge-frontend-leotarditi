import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { CartProvider } from "../contexts/cart"
import PurchasePage from "./PurchaseStatus"
import { AppRouter } from "../AppRouter"
import { UserProvider } from "../contexts/user"

describe("<PurchasePage />", () => {
  it("Should render", () => {
    render(
      <UserProvider>
        <CartProvider>
          <AppRouter>
            <PurchasePage />
          </AppRouter>
        </CartProvider>
      </UserProvider>,
    )
    screen.debug()
  })
})
