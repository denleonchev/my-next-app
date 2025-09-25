"use client";

import { link } from "fs";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
] as const;

export const Navigation = () => {
    const pathname = usePathname();
    
    return (
        <nav>
            {navLinks.map(navLink => {
                const isActive = pathname === navLink.href
                    || pathname.startsWith(navLink.href);

                return <Link href={navLink.href} className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}>{navLink.name}</Link>;
            })}
        </nav>
    );
}
