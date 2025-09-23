import { useGetFlights } from "../hooks/useGetFlights";

import FlightCard from "../components/FlightCard";
import { NavLink } from "react-router";

const Flights = () => {
  const { data, isPending, isError } = useGetFlights();

  if (!data || isError) {
    return <h1>Algo deu errado, tente novamente mais tarde!</h1>;
  }

  return (
    <>
      <h2 className="text-2xl font-bold font-sora">Histórico de Voos</h2>
      <h3 className="font-sora text-lg text-text-secondary font-light">
        Visualize seu histórico completo de voos realizados
      </h3>
      <div className="my-10 flex flex-col gap-4">
        {isPending && <h4 className="text-xl text-center">Loading...</h4>}
        {data &&
          data.map((flight) => (
            <NavLink to={`/flight/${flight.id}`}>
              <FlightCard key={flight.id} {...flight} />
            </NavLink>
          ))}
      </div>
    </>
  );
};

export default Flights;
