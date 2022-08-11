import React from 'react';
import { Technologies } from 'components';
import { MainHeading } from 'styles/typography';
import { CenterWrapperStyled } from 'styles/utils';
import {
  ContainerStyled,
  HeaderStyled,
  SubTitleStyled,
  TextWrapperStyled,
  TimeStyled
} from './InfoStyles';

const Info = () => {
  return (
    <ContainerStyled>
      <CenterWrapperStyled>
        <HeaderStyled>
          <SubTitleStyled>Web Application</SubTitleStyled>
          <MainHeading>Zueinander Finden</MainHeading>
          <TimeStyled dateTime="2021">2021</TimeStyled>
          <Technologies
            technologies={[
              'next',
              'nest',
              'styled-components',
              'three.js',
              'i18Next',
              'postgreSQL',
              'mapbox',
              'axios'
            ]}
            dark
          />
          <TextWrapperStyled>
            <p>
              Zueinander (Finden) Trovasi was a mental health awareness raising
              campaign in South Tyrol. I, in collaboration with my friend, built
              the UI of the website. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Sit consectetur omnis provident voluptatum odit
              voluptatibus in qui pariatur doloribus modi ab, neque dolore
              tempora minima voluptate optio.
              <br />
              <br /> Labore inventore numquam sed exercitationem, officiis
              maiores repellendus deserunt. Vel natus quam expedita, ea dolorem,
              vero eius eos voluptatum voluptas dolorum accusantium maxime
              tenetur. Dolore illo deleniti fuga numquam similique voluptate
              velit deserunt, debitis porro tenetur ad libero reprehenderit.
            </p>
          </TextWrapperStyled>
        </HeaderStyled>
      </CenterWrapperStyled>
    </ContainerStyled>
  );
};

export default Info;
