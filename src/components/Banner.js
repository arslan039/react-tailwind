import React from 'react';

import { ReactTyped } from "react-typed";


function Banner() {
  return (
 <>
 <div className="bg-[#efd864] py-[70px] md:py-[130px] w-full">
<div className='max-w[1240px] mx-auto font-bold text-center '>
    <div className='text-[#df4a4a] text-xl md:text-2xl md:py-3'>
        Learn With Us.
    </div >
    <div className="text-[#0891b2] text-3xl md:text-5xl md:py-3">
        Grow With Us.
    </div>
    <div className="text-[#df4a4a] text-2xl md:text-4xl md:py-3">
        Learn    <ReactTyped
  className='p-l-3'
  strings={[
    "Frontend Development",
    "Backend Development",
    "MERN Stack Development",
  ]}
  typeSpeed={130}
  backSpeed={130}
  loop
/>
   </div>
   <button className='bg-[#0891b2] text-[#df4a4a] p-3 rounded font-bold  my-2'> Get Started </button>
     </div>
      </div>
 </>
  )
}

export default Banner
