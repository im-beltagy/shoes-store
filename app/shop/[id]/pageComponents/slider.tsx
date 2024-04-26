"use client";

import { ReactElement, useCallback, useState } from "react";

const arrowIcon = (
  <svg
    className="w-full"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 12H18M6 12L11 7M6 12L11 17"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface PropsType {
  className?: string;
  children: (ReactElement | ReactElement[])[];
}

const Slider = (props: PropsType) => {
  const children = props.children.flat();

  const [current, setCurrent] = useState(0);

  const increaseCurrent = useCallback(() => {
    setCurrent((prev) => (prev < children.length - 1 ? ++prev : prev));
  }, [children.length]);

  const decreaseCurrent = useCallback(() => {
    setCurrent((prev) => (prev > 0 ? --prev : prev));
  }, []);

  return (
    <div className={"relative w-full overflow-hidden" + " " + props.className}>
      {/* Slides */}
      {children.map((child, index) => {
        return (
          // used relative to make the parent fit the height
          <div
            className={`${index == 0 ? "relative" : "absolute"} top-0 w-full transition-[left] *:w-full`}
            style={{
              left: `${(index - current) * 100}%`,
            }}
            key={index}
          >
            {child}
          </div>
        );
      })}

      {/* Arrows */}
      <div className="absolute left-0 top-1/2 flex w-full -translate-y-1/2 items-center justify-between gap-4 px-2 text-black">
        {/* Left */}
        <button
          className="grid aspect-square h-auto w-10 place-items-center rounded-full border-4 border-primary bg-white text-primary transition-colors hover:bg-gray-100 active:bg-gray-200 disabled:bg-white disabled:opacity-60"
          onClick={() => decreaseCurrent()}
          disabled={current <= 0}
        >
          {arrowIcon}
        </button>
        {/* Right */}
        <button
          className="grid aspect-square h-auto w-10 rotate-180 place-items-center rounded-full border-4 border-primary bg-white text-primary transition-colors hover:bg-gray-100 active:bg-gray-200 disabled:bg-white disabled:opacity-60"
          onClick={() => increaseCurrent()}
          disabled={current >= children.length - 1}
        >
          {arrowIcon}
        </button>
      </div>

      {/* Points */}
      <ul className="absolute bottom-0 left-0 flex w-full items-center justify-center gap-1 bg-[#3333] py-4 text-black">
        {Array(children.length)
          .fill(null)
          .map((item, index) => (
            <li
              role="button"
              className={`h-2 rounded-full bg-white transition-[width] ${index == current ? "w-8" : "w-2"}`}
              key={index}
              onClick={() => setCurrent(index)}
            ></li>
          ))}
      </ul>
    </div>
  );
};

export default Slider;
