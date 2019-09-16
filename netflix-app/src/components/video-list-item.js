import React from 'react'
import '../containers/App.css'

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500" // cette constance permet de convertir path pour l'image

const VideoListItem=(props)=>{
    const {movie}=props

    function handleClick(){
        props.callback(movie)
    }
    return(
        <li onClick={handleClick}>
          <img className="image" src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}/>
          <h3>{movie.title}</h3>   
        </li>
    )
}

export default VideoListItem

/*******************Principe du callback*************** */

// le callback permet d'envoyer des informations de l'enfant vers le parent on doit avoir acces aux props on doit
//appeler une fonction qui est le nom de la props envoyé au parent ici c'est callback on valui envoyé un paramétre ici movie
// et dans notre parent on va creer une fonction ici receiveCallback qui reçoit en paramétre ce qu'on lui a envoyé ici movie
