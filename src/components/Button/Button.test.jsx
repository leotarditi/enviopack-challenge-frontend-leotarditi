import { describe, it, expect } from "vitest"
import { render } from "@testing-library/react"
import Button from "./Button"

describe("<Button />", () => {
  it("Should render a button", () => {
    render(<Button />)
  })
})
