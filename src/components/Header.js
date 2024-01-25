import React from 'react'
import { AiOutlineClose , AiOutlineMenu} from "react-icons/ai";
import { useState } from 'react';

function Header() {
    const [toggle,  setToggle] = useState(false);
  return (
    <div className='bg-[#efd864] p-4'>
        <div className="max-w-[1240px] mx-auto py-2  flex items-center  justify-between">
            <div className=' text-3xl text-[#0891b2] font-bold'>
                Arslan Tech
            </div>
            {
                toggle ? 
                < AiOutlineClose onClick = {()=>{setToggle(!toggle)}} className="text-3xl text-[#0891b2] md:hidden block"/>
                     :
               < AiOutlineMenu onClick = {()=>{setToggle(!toggle)}} className="text-3xl text-[#0891b2] md:hidden block"/>
         
            } 
          <ul  className=' hidden md:flex text-[#0891b2] font-bold gap-14'>
            <li>
                Home
            </li>
            <li>
                About Us
             </li>
            <li>
                Contact Us
            </li>
            <li>
                Services
            </li>
          </ul>

        {/* mobile responsive */}
          <ul  className= {`md:hidden duration-700 w-full h-screen text-white bg-black font-bold fixed  top-[84px]  ${toggle ? "left-[0]" : "left-[-100%]"} `} >
            <li className='p-5 border-b  '>
                Home
            </li >
            <li className='p-5 border-b border-white' >
                About Us
             </li>
            <li className='p-5 border-b border-white '>
                Contact Us
            </li>
            <li className='p-5 border-b border-white'>
                Services
            </li>
          </ul>
        </div>
      
    </div>
  )
}

export default Header
