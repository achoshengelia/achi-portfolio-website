import styled from 'styled-components';
import play from 'assets/icons/play.svg';
import pause from 'assets/icons/pause.svg';

export const CircularTextStyled = styled.span`
  animation: rotate 5s infinite linear;
  display: block;

  @keyframes rotate {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0);
    }
  }
`;

export const SvgWrapperStyled = styled.span``;

export const ButtonStyled = styled.button`
  position: absolute;
  left: 50%;
  top: 50%;
  background: transparent;
  cursor: pointer;
  transform: translate(-50%, -50%);

  & ${SvgWrapperStyled} {
    display: block;
    transform: ${({ isPlaying }) => (isPlaying ? 'scale(0)' : 'scale(1)')};
    transition: transform 0.1s ease-in-out;
    position: relative;

    & > svg {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-40%, -50%);
    }
  }

  @media ${props => props.theme.breakpoints.xs} {
    transform: translate(-50%, -50%) scale(0.7);
  }
`;

export const CursorWrapperStyled = styled.i`
  position: fixed;
  z-index: 99000;
  pointer-events: none;
  color: red;
  transform: ${({ isVisible }) => (isVisible ? 'scale(1)' : 'scale(0)')};
  transition: transform 0.1s ease-in-out;
  box-shadow: ${({ isPointer }) =>
    isPointer ? '0 0 30px rgba(255, 255, 0, 0.5)' : null};
  font-style: normal;
`;

export const VideoStyled = styled.video`
  width: 100%;
  height: 100%;
  max-height: 90vh;
  opacity: ${({ isPlaying }) => (isPlaying ? '1' : '.3')};
  transition: opacity 0.7s ease;
  cursor: ${({ isPlaying }) =>
    isPlaying ? `url(${pause}) 6 8, auto` : `url(${play}) 6 8, auto`};
`;

export const VideoWrapperStyled = styled.div`
  position: relative;
`;

export const ContainerStyled = styled.section`
  min-height: 100vh;
  background-color: ${props => props.theme.colors.text.main};
  border-radius: 2rem 2rem 0 0;
  padding: 8rem 3rem 5rem 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${props => props.theme.breakpoints.md} {
    min-height: 0;
    margin-bottom: 5rem;
  }
`;
