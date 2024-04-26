interface PropsType {
  headding: string;
  subheadding?: string;
  darkBG?: boolean;
}

const SectionHeadding = (props: PropsType) => {
  return (
    <div className="px-2 pb-6 text-center md:pb-20">
      {props.subheadding ? (
        <span
          className={`block text-sm lg:text-lg ${props.darkBG ? "text-gray-200" : ""}`}
        >
          {props.subheadding}
        </span>
      ) : null}

      <h2
        className={`mb-4 mt-1 block text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl ${props.darkBG ? "text-white" : "text-primary"}`}
      >
        {props.headding}
      </h2>
      <div
        className={`mx-auto h-1 w-40 max-w-[80%] rounded-full ${props.darkBG ? "bg-white" : "bg-accent-main"}`}
      ></div>
    </div>
  );
};

export default SectionHeadding;
