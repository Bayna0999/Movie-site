"use client";
import { Upcomingmovie, Navbar, Genres } from "@/components/component";
import React, { useState } from "react";

export default function Home() {
  const [mode, setMode] = useState(false);
  const [modeclass, setModeclass] = useState("bg-white");
  const DarkOrLight = () => {
    if (mode == true) {
      setModeclass("bg-black");
    }
    if (mode == false) {
      setModeclass("bg-white");
    }
  };
  return (
    <div className={`flex flex-col gap-[30px] ${modeclass}`}>
      <Navbar darkmode={setMode} />
      <Upcomingmovie />
      <div className="w-screen flex justify-between ">
        <Genres />
      </div>
    </div>
  );
}
