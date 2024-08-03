import IconSearch from "@/components/icons/icon-search";
import IconShoppingBag from "@/components/icons/icon-shopping-bag";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="h-20 px-20 flex items-center justify-between">
      <Image src="/assets/images/logo.svg" width={40} height={40} alt="Logo" />
      <nav className="text-xl">
        <ul className="flex gap-14">
          <li>
            <Link href="/" className="hover:text-primary">
              Products
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-primary">
              About us
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-primary">
              Testimonial
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-primary">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex gap-6">
        <button type="button" className="hover:text-primary">
          <IconSearch />
        </button>
        <button type="button" className="hover:text-primary">
          <IconShoppingBag />
        </button>
      </div>
    </header>
  );
};

export default Header;
