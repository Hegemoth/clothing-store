import { useLoaderData, useParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import ExpandableMenu from "../components/ExpandableMenu/ExpandableMenu";
import FlexContainer from "../components/FlexContainer/FlexContainer";
import Pagination from "../components/Pagination/Pagination";
import Products from "../components/Products/Products";
import { categories } from "../constants/categories";
import { Product } from "../types/types";

interface LoaderData {
  products: Product[];
  numberOfPages: number;
}

const ProductList: React.FC = () => {
  const { products, numberOfPages } = useLoaderData() as LoaderData;
  const params = useParams();

  const category = categories.find((c) => c.path === params.category);

  if (!category) return null;

  const subcategory = params.subcategory
    ? category.subcategories?.find((sc) => sc.path === params.subcategory)
    : undefined;

  return (
    <FlexContainer>
      <ExpandableMenu />
      <div>
        <Breadcrumbs />
        <Products
          products={products}
          headerText={subcategory ? subcategory.categoryName : category.categoryName}
        />
        <Pagination numberOfPages={numberOfPages} />
      </div>
    </FlexContainer>
  );
};

export default ProductList;
