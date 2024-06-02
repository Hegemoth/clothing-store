import { LoaderFunction, LoaderFunctionArgs } from "react-router-dom";
import { backendURL } from "../constants/api";

export const productDetailsLoader: LoaderFunction = ({ params }: LoaderFunctionArgs) => {
  return fetch(`${backendURL}/products/${params.productId}`);
};
