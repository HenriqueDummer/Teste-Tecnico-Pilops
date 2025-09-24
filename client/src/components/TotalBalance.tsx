import { useGetTotalBalance } from "../hooks/useGetTotalBalance";
import { formatToDecimal } from "../utils/formatToDecimal";
import Container from "./Container";
import EarnsIcon from "/EarnsIcon.svg";

const TotalBalance = () => {
  const { data, isLoading } = useGetTotalBalance();

  if (!data) {
    return (
      <Container>
        <h4 className="font-semibold text-text-primary">Não foi possível calcular o saldo acumulado</h4>
      </Container>
    );
  }

  const totalBalance = data.totalBalance;
  const isBalancePositive = totalBalance > 0;

  const formattedBalance = formatToDecimal(totalBalance);

  return (
    <Container>
      {isLoading && <h4 className="font-semibold text-text-secondary">
            Calculando saldo acumulado...
          </h4>}
      {data && <div className="flex items-center gap-4">
        
        <div className="flex flex-col items-end">
          <h4 className="font-semibold text-text-primary">
            Saldo total acumulado
          </h4>
          <p
            className={`${
              isBalancePositive
                ? "text-text-accent-green"
                : "text-text-accent-red"
            }
            } text-2xl font-semibold`}
          >
            {!isBalancePositive && "- "}
            {formattedBalance}
          </p>
        </div>
        <img src={EarnsIcon} alt="Balance icon" />
      </div>}
    </Container>
  );
};

export default TotalBalance;
