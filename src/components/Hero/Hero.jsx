import React from 'react';
import { useTransform, useViewportScroll } from 'framer-motion';
import { CenterWrapperStyled } from 'styles/utils';
import {
  BallWrapper,
  BouncingBall,
  ContainerStyled,
  HeaderStyled,
  HeadingWrapperStyled,
  ParagraphStyled,
  ShineStyled,
  Svg
} from './HeroStyles';

const Hero = () => {
  const { scrollYProgress } = useViewportScroll();

  const scale = useTransform(scrollYProgress, [0, 1], [1, 8]);

  return (
    <ContainerStyled>
      <CenterWrapperStyled>
        <HeaderStyled
          style={{
            scale
          }}
        >
          <AnimatedHeading />
          <ParagraphStyled>Frontend Developer</ParagraphStyled>
        </HeaderStyled>
        <BallWrapper>
          <BouncingBall />
        </BallWrapper>
      </CenterWrapperStyled>
    </ContainerStyled>
  );
};

export default Hero;

const AnimatedHeading = () => {
  return (
    <HeadingWrapperStyled>
      <ShineStyled />

      <Svg viewBox="0 0 696 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16.84 2.79998H35.464L49.384 70H34.792L32.776 54.256V42.544L29.032 44.08H22.888L19.144 42.544V54.256L17.128 70H2.92001L16.84 2.79998ZM24.232 31.6H27.688L31.336 33.04L28.072 14.32H23.848L20.584 33.04L24.232 31.6Z"
          stroke="#011627"
          strokeWidth="4"
        />
        <path
          d="M63.8238 2.79998H96.0798V15.28H79.7598L75.9198 12.784L76.8798 34.96V37.84L75.9198 60.016L79.7598 57.52H96.0798V70H63.8238V2.79998Z"
          stroke="#011627"
          strokeWidth="4"
        />
        <path
          d="M111.794 2.79998H124.85V10.096L123.89 31.216L127.73 29.68H137.906L141.746 31.216L140.786 10.096V2.79998H153.842V70H140.786V61.744L141.746 40.624L137.906 42.16H127.73L123.89 40.624L124.85 61.744V70H111.794V2.79998Z"
          stroke="#011627"
          strokeWidth="4"
        />
        <path
          d="M172.429 2.79998H185.485V70H172.429V2.79998Z"
          stroke="#011627"
          strokeWidth="4"
        />
        <path
          d="M234.235 57.52H255.835L259.675 60.016L259.195 47.728L259.675 39.664L255.835 42.16H234.235V2.79998H271.771V15.28H250.267L246.427 12.784L247.003 25.072L246.427 31.792L271.771 27.76V70H234.235V57.52Z"
          stroke="#011627"
          strokeWidth="4"
        />
        <path
          d="M289.986 2.79998H303.042V10.096L302.082 31.216L305.922 29.68H316.098L319.938 31.216L318.978 10.096V2.79998H332.034V70H318.978V61.744L319.938 40.624L316.098 42.16H305.922L302.082 40.624L303.042 61.744V70H289.986V2.79998Z"
          stroke="#011627"
          strokeWidth="4"
        />
        <path
          d="M350.238 2.79998H384.798V15.28H366.174L362.333 12.784L363.294 20.848V24.016L362.333 32.176L366.174 29.68H377.31V42.16H366.174L362.333 39.664L363.294 48.016V51.76L362.333 60.016L366.174 57.52H384.798V70H350.238V2.79998Z"
          stroke="#011627"
          strokeWidth="4"
        />
        <path
          d="M413.201 25.84L414.545 46.96V70H401.489V2.79998H414.545V2.70398L432.113 46.96L430.769 25.84V2.79998H443.825V70H430.769V70.096L413.201 25.84Z"
          stroke="#011627"
          strokeWidth="4"
        />
        <path
          d="M462.021 2.79998H496.581V15.28H477.957L474.117 12.784L475.077 34.96V37.84L474.117 60.016L477.957 57.52H488.325L492.165 60.016L491.205 48.88L492.165 37.84L482.373 42.544V29.68H503.301V70H462.021V2.79998Z"
          stroke="#011627"
          strokeWidth="4"
        />
        <path
          d="M520.585 2.79998H555.145V15.28H536.521L532.681 12.784L533.641 20.848V24.016L532.681 32.176L536.521 29.68H547.657V42.16H536.521L532.681 39.664L533.641 48.016V51.76L532.681 60.016L536.521 57.52H555.145V70H520.585V2.79998Z"
          stroke="#011627"
          strokeWidth="4"
        />
        <path
          d="M571.836 2.79998H584.892V37.84L583.932 60.016L587.772 57.52H602.556V70H571.836V2.79998Z"
          stroke="#011627"
          strokeWidth="4"
        />
        <path
          d="M618.69 2.79998H631.746V70H618.69V2.79998Z"
          stroke="#011627"
          strokeWidth="4"
        />
        <path
          d="M660.419 2.79998H679.043L692.963 70H678.371L676.355 54.256V42.544L672.611 44.08H666.467L662.723 42.544V54.256L660.707 70H646.499L660.419 2.79998ZM667.811 31.6H671.267L674.915 33.04L671.651 14.32H667.427L664.163 33.04L667.811 31.6Z"
          stroke="#011627"
          strokeWidth="4"
        />
      </Svg>
    </HeadingWrapperStyled>
  );
};
