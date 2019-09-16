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