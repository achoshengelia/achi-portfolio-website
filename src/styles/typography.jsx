import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const variantsParent = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const variantsChild = {
  hidden: { y: 80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2
    }
  }
};

const WordWrapperStyled = styled(motion.span)`
  display: inline-block;
`;

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
  text-transform: uppercase;
  overflow: hidden;
  display: flex;
  margin: 20rem 0 10rem 0;

  & > * + * {
    margin-left: 0.3em;
  }
`;

export const MainHeading = ({ children }) => {
  const getWords = word => word.split(' ');

  return (
    <MainHeadingStyled
      variants={variantsParent}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {getWords(children).map(word => (
        <WordWrapperStyled key={word} variants={variantsChild}>
          {word}
        </WordWrapperStyled>
      ))}
    </MainHeadingStyled>
  );
};
