import { useContext } from "react";
import imgCarIcon from "../../assets/car.svg";
import imgReturnIcon from "../../assets/return.svg";
import { CartContext } from "../../contexts/CartContext";
import { AccordionItem, Product } from "../../types/types";
import Accordion from "../Accordion/Accordion";
import FullWidthButton from "../FullWidthButton/FullWidthButton";
import scss from "./Details.module.scss";

interface DetailsProps {
  product: Product;
}

const Details: React.FC<DetailsProps> = ({ product }) => {
  const { addProductToCart } = useContext(CartContext);

  const accordionContent: AccordionItem[] = [
    {
      title: "Opis produktu",
      content: product.description,
    },
    {
      title: "Wskazówki pielęgnacyjne",
      content: product.maintenanceInfo,
    },
  ];

  console.log(product.pricePLN);

  return (
    <div className={scss.details}>
      <h2>{product.brand}</h2>
      <p className={scss.productName}>{product.productName}</p>
      <p className={scss.price}>{product.pricePLN} zł</p>

      <FullWidthButton isBlack={true} onClick={() => addProductToCart(product)}>
        Dodaj do koszyka
      </FullWidthButton>

      <ul className={scss.extraInfo}>
        <li>
          <img src={imgCarIcon} alt="Ikona samochodu" />
          Dostawa do 24h
        </li>

        <li>
          <img src={imgReturnIcon} alt="Ikona powrotu" />
          Zwrot do 100 dni!
        </li>
      </ul>
      <Accordion items={accordionContent} />
    </div>
  );
};

export default Details;
