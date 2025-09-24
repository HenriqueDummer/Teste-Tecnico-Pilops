import RouteTrace from "/RouteTrace.svg";

import type { BasicFlightDetails } from "../types/types";

import { formatCurrency } from "../utils/formatCurrency";
import { formatDate } from "../utils/formatDate";
import Container from "./Container";

type RenderItemProps = {
  title: string;
  value?: string;
  customValue?: React.ReactNode;
};

const RenderItem = ({ title, value, customValue }: RenderItemProps) => {
  return (
    <li className="flex flex-col items-center flex-1">
      <p className="text-xs font-light text-text-secondary">{title}</p>
      {customValue ?? (
        <p className="text-text-primary font-semibold mt-1">{value}</p>
      )}
    </li>
  );
};

type FlightCardProps = BasicFlightDetails & {
  hideBalance?: boolean;
};

const FlightCard = ({
  id,
  aircraft,
  date,
  balance,
  route,
  airline,
  hideBalance = false,
}: FlightCardProps) => {
  const isBalancePositive = balance > 0;
  const formattedBalance = formatCurrency(balance);

  const formattedDate = formatDate(date);

  return (
    <Container>
      <ul className="flex justify-between items-center">
        <li className="flex-1">
          <h4 className="font-semibold text-text-primary">{aircraft}</h4>
          <p className="font-light text-text-secondary text-sm">{airline}</p>
        </li>

        <RenderItem
          title="Trajeto"
          customValue={
            <div className="flex flex-col">
              <img src={RouteTrace} alt="" />
              <div className="flex w-full justify-between font-light text-sm">
                <p>{route.from}</p>
                <p>{route.to}</p>
              </div>
            </div>
          }
        />

        <RenderItem title="Matrícula" value={id} />

        <RenderItem title="Data" value={formattedDate} />

        {!hideBalance && (
          <RenderItem
            title="Saldo"
            customValue={
              <p
                className={`${
                  isBalancePositive
                    ? "text-text-accent-green"
                    : "text-text-accent-red"
                }
            } font-semibold mt-1`}
              >
                {!isBalancePositive && "- "}
                {formattedBalance}
              </p>
            }
          />
        )}
      </ul>
    </Container>
  );
};

export default FlightCard;
