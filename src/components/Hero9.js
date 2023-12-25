import React from 'react'
import { styles } from '../style'
import { HiMiniShoppingBag } from "react-icons/hi2";
import bottle from '../assets/bottle.png'


const Hero9 = () => {
  return (
    <div className='mx-6 md:mx-36 my-4 md:my-10 flex flex-col-reverse md:flex-row bg-[#C4C4C4] rounded-xl px-4 md:gap-4 relative'>
      <div className='flex md:flex-1 flex-col justify-center items-center gap-4 py-4'>
        <div className='md:max-w-lg flex flex-col gap-4'>
          <p className="text-[#151515] font-normal text-2xl md:text-5xl font-playfair">Enough talk, let's make you look beautiful</p>
          <p className={`${styles.subHeading}`}>Immerse yourself in a symphony of delightful notes that dance upon your skin. Our perfumes blend artistry and passionu.</p>
          <div className='flex flex-row gap-4'>
            <div className='px-6 py-3 bg-[#3AB7B3] rounded-full flex flex-row gap-2 items-center'>
              <HiMiniShoppingBag className='w-6 h-6 text-white  ' />
              <a href='/contact' className={`${styles.subHeading} !text-white`}>Order Now </a>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center flex-1'>
        <img src={bottle} className='h-36 md:h-72 lg:h-96 md:pt-10 -mt-12 md:-mt-24' />
      </div>
      <div className='absolute w-20 h-20 bg-white -top-2 opacity-30 -left-5 rounded-full'></div>
      <div className='absolute w-20 h-20 bg-white -bottom-10 opacity-30 left-[40%] rounded-full hidden md:flex'></div>
      <div className='absolute w-20 h-20 bg-white -top-10 opacity-30 right-0 md:right-5 rounded-full'></div>
    </div>
  )
}

export default Hero9