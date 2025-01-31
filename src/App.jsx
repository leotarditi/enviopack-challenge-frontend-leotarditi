import { useEffect, useState } from "react"
import { Header } from "./components/Header/Header"
import Layout from "./components/Layout/Layout"
import { Products } from "./components/Products/Products"
import { useFilters } from "./hooks/useFilters"
import api from "./products/api"

function App() {
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

  if (status === "pending") {
    return <h1>Loading...</h1>
  }

  return (
    <Layout>
      <Header />
      <Products products={filteredProducts} />
    </Layout>
  )
}

export default App
