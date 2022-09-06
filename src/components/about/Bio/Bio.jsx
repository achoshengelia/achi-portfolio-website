import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { MainHeading } from 'styles/typography';
import { CenterWrapperStyled } from 'styles/utils';
import {
  ContainerStyled,
  ContentWrapperStyled,
  ImagesWrapperStyled,
  ParagraphStyled
} from './BioStyles';
import { AnimatedImage } from 'components';

const Bio = () => {
  return (
    <ContainerStyled>
      <CenterWrapperStyled>
        <MainHeading $isDark>Bio</MainHeading>
        <ContentWrapperStyled>
          <Text />
          <ImagesWrapperStyled>
            <AnimatedImage isStatic>
              <StaticImage
                src="../../../assets/media/achi-1.jpg"
                alt="picture of Achi Shengelia"
                quality={100}
              />
            </AnimatedImage>
            <AnimatedImage isStatic>
              <StaticImage
                src="../../../assets/media/achi-2.jpg"
                alt="picture of Achi Shengelia"
                quality={100}
              />
            </AnimatedImage>
          </ImagesWrapperStyled>
        </ContentWrapperStyled>
      </CenterWrapperStyled>
    </ContainerStyled>
  );
};

export default Bio;

const Text = () => {
  return (
    <ParagraphStyled>
      I am Achi Shengelia — a frontend developer, from Tbilisi, specialising in
      React. I started my journey to become a web developer at the end of 2020.
      Since I discovered coding, it has become my new passion and a professional
      interest. For me, having enthusiasm and joy are crucial factors when
      choosing a line of work, which is why I decided on this field.
      <br />
      <br />I try to keep up to date with new technologies and improve my
      knowledge in already established ones, in order to create flawless UIs, as
      well as to ease the workload for my teammates. At the moment, I have
      almost 2 years of experience (as a freelancer and working in a company)
      and I'm looking for new challenges.
    </ParagraphStyled>
  );
};
