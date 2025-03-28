import React from "react";
import { BsFilm } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";

export const Footer = () => {
  return (
    <div className="w-screen h-[200px] bg-indigo-700 flex justify-between items-center">
      <div className="my-10  h-full flex flex-col">
        <div className="w-fit h-[20px] flex items-center gap-2.5">
          <BsFilm className="fill-white" />
          <p className="text-white uppercase font-bold">Movie Z</p>
        </div>
        <p className="text-white">© 2024 Movie Z. All Rights Reserved.</p>
      </div>
      <div className="h-full">
        <p className="text-white">Contact Information</p>
        <div className="flex justify-center items-center">
          <CiMail className="fill-white" />
          <div className="flex flex-col gap-1">
            <p className="text-white">Email:</p>
            <p className="text-white">support@movieZ.com</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <LuPhone className=" fill-white" />
          <div className="flex flex-col gap-1">
            <p className="text-white">Phone:</p>
            <p className="text-white">+976 (11) 123-4567</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 h-full">
        <p className="text-white">Follow us </p>
        <div className="flex gap-1">
          <p className="text-white">Facebook</p>
          <p className="text-white">Instagram</p>
          <p className="text-white">Twitter</p>
          <p className="text-white">Youtube</p>
        </div>
      </div>
    </div>
  );
};
