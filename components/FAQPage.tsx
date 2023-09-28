'use client'

import { useState } from 'react';
import Image from 'next/image';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

import { frequentlyAskedQuestions } from '@/constants';
import AnimatedStar from './shared/AnimatedStar';

const FAQPage = () => {
  const [faqDetails, setFaqDetails] = useState(frequentlyAskedQuestions.map((each) => {
    return {
      ...each,
      toggleDetails: false
    }
  }));

  // Function to toggle the details of a specific FAQ
  const toggleFAQDetails = (id: string) => {
    setFaqDetails((prevDetails) => {
      return prevDetails.map((faq) => {
        if (faq.id === id) {
          return {
            ...faq,
            toggleDetails: !faq.toggleDetails
          };
        } else {
          return {
            ...faq,
            toggleDetails: false
          };
        }
      });
    });
  };

  return (
    <div className="min-h-screen border-t border-white/10">
      <div className="flex flex-col relative lg:flex-row w-9/10 lg:w-4/5 items-center mt-5 lg:mt-6 justify-center lg:justify-between mx-auto mb-5">
        <div className="lg:w-2/4">
          <h3 className="flex flex-col font-clashDisplay font-bold text-2xl lg:text-3xl items-center mt-2 lg:items-start">
            <span>Frequently Asked</span>
            <span className="text-secondary">Questions</span>
          </h3>
          <div className='text-center lg:text-left'>
            <span>We got answers to the questions that you might want to ask about</span>
            <span className='font-bold'>&nbsp;getlinked Hackathon 1.0</span>
          </div>



          <div>
            <div className='mt-10'>
              {faqDetails.map((faq) => {
                const { id, question, answer, toggleDetails } = faq;
                return (
                  <div key={id} className='border-b border-secondary mb-2'>
                    <div className='flex justify-between items-center mb-2'>
                      <span>{faq.question}</span>
                      <div className=' text-secondary' onClick={() => toggleFAQDetails(id)}>
                        {toggleDetails ?
                          <AiOutlineMinus /> : <AiOutlinePlus />}
                      </div>
                    </div>

                    <div className={`${toggleDetails ? 'flex' : 'hidden'} mb-2 text-primary/50`}>
                      {answer}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className='mt-16 lg:mt-10 relative'>
          <div className='flex absolute w-3/5 mx-auto justify-between -mt-9 left-10'>
            <div className='w-[20px] h-[30px] lg:w-[30px] lg:h-[50px] relative mt-10'>
             <Image src='/assets/question-mark.png' alt='question mark' fill />
            </div>
            <div className='w-[30px] h-[50px] lg:w-[40px] lg:h-[70px] relative'>
              <Image src='/assets/question-mark.png' alt='question mark' fill />
              <AnimatedStar className='text-secondary text-sm absolute left-10 lg:left-16 lg:mt-10'/>
            </div>
            <div className='w-[20px] h-[30px] lg:w-[30px] lg:h-[50px] relative mt-10'>
                <Image src='/assets/question-mark.png' alt='question mark' fill />                
            </div>

          </div>
          <AnimatedStar className='text-secondary text-sm mt-20 absolute left-16 lg:mt-28 lg:text-lg' />
          <AnimatedStar className='text-white/50 text-sm mt-36 absolute lg:mt-72 lg:text-xl'/>
          <AnimatedStar className='text-primary text-lg mt-80 lg:mt-[300px] absolute left-56'/>
          <div className='relative w-[300px] h-[320px] lg:w-[400px] lg:h-[450px] lg:mt-10'>
            <Image src='/assets/faq.png' alt='faq' fill quality={100} priority />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
