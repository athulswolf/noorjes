import React from 'react'
import whatsapp from '../assets/Icon.png'
import instagram from '../assets/Icon-1.png'
import facebook from '../assets/Icon-2.png'
import linkedin from '../assets/Icon-3.png'
import phone from '../assets/Icon-4.png'
import mail from '../assets/Icon-5.png'
import location from '../assets/Icon-6.png'


const Footer = () => {
    return (
        <div id='contact' className='bg-[#151515] flex items-center flex-col '>
            <div className='w-full flex flex-col gap-y-8 md:flex-row py-6 md:py-16 px-6 max-w-7xl border-b-[1px] border-white'>
                <div className='md:flex flex-1 hidden'>
                    <div className='flex flex-col md:mx-auto gap-y-3 '>
                        <p className="text-white text-2xl font-normal font-playfair ">Quick links</p>
                        <a href='#' className="text-white text-base font-normal font-raleway">Home</a>
                        <a href='#about' className="text-white text-base font-normal font-raleway">About</a>
                        <a href='#faq' className="text-white text-base font-normal font-raleway">FAQ</a>
                        <a href='#testimonials' className="text-white text-base font-normal font-raleway">Testimonials</a>
                        <a href='#contact' className="text-white text-base font-normal font-raleway">Contact Us</a>
                    </div>
                </div>
                <div className='flex flex-1'>
                    <div className='flex flex-col md:mx-auto gap-y-3 '>
                        <p className="text-white text-base md:text-2xl font-normal font-playfair ">Contact Us</p>
                        <div className='flex flex-row gap-3 items-center'>
                            <img src={phone} className='w-8 h-8 md:w-10 md:h-10' />
                            <p className="text-white text-xs md:text-base font-normal font-raleway">+971 50 353 3460</p>
                        </div>
                        <div className='flex flex-row gap-3 items-center'>
                            <img src={mail} className='w-8 h-8 md:w-10 md:h-10' />
                            <p className="text-white text-xs md:text-base font-normal font-raleway">info@noorjes.com</p>
                        </div>
                        <div className='flex flex-row gap-3 items-center'>
                            <img src={location} className='w-8 h-8 md:w-10 md:h-10' />
                            <p className="text-white text-xs md:text-base font-normal font-raleway">Mamzar Center, Dubai, UAE</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-1'>
                    <div className='flex flex-col md:mx-auto gap-y-3 '>
                        <p className="text-white text-base md:text-2xl font-normal font-playfair ">Media Information</p>
                        <div className='flex flex-row md:mx-auto gap-3 '>
                            <a href='https://wa.link/96lo06'>
                                <img src={whatsapp} alt="whatsapp" className='w-8 h-8 md:w-10 md:h-10' />
                            </a>
                            <a href='https://www.instagram.com/noorjesperfumes?igsh=MXJ3dGhpMDEzbnhqZw=='>
                                <img src={instagram} alt="facebook" className='w-8 h-8 md:w-10 md:h-10' />
                            </a>
                            {/* <img src={facebook} alt="instagram" className='w-8 h-8 md:w-10 md:h-10' /> */}
                            {/* <img src={linkedin} alt="linkedin" className='w-8 h-8 md:w-10 md:h-10' /> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full flex justify-center px-6 py-4'>
                <p className="text-white text-center text-xs md:text-base font-normal font-raleway capitalize">© 2023 by Imagine  | All Right Reserved | Powered by procube.cx</p>
            </div>
        </div>
    )
}

export default Footer