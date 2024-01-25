import React from 'react';
import { FaLaptopCode , FaLaptopMedical} from "react-icons/fa";
import { FaHouseLaptop } from "react-icons/fa6";

function Plans() {
  return (
<div className='py-[60px] px-2'>
<div class="max-w-[1200px] mx-auto grid  md:grid-cols-3  grid-col-1 gap-6  ">

   <div class="  text-center text-[#0891b2] bg-[#efd864] shadow-lg p-4    hover:text-[#df4a4a] group rounded hover:scale-105 duration-500  ">
   <div className="flex flex-col h-full justify-center">
   <div className="grid place-items-center mb-4">
    <FaLaptopCode className="text-4xl text-[#0891b2] group-hover:text-[#df4a4a]" />
    </div>
    <h2 className="text-[#0891b2] text-center text-3xl py-3 ">Frontend development</h2>
    <p>Responsive web development for a seamless online experience and business growth.</p>
    </div>
   </div>

   <div class="  text-center text-[#0891b2] bg-[#efd864] shadow-lg p-4    hover:text-[#df4a4a] group rounded hover:scale-105 duration-500 ">
   <div className="flex flex-col h-full justify-center">
   <div className="grid place-items-center mb-4">
    <FaHouseLaptop className="text-4xl text-[#0891b2] group-hover:text-[#df4a4a]" />
    </div>
    <h2 className="text-[#0891b2] text-center text-3xl py-3 ">Backend Development</h2>
    <p>Responsive web development for a seamless online experience and business growth.</p>
    </div>
   </div>

   <div class="  text-center text-[#0891b2] bg-[#efd864] shadow-lg p-4    hover:text-[#df4a4a] group rounded hover:scale-105 duration-500 ">
   <div className="flex flex-col h-full justify-center">
   <div className="grid place-items-center mb-4">
    <FaLaptopMedical className="text-4xl text-[#0891b2] group-hover:text-[#df4a4a]" />
    </div>
    <h2 className="text-[#0891b2] text-center text-3xl py-3 ">MERN Stack Development</h2>
    <p>Responsive web development for a seamless online experience and business growth.</p>
    </div>
   </div>
</div>   
</div>
  )
}

export default Plans
