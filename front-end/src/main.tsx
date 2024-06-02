import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { addProductsToFavouritesAction } from "./api/addProductToFavouritesAction.ts";
import { deleteFavouriteAction } from "./api/deleteFavouriteAction.ts";
import { favouritesLoader } from "./api/favouritesLoader.ts";
import { mainPageLoader } from "./api/mainPageLoader.ts";
import { productDetailsLoader } from "./api/productDetailsLoader.ts";
import { productListLoader } from "./api/productListLoader.ts";
import App from "./App.tsx";
import "./index.scss";
import Cart from "./pages/Cart.tsx";
import Favourites from "./pages/Favourites.tsx";
import MainPage from "./pages/MainPage.tsx";
import ProductDetails from "./pages/ProductDetails.tsx";
import ProductList from "./pages/ProductList.tsx";

const router = createBrowserRouter([
  {
    path: "/add-to-favourites/:productId",
    action: addProductsToFavouritesAction,
  },
  {
    path: "/delete-from-favourites/:favouriteId",
    action: deleteFavouriteAction,
  },
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/koszyk",
        element: <Cart />,
      },
      {
        path: "/ulubione",
        element: <Favourites />,
        loader: favouritesLoader,
      },
      {
        path: "/:gender?",
        element: <MainPage />,
        loader: mainPageLoader,
      },
      {
        path: "/:gender/:category/:subcategory?",
        element: <ProductList />,
        loader: productListLoader,
      },
      {
        path: "/:gender/:category/:subcategory/:productId",
        element: <ProductDetails />,
        loader: productDetailsLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
