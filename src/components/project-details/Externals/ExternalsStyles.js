import styled from 'styled-components';
import { CenterWrapperStyled } from 'styles/utils';
import { customMediaQuery } from 'utils';

export const SvgStyled = styled.svg`
  transition: transform 0.2s cubic-bezier(0.76, 0, 0.24, 1);
  position: absolute;
  left: 0;
  top: 0;
  transform: ${({ animate }) =>
    animate ? 'translateX(200%)' : 'translateX(0)'};
  fill: ${props => props.theme.colors.text.light};
  width: 5.5rem;

  &.animate {
    transform: translateX(200%);
    fill: ${props => props.theme.colors.text.accent};
  }
`;

export const ArrowWrapperStyled = styled.span`
  display: inline-block;
  position: relative;
  height: 4.2rem;
  width: 4.2rem;
  overflow: hidden;
`;

export const LinkStyled = styled.a`
  font-size: 5rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    left: 0;
    background-color: ${props => props.theme.colors.text.accent};
    height: 2px;
    bottom: -2px;
    transform-origin: 100% 50%;
    transform: scaleX(0);
    transition: transform 0.3s cubic-bezier(0.76, 0, 0.24, 1);
  }

  &:hover {
    &::before {
      transform-origin: 0% 50%;
      transform: scaleX(1);
    }

    & ${SvgStyled} {
      transform: translateX(-200%);

      &.animate {
        transform: translateX(0);
      }
    }
  }
`;

export const ContainerStyled = styled.section`
  color: ${props => props.theme.colors.text.light};
  padding: 10rem 0;

  & > ${CenterWrapperStyled} {
    align-items: flex-start;

    & > * + * {
      margin-top: 5rem;
    }
  }

  @media ${props => props.theme.breakpoints.lg} {
    padding: 5rem 0;
  }

  @media ${props => props.theme.breakpoints.md} {
    padding-top: 0;
  }

  @media ${props => props.theme.breakpoints.sm} {
    min-height: 0;
    margin-bottom: 5rem;

    & ${LinkStyled} {
      font-size: 4rem;
    }

    & ${SvgStyled} {
      width: 5rem;
      margin-top: 0.5rem;
    }
  }

  ${customMediaQuery(352)} {
    & ${LinkStyled} {
      font-size: 3rem;
    }
    & ${SvgStyled} {
      width: 4rem;
      margin-top: 1.3rem;
    }
  }
`;
