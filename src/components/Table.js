
const Table = ({data}) => {
    return (
        <>

            <table className="table-auto w-full text-left whitespace-no-wrap">
                <thead>
                    <tr>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">index</th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Amount</th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Type</th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Date</th>
                        <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
                    </tr>
                </thead>
                <tbody>

                    {data && data.map((vl, i)=>{
                        let val = data[data.length - i - 1]
                        return  <tr key={val._id}>
                        <td className="px-4 py-3">{i+1}</td>
                        <td className="px-4 py-3">₹{val.amount}</td>
                        <td className="px-4 py-3">{val.type}</td>
                        <td className="px-4 py-3 text-lg text-gray-900">{val.date}</td>
                        <td className="w-10 text-center">
                            <div className= {`w-4 h-4 rounded-full bg-${(val.type==="deposit")?"green":"red"}-500`} ></div>
                        </td>
                    </tr>
                    }) }

                    
                    


                    
                </tbody>
            </table>

        </>
    )
}

export default Table
