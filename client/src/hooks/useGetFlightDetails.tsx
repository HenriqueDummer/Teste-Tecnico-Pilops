import { useQuery } from "@tanstack/react-query";
import { getFlightDetails } from "../services/flightDetails";

export const useGetFlightDetails = (id: string) => {
  return useQuery({
    queryKey: ["flight", id],
    queryFn: getFlightDetails,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    retry: false,
  });
};
