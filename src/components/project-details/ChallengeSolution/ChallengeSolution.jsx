import React from 'react';
import { CenterWrapperStyled } from 'styles/utils';
import {
  ContainerStyled,
  HeadingStyled,
  ParagraphStyled,
  ParagraphWrapperStyled
} from './ChallengeSolutionStyles';

const ChallengeSolution = ({ isSolution }) => {
  return (
    <ContainerStyled isSolution={isSolution}>
      <CenterWrapperStyled>
        <HeadingStyled>
          {isSolution ? 'The solution' : 'The challenge'}
        </HeadingStyled>
        <Text />
      </CenterWrapperStyled>
    </ContainerStyled>
  );
};

export default ChallengeSolution;

const Text = () => {
  return (
    <ParagraphWrapperStyled>
      <ParagraphStyled>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est quas
        facilis nobis adipisci obcaecati saepe, accusantium iste placeat neque
        minus aliquam quisquam quae, in consequatur enim dignissimos id expedita
        doloribus.
      </ParagraphStyled>
      <ParagraphStyled>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est quas
        facilis nobis adipisci obcaecati saepe, accusantium iste placeat neque
        minus aliquam quisquam quae, in consequatur enim dignissimos id expedita
        doloribus.
      </ParagraphStyled>
    </ParagraphWrapperStyled>
  );
};
