import React from 'react'
import { styles } from '../style'
import icon1 from '../assets/icon/Icon1.png'
import icon2 from '../assets/icon/Icon2.png'
import icon3 from '../assets/icon/Icon3.png'
import icon4 from '../assets/icon/Icon4.png'


const cardDetails = [{
  title: '100% high quality product',
  description: 'Immerse yourself in a symphony upon your skin. ',
  icon: icon1,
}, {
  title: 'Best Quality product',
  description: 'Immerse yourself in a symphony upon your skin. ',
  icon: icon2,
}, {
  title: 'Free shipping charge',
  description: 'Immerse yourself in a symphony upon your skin. ',
  icon: icon3,
},
{
    title: 'Money back guarantee',
    description: 'Immerse yourself in a symphony upon your skin. ',
    icon: icon4,
}]



const card = (title, description,icon,key) => {
  return (
    <div className='flex flex-col max-w-xl text-left gap-1 md:gap-2' key={key}>
      <img src={icon} alt="icon" className='w-10 h-10 md:w-16 md:h-16'/>
      <p className={`${styles.lightHeading}`}>{title}</p>
      <p className={`${styles.subHeading}`}>{description}</p>
    </div>
  )
}

const Hero2 = () => {
  return (
    <div className='py-16 md:py-32 px-6 md:px-36'>
      <div className='flex flex-col w-full h-full items-center gap-12 md:gap-24'>
        <div>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-12'>
            {cardDetails.map((cardDetail,index) => (card(cardDetail.title, cardDetail.description,cardDetail.icon,index)))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero2