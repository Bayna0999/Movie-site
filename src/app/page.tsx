"use client";
import { Upcomingmovie, Navbar, Genres } from "@/components/component";
import { GenreList } from "@/components/component/GenreList";
import { useState } from "react";

export default function Home() {
  const [mode, setMode] = useState(0);
  const [modeclass, setModeclass] = useState("bg-white");

  // const isLight = () => {
  //   if (mode == 1) {
  //     setMode(0);
  //   } else if (mode == 0) {
  //     setMode(1);
  //   }
  // };

  // const DarkOrLight = () => {
  //   isLight();
  //   if (mode == 1) {
  //     setModeclass("bg-black");
  //   }
  //   if (mode == 0) {
  //     setModeclass("bg-white");
  //   }
  // };

  return (
    <div className={`flex flex-col gap-[30px] ${modeclass}`}>
      <Upcomingmovie />
      <div className="w-screen flex justify-between ">
        <GenreList />
      </div>
    </div>
  );
}
