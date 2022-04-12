import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className='bg-[#b7262b] z-10 fixed left-0 top-0 w-full  block text-white'>

      <div className='flex max-w-[1250px] mx-auto justify-between  w-full items-center px-4 bg-[#b7262b] py-[18px]'>
        {/* logo */}
        <div className="logo cursor-pointer">
          LOGO
        </div>
        {/* links for md++ display */}
        <div className="hidden md:flex">
          <ul className='flex space-x-8'>
            <li><a href="/" className='hover:text-[#f7bbb0]  transition '>Home</a></li>
            <li><a href="/" className='hover:text-[#f7bbb0]  transition '>Two</a></li>
            <li><a href="/" className='hover:text-[#f7bbb0]  transition '>Three</a></li>
            <li><a href="/" className='hover:text-[#f7bbb0]  transition '>Four</a></li>
          </ul>
        </div>
        {/* hamburger */}
        <div className='flex md:hidden' onClick={handleNav}>
          {
            nav ? <AiOutlineClose size={30} className="text-white" /> : <AiOutlineMenu size={30} className="text-white" />
          }
        </div>
        {/* small screen links */}
        <div className={nav ? "  text-center right-0 top-[65px] w-1/2 rounded-b-lg h-full fixed bg-[#b7262b] text-black" : "absolute -left-[100%]"}>
          <ul className='text-[#fff]'>
            <li className='border-b-2 border-[#c58277] p-[18px] hover:text-[#f7bbb0] '><a href="/">Home</a></li>
            <li className='border-b-2 border-[#c58277] p-[18px] hover:text-[#f7bbb0]'><a href="/">Two</a></li>
            <li className='border-b-2 border-[#c58277] p-[18px] hover:text-[#f7bbb0]'><a href="/">Three</a></li>
            <li className='border-b-2 border-[#c58277] p-[18px] hover:text-[#f7bbb0]'><a href="/">Four</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
