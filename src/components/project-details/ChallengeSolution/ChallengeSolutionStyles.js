import styled from 'styled-components';
import { CenterWrapperStyled } from 'styles/utils';

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
  border-radius: ${({ isSolution }) =>
    isSolution ? '0 0 2rem 2rem' : '2rem 2rem 0 0'};
  background-color: ${props => props.theme.colors.background.main};
  padding: ${({ isSolution }) =>
    isSolution ? '10rem 0 10rem 0' : '5rem 0 0 0'};

  & > ${CenterWrapperStyled} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  & ${HeadingStyled} {
    grid-column: ${({ isSolution }) => (isSolution ? '2 / -1' : null)};
  }

  & ${ParagraphWrapperStyled} {
    grid-column: ${({ isSolution }) => (isSolution ? '2 / -1' : '1 / 2')};
  }
`;