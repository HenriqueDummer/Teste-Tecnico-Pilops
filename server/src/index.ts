import express from "express";
import dotenv from "dotenv";

import flightsRoutes from "./routes/flights.route.ts";
import { readDbData } from "./utils/readDbData.ts";
import cors from "cors";

dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use(flightsRoutes);

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
