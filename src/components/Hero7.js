import React from 'react'
import { styles } from '../style'
import { FaQuoteLeft } from "react-icons/fa";


const cardDetails = [{
  title: 'Marvin McKinney',
  description: 'Customer testimonials are more effective than paid marketing copy as they take the spotlight away from the seller to shine it on the customers. Customer testimonials are more effective than paid marketing copy as they take the spotlight away from the seller to shine it on the customers. ',
  icon: "profile1"
}, {
  title: 'Albert Flores',
  description: 'Customer testimonials are more effective than paid marketing copy as they take the spotlight away from the seller to shine it on the customers. Customer testimonials are more effective than paid marketing copy as they take the spotlight away from the seller to shine it on the customers. ',
  icon: "profile2"
}, {
  title: 'Ronald Richards',
  description: 'Customer testimonials are more effective than paid marketing copy as they take the spotlight away from the seller to shine it on the customers. Customer testimonials are more effective than paid marketing copy as they take the spotlight away from the seller to shine it on the customers. ',
  icon: "profile3"
}]



const card = (title, description,icon,key) => {
  return (
<div className='flex flex-col text-center min-w-[200px] md:min-w-[350px] md:max-w-[360px] bg-[#F5FBFB] rounded-xl items-center p-6 gap-4 relative mt-10' key={key}>
  {/* <img src={icon} alt="icon" className='w-16 md:w-24 h-16 md:h-24'/> */}
  <div alt='comment' className='absolute -top-5 right-6 h-10 w-10 md:h-16 md:w-16 md:-top-8 bg-[#3AB7B3] rounded-full aspect-square flex items-center justify-center p-[10px] md:p-4'>
    <FaQuoteLeft className='text-white w-full h-full'/>
  </div>
  <p className={`${styles.lightHeading}`}>{title}</p>
  <p className={`${styles.subHeading}`}>{description}</p>
</div>

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
        {cardDetails.map((cardDetail,index) => card(cardDetail.title, cardDetail.description, cardDetail.icon,index))}
      </div>
    </div>
  </div>

  )
}

export default Hero7