import React, { useState } from 'react';
import { styles } from '../style';
import { FaCirclePlus } from 'react-icons/fa6';

const cardDetails = [
  {
    id: 1,
    question: "What distinguishes NoorJes Imagine Perfume from others?",
    answer: "Our fragrances are created with care, combining premium ingredients for a unique experience.",
  },
  {
    id: 2,
    question: 'Are the fragrances safe for sensitive skin?',
    answer: 'Yes, our formulas are dermatologist-tested, ensuring they are gentle on all skin types.',
  },
  {
    id: 3,
    question: 'How can I make my perfume last throughout the day?',
    answer: 'Hydrate your skin, apply perfume on moisturized skin, and avoid rubbing.',
  },
  {
    id: 4,
    question: 'Are the materials used in the packaging eco-friendly?',
    answer: "Definitely! We are dedicated to sustainable practices and use environmentally friendly materials in our packaging.",
  },
  {
    id: 5,
    question: 'Where Can I Find the Best Perfume Online in UAE?',
    answer: 'NoorJes offers an outstanding collection of the best Eau de perfum in UAE, allowing you to shop from the comfort of your home.',
  },
];

const Card = ({ question, answer, id, activeCard, onCardClick }) => {
  const isOpen = activeCard === id;

  return (
    <div>
      <div
        className={`flex flex-col bg-[#F5FBFB] rounded-xl p-3 md:p-6 gap-4 `}
        onClick={() => onCardClick(id)}
      >
        <div className='flex flex-row justify-between w-full gap-4 md:items-center'>
          <p className="text-[#151515] text-sm md:text-2xl font-medium font-playfair capitalize flex items-center flex-1">{question}</p>
          <FaCirclePlus className={`flex items-center text-[#3AB7B3] w-8 h-8 md:w-10 md:h-10 ${isOpen ? 'rotate-transition rotate-45' : 'rotate-transition'} `} />
        </div>
        {isOpen && <div className='w-full'><p className="text-[#555555] text-sm md:text-lg font-normal font-raleway capitalize">{answer}</p></div>}
      </div>
    </div>
  );
};

const Hero8 = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (id) => {
    setActiveCard((prevActiveCard) => (prevActiveCard === id ? null : id));
  };

  return (
    <div id='faq' className='flex flex-col w-full h-full gap-5 md:gap-12 py-12 md:py-24 px-6 md:px-36'>
      <div className='mx-auto flex flex-col text-center gap-3 px-2'>
        <p className={`${styles.heroHeadText}`}>Your Fragrance<span className='text-[#3AB7B3]'> Questions</span> resolved</p>
      </div>
      <div className='flex w-full py-1'>
        <div className='flex flex-col w-full gap-8'>
          {cardDetails.map((cardDetail) => (
            <Card
              key={cardDetail.id}
              question={cardDetail.question}
              answer={cardDetail.answer}
              id={cardDetail.id}
              activeCard={activeCard}
              onCardClick={handleCardClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero8;
