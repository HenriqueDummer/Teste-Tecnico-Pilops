import type { Request, Response } from "express";
import { readDbData } from "../utils/readDbData.ts";
import type { DB, Flight } from "../types/types.ts";

export const getFlights = (req: Request, res: Response): void => {
  try {
    let db = readDbData<DB>();

    db = { flights: db.flights.slice(0, 10) };

    const flights = db.flights.map((flight) => ({
      id: flight.id,
      aircraft: flight.aircraft.name,
      route: flight.flightData.route,
      balance: flight.flightData.balance,
      date: flight.flightData.date,
      airline: flight.aircraft.airline,
    }));

    res.status(200).json(flights);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get flights");
  }
};

export const getFlightDetails = (req: Request, res: Response): void => {
  try {
    const db = readDbData<DB>();
    const { id } = req.params;

    const flight: Flight | undefined = db.flights.find((f) => f.id === id);

    if (!flight) {
      res.status(404).json({ message: "Flight not found" });
    }

    res.json(flight);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get flight");
  }
};
