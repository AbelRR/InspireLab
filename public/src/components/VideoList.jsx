import React from 'react';
import Video from './Video.jsx';
import CurrentVideo from './CurrentVideo.jsx'
import videoData from '../videoData';

const VideoList = ({updatePage, currentVideo, updateCurrentVideo, updateNotes, notes}) => (
  <div className="biggerContainer">
    <span className="videoListContainer">
      <span className="videoContainer">
        <CurrentVideo video={currentVideo} />
        <h3>Notes: </h3>
        <input
          className="textBox"
          onChange={e => updateNotes(e)}
          value={notes}
          placeholder="Type your notes and insights here..."
        />
      </span>
      <div className="video-list">
        {videoData.map((video, index) => (
          <Video
            key={index}
            video={video}
            handleClick={updateCurrentVideo}
          />
        ))}
      </div>
    </span>
    <a onClick={() => updatePage('Home')} className="btn">
      Back
    </a>
  </div>
)

export default VideoList;