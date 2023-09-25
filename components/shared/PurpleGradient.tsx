import { cn } from '@/lib/utils';
import { ClassNameValue } from 'tailwind-merge';

interface Props {
   className?: ClassNameValue
}

const PurpleGradient = ({ className }: Props) => {
  return (
     <>
      <div
        className={cn("bg-accent blur-[150px]  rounded-full absolute z-[-2] bg-blend-hard-light", className)} />
     </>
  );
};

export default PurpleGradient;