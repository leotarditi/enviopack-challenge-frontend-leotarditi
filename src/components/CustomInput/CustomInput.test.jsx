import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import { CustomInput } from "./CustomInput"

const mockInput = {
  type: "text",
  id: "custom-input",
  onChange: vi.fn(),
  placeholder: "Escribe lo que desees",
  value: "",
}

describe("<CustomInput />", () => {
  it("Should render input", () => {
    render(<CustomInput {...mockInput} />)

    const inputElement = screen.getByPlaceholderText(mockInput.placeholder)
    expect(inputElement).toBeInTheDocument()
  })

  it("Should display the correct placeholder", () => {
    render(<CustomInput {...mockInput} />)

    const inputElement = screen.getByPlaceholderText(mockInput.placeholder)
    expect(inputElement.placeholder).toBe(mockInput.placeholder)
  })

  it("Should call onChange when input value changes", () => {
    render(<CustomInput {...mockInput} />)

    const inputElement = screen.getByPlaceholderText(mockInput.placeholder)

    fireEvent.change(inputElement, { target: { value: "Nuevo valor" } })

    expect(mockInput.onChange).toHaveBeenCalled(1)
  })

  it("Should update the value correctly", () => {
    const { rerender } = render(
      <CustomInput {...mockInput} value="Initial value" />,
    )

    const inputElement = screen.getByPlaceholderText(mockInput.placeholder)
    expect(inputElement.value).toBe("Initial value")

    rerender(<CustomInput {...mockInput} value="Updated value" />)

    expect(inputElement.value).toBe("Updated value")
  })

  it("Should render input with correct type", () => {
    render(<CustomInput {...mockInput} type="password" />)

    const inputElement = screen.getByPlaceholderText(mockInput.placeholder)
    expect(inputElement.type).toBe("password")
  })

  it("Should render input as disabled", () => {
    render(<CustomInput {...mockInput} disabled />)

    const inputElement = screen.getByPlaceholderText(mockInput.placeholder)
    expect(inputElement).toBeDisabled()
  })

  it("Should not call onChange when input is disabled", () => {
    render(<CustomInput {...mockInput} disabled />)

    const inputElement = screen.getByPlaceholderText(mockInput.placeholder)

    fireEvent.change(inputElement, { target: { value: "Nuevo valor" } })

    expect(mockInput.onChange).toHaveBeenCalled(0)
  })
})
