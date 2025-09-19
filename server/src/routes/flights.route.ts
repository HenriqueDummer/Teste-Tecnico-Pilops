import express from "express";
import {
  getFlightDetails,
  getFlights,
} from "../controllers/flights.controllers.ts";

const route = express.Router();

route.get("/flights", getFlights);
route.get("/flight/:id", getFlightDetails);

export default route;
