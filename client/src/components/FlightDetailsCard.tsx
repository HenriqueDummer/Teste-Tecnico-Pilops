import Container from "./Container";

import TrophyIcon from "/TrophyIcon.svg";
import EarnsIcon from "/EarnsIcon.svg";
import BonusIcon from "/BonusIcon.svg";
import XPIcon from "/XPIcon.svg";

import { formatToDecimal } from "../utils/formatToDecimal";

type RenderItemProps = {
  icon: React.ReactNode;
  title: string;
  value: string;
  highlight?: boolean;
};

const RenderItem = ({ icon, title, value, highlight }: RenderItemProps) => {
  return (
    <li
      className={`flex ${
        !highlight ? "justify-center" : "justify-start"
      } item-center mt-4 flex-1`}
    >
      <div className="flex items-center gap-3">
        {icon}
        <div>
          <p className="text-sm font-thin text-text-secondary">{title}</p>
          <p
            className={`font-bold font-sora ${
              highlight ? "text-text-accent-green" : ""
            } text-3xl`}
          >
            {value}
          </p>
        </div>
      </div>
    </li>
  );
};

type FlightDetailsCardProps = {
  xp: number;
  bonus: number;
  ganhosTotais: number;
};

const FlightDetailsCard = ({
  xp,
  bonus,
  ganhosTotais,
}: FlightDetailsCardProps) => {
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
          value={formatToDecimal(ganhosTotais)}
          highlight
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
