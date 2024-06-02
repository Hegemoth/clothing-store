import { Product as IProduct } from "../../types/types";
import CenteredContent from "../CenteredContent/CenteredContent";
import Product from "../Product/Product";
import scss from "./Products.module.scss";

interface ProductsProps {
  products: IProduct[];
  headerText: string;
}

const Products: React.FC<ProductsProps> = ({ products, headerText }) => (
  <CenteredContent>
    <h2 className={scss.bestsellersHeader}>{headerText}</h2>
    <div className={scss.productsWrapper}>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  </CenteredContent>
);

export default Products;
