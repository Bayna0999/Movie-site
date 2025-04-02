"use client";
import React, { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { axiosInstance, Genres } from "@/lib/utils";

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

  return (
    <div className="flex flex-wrap gap-5">
      {genres.map((value, index) => {
        return (
          <Badge key={index} variant="outline">
            {value.name}
          </Badge>
        );
      })}
    </div>
  );
};
