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
  const totalIncome =
    Number(data.income.salary) +
    Number(data.income.otherIncome || 0) +
    Number(data.income.partnerSalary || 0) +
    Number(data.income.partnerIncome || 0);

  const totalExpenses =
    Number(data.expenses.livingExpenses || 0) +
    Number(data.expenses.homeLoans || 0) +
    Number(data.expenses.personalLoans || 0) +
    Number(data.expenses.creditCards || 0);

  //  fake formula
  const borrowingCapacity = totalIncome * 5 - totalExpenses;

  return Math.max(borrowingCapacity, 0);
};

// delay function
export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
