import { NavLink } from "react-router-dom";
import scss from "./Pagination.module.scss";

interface PaginationProps {
  numberOfPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ numberOfPages }) => {
  const pages = Array(numberOfPages).fill(null);

  return (
    <ul className={scss.pagination}>
      {pages.map((_, i) => (
        <li key={i}>
          <NavLink to={`?page=${i + 1}`}>{i + 1}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
