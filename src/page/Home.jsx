import { useEffect, useState } from "react"
import { Filters } from "../components/Filters/Filters"
import { ProductsList } from "../components/ProductsList/ProductsList"
import { useFilters } from "../hooks/useFilters"
import api from "../products/api"

function HomePage() {
  const { filterProducts } = useFilters()
  const [products, setProducts] = useState([])
  const [status, setStatus] = useState("pending")

  const filteredProducts = filterProducts(products)

  useEffect(() => {
    api.list().then(({ products }) => {
      setProducts(products)
      setStatus("resolved")
    })
  }, [])

  return (
    <div className="screen">
      {status === "pending" ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <header>
            <h1>Catálogo</h1>
            <Filters />
          </header>
          <ProductsList products={filteredProducts} />
        </>
      )}
    </div>
  )
}

export default HomePage
