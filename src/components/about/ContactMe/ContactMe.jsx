import { AnimatedLink } from 'components/global/AnimatedLink';
import React from 'react';
import { MainHeading } from 'styles/typography';
import { CenterWrapperStyled, OverlayStyled } from 'styles/utils';
import { ContainerStyled } from './ContactMeStyles';

const ContactMe = () => {
  return (
    <ContainerStyled>
      <CenterWrapperStyled>
        <MainHeading $isDark slideUp>
          Want to send me a message?
        </MainHeading>
        <AnimatedLink text="Let's talk" to="/#projects" $isDark />
      </CenterWrapperStyled>
      <OverlayStyled />
    </ContainerStyled>
  );
};

export default ContactMe;
