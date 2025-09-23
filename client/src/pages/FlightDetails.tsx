import { useNavigate, useParams } from "react-router";
import { useGetFlightDetails } from "../hooks/useGetFlightDetails";
import ArrowIcon from "/ArrowIcon.svg";
import FlightCard from "../components/FlightCard";
import type { BasicFlightDetails } from "../types/types";
import FlightDetailsCard from "../components/FlightDetailsCard";

const FlightDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  if (!id) {
    navigate("/");
  }

  const { data, isError, isLoading } = useGetFlightDetails(id!);

  if (!data || isError) {
    return <h1>Algo deu errado, tente novamente mais tarde</h1>;
  }

  const flightCardData: BasicFlightDetails = {
    id: data.id,
    aircraft: data.aircraft.name,
    date: data.flightData.date,
    balance: data.flightData.balance,
    route: data.flightData.route,
    airline: data.aircraft.airline,
  };

  const flightDetailsCardData = {
    bonus: data.flightData.missionBonus * 100,
    ganhosTotais:
      data.flightData.balance +
      data.flightData.missionBonus * data.flightData.balance,
    xp: data.flightData.xp,
  };

  return (
    <>
      <div className="flex gap-3 text-2xl">
        <button onClick={() => navigate(-1)} className="cursor-pointer">
          <img src={ArrowIcon} alt="Arrow icon" />
        </button>
        <h2 className="font-sora font-bold">Detalhes do voo</h2>
      </div>

      <div className="mt-10 flex flex-col gap-6">
        {isLoading && <h3 className="text-xl text-center">Loading...</h3>}
        {data && (
          <>
            <FlightDetailsCard {...flightDetailsCardData} />
            <FlightCard hideBalance {...flightCardData} />
          </>
        )}
      </div>
    </>
  );
};

export default FlightDetails;
