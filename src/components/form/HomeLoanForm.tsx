import { useState } from "react";
import FirstSection from "./section-one/FirstSection";
import ThirdSection from "./section-three/ThirdSection";
import SecondSection from "./section-two/SecondSection";
import type { FormData } from "../../entities/types";
import Step from "./Step";

const INITIAL_DATA = {
  applicants: { isCouple: false, purpose: "owner", dependants: 0 },
  income: {
    salary: 0,
    salaryFrequency: "Y",
    otherIncome: 0,
    otherIncomeFrequency: "Y",
    partnerSalary: 0,
    partnerSalaryFrequency: "Y",
    partnerIncome: 0,
    partnerIncomeFrequency: "Y",
  },
  expenses: {
    livingExpenses: 0,
    livingExpensesFrequency: "M",
    homeLoans: 0,
    homeLoansFrequency: "M",
    personalLoans: 0,
    personalLoansFrequency: "M",
    creditCards: 0,
  },
} satisfies FormData;

const HomeLoanForm = () => {
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);
  const [currentStep, setCurrentStep] = useState<number>(0);

  function handleCalculate() {
    console.log(formData);
  }

  const updateForm = <T extends keyof FormData>(section: T, values: Partial<FormData[T]>) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        ...values,
      },
    }));
  };

  return (
    <div className="col-span-12 md:col-span-6 lg:col-start-2 ">
      <form
        aria-label="Borrowing amount calc input"
        className="w-full relative overflow-hidden h-170 ">
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
