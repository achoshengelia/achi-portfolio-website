import styled from 'styled-components';
import { CenterWrapperStyled } from 'styles/utils';

export const TabStyled = styled.span`
  display: inline-block;
  margin-left: 1.2em;
`;

export const ParagraphStyled = styled.p`
  margin-left: auto;
  max-width: 75%;

  & > div {
    max-width: 6rem;
    max-height: 5rem;
    display: inline-block;
    transform: translateY(25%);
  }
`;

export const ContainerStyled = styled.section`
  width: 100%;
  font-size: 6rem;

  & > ${CenterWrapperStyled} {
    min-height: 80vh;

    & > * + * {
      margin-top: 5rem;
    }
  }

  @media ${props => props.theme.breakpoints.lg} {
    font-size: 5rem;
  }

  @media ${props => props.theme.breakpoints.md} {
    ${ParagraphStyled} {
      max-width: none;
    }
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 4rem;

    ${ParagraphStyled} {
      & > div {
        max-width: 4rem;
        max-height: 4rem;
        display: inline-block;
        transform: translateY(25%);
      }
    }
  }
`;
