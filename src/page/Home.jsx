import { useEffect, useState } from "react"
import { Products } from "../components/Products/Products"
import { useFilters } from "../hooks/useFilters"
import api from "../products/api"
import { Filters } from "../components/Filters/Filters"

function Home() {
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
      <header>
        <h1>Catálogo</h1>
        <Filters />
      </header>
      {status === "pending" ? <h1>Loading...</h1> : <Products products={filteredProducts} />}
    </div>
  )
}

export default Home
