import React from 'react';
import './Video.css';

function Video() {
  return (
    <div className="video-container">
    <iframe 
      className="responsive-iframe"
      src="https://www.youtube.com/embed/OEGKAGPtqFg" 
      title="YouTube video player" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 

      allowFullScreen>
    </iframe>
  </div>
  );
}

export default Video;
