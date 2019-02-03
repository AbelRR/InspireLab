import React from 'react';

var CurrentVideo = props => (
  <div className="video-player">
    <div className="video-player-details">
      <h3>{props.video.snippet.title}</h3>
    </div>
    <div className="embed-responsive embed-responsive-16by9">
      <iframe
        className="embed-responsive-item"
        src={`https://www.youtube.com/embed/${props.video.id.videoId}`}
        width="500" height="315"
        allowFullScreen
      />
    </div>
  </div>
);

export default CurrentVideo;