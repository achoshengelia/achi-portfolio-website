import React, { useRef } from 'react';
import { useScroll, useTransform, useSpring } from 'framer-motion';
import {
  ContainerStyled,
  ImageWrapperStyled,
  ImageStyled,
  GridWrapperStyled
} from './GalleryStyles';
import { CenterWrapperStyled } from 'styles/utils';

const imgs = [
  'https://uploads-ssl.webflow.com/624329d832bf6799b0cfc8b6/627413b991fed8f14ea2e2c0_Tablet00-ND.jpg',
  'https://uploads-ssl.webflow.com/624329d832bf6799b0cfc8b6/627413ddc9478542cc2dc393_Office02-ND.jpg',
  'https://ochi.design/wp-content/uploads/2022/05/Workiz_1-1-scaled.jpg',
  'https://uploads-ssl.webflow.com/624329d832bf6799b0cfc8b6/6248858485f3791dc0143396_Hero-U.jpg'
];

const Gallery = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const translateYValue = useTransform(scrollYProgress, [0, 100], [-30, 4000]);
  const translateY = useSpring(translateYValue, {
    damping: 45,
    mass: 0.8,
    stiffness: 100
  });

  return (
    <ContainerStyled ref={ref}>
      <CenterWrapperStyled>
        <GridWrapperStyled>
          {imgs.map(img => (
            <ImageWrapperStyled key={img}>
              <ImageStyled
                src={img}
                alt={img}
                style={{ translateY, scale: '1.22' }}
              />
            </ImageWrapperStyled>
          ))}
        </GridWrapperStyled>
        <GridWrapperStyled isSecond>
          {imgs.map(img => (
            <ImageWrapperStyled key={img}>
              <ImageStyled
                src={img}
                alt={img}
                style={{ translateY, scale: '1.22' }}
              />
            </ImageWrapperStyled>
          ))}
        </GridWrapperStyled>
      </CenterWrapperStyled>
    </ContainerStyled>
  );
};

export default Gallery;
