import styled from 'styled-components';

export const CenterWrapperStyled = styled.div`
  height: 100%;
  width: 100%;
  padding: ${({ noPadding }) => (noPadding ? '0' : '0 2.5rem')};
  margin: 0 auto;
  max-width: 130rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${props => props.theme.breakpoints.md} {
    padding: 0 2.2rem;
  }

  @media ${props => props.theme.breakpoints.sm} {
    padding: 0 1.8rem;
  }

  @media ${props => props.theme.breakpoints.xs} {
    padding: 0 1.5rem;
  }
`;
