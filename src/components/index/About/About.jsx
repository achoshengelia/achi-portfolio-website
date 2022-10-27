import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useScroll } from 'framer-motion';
import Lottie from 'lottie-react';
import eye from 'assets/lotties/eye.json';
import sphere from 'assets/lotties/sphere.json';
import { TextGradientStyled } from 'styles/typography';
import { CenterWrapperStyled, motionDefaultAnimateProps } from 'styles/utils';
import {
  BackgroundStyled,
  ContainerStyled,
  ParagraphStyled,
  ParagraphWrapperStyled
} from './AboutStyles';

const About = () => {
  const ref = useRef(null);
  const domRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end']
  });

  useEffect(() => {
    domRef.current = document.querySelector('#menu');
    setMounted(true);
  }, []);

  return (
    <>
      <ContainerStyled ref={ref}>
        <CenterWrapperStyled>
          <ParagraphWrapperStyled {...motionDefaultAnimateProps}>
            <ParagraphStyled>
              I enjoy building
              <TextGradientStyled>
                {' '}
                interactive
              </TextGradientStyled> websites <Lottie animationData={eye} /> that
              work smoothly across{' '}
              <TextGradientStyled>all devices</TextGradientStyled>.
            </ParagraphStyled>
            <ParagraphStyled>
              <TextGradientStyled>Clean design</TextGradientStyled> and
              carefully chosen tech stack is key to creating
              <TextGradientStyled> seamless experience </TextGradientStyled>
              for users. <Lottie animationData={sphere} />
            </ParagraphStyled>
          </ParagraphWrapperStyled>
        </CenterWrapperStyled>
      </ContainerStyled>

      {mounted && domRef.current
        ? createPortal(
            <BackgroundStyled style={{ opacity: scrollYProgress }} />,
            domRef.current
          )
        : null}
    </>
  );
};

export default About;
