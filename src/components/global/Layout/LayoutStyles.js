import styled from 'styled-components';

export const MainStyled = styled.main`
  background-color: ${({ isDarkBackground, theme }) =>
    isDarkBackground ? theme.colors.text.main : null};
  margin-top: 8rem;

  & > * + * {
    margin-top: 20rem;
  }

  @media ${props => props.theme.breakpoints.md} {
    & > * + * {
      margin-top: 15rem;
    }
  }

  @media ${props => props.theme.breakpoints.sm} {
    & > * + * {
      margin-top: 10rem;
    }
  }
`;
