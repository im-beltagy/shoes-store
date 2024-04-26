import FeaturedShoes from "./pageComponents/featuredShoes";
import Features from "./pageComponents/features";
import Hero from "./pageComponents/hero";
import NewestShoes from "./pageComponents/newestShoes";
import Testimonials from "./pageComponents/testimonials";
import VisitStore from "./pageComponents/visitStore";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <NewestShoes />
      <FeaturedShoes />
      <Testimonials />
      <VisitStore />
    </div>
  );
}
