import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { Products } from "./Products"
import { CartProvider } from "../../contexts/cart"

const mockProducts = [
  {
    id: 1,
    title: "Cachopo",
    price: 30,
  },
  {
    id: 2,
    title: "Chorizo a la sidra",
    price: 15,
  },
  {
    id: 3,
    title: "Navajas",
    price: 25,
  },
]

describe("<Products />", () => {
  it("Should render a list of products", () => {
    render(
      <CartProvider>
        <Products products={mockProducts} />
      </CartProvider>,
    )
    const products = screen.getAllByRole("listitem")

    expect(products).toHaveLength(3)
  })
})
