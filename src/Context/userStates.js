import { useState } from "react";
import userContext from "./userContext";

const UserContext = ({ children }) => {

  const [user, setUser] = useState({})
  const [Token, setToken] = useState(localStorage.getItem('authToken'))
  const [account, setAccount] = useState({ transactions: [] })
  const [banker, setBanker] = useState([])


  const getUser = async (authToken) => {
    const token = authToken || Token
    console.log(token)
    const res = await fetch("https://bank-app-iota-gilt.vercel.app/api/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authToken": `${token}`
      }
    })

    const data = await res.json()
    if (data.login===false) { }
    else {
      setUser(data)
      setAccount(data.accid)
    }
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

    const { authToken, error } = await res.json()

    if (error) return 0

    setToken(authToken)
    localStorage.setItem("authToken", authToken)
    getUser(authToken)

    if (role === "customer") return 1
    else {
      getAllUserInfo()
      return 2
    }

  }

  const transition = async ({ amount, action }) => {
    await fetch("https://bank-app-iota-gilt.vercel.app/api/transition", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "authToken": `${Token}`
      },
      body: JSON.stringify({ amount, action })
    })

    getUser()

  }

  const logout = async () => {
    localStorage.clear()
    setToken("")
    setUser({})
    setAccount({})
    // await setTimeout(()=>{
    //   return
    // },50)
  }


  return (
    <userContext.Provider value={{ user, loginUser, Token, getUser, account, transition, getAllUserInfo, banker, logout }}>
      {children}
    </userContext.Provider>
  )
}
export default UserContext