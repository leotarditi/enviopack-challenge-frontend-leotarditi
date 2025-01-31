import { useContext } from "react"
import { UserContext } from "../contexts/user"

export function useUser() {
  const {
    state: {user},
  } = useContext(UserContext)

  return user
}