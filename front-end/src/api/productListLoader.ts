import { LoaderFunction, LoaderFunctionArgs, redirect } from "react-router-dom";
import { backendURL } from "../constants/api";
import { categories } from "../constants/categories";
import { PathToEndpoint } from "../types/enums";

export const productListLoader: LoaderFunction = ({ params, request }: LoaderFunctionArgs) => {
  const pageURL = new URL(request.url);
  const page = pageURL.searchParams.get("page") || "1";
  const gender = PathToEndpoint[params.gender as keyof typeof PathToEndpoint];
  const category = categories.find((c) => c.path === params.category);

  if (gender && category) {
    let url = `${backendURL}/products/?gender=${gender}&category=${params.category}`;

    if (params.subcategory) {
      const subcategory = category.subcategories?.find((sc) => sc.path === params.subcategory);

      if (subcategory) {
        url = `${url}&subcategory=${params.subcategory}`;
      } else {
        return redirect("/kobieta");
      }
    }

    url = `${url}&_limit=8&_page=${page}`;

    return fetch(url).then((response) => {
      const numberOfPages = Math.ceil(
        Number(response.headers.get("X-Total-Count")) / 8
      );

      return response.json().then((products) => {
        return { products, numberOfPages };
      });
    });
  } else {
    return redirect("/kobieta");
  }
};
