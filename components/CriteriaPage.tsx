import Image from "next/image";
import AnimatedStar from "./shared/AnimatedStar";
import PurpleGradient from "./shared/PurpleGradient";
import { criteriaList } from '../constants/index';

const CriteriaPage = () => {
  return (
<div className="min-h-screen border-t border-white/10">
      <div className="relative flex flex-col lg:flex-row w-9/10 lg:w-4/5 items-center mt-5 lg:mt-6 justify-center lg:justify-between mx-auto">
      
      <PurpleGradient className='w-[250px] h-[250px] blur-[150px] left-10'/>
      <PurpleGradient className='w-[150px] h-[200px] mt-96 blur-[100px] right-0'/>
       
       <div className="lg:w-2/4 lg:flex lg:justify-start">
          <div className="relative w-[300px] h-[350px] lg:w-[350px] lg:h-[400px]">
            <Image src='/assets/judging-criterias.png' alt='criterias' fill quality={100} priority />
          </div>        
       </div>

       <div className="absolute lg:left-56 lg:-mt-[500px] -mt-[1000px]">
          <AnimatedStar className="lg:left-0 text-md lg:text-xl text-accent" />
       </div>

       <div className="absolute lg:left-[150px] -mt-[600px] lg:mt-10">
          <AnimatedStar className="lg:left-0 text-lg lg:text-lg text-gray-500"/>
       </div>

       <div className="absolute lg:left-[400px] mt-[900px] left-60 lg:mt-80">
          <AnimatedStar className="lg:left-0 text-lg lg:text-xl"/>
       </div>

       <div className="lg:w-2/4">
            <h3 className="flex flex-col font-clashDisplay font-bold text-2xl lg:text-3xl items-center mt-2 lg:items-start">
                      <span>
                          Judging Criteria
                      </span>
                      <span className="text-secondary">
                          Key Attributes
                      </span>
            </h3>

            <div className="flex flex-col mt-2">
               {criteriaList.map((item, i) => (
                <li
                key={i}
                className="text-sm font-normal list-none text-center lg:text-start mt-2"
              >
                <span className="text-secondary font-bold">
                  {item.headline}
                </span>
                <span>{item.content}</span>
              </li>

               ))}
            </div>

            <div className="w-full mx-auto flex justify-center lg:justify-start">
                <button className="gradient-primary px-4 py-2 mt-5 mb-5 rounded-md">
                    Read More
                </button>
            </div>
       </div>

      </div>
    </div>
  );
};

export default CriteriaPage;