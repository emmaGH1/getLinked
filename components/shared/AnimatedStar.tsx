import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes } from 'react';
import { PiStarFourFill } from 'react-icons/pi';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const AnimatedStar = ({ className }: ButtonProps) => {
  return (
    <div className="absolute">
      <div className="animate-shine absolute w-6 h-6 bg-white rounded-full top-0 left-0 opacity-0"></div>
      <div className="animate-pulse">
        <PiStarFourFill className={cn("text-white text-6xl", className)} />
      </div>
    </div>
  );
}

export default AnimatedStar;
