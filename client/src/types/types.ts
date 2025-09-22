export type FlightDetails = {
  id: string;
  aircraft: {
    name: string;
    registration: string;
    airline: string;
  };
  flightData: {
    date: Date;
    balance: number;
    route: {
      from: string;
      to: string;
    };
  };
  xp: number;
  missionBonus: number;
};

export type BasicFlightDetails = {
  id: string;
  aircraft: string;
  date: Date;
  balance: number;
  airline: string;
  route: {
    from: string;
    to: string;
  };
};

export type Flights = BasicFlightDetails[];
