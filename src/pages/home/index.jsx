import React from 'react'
import { Helmet } from 'react-helmet'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Virtual Meet</title>



      </Helmet>
    
        <div className='h-screen flex justify-center items-center mx-auto bg-gray-100'>
            <div className="bg-cyan-200 max-w-[600px] p-5 rounded-md shadow-md">
              <h1 className=' font-xl text-[#333] text-xl font-bold '>
                Add The Room Link Here
              </h1>

              <form className='flex flex-col mt-5'>
                <input type="Room Code"  placeholder='Room Code'
                className='w-full border-gray-100 rounded-md py-4 px-4 my-5
                ' />
                <button className='bg-blue-300 py-2 px-4 hover:bg-blue-200 rounded-xl text-lg hover:text-amber-800 font-bold'>Join Room</button>
              </form>
            </div>
        </div>
    
    </>
  )
}

export default Home
