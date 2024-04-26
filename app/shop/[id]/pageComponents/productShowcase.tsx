"use client";

import Image from "next/image";
import Slider from "./slider";
import colorHexCodes from "@/lib/products/ColorHexCodes";
import { useProductPage } from "@/lib/features/productPage/productPageSlice";

const ProductShowcase = () => {
  const { name, img, colors } = useProductPage((state) => state.product);

  return (
    <div className="mb-10">
      <Slider className="mx-auto max-w-[500px] rounded-xl shadow-lg">
        <Image src={img} alt={name} width={500} height={500} />
        {colors.map((color) => (
          <Image
            key={color}
            src={`https://placehold.co/500/${colorHexCodes[color]}/${color === "white" ? "000" : "FFF"}/webp?text=${name}`}
            alt={`${name} / ${color}`}
            width={500}
            height={500}
          />
        ))}
      </Slider>
    </div>
  );
};

export default ProductShowcase;
