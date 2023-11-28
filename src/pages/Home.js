import React from 'react'
import Login from '../components/Login'
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const Home = ({ user }) => {
    const history = useHistory()
    if (user.role==="customer") history.push('/customer')
    if (user.role==="banker") history.push('/banker')
    return (
        <>
            <section className="text-gray-600 body-font min-h-screen flex ">

                <div className="flex h-section w-full justify-center items-center   relative">
                    {/* Left Side - Input Forms */}
                    <div className="flex-1 bg-gray-200 p-10 max-w-[30rem] m-auto z-10">
                        <h2 className="text-3xl font-bold mb-6">Login</h2>
                        <Login role="customer" />

                        <Link to="/BankerLogin" class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">become a banker
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </Link>
                    </div>

                    <div
                        className="absolute z-0 w-full h-full bg-cover bg-center"
                        style={{
                            backgroundImage: `url("https://plus.unsplash.com/premium_photo-1681298434224-4c559463db47?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
                        }}
                    ></div>
                </div>

            </section>
        </>
    )
}

export default Home
