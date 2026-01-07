import { createContext, useContext, useState, type ReactNode } from "react";
import type { FormData } from "../entities/types";

interface FormContextType {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  borrowingAmount: number | null;
  setBorrowingAmount: React.Dispatch<React.SetStateAction<number | null>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

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

export const FormContext = createContext<FormContextType | null>(null);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);
  const [borrowingAmount, setBorrowingAmount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        setBorrowingAmount,
        borrowingAmount,
        isLoading,
        setIsLoading,
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
