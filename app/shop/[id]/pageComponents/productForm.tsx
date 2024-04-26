"use client";

import { Colors } from "@/custom";
import { useCart } from "@/lib/features/cart/cartSlice";
import { useProductPage } from "@/lib/features/productPage/productPageSlice";
import colorHexCodes from "@/lib/products/ColorHexCodes";
import { useState } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  color: Colors;
  pieces: number;
};

const ProductForm = () => {
  // Current Page Product
  const { id, name, img, colors, inStock, price } = useProductPage(
    (state) => state.product,
  );

  // Cart Products
  const {
    ids: cartIds,
    removeProductById,
    addProduct,
  } = useCart((state) => state);
  const [added2Cart, setAdded2Cart] = useState(cartIds.includes(id));

  // Form
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    if (added2Cart) {
      // remove from cart
      removeProductById({ id });
      setAdded2Cart(false);
    } else {
      // add to cart
      addProduct({
        id,
        name,
        img,
        colors,
        inStock,
        price: `${price.final}`,
        pieces: data.pieces,
        choosenColor: data.color,
      });
      setAdded2Cart(true);
    }
  };

  return (
    <form
      className="flex flex-col max-lg:items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Colors & Count */}
      <div className="mb-4 flex items-center gap-4">
        <ul className="flex gap-2">
          {colors.map((color: Colors, index) => (
            <li key={color}>
              <label
                htmlFor={color}
                title={color}
                className="block cursor-pointer rounded-full border border-divider bg-white p-1 transition-colors hover:bg-natural has-[[type=radio]:checked]:bg-primary"
              >
                <input
                  {...register("color")}
                  type="radio"
                  value={color}
                  id={color}
                  defaultChecked={index === 0}
                  hidden
                />
                <div
                  className="h-4 w-4 rounded-full border border-divider"
                  style={{ backgroundColor: `#${colorHexCodes[color]}` }}
                ></div>
              </label>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <label
            className="font-semibold uppercase tracking-wide"
            htmlFor="pieces"
          >
            pieces:
          </label>
          <input
            className="w-16 rounded border px-2 py-1"
            {...register("pieces")}
            id="pieces"
            defaultValue={inStock > 0 ? 1 : 0}
            type="number"
            min={inStock > 0 ? 1 : 0}
            max={inStock}
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                e.preventDefault();
              }
            }}
          />
        </div>
      </div>

      {/* In Stock */}
      <div className="mb-4 flex items-center gap-1 font-semibold">
        In Stock:{" "}
        {inStock > 0 ? (
          <span
            className={`text-xl ${inStock > 15 ? "text-yellow-500" : "text-red-600"}`}
          >
            {inStock} piece{inStock > 1 ? "s" : ""}
          </span>
        ) : (
          <span className={`font-light tracking-wider text-red-600`}>
            Not Available
          </span>
        )}
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        {/* By default in form if there is no submit, button type will be "submit" not "button" */}
        {inStock ? (
          <button className="btn-primary max-sm:px-4" type="button">
            Buy Now
          </button>
        ) : null}
        <button className="btn-primary max-sm:px-4" type="submit">
          {added2Cart ? "Remove From Cart" : "Add To Cart"}
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
