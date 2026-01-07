// types.ts
type Frequency = "W" | "F" | "M" | "Y";

export type FormData = {
  applicants: {
    isCouple: boolean | null;
    purpose: "owner" | "investment" | null;
    dependants: number;
  };
  income: {
    salary: number | "";
    salaryFrequency: Frequency;
    otherIncome: number | "";
    otherIncomeFrequency: Frequency;
    otherApplicant?: number | "";
    otherApplicantFrequency?: Frequency;
    otherApplicantIncome?: number | "";
    otherApplicantIncomeFrequency?: Frequency;
  };
  expenses: {
    livingExpenses: number | "";
    livingExpensesFrequency: Frequency;
    homeLoans: number | "";
    homeLoansFrequency: Frequency;
    personalLoans: number | "";
    personalLoansFrequency: Frequency;
    creditCards: number | "";
  };
};
