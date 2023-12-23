import React from 'react'
import { styles } from '../style'
import icon5 from '../assets/icon/Icon5.png'
import icon6 from '../assets/icon/Icon6.png'
import icon7 from '../assets/icon/Icon7.png'


const cardDetails = [{
  title: '4.9+ Review Rating',
  description: 'Immerse yourself in a symphony upon your skin. ',
  icon: icon5,
}, {
  title: '4.9+ Review Rating',
  description: 'Immerse yourself in a symphony upon your skin. ',
  icon: icon6,
}, {
  title: '4.9+ Review Rating',
  description: 'Immerse yourself in a symphony upon your skin. ',
  icon: icon7,
}]



const card = (title, description,icon,key) => {
  return (
    <div className='flex flex-col max-w-xl text-center gap-2 md:gap-4 border-2 border-[#3AB7B3] rounded-full aspect-square justify-center p-4' key={key}>
      <img src={icon} alt="icon" className='w-16 h-16 md:w-24 md:h-24 mx-auto'/>
      <p className="text-[#151515] font-normal text-base md:text-2xl font-playfair">{title}</p>
      <p className={`${styles.subHeading}`}>{description}</p>
    </div>
  )
}

const Hero5 = () => {
  return (
    <div className='py-28 px-6 md:px-36'>
      <div className='flex flex-col w-full h-full items-center gap-12 md:gap-24'>
        <div className='flex flex-col md:max-w-4xl text-center gap-2 md:gap-4'>
        <p className={`${styles.heroHeadText}`}>Our Numbers  <span className='text-[#3AB7B3]'>Speak</span> for themselves</p>
        </div>
        <div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12'>
            {cardDetails.map((cardDetail,index) => (card(cardDetail.title, cardDetail.description,cardDetail.icon,index)))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero5