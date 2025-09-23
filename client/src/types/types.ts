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
    missionBonus: number;
    xp: number;
    route: {
      from: string;
      to: string;
    };
  };
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

export type PaginatedFlights = {
  flights: Flights;
  hasMore: boolean;
  nextPage?: number;
};
