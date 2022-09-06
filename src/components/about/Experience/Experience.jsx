import { AnimatedLink } from 'components/global/AnimatedLink';
import React from 'react';
import { MainHeading } from 'styles/typography';
import { CenterWrapperStyled } from 'styles/utils';
import {
  ContainerStyled,
  DescriptionStyled,
  ExperienceListStyled,
  ExperienceStyled,
  RoleYearStyled
} from './ExperienceStyles';

const Experience = () => {
  return (
    <ContainerStyled>
      <CenterWrapperStyled>
        <MainHeading $isDark>Experience</MainHeading>
        <ExperienceListStyled>
          {experiences.map(({ company, link, role, description }) => (
            <ExperienceStyled key={company}>
              <AnimatedLink
                href={link}
                text={company}
                target="_blank"
                rel="noreferrer"
                $isDark
              />
              <RoleYearStyled>{role}</RoleYearStyled>
              <DescriptionStyled>{description}</DescriptionStyled>
            </ExperienceStyled>
          ))}
        </ExperienceListStyled>
      </CenterWrapperStyled>
    </ContainerStyled>
  );
};

export default Experience;

const experiences = [
  {
    company: 'AltexSoft',
    link: 'https://www.altexsoft.com/',
    role: 'Frontend Developer / 2022 - Present',
    description:
      'I worked on a project with a team of 15 people. We were building a new platform for a travel agency that would have an integrated booking system, admin panel and authentication. My tasks varied from refactoring existing code, implementing various functionalities in admin panel and other pages, to building fully responsive sub-pages from scratch.'
  },
  {
    company: 'Freelance',
    link: '#',
    role: 'Frontend Developer / 2021 - Present',
    description:
      "I had a chance to work on different projects as a freelancer. I've built multiple portfolio websites using various tech stack and continue to take orders in my free time."
  },
  {
    company: 'Lenø Records',
    link: 'http://www.lenorecords.com/',
    role: 'Audio Engineer / 2019 - 2020',
    description:
      'I worked as an audio engineer before I switched my profession and became a web developer. My responsibilities included recording, editing, mixing, mastering, as well as doing live sound at concerts.'
  }
];
