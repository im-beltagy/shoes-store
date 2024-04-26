import { StaticImageData } from "next/image";

export type Categories =
  | "all"
  | "formal shoes"
  | "men's shoes"
  | "sneakers"
  | "women's shoes"
  | "loafers"
  | "heels"
  | "athletic shoes"
  | "boots"
  | "flats"
  | "casual shoes"
  | "sandals"
  | "wedges"
  | "slides"
  | "mules"
  | "slippers";

export type Colors =
  | "all"
  | "black"
  | "brown"
  | "blue"
  | "white"
  | "grey"
  | "pink"
  | "beige"
  | "red"
  | "silver"
  | "tan"
  | "navy"
  | "purple"
  | "taupe"
  | "green"
  | "camel"
  | "gold";

export interface ProductSum {
  id: string;
  name: string;
  img: string;
  description: string[];
  price: {
    original: string;
    sale: string | null;
    final?: string;
  };
  inStock: number;
  rating: 0 | 1 | 2 | 3 | 4 | 5;
}

export interface CartProduct
  extends Omit<ProductSum, "rating" | "description" | "price"> {
  pieces: number;
  colors: Colors[];
  choosenColor: Colors;
  itemID: string;
  price: string;
}

export interface Product extends ProductSum {
  categories: Categories[];
  colors: Colors[];
  relatedProducts: string[];
}

interface SelectFilter {
  name: string;
  label: string;
  type: "select";
  options: (Colors | Categories)[];
}
interface RangeFilter {
  name: string;
  label: string;
  type: "range";
  range: { min: number; max: number; step: number };
}

export type Filter = SelectFilter | RangeFilter;
