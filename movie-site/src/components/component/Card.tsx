import React from "react";
import { GoStarFill } from "react-icons/go";

type CardProps = {
  image: string;
  rate: string;
  title: string;
};

export const Card = ({ image, rate, title }: CardProps) => {
  return (
    <div className="flex flex-col w-[230px] h-[420px] rounded-tl-md">
      <div className="w-[230px] h-[340px] ">
        <img className="w-full h-full" src={image} />
      </div>
      <div className="bg-[#F4F4F5] ">
        <div className=" flex w-full gap-[10px]">
          <GoStarFill className="fill-yellow-400" />
          <div className="flex ">
            <p>{rate}</p>
            <p className="text-[#71717A]">/10</p>
          </div>
        </div>
        <div className="text-[18px] h-[80px] w-[340px]">
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};
