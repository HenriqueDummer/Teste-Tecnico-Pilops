import type { Request, Response } from "express";
import { readDbData } from "../utils/readDbData.ts";
import type { DB } from "../types/types.ts";

export const getFlights = (req: Request, res: Response): void => {
  try {
    const db = readDbData<DB>();
    console.log(db.flights)
    const flights = db.flights.map((flight) => ({
      id: flight.id,
      aircraft: flight.aircraft.name,
      route: flight.flightData.route,
      balance: flight.flightData.balance,
      date: flight.flightData.date,
    }));

    res.status(200).json(flights)
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get flights");
  }
};

export const getFlightDetails = (req: Request, res: Response): void => {
  try {
    res.json("Fligth details");
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get flights");
  }
};
