import React from 'react'
import MyPrivacy from '../assets/security.svg'

export default function Privacy() {
    return (
        <div className='py-12'>
            <div className='support max-w-[1250px] mx-auto px-4 lg-edit-sec'>
                <div className='img-container md:h-72 lg:h-96'>
                    <img src={MyPrivacy} className="h-full mx-auto " alt="features-image" />
                </div>
                <div className='support-data lg-edit-data lg:pl-7'>
                    <h1 className='font-bold text-xl mb-2 text-center mt-6 lg:m-0 md:text-left lg:text-3xl lg:mb-3'>Privacy</h1>
                    <h5 className='lg:text-[17px]'>It doesn't have any annoying ads so that you can predict Heritage place without any kind of disturbance or hesitation..</h5>
                    <h1 className='font-bold text-xl my-2 lg:text-2xl lg:mt-6 text-center md:text-left'>Privacy-First Features.</h1>
                    <ul>
                        <li>No data collection</li>
                        <li>No Cookies stored in your browsers</li>
                        <li>No ads</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
