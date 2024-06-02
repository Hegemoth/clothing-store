import scss from "./TopNav.module.scss";

interface TopNavProps {
  children: React.ReactNode;
}

const TopNav: React.FC<TopNavProps> = ({ children }) => (
  <div className={scss.topNav}>{children}</div>
);

export default TopNav;
