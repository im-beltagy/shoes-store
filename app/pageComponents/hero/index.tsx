import Image from "next/image";
import heroImg from "@/app/assets/hero.webp";
import Link from "next/link";

const Text = () => {
  return (
    <div className="relative z-10 col-span-7 grid gap-4 py-section-md max-md:justify-center md:py-section-md">
      <h1 className="font-special text-3xl text-primary max-md:text-balance max-md:text-center md:text-4xl lg:text-5xl">
        Lace Up for Something Different. ✨
      </h1>
      <p className="max-md:text-balance max-md:text-center md:text-lg lg:text-xl">
        Unleash your individuality with our one-of-a-kind &quot;shoe
        creations&quot;
      </p>

      {/* Call For Action */}
      <div className="flex flex-wrap items-center gap-2 max-md:justify-center">
        <Link href="#" className="btn-primary shrink-0">
          Buy Now
        </Link>
        <p className="text-sm text-accent-main">
          5,000 people like you have
          <br /> purchased this product!
        </p>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <main className="bg-beige-dark">
      <div className="container relative mx-auto max-w-screen-lg grid-cols-12 items-end gap-4 overflow-hidden px-4 md:grid">
        <Text />

        {/* Image */}
        <div className="bottom-0 left-0 col-span-5 w-full max-md:absolute max-md:h-full md:pt-section-md">
          <Image
            className="mx-auto"
            src={heroImg}
            alt="shoe cover picture"
            width={500}
            height={500}
          />
          {/* overlay */}
          <div className="absolute top-0 h-full w-full bg-beige-dark opacity-80 md:hidden"></div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
