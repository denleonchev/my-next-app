"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const getNavLinks = (articleId: string) => ([
  { name: "Blog", href: "/blog" },
  { name: "Products", href: "/products" },
  { name: "Read in English", href: `/articles/${articleId}?lang=en` },
  { name: "Read in French", href: `/articles/${articleId}?lang=fr` },
  { name: "Read in Spanish", href: `/articles/${articleId}?lang=sp` },
]) as const;

export const ArticleNavigation = ({ articleId }: { articleId: string }) => {
    const pathname = usePathname();
    
    return (
        <nav>
            {getNavLinks(articleId).map(navLink => {
                const isActive = pathname === navLink.href
                    || pathname.startsWith(navLink.href);

                return <Link key={navLink.name} href={navLink.href} className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}>{navLink.name}</Link>;
            })}
        </nav>
    );
}
