import React from 'react'
import '../containers/App.css'

// details de la video currentMovie

const VideoDetail =({title, description})=>{
return(
        <div className="details">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}

export default VideoDetail