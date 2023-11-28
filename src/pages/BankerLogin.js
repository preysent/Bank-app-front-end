import React from 'react'
import Login from '../components/Login'

const BankerLogin = () => {
    return (
        <div>
            <section className="text-gray-600 body-font relative flex h-screen justify-center items-center">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center z-10 bg-white h-fit rounded-xl">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center h-full">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Welcome to
                            <br className="hidden lg:inline-block" />Banker's login page
                        </h1>


                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
                        <Login role={"banker"} />
                    </div>

                </div>
                <div
                    className="absolute z-0 w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage: `url("https://plus.unsplash.com/premium_photo-1681298434224-4c559463db47?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
                    }}
                ></div>
            </section>
        </div>
    )
}

export default BankerLogin
