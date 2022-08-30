import React, { useRef } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useScroll, useTransform, useSpring } from 'framer-motion';
import { useRefScrollProgress } from 'hooks';
import { CenterWrapperStyled } from 'styles/utils';
import { chunk } from 'utils';
import {
  ContainerStyled,
  ImageWrapperStyled,
  GridWrapperStyled,
  MotionWrapperStyled
} from './GalleryStyles';

const Gallery = ({ gallery }) => {
  const chunks = chunk(gallery, 4);

  return (
    <ContainerStyled>
      <CenterWrapperStyled>
        {chunks.map((chunk, i) => (
          <GridWrapperStyled key={i} isSecondLayout={i === 1}>
            {chunk.map(({ id, src, alt }, i) => (
              <Image key={`${id}-${i}`} data={{ src, alt }} />
            ))}
          </GridWrapperStyled>
        ))}
      </CenterWrapperStyled>
    </ContainerStyled>
  );
};

export default Gallery;

const Image = ({ data }) => {
  const { src, alt } = data;
  const ref = useRef(null);
  const { start, end } = useRefScrollProgress(ref);
  const { scrollYProgress } = useScroll();
  const translateYValue = useTransform(
    scrollYProgress,
    [start, end],
    [10, -10]
  );
  const translateY = useSpring(translateYValue, {
    damping: 45,
    mass: 0.8,
    stiffness: 100
  });

  return (
    <ImageWrapperStyled ref={ref}>
      <MotionWrapperStyled style={{ translateY, scale: '1.23' }}>
        <GatsbyImage image={getImage(src)} alt={alt} />
      </MotionWrapperStyled>
    </ImageWrapperStyled>
  );
};
