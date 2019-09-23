import React from 'react'
import VideoListItem from '../components/video-list-item'



const VideoList=(props)=>{

    const {movieList}=props

    //cette fonction permet de recevoir la props de l'enfant a appliquer

    function callBackMovieClick(movie){
        props.callback(movie)
    }
    return(
        <div>
            <ul>
                {movieList.map(movie =>{
                    return <VideoListItem key={movie.id} movie={movie} callback={callBackMovieClick}/>
                })}
            </ul>
        </div>
    )
}

export default VideoList


/**************Principe de Callback****************************** */

// le principe de callback permet d'envoyer des props de l'enfant vers le parent dans ce cas comment ça marche?
// dans le composant video-list-item on a acces aux props on va appeler une fonction (callback) qui est en faite le
// nom de la props envoyé au parent video-list(callback) on va envoyer un paramétre au parent dans notre cas movie
// et dans notre parent video-list creer une fonction callBackMovieClick() qui reçoit en paramétre ce qu'on 
// lui a envoyé movie.