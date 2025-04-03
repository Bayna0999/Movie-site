"use client";
import React, { useEffect, useState } from "react";
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
import { Genrebadge } from "./Genrebadge";
import { axiosInstance, ImageUrl, SearchProps } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const Navbar = () => {
  const [searchMovie, setSearchMovie] = useState<SearchProps[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isChange, setIsChange] = useState(false);
  const getMovieData = async () => {
    try {
      const { data } = await axiosInstance.get(
        `search/movie?query=Mark&language=en-US&page=1`
      );
      setSearchMovie(data.results);
    } catch (err: any) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    getMovieData();
  }, []);
  const handleOnChange = (event: any) => {
    setInputValue(event.target.value);
  };

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
          <div className="flex items-center justify-center rounded-md border-[1px] border-[#E4E4E7] gap-4 ">
            <IoSearchSharp className="ml-3" />
            <div className="flex flex-col ">
              <input
                type="text"
                className="w-[379px] h-[36px]"
                placeholder="Search.."
                onChange={handleOnChange}
              />
              <div className="w-[537px] h-fit ">
                <Dialog>
                  <DialogTrigger>hey</DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>hello</DialogTitle>
                      <DialogDescription>hellooooo</DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
        <button className="w-[36px] h-[36px] rounded-md border-[1px] border-[#E4E4E7] flex justify-center items-center">
          <FiMoon />
        </button>
      </div>
    </div>
  );
};
