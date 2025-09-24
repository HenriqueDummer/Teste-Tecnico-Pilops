import express from "express";
import {
  getFlightDetails,
  getFlights,
  getTotalBalance,
  getUsedPlanes,
} from "../controllers/flights.controllers.ts";

const route = express.Router();

route.get("/flights", getFlights);
route.get("/flight/:id", getFlightDetails);
route.get("/total_balance", getTotalBalance);
route.get("/used_planes", getUsedPlanes);

export default route;
