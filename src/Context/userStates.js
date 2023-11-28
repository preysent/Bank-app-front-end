import { useState } from "react";
import userContext from "./userContext";

const UserContext = ({ children }) => {

  const [user, setUser] = useState({})
  const [Token, setToken] = useState(localStorage.getItem('authToken'))
  const [account, setAccount] = useState({})
  const [banker, setBanker] = useState([])


  const getUser = async () => {

    const res = await fetch("https://bank-app-iota-gilt.vercel.app/api/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authToken": `${Token}`
      }
    })

    const newUser = await res.json()
    setUser(newUser)
    setAccount(newUser.accid)
  }


  const getAllUserInfo = async () => {

    const res = await fetch("https://bank-app-iota-gilt.vercel.app/api/user/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authToken": `${Token}`
      }
    })

    const allUser = await res.json()
    setBanker(allUser)
  }


  const loginUser = async ({ username, email, password, role = "customer" }) => {

    const res = await fetch("https://bank-app-iota-gilt.vercel.app/api/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password, role })
    })

    const { authToken } = await res.json()

    setToken(authToken)
    localStorage.setItem("authToken", authToken)
    getUser()

    if (role === "customer") return 1
    else {
      getAllUserInfo()
      return 2
    }

  }

  const transition = async ({ amount, action }) => {
    const res = await fetch("https://bank-app-iota-gilt.vercel.app/api/transition", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "authToken": `${Token}`
      },
      body: JSON.stringify({ amount, action })
    })

    getUser()

  }

  const logout = ()=>{
    localStorage.clear()
    setToken("")
    setUser({})
  }


  return (
    <userContext.Provider value={{ user, loginUser, Token, getUser, account, transition, getAllUserInfo,banker, logout }}>
      {children}
    </userContext.Provider>
  )
}
export default UserContext