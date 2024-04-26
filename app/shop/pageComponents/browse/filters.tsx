"use client";

import { useCallback, useState } from "react";
import { filters } from "./__filters";
import MultiRangeSlider from "./formComponents/multiRange";
import CustomSelect from "./formComponents/customSelect";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import Search from "./formComponents/search";

const filtersIcon = (
  <svg
    className="w-full"
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 6H19M21 12H16M21 18H16M7 20V13.5612C7 13.3532 7 13.2492 6.97958 13.1497C6.96147 13.0615 6.93151 12.9761 6.89052 12.8958C6.84431 12.8054 6.77934 12.7242 6.64939 12.5617L3.35061 8.43826C3.22066 8.27583 3.15569 8.19461 3.10948 8.10417C3.06849 8.02393 3.03853 7.93852 3.02042 7.85026C3 7.75078 3 7.64677 3 7.43875V5.6C3 5.03995 3 4.75992 3.10899 4.54601C3.20487 4.35785 3.35785 4.20487 3.54601 4.10899C3.75992 4 4.03995 4 4.6 4H13.4C13.9601 4 14.2401 4 14.454 4.10899C14.6422 4.20487 14.7951 4.35785 14.891 4.54601C15 4.75992 15 5.03995 15 5.6V7.43875C15 7.64677 15 7.75078 14.9796 7.85026C14.9615 7.93852 14.9315 8.02393 14.8905 8.10417C14.8443 8.19461 14.7793 8.27583 14.6494 8.43826L11.3506 12.5617C11.2207 12.7242 11.1557 12.8054 11.1095 12.8958C11.0685 12.9761 11.0385 13.0615 11.0204 13.1497C11 13.2492 11 13.3532 11 13.5612V17L7 20Z"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const Filters = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const { register, handleSubmit, setValue, reset, getValues } = useForm();

  const toggleOpen = useCallback(() => setIsFiltersOpen((prev) => !prev), []);

  const onChange = useCallback(
    (fieldName: string, fieldValue: string) => {
      setValue(fieldName, fieldValue);
    },
    [setValue],
  );

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const currentParams = new URLSearchParams(
      Array.from(searchParams.entries()),
    );

    for (let key in data) {
      if (["all", "0", "200", ""].includes(data[key])) {
        currentParams.delete(key);
      } else {
        currentParams.set(key, data[key]);
      }
    }

    const query = currentParams.toString()
      ? "?" + currentParams.toString()
      : "";

    router.push(pathname + query);
  };

  const onReset = useCallback(() => {
    reset({
      color: "all",
      category: "all",
      minPrice: "0",
      maxPrice: "200",
    });

    router.push(pathname);
  }, [pathname, reset, router]);

  return (
    <div
      className="sticky left-0 top-0 z-10 -mt-4 mb-6 bg-accent-main pt-4 shadow-accent-main"
      style={{ boxShadow: "0 .5rem .5rem .5rem var(--tw-shadow-color)" }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        onReset={() => onReset()}
        className="group/form container mx-auto px-4"
      >
        {/* Search & Toggle Filters */}
        <div className="flex items-center gap-2">
          <div className="grow">
            <Search
              name="name"
              register={register}
              onChange={onChange}
              getValues={getValues}
            />
          </div>
          <label
            htmlFor="toggleFilters"
            className="relative block w-12 shrink-0 cursor-pointer overflow-hidden rounded-full p-2 text-white after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-black after:opacity-0 after:transition-opacity hover:after:opacity-10 active:after:opacity-15 lg:hidden"
          >
            {filtersIcon}
          </label>
          <input type="checkbox" id="toggleFilters" className="hidden" />
        </div>

        <div
          className={`grid gap-4 group-has-[#toggleFilters:checked]/form:grid max-lg:hidden md:grid-cols-2 lg:grid-cols-4`}
        >
          {filters.map((item) => (
            <div
              className="grid grid-cols-12 items-center gap-2"
              key={item.name}
            >
              <span className="col-span-4 block font-semibold uppercase text-white">
                {item.label}:
              </span>

              <div className="col-span-8">
                {/* Select */}
                {item.type == "select" ? (
                  <CustomSelect
                    register={register}
                    name={item.name}
                    options={item.options}
                    onChange={onChange}
                    getValues={getValues}
                  />
                ) : null}

                {/* Range */}
                {item.type == "range" ? (
                  <MultiRangeSlider
                    min={0}
                    max={200}
                    step={5}
                    afterVal="$"
                    register={register}
                    minSearchParam="minPrice"
                    maxSearchParam="maxPrice"
                    getValues={getValues}
                    setValue={setValue}
                  />
                ) : null}
              </div>
            </div>
          ))}

          {/* Clear & Apply Buttons */}
          <div className="flex items-center gap-4">
            <button
              type="reset"
              className="btn-primary grow bg-rose-500 uppercase hover:bg-rose-700 active:bg-rose-400"
            >
              clear
            </button>
            <button
              type="submit"
              className="btn-primary grow bg-emerald-500 uppercase hover:bg-emerald-700 active:bg-emerald-400"
            >
              apply
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Filters;
