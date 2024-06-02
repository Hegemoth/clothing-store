import { useContext } from "react";
import imgCarIcon from "../../assets/car.svg";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import { Currency, CurrencySign } from "../../types/enums";
import { Product } from "../../types/types";
import FullWidthButton from "../FullWidthButton/FullWidthButton";
import scss from "./CartSummary.module.scss";

interface CartSummaryProps {
  products: Product[];
}

const CartSummary: React.FC<CartSummaryProps> = ({ products }) => {
  const { currency } = useContext(CurrencyContext);

  const deliveryCosts = {
    [Currency.USD]: 10,
    [Currency.PLN]: 49,
  };

  const minSumsForFreeDelivery = {
    [Currency.USD]: 100,
    [Currency.PLN]: 500,
  };

  const currencySign = CurrencySign[currency];

  const deliveryCost = deliveryCosts[currency];
  const minSumForFreeDelivery = minSumsForFreeDelivery[currency];

  let sum = 0;

  products.forEach((product) => {
    sum += currency === Currency.PLN ? product.pricePLN : product.priceUSD;
  });

  const totalCost = sum >= minSumForFreeDelivery ? sum : sum + deliveryCost;

  return (
    <div className={scss.cartSummary}>
      <h2>Podsumowanie</h2>

      <div className={scss.cartRow}>
        <p>Wartość produków:</p>
        <p>
          {sum}
          {currencySign}
        </p>
      </div>

      <div className={scss.cartRow}>
        <p>Koszt dostawy:</p>
        <p>
          {sum >= minSumForFreeDelivery ? 0 : deliveryCost}
          {currencySign}
        </p>
      </div>

      <div className={`${scss.cartRow} ${scss.cartSummaryRow}`}>
        <p>Do zapłaty:</p>
        <p>
          {totalCost}
          {currencySign}
        </p>
      </div>

      <FullWidthButton isBlack={true}>Do kasy</FullWidthButton>

      <div className={scss.deliveryInfo}>
        <img src={imgCarIcon} alt="Ikona samochodu" />
        <p>
          Darmowa dostawa od {minSumForFreeDelivery}
          {currencySign}
        </p>
      </div>
    </div>
  );
};

export default CartSummary;
