// types.ts
export type Frequency = "W" | "F" | "M" | "Y";

export type AmountWithFrequency = {
  amount: string;
  frequency: Frequency;
};

export type FormData = {
  applicants: {
    isCouple: boolean;
    purpose: "owner" | "investment";
    dependants: number;
  };
  income: {
    salary: AmountWithFrequency;

    otherIncome: AmountWithFrequency;

    partnerSalary: AmountWithFrequency;

    partnerIncome: AmountWithFrequency;
  };
  expenses: {
    livingExpenses: AmountWithFrequency;

    homeLoans: AmountWithFrequency;

    personalLoans: AmountWithFrequency;

    creditCards: number;
  };
};

export type FormAction =
  | { type: "NEXT_STEP" }
  | { type: "PREV_STEP" }
  | { type: "SET_STEP"; payload: number }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_BORROWING"; payload: number | null }
  | {
      type: "UPDATE_FORM";
      section: keyof FormData;
      payload: Partial<FormData[keyof FormData]>;
    }
  | { type: "RESET_FORM" };
