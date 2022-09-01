import styled from 'styled-components';

export const CircleStyled = styled.span`
  height: 3rem;
  width: 3rem;
  background-color: ${props => props.theme.colors.text.main};
  border-radius: 50%;
  display: inline-block;
  margin-left: 3rem;
  transform: scale(0.3);
  transition: all 0.2s ease;

  & > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    width: 2rem;
    transition: opacity 0.1s linear;
    fill: ${props => props.theme.colors.text.light};
  }
`;

export const ButtonStyled = styled.button`
  border: none;
  border-radius: 2rem;
  font-size: 2.5rem;
  padding: 0.3em 1em;
  cursor: pointer;
  margin-left: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.text.light};
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  align-self: flex-end;
  margin-top: 3rem;

  &::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    background: ${props => props.theme.colors.text.main};
    opacity: 0.1;
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 0.2s ease;
  }

  &:hover {
    &::before {
      transform: scaleY(1);
      transform-origin: bottom;
    }

    & ${CircleStyled} {
      transform: scale(1.2);

      & > svg {
        opacity: 1;
      }
    }
  }
`;
