import React from "react";
import { Card } from "./Card";

const upcomingdata = [
  {
    image: "",
    title: "Dear Santa",
    rate: "6",
  },
  {
    image: "",
    title: "How To Train Your Dragon Live Action",
    rate: "6",
  },
  {
    image: "",
    title: "Alien Romulus",
    rate: "6",
  },
  {
    image: "",
    title: "From the Ashes",
    rate: "6",
  },
  {
    image: "",
    title: "Space Dogg",
    rate: "6",
  },
];

export const Genres = () => {
  return (
    <div className="flex flex-col gap-[32px] ">
      {upcomingdata.map((value, index) => {
        return (
          index < 10 && (
            <Card image={value.image} rate={value.rate} title={value.title} />
          )
        );
      })}
    </div>
  );
};
