import React from 'react'
import { IMG_CDN_URL } from '../Utils/Constants'

function MovieCard({poster_path}) {
  
  return (
    <div className='w-48 pr-4'>
        <img src={IMG_CDN_URL+poster_path} alt="Movie" />
    </div>
  )
}

export default MovieCard