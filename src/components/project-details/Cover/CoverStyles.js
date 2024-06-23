import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FixedWrapperStyled = styled(motion.div)`
  & * {
    height: 100%;
    width: 100%;
  }

  & img {
    object-fit: contain;
  }
`;

export const ContainerStyled = styled.section`
  position: relative;
  overflow: hidden;
  margin: -5rem 0;
  z-index: 1;
  background-color: ${({ $bgColor }) => $bgColor};
  height: 110vh;
`;
