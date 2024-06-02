import { Link } from "react-router-dom";
import imgBagIcon from "../../assets/bag.svg";
import imgHeart from "../../assets/heart.svg";
import scss from "./IconMenu.module.scss";

const IconMenu: React.FC = () => {
  const cartItems = 0;

  return (
    <ul className={scss.iconMenu}>
      <li>
        <Link to="/ulubione">
          <img src={imgHeart} alt="Ikona serca" />
        </Link>
      </li>

      <li>
        <Link to="/koszyk">
          <img src={imgBagIcon} alt="Ikona torby" />
          <div className={scss.numberOfProducts}>{cartItems}</div>
        </Link>
      </li>
    </ul>
  );
};

export default IconMenu;
