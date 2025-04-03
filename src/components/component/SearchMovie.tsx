import React from "react";
import { GoStarFill } from "react-icons/go";
import { GrLinkNext } from "react-icons/gr";

type SearchProps = {
  Image: string;
  rate: number;
  date: number;
};

export const SearchMovie = ({ Image, rate, date }: SearchProps) => {
  return (
    <div className="w-[537px] h-[100px] bg-white flex gap-2">
      <img src={Image} className="rounded-md" />
      <div className="w-[454px] h-[87px]">
        <div className=" flex w-full gap-[10px] p-[10px]">
          <GoStarFill className="fill-yellow-400" />
          <div className="flex ">
            <p>{rate}</p>
            <p className="text-[#71717A]">/10</p>
          </div>
        </div>
        <div className="flex justify-between">
          <p>{date}</p>
          <div className="w-[454px] h-[36px]">
            See more <GrLinkNext />
          </div>
        </div>
      </div>
    </div>
  );
};
