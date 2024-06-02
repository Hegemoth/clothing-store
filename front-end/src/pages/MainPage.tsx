import { useLoaderData } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import Products from "../components/Products/Products";
import { Product } from "../types/types";

interface LoaderData {
  bestsellers: Product[];
  heroImageUrl: string;
}

const MainPage: React.FC = () => {
  const { bestsellers, heroImageUrl } = useLoaderData() as LoaderData;

  return (
    <>
      <Hero heroImage={heroImageUrl} />
      <Products products={bestsellers} headerText="Sprawdź nasze bestsellery" />
    </>
  );
};

export default MainPage;
