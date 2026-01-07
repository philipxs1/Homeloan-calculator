import { type ReactNode } from "react";
interface StepProps {
  index: number;
  currentStep: number;
  children: ReactNode;
}

const Step = ({ index, currentStep, children }: StepProps) => {
  const offset = (index - currentStep) * 100;
  return (
    <section
      className="absolute inset-0 w-full transition-transform duration-300 ease-in-out"
      style={{ transform: `translateX(${offset}%)` }}>
      {children}
    </section>
  );
};

export default Step;
