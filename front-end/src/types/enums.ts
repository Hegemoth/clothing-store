export enum AppRoute {
  Root = "/",
  Cart = "/koszyk",
  Favourites = "/ulubione",
  MainPage = "/:gender?",
  ProductList = "/:gender/:category/:subcategory?",
  ProductDetails = "/:gender/:category/:subcategory/:productId",
}

export enum Currency {
  PLN = "PLN",
  USD = "USD",
}

export enum CurrencySign {
  PLN = "zł",
  USD = "$",
}

export enum EndpointToPath {
  "women" = "kobieta",
  "men" = "mezczyzna",
  "children" = "dziecko",
}

export enum PathToEndpoint {
  "kobieta" = "women",
  "mezczyzna" = "men",
  "dziecko" = "children",
}

export enum PathToGenderName {
  "kobieta" = "Kobieta",
  "mezczyzna" = "Mężczyzna",
  "dziecko" = "Dziecko",
}
