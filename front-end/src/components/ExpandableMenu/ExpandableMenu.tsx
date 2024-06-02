import { NavLink, useParams } from "react-router-dom";
import imgArrowIcon from "../../assets/arrow.svg";
import { categories } from "../../constants/categories";
import { PathToGenderName } from "../../types/enums";
import scss from "./ExpandableMenu.module.scss";

interface Params extends Record<string, string | undefined> {
  gender: keyof typeof PathToGenderName;
  category: string;
}

const ExpandableMenu: React.FC = () => {
  const params = useParams<Params>();

  if (!params.gender) return null;

  return (
    <div className={scss.expandableMenu}>
      <p>{PathToGenderName[params.gender]}</p>
      <ul>
        {categories.map((category) => (
          <li key={category.path}>
            <NavLink to={`/${params.gender}/${category.path}`}>
              {category.categoryName}
              <img
                className={params.category === category.path ? scss.expanded : ""}
                src={imgArrowIcon}
                alt="Ikona strzałki"
              />
            </NavLink>

            {params.category === category.path && category.subcategories && (
              <ul>
                {category.subcategories.map((subcategory) => (
                  <li key={subcategory.path}>
                    <NavLink
                      to={`/${params.gender}/${params.category}/${subcategory.path}`}
                    >
                      {subcategory.categoryName}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpandableMenu;
