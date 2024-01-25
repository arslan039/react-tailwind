import React from 'react'

function Experts() {
  return (
    <div className='max-w-[1240px]  mx-auto my-3  md:grid grid-cols-2'>
      <div className=' col-span-1 text-center '>
        <img src="https://www.webstackacademy.com/wp-content/uploads/2023/01/fullStack-MERN.png" alt="" className='h-full w-full' />
      </div>

      <div className='  col-span-1 mx-[100px] flex flex-col justify-center '>
        <h1 className='text-3xl text-[#df4a4a] font-bold my-3 '> Learn From Experts</h1>
        <p className='text-xl text-[#0891b2] font-bold my-2 '>Embarking on the journey to master the MERN stack? Learn from seasoned experts who offer invaluable insights into MongoDB, Express.js, React, and Node.js, ensuring a comprehensive and skillful exploration of full-stack developmen</p>
        <button className=' bg-[#0891b2] text-[#df4a4a] p-3 rounded font-bold w-[44%] md:w-[35%]'>
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Experts
