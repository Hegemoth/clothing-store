import imgRemoveIcon from "../../assets/remove.svg";
import { Product } from "../../types/types";
import Price from "../Price/Price";
import scss from "./CartProduct.module.scss";

interface CartProductProps {
  product: Product;
}

const CartProduct: React.FC<CartProductProps> = ({ product }) => {
  const price = <Price product={product} />;

  return (
    <div className={scss.favouriteProduct}>
      <img src={product.photos[0]} alt="Produkt" />
      <div className={scss.favouriteProductInfo}>
        <div className={scss.topRow}>
          <h3>
            {product.brand} {product.productName}
          </h3>
          <p>{price}</p>
        </div>

        <p className={scss.priceRow}>
          <span>Cena: </span>
          {price}
        </p>

        <div className={scss.buttonRow}>
          <button>
            <img src={imgRemoveIcon} alt="Ikona usunięcia produktu" />
            Usuń
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
