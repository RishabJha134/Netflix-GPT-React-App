import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

function GptMovieSuggestions() {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  console.log(movieResults);
  console.log(movieNames);
  if (!movieNames) {
    return null;
  }

  return (
    <>
      <div className="p-4 m-4 bg-black text-white bg-opacity-90">
        <div>
          {movieNames.map((item, index) => {
            return (
              <>
                <MoviesList
                  key={item}
                  title={item}
                  movies={movieResults[index]}
                ></MoviesList>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default GptMovieSuggestions;
