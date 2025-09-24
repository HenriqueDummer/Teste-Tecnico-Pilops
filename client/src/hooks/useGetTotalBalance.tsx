import { useQuery } from "@tanstack/react-query";
import { getTotalBalance } from "../services/totalBalance";

export const useGetTotalBalance = () => {
  return useQuery({
    queryKey: ["total_balance"],
    queryFn: getTotalBalance,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    retry: false,
  });
};
