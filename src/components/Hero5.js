import React from 'react'
import { styles } from '../style'


const cardDetails = [{
  title: '4.9+ Review Rating',
  description: 'Immerse yourself in a symphony upon your skin. ',
  icon: "icon1",
}, {
  title: '4.9+ Review Rating',
  description: 'Immerse yourself in a symphony upon your skin. ',
  icon: "icon2",
}, {
  title: '4.9+ Review Rating',
  description: 'Immerse yourself in a symphony upon your skin. ',
  icon: "icon3",
}]



const card = (title, description,icon,key) => {
  return (
    <div className='flex flex-col max-w-xl text-center gap-2 md:gap-4' key={key}>
      {/* <img src={icon} alt="icon" className='w-16 h-16 md:w-24 md:h-24 mx-auto'/> */}
      <p className={`${styles.heroSubHeadText}`}>{title}</p>
      <p className={`${styles.heroSubText}`}>{description}</p>
    </div>
  )
}

const Hero5 = () => {
  return (
    <div className='py-28 px-6 md:px-36'>
      <div className='flex flex-col w-full h-full items-center gap-12 md:gap-24'>
        <div className='flex flex-col md:max-w-xl text-center gap-2 md:gap-4'>
          <p className={`${styles.heroHeadText}`}>Our Numbers Speak for themselves</p>
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