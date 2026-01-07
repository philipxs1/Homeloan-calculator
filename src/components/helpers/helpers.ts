export const range = (start: number, end: number, step: number = 1): number[] => {
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

export const formatNumber = (value: string) => {
  if (value === "") return "";

  const number = Number(value);
  if (isNaN(number)) return "";

  return new Intl.NumberFormat("en-AU", {
    maximumFractionDigits: 0,
  }).format(number);
};

export const parseCurrency = (value: string) => value.replace(/[^\d]/g, "");
