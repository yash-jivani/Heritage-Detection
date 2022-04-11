import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className='bg-[#ce8350f5]  text-white'>

      <div className='flex max-w-[1250px] mx-auto justify-between items-center px-4 bg-[#ce8350f5] py-[18px]'>
        {/* logo */}
        <div className="logo">
          LOGO
        </div>
        {/* links for md++ display */}
        <div className="hidden md:flex">
          <ul className='flex space-x-8'>
            <li><a href="/">Home</a></li>
            <li><a href="/">Two</a></li>
            <li><a href="/">Three</a></li>
            <li><a href="/">Four</a></li>
          </ul>
        </div>
        {/* hamburger */}
        <div className='flex md:hidden' onClick={handleNav}>
          {
            nav ? <AiOutlineClose size={30} className="text-white" /> : <AiOutlineMenu size={30} className="text-white" />
          }
        </div>
        {/* small screen links */}
        <div className={nav ? "absolute w-full text-center right-0 top-[60px] bg-[#c58277] text-black" : "absolute -left-[100%]"}>
          <ul className='text-[#fff]'>
            <li className='border-b-2 border-[#c58277] py-[18px]'><a href="/">Home</a></li>
            <li className='border-b-2 border-[#c58277] py-[18px]'><a href="/">Two</a></li>
            <li className='border-b-2 border-[#c58277] py-[18px]'><a href="/">Three</a></li>
            <li className='border-b-2 border-[#c58277] py-[18px]'><a href="/">Four</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
