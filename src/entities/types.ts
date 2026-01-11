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
