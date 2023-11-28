import React, { useContext, useEffect } from 'react'
import Button from '../components/Button'
import userContext from '../Context/userContext'
import { useHistory } from "react-router-dom";
import Table from '../components/Table';

const Customer = () => {
  const history = useHistory()

  const { user, Token, getUser, account } = useContext(userContext)
  if (!Token) history.push('/')

  useEffect(() => {
    getUser()
  }, [getUser])


  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Welcome  {user.username}</h1>

            <div className='grid grid-cols-2 justify-center gap-3 w-fit m-auto'>
              {account && <> <h3 className='col-span-2 text-3xl font-bold'>₹ {account.balance}</h3>
                <Button txt="Deposit" amount={account.balance} />
                <Button txt="Withdraw" amount={account.balance} />
              </>}
            </div>

          </div>


          <div className="lg:w-2/3 w-full mx-auto overflow-auto">
            {account.transactions && <Table data =  {account.transactions}/>}
          </div>

        </div>
      </section>
    </>
  )
}

export default Customer
