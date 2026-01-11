import { type ReactNode } from "react";
import { useFormContext } from "../../hooks/useFormContext";

interface StepProps {
  index: number;
  children: ReactNode;
}

const Step = ({ index, children }: StepProps) => {
  const { currentStep } = useFormContext();
  const offset = (index - currentStep) * 100;

  return (
    <section
      inert={currentStep !== index ? true : undefined}
      aria-hidden={currentStep !== index}
      className={`absolute inset-0 w-full transition-transform duration-300 ease-in-out ${
        currentStep === index
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
      style={{ transform: `translateX(${offset}%)` }}
    >
      {children}
    </section>
  );
};

export default Step;
