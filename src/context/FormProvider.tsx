import { createContext, useContext, useState, type ReactNode } from "react";
import type { FormData } from "../entities/types";

interface FormContextType {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  borrowingAmount: number | null;
  setBorrowingAmount: React.Dispatch<React.SetStateAction<number | null>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

const INITIAL_DATA = {
  applicants: { isCouple: false, purpose: "owner", dependants: 0 },
  income: {
    salary: "",
    salaryFrequency: "Y",
    otherIncome: "",
    otherIncomeFrequency: "Y",
    partnerSalary: "",
    partnerSalaryFrequency: "Y",
    partnerIncome: "",
    partnerIncomeFrequency: "Y",
  },
  expenses: {
    livingExpenses: "",
    livingExpensesFrequency: "M",
    homeLoans: "",
    homeLoansFrequency: "M",
    personalLoans: "",
    personalLoansFrequency: "M",
    creditCards: "",
  },
} satisfies FormData;

export const FormContext = createContext<FormContextType | null>(null);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);
  const [borrowingAmount, setBorrowingAmount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        setBorrowingAmount,
        borrowingAmount,
        isLoading,
        setIsLoading,
        currentStep,
        setCurrentStep,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const ctx = useContext(FormContext);
  if (!ctx) throw new Error("context error");
  return ctx;
};
