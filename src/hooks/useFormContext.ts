import { useContext } from "react";
import { FormContext, type FormContextType } from "../context/FormContext";

export const useFormContext = (): FormContextType => {
  const ctx = useContext(FormContext);
  if (!ctx) throw new Error("useFormContext must be used inside FormProvider");
  return ctx;
};
