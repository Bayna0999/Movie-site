"use client";
import { Upcomingmovie, Navbar, Genres } from "@/components/component";
import React, { useEffect, useState } from "react";
const [mode,setMode] = useState();
const [modeclass,setModeclass] = useState("bg-white");

const DarkOrLight = ()=>{
  if(mode == true){
    setModeclass("bg-black");
  }
}

export default function Home() {
  return (
    <div className={`flex flex-col gap-[30px] ${modeclass}`}>
      <Navbar darkmode={setMode}/>
      <Upcomingmovie/>
      <div className="w-screen flex justify-between ">
        <Genres />
      </div>
    </div>
  );
}
