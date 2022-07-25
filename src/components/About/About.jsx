import React, { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { CenterWrapperStyled } from 'styles/utils';
import {
  BackgroundStyled,
  ContainerStyled,
  ParagraphStyled,
  ParagraphWrapperStyled
} from './AboutStyles';

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end']
  });
  const translateXNegative = useTransform(scrollYProgress, [0, 1], [-1000, 1]);
  const translateX = useTransform(scrollYProgress, [0, 1], [1000, 1]);

  return (
    <ContainerStyled ref={ref}>
      <CenterWrapperStyled>
        <BackgroundStyled style={{ opacity: scrollYProgress }} />

        <ParagraphWrapperStyled>
          <ParagraphStyled style={{ translateX }}>
            I enjoy building interactive websites that work smoothly across all
            devices.
          </ParagraphStyled>
          <ParagraphStyled style={{ translateX: translateXNegative }}>
            Clean design and carefully chosen tech stack is key to creating
            seamless experience for users.
          </ParagraphStyled>
        </ParagraphWrapperStyled>
      </CenterWrapperStyled>
    </ContainerStyled>
  );
};

export default About;
