import { useState } from "react";
import FirstSection from "./section-one/FirstSection";
import ThirdSection from "./section-three/ThirdSection";
import SecondSection from "./section-two/SecondSection";
import type { FormData } from "../../entities/types";
import Step from "./Step";
import { useFormContext } from "../../context/FormProvider";
import { calculateBorrowingAmount, delay } from "../helpers/helpers";

const HomeLoanForm = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const { formData, setFormData, setBorrowingAmount, setIsLoading } =
    useFormContext();

  async function handleCalculate() {
    setIsLoading(true);

    await delay(2000);
    const borrowing = calculateBorrowingAmount(formData);

    setBorrowingAmount(borrowing);

    setIsLoading(false);
  }

  const updateForm = <T extends keyof FormData>(
    section: T,
    values: Partial<FormData[T]>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        ...values,
      },
    }));
  };

  return (
    <div className="col-span-12 md:col-span-6 lg:col-start-2">
      <form
        aria-label="Borrowing amount calc input"
        className="relative h-170 w-full overflow-hidden"
      >
        <div className="relative">
          <Step index={0} currentStep={currentStep}>
            <FirstSection
              data={formData.applicants}
              onChange={(values) => updateForm("applicants", values)}
              onNext={() => setCurrentStep(1)}
            />
          </Step>
          <Step index={1} currentStep={currentStep}>
            <SecondSection
              isCouple={formData.applicants.isCouple}
              data={formData.income}
              onChange={(values) => updateForm("income", values)}
              onNext={() => setCurrentStep(2)}
              onBack={() => setCurrentStep(0)}
            />
          </Step>
          <Step index={2} currentStep={currentStep}>
            <ThirdSection
              data={formData.expenses}
              onChange={(values) => updateForm("expenses", values)}
              onBack={() => setCurrentStep(1)}
              handleCalculate={handleCalculate}
            />
          </Step>
        </div>
      </form>
    </div>
  );
};

export default HomeLoanForm;
