import { Product } from "../../types/types";
import CartProduct from "../CartProduct/CartProduct";
import CenteredContent from "../CenteredContent/CenteredContent";
import scss from "./CartProductsList.module.scss";

interface CartProductsListProps {
  products: Product[];
}

const CartProductsList: React.FC<CartProductsListProps> = ({ products }) => {
  return (
    <CenteredContent>
      <div className={scss.favouritesList}>
        <h2>Koszyk</h2>
        <div>
          {products.map((product) => (
            <CartProduct key={product.id} product={product} />
          ))}
        </div>
      </div>
    </CenteredContent>
  );
};

export default CartProductsList;
