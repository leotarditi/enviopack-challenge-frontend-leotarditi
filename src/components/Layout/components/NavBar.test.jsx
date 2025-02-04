import { describe, it } from "vitest"
import { render } from "@testing-library/react"
import { NavBar } from "./NavBar"
import { UserProvider } from "../../../contexts/user"

describe("<NavBar />", () => {
  it("Should render", () => {
    render(
      <UserProvider>
        <NavBar />
      </UserProvider>,
    )
  })
})
