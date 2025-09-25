// @ts-noCheck
import type { Request, Response } from "express";
import { readDbData } from "../utils/readDbData.js";
import type { DB, Flight } from "../types/types.js";

export const getFlights = (req: Request, res: Response): void => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;
    const plane = req.query.plane;

    let db = readDbData<DB>();
  
    if (plane) {
      db = {
        flights: db.flights.filter((flight) => flight.aircraft.name === plane),
      };
    }

    const paginatedFlights = { flights: db.flights.slice(skip, skip + limit) };

    const flights = paginatedFlights.flights.map((flight) => ({
      id: flight.id,
      aircraft: flight.aircraft.name,
      route: flight.flightData.route,
      balance: flight.flightData.balance,
      date: flight.flightData.date,
      airline: flight.aircraft.airline,
    }));

    const total = db.flights.length;
    const hasMore = page * limit < total;

    res.status(200).json({
      flights: flights,
      hasMore,
      nextPage: hasMore ? page + 1 : null,
    });
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
    throw new Error("Failed to get flight details");
  }
};

export const getTotalBalance = (req: Request, res: Response): void => {
  try {
    const db = readDbData<DB>();
    let totalBalance = 0;

    db.flights.map((flight) => {
      const flightBalance = flight.flightData.balance;

      totalBalance += flightBalance;
    });

    res.status(200).json({ totalBalance });
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get total balance");
  }
};

export const getUsedPlanes = (req: Request, res: Response) => {
  try {
    const db = readDbData<DB>();

    let planes: string[] = [];

    db.flights.map((flight) => {
      const targetPlane = flight.aircraft.name;
      const isPlaneRegistered = planes.find((plane) => plane === targetPlane);

      if (!isPlaneRegistered) {
        planes.push(targetPlane);
      }
    });

    res.status(200).json({ planes });
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get total balance");
  }
};
