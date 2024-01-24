import React from 'react'
import { styles } from '../style'
import video from '../assets/video.png'



const Hero3 = () => {
  return (
    <div className='py-6 px-6 md:py-16 md:px-36'>
      <div className='flex flex-col w-full h-full items-center gap-6 md:gap-16'>
        <div className='flex flex-col md:max-w-5xl text-center gap-2 md:gap-4'>
          <p className={`${styles.heroHeadText} capitalize`}>Introducing<span className='text-[#3AB7B3]'> NoorJes</span> - your favorite fragrance!</p>
          <p className={`${styles.subHeading}`}>Discover the fragrance that perfectly aligns with your distinctive style.Your journey to a perfect refreshing day begins here with our perfume!</p>
        </div>
        <img src={video} alt="phone" className='w-full md:w-full' />
      </div>
    </div>
  )
}

export default Hero3