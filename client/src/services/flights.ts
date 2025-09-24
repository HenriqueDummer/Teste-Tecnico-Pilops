import axios from "axios";
import type { PaginatedFlights } from "../types/types";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

export const getFlights = async (
  page: number,
  plane?: string
): Promise<PaginatedFlights> => {
  try {
    const response = await axios.get("/flights", {
      params: { page, limit: 10, plane },
    });
    const flights = response.data;

    console.log(flights);
    return flights;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get flights");
  }
};
