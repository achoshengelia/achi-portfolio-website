import styled from 'styled-components';
import { CenterWrapperStyled } from 'styles/utils';
import { customMediaQuery } from 'utils';

export const GridWrapperStyled = styled.div`
  display: grid;
  grid-template-areas: ${({ isSecondLayout }) =>
    isSecondLayout ? '"a a a" "b c d"' : '"a a a" "b b c" "b b d"'};
  gap: 3rem;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: max-content;
  width: 100%;
  height: 100%;
`;

export const ContainerStyled = styled.section`
  background-color: ${props => props.theme.colors.background.main};
  padding-bottom: 10rem;
  border-radius: 0 0 2rem 2rem;

  & > ${CenterWrapperStyled} {
    & > * {
      margin-top: 10rem;
    }
  }

  @media ${props => props.theme.breakpoints.sm} {
    & > ${CenterWrapperStyled} {
      & > * {
        margin-top: 7rem;
      }
    }

    & ${GridWrapperStyled} {
      gap: 2rem;
      grid-template-areas: ${({ isSecondLayout }) =>
        isSecondLayout ? '"a a a" "b c d"' : '"a a" "b b" "c d"'};
      grid-template-columns: repeat(2, 1fr);
    }
  }

  ${customMediaQuery(520)} {
    & > ${CenterWrapperStyled} {
      & > * + * {
        margin-top: 2rem;
      }
    }

    & ${GridWrapperStyled} {
      gap: 2rem;
      grid-template-areas: 'a' 'b' 'c' 'd';
      grid-template-columns: 1fr;
    }
  }

  ${customMediaQuery(400)} {
    & > ${CenterWrapperStyled} {
      & > * {
        margin-top: 4rem;
      }
    }

    & ${GridWrapperStyled} {
      gap: 1rem;
    }
  }
`;
