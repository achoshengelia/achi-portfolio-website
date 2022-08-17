import styled from 'styled-components';
import { motion } from 'framer-motion';
import { CenterWrapperStyled } from 'styles/utils';

export const ImageStyled = styled(motion.img)`
  height: 100%;
  width: 100%;
`;

export const ImageWrapperStyled = styled(motion.div)`
  border-radius: 2rem;
  max-height: 70rem;
  overflow: hidden;

  &:first-child {
    grid-column: 1 / -1;
  }
`;

export const MediaWrapperStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  row-gap: 10rem;
  place-content: center;
  place-items: center;
  margin-top: 15rem;
`;

export const ParagraphStyled = styled.span`
  display: inline-block;
`;

export const ParagraphWrapperStyled = styled.p`
  max-width: 50%;
  font-size: 2.5rem;
  margin-top: 3rem;

  & > * + * {
    margin-top: 3rem;
  }
`;

export const HeadingStyled = styled.h2`
  font-size: 5rem;
  margin-top: 5rem;
`;

export const ContainerStyled = styled.section`
  border-radius: 2rem 2rem 0 0;
  background-color: ${props => props.theme.colors.background.main};
  min-height: 100vh;

  & > ${CenterWrapperStyled} {
    align-items: ${({ isSolution }) =>
      isSolution ? 'flex-end' : 'flex-start'};
  }

  & ${ParagraphWrapperStyled} {
    margin-left: ${({ isSolution }) => (isSolution ? null : 'auto')};
    margin-right: ${({ isSolution }) => (isSolution ? 'auto' : null)};
  }
`;
