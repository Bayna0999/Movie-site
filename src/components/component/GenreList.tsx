import React from "react";
import { Genres } from "./Genres";

const GenreData = [
  {
    title: "Upcoming movie",
    api_genre: "upcoming",
  },
  {
    title: "Popular movie",
    api_genre: "popular",
  },
  {
    title: "Top rated movie",
    api_genre: "top_rated",
  },
];

export const GenreList = () => {
  return (
    <div className="w-screen flex flex-col justify-between ">
      {GenreData.map((value: any, index: number) => {
        return (
          <Genres title={value.title} api_genre={value.api_genre} key={index} />
        );
      })}
    </div>
  );
};
