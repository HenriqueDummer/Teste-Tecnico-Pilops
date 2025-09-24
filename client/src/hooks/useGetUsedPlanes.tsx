import { useQuery } from "@tanstack/react-query";
import { getUsedPlanes } from "../services/usedPlanes";

export const useGetUsedPlanes = () => {
  return useQuery({
    queryKey: ["used_planes"],
    queryFn: getUsedPlanes,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    retry: false,
  });
};
