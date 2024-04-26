"use client";

import { useSearchParams } from "next/navigation";
import { useCallback, useState, useMemo, useEffect } from "react";
import {
  FieldValues,
  UseFormRegister,
  UseFormGetValues,
  UseFormSetValue,
} from "react-hook-form";

interface propsType {
  min: number;
  max: number;
  step: number;
  afterVal?: string;
  register: UseFormRegister<FieldValues>;
  minSearchParam: string;
  maxSearchParam: string;
  getValues: UseFormGetValues<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
}
const MultiRangeSlider = (props: propsType) => {
  const params = useSearchParams();

  const [min, setMin] = useState(
    Number(params.get(props.minSearchParam)) || props.min,
  );
  const [max, setMax] = useState(
    Number(params.get(props.maxSearchParam)) || props.max,
  );

  // On chnaging params will update the value to the new value even if applied or cleared
  useEffect(() => {
    setMin(Number(props.getValues([props.minSearchParam])));
    setMax(Number(props.getValues([props.maxSearchParam])));
  }, [params, props]);

  // Convert to percentage
  const getPercent = useCallback(
    (value: number) =>
      Math.round(((value - props.min) / (props.max - props.min)) * 100),
    [props.min, props.max],
  );

  // Calc Custom Range Style
  const rangeStyle = useMemo(() => {
    const minPercent = getPercent(min);
    const maxPercent = getPercent(max);

    return {
      left: `${minPercent}%`,
      width: `${maxPercent - minPercent}%`,
    };
  }, [min, max, getPercent]);

  return (
    <div className="w-full">
      <div className="relative h-2 w-full">
        {/* Custom Track */}
        <div className="absolute z-0 h-full w-full rounded bg-slate-200" />
        {/* Custom Range */}
        <div
          className="absolute z-10 h-full rounded bg-emerald-500"
          style={rangeStyle}
        />
        {/* Left Thumb */}
        <input
          {...props.register("minPrice")}
          type="range"
          min={props.min}
          max={props.max}
          step={props.step}
          value={min}
          onChange={(event) => {
            const value = Math.min(
              Number(event.target.value),
              max - props.step,
            );
            setMin(value);

            // To Fix Error In Touch Screens
            props.setValue(props.minSearchParam, value);
          }}
          className={`pointer-events-none absolute top-1/2 z-20 w-full -translate-y-1/2 appearance-none bg-transparent accent-emerald-200 [&::-webkit-range-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:pointer-events-auto ${min >= props.max - props.step * 2 ? "z-40" : ""}`}
        />
        {/* right thumb */}
        <input
          {...props.register("maxPrice")}
          type="range"
          min={props.min}
          max={props.max}
          step={props.step}
          value={max}
          onChange={(event) => {
            const value = Math.max(
              Number(event.target.value),
              min + props.step,
            );
            setMax(value);

            // To Fix Error In Touch Screens
            props.setValue(props.maxSearchParam, value);
          }}
          className={`pointer-events-none absolute top-1/2 z-30 w-full -translate-y-1/2 appearance-none bg-transparent accent-emerald-200 [&::-webkit-range-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:pointer-events-auto`}
        />
      </div>
      {/* values */}
      <div className="mt-2 flex w-full items-center justify-between gap-2 text-sm text-white">
        <div>
          {min}
          {props.afterVal ? props.afterVal : null}
        </div>
        <div>
          {max}
          {props.afterVal ? props.afterVal : null}
        </div>
      </div>
    </div>
  );
};

export default MultiRangeSlider;
