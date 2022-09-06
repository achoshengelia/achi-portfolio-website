import React from 'react';
import { MainHeading } from 'styles/typography';
import { CenterWrapperStyled } from 'styles/utils';
import {
  ContainerStyled,
  SkillStyled,
  SkillsWrapperStyled
} from './SkillsStyles';

const Skills = () => {
  return (
    <ContainerStyled>
      <CenterWrapperStyled>
        <MainHeading $isDark>Skills</MainHeading>
        <SkillsWrapperStyled>
          {skills.map(skill => (
            <SkillStyled key={skill}>{skill}</SkillStyled>
          ))}
        </SkillsWrapperStyled>
      </CenterWrapperStyled>
    </ContainerStyled>
  );
};

export default Skills;

const skills = [
  'JavaScript',
  'TypeScript',
  'React.js',
  'Next.js',
  'Gatsby.js',
  'HTML',
  'CSS',
  'GIT'
];
