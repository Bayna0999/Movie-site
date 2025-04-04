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
  const [data, setData] = useState([]);
  const [isTrue,setIsTrue] = useState(false);
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
  const watchTrailer = () => {
    return (setIsTrue(true));
  };
  return (
    <div className=" w-screen flex justify-center items-center h-fit">
      <Carousel className="h-fit">
        <CarouselContent className="h-fit">
          {data?.map((value: any, index: number) => {
            return (
              index < 3 && (
                <CarouselItem key={index} className="relative h-fit">
                  <img
                    src={`https://image.tmdb.org/t/p/original${value?.backdrop_path}`}
                    className="w-full h-[800px] object-cover "
                  ></img>
                  <div className="w-[404px] h-[40px] flex flex-col justify-start gap-[10px] text-white absolute top-[200px] left-[200px]">
                    <p className="w-full text-black">Now Playing:</p>
                    <p className="w-full text-[36px] ">{value?.title}</p>
                    <div className=" flex w-full gap-[10px]">
                      <GoStarFill className="fill-yellow-400" />
                      <div className="flex ">
                        <p>{value.vote_average}</p>
                        <p className="text-[#71717A]">/10</p>
                      </div>
                    </div>
                    <p className="w-[300px] h-auto text-[#FAFAFA] text-[12px]">
                      {value?.overview}
                    </p>
                    <button
                    onClick={watchTrailer}
                      className="flex justify-center items-center rounded-md w-[160px] h-[40px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] text-black gap-[8px] font-inter bg-[#F4F4F5]"
                    >
                      <CiPlay1 />
                      Watch Trailer
                     {
                      isTrue && <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/lBimDKKNDDs?si=WPxpYnRQyNhSq5qT"
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      
                    ></iframe>
                     }
                    </button>
                  </div>
                </CarouselItem>
              )
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="flex ml-35" />
        <CarouselNext className="flex mr-35" />
      </Carousel>
    </div>
  );
};
// {
//   /* <Carousel>
// <CarouselContent>
//   <div className="flex justify-center items-center"></div>
//   {data?.map((value: any, index: number) => {
//     return (
//       index < 3 && (
//         <CarouselItem key={index}>
//           <div className="relative w-full">
//             <img
//               src={`https://image.tmdb.org/t/p/original${value?.backdrop_path}`}
//               alt=""
//               className="w-[100%] h-screen absolute z-0"
//             />
//             <div className="w-[404px] h-[40px] flex flex-col justify-start absolute z-10 gap-[10px] text-white my-[400px] mx-[200px]">
//               <p className="w-full">Now Playing:</p>
//               <p className="w-full text-[36px] ">{value?.title}</p>
//               <div className=" flex w-full gap-[10px]">
//                 <GoStarFill className="fill-yellow-400" />
//                 <div className="flex ">
//                   <p>{value.vote_average}</p>
//                   <p className="text-[#71717A]">/10</p>
//                 </div>
//               </div>

//               <p className="w-[300px] h-auto text-[#FAFAFA] text-[12px]">
//                 {value?.overview}
//               </p>
//               <button className="flex justify-center items-center rounded-md w-[160px] h-[40px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] text-black gap-[8px] font-inter bg-[#F4F4F5]">
//                 <CiPlay1 />
//                 Watch Trailer
//               </button>
//             </div>
//           </div>
//         </CarouselItem>
//       )
//     );
//   })}
// </CarouselContent>
// <CarouselPrevious className="flex ml-[140px]" />
// <CarouselNext className=" flex mr-[140px]" />
// </Carousel> */
// }
