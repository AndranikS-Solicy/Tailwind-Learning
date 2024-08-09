"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import ImageComponent from "./image";
import Button from "./button";
import MenuIcon from "./menuIcon";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = (): void => {
      if (menuOpen) setMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  const handleMenuItemClick = (): void => {
    if (menuOpen) setMenuOpen(false);
  };

  return (
    <nav className="flex flex-col lg:flex-row items-center justify-between p-8 text-lg bg-blue text-white w-full font-sans font-bold">
      <div className="flex items-center justify-between w-full lg:w-auto">
        <Link href="/" passHref>
          <ImageComponent
            src="/images/tw.png"
            alt="Tailwind logo"
            width={100}
            height={50}
            className="object-cover"
          />
        </Link>
        <div className="block lg:hidden">
          <Button
            onClick={toggleMenu}
            className="text-warmGray focus:outline-none"
          >
            <MenuIcon />
          </Button>
        </div>
      </div>
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } lg:flex lg:items-center lg:w-auto transition-transform transform-gpu duration-300 ease-out`}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 lg:mt-0 w-full">
          <Link
            href="/"
            className="text-center py-2"
            onClick={handleMenuItemClick}
          >
            Home
          </Link>
          <Link
            href="/blog"
            className="text-center py-2"
            onClick={handleMenuItemClick}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-center py-2"
            onClick={handleMenuItemClick}
          >
            Contact
          </Link>
          <Link
            href="/about"
            className="text-center py-2"
            onClick={handleMenuItemClick}
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
