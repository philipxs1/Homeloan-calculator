import FirstSection from "./section-one/FirstSection";
import ThirdSection from "./section-three/ThirdSection";
import SecondSection from "./section-two/SecondSection";
import type { FormData } from "../../entities/types";
import Step from "./Step";
import { useFormContext } from "../../context/FormProvider";
import { calculateBorrowingAmount, delay } from "../helpers/helpers";

const HomeLoanForm = () => {
  const {
    formData,
    setFormData,
    setBorrowingAmount,
    setIsLoading,
    setCurrentStep,
  } = useFormContext();

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
    <form
      aria-label="Borrowing amount calc input"
      className="relative col-span-12 h-180 w-full overflow-hidden md:col-span-5 md:min-h-screen lg:col-start-2"
    >
      <div className="relative">
        <Step index={0}>
          <FirstSection
            data={formData.applicants}
            onChange={(values) => updateForm("applicants", values)}
            onNext={() => setCurrentStep(1)}
          />
        </Step>
        <Step index={1}>
          <SecondSection
            isCouple={formData.applicants.isCouple ?? false}
            data={formData.income}
            onChange={(values) => updateForm("income", values)}
            onNext={() => setCurrentStep(2)}
            onBack={() => setCurrentStep(0)}
          />
        </Step>
        <Step index={2}>
          <ThirdSection
            data={formData.expenses}
            onChange={(values) => updateForm("expenses", values)}
            onBack={() => setCurrentStep(1)}
            handleCalculate={handleCalculate}
          />
        </Step>
      </div>
    </form>
  );
};

export default HomeLoanForm;
