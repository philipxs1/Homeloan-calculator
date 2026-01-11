import { createContext } from "react";
import type { FormData } from "../entities/types";

export interface FormContextType {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  borrowingAmount: number | null;
  setBorrowingAmount: React.Dispatch<React.SetStateAction<number | null>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  resetForm: () => void;
}

export const FormContext = createContext<FormContextType | null>(null);
