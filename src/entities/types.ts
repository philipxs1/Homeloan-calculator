// types.ts
type Frequency = "W" | "F" | "M" | "Y";

export type FormData = {
  applicants: {
    isCouple: boolean | null;
    purpose: "owner" | "investment" | null;
    dependants: number;
  };
  income: {
    salary: string | "";
    salaryFrequency: Frequency;
    otherIncome: string | "";
    otherIncomeFrequency: Frequency;
    partnerSalary?: string | "";
    partnerSalaryFrequency?: Frequency;
    partnerIncome?: string | "";
    partnerIncomeFrequency?: Frequency;
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
