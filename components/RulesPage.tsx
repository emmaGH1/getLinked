import { introText } from "@/constants";
import Image from "next/image";
import PurpleGradient from "./shared/PurpleGradient";
import AnimatedStar from "./shared/AnimatedStar";

const RulesPage = () => {
  return (
    <div className="h-screen border-t border-white/10">
      <div className="relative flex flex-col lg:flex-row-reverse w-9/10 lg:w-4/5 items-center mt-5 lg:mt-0 justify-center lg:justify-between mx-auto">
      
      <PurpleGradient className='w-[250px] h-[250px] blur-[150px] left-10'/>
      <PurpleGradient className='w-[150px] h-[200px] mt-96 blur-[100px] right-0'/>
       
       <div className="lg:w-2/4 lg:flex lg:justify-end">
          <div className="relative w-[350px] h-[350px] lg:w-[500px] lg:h-[550px]">
            <Image src='/assets/rules-and-guidelines.png' alt='rules' fill quality={100} priority />
          </div>        
       </div>

       <div className="absolute left-1 lg:left-72 lg:-mt-80">
          <AnimatedStar className="lg:left-0 text-md lg:text-xl"/>
       </div>

       <div className="absolute lg:left-[500px] mt-[800px] lg:mt-80">
          <AnimatedStar className="lg:left-0 text-lg lg:text-xl"/>
       </div>

       <div className="lg:w-2/4">
            <h3 className="flex flex-col font-clashDisplay font-bold text-2xl lg:text-3xl items-center mt-2 lg:items-start">
                      <span>
                          Rules and
                      </span>
                      <span className="text-secondary">
                          Guidelines
                      </span>
            </h3>

            <div className="w-9/10 mx-auto lg:w-full text-center lg:text-start leading-7 lg:leading-8 mt-2">
               {introText}
            </div>
       </div>

      </div>
    </div>
  );
};

export default RulesPage;