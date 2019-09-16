import React from 'react'
import '../containers/App.css'

const VideoDetail =({title, description})=>{
return(
        <div className="details">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}

export default VideoDetail