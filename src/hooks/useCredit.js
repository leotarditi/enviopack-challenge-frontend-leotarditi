import { useContext } from "react"
import { UserContext } from "../contexts/user"

export function useCredit() {
  const {
    state: {user},
    action: {addCredit}
  } = useContext(UserContext)

  return [ user.credit, addCredit ]
}