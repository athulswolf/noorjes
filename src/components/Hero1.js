import React from 'react'
import { styles } from '../style'
import { HiMiniShoppingBag } from "react-icons/hi2";



const Hero1 = () => {
    return (
        <div className='flex flex-col md:flex-row w-full h-screen bg-green-500 px-6 md:px-36 max-h-[900px]'>
            <div className='flex md:flex-1 justify-center'>
                {/* <img src={vector} alt='vector' className='w-5 md:w-11 mt-auto mb-24' />
                <img src={hero} alt='hero' className='w-[240px] sm:w-[350px] md:w-3/4 mt-auto' />
                <img src={vector} alt='vector' className='w-5 md:w-11 mb-auto mt-36' /> */}
            </div>
            <div className='flex md:w-1/2 h-full flex-col justify-center sm:justify-end md:justify-center'>
                <div className='w-full text-center md:text-left gap-4 md:gap-5  flex flex-col'>
                    <p className={styles.heading}>Lets Feel the True Fragnace</p>
                    <p className={styles.subHeading}>Immerse yourself in a symphony of delightful notes that dance upon your skin. Our perfumes blend artistry and passion, capturing the essence of femininity and allure. Enchanting aromas transport you.</p>
                    <div className="text-white font-semibold text-lg flex gap-16 justify-center md:justify-start">
                    <div className='px-6 py-3 bg-[#3AB7B3] rounded-full flex flex-row gap-2 items-center'>
                        <HiMiniShoppingBag className='w-6 h-6' />
                        <a href='/contact' className={`${styles.subHeading} !text-white`}>Order Now </a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Hero1