import { LoaderFunction, LoaderFunctionArgs, redirect } from "react-router-dom";
import { backendURL } from "../constants/api";
import { PathToEndpoint } from "../types/enums";

export const mainPageLoader: LoaderFunction = ({ params }: LoaderFunctionArgs) => {
  if (params.gender) {
    return fetch(`${backendURL}/${PathToEndpoint[params.gender as keyof typeof PathToEndpoint]}`);
  } else {
    return redirect("/kobieta");
  }
};
