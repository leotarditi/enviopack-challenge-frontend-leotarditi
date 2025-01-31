import { useId } from "react"
import { useFilters } from "../../hooks/useFilters"
import "./Filters.css"

export function Filters() {
  const { filters, setFilters } = useFilters()
  const searchFilterId = useId()
  const sorterFilterId = useId()

  const handleChangeSearch = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      query: event.target.value,
    }))
  }

  const handleChangeSorter = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      sortBy: event.target.value,
    }))
  }

  return (
    <section className="filters">
      <div>
        <input
          type="text"
          id={searchFilterId}
          onChange={handleChangeSearch}
          value={filters.query}
          placeholder="Buscar productos por nombre"
        />
      </div>

      <div>
        <label htmlFor={sorterFilterId}>Ordenar por</label>
        <select id={sorterFilterId} onChange={handleChangeSorter}>
          <option value="newest">Más Reciente</option>
          <option value="priceDesc">Menor Precio</option>
          <option value="priceAsc">Mayor Precio</option>
        </select>
      </div>
    </section>
  )
}
