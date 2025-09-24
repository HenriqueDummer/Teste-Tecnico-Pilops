import axios from "axios";

export const getTotalBalance = async (): Promise<{totalBalance: number}> => {
  try {
    const response = await axios.get("/total_balance");
    const totalBalance = response.data;

    return totalBalance;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get total balance");
  }
};
