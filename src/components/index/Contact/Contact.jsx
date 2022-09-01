import React from 'react';
import { MainHeading } from 'styles/typography';
import { CenterWrapperStyled } from 'styles/utils';
import Form from './Form/Form';
import { ContainerStyled } from './ContactStyles';

const Contact = () => {
  return (
    <ContainerStyled>
      <CenterWrapperStyled>
        <MainHeading>Send a message</MainHeading>
        <Form />
      </CenterWrapperStyled>
    </ContainerStyled>
  );
};

export default Contact;
