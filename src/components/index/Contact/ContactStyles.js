import styled from 'styled-components';
import { CenterWrapperStyled } from 'styles/utils';

export const ContainerStyled = styled.section`
  margin: 10rem 0;

  & > ${CenterWrapperStyled} {
    align-items: flex-start;
    justify-content: flex-start;
  }
`;
