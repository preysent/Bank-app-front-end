import { useState, useContext } from "react"
import userContext from "../Context/userContext"

const SideMenu = (props) => {
    const [flg, setFlg] = useState(true)

    const toggleSlide = () => (flg) ? setFlg(false) : setFlg(true)

    const { transition } = useContext(userContext)

    const [amount, setAmount] = useState()

    const handleChange = (e) => {
        setAmount(e.target.value)
    }

    const submitForm = async (event) => {
        event.preventDefault();

        if(props.txt === "Withdraw" && amount > props.amount) {
            alert("Insufficient Funds")
        }
        else {
            const action = (props.txt).toLocaleLowerCase()
            transition({ amount: amount, action: action })
        }
        setAmount()
    }


    return (
        <>

            <div onClick={toggleSlide} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded cursor-pointer" >
                {props.txt}
            </div>




            <div className={`fixed bottom-0 left-0 w-screen h-screen p-2 bg-opacity-40 bg-black flex  justify-center items-center gap-4 flex-col ${(flg) ? 'hidden' : ''} z-10 transition-all`}>


                <div className='flex justify-center my-6'>
                    <div onClick={toggleSlide} className='w-12 h-12  flex items-center justify-center rounded-full cursor-pointer bg-white'>
                        X
                    </div>
                </div>

                <div className="flex top-0 left-0 w-[30rem] text-base justify-center flex-col  p-4  rounded-md bg-gray-100">

                    <h3 className='col-span-2 text-3xl font-bold'>₹ {props.amount}</h3>
                    <p> is your amount</p>

                    <form className="flex" onSubmit={submitForm}>
                        <input className=" w-4/6 p-3" type="number" value={amount} onChange={handleChange} required />
                        <button type="submit" className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded cursor-pointer">
                            {props.txt}
                        </button>
                    </form>

                </div>



            </div>

        </>
    )
}

export default SideMenu
