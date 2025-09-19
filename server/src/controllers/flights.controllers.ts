import type { Request, Response } from "express";

export const getFlights = (req: Request, res: Response): void => {
  try {
    res.json("Flights")
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get flights")
  }
};

export const getFlightDetails = (req: Request, res: Response): void => {
  try {
    res.json("Fligth details")
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get flights")
  }
}


