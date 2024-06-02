import scss from "./FlexContainer.module.scss";

interface FlexContainerProps {
  children: React.ReactNode;
}

const FlexContainer: React.FC<FlexContainerProps> = ({ children }) => {
  return <div className={scss.flexContainer}>{children}</div>;
};

export default FlexContainer;
