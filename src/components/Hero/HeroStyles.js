import styled from 'styled-components';
import {
  Bounce,
  FadeIn,
  ShineSlide,
  SlideUp,
  StrokeAnimate
} from 'styles/animations';
import { CenterWrapperStyled } from 'styles/utils';
import { customMediaQuery } from 'utils';

export const BouncingBall = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 100%;
  background: ${props => props.theme.colors.text.main};
  animation: ${Bounce} 1s;
  transform: translateY(0px);
  animation-iteration-count: infinite;
`;

export const BallWrapper = styled.div`
  position: relative;
  border: 1px solid ${props => props.theme.colors.text.main};
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  margin-top: auto;
  margin-bottom: 3rem;
  opacity: 0;
  animation: ${FadeIn} 0.2s ease forwards 4.5s;

  & ${BouncingBall} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 30%);
  }
`;

export const ShineStyled = styled.div`
  position: absolute;
  left: 3%;
  top: 0;
  width: 97%;
  height: 100%;
  overflow: hidden;

  &::before {
    opacity: 0;
    content: '';
    position: absolute;
    top: 0;
    left: -100px;
    width: 10rem;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    transform: skewX(-30deg);
    animation: ${ShineSlide} 1s ease forwards 3.1s;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(255, 255, 255, 0.3) 77%,
      rgba(255, 255, 255, 0.7) 92%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`;

export const Svg = styled.svg`
  width: 100vw;
  max-width: 95rem;
  padding: 0 2rem;

  & path {
    stroke-dasharray: 100%;
    stroke-linecap: round;
    stroke-dashoffset: 100%;
    animation: ${StrokeAnimate} 3s cubic-bezier(0.22, 0, 0.67, 0) forwards;
    padding: 2rem;
    opacity: 0;
  }
`;

export const HeadingWrapperStyled = styled.div`
  position: relative;
  overflow: hidden;
  margin-top: auto;
`;

export const ParagraphStyled = styled.p`
  margin-top: 5rem;
  font-size: 8rem;
  opacity: 0;
  animation: ${SlideUp} 1s ease forwards 3s;

  ${customMediaQuery(880)} {
    font-size: 6.5rem;
  }

  ${customMediaQuery(740)} {
    font-size: 6rem;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 5rem;
  }
`;

export const ContainerStyled = styled.section`
  height: 100vh;

  & ${CenterWrapperStyled} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
