import { useId } from "react"
import { useFilters } from "../../hooks/useFilters"
import "./Filters.css"
import { CustomInput } from "../CustomInput/CustomInput"
import { CustomSelect } from "../CustomSelect/CustomSelect"

const SORTER_OPTIONS = [
  { value: "newest", label: "Más Reciente" },
  { value: "priceAsc", label: "Menor Precio" },
  { value: "priceDesc", label: "Mayor Precio" },
]

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
        <CustomInput
          type="text"
          id={searchFilterId}
          onChange={handleChangeSearch}
          value={filters.query}
          placeholder="Buscar productos por nombre"
        />
      </div>

      <div>
        <CustomSelect
          id={sorterFilterId}
          label="Ordenar por"
          onChange={handleChangeSorter}
          options={SORTER_OPTIONS}
        />
      </div>
    </section>
  )
}
