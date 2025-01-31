import { useEffect, useState } from "react"
import Layout from "./components/Layout/Layout"
import api from "./products/api"
import { Products } from "./components/Products/Products"
import { Header } from "./components/Header/Header"
import { useFilters } from "./hooks/useFilters"

function App() {
  const { filterProducts } = useFilters()
  const [products, setProducts] = useState([])
  const [status, setStatus] = useState('pending')

  const filteredProducts = filterProducts(products)

  useEffect(() => {
    api.list().then(({ products }) => {
      setProducts(products)
      setStatus('resolved')
    })
  }, [])

  if(status === 'pending') {
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
