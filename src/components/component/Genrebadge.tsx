"use client";
import React, { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { axiosInstance, Genres } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { MdNavigateNext } from "react-icons/md";
export const Genrebadge = () => {
  const [genres, setGenres] = useState<Genres[]>([]);
  const getGenre = async () => {
    try {
      const { data } = await axiosInstance.get(`genre/movie/list?language=en`);
      setGenres(data.genres);
    } catch (err: any) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    getGenre();
  }, []);

  // const GenreFilter = ()=>{
  //   return
  // }
  const router = useRouter();
 const handleOnClick = (id:number)=>{
  router.push(`/GenreFilter/${id}`);
 }
  return (
    <div className="w-[400px] h-fit flex flex-wrap gap-5">
      {genres.map((value, index) => {
        return (
          <Badge  onClick={()=>{
            handleOnClick(value.id)}} key={index} >
            {value.name + "   "}
          </Badge>
        );
      })}
    </div>
  );
};
