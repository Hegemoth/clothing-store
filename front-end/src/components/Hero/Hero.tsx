import CenteredContent from "../CenteredContent/CenteredContent";
import FullWidthButton from "../FullWidthButton/FullWidthButton";
import scss from "./Hero.module.scss";

interface HeroProps {
  heroImage: string;
}

const Hero: React.FC<HeroProps> = ({ heroImage }) => (
  <div className={scss.hero} style={{ backgroundImage: `url(${heroImage})` }}>
    <CenteredContent>
      <div className={scss.contentWrapper}>
        <h2>Letnie promocje do -70%!</h2>
        <p>Tylko najlepsze okazje!</p>
        <FullWidthButton>Sprawdź produkty</FullWidthButton>
      </div>
    </CenteredContent>
  </div>
);

export default Hero;
