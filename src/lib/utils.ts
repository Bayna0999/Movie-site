import axios from "axios";
import { clsx, type ClassValue } from "clsx";
import path from "path";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjdkOGJlYmQwZjRmZjM0NWY2NTA1Yzk5ZTlkMDI4OSIsIm5iZiI6MTc0MjE3NTA4OS4zODksInN1YiI6IjY3ZDc3YjcxODVkMTM5MjFiNTAxNDE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxFMnZppBdHUSz_zB4p9A_gRD16I_R6OX1oiEe0LbE8`,
  },
});
export const ImageUrl = (path: string) => {
  return `https://image.tmdb.org/t/p/original${path}`;
};
export type Genres = {
  id: number;
  name: string;
};

export type CastDataType = {
  adult: boolean;
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  order: number;
  original_name: string;
  popularity: number;
  profile_path: string;
};

export type CrewDataType = {
  adult: boolean;
  credit_id: string;
  department: string;
  gender: number;
  id: number;
  job: string;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
};
export type CreditDataType = {
  id: number | null;
  cast: CastDataType[];
  crew: CrewDataType[];
};

export type SimilarDataType = {
  adult: false;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
export type Genrestype = {
  id: number;
  name: string;
};

export type Componiestype = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

export type Countriestype = {
  iso_3166_1: string;
  name: string;
};

export type languagestype = {
  english_name: string;
  iso_639_1: string;
  name: string;
};
export type SpecificDataType = {
  adult?: boolean;
  backdrop_path: string;
  belongs_to_collection?: null;
  budget?: number;
  genres?: Genrestype[];
  homepage?: string;
  id?: number;
  imdb_id?: string;
  origin_country?: string[];
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path: string;
  production_companies?: Componiestype[];
  production_countries?: Countriestype[];
  release_date?: string;
  revenue?: number;
  runtime?: number;
  spoken_languages?: languagestype[];
  status?: string;
  tagline?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
};
