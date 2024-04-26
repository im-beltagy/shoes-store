import SectionHeadding from "@/app/common/sectionHeadding";
import Image from "next/image";
import Link from "next/link";
import type { ProductSum } from "@/custom";
import { newestProducts } from "@/lib/products/products";
import ProductCard from "@/app/common/productCard";

const NewestShoes = () => {
  return (
    <section className="bg-accent-main">
      <div className="container mx-auto max-w-screen-lg px-4 py-section-sm md:py-section-md">
        <SectionHeadding
          headding="Newest Shoes"
          subheadding="Checkout The Latest Shoes"
          darkBG
        />

        {/* Content */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {newestProducts.map((item) => (
            <ProductCard {...item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewestShoes;
