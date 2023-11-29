import React, { useContext, useEffect } from 'react'
import userContext from '../Context/userContext'
import { useHistory } from "react-router-dom";
import UserTable from '../components/UserTable';

const Banker = () => {
  const history = useHistory();

  const { Token, getAllUserInfo, banker } = useContext(userContext);
  if (!Token) history.push('/');

  useEffect(() => {
    getAllUserInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Welcome to transactions page</h1>

            <div className='grid grid-cols-2 justify-center gap-3 w-fit m-auto'>
              <h3 className='col-span-2 text-xl font-bold'>All User's info</h3>

            </div>

          </div>


          {/* <div className="lg:w-2/3 w-full mx-auto overflow-auto">
            <Table data={account.transactions}/>
          </div> */}
          <div className="lg:w-fit w-full mx-auto overflow-auto">
           {banker.length && <UserTable data={banker} />}
          </div>

        </div>
      </section>
    </>
  )
}

export default Banker
