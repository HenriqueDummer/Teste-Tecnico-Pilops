import { useInfiniteFlights } from "../hooks/useInfiniteFlights";

import FlightCard from "../components/FlightCard";
import { NavLink } from "react-router";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import TotalBalance from "../components/TotalBalance";
import SelectPlane from "../components/SelectPlane";

const Flights = () => {
  const { ref, inView } = useInView();
  const [plane, setPlane] = useState<string | undefined>(undefined);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteFlights(plane);

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      const timeout = setTimeout(() => {
        fetchNextPage();
      }, 200);

      return () => clearTimeout(timeout);
    }
  }, [inView, hasNextPage, fetchNextPage, isFetchingNextPage]);

  if (!data || isError) {
    return <h1 className="text-center">Algo deu errado, tente novamente mais tarde!</h1>;
  }

  const flights = data!.pages.map((page) => page.flights).flat();

  return (
    <>
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold font-sora">Histórico de Voos</h2>
          <h3 className="font-sora text-lg text-text-secondary font-light">
            Visualize seu histórico completo de voos realizados
          </h3>
        </div>
        <TotalBalance />
      </div>

      <div className="my-10 flex flex-col gap-4">
        <div className="flex">
          <SelectPlane plane={plane} setPlane={setPlane} />
        </div>
        {isLoading && <h4 className="text-xl text-center">Carregando...</h4>}
        {flights &&
          flights.map((flight) => (
            <NavLink key={flight.id} to={`/flight/${flight.id}`}>
              <FlightCard key={flight.id} {...flight} />
            </NavLink>
          ))}

        <div ref={ref} className="mt-4">
          {isFetchingNextPage && (
            <div className="flex justify-center">
              <p className="text-lg text-slate-200">Carregando mais voos...</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Flights;
