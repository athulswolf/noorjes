import React from 'react'
import { styles } from '../style'
// import { icon4, icon5, icon6, icon7, icon8, icon9 } from '../../assets/landing/icon/icon'
// import phone1 from '../../assets/landing/phone1.png'



const Hero3 = () => {
  return (
    <div className='py-6 px-6 md:py-16 md:px-36'>
      <div className='flex flex-col w-full h-full items-center gap-6 md:gap-16'>
        <div className='flex flex-col md:max-w-4xl text-center gap-2 md:gap-4'>
          <p className={`${styles.heroHeadText}`}>A Perfume That Makes <span className='text-[#3AB7B3]'>Complete</span></p>
          <p className={`${styles.subHeading}`}>Eget arcu dictum varius duis. Volutpat lacus laoreet non curabitur gravida arcu ac tortor. Nunc id cursus metus aliquam. Ipsum dolor sit amet consectetur. Ipsum dolor sit amet consectetur. Eget duis at tellus at urna condimentum mattis pellentesque. Condimentum mattis pellentesque id nibh tortor id aliquet lectus proin.</p>
        </div>
        <img src='https://images.unsplash.com/photo-1612835362596-5b7b3b7b7b7b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyZmVjdCUyMGZvcm1hdCUyMGFwcG9pbnRtZW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80' alt="phone" className='w-full md:w-[300px]' />
      </div>
    </div>
  )
}

export default Hero3