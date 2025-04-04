"use client"
import { axiosInstance, Genres, ImageUrl } from '@/lib/utils';
import { Badge } from "@/components/ui/badge";
import React, { useEffect, useState } from 'react'
import { Card } from '@/components/component';
import { useRouter } from 'next/navigation';

export default function page() {

    const [getGenres, setGetGenres] = useState<Genres[]>([]);
    const [getGenreId, setGetGenreId] = useState<Genres[]>([]);
      const getGenre = async () => {
        try {
          const { data } = await axiosInstance.get(`genre/movie/list?language=en`);
          setGetGenres(data.genres);
        } catch (err: any) {
          console.log(err.message);
        }
      };
      
        const getMovieByGenre = async () => {
          try {
            const { data } = await axiosInstance.get(
              `discover/movie?language=en&with_genres=${getGenreId}&page=1`
            );
            setGetGenreId(data.results);
          } catch (err: any) {
            console.log(err.message);
          }
        };
        useEffect(() => {
            getGenre();
            getMovieByGenre();
          }, []);
 const router = useRouter();
          const jumptoMovie = (id:string)=>{
            return router.push(`details/${id}`);
          }
  return (
    <div className='h-fit w-screen mx-30'>
        <p className='text-[30px] font-bold my-10'>Search filter</p>
        <div className='flex w-screen h-fit'>
        <div className='flex gap-5 flex-col'>
          <div className='flex flex-col justify-start'> 
            <p className='text-[24px] font-bold'>Genres</p>
            <p className='text-[16px] '>See lists of movies by genre</p>
          </div>
           
            <div className="w-[400px] h-fit flex flex-wrap gap-5">
            {getGenres.map((value, index) => {
                return (
                <Badge key={index} variant="outline">
                {value.name}
                </Badge>
                );
                    })}
            </div>
        </div>
        
        <div className='flex'>
            <div className='border-[1px] w-[1px] h-full mx-20'></div>
            <div>
              <p className='text-[20px] font-bold'>20 titles in Adventure, </p>
            
            <div className='flex flex-wrap gap-4'>
                {
                    getGenreId.slice(0,20).map((value:any)=>{
                        return <Card image={ImageUrl(value.poster_path)} rate={value.vote_average} title={value.title} jumpToDetails={()=>{
                            jumptoMovie(value.id)
                        }} />
                    })
                }
            </div>
            </div>
        </div>
        </div>
    </div>
  )

}

