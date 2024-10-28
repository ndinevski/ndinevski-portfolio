"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { Menu } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import MediaContactTabs from "./MediaContactTabs";

import { navigationTabs, navigationTabsMobile } from "@/lib/consts";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="h-[70px]">
      <div className="fixed z-50 top-4 h-[41px] w-full flex justify-between items-center align-middle">
        <Link
          href="/"
          className="w-[200px] text-white hover:text-zinc-400 ml-6 text-xl max-lg:text-lg font-bold flex gap-2 items-center justify-start max-sm:hidden"
        >
          <img src="/ndLogo.png" alt="Logo" className="w-6 h-6 inline mr-2" />
          <span>Nikola Dinevski</span>
        </Link>
        <NavigationMenu className="h-full mx-auto sm:flex hidden w-[450px] list-none bg-white backdrop-blur-3xl bg-opacity-10 rounded-full justify-between align-middle items-center">
          {navigationTabs.map((item) => {
            const isActive = pathname === item.path;

            return (
              <NavigationMenuItem key={item.name}>
                <NavigationMenuLink
                  className={`text-white text-center align-middle font-semibold bg-opacity-50 text-md rounded-full p-3 hover:bg-accent hover:text-zinc-900 focus:bg-accent focus:text-accent-foreground focus:outline-none ${
                    isActive ? "bg-accent text-zinc-900" : ""
                  }`}
                  href={`/${item.name.toLowerCase()}`}
                >
                  {item.name}
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenu>
        <div className="w-[200px] sm:block hidden mr-6">
          <MediaContactTabs />
        </div>

        <div className="sm:hidden h-[60px] fixed top-0 bg-white backdrop-blur-3xl bg-opacity-10 flex justify-between items-center w-full px-4">
          <Link href="/" className="flex items-center justify-start flex-1">
            <img src="/ndLogo.png" alt="Logo" className="w-6 h-6 mr-2" />
            <span className="text-white text-lg font-bold">
              Nikola Dinevski
            </span>
          </Link>
          <div className="flex-1 flex justify-end">
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTitle></DialogTitle>
              <DialogTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:hidden w-11/12 rounded-xl slide-down">
                <nav className="flex flex-col items-center mt-8 gap-6">
                  {navigationTabsMobile.map((item) => {
                    const isActive = pathname === item.path;
                    return (
                      <div key={item.name}>
                        <Link
                          key={item.name}
                          href={
                            item.name === "Home"
                              ? "/"
                              : `/${item.name.toLowerCase()}`
                          }
                          onClick={() => setIsOpen(false)}
                          className={`text-black text-lg font-semibold py-4 text-foreground `}
                        >
                          <p
                            className={`border-2 border-black rounded-full p-3 w-[150px] text-center ${
                              isActive ? "bg-black text-white" : ""
                            }`}
                          >
                            {item.name}
                          </p>
                        </Link>
                      </div>
                    );
                  })}
                  <div className="mt-auto">
                    <Separator className="my-4" />
                    <MediaContactTabs classNameAttributes="max-sm:flex-row max-sm:justify-center " />
                  </div>
                </nav>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </header>
  );
}
