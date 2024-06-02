import { NavLink, useParams } from "react-router-dom";
import imgArrowIcon from "../../assets/arrow.svg";
import { categories, genders } from "../../constants/categories";
import { Category, Gender } from "../../types/types";
import scss from "./Breadcrumbs.module.scss";

interface Params extends Record<string, string | undefined> {
  gender: string;
  category: string;
  subcategory?: string;
}

const Breadcrumbs: React.FC = () => {
  const params = useParams<Params>();

  const gender = genders.find((g) => g.path === params.gender);
  const category = categories.find((c) => c.path === params.category);

  if (!gender || !category) return null;

  const breadcrumbs: (Gender | Category)[] = [
    {
      categoryName: gender.categoryName,
      path: `/${gender.path}`,
    },
    {
      categoryName: category.categoryName,
      path: `/${gender.path}/${category.path}`,
    },
  ];

  if (params.subcategory) {
    const subcategory = category.subcategories?.find(
      (sc) => sc.path === params.subcategory
    );

    if (subcategory) {
      breadcrumbs.push({
        categoryName: subcategory.categoryName,
        path: `/${gender.path}/${category.path}/${subcategory.path}`,
      });
    }
  }

  return (
    <ul className={scss.breadcrumbs}>
      {breadcrumbs.map((breadcrumb) => (
        <li key={breadcrumb.path}>
          <NavLink to={breadcrumb.path} end>
            {breadcrumb.categoryName}
            <img src={imgArrowIcon} alt="Ikona strzałki" />
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Breadcrumbs;
