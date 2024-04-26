"use server";

import { Categories, Colors, Product, ProductSum } from "@/custom";
import { products } from "./__products";

export function getFullProduct(id: string): Product {
  return products.filter((p) => p.id === id)[0];
}

function filterProduct(product: Product): ProductSum {
  return {
    id: product.id,
    name: product.name,
    img: product.img,
    description: product.description,
    price: product.price,
    rating: product.rating,
    inStock: product.inStock,
  };
}

export function* getProductsSlice(
  name?: string,
  minPrice?: string,
  maxPrice?: string,
  color?: Colors,
  category?: Categories,
): Generator<ProductSum[]> {
  const filteredProducts = products
    .map((p) => {
      const newP = p;
      p.price.sale
        ? (p.price.final = p.price.sale)
        : (p.price.final = p.price.original);
      return newP;
    })
    .filter(
      (p) =>
        (!name || p.name.toLowerCase().includes(name.toLowerCase())) &&
        (!minPrice || Number(p.price.final) >= Number(minPrice)) &&
        (!maxPrice || Number(p.price.final) <= Number(maxPrice)) &&
        (!color || p.colors.includes(color)) &&
        (!category || p.categories.includes(category)),
    );

  let i = 0;
  while (true) {
    yield filteredProducts.slice(i, i + 5).map((p) => filterProduct(p));
    i += 5;
  }
}

export function productsArr(ids: string[]): ProductSum[] {
  return products
    .filter((p) => ids.includes(p.id))
    .map((p) => filterProduct(p));
}

export const featuredProducts = [products[11], products[42], products[14]].map(
  (p) => filterProduct(p),
);

export const newestProducts = [products[3], products[29], products[12]].map(
  (p) => filterProduct(p),
);
