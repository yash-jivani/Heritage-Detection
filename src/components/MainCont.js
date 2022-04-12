import React from 'react'
import Myimage from '../assets/img_one.png'

export default function MainCont() {
    return (

        <div className='max-w-[1250px] mx-auto main-sec pt-8 px-4 lg-edit-sec mt-16 mb-8 md:mt-[60px] lg:pt-36 lg:pb-28' >
            {/* img container */}
            <div className="img-container lg:w-1/2 lg:h-1/2 ">
                <img src={Myimage} style={{}} alt="heritage-img" />
            </div>
            {/* data container */}
            <div className='main_data lg-edit-data '>
                <h1 className='font-bold text-xl text-center md:text-left lg:text-3xl' >Get Instant & Accurate Heritage Detection with /NAME/</h1>
                <div className='py-4 text-center md:text-left lg:my-1'>
                    <input type="file" f className='w-[15rem]' />
                </div>
                <button className=' text-center w-full bg-slate-700 px-3 py-2 rounded-xl text-white lg:w-40'>Predict Now</button>
            </div>
        </div>

    )
}
