"use client";

import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import {
  FieldValues,
  UseFormGetValues,
  UseFormRegister,
} from "react-hook-form";

interface propsType {
  name: string;
  options: string[];
  register: UseFormRegister<FieldValues>;
  onChange: (fieldName: string, fieldValue: string) => void;
  getValues: UseFormGetValues<FieldValues>;
}

const CustomSelect = (props: propsType) => {
  const params = useSearchParams();

  const [value, setValue] = useState(
    params.get(props.name) || props.options[0],
  );
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);
  const onSelect = useCallback(
    (selectValue: string) => {
      setValue(selectValue);
      props.onChange(props.name, selectValue);
      setIsOpen(false);
    },
    [props],
  );

  // On chnaging params will update the value to the new value even if applied or cleared
  useEffect(() => {
    setValue(props.getValues(props.name));
  }, [params, props]);

  return (
    <div className="relative w-full">
      {/* Title */}
      <label
        htmlFor={props.name}
        role="button"
        aria-controls={`${props.name}-menu`}
        aria-expanded={isOpen}
        onClick={() => toggleOpen()}
        className="z-40 flex w-full items-center justify-between rounded bg-white px-3 py-1.5 text-start font-semibold text-primary hover:bg-slate-50 active:bg-slate-100 has-[*:focus]:bg-slate-100"
      >
        <input
          type="text"
          className="w-full cursor-[inherit] bg-transparent outline-none"
          value={value}
          {...props.register(props.name)}
          readOnly
        />

        {/* Arrow */}
        <svg
          className="h-3 w-3"
          fill="currentColor"
          height="800px"
          width="800px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512.001 512.001"
        >
          <path
            d="M510.613,48.105c-1.92-3.307-5.44-5.44-9.28-5.44H10.667C4.8,42.665,0,47.465,0,53.332c0,1.92,0.533,3.84,1.493,5.547
			l245.227,405.12c1.92,3.2,5.44,5.44,9.28,5.333c3.947,0,7.253-2.027,9.173-5.12L510.507,58.879
			C512.427,55.572,512.533,51.412,510.613,48.105z M256,438.079L29.547,63.999h452.8L256,438.079z"
          />
        </svg>
      </label>
      {/* options */}
      <div
        className={`absolute top-full z-50 mt-2 max-h-[50svh] w-full overflow-y-auto rounded border border-gray-200 bg-white shadow-md ${!isOpen ? "hidden" : ""}`}
      >
        <ul id={`${props.name}-menu`}>
          {props.options.map((option) => (
            <li
              className="cursor-pointer p-2 capitalize hover:bg-slate-50"
              key={option}
              onClick={() => onSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CustomSelect;
