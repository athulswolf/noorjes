import React from 'react'
import { styles } from '../style'


const Hero9 = () => {
  return (
    <div className='mx-6 md:mx-36 my-4 md:my-10 flex flex-col md:flex-row bg-[#C4C4C4] rounded-xl px-4 gap-4'>
      <div className='flex md:flex-1 flex-col justify-center items-center gap-4 py-4'>
        <div className='md:max-w-lg flex flex-col gap-4'>
          <p className="text-[#151515] font-normal text-2xl md:text-5xl font-playfair">Enough talk, let's make you look beautiful</p>
          <p className={`${styles.subHeading}`}>Immerse yourself in a symphony of delightful notes that dance upon your skin. Our perfumes blend artistry and passionu.</p>
          <div className='flex flex-row gap-4'>
            <div className='px-6 py-2 bg-[#3AB7B3] rounded-full flex flex-row gap-2'>
              <a href='/contact' className={`${styles.subHeading} !text-white`}>Order Now </a>
            </div>
          </div>
        </div>
      </div>
      <div className='flex md:flex-1 flex-row md:gap-8 justify-around md:justify-center'>
        {/* <img src={phone2} className='h-36 md:h-72 lg:h-96 md:pb-10 hidden md:flex' />
        <img src={phone4} className='h-36 md:h-72 lg:h-96 md:pt-10 flex md:hidden' />
        <img src={phone3} className='h-36 md:h-72 lg:h-96 md:pt-10' /> */}
      </div>
    </div>
  )
}

export default Hero9