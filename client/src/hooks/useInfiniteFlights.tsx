import { useInfiniteQuery } from "@tanstack/react-query";
import { getFlights } from "../services/flights";

export const useInfiniteFlights = (plane: string | undefined) => {
  return useInfiniteQuery({
    queryKey: ["flights", plane],
    queryFn: ({ pageParam = 1 }) => getFlights(pageParam, plane),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.hasMore ? lastPage.nextPage : undefined,
    staleTime: 1000 * 60 * 5,
  });
};
