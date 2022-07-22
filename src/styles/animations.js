import { keyframes } from 'styled-components';

export const ShineSlide = keyframes`
   0% {
      left: -80rem;
    }
    10% {
      opacity: 1;
    }
    70% {
      opacity: 1;
    }
    100% {
      left: 90rem;
    }
`;

export const StrokeAnimate = keyframes`
    40% {
      opacity: 1;
    }
    100% {
      stroke-dashoffset: 0;
      opacity: 1;
    }
`;

export const SlideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50%)
  }

  to {
    opacity: 1;
    transform: translateY(0)
  }
`;
