import React, { useContext } from 'react'
import userContext from '../Context/userContext'

const Nanbar = () => {

    const {logout, user}=useContext(userContext)
    
    return (
        <>
            <header className="text-gray-600 body-font absolute w-screen">
                <div className="container mx-auto flex lg:p-5 p-3 justify-between">
                    <div className="flex title-font font-medium items-center text-gray-900 ">
                        
                        <span className="ml-3 text-xl">Binary Bank</span>
                    </div>
                    
                    
                    <button onClick={logout} className={`inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base  opacity-${(user)?"1":"0"}`}>Logout
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </header>
        </>
    )
}

export default Nanbar
