"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const year = new Date().getFullYear();

  const pathname = usePathname();
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/#about", label: "About" },
    // { href: "/#gallery", label: "Gallery" },
    { href: "/#reservations", label: "Reservations" },
  ];

  return (
    <footer className="bg-[#5E2634] text-white">
      <div className="flex flex-col justify-between gap-8 px-8 md:flex-row md:px-16 lg:px-32 py-8">
        <div className="flex flex-col space-y-2">
          <h5>Quick Links</h5>
          <ul className="space-y-2 md:flex md:flex-col">
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
        </div>
        <div className="space-y-2">
          <h5>Hours</h5>
          <p>Monday - Friday</p>
          <p>6:00am - 4:00pm</p>
          <p>Saturday - Sunday</p>
          <p>7:00am - 3:00pm</p>
        </div>
        <div className="space-y-2">
          <h5>Socials</h5>
        </div>
      </div>
      <hr className="lg:mx-32" />
      <p className="text-center p-8">
        © {year} Moments in Bloom. All rights reserved.
      </p>
    </footer>
  );
}
