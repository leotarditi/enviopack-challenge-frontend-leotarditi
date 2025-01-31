import { useFilters } from '../../hooks/useFilters'
import './Filters.css'

export function Filters () {
  const { filters, setFilters } = useFilters()

  const handleChangeSearch = (event) => {
    
    setFilters(prevState => ({
      ...prevState,
      query: event.target.value
    }))
  }

  const handleChangeSorter = (event) => {
    // ⬇️ ESTO HUELE MAL
    // estamos pasando la función de actualizar estado
    // nativa de React a un componente hijo
    setFilters(prevState => ({
      ...prevState,
      sortBy: event.target.value
    }))
  }

  return (
    <section className='filters'>

      <div>
        <input
          type='text'
          id='search'
          onChange={handleChangeSearch}
          value={filters.query}
          placeholder='Buscar productos por nombre'
        />
      </div>

      <div>
        <label htmlFor='sorted'>Ordenar por</label>
        <select id='sorted' onChange={handleChangeSorter}>
          <option value='newest'>Más Reciente</option>
          <option value='priceDesc'>Menor Precio</option>
          <option value='priceAsc'>Mayor Precio</option>
        </select>
      </div>

    </section>

  )
}