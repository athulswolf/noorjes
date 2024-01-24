import React from 'react'
import { styles } from '../style'
import { FaCirclePlus } from "react-icons/fa6";
import { useState } from 'react';


const cardDetails = [{
  question: "What distinguishes NoorJes Imagine Perfume from others?",
  answer: "Our fragrances are created with care, combining premium ingredients for an unique experience."
}, {
  question: 'Are the fragrances safe for sensitive skin?',
  answer:'Yes, our formulas are dermatologist-tested, ensuring they are gentle on all skin types.'
}, {
  question: 'How can I make my perfume last throughout the day?',
  answer:'Hydrate your skin, apply perfume on moisturized skin, and avoid rubbing.'
}, {
  question: 'Are the materials used in the packaging eco-friendly?',
  answer:"Definitely! We are dedicated to sustainable practices and use environmentally friendly materials in our packaging."
}, {
  question: 'Can I layer different NoorJesse scenes?',
  answer:' Sure! Our fragrances are intended to work with one another, so you may create your own special blend.'
}]



const Card = (question,answer, key) => {
  const [toggle, setToggle] = useState(false)
  return (
    <div>
      <div className='flex flex-col  bg-[#F5FBFB] rounded-xl p-3 md:p-6 gap-4 ' key={key} onClick={() => setToggle(!toggle)} >
        <div className='flex flex-row justify-between w-full gap-4 md:items-center'>
        <p className="text-[#151515] text-sm md:text-2xl font-medium font-playfair capitalize flex items-center">{question}</p>
        <FaCirclePlus className={`text-[#3AB7B3] w-10 h-10 aspect-square ${toggle ? 'rotate-transition rotate-45' : 'rotate-transition'} `} />
        </div>
        {toggle && <div className=' w-full'> <p className="text-[#555555] text-sm md:text-lg font-normal font-raleway capitalize">{answer}</p></div>}
      </div>
    </div>

  )
}

const Hero8 = () => {
  return (
    <div id='faq' className='flex flex-col w-full h-full gap-5 md:gap-12 py-12 md:py-24 px-6 md:px-36'>
      <div className='mx-auto flex flex-col text-center gap-3 px-2'>
        <p className={`${styles.heroHeadText}`}>Your Fragrance<span className='text-[#3AB7B3]'> Questions</span> resolved</p>
      </div>
      <div className='flex w-full py-1'>
        <div className='flex flex-col  w-full gap-8'>
          {cardDetails.map((cardDetail) => Card(cardDetail.question,cardDetail.answer))}
        </div>
      </div>
    </div>

  )
}

export default Hero8