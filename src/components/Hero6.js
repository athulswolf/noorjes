import React from 'react'
import { styles } from '../style'
import Order from '../assets/Order.png'
import { HiMiniShoppingBag } from "react-icons/hi2";
import { FaCircleCheck } from "react-icons/fa6";


const Hero6 = () => {
    return (
        <div className='relative flex flex-col md:flex-row w-full px-6 md:px-36 py-6 md:py-10 bg-[#F5FBFB] overflow-hidden gap-x-10' id='about'>
            <div className='flex md:flex-1 h-full justify-center items-center my-auto'>
                <img src={Order} alt='family' className='py-6 w-full md:w-11/12' />
            </div>
            <div className='flex md:flex-1 h-full flex-col my-auto items-center md:items-start gap-4'>
                <div className='md:max-w-lg flex flex-col gap-2 md:gap-4 text-left'>
                    <p className={`${styles.heroHeadText}`}>Why choose us?</p>
                    <p className={`${styles.subHeading}`}>Elevate your senses with NoorJes Imagine Perfume. Immerse yourself in our world where premium quality, eco-conscious choices, and globally inspired scents redefine the fragrance experience like never before.</p>
                    <div className='flex flex-row gap-2'>
                        <FaCircleCheck className='w-6 h-6 text-[#3AB7B3]' />
                        <p className={`${styles.subHeading}`}>Unique Blends: Artfully curated, setting us apart.</p>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <FaCircleCheck className='w-6 h-6 text-[#3AB7B3]' />
                        <p className={`${styles.subHeading}`}>Nature's Embrace: Eco-friendly scents, guilt-free allure.</p>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <FaCircleCheck className='w-6 h-6 text-[#3AB7B3]' />
                        <p className={`${styles.subHeading}`}>Personalized Connection: Scents tailored to your individuality.</p>
                    </div>
                    <div className='px-6 py-3 bg-[#3AB7B3] rounded-full flex flex-row gap-2 w-[142px] md:w-[180px] items-center'>
                        <HiMiniShoppingBag className='w-6 h-6 text-white  ' />
                        <a href='/contact' className={`${styles.subHeading} !text-white`}>Order Now </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero6