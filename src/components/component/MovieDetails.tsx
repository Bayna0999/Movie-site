"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { GoStarFill } from "react-icons/go";
import { GrLinkNext } from "react-icons/gr";
import { useParams } from "next/navigation";

export const MovieDetails = () => {
  const [getData, setGetData] = useState([]);
  const [id, setId] = useState();
  const getMovieData = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=d67d8bebd0f4ff345f6505c99e9d0289`
      );
      setGetData(data.results);
    } catch (err: any) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    getMovieData();
  }, []);
  console.log(getData);

  const params = useParams<{ details: "details"; item: string }>();

  // Route -> /shop/[tag]/[item]
  // URL -> /shop/shoes/nike-air-max-97
  // `params` -> { tag: 'shoes', item: 'nike-air-max-97' }
  console.log("working");

  console.log(params.details);

  return (
    <div className="justify-center items-center w-screen h-screen ">
      <div className="flex justify-between ">
        <div className="flex flex-col h-[68px] w-[211px]">
          <p className="w-fulll h-10">{getData[0]}</p>
          <p className="w-full h-7">{getData[0]}</p>
        </div>
        <div className="flex flex-col">
          <p>rating</p>
          <div className="flex items-center justify-center">
            <GoStarFill className="fill-yellow-400 w-7 h-7" />
            <div className="flex flex-col ">
              <div className="flex ">
                <p>rate</p>
                <p className="text-[#71717A]">/10</p>
              </div>
              <p>views</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 ">
        <img src="" className="rounded-sm w-[290px] h-[428px]" />
        <img src="" className=" rounded-sm w-[760px] h-[428px]" />
      </div>
      <div className="">
        <div className="w-full">gerne</div>
        <div className="w-full">elphaba</div>
        <div className="w-full gap-5 h-fit">
          <div className="w-full">
            <p>Director</p>
            <p>???</p>
          </div>
          <div>
            <p>Writers</p>
            <p>???</p>
          </div>
          <div className="w-full">
            <p>Stars</p>
            <p>???</p>
          </div>
        </div>
      </div>
      <div>
        <div className="w-full flex justify-between ">
          <p className="text-[24px]">title</p>
          <button className="flex items-center justify-center gap-3">
            See more <GrLinkNext />
          </button>
        </div>
      </div>
    </div>
  );
};
