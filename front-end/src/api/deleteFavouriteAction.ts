import { ActionFunction, ActionFunctionArgs } from "react-router-dom";
import { backendURL } from "../constants/api";

export const deleteFavouriteAction: ActionFunction = ({ params }: ActionFunctionArgs) => {
  return fetch(`${backendURL}/favourites/${params.favouriteId}`, {
    method: "DELETE",
  });
};
