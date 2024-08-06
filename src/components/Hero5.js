import React from 'react';
import { styles } from '../style';
import icon5 from '../assets/icon/Icon5.png';
import icon6 from '../assets/icon/Icon6.png';
import icon7 from '../assets/icon/Icon7.png';

const cardDetails = [
  {
    title: 'Amazon Rating: 4.9+/5',
    description: 'Trusted by customers worldwide for excellence',
    icon: icon5,
  },
  {
    title: 'Noon Rating: 4.7+/5',
    description: 'Noon shoppers love our scents, top-rated always.',
    icon: icon6,
  },
  // {
  //   title: 'Webship Rating: 4.9+/5',
  //   description: 'Webship users rate us high, fragrance satisfaction guaranteed',
  //   icon: icon7,
  // },
];

const card = (title, description, icon, key) => {
  return (
    <div className='flex flex-col w-60 h-60 md:w-96 md:h-96 text-center gap-2 md:gap-4 border-2 border-[#3AB7B3] rounded-full aspect-square justify-center p-4' key={key}>
      <img src={icon} alt="Buy perfume online amazon, noon" className='w-16 h-16 md:w-24 md:h-24 mx-auto' />
      <p className="text-[#151515] font-normal text-base md:text-2xl font-playfair">{title}</p>
      <p className={`${styles.subHeading}`}>{description}</p>
    </div>
  );
};

const Hero5 = () => {
  return (
    <div className='py-28 '>
      <div className='flex flex-col w-full h-full items-center gap-12 md:gap-24'>
        <div className='flex flex-col md:max-w-6xl text-center gap-2 md:gap-4'>
          <p className={`${styles.heroHeadText}`}>Top <span className='text-[#3AB7B3]'>Ratings </span>Across Leading Platforms Worldwide</p>
        </div>
        <div className='flex justify-center w-full py-1 px-6 '>
          <div className='flex flex-row gap-8 overflow-x-auto  pr-4'>
            {cardDetails.map((cardDetail, index) => card(cardDetail.title, cardDetail.description, cardDetail.icon, index))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero5;
