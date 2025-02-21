import { useContext } from "react"
import { UserContext } from "../contexts/user"

export function useUser() {
  const context = useContext(UserContext)

  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider")
  }

  const {
    state: { user },
  } = context

  return user
}
