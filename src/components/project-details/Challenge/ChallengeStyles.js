import styled from 'styled-components';
import { CenterWrapperStyled } from 'styles/utils';
import { customMediaQuery } from 'utils';

export const ParagraphStyled = styled.span`
  display: inline-block;
`;

export const ParagraphWrapperStyled = styled.p`
  width: 100%;
  font-size: 2.5rem;
  margin-top: 3rem;
  margin-left: 0.8rem;

  & > * + * {
    margin-top: 3rem;
  }
`;

export const HeadingStyled = styled.h2`
  font-size: 5rem;
`;

export const ContainerStyled = styled.section`
  border-radius: 2rem 2rem 0 0;
  background-color: ${props => props.theme.colors.background.main};
  padding: 5rem 0 0 0;
  position: relative;
  z-index: 2;

  & > ${CenterWrapperStyled} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    & ${ParagraphWrapperStyled} {
      grid-column: 1 / 2;
    }
  }

  @media ${props => props.theme.breakpoints.lg} {
    & > ${CenterWrapperStyled} {
      display: grid;
      grid-template-columns: 1fr;
    }
  }

  @media ${props => props.theme.breakpoints.md} {
    & ${ParagraphWrapperStyled} {
      font-size: 2.3rem;
    }
  }

  @media ${props => props.theme.breakpoints.sm} {
    & ${ParagraphWrapperStyled} {
      font-size: 2rem;
    }
  }

  ${customMediaQuery(353)} {
    & ${HeadingStyled} {
      font-size: 3.3rem;
      margin-left: 0.4rem;
    }
  }
`;
