import React from 'react';
import { graphql } from 'gatsby';
import { Info } from 'components';

const ProjectTemplate = props => {
  return (
    <main>
      <Info />
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
