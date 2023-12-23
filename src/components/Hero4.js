import React from 'react'
import { styles } from '../style'
import Elipse1 from '../assets/Ellipse1.png'
import Elipse2 from '../assets/Ellipse2.png'
import Elipse3 from '../assets/Ellipse3.png'
import Elipse4 from '../assets/Ellipse4.png'
import Perfume from '../assets/Perfume.png'


const cardDetails = [{
  title: 'Amber',
  description: 'Immerse yourself in a symphony upon your skin. ',
  icon: Elipse1,
}, {
  title: 'Chinese Black Tea',
  description: 'Immerse yourself in a symphony upon your skin. ',
  icon: Elipse2,
}, {
  title: 'Noble Citrus',
  description: 'Immerse yourself in a symphony upon your skin. ',
  icon: Elipse3,
}, {
  title: 'Cinnamon',
  description: 'Immerse yourself in a symphony upon your skin. ',
  icon: Elipse4,
}]


const card = (title, description, icon,check,key) => {
  return (
    <div className={`flex h- flex-col max-w-xl text-left ${check && 'md:text-right md:items-end'} gap-2`} key={key}>
      <img src={icon} alt="icon" className='h-12 w-12' />
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
        <div className='grid grid-cols-4 md:grid-cols-4 gap-4 '>
  <div className='flex flex-col md:my-auto  justify-between col-span-1 gap-6'>
    {cardDetails.slice(0, 2).map((cardDetail,index) => card(cardDetail.title, cardDetail.description, cardDetail.icon, true,index))}
  </div>
  <div className='hidden md:flex md:my-auto justify-center col-span-2'>
    {/* change width */}
    <img src={Perfume} alt="perfume" className='w-full md:w-[500px]' />
  </div>
  <div className='flex flex-col md:my-auto justify-between col-span-1 gap-6'>
    {cardDetails.slice(2, 4).map((cardDetail,index) => card(cardDetail.title, cardDetail.description, cardDetail.icon, false,index))}
  </div>
</div>

      </div>
    </div>
  )
}

export default Hero4