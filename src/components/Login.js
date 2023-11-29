import React, { useContext, useState } from 'react'
import userContext from '../Context/userContext'
import { useHistory } from "react-router-dom";

const Login = ({ role }) => {

    const { loginUser } = useContext(userContext)
    const [credentials, setCredentials] = useState({ username: "", email: "", password: "", role: role })

    let history = useHistory();


    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const submitForm = async (event) => {
        event.preventDefault();

        const res = await loginUser(credentials)
        setCredentials({ username: "", email: "", password: "" })

        if (res === 1) history.push("/customer")
        else if (res === 2) history.push("/banker")
        else alert("invalid entery")


    }

    return (
        <>
            <form onSubmit={submitForm}>
                <div className="mb-4">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-600">
                        Username
                    </label>
                    <input value={credentials.username} onChange={handleChange} type="text" id="username" name="username" className="mt-1 p-2 w-full border rounded-md" required />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                        Email
                    </label>
                    <input value={credentials.email} onChange={handleChange} type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md" required />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                        Password
                    </label>
                    <input value={credentials.password} onChange={handleChange} type="password" id="password" name="password" className="mt-1 p-2 w-full border rounded-md" required />
                </div>

                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md  :bg-blue-600" >
                    Login
                </button>
            </form>
        </>
    )
}

export default Login
