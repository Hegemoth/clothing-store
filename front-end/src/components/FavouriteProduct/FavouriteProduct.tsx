import { useContext } from "react";
import { useFetcher } from "react-router-dom";
import imgBagIcon from "../../assets/bag.svg";
import imgRemoveIcon from "../../assets/remove.svg";
import { CartContext } from "../../contexts/CartContext";
import { Favourite } from "../../types/types";
import Price from "../Price/Price";
import scss from "./FavouriteProduct.module.scss";

interface FavouriteProductProps {
  favourite: Favourite;
}

const FavouriteProduct: React.FC<FavouriteProductProps> = ({ favourite }) => {
  const { addProductToCart } = useContext(CartContext);
  const { Form } = useFetcher();
  const product = favourite.product;
  const price = <Price product={product} />;

  return (
    <div className={scss.favouriteProduct}>
      <img src={product.photos[0]} alt="Produkt" />
      <div className={scss.favouriteProductInfo}>
        <div className={scss.topRow}>
          <h3>{product.brand} {product.productName}</h3>
          <p>{price}</p>
        </div>

        <p className={scss.priceRow}>
          <span>Cena:</span> {price}
        </p>

        <div className={scss.buttonRow}>
          <Form
            method="DELETE"
            action={`/delete-from-favourites/${favourite.id}`}
          >
            <button>
              <img src={imgRemoveIcon} alt="Ikona usunięcia produktu" />
              Usuń
            </button>
          </Form>

          <button onClick={() => addProductToCart(product)}>
            <img src={imgBagIcon} alt="Ikona dodania do koszyka" />
            Dodaj do koszyka
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavouriteProduct;
