import scss from "./MainContent.module.scss";

interface MainContentProps {
  children: React.ReactNode;
}

const MainContent: React.FC<MainContentProps> = ({ children }) => (
  <div className={scss.mainContent}>{children}</div>
);

export default MainContent;
