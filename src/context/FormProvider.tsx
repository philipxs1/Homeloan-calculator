import { useMemo, type ReactNode, useReducer } from "react";
import type { FormAction, FormData } from "../entities/types";
import { FormContext } from "./FormContext";
import { INITIAL_DATA } from "../data/data";

export interface FormState {
  formData: FormData;
  currentStep: number;
  borrowingAmount: number | null;
  isloading: boolean;
}

const initialState: FormState = {
  formData: INITIAL_DATA,
  currentStep: 0,
  borrowingAmount: null,
  isloading: false,
};

function reducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case "NEXT_STEP":
      return { ...state, currentStep: state.currentStep + 1 };
    case "PREV_STEP":
      return { ...state, currentStep: state.currentStep - 1 };
    case "SET_STEP":
      return { ...state, currentStep: action.payload };
    case "SET_LOADING":
      return { ...state, isloading: action.payload };
    case "SET_BORROWING":
      return { ...state, borrowingAmount: action.payload };
    case "UPDATE_FORM":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.section]: {
            ...state.formData[action.section],
            ...action.payload,
          },
        },
      };
    case "RESET_FORM":
      return {
        formData: INITIAL_DATA,
        currentStep: 0,
        borrowingAmount: null,
        isloading: false,
      };

    default:
      return state;
  }
}

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const nextStep = () => dispatch({ type: "NEXT_STEP" });
  const prevStep = () => dispatch({ type: "PREV_STEP" });
  const setStep = (n: number) => dispatch({ type: "SET_STEP", payload: n });
  const setLoading = (bool: boolean) =>
    dispatch({ type: "SET_LOADING", payload: bool });
  const setBorrowing = (n: number | null) =>
    dispatch({ type: "SET_BORROWING", payload: n });
  const updateForm = <T extends keyof FormData>(
    section: T,
    payload: Partial<FormData[T]>,
  ) => dispatch({ type: "UPDATE_FORM", section, payload });

  const resetForm = () => dispatch({ type: "RESET_FORM" });

  const value = useMemo(
    () => ({
      state,
      nextStep,
      prevStep,
      setStep,
      setLoading,
      setBorrowing,
      updateForm,
      resetForm,
    }),
    [state],
  );

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
