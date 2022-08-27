import React from 'react';
import { graphql } from 'gatsby';
import { Challenge, Cover, Externals, Gallery, Info, Video } from 'components';

const ProjectTemplate = props => {
  const { projectsJson } = props.data;
  const { details, technologies, title } = projectsJson;
  const infoProps = { info: details.info, technologies, title };

  return (
    <>
      <Info {...infoProps} />
      <Cover />
      <Challenge text={details.challenge} />
      <Gallery />
      <Video />
      <Externals externals={details.externals} />
    </>
  );
};

export const query = graphql`
  query ($title: String) {
    projectsJson(title: { eq: $title }) {
      title
      technologies
      details {
        info {
          appType
          date
          description
        }
        challenge
        externals {
          website
          repository
          nextProject
        }
      }
    }
  }
`;

export default ProjectTemplate;
