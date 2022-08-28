import React, { useRef } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useScroll, useSpring, useTransform } from 'framer-motion';
import { ContainerStyled, FixedWrapperStyled } from './CoverStyles';

const Cover = ({ cover }) => {
  const { bgColor, src } = cover;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  const translateYValue = useTransform(scrollYProgress, [0, 20], [-600, 20000]);
  const translateY = useSpring(translateYValue, {
    damping: 15,
    mass: 0.2,
    stiffness: 90
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
