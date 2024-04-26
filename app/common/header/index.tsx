import brand from "@/app/assets/brand.svg";
import Image from "next/image";
import Nav from "./nav";
import Actions from "./actions";
import Link from "next/link";

const Brand = () => {
  return (
    <Link href="/" className="flex items-center gap-1">
      <Image src={brand} alt="ShoesStore" width="40" height="40" />
      <span className="font-brand text-2xl text-primary">ShoesStore</span>
    </Link>
  );
};

const Header = () => {
  return (
    <header className="group/header z-50">
      <div className="relative mx-auto flex items-center justify-between gap-4 bg-white p-4 lg:container">
        <Brand />
        <Nav />
        <Actions />
      </div>
    </header>
  );
};

export default Header;
