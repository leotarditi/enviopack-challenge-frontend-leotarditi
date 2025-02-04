import { describe, it } from "vitest"
import { render } from "@testing-library/react"
import { Layout } from "./Layout"
import { AppRouter } from "../../AppRouter"
import { UserProvider } from "../../contexts/user"

describe("<Layout />", () => {
  it("Should render", () => {
    render(
      <UserProvider>
        <AppRouter>
          <Layout />
        </AppRouter>
      </UserProvider>,
    )
  })
})
