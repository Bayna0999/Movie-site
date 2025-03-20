"use client";
import { CiPlay1 } from "react-icons/ci";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { GoStarFill } from "react-icons/go";
import React, { useEffect, useState } from "react";
import axios from "axios";

export const Upcomingmovie = () => {
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

    <div className="w-screen h-[1000px] flex justify-center items-center">
      <Carousel>
        <CarouselContent>
          <div className="flex justify-center items-center"></div>
          <CarouselItem>
            
            {data?.map((value:any,index:number)=>{
              index<3 &&
              <div className="relative">
              <img
              key={index}
                src={`https://image.tmdb.org/t/p/w300${value.backdrop_path}`}
                alt=""
                className="w-[100%] h-screen absolute z-0"
              />
              <div className="w-[404px] h-[40px] flex flex-col justify-start absolute z-10 gap-[10px] text-white my-[400px] mx-[200px]">
                <p className="w-full">Now Playing:</p>
                <p className="w-full text-[36px] "key={index}>{value?.title}</p>
                <div className=" flex w-full gap-[10px]">
                  <GoStarFill className="fill-yellow-400" />
                  <div className="flex ">
                    <p key={index}>{value.vote_average}</p>
                    <p className="text-[#71717A]">/10</p>
                  </div>
                </div>

                <p key={index} className="w-[300px] h-auto text-[#FAFAFA] text-[12px]">
                  {value?.overview}
                </p>
                <button className="flex justify-center items-center rounded-md w-[160px] h-[40px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] text-black gap-[8px] font-inter bg-[#F4F4F5]">
                  <CiPlay1 />
                  Watch Trailer
                </button>
              </div>
            </div>
            })}
            
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="flex ml-[140px]" />
        <CarouselNext className=" flex mr-[140px]" />
      </Carousel>
    </div>
  );
};
