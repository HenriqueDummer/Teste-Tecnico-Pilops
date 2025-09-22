import RouteTrace from "/RouteTrace.svg";

import { NavLink } from "react-router";
import type { BasicFlightDetails } from "../types/types";

import { formatCurrency } from "../utils/formatCurrency";
import { formatDate } from "../utils/formatDate";

type FlightProps = BasicFlightDetails;

const headingStyle = "text-xs font-light text-text-secondary";
const itemStyle = "flex flex-col items-center flex-1";

const FlightCard = ({
  id,
  aircraft,
  date,
  balance,
  route,
  airline,
}: FlightProps) => {
  const isBalancePositive = balance > 0;
  const fomattedBalance = formatCurrency(balance);

  const formattedDate = formatDate(date);

  return (
    <NavLink to={`/flight/${id}`}>
      <div className="p-5 bg-dark-bg-secondary border border-neutral-700 rounded-lg">
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
        </ul>
      </div>
    </NavLink>
  );
};

export default FlightCard;
