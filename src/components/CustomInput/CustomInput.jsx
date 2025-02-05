import './CustomInput.css'

export function CustomInput({ type, id, onChange, value, placeholder, disabled }) {
  return (
    <input
      type={type}
      id={id}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
    />
  )
}