"use client";
import axios from "axios";
import React, { use, useEffect, useState } from "react";
import { GoStarFill } from "react-icons/go";
import { GrLinkNext } from "react-icons/gr";
import { useParams } from "next/navigation";
import { axiosInstance, ImageUrl } from "@/lib/utils";

export const MovieDetails = () => {
  const [getData, setGetData] = useState([]);
  const [getSimilarData, setGetSimilarData] = useState([]);
  const [getCredits, setGetCredits] = useState([]);
  const params = useParams();

  const getMovieData = async () => {
    try {
      const { data } = await axiosInstance.get(`movie/972533?language=en-US`);
      setGetData(data);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  const getSimilarMovieData = async () => {
    try {
      const { data } = await axiosInstance.get(
        `movie/${params.id}/similar?language=en-US`
      );
      setGetSimilarData(data.crew);
      console.log(data.results, "data");
    } catch (err: any) {
      console.log(err.message);
    }
  };

  const getCreditsData = async () => {
    try {
      const { data } = await axiosInstance.get(
        `movie/${params.id}/credits?language=en-US`
      );
      setGetCredits(data.results);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  console.log(getData);
  console.log(getSimilarData);
  console.log(getCredits);

  useEffect(() => {
    getMovieData();
    getSimilarMovieData();
    getCreditsData();
  }, []);

  return (
    <div className="justify-center items-center w-screen h-screen ">
      <div className="flex justify-between ">
        <div className="flex flex-col h-[68px] w-[211px]">
          <p className="w-fulll h-10">{getData}</p>
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
        <img
          src={ImageUrl(getData?.poster_path)}
          className="rounded-sm w-[290px] h-[428px]"
        />
        <img
          src={ImageUrl(getData?.backdrop_path)}
          className=" rounded-sm w-[760px] h-[428px]"
        />
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
