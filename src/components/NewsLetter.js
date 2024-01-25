import React from 'react'

function NewsLetter() {
  return (
    <div className='bg-[rgb(239,216,100)] w-full p-5'>
      <div className='max-w-[1240px] mx-auto  md:flex justify-between py-8 '>
        <div className='py-2' >
            <h1 className=' text-3xl md:text-4xl text-[#0891b2] font-bold py-2'>Wants To Learn Latest I.T Skills?</h1>
            <p className='text-xl text-[#df4a4a] font-bold'>Sign Up to our newsletter and stay up to date</p>
        </div>
        <div className='py-2' >
            <input type = "text" placeholder= "Email" className='rounded p-3 mr-2 border-2 border-[#0891b2]'/>
            <button className='bg-[#0891b2] text-[#df4a4a] p-3 rounded font-bold  my-2'> Get Started </button>
            <br/>
            <p className='text-[#0891b2]'>
                We care about the protection of your data. Read our <br/> <a href='a' className='text-black'>Privacy Policy.</a>
            </p>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter
