import React, { useRef } from 'react';
import video from 'assets/test.mp4';
import { ContainerStyled, VideoStyled } from './VideoStyles';

const Video = () => {
  const videoRef = useRef(null);
  const togglePlay = () => {
    const video = videoRef.current;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <ContainerStyled>
      <VideoStyled ref={videoRef}>
        <source src={video} />
      </VideoStyled>
      <button onClick={togglePlay}>Play</button>
    </ContainerStyled>
  );
};

export default Video;
