"use client";

import dreamHomeSVG from "@/public/dreamHome.svg";
import Image from "next/image";
import Link from "next/link";

import { FiHome } from "react-icons/fi";
import { PiBuilding } from "react-icons/pi";
import { MdOutlineContactSupport } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";

import { usePathname } from "next/navigation";

function Header() {
  const pathName = usePathname();

  const links = [
    { icon: <FiHome />, label: "Home", href: "/" },
    { icon: <PiBuilding />, label: "Find House", href: "/offer" },
    { icon: <MdOutlineContactSupport />, label: "Support", href: "/support" },
  ];

  return (
    <nav className="flex items-center justify-between border-b-2 border-gray-200">
      <Image
        src={dreamHomeSVG}
        width="90"
        height="90"
        quality={100}
        alt="Dream Home Logo"
      />

      <div className="flex items-center gap-5 bg-gray-50 rounded-full p-2">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={`flex items-center gap-1 text-gray-500 h-7 ${
              link.href === pathName && "bg-gray-100 rounded-full px-2"
            }`}
          >
            <span className={`${link.href === pathName && "text-red-500"}`}>
              {link.icon}
            </span>
            <span className={`${link.href === pathName && "text-gray-950"}`}>
              {link.label}
            </span>
          </Link>
        ))}
      </div>

      <Link href="/account" className="border border-gray-300 p-2 rounded-full">
        <IoPersonOutline />
      </Link>
    </nav>
  );
}

export default Header;
