import { useContext } from "react";
import CartProductsList from "../components/CartProductsList/CartProductsList";
import CartSummary from "../components/CartSummary/CartSummary";
import FlexContainer from "../components/FlexContainer/FlexContainer";
import { CartContext } from "../contexts/CartContext";

const Cart: React.FC = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <FlexContainer>
      <CartProductsList products={cartItems} />
      <CartSummary products={cartItems} />
    </FlexContainer>
  );
};

export default Cart;
