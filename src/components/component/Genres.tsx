"use client";
import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import { GrLinkNext } from "react-icons/gr";
import axios from "axios";
import { useRouter } from "next/navigation";

type GenreProps = {
  api_genre: string;
  title: string;
};

export const Genres = ({ api_genre, title }: GenreProps) => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${api_genre}?language=en-US&page=1&api_key=d67d8bebd0f4ff345f6505c99e9d0289`,
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
  const router = useRouter();

  const handeleOnclick = (id: number) => {
    router.push(`details/${id}`);
  };

  return (
    <div className="pl-[100px] w-screen items-center">
      <div className="w-full flex justify-between ">
        <p className="text-[24px]">{title}</p>
        <button className="flex items-center justify-center gap-3">
          See more <GrLinkNext />
        </button>
      </div>
      <div className="flex flex-wrap w-screen  gap-8">
        {data?.map((value: any, index: any) => {
          return (
            index < 10 && (
              <Card
                jumpToDetails={() => handeleOnclick(value.id)}
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
