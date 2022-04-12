import React from 'react'

export default function About() {
  return (
    <div className=' py-4'>

      <div className='max-w-[1250px] mx-auto text-center about-section px-4 my-6'>
        <h1 className='text-xl font-bold my-4 lg:text-3xl lg:mb-3'>About</h1>
        <h5 className='lg:text-[17px]'>XYZ is an Open Source Project created with intention to help detect xyz.</h5>
        <h5 className='my-1'>You can find the source code for the XYZ on the GitHub: <a href="/">Link</a> </h5>
      </div>
    </div>
  )
}
