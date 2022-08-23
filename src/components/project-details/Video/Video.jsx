import React, { useState, useRef, useEffect } from 'react';
import video from 'assets/test.mp4';
import {
  CircularTextStyled,
  ContainerStyled,
  CursorWrapperStyled,
  VideoStyled
} from './VideoStyles';

const Video = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const togglePlay = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <ContainerStyled>
      <VideoStyled
        data-cursor
        ref={videoRef}
        onClick={togglePlay}
        isPlaying={isPlaying}
      >
        <source src={video} />
      </VideoStyled>
      <Cursor isPlaying={isPlaying} />
    </ContainerStyled>
  );
};

export default Video;

const Cursor = ({ isPlaying }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cursorRef = useRef(null);

  useEffect(() => {
    document.addEventListener('mousemove', e => {
      cursorRef.current.style.top = `${e.clientY - 70}px`;
      cursorRef.current.style.left = `${e.clientX - 70}px`;
    });

    document.addEventListener('mouseover', e => {
      if (e.target.dataset.cursor) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });

    return () => {
      document.removeEventListener('mousemove', e => {
        cursorRef.current.style.inset = `${e.clientY - 15}px auto auto ${
          e.clientX - 15
        }px`;
      });
    };
  }, [cursorRef]);

  return (
    <CursorWrapperStyled ref={cursorRef} isVisible={isVisible && !isPlaying}>
      <CircularText />
    </CursorWrapperStyled>
  );
};

const CircularText = () => {
  return (
    <CircularTextStyled id="container">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 150 150"
        enableBackground="new 0 0 150 150"
        xmlSpace="preserve"
      >
        <defs>
          <path
            id="circlePath"
            d="
        M 75, 75
        m -75, 0
        a 75,75 0 1,0 150,0
        a 75,75 0 1,0 -150,0
        "
          />
        </defs>
        <circle cx="75" cy="75" r="75" fill="none" />
        <g>
          <use xlinkHref="#circlePath" fill="none" />
          <text>
            <textPath xlinkHref="#circlePath" textLength={460}>
              Play Video • Play Video • Play Video • Play Video •
            </textPath>
          </text>
        </g>
      </svg>
    </CircularTextStyled>
  );
};
