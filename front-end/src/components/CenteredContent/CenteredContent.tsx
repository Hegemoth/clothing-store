import scss from "./CenteredContent.module.scss";

interface CenteredContentProps {
  children: React.ReactNode;
}

const CenteredContent: React.FC<CenteredContentProps> = ({ children }) => {
  return <div className={scss.wrapper}>{children}</div>;
};

export default CenteredContent;
