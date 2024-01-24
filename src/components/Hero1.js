import React from 'react'
import { styles } from '../style'
import { HiMiniShoppingBag } from "react-icons/hi2";



const Hero1 = () => {
  return (
    <div className='flex flex-col md:flex-row w-full h-screen max-h-[900px] pt-16 md:pt-20 bg-black'>
      <div className='h-full w-full bg-image-m md:bg-image-l bg-no-repeat bg-cover bg-center px-6 md:px-36 '>
      <div className='flex md:w-1/2 h-full flex-col md:ml-auto md:justify-center mt-6 md:mt-0'>
        <div className='w-full text-center md:text-left gap-4 md:gap-5 flex flex-col'>
          <p className={styles.heading}>Your Scеnt Tеlls Your Story!</p>
          <p className={styles.subHeading}>Explorе a world whеrе scеnts arе not just an accеssory but an еxprеssion of your uniquе еssеncе. Each fragrancе is a mastеrpiеcе, blеnding thе finеst ingrеdiеnts catеring to еvеry mood and dеsirе</p>
          <div className="text-white font-semibold text-lg flex gap-16 justify-center md:justify-start">
            <div className='px-6 py-3 bg-[#3AB7B3] rounded-full flex flex-row gap-2 items-center'>
              <HiMiniShoppingBag className='w-6 h-6' />
              <a href='/contact' className={`${styles.subHeading} !text-white`}>Order Now </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Hero1