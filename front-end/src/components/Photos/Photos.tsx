import { useState } from "react";
import { Product } from "../../types/types";
import FlexContainer from "../FlexContainer/FlexContainer";
import scss from "./Photos.module.scss";

interface PhotosProps {
  product: Product;
}

const Photos: React.FC<PhotosProps> = ({ product }) => {
  const [currentPhoto, setCurrentPhoto] = useState(product.photos[0]);

  return (
    <FlexContainer>
      <div className={scss.thumbnails}>
        {product.photos.map((photo) => (
          <img
            key={photo}
            className={photo === currentPhoto ? scss.active : ""}
            src={photo}
            alt="Minatura produktu"
            onClick={() => setCurrentPhoto(photo)}
          />
        ))}
      </div>
      <img className={scss.mainPhoto} src={currentPhoto} alt="Produkt" />
    </FlexContainer>
  );
};

export default Photos;
