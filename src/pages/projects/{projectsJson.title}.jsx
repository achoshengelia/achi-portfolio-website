import React from 'react';
import { graphql } from 'gatsby';
import {
  ChallengeSolution,
  Cover,
  Externals,
  Gallery,
  Info,
  Video
} from 'components';

const ProjectTemplate = props => {
  return (
    <>
      <Info />
      <Cover />
      <ChallengeSolution />
      <Gallery />
      <ChallengeSolution isSolution />
      <Video />
      <Externals />
    </>
  );
};

export const query = graphql`
  query ($title: String) {
    projectsJson(title: { eq: $title }) {
      title
      technologies
    }
  }
`;

export default ProjectTemplate;
