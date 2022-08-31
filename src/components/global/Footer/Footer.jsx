import React from 'react';
import { AnimatedLink } from 'components';
import { CenterWrapperStyled } from 'styles/utils';
import {
  ContainerStyled,
  ExternalsWrapperStyled,
  LineBreakStyled,
  SocialsWrapperStyled
} from './FooterStyles';

const Footer = () => {
  return (
    <ContainerStyled>
      <LineBreakStyled />
      <CenterWrapperStyled>
        <ExternalsWrapperStyled>
          <SocialsWrapperStyled>
            {socials.map(({ name, link }) => (
              <AnimatedLink
                key={name}
                href={link}
                text={name}
                target="_blank"
                rel="noreferrer"
                noArrow
              />
            ))}
          </SocialsWrapperStyled>
          <AnimatedLink
            href="mailto: achoshengelia@gmail.com"
            text="achoshengelia@gmail.com"
            noArrow
          />
        </ExternalsWrapperStyled>
        <AnimatedLink href="#" text="TOP" $arrowPosition="up" />
      </CenterWrapperStyled>
      <LineBreakStyled />
    </ContainerStyled>
  );
};

export default Footer;

const socials = [
  {
    name: 'Github',
    link: 'https://github.com/achoshengelia'
  },
  {
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/achidev/'
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/cape_sundew/'
  }
];
