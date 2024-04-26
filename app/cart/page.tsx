"use client";
import { useCart } from "@/lib/features/cart/cartSlice";
import colorHexCodes from "@/lib/products/ColorHexCodes";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";

const duplicateIcon = (
  <svg
    className="w-full"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g
      fill="currentColor"
      fillRule="evenodd"
      transform="translate(-204.000000, -931.000000)"
    >
      <path
        d="M234,951 C234,952.104 233.104,953 232,953 L216,953 C214.896,953 214,952.104 214,951 L214,935 C214,933.896 214.896,933 216,933 L232,933 C233.104,933 234,933.896 234,935 L234,951 L234,951 Z M232,931 L216,931 C213.791,931 212,932.791 212,935 L212,951 C212,953.209 213.791,955 216,955 L232,955 C234.209,955 236,953.209 236,951 L236,935 C236,932.791 234.209,931 232,931 L232,931 Z M226,959 C226,960.104 225.104,961 224,961 L208,961 C206.896,961 206,960.104 206,959 L206,943 C206,941.896 206.896,941 208,941 L210,941 L210,939 L208,939 C205.791,939 204,940.791 204,943 L204,959 C204,961.209 205.791,963 208,963 L224,963 C226.209,963 228,961.209 228,959 L228,957 L226,957 L226,959 L226,959 Z"
        id="duplicate"
      ></path>
    </g>
  </svg>
);

const removeIcon = (
  <svg
    className="w-full"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 11V17"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 11V17"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 7H20"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Cart = () => {
  const {
    products,
    ids,
    clearCart,
    updateProduct,
    duplicateProduct,
    removeProduct,
  } = useCart((state) => state);

  const { handleSubmit } = useForm();

  const onSubmit = () => {};
  const onReset = () => {
    clearCart();
  };

  return (
    <main className="container mx-auto max-w-screen-lg px-4 py-section-sm md:py-section-md">
      {products.length > 0 ? (
        <form
          className="grid gap-4"
          onSubmit={handleSubmit(onSubmit)}
          onReset={handleSubmit(onReset)}
        >
          {products.map(
            ({
              id,
              name,
              img,
              inStock,
              pieces,
              colors,
              itemID,
              price,
              choosenColor,
            }) => (
              // Wrapper level 0
              <div
                className={`flex justify-between gap-4 overflow-hidden rounded-lg border max-lg:flex-col ${inStock < pieces ? "bg-red-100" : ""}`}
                key={itemID}
              >
                {/* Wrapper level 1 */}
                <Link
                  className="flex items-center gap-2 self-stretch"
                  href={`/shop/${id}`}
                >
                  <Image src={img} alt={name} width={100} height={100} />
                  {/* Name */}
                  <span className="text-center text-xl font-semibold capitalize md:max-lg:grow">
                    {name}
                  </span>
                </Link>

                {/* Wrapper level 1 */}
                <div className="flex items-center gap-4 px-4 max-lg:mb-4 max-md:flex-col md:justify-between lg:grow">
                  {/* Wrapper level 2 */}
                  <div className="flex items-center gap-4">
                    {/* Colors */}
                    <ul className="flex gap-2">
                      {colors.map((color, index) => (
                        <li key={color}>
                          <label
                            htmlFor={color}
                            title={color}
                            className="block cursor-pointer rounded-full border border-divider bg-white p-1 transition-colors hover:bg-natural has-[[type=radio]:checked]:bg-primary"
                            onClick={(e) => {
                              updateProduct({
                                itemID,
                                choosenColor: color,
                              });
                            }}
                          >
                            <input
                              type="radio"
                              name={`${itemID}-color`}
                              id={`${itemID}-${color}`}
                              defaultChecked={color === choosenColor}
                              hidden
                            />
                            <div
                              className="h-4 w-4 rounded-full border border-divider"
                              style={{
                                backgroundColor: `#${colorHexCodes[color]}`,
                              }}
                            ></div>
                          </label>
                        </li>
                      ))}
                    </ul>

                    {/* Pieces Count */}
                    <div className="flex items-center gap-2">
                      <label
                        className="font-semibold uppercase tracking-wide"
                        htmlFor={`{${itemID}-pieces}`}
                      >
                        pieces:
                      </label>
                      <input
                        id={`{${itemID}-pieces}`}
                        className="w-16 rounded border px-2 py-1"
                        defaultValue={pieces}
                        name={`{${itemID}-pieces}`}
                        type="number"
                        min={inStock > 0 ? 1 : 0}
                        max={inStock}
                        onKeyDown={(e) => {
                          if (e.key == "Enter") {
                            e.preventDefault();
                          }
                        }}
                        onChange={(e) => {
                          updateProduct({
                            itemID,
                            pieces: Number(e.target.value),
                          });
                        }}
                      />
                    </div>
                  </div>

                  {/* Wrapper level 2 */}
                  <div className="">
                    {/* Piece Price */}
                    <span className="mb-1 block">
                      Piece Price:{" "}
                      <span className="text-lg font-semibold">{price}$</span>
                    </span>
                    {/* Total Price */}
                    <span className="block">
                      Total Price:{" "}
                      <span className="text-lg font-semibold">
                        {(Number(price) * pieces).toFixed(2)}$
                      </span>
                    </span>
                  </div>

                  {/* Wrapper level 2 */}
                  {/* Actions */}
                  <div className="flex gap-4">
                    <button
                      className="h-6 w-6 text-blue-500"
                      onClick={() => {
                        duplicateProduct({ itemID });
                      }}
                    >
                      {duplicateIcon}
                    </button>
                    <button
                      className="h-6 w-6 text-rose-500"
                      onClick={() => {
                        removeProduct({ itemID });
                      }}
                    >
                      {removeIcon}
                    </button>
                  </div>
                </div>
              </div>
            ),
          )}

          {/* Buttons */}
          <div className="flex items-center justify-center gap-4 max-md:flex-col">
            <button className="btn-primary" type="submit">
              Buy All
            </button>
            <button
              className="btn-primary bg-rose-500 hover:bg-rose-600 active:bg-rose-700"
              type="reset"
            >
              Clear All
            </button>
          </div>
        </form>
      ) : (
        <p className="text-center text-xl font-bold">
          There is no products yet.
        </p>
      )}
    </main>
  );
};

export default Cart;
