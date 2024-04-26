import SectionHeadding from "@/app/common/sectionHeadding";
import { featuredProducts } from "@/lib/products/products";
import ProductCard from "@/app/common/productCard";

const FeaturedShoes = () => {
  return (
    <section className="container mx-auto max-w-screen-lg px-4 py-section-sm md:py-section-md">
      <SectionHeadding
        headding="Featured Shoes"
        subheadding="Checkout The Featured Shoes"
      />

      {/* Content */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {featuredProducts.map((item) => (
          <ProductCard {...item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedShoes;
