'use client'

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import countdownTimer from "@/lib/countDownTimer";
import AnimatedStar from "./shared/AnimatedStar";
import { letter, sentence, textMotion } from "@/lib/motion";

const HomePage = () => {
  const paragraph1 = 'getlinked Tech'
  const paragraph2 = 'Hackathon 1.0'
  const { hours, minutes, seconds } = countdownTimer()
  return (
    <div className='border-t border-white/10 mt-5'>

      <motion.div className="flex w-9/10 mx-auto mt-5 justify-center font-bold italic text-lg lg:text-3xl whitespace-nowrap lg:justify-end" variants={textMotion} initial='hidden' animate='show'>
        <span>Igniting a Revolution in</span>
        &nbsp;
        <div>
          <span>HR Innovation</span>
          <Image src='/assets/stroke.svg' alt='line-stroke' width={117} height={7} />
        </div>
        
        <div className="absolute left-28 top-36">
            <AnimatedStar className="text-lg lg:text-2xl" />
        </div>

        <div className="absolute right-10 top-40">
            <AnimatedStar className="text-xs lg:text-md" />
        </div>
      </motion.div>
      
      <div className="flex flex-col md:flex-row md:w-4/5 mx-auto md:justify-between">
            <div className='absolute left-[65%] mt-6 lg:left-[515px]'>
                <Image src='/assets/bulb.svg' width={18} height={26} alt="bulb" className="lg:w-10 lg:h-10"/>
            </div>
            <div className="w-4/5 flex flex-col mx-auto items-center whitespace-nowrap lg:w-full lg:items-start mt-5">
                <h2 className=" text-3xl lg:text-[60px] font-bold flex flex-col items-center lg:items-start mt-10 font-clashDisplay">
                    <span>getlinked Tech</span>
                    <div className="flex lg:mt-5">
                    <span>Hackathon</span> &nbsp;
                    <div className="flex">
                        <span className=" text-secondary">1.0</span>
                        <div className="flex items-center">
                            <Image src='/assets/chain.svg' alt="chain" width={32} height={32} className="lg:w-12 lg:h-12"/>
                            <Image src='assets/fire.svg' alt="fire" width={32} height={32} className="lg:w-8 lg:h-8"/>
                        </div>
                    </div>
                    </div>
                </h2>

                <p className="flex flex-col mt-5 lg:items-start">
                    <span>Participate in getlinked tech Hackathon</span>
                    <span>2023 stand a chance to win a big prize</span>
                </p>

                <Link href='/register'>
                    <div className="absolute right-28">
                    <AnimatedStar className="text-xs lg:text-md mt-10" />
                    </div>
                    <button className="gradient-primary px-10 py-3 rounded-sm mt-7">
                        Register
                    </button>
                </Link>

                <div className="flex text-[14px] mt-2">
                    <div className="m-3 lg:m-0 lg:mr-3">
                    <span className="text-[48px] font-unicaOne">{hours}</span>
                    <span>H</span>
                    </div>
                    <div className="m-3 lg:m-0 lg:mr-3">
                    <span className="text-[48px] font-unicaOne">{minutes}</span>
                    <span>M</span>
                    </div>
                    <div className="m-3 lg:m-0 lg:mr-3">
                    <span className="text-[48px] font-unicaOne">{seconds}</span>
                    <span>S</span>
                    </div>
                </div>
            </div>

            <div className="lg:flex relative lg:w-[900px] lg:h-[400px]">
                <Image src='/assets/man-wearing-smart-glasses-touching-virtual-screen 1.png' alt='banner-image' fill quality={100} priority={true} className="bg-blend-hard-light grayscale" />
                <div className="w-[300px] h-[330px] lg:h-[320px] animate-pulse">
                  <Image src='/assets/blue-dimension-light.png' alt="blue-ball" fill className="absolute"/>
                </div>
            </div>

      </div>

    </div>
  );
};

export default HomePage;