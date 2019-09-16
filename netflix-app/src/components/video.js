import React from 'react'
import '../containers/App.css'

const BASE_URL="https://www.youtube.com/embed/"

const Video=({videoId})=>{
    return (
        <div>
            <iframe width="600" height="400" src={`${BASE_URL}${videoId}`}/>
        </div>
    )
}
export default Video