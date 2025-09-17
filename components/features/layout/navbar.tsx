"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeSelect } from "./theme-select";

const routes = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Components",
    href: "/components",
  },
  {
    title: "Examples",
    href: "/examples",
  },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <div className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b px-6 backdrop-blur">
      <div className="flex h-14 items-center justify-between">
        <div className="flex items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold">Web Boilerplate</span>
            </Link>
          </div>
          <NavigationMenu>
            <NavigationMenuList>
              {routes.map((route) => (
                <NavigationMenuItem key={route.href}>
                  <NavigationMenuLink
                    asChild
                    className={cn(
                      navigationMenuTriggerStyle(),
                      pathname === route.href
                        ? "bg-accent text-accent-foreground"
                        : "",
                    )}
                  >
                    <Link href={route.href}>{route.title}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center">
          <ThemeSelect />
        </div>
      </div>
    </div>
  );
}
