import React from 'react'
import { styles } from '../style'
import { FaQuoteLeft } from "react-icons/fa";
import picture1 from '../assets/picture1.png'
import picture2 from '../assets/picture2.png'
import picture3 from '../assets/picture3.png'
import picture4 from '../assets/picture4.png'


const cardDetails = [{
  title: 'Alexis',
  description: 'NoorJes Imagine Perfume enhances my day with its magical scent. As a top Dubai perfume brand, it offers divine aromas that evolve beautifully. Every spray adds a little luxury to my moments. The Best Eau de perfum',
  video: true,
  icon: picture1

}, {
  title: 'geet',
  description: 'NoorJes The Best perfume for women in UAE. Its divine scent from the best Dubai perfume brands evolves beautifully. Each spray adds a luxurious touch, brightening my day. Buy best perfume online UAE.',
  video: true,
  icon: picture2
}, {
  title: 'Sarah',
  description: 'NoorJes Imagine Perfume adds magic to my day. Best Eau de perfum in Dubai offers divine scents that evolve beautifully. Every spray feels like a personal touch, a little luxury that brightens my moments. Buy Eau de perfum online UAE.',
  video: false,
  icon: picture3
}
  , {
  title: 'James',
  description: 'NoorJes Imagine Perfume makes every day magical. Its divine scent from the best Dubai perfume brands evolves beautifully. Each spray adds a luxurious touch, brightening my day. Buy best Eau de perfum.',
  video: false,
  icon: picture4
}]



const card = (title, description, icon, video, key) => {
  return (
    <>
      {video ?
        <div className='flex  bg-[#F5FBFB] rounded-xl relative mt-10' key={key}>
        <div alt='Shop perfumes online UAE.' className='absolute -top-5 right-6 h-10 w-10 md:h-16 md:w-16 md:-top-8 bg-[#3AB7B3] rounded-full aspect-square flex items-center justify-center p-[10px] md:p-4'>
          <FaQuoteLeft className='text-white w-full h-full' />
        </div>
        <img alt='Best Perfume Shop Online UAE' src={icon} className='h-full min-w-[200px] md:min-w-[300px]' />

      </div>
        :
        <div className='flex flex-col text-center min-w-[200px] md:min-w-[350px] md:max-w-[360px] bg-[#F5FBFB] rounded-xl items-center p-6 gap-4 relative mt-10' key={key}>
          <div alt='Buy Oud Perfume Online Dubai' className='absolute -top-5 right-6 h-10 w-10 md:h-16 md:w-16 md:-top-8 bg-[#3AB7B3] rounded-full aspect-square flex items-center justify-center p-[10px] md:p-4'>
            <FaQuoteLeft className='text-white w-full h-full' />
          </div>
          <img alt='Branded Perfumes Online Dubai' src={icon} className='h-20 w-20 md:h-20 md:w-20 rounded-full' />
          <p className={`${styles.lightHeading}`}>{title}</p>
          <p className={`${styles.subHeading}`}>{description}</p>
        </div>}

    </>

  )
}

const Hero7 = () => {
  return (
    <div className='flex flex-col w-full h-full gap-12 py-12 md:py-24 px-6 md:px-36' id='testimonial'>
      <div className='mx-auto flex flex-col md:max-w-6xl text-center gap-3 px-2'>
        <p className={`${styles.heroHeadText}`}>Our Fragrance Journey Through <span className='text-[#3AB7B3]'>Customer Eyes</span></p>
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
