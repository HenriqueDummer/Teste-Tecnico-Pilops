import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DBFile = path.join(__dirname, "../../DB/flights.json");

export function readDbData<T>(): T {
  const data = fs.readFileSync(DBFile, "utf-8");
  return JSON.parse(data);
}
