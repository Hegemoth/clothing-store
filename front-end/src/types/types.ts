export interface Product {
  id: number;
  gender: "women" | "men" | "children";
  category: string;
  subcategory: string;
  productName: string;
  brand: string;
  pricePLN: number;
  priceUSD: number;
  photos: string[];
  description: string;
  maintenanceInfo: string;
}

export interface Gender {
  categoryName: string;
  path: string;
}

export interface Category {
  categoryName: string;
  path: string;
  subcategories?: Subcategory[];
}

export interface Subcategory {
  categoryName: string;
  path: string;
}

export interface Favourite {
  id: number;
  product: Product;
}

export interface AccordionItem {
  title: string;
  content: string;
}
