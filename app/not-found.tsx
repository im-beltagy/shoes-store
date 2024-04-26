import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 | Not Found",
};

const NotFound = () => {
  return (
    <main className="grid place-items-center text-xl">
      404 | This page could not be found.
    </main>
  );
};

export default NotFound;
