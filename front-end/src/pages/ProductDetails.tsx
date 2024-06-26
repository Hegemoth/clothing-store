import { useLoaderData } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import Details from "../components/Details/Details";
import ExpandableMenu from "../components/ExpandableMenu/ExpandableMenu";
import FlexContainer from "../components/FlexContainer/FlexContainer";
import Photos from "../components/Photos/Photos";
import { Product } from "../types/types";

const ProductDetails: React.FC = () => {
  const product = useLoaderData() as Product;

  return (
    <FlexContainer>
      <ExpandableMenu />

      <div style={{ width: "100%" }}>
        <Breadcrumbs />

        <FlexContainer>
          <Photos product={product} />
          <Details product={product} />
        </FlexContainer>
      </div>
    </FlexContainer>
  );
};

export default ProductDetails;
