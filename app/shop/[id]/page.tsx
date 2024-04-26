"use client";

import { useParams } from "next/navigation";
import ProductShowcase from "./pageComponents/productShowcase";
import ProductDetails from "./pageComponents/productDetails";
import { useEffect, useRef } from "react";
import { getFullProduct } from "@/lib/products/products";
import { useProductPage } from "@/lib/features/productPage/productPageSlice";

const SingleProduct = () => {
  const params = useParams<{ id: string }>();
  const product = getFullProduct(params.id);

  const isRenderedBefore = useRef(false);

  const updateProduct = useProductPage((state) => state.updateProduct);

  useEffect(() => {
    if (!isRenderedBefore.current) {
      isRenderedBefore.current = true;
    } else {
      updateProduct(product);
    }
  }, [product, updateProduct]);

  return (
    <section className="container mx-auto px-4 py-section-sm">
      {product ? (
        <div className="grid-cols-3 gap-8 lg:grid">
          {/* Product Showcase */}
          <div className="col-span-1">
            <ProductShowcase />
          </div>
          {/* Product Details */}
          <div className="col-span-2">
            <ProductDetails />
          </div>
        </div>
      ) : (
        <p className="text-center text-2xl font-semibold">Product Not Found.</p>
      )}
    </section>
  );
};

export default SingleProduct;
