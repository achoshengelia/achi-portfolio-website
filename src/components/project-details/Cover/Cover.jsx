import React from 'react';
import { useScroll, useSpring, useTransform } from 'framer-motion';
import { ContainerStyled, FixedWrapperStyled } from './CoverStyles';

const Cover = () => {
  const { scrollYProgress } = useScroll();
  const translateYValue = useTransform(
    scrollYProgress,
    [0, 100],
    [-300, 250000]
  );
  const translateY = useSpring(translateYValue, {
    damping: 40,
    mass: 0.3,
    stiffness: 120
  });

  return (
    <ContainerStyled>
      <FixedWrapperStyled
        style={{
          translateY
        }}
      >
        Zueinander Finden
      </FixedWrapperStyled>
    </ContainerStyled>
  );
};

export default Cover;
