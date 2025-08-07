"use client";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { Menu, X } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import { getMenuItems } from "./constants";
import BttonModeVibe from "@/components/button-mode-vibe";
import { useTranslations } from "next-intl";

export const HeroHeader = () => {
  const t = useTranslations();
  const menuItems = getMenuItems(t);

  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const headerRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setMenuState(false);
      }
    };

    if (menuState) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuState]);
  return (
    <header ref={headerRef}>
      <nav data-state={menuState && "active"} className="fixed z-20 w-full">
        <div
          className={cn(
            "mx-auto mt-2 max-w-6xl px-6 transition-all duration-300  lg:px-12",
            isScrolled &&
              "max-w-4xl rounded-2xl border backdrop-blur-lg bg-background/30 lg:px-5"
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4 ">
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                href="#hero-section"
                aria-label="home"
                className="flex items-center gap-1 text-lg"
              >
                <Logo />
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
                data-state={menuState ? "active" : ""}
              >
                <Menu className="data-[state=active]:rotate-180 data-[state=active]:scale-0 data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="data-[state=active]:rotate-0 data-[state=active]:scale-100 data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-accent-foreground block duration-150 font-normal"
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6">
              <BttonModeVibe />
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={cn(
            "absolute top-full left-1/2 -translate-x-1/2 w-[calc(100%-theme(spacing.5))] mt-2 transition-all duration-300 ease-in-out lg:hidden border rounded-2xl",
            menuState
              ? "opacity-100 translate-y-0 visible backdrop-blur-lg bg-background/30"
              : "opacity-0 -translate-y-4 invisible"
          )}
        >
          <div className={cn("border rounded-2xl p-6 ")}>
            <ul className="space-y-4 text-base">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    onClick={() => setMenuState(false)}
                    className="text-muted-foreground hover:text-accent-foreground block duration-150 py-2"
                  >
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-4 border-t">
              <BttonModeVibe />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
