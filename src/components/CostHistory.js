import { useState } from "react"
import Table from "./Table"

const CostHistory = (props) => {
    const [flg, setFlg] = useState(true)

    const toggleSlide = () => (flg) ? setFlg(false) : setFlg(true)

    const { data } = props
    const { accid } = data




    return (
        <>

            <div onClick={toggleSlide} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded cursor-pointer" >
                {props.txt}
            </div>




            <div className={`fixed bottom-0 left-0 w-screen h-screen p-2 bg-opacity-40 bg-black flex  justify-center items-center gap-4 flex-col ${(flg) ? 'hidden' : ''} z-10 transition-all`}>


                <div className="flex top-0 left-0  w-auto p-10 text-base  flex-col bg-white p-4 min-h-[30rem] rounded-md gap-2">

                    <div onClick={toggleSlide} className='w-10 h-8  flex items-center justify-center rounded-full cursor-pointer bg-white ml-auto '>
                        X
                    </div>

                    <h3 className='col-span-2 text-3xl font-bold'>{data.username}</h3>
                    <p> ₹{accid && accid.balance}</p>

                    <Table data={accid && accid.transactions} />



                </div>



            </div>

        </>
    )
}

export default CostHistory
