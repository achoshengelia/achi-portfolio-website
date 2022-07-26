import styled from 'styled-components';
import { motion } from 'framer-motion';
import { customMediaQuery } from 'utils';
import { CenterWrapperStyled } from 'styles/utils';

export const BackgroundStyled = styled(motion.div)`
  background-color: ${props => props.theme.colors.text.main};
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: -25;
  pointer-events: none;
`;

export const ParagraphStyled = styled(motion.p)`
  font-size: 6rem;
  max-width: 100rem;

  & path {
    stroke: ${props => props.theme.colors.text.accent};
  }

  @media ${props => props.theme.breakpoints.md} {
    font-size: 3.5rem;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 3rem;
  }

  ${customMediaQuery(400)} {
    font-size: 2.7rem;
  }

  ${customMediaQuery(350)} {
    font-size: 2.4rem;
  }
`;

export const ParagraphWrapperStyled = styled(motion.div)`
  & > * + * {
    margin-top: 5rem;
  }

  & div {
    max-width: 6rem;
    max-height: 5rem;
    display: inline-block;
    transform: translateY(25%);
  }
`;

export const ContainerStyled = styled.section`
  min-height: 100vh;
  width: 100%;
  color: ${props => props.theme.colors.text.light};

  & > ${CenterWrapperStyled} {
    min-height: 100vh;
  }
`;
