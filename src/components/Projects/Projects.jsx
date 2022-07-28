import React from 'react';
import { MainHeading } from 'styles/typography';
import { CenterWrapperStyled } from 'styles/utils';
import Project from './Project/Project';
import { ContainerStyled } from './ProjectsStyles';

const Projects = () => {
  return (
    <ContainerStyled>
      <CenterWrapperStyled>
        <MainHeading>See my work</MainHeading>
      </CenterWrapperStyled>
    </ContainerStyled>
  );
};

export default Projects;
