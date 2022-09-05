import React from 'react';
import Lottie from 'lottie-react';
import clock from 'assets/lotties/clock.json';
import { TextGradientStyled } from 'styles/typography';
import { CenterWrapperStyled } from 'styles/utils';
import { ContainerStyled, ParagraphStyled, TabStyled } from './HeroStyles';

const Hero = () => {
  return (
    <ContainerStyled>
      <CenterWrapperStyled>
        <ParagraphStyled>
          <TabStyled /> The <TextGradientStyled>tech </TextGradientStyled>{' '}
          industry is rapidly shifting, improving and growing.{' '}
          <Lottie animationData={clock} /> I believe, as a developer, it is{' '}
          <TextGradientStyled>crucial</TextGradientStyled> to be able to keep up
          with the pace & <TextGradientStyled>contribute</TextGradientStyled> to
          the process.
        </ParagraphStyled>
      </CenterWrapperStyled>
    </ContainerStyled>
  );
};

export default Hero;
