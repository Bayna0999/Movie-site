import React from "react";
import { GoStarFill } from "react-icons/go";

type CardProps = {
  image: string;
  rate: string;
  title: string;
};

export const Card = ({ image, rate, title }: CardProps) => {
  return (
    <div className="flex flex-col w-[230px] h-[420px] my-[30px]">
      <div className="w-[230px] h-[340px] ">
        <img className="w-full h-full rounded-t-md" src={image} />
      </div>
      <div className="rounded-b-md gap-[10px] bg-amber-100  ">
        <div className=" flex w-full gap-[10px] p-[10px]">
          <GoStarFill className="fill-yellow-400" />
          <div className="flex ">
            <p>{rate}</p>
            <p className="text-[#71717A]">/10</p>
          </div>
        </div>
        <div className="text-[18px] h-[80px] w-[340px] p-[10px]">
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};
