import styled from 'styled-components';
import { MainHeadingStyled } from 'styles/typography';

export const ContainerStyled = styled.section`
  position: relative;
  background-color: ${props => props.theme.colors.text.light};
  border-bottom-right-radius: 3rem;
  min-height: 30vh;
  margin-top: 20rem;
  padding-bottom: 20rem;

  & ${MainHeadingStyled} {
    text-align: center;
  }

  @media ${props => props.theme.breakpoints.sm} {
    margin-top: 10rem;
    padding-bottom: 10rem;
  }
`;
