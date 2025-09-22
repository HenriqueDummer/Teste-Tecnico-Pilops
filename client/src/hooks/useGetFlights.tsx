import { useQuery } from "@tanstack/react-query";
import { getFlights } from "../services/flights";

export const useGetFlights = () => {
  return useQuery({
    queryKey: ["flights"],
    queryFn: getFlights,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    retry: false,
  });
};
