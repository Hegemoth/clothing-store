import { useState } from "react";
import imgArrowIcon from "../../assets/arrow.svg";
import { AccordionItem } from "../../types/types";
import scss from "./Accordion.module.scss";

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  return (
    <ul>
      {items.map((item, index) => (
        <li key={item.title} onClick={() => setActiveItemIndex(index)}>
          <div className={scss.item}>
            <p>{item.title}</p>

            <img
              className={activeItemIndex === index ? scss.expanded : ""}
              src={imgArrowIcon}
              alt="Ikona strzałki"
            />
          </div>

          {activeItemIndex === index && <p>{item.content}</p>}
        </li>
      ))}
    </ul>
  );
};

export default Accordion;
