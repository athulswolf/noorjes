import React from 'react'
import { styles } from '../style'
import video from '../assets/video.png'



const Hero3 = () => {
  return (
    <div className='py-6 px-6 md:py-16 md:px-36'>
      <div className='flex flex-col w-full h-full items-center gap-6 md:gap-16'>
        <div className='flex flex-col md:max-w-4xl text-center gap-2 md:gap-4'>
          <p className={`${styles.heroHeadText}`}>A Perfume That Makes <span className='text-[#3AB7B3]'>Complete</span></p>
          <p className={`${styles.subHeading}`}>Eget arcu dictum varius duis. Volutpat lacus laoreet non curabitur gravida arcu ac tortor. Nunc id cursus metus aliquam. Ipsum dolor sit amet consectetur. Ipsum dolor sit amet consectetur. Eget duis at tellus at urna condimentum mattis pellentesque. Condimentum mattis pellentesque id nibh tortor id aliquet lectus proin.</p>
        </div>
        <img src={video} alt="phone" className='w-full md:w-[300px]' />
      </div>
    </div>
  )
}

export default Hero3