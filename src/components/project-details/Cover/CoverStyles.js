import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FixedWrapperStyled = styled(motion.div)`
  color: white;
  font-size: 15rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
`;

export const ContainerStyled = styled.section`
  height: 100vh;
  background-color: black;
  position: relative;
  overflow: hidden;
`;
