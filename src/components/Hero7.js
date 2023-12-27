import React from 'react'
import { styles } from '../style'
import { FaQuoteLeft } from "react-icons/fa";
import picture1 from '../assets/picture1.png'
import picture2 from '../assets/picture2.png'
import picture3 from '../assets/picture3.png'
import picture4 from '../assets/picture4.png'


const cardDetails = [{
  title: 'Marvin McKinney',
  description: 'Customer testimonials are more effective than paid marketing copy as they take the spotlight away from the seller to shine it on the customers. Customer testimonials are more effective than paid marketing copy as they take the spotlight away from the seller to shine it on the customers. ',
  video: true,
  icon: picture1

}, {
  title: 'Albert Flores',
  description: 'Customer testimonials are more effective than paid marketing copy as they take the spotlight away from the seller to shine it on the customers. Customer testimonials are more effective than paid marketing copy as they take the spotlight away from the seller to shine it on the customers. ',
  video: true,
  icon: picture2
}, {
  title: 'Marvin McKinney',
  description: 'Customer testimonials are more effective than paid marketing copy as they take the spotlight away from the seller to shine it on the customers. Customer testimonials are more effective than paid marketing copy as they take the spotlight away from the seller to shine it on the customers. ',
  video: false,
  icon: picture3
}
  , {
  title: 'Eleanor Pena',
  description: 'Customer testimonials are more effective than paid marketing copy as they take the spotlight away from the seller to shine it on the customers. Customer testimonials are more effective than paid marketing copy as they take the spotlight away from the seller to shine it on the customers. ',
  video: false,
  icon: picture4
}]



const card = (title, description, icon, video, key) => {
  return (
    <>
      {video ?
        <div className='flex  bg-[#F5FBFB] rounded-xl relative mt-10' key={key}>
        <div alt='comment' className='absolute -top-5 right-6 h-10 w-10 md:h-16 md:w-16 md:-top-8 bg-[#3AB7B3] rounded-full aspect-square flex items-center justify-center p-[10px] md:p-4'>
          <FaQuoteLeft className='text-white w-full h-full' />
        </div>
        <img src={icon} className='h-full min-w-[200px] md:min-w-[300px]' />

      </div>
        :
        <div className='flex flex-col text-center min-w-[200px] md:min-w-[350px] md:max-w-[360px] bg-[#F5FBFB] rounded-xl items-center p-6 gap-4 relative mt-10' key={key}>
          <div alt='comment' className='absolute -top-5 right-6 h-10 w-10 md:h-16 md:w-16 md:-top-8 bg-[#3AB7B3] rounded-full aspect-square flex items-center justify-center p-[10px] md:p-4'>
            <FaQuoteLeft className='text-white w-full h-full' />
          </div>
          <img src={icon} className='h-20 w-20 md:h-20 md:w-20 rounded-full' />
          <p className={`${styles.lightHeading}`}>{title}</p>
          <p className={`${styles.subHeading}`}>{description}</p>
        </div>}

    </>

  )
}

const Hero7 = () => {
  return (
    <div className='flex flex-col w-full h-full gap-12 py-12 md:py-24 px-6 md:px-36'>
      <div className='mx-auto flex flex-col md:max-w-xl text-center gap-3 px-2'>
        <p className={`${styles.heroHeadText}`}>Love<span className='text-[#3AB7B3]'> Words </span>From Purchaser</p>
      </div>
      <div className='flex justify-center w-full py-1'>
        <div className='flex flex-row gap-8 overflow-x-auto pr-4'>
          {cardDetails.map((cardDetail, index) => card(cardDetail.title, cardDetail.description, cardDetail.icon, cardDetail.video, index))}
        </div>
      </div>
    </div>

  )
}

export default Hero7