import { Route, Routes } from "react-router";
import Flights from "./pages/Flights";
import FlightDetails from "./pages/FlightDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Flights />} />
      <Route path="/flight/:id" element={<FlightDetails />} />
    </Routes>
  );
}

export default App;
