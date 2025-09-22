import axios from "axios";
import type { Flights } from "../types/types";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

export const getFlights = async (): Promise<Flights> => {
  try {
    const response = await axios.get("/flights");
    const flights = response.data;

    return flights;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to get flights");
  }
};
