// types.ts
export type Frequency = "W" | "F" | "M" | "Y";

export interface IncomeData {
  salaryAmount: number | "";
  salaryFrequency: Frequency;
  otherIncomeAmount: number | "";
  otherIncomeFrequency: Frequency;
}
