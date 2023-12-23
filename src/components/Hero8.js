import React from 'react'
import { styles } from '../style'
import { FaCirclePlus } from "react-icons/fa6";
import { useState } from 'react';


const cardDetails = [{
  question: "Immerse yourself in a symphony of delightful notes that dance upon your skin?",
}, {
  question: 'Our perfumes blend artistry and passion, capturing the essence of femininity and allure?',
}, {
  question: 'Searobin freshwater hatchetfish sea bass orangestriped triggerfish white croaker?',
}, {
  question: 'Pollock pencil catfish airbreathing catfish vendace pygmy sunfish spaghetti. Dogteeth tetra coley?',
}, {
  question: 'Dogteeth tetra coley. Merluccid hake redlip blenny discus ?'
}]



const Card = (question, key) => {
  const [toggle, setToggle] = useState(false)
  return (
    <div>
      <div className='flex flex-row justify-between w-full bg-[#F5FBFB] rounded-xl p-3 md:p-6 gap-4 md:items-center' key={key} onClick={() => setToggle(!toggle)} >
        <p className="text-[#151515] text-sm md:text-xl font-normal  font-raleway capitalize">{question}</p>
        <FaCirclePlus className='text-[#3AB7B3] w-10 h-10' />
      </div>
      <div>
        {toggle && <div className='flex flex-row justify-between w-full rounded-xl p-3 md:p-6 gap-4 md:items-center'> <p className="text-[#151515] text-sm md:text-xl font-normal font-raleway capitalize">{question}</p></div>}
      </div>
    </div>

  )
}

const Hero8 = () => {
  return (
      <div className='flex flex-col w-full h-full gap-5 md:gap-12 py-12 md:py-24 px-6 md:px-36'>
        <div className='mx-auto flex flex-col text-center gap-3 px-2'>
          <p className={`${styles.heroHeadText}`}>We Have the <span className='text-[#3AB7B3]'>Required</span> QnA</p>
        </div>
        <div className='flex w-full py-1'>
          <div className='flex flex-col  w-full gap-8'>
            {cardDetails.map((cardDetail) => Card(cardDetail.question))}
          </div>
        </div>
      </div>

      )
}

      export default Hero8