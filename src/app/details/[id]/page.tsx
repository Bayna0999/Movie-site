"use client";

import { MovieDetails } from "@/components/component/MovieDetails";
import { useParams } from "next/navigation";
import React from "react";

export default function page() {
  const params = useParams();
  return (
    <div>
      <MovieDetails />
    </div>
  );
}
