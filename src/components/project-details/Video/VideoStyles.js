import styled from 'styled-components';

export const VideoStyled = styled.video`
  width: 100vw;
  height: 100vh;
`;

export const ContainerStyled = styled.section`
  min-height: 100vh;
  background-color: ${props => props.theme.colors.text.main};
  border-radius: 2rem 2rem 0 0;
  padding: 5rem 3rem;
  margin-top: 8rem;
`;
