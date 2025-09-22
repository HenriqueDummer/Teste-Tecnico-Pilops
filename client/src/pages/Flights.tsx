import LogoWithName from "/LogoWithName.svg";

import { useGetFlights } from "../hooks/useGetFlights";
import FlightCard from "../components/FlightCard";

const Flights = () => {
  const { data, isPending, isError } = useGetFlights();

  if (!data || isError) {
    return <h1>Algo deu errado, tente novamente mais tarde!</h1>;
  }


  return (
    <section className="bg-dark-bg w-full px-20 pt-20 min-h-dvh text-text-primary flex flex-col items-center overflow-auto scrollbar-hide">
      <header className="flex flex-col justify-center items-center mt-2">
        <img src={LogoWithName} alt="Pilops Logo" />
        <p className="font-manrope mt-2">
          Your virtual pilot career for Flight Simulator
        </p>
      </header>

      <div className="w-full max-w-[80rem] mt-10">
        <h2 className="text-2xl font-bold font-sora">Histórico de Voos</h2>
        <h3 className="font-sora text-lg text-text-secondary font-light">
          Visualize seu histórico completo de voos realizados
        </h3>

        <div className="my-10 flex flex-col gap-4">
          {
            isPending && <h4 className="text-xl text-center">Loading...</h4>
          }
          {data &&
            data.map((flight) => <FlightCard key={flight.id} {...flight} />)}
        </div>
      </div>
    </section>
  );
};

export default Flights;
