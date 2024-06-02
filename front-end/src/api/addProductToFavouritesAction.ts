import { ActionFunction, ActionFunctionArgs } from "react-router-dom";
import { backendURL } from "../constants/api";

export const addProductsToFavouritesAction: ActionFunction = ({ params }: ActionFunctionArgs) => {
  return fetch(`${backendURL}/favourites`, {
    method: "POST",
    body: JSON.stringify({
      productId: Number(params.productId),
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
