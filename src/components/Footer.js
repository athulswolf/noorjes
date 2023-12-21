import React from 'react'
import { styles } from '../style'

const Footer = () => {
    return (
        <div className='bg-[#151515] flex items-center flex-col '>
            <div className='w-full flex flex-col gap-y-8 md:flex-row py-6 md:py-16 px-6 max-w-7xl border-b-[1px] border-white'>
                <div className='flex flex-1'>
                    <div className='flex flex-col md:mx-auto gap-y-3 '>
                        <p className="text-white text-2xl font-normal font-playfair ">Quick links</p>
                        <p className="text-white text-base font-normal font-raleway">Home</p>
                        <p className="text-white text-base font-normal font-raleway">About</p>
                        <p className="text-white text-base font-normal font-raleway">FAQ</p>
                        <p className="text-white text-base font-normal font-raleway">Testimonials</p>
                        <p className="text-white text-base font-normal font-raleway">Contact Us</p>
                    </div>
                </div>
                <div className='flex flex-1'>
                    <div className='flex flex-col md:mx-auto gap-y-3 '>
                        <p className="text-white text-2xl font-normal font-playfair ">Contact Us</p>
                        <p className="text-white text-base font-normal font-raleway">+1 800 100 900</p>
                        <p className="text-white text-base font-normal font-raleway">+1 800 100 900</p>
                        <p className="text-white text-base font-normal font-raleway">+1 800 100 900</p>
                    </div>
                </div>
                <div className='flex flex-1'>
                    <div className='flex flex-col md:mx-auto gap-y-3 '>
                        <p className="text-white text-2xl font-normal font-playfair ">Media Information</p>
                    </div>
                </div>
            </div>

            <div className='w-full flex justify-center py-2 md:py-4'>
                <p className="text-white text-xs md:text-base font-normal font-raleway">© 2023 by Imagine  | All Right Reserved | Powered by procube.cx</p>
            </div>
        </div>
    )
}

export default Footer