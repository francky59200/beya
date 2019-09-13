import React from 'react'

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500" // cette constance permet de convertir path pour l'image

const VideoListItem=({movie})=>{
  
    return(
        <li className='item'>
          <img className="image" src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}/>
          <h3>{movie.title}</h3>   
        </li>
    )
}

export default VideoListItem