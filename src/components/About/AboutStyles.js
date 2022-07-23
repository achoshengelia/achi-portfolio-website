import styled from 'styled-components';
import { motion } from 'framer-motion';
import { CenterWrapperStyled } from 'styles/utils';
import { customMediaQuery } from 'utils';

export const ParagraphStyled = styled.p`
  font-size: 4rem;
  max-width: 100rem;

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
`;

export const BackgroundStyled = styled(motion.div)`
  background-color: ${props => props.theme.colors.text.main};
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: -25;
  pointer-events: none;
`;

export const ContainerStyled = styled.section`
  height: 100vh;
  width: 100%;
  color: ${props => props.theme.colors.text.light};

  & ${CenterWrapperStyled} {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
