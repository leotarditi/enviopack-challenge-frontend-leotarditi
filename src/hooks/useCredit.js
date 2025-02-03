import { useContext } from "react"
import { UserContext } from "../contexts/user"

export function useCredit() {
  const {
    state: { user },
    action: { addCredit, removeCredit },
  } = useContext(UserContext)

  return { credit: user.credit, addCredit, removeCredit }
}
