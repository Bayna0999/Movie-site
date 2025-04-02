import React from "react";
import { BsFilm } from "react-icons/bs";
import { IoSearchSharp } from "react-icons/io5";
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
import { log } from "console";
import { Genrebadge } from "./Genrebadge";

export const Navbar = ({ onchange }: { onchange: () => void }) => {
  return (
    <div className="w-screen h-[44px] flex justify-center items-center bg-white ">
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
                  <NavigationMenuLink>
                    <Genrebadge />
                  </NavigationMenuLink>
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
              onChange={onchange}
            />
          </div>
        </div>
        <button className="w-[36px] h-[36px] rounded-md border-[1px] border-[#E4E4E7] flex justify-center items-center">
          <FiMoon />
        </button>
      </div>
    </div>
  );
};
