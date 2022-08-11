import styled from 'styled-components';
import { MainHeadingStyled } from 'styles/typography';
import { ContainerStyled as Technologies } from 'components/global/Technologies/TechnologiesStyles';

export const TextWrapperStyled = styled.div`
  font-size: 2rem;
`;

export const SubTitleStyled = styled.span`
  font-size: 2rem;
  opacity: 0.4;
`;

export const TimeStyled = styled.time`
  justify-self: end;
  opacity: 0.4;
  font-size: 2rem;
`;

export const HeaderStyled = styled.header`
  display: grid;
  gap: 5rem;
  grid-template-columns: 0.8fr 2fr 0.4fr;
  align-items: center;
  width: 100%;
  padding-top: 5rem;
`;

export const ContainerStyled = styled.section`
  & ${MainHeadingStyled} {
    color: ${props => props.theme.colors.text.main};
    font-family: Pescante, sans-serif;
    text-transform: uppercase;
    margin: 0;
  }

  & ${Technologies} {
    align-self: flex-start;
    margin-top: 0.8rem;
  }
`;
