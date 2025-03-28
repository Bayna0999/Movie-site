import React from "react";
import { Badge } from "@/components/ui/badge";
type GenreProps = {
  GenreName: string;
};

export const Genrebadge = ({ GenreName }: GenreProps) => {
  return (
    <div>
      <Badge variant="outline">{GenreName}</Badge>
    </div>
  );
};
