import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import { CustomSelect } from "./CustomSelect"

const TEST_OPTIONS = [
  { value: "value-1", label: "Label 1" },
  { value: "value-2", label: "Label 2" },
  { value: "value-3", label: "Label 3" },
]

const mockSelect = {
  id: "custom-select",
  label: "Elige el que desee",
  onChange: vi.fn(),
  options: TEST_OPTIONS,
}

describe("<CustomSelect />", () => {
  it("Should render select with all options", () => {
    render(<CustomSelect {...mockSelect} />)

    const selectElement = screen.getByLabelText(mockSelect.label)
    expect(selectElement).toBeInTheDocument()

    TEST_OPTIONS.forEach((option) => {
      const optionElement = screen.getByText(option.label)
      expect(optionElement).toBeInTheDocument()
    })
  })

  it("Should change options and reflect the change", () => {
    render(<CustomSelect {...mockSelect} />)

    const selectElement = screen.getByLabelText(mockSelect.label)

    fireEvent.change(selectElement, {
      target: { value: TEST_OPTIONS[1].value },
    })

    expect(selectElement.value).toBe(TEST_OPTIONS[1].value)
    expect(mockSelect.onChange).toHaveBeenCalled(1)
  })

  it("Should render select as disabled", () => {
    render(<CustomSelect {...mockSelect} disabled />)

    const selectElement = screen.getByLabelText(mockSelect.label)
    expect(selectElement).toBeDisabled()
  })

  it("Should not call onChange when select is disabled", () => {
    render(<CustomSelect {...mockSelect} disabled />)

    const selectElement = screen.getByLabelText(mockSelect.label)

    fireEvent.change(selectElement, {
      target: { value: TEST_OPTIONS[1].value },
    })

    expect(mockSelect.onChange).toHaveBeenCalled(0)
  })

  it("Should render with preselected option", () => {
    render(<CustomSelect {...mockSelect} value={TEST_OPTIONS[2].value} />)

    const selectElement = screen.getByLabelText(mockSelect.label)
    expect(selectElement.value).toBe(TEST_OPTIONS[2].value)
  })
})
