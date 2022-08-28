import React from 'react';
import { graphql } from 'gatsby';
import { Challenge, Cover, Externals, Gallery, Info, Video } from 'components';

const ProjectTemplate = props => {
  const { projectsJson } = props.data;
  const { details, technologies, title } = projectsJson;
  const { info, cover, challenge, externals, gallery, video } = details;
  const infoProps = { info, technologies, title };

  return (
    <>
      <Info {...infoProps} />
      <Cover cover={cover} />
      <Challenge text={challenge} />
      <Gallery gallery={gallery} />
      <Video video={video} />
      <Externals externals={externals} />
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
        cover {
          bgColor
          src {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, quality: 100)
            }
          }
        }
        challenge
        gallery {
          alt
          src {
            childImageSharp {
              id
              gatsbyImageData(layout: FULL_WIDTH, quality: 100)
            }
          }
        }
        video {
          publicURL
        }
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
