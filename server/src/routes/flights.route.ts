import express from "express";
import {
  getFlightDetails,
  getFlights,
  getTotalBalance,
} from "../controllers/flights.controllers.ts";

const route = express.Router();

route.get("/flights", getFlights);
route.get("/flight/:id", getFlightDetails);
route.get("/total_balance", getTotalBalance);

export default route;
