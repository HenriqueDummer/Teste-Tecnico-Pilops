import { formatToDecimal } from "./formatToDecimal";

export const formatCurrency = (value: number) => {
  return `P$ ${formatToDecimal(value)}`;
};
