import React from 'react';
import { CenterWrapperStyled } from 'styles/utils';
import {
  ContainerStyled,
  HeadingStyled,
  ParagraphStyled,
  ParagraphWrapperStyled
} from './ChallengeStyles';

const Challenge = ({ text, isSolution }) => {
  return (
    <ContainerStyled isSolution={isSolution}>
      <CenterWrapperStyled>
        <HeadingStyled>
          {isSolution ? 'The solution' : 'The challenge'}
        </HeadingStyled>
        <Text text={text} />
      </CenterWrapperStyled>
    </ContainerStyled>
  );
};

export default Challenge;

const Text = ({ text }) => {
  return (
    <ParagraphWrapperStyled>
      {text.map(paragraph => (
        <ParagraphStyled>{paragraph}</ParagraphStyled>
      ))}
    </ParagraphWrapperStyled>
  );
};
