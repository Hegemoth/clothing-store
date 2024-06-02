import { Link, useFetcher } from "react-router-dom";
import { EndpointToPath } from "../../types/enums";
import { Product as IProduct } from "../../types/types";
import Price from "../Price/Price";
import scss from "./Product.module.scss";

interface ProductProps {
  product: IProduct;
}

const Product: React.FC<ProductProps> = ({ product }) => {
  const { Form } = useFetcher();

  return (
    <Link
      className={scss.product}
      to={`/${EndpointToPath[product.gender]}/${product.category}/${product.subcategory}/${product.id}`}
    >
      <img src={product.photos[0]} alt="Produkt" />
      <h3>{product.productName}</h3>

      <p>
        <Price product={product} />
      </p>

      <Form
        method="POST"
        action={`/add-to-favourites/${product.id}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button>
          <div className={scss.heart}></div>
        </button>
      </Form>
    </Link>
  );
};

export default Product;
