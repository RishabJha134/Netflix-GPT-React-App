import React from "react";
import { IMG_CDN_URL } from "../Utils/Constants";

function MovieCard({ poster_path }) {
  if (!poster_path) {
    return null;
  }

  return (
    <div className="w-36 md:w-48 pr-4">
      <img src={IMG_CDN_URL + poster_path} alt="Movie" />
    </div>
  );
}

export default MovieCard;
