import TotalBalance from "../components/TotalBalance";
import FlightsList from "../components/FlightsList";

const Flights = () => {
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
      <FlightsList />
    </>
  );
};

export default Flights;
