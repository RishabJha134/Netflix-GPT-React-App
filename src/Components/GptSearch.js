import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_IMG } from "../Utils/Constants";

function GptSearch() {
  return (
    <div>
      <div className="fixed -z-10">
        <img className="h-screen object-cover md:h-screen md:w-[100vw]" src={BG_IMG} alt="bgImage" />
      </div>
      <div className="">
      <GptSearchBar></GptSearchBar>
      <GptMovieSuggestions></GptMovieSuggestions>
      </div>
      
    </div>
  );
}

export default GptSearch;
