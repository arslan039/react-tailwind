import React from 'react'
import { FaFacebookSquare , FaTwitterSquare ,  FaInstagramSquare, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <>
    <div className='w-full bg-[#efd864] my-2 py-4 '>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 grid-cols-2  '>
          <div className=' col-span 1  px-2'>
            <h1 className='text-3xl text-[#df4a4a] my-3 font-bold'>Arslan Tech</h1>
            <p className=' text-[#0891b2] py-2 font-bold'> Follow Us on our different Social Media plate forms to get the latest updates about us.</p>
            <div className='text-4xl text-[#df4a4a]  font-bold grid grid-cols-4'> 
            <FaFacebookSquare className='p-2' />
            <FaTwitterSquare  className='p-2'/>
            <FaInstagramSquare  className='p-2'/>
            <FaLinkedin  className='p-2'/>
            </div>
           
          </div>

          <div className=' col-span 1  px-9'>
            <h1 className='text-2xl text-[#df4a4a] my-3 font-bold'>Solutions</h1>
            <h2 className=' text-[#0891b2] py-2 font-bold'>Analytics</h2>
            <h3 className=' text-[#0891b2] py-2 font-bold'>Marketing</h3>
            <h4 className=' text-[#0891b2] py-2 font-bold'>Insights</h4>
            <h4 className=' text-[#0891b2] py-2 font-bold'>Commerce</h4>
          </div>

          <div className=' col-span 1  px-9'>
          <h1 className='text-2xl text-[#df4a4a] my-3 font-bold'>Support</h1>
            <h2 className=' text-[#0891b2] py-2 font-bold'>Pricing</h2>
            <h3 className=' text-[#0891b2] py-2 font-bold'>Documentation</h3>
            <h4 className=' text-[#0891b2] py-2 font-bold'>Guides</h4>
            <h4 className=' text-[#0891b2] py-2 font-bold'>API Status</h4>
          </div>
          
          <div className=' col-span 1 px-9'>
          <h1 className='text-2xl text-[#df4a4a] my-3 font-bold'>Company</h1>
            <h2 className=' text-[#0891b2] py-2 font-bold'>About</h2>
            <h3 className=' text-[#0891b2] py-2 font-bold'>Blog</h3>
            <h4 className=' text-[#0891b2] py-2 font-bold'>Jobs</h4>
            <h4 className=' text-[#0891b2] py-2 font-bold'>Careers</h4>
          </div>
          
      </div>
    </div>
    </>
  )
}

export default Footer
