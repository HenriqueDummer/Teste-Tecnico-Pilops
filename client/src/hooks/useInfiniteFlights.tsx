import { useInfiniteQuery } from "@tanstack/react-query";
import { getFlights } from "../services/flights";

export const useInfiniteFlights = () => {
  return useInfiniteQuery({
    queryKey: ["flights"],
    queryFn: ({ pageParam = 1 }) => getFlights(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.hasMore ? lastPage.nextPage : undefined,
    staleTime: 1000 * 60 * 5,
  });
};
