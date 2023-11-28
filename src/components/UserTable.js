import CostHistory from "./CostHistory"

const UserTable = ({data}) => {
    return (
        <>

            <table className="table-auto w-full text-left whitespace-no-wrap">
                <thead>
                    <tr>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">index</th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Name</th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Email</th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Balance</th>
                        <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
                    </tr>
                </thead>
                <tbody>

                    {data && data.map((vl, i)=>{
                        let val = data[data.length - i - 1]
                        const {accid} = val
                        return  <tr key={val._id}>
                        <td className="px-4 py-3">{i+1}</td>
                        <td className="px-4 py-3">{val.username}</td>
                        <td className="px-4 py-3">{val.email}</td>
                        <td className="px-4 py-3 text-lg text-gray-900">{accid && accid.balance }</td>
                        <td className="w-10 text-center">
                            <CostHistory txt="more" data={val}></CostHistory>
                        </td>
                    </tr>
                    }) }

                    
                    


                    
                </tbody>
            </table>

        </>
    )
}

export default UserTable
