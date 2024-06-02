import { useLoaderData } from "react-router-dom";
import FavouritesList from "../components/FavouritesList/FavouritesList";
import { Favourite } from "../types/types";

const Favourites: React.FC = () => {
  const favouriteProducts = useLoaderData() as Favourite[];

  return <FavouritesList favourites={favouriteProducts} />;
};

export default Favourites;
