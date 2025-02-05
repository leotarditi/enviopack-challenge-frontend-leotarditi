import { useContext } from "react"
import { FiltersContext } from "../contexts/filters.jsx"

export function useFilters() {
  const context = useContext(FiltersContext)

  if (context === undefined) {
    throw new Error("useFilters must be used within a FiltersProvider")
  }

  const { filters, setFilters } = context

  const filterProducts = (products) => {
    let filteredProducts = products.filter((product) => {
      return product.title.toLowerCase().includes(filters.query.toLowerCase())
    })

    if (filters.sortBy === "priceAsc") {
      filteredProducts.sort((a, b) => a.price - b.price)
    } else if (filters.sortBy === "priceDesc") {
      filteredProducts.sort((a, b) => b.price - a.price)
    }

    return filteredProducts
  }

  return { filters, filterProducts, setFilters }
}
