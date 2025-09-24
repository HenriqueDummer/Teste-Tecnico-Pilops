import axios from "axios";
import type { FlightDetails } from "../types/types";
import type { QueryFunctionContext } from "@tanstack/react-query";

export const getFlightDetails = async (
  context: QueryFunctionContext<[string, string]>
): Promise<FlightDetails> => {
  const id = context.queryKey[1];
  
  try {
    const response = await axios.get("/flight/" + id);
    const flight = response.data;

    return flight;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get flights");
  }
};
