import React from 'react';
import { graphql } from 'gatsby';
import { Cover, Info } from 'components';

const ProjectTemplate = props => {
  return (
    <main style={{ backgroundColor: 'black', height: '200vh' }}>
      <Info />
      <Cover />
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
