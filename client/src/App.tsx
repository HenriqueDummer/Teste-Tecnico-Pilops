import { Route, Routes } from "react-router";
import Flights from "./pages/Flights";
import FlightDetails from "./pages/FlightDetails";
import RootLayout from "./pages/RootLayout";

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Flights />} />
        <Route path="/flight/:id" element={<FlightDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
