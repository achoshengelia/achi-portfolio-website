import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StackItemStyled = styled(motion.li)``;

export const StackListStyled = styled(motion.ul)`
  display: flex;
  /* margin-top: 3rem; */
  /* display: none; */

  & > * + * {
    margin-left: 1rem;
  }
`;

export const DescriptionStyled = styled.p`
  font-size: 2.3rem;
  max-width: 60rem;
  margin-top: 3rem;
`;

export const ProjectNameStyled = styled.h2`
  font-size: 5rem;
  font-family: Pescante, sans-serif;
`;

export const InfoWrapperStyled = styled(motion.div)`
  color: white;
  position: sticky;
  top: 20%;
  left: 5%;
`;

export const ContainerStyled = styled.article`
  display: flex;
  align-items: flex-start;
  min-height: 100vh;
  width: 100%;
`;
