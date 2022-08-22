import React from 'react';
import { graphql } from 'gatsby';
import { ChallengeSolution, Cover, Gallery, Info, Video } from 'components';

const ProjectTemplate = props => {
  return (
    <main style={{ backgroundColor: 'black' }}>
      <Info />
      <Cover />
      <ChallengeSolution />
      <Gallery />
      <ChallengeSolution isSolution />
      <Video />
    </main>
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
