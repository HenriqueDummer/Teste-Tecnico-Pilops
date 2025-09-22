import { useParams } from "react-router";

const FlightDetails = () => {
  const { id } = useParams();

  return <div>Fligh Details {id}</div>;
};

export default FlightDetails;
