import React from 'react';
import Video from './Video.jsx';
import videoData from '../videoData';


const VideoList = ({updatePage}) => (
  <div>
    <div className="video-list container">
      {videoData.map((video, index) => (
        <Video
          key={index}
          video={video}
        />
      ))}
    </div>
    <a onClick={() => updatePage('Home')} className="btn">
      Back
    </a>
  </div>
)

export default VideoList;