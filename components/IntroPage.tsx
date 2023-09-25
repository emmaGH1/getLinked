import { introText } from "@/constants";
import Image from "next/image";
import AnimatedStar from "./shared/AnimatedStar";

const IntroPage = () => {
  return (
    <div className="min-h-screen border-t border-white/10">
      <div className="container flex flex-col lg:flex-row mt-20 items-center lg:w-4/5 lg:mx-auto">

        <div className="lg:w-2/4">
            <div className=" w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative">
                <Image src='/assets/big-idea.png' alt='big-idea' fill={true} priority />
            </div>
        </div>

        <div className="relative w-7 h-7 lg:w-[50px] lg:h-[50px] mt-1 lg:top-40 lg:right-36">
            <Image src='/assets/arrow.png' alt="arrow" fill className="absolute" />
        </div>

        <div className="flex flex-col mt-3 w-4/5 lg:w-2/4 ">
            <h3 className="flex flex-col font-clashDisplay font-bold text-2xl lg:text-3xl items-center mt-2 lg:items-start">
                <span>
                    Introduction to getlinked
                </span>
                <span className="text-secondary">
                    techHackathon 1.0
                </span>
            </h3>
            <div className="absolute right-12 lg:right-36 mt-10">
              <AnimatedStar className="text-secondary w-5 h-3 lg:w-[30px] lg:h-[36px]"/>
            </div>
            <p className="mt-5 w-9/10 mx-auto text-center leading-7 font-normal lg:text-start lg:w-full">
              {introText}  
            </p>
      </div>
      </div>
    </div>
  );
};

export default IntroPage;