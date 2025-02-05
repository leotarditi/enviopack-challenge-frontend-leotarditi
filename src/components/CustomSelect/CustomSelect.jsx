import './CustomSelect.css'

export function CustomSelect({ id, label, onChange, options, disabled, value }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <select id={id} onChange={onChange} disabled={disabled} value={value}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  )
}