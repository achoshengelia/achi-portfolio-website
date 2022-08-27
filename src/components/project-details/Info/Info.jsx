import React from 'react';
import { Technologies } from 'components';
import { MainHeading } from 'styles/typography';
import { CenterWrapperStyled } from 'styles/utils';
import {
  ContainerStyled,
  AppTypeStyled,
  TextWrapperStyled,
  DateStyled
} from './InfoStyles';

const Info = ({ title, technologies, info }) => {
  const { date, appType, description } = info;

  return (
    <ContainerStyled>
      <CenterWrapperStyled>
        <AppTypeStyled>{appType}</AppTypeStyled>
        <MainHeading slideUp>{title}</MainHeading>
        <DateStyled dateTime={date}>{date}</DateStyled>
        <Technologies technologies={technologies} dark />
        <TextWrapperStyled>
          {description.map(paragraph => (
            <span key={paragraph}>{paragraph}</span>
          ))}
        </TextWrapperStyled>
      </CenterWrapperStyled>
    </ContainerStyled>
  );
};

export default Info;
