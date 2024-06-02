import { useContext } from "react";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import { Currency } from "../../types/enums";
import scss from "./CurrencySelector.module.scss";

const CurrencySelector: React.FC = () => {
  const { currency, setCurrency } = useContext(CurrencyContext);

  return (
    <select
      className={scss.currencySelector}
      value={currency}
      onChange={(e) => setCurrency(e.currentTarget.value as Currency)}
    >
      <option value={Currency.PLN}>{Currency.PLN}</option>
      <option value={Currency.USD}>{Currency.USD}</option>
    </select>
  );
};

export default CurrencySelector;
