import Filters from "./filters";
import Products from "./products";

const Browse = () => {
  return (
    <section className="relative bg-accent-main py-section-sm md:py-section-md">
      {/* Filters */}
      <Filters />
      {/* Products */}
      <Products />
    </section>
  );
};

export default Browse;
