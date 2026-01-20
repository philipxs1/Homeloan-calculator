import type { FormData } from "../entities/types";

export const INITIAL_DATA = {
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
