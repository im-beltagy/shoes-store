"use client";

import { getProductsSlice } from "@/lib/products/products";
import ProductCard from "@/app/common/productCard";
import { ProductSum } from "@/custom";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const Products = () => {
  const searchParams = useSearchParams();
  const filters = useMemo(
    () =>
      [
        searchParams.get("name"),
        searchParams.get("minPrice"),
        searchParams.get("maxPrice"),
        searchParams.get("color"),
        searchParams.get("category"),
      ].map((param) => (param ? param : undefined)),
    [searchParams],
  ); // retruns undefined instead of null

  const generator = useMemo(() => getProductsSlice(...filters), [filters]);
  const [generatedProducts, setGeneratedProducts] = useState<ProductSum[]>([]);

  // enable/disable Load More button
  const [isProductsFinished, setIsProductsFinished] = useState(false);

  // monitors useEffect which generate first 5 products
  const isFirstMount = useRef(true);

  // Load more 5 products
  const updateGeneratedProducts = useCallback(() => {
    const nextProducts: ProductSum[] = generator.next().value;

    setGeneratedProducts((prev) => [...prev, ...nextProducts]);

    // If it generated less than 5 products that means there is no more products to generate the all 5
    if (nextProducts.length !== 5) {
      setIsProductsFinished(true);
    }
  }, [generator]);

  // load first 5 products
  useEffect(() => {
    if (!isFirstMount.current) {
      // Reset Products If it had been filtered
      setIsProductsFinished(false);
      setGeneratedProducts([]);
      updateGeneratedProducts();
    } else {
      isFirstMount.current = false;
    }
  }, [updateGeneratedProducts]);

  return (
    <div className="container mx-auto px-4">
      {/* No Products Message */}
      {generatedProducts.length === 0 && isProductsFinished ? (
        <div className="text-lg font-semibold text-white">
          There is no products.
        </div>
      ) : null}
      {generatedProducts.length === 0 && !isProductsFinished ? (
        <div className="text-lg font-semibold text-white">Loading...</div>
      ) : null}

      {/* Products */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {generatedProducts.map((item) => (
          <ProductCard {...item} key={item.id} />
        ))}
      </div>

      {/* Load More Button */}
      {!isProductsFinished && generatedProducts.length > 0 ? (
        <div className="mt-10 flex items-center gap-4">
          <hr className="grow border-white" />
          <button
            className="btn-outlined"
            onClick={() => updateGeneratedProducts()}
          >
            Load More
          </button>
          <hr className="grow border-white" />
        </div>
      ) : null}
    </div>
  );
};

export default Products;
