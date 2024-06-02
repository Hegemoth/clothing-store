import scss from "./FullWidthButton.module.scss";

interface FullWidthButtonProps {
  children: React.ReactNode;
  isBlack?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const FullWidthButton: React.FC<FullWidthButtonProps> = ({ children, isBlack, onClick }) => {
  return (
    <button
      className={`${scss.button} ${isBlack ? scss.black : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default FullWidthButton;
