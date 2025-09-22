export type Flight = {
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

export type DB = {
  flights: Flight[];
};
