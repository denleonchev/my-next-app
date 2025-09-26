"use client";

import { link } from "fs";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Blog", href: "/blog" },
  { name: "Products", href: "/products" },
  { name: "Read in English", href: "/articles/breaking-news-123?lang=en" },
  { name: "Read in French", href: "/articles/breaking-news-123?lang=fr" },
] as const;

export const GeneralNavigation = () => {
    const pathname = usePathname();
    
    return (
        <nav>
            {navLinks.map(navLink => {
                const isActive = pathname === navLink.href
                    || pathname.startsWith(navLink.href);

                return <Link href={navLink.href} className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"} key={navLink.name}>{navLink.name}</Link>;
            })}
        </nav>
    );
}
