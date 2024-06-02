import { LoaderFunction } from "react-router-dom";
import { backendURL } from "../constants/api";

export const favouritesLoader: LoaderFunction = () => {
  return fetch(`${backendURL}/favourites?_expand=product`);
};
