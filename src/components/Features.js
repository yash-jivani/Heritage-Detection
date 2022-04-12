import React from 'react'
import MyFeatures from '../assets/features.svg'


export default function Features() {
  return (
    <div className='clip-p1'>

      <div className='max-w-[1250px] mx-auto features pt-8 px-4 lg:flex flex-row lg:justify-around'>
        {/* img container */}
        <div className='img-container md:h-72 lg:h-96' >
          <img src={MyFeatures} className="h-full mx-auto " alt="features-image" />
        </div>
        {/* data container */}
        <div className='wrapper lg-edit-data lg:pl-7'>

          <div className='data mt-4'>
            <h1 className='font-bold text-xl text-center md:text-left mt-6 lg:m-0 mb-2 lg:text-3xl lg:mb-3'>Features</h1>
            <h5 className='lg:text-[17px]'>/xyz/ uses Deep Learning Algorithms to predict the /.../ It implements various deep learning libraries to build Robust and Efficient Neural Network which can provide you Fast and Accurate Results.</h5>
            <h1 className='font-bold text-xl  my-2  text-center md:text-left lg:text-2xl lg:mt-6'>Technology Stack of the /NAME/</h1>
            <ul className='lg:text-[17px]'>
              <li>Python</li>
              <li>HTML,CSS,JavaScript</li>
              <li>Tailwindcss, React</li>

            </ul>

          </div>
        </div>
      </div>
    </div>
  )
}
