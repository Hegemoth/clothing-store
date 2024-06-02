import { createContext } from "react";
import { Currency } from "../types/enums";

interface ICurrencyContext {
  currency: Currency;
  setCurrency: React.Dispatch<React.SetStateAction<Currency>>;
}

export const CurrencyContext = createContext<ICurrencyContext>({
  currency: Currency.PLN,
  setCurrency: () => {},
});
