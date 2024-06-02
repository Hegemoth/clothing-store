import { Outlet } from "react-router-dom";
import "./App.scss";
import CategoryMenu from "./components/CategoryMenu/CategoryMenu";
import CurrencySelector from "./components/CurrencySelector/CurrencySelector";
import Footer from "./components/Footer/Footer";
import IconMenu from "./components/IconMenu/IconMenu";
import Logo from "./components/Logo/Logo";
import MainContent from "./components/MainContent/MainContent";
import MainMenu from "./components/MainMenu/MainMenu";
import TopNav from "./components/TopNav/TopNav";
import { CartContext } from "./contexts/CartContext";
import { CurrencyContext } from "./contexts/CurrencyContext";
import useLocalStorage from "./hooks/useLocalStorage";
import { Currency } from "./types/enums";
import { Product } from "./types/types";

const App: React.FC = () => {
  const [currency, setCurrency] = useLocalStorage(
    "selected_currency",
    Currency.PLN
  );

  const [cartItems, setCartItems] = useLocalStorage<Product[]>(
    "cart_products",
    []
  );

  const addProductToCart = (product: Product): void => {
    setCartItems([...cartItems, product]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addProductToCart }}>
      <CurrencyContext.Provider value={{ currency, setCurrency }}>
        <MainContent>
          <TopNav>
            <MainMenu />
            <Logo />

            <div>
              <CurrencySelector />
              <IconMenu />
            </div>
          </TopNav>

          <CategoryMenu />
          <Outlet />
        </MainContent>

        <Footer />
      </CurrencyContext.Provider>
    </CartContext.Provider>
  );
};

export default App;
