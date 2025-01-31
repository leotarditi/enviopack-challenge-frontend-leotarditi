import { createContext, useEffect, useState } from "react"
import api from "../user/api"

export const UserContext = createContext({})

export function UserProvider({ children }) {
  const [user, setUser] = useState()
  const [status, setStatus] = useState("peding")

  function handleAddCredit(amount) {
    if (!user) return

    return api.credit.add(amount).then(() => {
      setUser({ ...user, credit: user.credit + amount })
    })
  }

  useEffect(() => {
    api.fetch().then(({ profile }) => {
      setUser(profile)
      setStatus("resolved")
    })
  }, [])

  if (!user || status === "pending") {
    return <h1>Loading...</h1>
  }

  const state = {
    user,
  }
  const action = {
    addCredit: handleAddCredit,
  }

  return (
    <UserContext.Provider value={{ state, action }}>
      {children}
    </UserContext.Provider>
  )
}
