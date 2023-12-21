import React from 'react'
import { styles } from '../style'
// import { icon4, icon5, icon6, icon7, icon8, icon9 } from '../../assets/landing/icon/icon'
// import phone1 from '../../assets/landing/phone1.png'

const cardDetails = [{
  title: 'Amber',
  description: 'Immerse yourself in a symphony upon your skin. ',
  icon: "icon4",
}, {
  title: 'Chinese Black Tea',
  description: 'Immerse yourself in a symphony upon your skin. ',
  icon: "icon5",
}, {
  title: 'Noble Citrus',
  description: 'Immerse yourself in a symphony upon your skin. ',
  icon: "icon6",
}, {
  title: 'Cinnamon',
  description: 'Immerse yourself in a symphony upon your skin. ',
  icon: "icon7",
}]


const card = (title, description, icon,check,key) => {
  return (
    <div className={`flex h- flex-col max-w-xl text-left ${check && 'md:text-right md:items-end'} gap-2`} key={key}>
      {/* <img src={icon} alt="icon" className='h-12 w-12' /> */}
      <p className={`${styles.lightHeading}`}>{title}</p>
      <p className={`${styles.subHeading}`}>{description}</p>
    </div>
  )
}

const Hero4 = () => {
  return (
    <div className='py-6 px-6 md:py-16 md:px-36'>
      <div className='flex flex-col w-full h-full items-center gap-6 md:gap-16'>
        <div className='flex flex-col md:max-w-5xl text-center gap-2 md:gap-4'>
        <p className={`${styles.heroHeadText}`}>A Perfume That Makes <span className='text-[#3AB7B3]'>Complete</span></p>
        </div>
        <div className='grid grid-cols-6 md:grid-cols-8 gap-4 md:gap-8'>
  <div className='flex flex-col md:my-auto  justify-between col-span-3 gap-6'>
    {cardDetails.slice(0, 2).map((cardDetail,index) => card(cardDetail.title, cardDetail.description, cardDetail.icon, true,index))}
  </div>
  <div className='hidden md:flex md:my-auto justify-center col-span-2'>
    {/* <img src={phone1} alt="phone" className='w-full md:w-[300px]' /> */}
  </div>
  <div className='flex flex-col md:my-auto justify-between col-span-3 gap-6'>
    {cardDetails.slice(2, 4).map((cardDetail,index) => card(cardDetail.title, cardDetail.description, cardDetail.icon, false,index))}
  </div>
</div>

      </div>
    </div>
  )
}

export default Hero4