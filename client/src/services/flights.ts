import axios from "axios";
import type { PaginatedFlights } from "../types/types";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

export const getFlights = async (page: number): Promise<PaginatedFlights> => {
  try {
    const response = await axios.get("/flights", {
      params: { page, limit: 10 },
    });
    const flights = response.data;

    console.log(flights)
    return flights;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to get flights");
  }
};
