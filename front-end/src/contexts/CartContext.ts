import { createContext } from "react";
import { Product } from "../types/types";

interface ICartContext {
  cartItems: Product[];
  addProductToCart: (product: Product) => void;
}

export const CartContext = createContext<ICartContext>({
  cartItems: [],
  addProductToCart: () => {},
});
