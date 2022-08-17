import React, { useRef } from 'react';
import { useTransform, useSpring, useScroll } from 'framer-motion';
import { CenterWrapperStyled } from 'styles/utils';
import {
  ContainerStyled,
  HeadingStyled,
  ImageStyled,
  ImageWrapperStyled,
  MediaWrapperStyled,
  ParagraphStyled,
  ParagraphWrapperStyled
} from './ChallengeSolutionStyles';

const ChallengeSolution = ({ isSolution }) => {
  return (
    <ContainerStyled isSolution={isSolution}>
      <CenterWrapperStyled>
        <HeadingStyled>
          {isSolution ? 'The solution' : 'The challenge'}
        </HeadingStyled>
        <Text />
        <Media />
      </CenterWrapperStyled>
    </ContainerStyled>
  );
};

export default ChallengeSolution;

const imgs = [
  'https://uploads-ssl.webflow.com/624329d832bf6799b0cfc8b6/627413b991fed8f14ea2e2c0_Tablet00-ND.jpg',
  'https://uploads-ssl.webflow.com/624329d832bf6799b0cfc8b6/627413ddc9478542cc2dc393_Office02-ND.jpg',
  'https://s3-alpha-sig.figma.com/img/7dba/7eff/b98a5c77a9453057165717e0dec436e1?Expires=1661731200&Signature=dFbMArkPq~8baSVFSQqdyKIQ36Hv-9LJNiysDj-ZehK-vCMQWdjUMjnjsLnRKrkMY2Vb8Vd25V0Nr-cVDX6yNtjuqFEZTrX06FmAR0uH4AtjKkaWfSPYgnNyOZ3Q8ZF67fM70eWHJr25M~tplby9evymfG-utdOUNQaMtxEmB-ucZDE0PnlfQUEkKnJmFrlPHNAnLdAz5socfP1RjPUPoHolFQEYK0FoEtEtFMRdo-h7aunOTw4eham3Awxdyg6t0M8vzFWasyNB6mYhsS8RF7BtWdPCngzVBkJbXd2fSPlxB93uC~0Qg0P40jU~2YnnCWW3NqjPIKN~gDEkwM1WFg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  'https://uploads-ssl.webflow.com/624329d832bf6799b0cfc8b6/6248858485f3791dc0143396_Hero-U.jpg'
];

const Media = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const translateYValue = useTransform(scrollYProgress, [0, 100], [-30, 4000]);
  const translateY = useSpring(translateYValue, {
    damping: 45,
    mass: 0.8,
    stiffness: 100
  });

  return (
    <MediaWrapperStyled ref={ref}>
      {imgs.map(img => (
        <ImageWrapperStyled>
          <ImageStyled
            src={img}
            alt={img}
            style={{ translateY, scale: '1.2' }}
          />
        </ImageWrapperStyled>
      ))}
    </MediaWrapperStyled>
  );
};

const Text = () => {
  return (
    <ParagraphWrapperStyled>
      <ParagraphStyled>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est quas
        facilis nobis adipisci obcaecati saepe, accusantium iste placeat neque
        minus aliquam quisquam quae, in consequatur enim dignissimos id expedita
        doloribus.
      </ParagraphStyled>
      <ParagraphStyled>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est quas
        facilis nobis adipisci obcaecati saepe, accusantium iste placeat neque
        minus aliquam quisquam quae, in consequatur enim dignissimos id expedita
        doloribus.
      </ParagraphStyled>
    </ParagraphWrapperStyled>
  );
};
