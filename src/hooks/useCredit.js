import { useContext } from "react"
import { UserContext } from "../contexts/user"

export function useCredit() {
  const context = useContext(UserContext)

  if (context === undefined) {
    throw new Error("useCredit must be used within a UserProvider")
  }

  const {
    state: { user },
    action: { addCredit, removeCredit },
  } = context

  return { credit: user.credit, addCredit, removeCredit }
}
