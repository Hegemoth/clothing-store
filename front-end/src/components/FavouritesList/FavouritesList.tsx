import { Favourite } from "../../types/types";
import CenteredContent from "../CenteredContent/CenteredContent";
import FavouriteProduct from "../FavouriteProduct/FavouriteProduct";
import scss from "./FavouritesList.module.scss";

interface FavouritesListProps {
  favourites: Favourite[];
}

const FavouritesList: React.FC<FavouritesListProps> = ({ favourites }) => (
  <CenteredContent>
    <div className={scss.favouritesList}>
      <h2>Ulubione</h2>
      <div>
        {favourites.map((favourite) => (
          <FavouriteProduct key={favourite.id} favourite={favourite} />
        ))}
      </div>
    </div>
  </CenteredContent>
);

export default FavouritesList;
