"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import ImageComponent from "./image";
import Button from "./button";
import MenuIcon from "./menuIcon";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = (): void => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    const handleScroll = (): void => {
      if (menuOpen) setMenuOpen(false);
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("scroll", handleScroll);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  const handleMenuItemClick = (): void => {
    if (menuOpen) setMenuOpen(false);
  };

  return (
    <nav className="relative flex flex-col lg:flex-row items-center justify-between p-8 text-lg bg-blue text-white w-full font-sans font-bold">
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
        ref={menuRef}
        className={`${
          menuOpen ? "absolute top-full left-0 right-0" : "hidden"
        } lg:static lg:flex lg:items-center lg:w-auto transition-transform transform-gpu duration-300 ease-out bg-blue z-10`}
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
