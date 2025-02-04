import { describe, it, expect } from "vitest"
import { render } from "@testing-library/react"
import { Filters } from "./Filters"
import { FiltersProvider } from "../../contexts/filters"

describe("<Filters />", () => {
  it("Should render", () => {
    render(
      <FiltersProvider>
        <Filters />
      </FiltersProvider>,
    )
  })
})
