import React, { useRef } from 'react';
import { useScroll } from 'framer-motion';
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

  return (
    <ContainerStyled ref={ref}>
      <CenterWrapperStyled>
        <BackgroundStyled style={{ opacity: scrollYProgress }} />

        <ParagraphWrapperStyled
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <ParagraphStyled>
            I enjoy building interactive websites that work smoothly across all
            devices.
          </ParagraphStyled>
          <ParagraphStyled>
            Clean design and carefully chosen tech stack is key to creating
            seamless experience for users.
          </ParagraphStyled>
        </ParagraphWrapperStyled>
      </CenterWrapperStyled>
    </ContainerStyled>
  );
};

export default About;
