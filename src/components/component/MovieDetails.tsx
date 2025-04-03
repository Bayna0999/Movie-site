"use client";
import axios from "axios";
import React, { use, useEffect, useState } from "react";
import { GoStarFill } from "react-icons/go";
import { GrLinkNext } from "react-icons/gr";
import { useParams, useRouter } from "next/navigation";
import { CiPlay1 } from "react-icons/ci";
import {
  axiosInstance,
  CreditDataType,
  ImageUrl,
  SimilarDataType,
  SpecificDataType,
} from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card } from "./Card";

export const MovieDetails = () => {
  const router = useRouter();

  const handeleOnclick = (id: number) => {
    router.push(`${id}`);
  };
  const [getData, setGetData] = useState<SpecificDataType>({
    poster_path: "",
    backdrop_path: "",
  });
  const [getSimilarData, setGetSimilarData] = useState<SimilarDataType[]>([]);
  const [getCredits, setGetCredits] = useState<CreditDataType>({
    id: 1,
    cast: [],
    crew: [],
  });
  const params = useParams();

  const getMovieData = async () => {
    try {
      const { data } = await axiosInstance.get(
        `movie/${params.id}?language=en-US`
      );
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
      setGetSimilarData(data.results);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  const getCreditsData = async () => {
    try {
      const { data } = await axiosInstance.get(
        `movie/${params.id}/credits?language=en-US`
      );
      setGetCredits(data);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getMovieData();
    getSimilarMovieData();
    getCreditsData();
  }, []);
  const directors = getCredits.crew.filter((el) => el.job === "Director");
  const Writers = getCredits.crew.filter((el) => el.job === "Writer");
  const Stars = getCredits.crew.filter(
    (el) => el.known_for_department === "Acting"
  );
  return (
    <div className="mx-[180px] flex flex-col gap-5 justify-center items-center ">
      <div className="flex justify-between w-full">
        <div className="flex flex-col h-[68px] w-[211px]">
          <p className="w-fulll h-10">{getData.title}</p>
          <p className="w-full h-7">
            {getData.release_date + " " + getData.runtime}
          </p>
        </div>
        <div className="flex flex-col">
          <p>rating</p>
          <div className="flex items-center justify-center">
            <GoStarFill className="fill-yellow-400 w-7 h-7" />
            <div className="flex flex-col ">
              <div className="flex ">
                <p>{getData.vote_average}</p>
                <p className="text-[#71717A]">/10</p>
              </div>
              <p className="text-3 text-[#09090B]">{getData.popularity}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 w-full ">
        <img
          src={ImageUrl(getData.poster_path)}
          className="rounded-sm w-[290px] h-[428px]"
        />
        <div>
          <img
            src={ImageUrl(getData?.backdrop_path)}
            className="rounded-sm object-cover  h-[428px] "
          />
          <div>
            <CiPlay1 />
            <div className="">play trailer</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="w-full flex gap-5">
          {getData.genres?.map((value: any, index: number) => {
            return (
              <Badge key={index} variant="outline">
                {value.name}
              </Badge>
            );
          })}
        </div>
        <div className="w-full">{getData.overview}</div>
        <div className="w-full gap-[30px] h-fit">
          <div className="flex flex-col gap-2 w-full">
            <div className="w-full flex gap-8 mt-8">
              <p>Director</p>
              {directors.map((element, index) => {
                return <p key={index}>{element.name}</p>;
              })}
            </div>
            <div className=" bg-gray-400 w-full h-[1px]"></div>
          </div>

          <div className="flex flex-col gap-2 w-full mt-8">
            <div className="flex gap-8">
              <p>Writers</p>
              {Writers.map((element, index) => {
                return <p key={index}>{element.name}</p>;
              })}
            </div>
            <div className=" bg-gray-400 w-full h-[1px]"></div>
          </div>
          <div className="flex flex-col gap-2 w-full mt-8">
            <div className="w-full flex gap-8">
              <p>Stars</p>
              {Stars.map((element, index) => {
                return <p key={index}>{element.name}</p>;
              })}
            </div>
            <div className=" bg-gray-400 w-full h-[1px] mx-2"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="w-full flex justify-between ">
          <p className="text-[24px]">More like this</p>
          <button className="flex items-center justify-center gap-3">
            See more <GrLinkNext />
          </button>
        </div>
        <div className="flex w-full h-fit gap-8 ">
          {getSimilarData.map((value: any, index: number) => {
            return (
              index < 5 && (
                <Card
                  key={index}
                  jumpToDetails={() => {
                    handeleOnclick(value.id);
                  }}
                  image={ImageUrl(value.poster_path)}
                  rate={value.vote_average}
                  title={value.title}
                />
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};
