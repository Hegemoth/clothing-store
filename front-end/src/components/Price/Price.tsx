import { useContext } from "react";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import { Currency, CurrencySign } from "../../types/enums";
import { Product } from "../../types/types";

interface PriceProps {
  product: Product;
}

const Price: React.FC<PriceProps> = ({ product }) => {
  const { currency } = useContext(CurrencyContext);

  return (
    <>
      {currency === Currency.PLN ? product.pricePLN : product.priceUSD}
      {CurrencySign[currency]}
    </>
  );
};

export default Price;
