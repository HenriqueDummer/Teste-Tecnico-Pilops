import Container from "./Container";

import TrophyIcon from "/TrophyIcon.svg";
import EarnsIcon from "/EarnsIcon.svg";
import BonusIcon from "/BonusIcon.svg";
import XPIcon from "/XPIcon.svg";

import { formatToDecimal } from "../utils/formatToDecimal";

type RenderItemProps = {
  icon: React.ReactNode;
  title: string;
  value?: string;
  customValue?: React.ReactNode;
  justifyStart?: boolean;
};

const RenderItem = ({
  icon,
  title,
  value,
  customValue,
  justifyStart,
}: RenderItemProps) => {
  return (
    <li
      className={`flex ${
        justifyStart ? "justify-start" : "justify-center"
      } item-center mt-4 flex-1`}
    >
      <div className="flex items-center gap-3">
        {icon}
        <div>
          <p className="text-sm font-thin text-text-secondary">{title}</p>
          {customValue ?? (
            <p className="font-bold font-sora text-3xl">{value}</p>
          )}
        </div>
      </div>
    </li>
  );
};

type FlightDetailsCardProps = {
  xp: number;
  bonus: number;
  totalBalance: number;
};

const FlightDetailsCard = ({
  xp,
  bonus,
  totalBalance,
}: FlightDetailsCardProps) => {
  const isBalancePositive = totalBalance > 0;

  return (
    <Container>
      <div className="flex items-center gap-2">
        <img src={TrophyIcon} alt="Trophy" />
        <h2 className="text-lg font-bold font-sora">Recompensas</h2>
      </div>
      <ul className="flex pb-2">
        <RenderItem
          icon={<img src={EarnsIcon} alt="trophy" />}
          title="Ganhos totais"
          justifyStart
          customValue={
            <p
              className={`${
                isBalancePositive
                  ? "text-text-accent-green"
                  : "text-text-accent-red"
              }
            } text-3xl font-bold font-sora`}
            >
              {!isBalancePositive && "- "}
              {formatToDecimal(totalBalance)}
            </p>
          }
        />

        <RenderItem
          icon={<img src={XPIcon} alt="xp star" />}
          title="XP conquistado"
          value={xp.toString()}
        />

        <RenderItem
          icon={<img src={BonusIcon} alt="xp bonus" />}
          title="Bônus de missão"
          value={bonus.toString() + " %"}
        />
      </ul>
    </Container>
  );
};

export default FlightDetailsCard;
