import styled from 'styled-components';
import { motion } from 'framer-motion';
import { CenterWrapperStyled } from 'styles/utils';

export const ImageStyled = styled(motion.img)`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const ImageWrapperStyled = styled.div`
  border-radius: 2rem;
  overflow: hidden;

  &:first-child {
    grid-area: a;
  }

  &:nth-child(2) {
    grid-area: b;
  }

  &:nth-child(3) {
    grid-area: c;
    max-height: 60rem;
  }

  &:nth-child(4) {
    grid-area: d;
  }
`;

export const GridWrapperStyled = styled.div`
  display: grid;
  grid-template-areas: ${({ isSecond }) =>
    isSecond ? '"a a a" "b c d"' : '"a a a" "b b c" "b b d"'};
  gap: 3rem;
  grid-template-columns: repeat(3, 1fr);
`;

export const ContainerStyled = styled.section`
  background-color: ${props => props.theme.colors.background.main};

  & > ${CenterWrapperStyled} {
    & > * {
      margin-top: 10rem;
    }
  }
`;
