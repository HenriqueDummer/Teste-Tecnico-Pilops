import { NavLink } from "react-router";
import { useGetFlights } from "../hooks/useGetFlights";

const Flights = () => {
  const { data } = useGetFlights();

  console.log(data);
  
  return (
    <div>
      <h1>Flight</h1>
      <NavLink to={"flight/teste"}>Flight details</NavLink>
    </div>
  );
};

export default Flights;
