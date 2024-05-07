import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_IMG } from "../Utils/Constants";

function GptSearch() {
  return (
    <div>
      <div className="absolute -z-10">
        <img
          src={BG_IMG}
          alt="bgImage"
        />
      </div>
      <GptSearchBar></GptSearchBar>
      <GptMovieSuggestions></GptMovieSuggestions>
    </div>
  );
}

export default GptSearch;
