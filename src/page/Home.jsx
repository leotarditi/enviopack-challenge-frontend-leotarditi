import { Filters } from "../components/Filters/Filters"
import { ProductsList } from "../components/ProductsList/ProductsList"
import { useFilters } from "../hooks/useFilters"
import { useProducts } from "../hooks/useProducts"

function HomePage() {
  const { isLoading, isError, products, fetchNextPage, hasNextPage } =
    useProducts()

  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <div className="screen">
      {!isLoading && !isError && (
        <header>
          <h1>Catálogo</h1>
          <Filters />
        </header>
      )}

      {filteredProducts.length > 0 && (
        <ProductsList products={filteredProducts} />
      )}

      {isLoading && <strong>Cargando...</strong>}

      {isError && <p>Ha habido un error</p>}

      {!isLoading && !isError && filteredProducts.length === 0 && (
        <p>No hay elementos</p>
      )}

      {!isLoading && !isError && hasNextPage === true && (
        <button
          className="get-more-products"
          onClick={() => {
            void fetchNextPage()
          }}
        >
          Cargar más productos
        </button>
      )}

      {!isLoading && !isError && hasNextPage === false && (
        <p>No hay más resultados</p>
      )}
    </div>
  )
}

export default HomePage
