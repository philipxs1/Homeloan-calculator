import type { FormData } from "../../entities/types";

// range functtion
export const range = (
  start: number,
  end: number,
  step: number = 1,
): number[] => {
  const output = [];

  if (typeof end === "undefined") {
    end = start;
    start = 0;
  }

  for (let i = start; i < end; i += step) {
    output.push(i);
  }

  return output;
};

// format numbers function
export const formatNumber = (value: string) => {
  if (value === "") return "";

  const number = Number(value);
  if (isNaN(number)) return "";

  return new Intl.NumberFormat("en-AU", {
    maximumFractionDigits: 0,
  }).format(number);
};

export const parseCurrency = (value: string, maxDigits = 6): string => {
  const digitsOnly = value.replace(/[^\d]/g, "");
  return digitsOnly.slice(0, maxDigits);
};

// fake calcualte function just using raw numbers no frequency used

export const calculateBorrowingAmount = (data: FormData): number => {
  // Treat income fields as annual amounts, expenses as monthly amounts.
  const annualIncome =
    Number(data.income.salary.amount) +
    Number(data.income.otherIncome.amount) +
    Number(data.income.partnerSalary.amount) +
    Number(data.income.partnerIncome.amount);

  const monthlyIncome = annualIncome / 12;

  const monthlyExpenses =
    Number(data.expenses.livingExpenses.amount) +
    Number(data.expenses.homeLoans.amount) +
    Number(data.expenses.personalLoans.amount) +
    Number(data.expenses.creditCards);

  // i asked AI to make a fake calculate function, after giving it my 'basic' one

  const netMonthlySurplus = monthlyIncome - monthlyExpenses;

  if (netMonthlySurplus <= 0) return 0;

  // Conservative share of surplus available for loan repayment
  const repaymentShare = 0.6; // 60% of surplus considered available
  const monthlyRepayment = netMonthlySurplus * repaymentShare;

  // Mortgage assumptions (configurable if needed)
  const annualInterestRate = 0.06; // 6% p.a.
  const termYears = 30;
  const r = annualInterestRate / 12; // monthly rate
  const n = termYears * 12;

  // Present value factor for an annuity: PV = Pmt * ((1 - (1 + r)^-n) / r)
  const pvFactor = r === 0 ? n : (1 - Math.pow(1 + r, -n)) / r;

  const loan = monthlyRepayment * pvFactor;

  // return rounded to nearest whole number
  return Math.max(Math.floor(loan), 0);
};

// delay function
export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

// my own basic calculate function

// export const calculateBorrowingAmount = (data: FormData): number => {
//   const totalIncome =
//     Number(data.income.salary.amount) +
//     Number(data.income.otherIncome.amount || 0) +
//     Number(data.income.partnerSalary.amount || 0) +
//     Number(data.income.partnerIncome.amount || 0);

//   const totalExpenses =
//     Number(data.expenses.livingExpenses.amount || 0) +
//     Number(data.expenses.homeLoans.amount || 0) +
//     Number(data.expenses.personalLoans.amount || 0) +
//     Number(data.expenses.creditCards || 0);

//   //  fake formula

//   const borrowingCapacity = totalIncome * 5 - totalExpenses;

//   return Math.max(borrowingCapacity, 0);
// };
