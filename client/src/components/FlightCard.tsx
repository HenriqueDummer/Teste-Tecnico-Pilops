import RouteTrace from "/RouteTrace.svg";

import type { BasicFlightDetails } from "../types/types";

import { formatCurrency } from "../utils/formatCurrency";
import { formatDate } from "../utils/formatDate";
import Container from "./Container";

type FlightProps = BasicFlightDetails & {
  hideBalance?: boolean;
};

const headingStyle = "text-xs font-light text-text-secondary";
const itemStyle = "flex flex-col items-center flex-1";

const FlightCard = ({
  id,
  aircraft,
  date,
  balance,
  route,
  airline,
  hideBalance = false,
}: FlightProps) => {
  const isBalancePositive = balance > 0;
  const fomattedBalance = formatCurrency(balance);

  const formattedDate = formatDate(date);

  return (
    <Container>
      <ul className="flex justify-between items-center">
        <li className="flex-1">
          <h4 className="font-semibold text-text-primary">{aircraft}</h4>
          <p className="font-light text-text-secondary text-sm">{airline}</p>
        </li>

        <li className={itemStyle}>
          <p className={headingStyle}>Trajeto</p>
          <div className="flex flex-col">
            <img src={RouteTrace} alt="" />
            <div className="flex w-full justify-between font-light text-sm">
              <p>{route.from}</p>
              <p>{route.to}</p>
            </div>
          </div>
        </li>

        <li className={itemStyle}>
          <p className={headingStyle}>Matrícula</p>
          <p className="text-text-primary font-semibold mt-1">{id}</p>
        </li>

        <li className={itemStyle}>
          <p className={headingStyle}>Data</p>
          <p className="text-text-primary font-semibold mt-1">
            {formattedDate}
          </p>
        </li>

        {!hideBalance && (
          <li className={itemStyle}>
            <p className={headingStyle}>Saldo</p>
            <p
              className={`${
                isBalancePositive
                  ? "text-text-accent-green"
                  : "text-text-accent-red"
              }
            } font-semibold mt-1`}
            >
              {!isBalancePositive && "- "}
              {fomattedBalance}
            </p>
          </li>
        )}
      </ul>
    </Container>
  );
};

export default FlightCard;
