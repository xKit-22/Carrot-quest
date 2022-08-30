import video from "../images/video.svg";
import * as React from "react";

const VideoComponent = ({number, isActive = false}) => {
    return (
        <div className={`videos-playlist_item ${isActive ? 'active' : ''}`}>
            <div className="videos-playlist_item_number">{number}</div>
            <img className="videos-playlist_item_img" src={video}/>
            <div className="videos-playlist_item_text">Как построить эффективный отдел продаж</div>
        </div>
    )
}

export default VideoComponent