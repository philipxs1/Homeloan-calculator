import { createContext } from "react";

import type { FormState } from "./FormProvider";

export interface FormContextType {
  state: FormState;
  resetForm: () => void;
  nextStep: () => void;
  prevStep: () => void;
  setStep: (step: number) => void;
  setLoading: (loading: boolean) => void;
  setBorrowing: (amount: number) => void;
  updateForm: <T extends keyof FormState["formData"]>(
    section: T,
    payload: Partial<FormState["formData"][T]>,
  ) => void;
}

export const FormContext = createContext<FormContextType | null>(null);
