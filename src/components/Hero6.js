import React from 'react'
import { styles } from '../style'
import Order from '../assets/Order.png'

const Hero6 = () => {
    return (
        <div className='relative flex flex-col md:flex-row w-full px-6 md:px-36 py-6 md:py-10 bg-[#F5FBFB] overflow-hidden gap-x-10'>
            {/* <img src={Vector3} alt='vector' className='absolute h-8 md:h-12 md:left-16 md:top-16'/> */}
            <div className='flex md:flex-1 h-full justify-center items-center my-auto'>
                <img src={Order} alt='family' className='py-6 w-10/12 sm:w-3/5 md:w-11/12' />
            </div>
            <div className='flex md:flex-1 h-full flex-col my-auto items-center md:items-start gap-4'>
                <div className='md:max-w-lg flex flex-col gap-2 md:gap-6 text-left'>
                    <p className={`${styles.heroHeadText}`}>What Makes us Different From Others</p>
                    <p className={`${styles.subHeading}`}>Immerse yourself in a symphony of delightful notes that dance upon your skin. Our perfumes blend artistry and passion, capturing the essence of femininity and allure. Enchanting aromas transport you.</p>
                    <p className={`${styles.subHeading}`}>Frilled shark ground shark livebearer cutthroat trout</p>
                    <p className={`${styles.subHeading}`}>Frilled shark ground shark livebearer cutthroat trout</p>
                    <p className={`${styles.subHeading}`}>Frilled shark ground shark livebearer cutthroat trout</p>
                    <div className='px-6 py-2 bg-[#3AB7B3] rounded-full flex flex-row gap-2 w-44'>
                        <a href='/contact' className={`${styles.subHeading} !text-white`}>Order Now </a>
                    </div>
                </div>
            </div>
            {/* <img src={Vector4} alt='vector' className='absolute h-10 md:h-20 bottom-4 -right-2 md:bottom-10 md:right-10'/> */}
        </div>
    )
}

export default Hero6