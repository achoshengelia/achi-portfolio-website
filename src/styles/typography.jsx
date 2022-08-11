import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TextGradientStyled = styled.span`
  background: linear-gradient(
    75deg,
    ${props => props.theme.colors.text.accent},
    ${props => props.theme.colors.text.light} 120%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const MainHeadingStyled = styled(motion.h1)`
  font-size: 8rem;
  color: ${props => props.theme.colors.text.light};
  overflow: hidden;
  display: flex;
  margin: 20rem 0 10rem 0;

  & > * + * {
    margin-left: 0.3em;
  }

  @media ${props => props.theme.breakpoints.md} {
    font-size: 7rem;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 5.5rem;
  }

  @media ${props => props.theme.breakpoints.xs} {
    font-size: 5rem;
  }
`;

export const MainHeading = ({ children, ...props }) => {
  return (
    <MainHeadingStyled
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      {...props}
    >
      {children}
    </MainHeadingStyled>
  );
};
