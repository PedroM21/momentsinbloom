"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/#about", label: "About" },
    // { href: "/#gallery", label: "Gallery" },
    { href: "/#reservations", label: "Reservations" },
  ];

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="absolute flex flex-row justify-between items-center w-full p-4 gap-8 z-10 border-b-2 ">
      <div className="w-1/3" />
      {/* Desktop Nav */}
      <ul className="hidden md:flex md:gap-8">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`cursor-pointer ${
                pathname === item.href
                  ? "hover:text-[#588157] hover:border-b-2"
                  : " hover:text-[#588157] hover:border-b-2"
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button
          onClick={handleMenuToggle}
          aria-label="Toggle menu"
          className="absolute top-1/2 transform -translate-y-1/2 left-4 z-30 flex flex-col items-center justify-center w-10 h-10"
        >
          <span
            className={`w-6 h-1 bg-[#DEA193] rounded transition-all duration-300 mb-1 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-1 bg-[#DEA193] rounded transition-all duration-300 mb-1 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-1 bg-[#DEA193] rounded transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>
      {/* Mobile Navigation */}
      {menuOpen && (
        <ul className="fixed inset-0 z-20 md:hidden flex flex-col gap-8 justify-center items-center bg-[#5E2634] text-white">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <div className="w-1/3">
        <Image
          src="/Logo.png"
          alt="Moments in Bloom logo"
          width={60}
          height={60}
          priority
          className="mx-auto"
        />
        <h6 className="text-center">Moments in Bloom</h6>
      </div>
    </div>
  );
}
