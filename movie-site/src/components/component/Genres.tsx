"use client";
import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import { GrLinkNext } from "react-icons/gr";
import axios from "axios";

export const Genres = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE",
          },
        }
      )
      .then((res) => setData(res.data.results));
  }, []);
  return (
    <div className="pl-[100px] ">
      <div className="w-screen flex justify-between ">
        <p className="text-[24px]">Upcoming</p>
        <button className="flex items-center ">
          see more <GrLinkNext />
        </button>
      </div>
      <div className="inline-grid justify-between grid-cols-5 w-screen">
        {data?.map((value, index) => {
          return (
            index < 10 && (
              <Card
                key={index}
                image={`https://image.tmdb.org/t/p/w300${value.poster_path}`}
                rate={value.vote_average}
                title={value.title}
              />
            )
          );
        })}
      </div>
    </div>
  );
};
