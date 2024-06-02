import { NavLink, useParams } from "react-router-dom";
import { categories } from "../../constants/categories";
import scss from "./CategoryMenu.module.scss";

const CategoryMenu: React.FC = () => {
  const params = useParams();

  return (
    <div className={scss.categoryMenu}>
      <ul>
        {categories.map((category) => (
          <li key={category.path}>
            <NavLink to={`/${params.gender}/${category.path}`}>
              {category.categoryName}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryMenu;
