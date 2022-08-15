import React, { useRef } from 'react';
import { useScroll, useSpring, useTransform } from 'framer-motion';
import { ContainerStyled, FixedWrapperStyled } from './CoverStyles';

const Cover = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  const translateYValue = useTransform(
    scrollYProgress,
    [0, 100],
    [-400, 130000]
  );
  const translateY = useSpring(translateYValue, {
    damping: 15,
    mass: 0.2,
    stiffness: 90
  });

  return (
    <ContainerStyled ref={ref}>
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
