"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { BsFilm } from "react-icons/bs";
import { IoSearchSharp } from "react-icons/io5";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { FiMoon } from "react-icons/fi";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <div className="flex flex-col gap-[30px]">
      <div className="w-screen h-[44px] flex justify-center items-center bg-white">
        <div className="flex justify-between items-center bg-transparent w-max h-[36px] gap-[200px]">
          <div className="w-fit h-[20px] flex items-center gap-2.5">
            <BsFilm className="fill-indigo-700" />
            <p className="text-indigo-700 uppercase font-bold">Movie Z</p>
          </div>
          <div className="flex ">
            <NavigationMenu className="border-md border-[#E4E4E7]">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Genre</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>Link</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <div className="flex items-center justify-center rounded-md border-[1px] border-[#E4E4E7] gap-[10px] ">
              <IoSearchSharp className="ml-3" />
              <input
                type="text"
                className="w-[379px] h-[36px]"
                placeholder="Search.."
              />
            </div>
          </div>
          <div className="w-[36px] h-[36px] rounded-md border-[1px] border-[#E4E4E7] flex justify-center items-center">
            <FiMoon />
          </div>
        </div>
      </div>
      <div className="w-screen h-[600px] flex justify-center items-center">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              {" "}
              <img
                src="https://s3-alpha-sig.figma.com/img/c78e/5e57/16d36abbdaa8df480db189d5729e384a?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mLG2xOJZNT2vGCrvhDwo3-iKl0QLHOJCxUbykqD81OWYT61RDmWH~sY5qc4qVMmDHRoLdT3VXAnqpxjl4QRY7lvqwtvVTj2-RScRPADrSRE2X1dKJ6MNwI89GQsAr7CVA~Sw886s4cN3GzZCxbhX6nG5wCcsdExQ3ZifH-DrPK1y2qNpWDmJzamRmYUQB4G5gKUvdNeqjPEES5nuyWmp4tVWbJDWV1Ve6DECdtwn6WwE~0puD445Fe7qQpsvTO15bYmHP3E7sN6ZamI~BBe1H7Aisb1JjhHE35MH~r0CHClF6Ayy8aDTsnbuKYmE-rzkB3IlXZLoaZaJNRHFDc~Erg__"
                alt=""
                className="w-screen h-[600px]"
              />
            </CarouselItem>
            <CarouselItem>...</CarouselItem>
            <CarouselItem>...</CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
