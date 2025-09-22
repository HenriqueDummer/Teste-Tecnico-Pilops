import { NavLink } from "react-router";
import { useGetFlights } from "../hooks/useGetFlights";

const Flights = () => {
  const { data, isPending, isError } = useGetFlights();

  if (!data) {
    return <h1>No flights found</h1>;
  }

  return (
    <div>
      <h1>Flight</h1>
      <NavLink to={"flight/teste"}>Flight details</NavLink>
      {data.map((flight) => (
        <h2>{flight.id}</h2>
      ))}
    </div>
  );
};

export default Flights;
