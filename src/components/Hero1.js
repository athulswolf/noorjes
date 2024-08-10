import React from 'react'
import { styles } from '../style'
import { HiMiniShoppingBag } from "react-icons/hi2";



const Hero1 = () => {
  return (
    <div className='flex flex-col md:flex-row w-full h-screen max-h-[900px] pt-16 md:pt-20 bg-black'>
      <div className='h-full w-full bg-image-m md:bg-image-l bg-no-repeat bg-cover bg-center px-6 md:px-36 '>
      <div className='flex md:w-1/2 h-full flex-col md:ml-auto md:justify-center mt-6 md:mt-0'>
        <div className='w-full text-center md:text-left gap-4 md:gap-5 flex flex-col'>
          <h1 className={styles.heading}>Buy best perfume online UAE.</h1>
          <p className={styles.subHeading}>Discover a realm where scents transcend mere accessories and express your unique essence. Each fragrance is crafted with the finest ingredients, catering to every mood and desire. Best perfume for women.</p>
          <div className="text-white font-semibold text-lg flex gap-16 justify-center md:justify-start">
            <a href='https://gazaal.com/products/noorjes-imagine' target='_blank' rel="noopener noreferrer" className='px-6 py-3 bg-[#3AB7B3] rounded-full flex flex-row gap-2 items-center'>
              <HiMiniShoppingBag className='w-6 h-6' />
              <div className={`${styles.subHeading} !text-white`} >Order Now </div>
            </a>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Hero1
