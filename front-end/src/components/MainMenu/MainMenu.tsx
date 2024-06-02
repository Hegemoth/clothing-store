import { NavLink } from "react-router-dom";
import { genders } from "../../constants/categories";
import scss from "./MainMenu.module.scss";

const MainMenu: React.FC = () => (
  <ul className={scss.mainMenu}>
    {genders.map((category) => (
      <li key={category.path}>
        <NavLink to={category.path}>{category.categoryName}</NavLink>
      </li>
    ))}
  </ul>
);

export default MainMenu;
