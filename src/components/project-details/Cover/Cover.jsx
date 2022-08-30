import React, { useRef } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useScroll, useSpring, useTransform } from 'framer-motion';
import { ContainerStyled, FixedWrapperStyled } from './CoverStyles';

const Cover = ({ cover }) => {
  const { bgColor, src } = cover;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const translateYValue = useTransform(scrollYProgress, [0, 5], [-500, 25000]);
  const translateY = useSpring(translateYValue, {
    damping: 25,
    mass: 0.8,
    stiffness: 50
  });

  return (
    <ContainerStyled ref={ref} bgColor={bgColor}>
      <FixedWrapperStyled
        style={{
          translateY
        }}
      >
        <GatsbyImage objectFit="contain" image={getImage(src)} alt="logo" />
      </FixedWrapperStyled>
    </ContainerStyled>
  );
};

export default Cover;
