import React from 'react';
import { ArrowIcon } from 'components';
import { ButtonStyled, CircleStyled } from './ButtonStyles';

const Button = ({ children }) => {
  return (
    <ButtonStyled type="submit">
      {children}
      <CircleStyled>
        <ArrowIcon />
      </CircleStyled>
    </ButtonStyled>
  );
};

export default Button;
