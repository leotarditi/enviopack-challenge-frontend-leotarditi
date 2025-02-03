import { createContext, useEffect, useState } from "react"
import api from "../user/api"

export const UserContext = createContext({})

export function UserProvider({ children }) {
  const [user, setUser] = useState()
  const [status, setStatus] = useState("peding")

  function handleAddCredit(amount) {
    if (!user) return
    if (amount <= 0) {
      throw new Error('Invalid amount');
    }

    return api.credit.update(amount).then(() => {
      setUser({ ...user, credit: user.credit + amount })
    })
  }

  function handleRemoveCredit(amount) {
    if (!user) return;
    if (amount <= 0 || amount > user.credit) {
      throw new Error('Invalid amount');
    }
  
    return api.credit.update(amount).then(() => {
      setUser({ ...user, credit: user.credit - amount });
    });
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
    removeCredit: handleRemoveCredit,
  }

  return (
    <UserContext.Provider value={{ state, action }}>
      {children}
    </UserContext.Provider>
  )
}
