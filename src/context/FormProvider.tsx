import { useState, useMemo, type ReactNode, useCallback } from "react";
import type { FormData } from "../entities/types";
import { FormContext } from "./FormContext";

const INITIAL_DATA = {
  applicants: { isCouple: false, purpose: "owner", dependants: 0 },

  income: {
    salary: { amount: "", frequency: "Y" },
    otherIncome: { amount: "", frequency: "Y" },
    partnerSalary: { amount: "", frequency: "Y" },
    partnerIncome: { amount: "", frequency: "Y" },
  },
  expenses: {
    livingExpenses: { amount: "", frequency: "M" },
    homeLoans: { amount: "", frequency: "M" },
    personalLoans: { amount: "", frequency: "M" },
    creditCards: 0,
  },
} satisfies FormData;

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);
  const [borrowingAmount, setBorrowingAmount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const resetForm = useCallback(() => {
    setFormData(INITIAL_DATA);
    setBorrowingAmount(null);
    setCurrentStep(0);
  }, []);

  const value = useMemo(
    () => ({
      formData,
      setFormData,
      setBorrowingAmount,
      borrowingAmount,
      isLoading,
      setIsLoading,
      currentStep,
      setCurrentStep,
      resetForm,
    }),
    [
      formData,
      setFormData,
      borrowingAmount,
      setBorrowingAmount,
      isLoading,
      setIsLoading,
      currentStep,
      setCurrentStep,
      resetForm,
    ],
  );

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
