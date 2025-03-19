"use client";

import * as React from "react";
import { Upcomingmovie, Navbar, Genres } from "@/components/component";

export default function Home() {
  return (
    <div className="flex flex-col gap-[30px]">
      <Navbar />
      <Upcomingmovie />

      <div className="w-screen flex justify-between ">
        <Genres />
      </div>
    </div>
  );
}
