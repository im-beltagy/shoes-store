import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  FieldValues,
  UseFormGetValues,
  UseFormRegister,
} from "react-hook-form";

const sendIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 96 96"
    className="h-full"
    stroke="currentColor"
  >
    <path d="M90.829 85.172 68.128 62.471A35.846 35.846 0 0 0 76 40C76 20.118 59.883 4 40 4 20.118 4 4 20.118 4 40s16.118 36 36 36c8.5 0 16.312-2.946 22.471-7.873l22.701 22.701A3.988 3.988 0 0 0 88 92a4 4 0 0 0 2.829-6.828zM40 68c-15.464 0-28-12.536-28-28s12.536-28 28-28c15.465 0 28 12.536 28 28S55.465 68 40 68z"></path>
  </svg>
);

interface PropsType {
  name: string;
  register: UseFormRegister<FieldValues>;
  onChange: (fieldName: string, fieldValue: string) => void;
  getValues: UseFormGetValues<FieldValues>;
}
const Search = (props: PropsType) => {
  const params = useSearchParams();

  const [value, setValue] = useState(params.get(props.name) || "");

  // On chnaging params will update the value to the new value even if applied or cleared
  useEffect(() => {
    setValue(props.getValues(props.name));
  }, [params, props]);

  return (
    <label
      htmlFor="search"
      className="my-4 mb-4 flex items-center rounded-md bg-white px-4 has-[*:focus]:ring-2"
    >
      <input
        type="text"
        id="search"
        className="w-full grow bg-transparent py-2 leading-8 focus:outline-none"
        placeholder="Search"
        {...props.register(props.name)}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="submit"
        className="my-2 block w-8 p-1 hover:text-primary active:text-natural"
      >
        {sendIcon}
      </button>
    </label>
  );
};

export default Search;
